// 名詞自動註解（OpenSpec capability: glossary-annotation）
//
// Sätteri mdast 外掛（Astro 預設的 Markdown／MDX 處理器，概念上等同 remark 外掛）。
// 建置時讀 src/data/glossary.yaml，比對 term 與 aliases：
// - 每頁只標註每個詞第一次出現的位置，包成 <dfn>，以 aria-describedby 指向註解。
// - 在該段落正下方插入「註」區塊（<details>，預設收合），列出這段新出現的詞與 note；不靠懸停。
// - 略過程式碼（行內與區塊）、標題、連結、表格、HTML 與 MDX 元件內的文字。
// - 只處理 include 判斷為開發者區的 MDX 檔；/basic/ 等其他檔案原樣輸出。
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { createMatcher } from './matcher.mjs';

/** 開發者區的 MDX：src/pages/dev/** 或 src/content/dev/**。 */
export const DEV_CONTENT = /[\\/]src[\\/](?:pages|content)[\\/]dev[\\/]/;

const DEFAULT_GLOSSARY = new URL('../../data/glossary.yaml', import.meta.url);
/** Vite 以專案根目錄解析的樣式路徑；只有實際產生註解的頁面才會載入。 */
const DEFAULT_STYLE = '/src/plugins/glossary/glossary-annotation.css';

/** 行內節點中可以往下找文字的容器。其他（連結、行內程式碼、HTML、JSX…）一律跳過。 */
const INLINE_CONTAINERS = new Set(['emphasis', 'strong', 'delete']);
/** 區塊節點中可以往下找段落的容器。標題、程式碼區塊、表格、JSX 元件不在其中。 */
const BLOCK_CONTAINERS = new Set(['root', 'blockquote', 'list', 'listItem', 'footnoteDefinition']);

export function loadGlossary(source = DEFAULT_GLOSSARY) {
  const entries = parse(readFileSync(source, 'utf8'));
  if (!Array.isArray(entries)) throw new Error('glossary.yaml 必須是陣列');
  return entries.filter((e) => e && e.id && e.term && e.note);
}

const slug = (id) => String(id).toLowerCase().replace(/[^a-z0-9_-]+/g, '-');
export const termId = (entry) => `gl-term-${slug(entry.id)}`;
export const noteId = (entry) => `gl-note-${slug(entry.id)}`;

const text = (value) => ({ type: 'text', value });

function termNode(hit) {
  return {
    type: 'emphasis',
    data: {
      hName: 'dfn',
      hProperties: {
        className: ['glossary-term'],
        id: termId(hit.entry),
        ariaDescribedBy: noteId(hit.entry),
      },
    },
    children: [text(hit.text)],
  };
}

function noteNode(hits) {
  const items = [];
  for (const hit of hits) {
    const { entry } = hit;
    const label = hit.text === entry.term ? entry.term : `${hit.text}（${entry.term}）`;
    items.push(
      { type: 'strong', data: { hName: 'dt', hProperties: { className: ['glossary-note__term'] } }, children: [text(label)] },
      { type: 'emphasis', data: { hName: 'dd', hProperties: { className: ['glossary-note__text'], id: noteId(entry) } }, children: [text(entry.note)] },
    );
  }
  // summary 用正文裡出現的寫法（例如「CVSS v4.0」而不是詞條正式名「CVSS」）。
  const summary = `註：${hits.map((hit) => hit.text).join('、')}`;
  return {
    type: 'blockquote',
    data: { hName: 'details', hProperties: { className: ['glossary-note'] } },
    children: [
      { type: 'paragraph', data: { hName: 'summary', hProperties: { className: ['glossary-note__summary'] } }, children: [text(summary)] },
      { type: 'paragraph', data: { hName: 'dl', hProperties: { className: ['glossary-note__list'] } }, children: items },
    ],
  };
}

/**
 * 建立外掛。回傳 Sätteri 的 plugin factory：不屬於開發者區的檔案回傳 null，整個外掛不掛上。
 * @param {{ entries?: object[], glossaryPath?: string | URL, include?: (path: string) => boolean, style?: string | false }} [options]
 */
export default function glossaryAnnotation(options = {}) {
  const include = options.include ?? ((path) => DEV_CONTENT.test(path));
  const style = options.style ?? DEFAULT_STYLE;

  return ({ fileURL, sourceFormat }) => {
    if (sourceFormat !== 'mdx' || !fileURL) return null;
    const path = fileURLToPath(fileURL);
    if (!include(path)) return null;

    // 每份文件重讀名詞表，開發時改 YAML 不必重啟。
    const entries = options.entries ?? loadGlossary(options.glossaryPath);
    const { scan } = createMatcher(entries);

    return {
      name: 'glossary-annotation',
      before(root, ctx) {
        if (ctx.data.astro?.frontmatter?.glossary === false) return;
        const annotated = new Set();
        let any = false;

        /** 收集段落內可以標註的文字節點，依文件順序。 */
        const collectTexts = (node, out) => {
          for (const child of node.children ?? []) {
            if (child.type === 'text') out.push(child);
            else if (INLINE_CONTAINERS.has(child.type)) collectTexts(child, out);
          }
          return out;
        };

        const annotateParagraph = (paragraph) => {
          const fresh = [];
          for (const node of collectTexts(paragraph, [])) {
            const value = node.value;
            const hits = scan(value).filter((hit) => {
              if (annotated.has(hit.entry.id)) return false;
              annotated.add(hit.entry.id);
              return true;
            });
            if (!hits.length) continue;
            const parts = [];
            let cursor = 0;
            for (const hit of hits) {
              if (hit.start > cursor) parts.push(text(value.slice(cursor, hit.start)));
              parts.push(termNode(hit));
              cursor = hit.end;
            }
            if (cursor < value.length) parts.push(text(value.slice(cursor)));
            ctx.replaceNode(node, parts);
            fresh.push(...hits);
          }
          if (fresh.length) {
            ctx.insertAfter(paragraph, noteNode(fresh));
            any = true;
          }
        };

        const walk = (node) => {
          for (const child of node.children ?? []) {
            if (child.type === 'paragraph') annotateParagraph(child);
            else if (BLOCK_CONTAINERS.has(child.type)) walk(child);
          }
        };
        walk(root);

        if (any && style) ctx.prependChild(root, { raw: `import ${JSON.stringify(style)};` });
      },
    };
  };
}
