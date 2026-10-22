// 名詞比對：純函式，不依賴 Markdown 管線，方便單元測試。

/** 英數與底線視為「單字字元」；比對結果不能是較長英文識別字的一段。 */
const WORD = /[A-Za-z0-9_]/;
/** 連字號與點接上單字字元時，也算同一個識別字（例如 foo-FPM、session.upload）。 */
const JOINER = /[-.]/;

const isWord = (ch) => ch !== undefined && WORD.test(ch);

/**
 * 依名詞表建立比對器。
 * @param {{ id: string, term: string, aliases?: string[], note: string }[]} entries
 */
export function createMatcher(entries) {
  const variants = [];
  for (const entry of entries) {
    const seen = new Set();
    for (const text of [entry.term, ...(entry.aliases ?? [])]) {
      const value = String(text ?? '').trim();
      if (!value || seen.has(value)) continue;
      seen.add(value);
      variants.push({ text: value, entry });
    }
  }
  // 長詞優先：PHP-FPM 先於 FPM、session.upload_progress.enabled 先於 session。
  variants.sort((a, b) => b.text.length - a.text.length);

  /** 這個位置前一段是否會讓比對變成識別字的片段。 */
  const blockedBefore = (s, i) => {
    const prev = s[i - 1];
    if (isWord(prev)) return true;
    return prev !== undefined && JOINER.test(prev) && isWord(s[i - 2]);
  };
  const blockedAfter = (s, end) => {
    const next = s[end];
    if (isWord(next)) return true;
    return next !== undefined && JOINER.test(next) && isWord(s[end + 1]);
  };

  /**
   * 把一段文字切成「一般文字」與「命中」片段。命中片段帶 entry 與原文。
   * 已標註過的詞仍會吃掉那段文字（不再拆成較短的詞），但標記 seen。
   * @param {string} s
   */
  function scan(s) {
    const hits = [];
    let i = 0;
    while (i < s.length) {
      let found;
      for (const v of variants) {
        if (!s.startsWith(v.text, i)) continue;
        const end = i + v.text.length;
        if (isWord(v.text[0]) && blockedBefore(s, i)) continue;
        if (isWord(v.text[v.text.length - 1]) && blockedAfter(s, end)) continue;
        found = { start: i, end, text: v.text, entry: v.entry };
        break;
      }
      if (found) {
        hits.push(found);
        i = found.end;
      } else {
        i += 1;
      }
    }
    return hits;
  }

  return { scan };
}
