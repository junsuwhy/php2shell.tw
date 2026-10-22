# docs

php2shell.tw 的資料夾。現在這個階段只蒐集與整理知識，還沒有做成對外網頁。資料截止時間是 **2026-10-22**。

這裡的文字用繁體中文（台灣用語）。技術內容停在概念、影響、修補、緩解與偵測，不寫攻擊步驟、exploit、payload 或可重現的手法。

`news/` 由蒐集流程維護。整理知識時只讀、不改那些檔案。目錄裡的檔可能還在增加；下面的說明描述欄位與角色，不把檔名清單寫死。

## 目錄

```
docs/
├── README.md          本說明
├── news/              單篇來源摘要，一篇一個 Markdown
└── knowledge/         整理後的知識庫，之後做成三種受眾的網頁
    ├── 00-overview.md
    ├── 01-timeline.md
    ├── 02-for-non-technical.md
    ├── 03-for-developers.md
    ├── 04-for-onlookers.md
    ├── 05-glossary.md
    ├── 06-discrepancies.md
    └── 07-sources.md
```

## 三種受眾

| 受眾 | 知識檔 | 寫給誰 |
| --- | --- | --- |
| 非技術人員 | `knowledge/02-for-non-technical.md` | 網站老闆、主管、用虛擬主機的人、一般讀新聞的人 |
| 軟體開發人員 | `knowledge/03-for-developers.md` | 要盤點版本、上修補、看日誌的人 |
| 吃瓜群眾 | `knowledge/04-for-onlookers.md` | 想知道外洩、關站與金句、但不需要自己修伺服器的人 |

三種人都可以先讀 `00-overview.md`（一張卡）和 `01-timeline.md`（UTC 與台灣時間並列）。名詞在 `05-glossary.md`。來源互相矛盾或尚未裁定的，集中在 `06-discrepancies.md`，不要在受眾頁各自選邊。出處在 `07-sources.md`。

知識檔開頭的 frontmatter 固定四個欄位：`title`、`audience`（`non-technical`、`developer`、`onlooker`，可多值）、`updated_at`（這批是 `"2026-10-22"`）、`sources`（該篇引用到的 URL）。內文的重要事實後面標 `news/` 檔名或 URL。

## news 的 frontmatter

每篇新聞摘要開頭是 YAML。欄位定義如下。不是每篇都有每一個欄位：台灣媒體的標題本身就是中文時，常常沒有 `title_zh`；原文沒有更新時間時，沒有 `updated_at`。

| 欄位 | 定義 |
| --- | --- |
| `title` | 原文標題。 |
| `title_zh` | 中文標題。原文已是中文時可省略。 |
| `source` | 來源名稱，例如 PHP.net、BBC News、iThome。 |
| `source_type` | 來源類型的短語，例如官方公告、原始研究報告、政府資安機構公告、台灣科技媒體。 |
| `url` | 原文網址。 |
| `author` | 作者或單位。未知時沿用來源名稱。 |
| `published_at` | 發布時間。能到時分的用 ISO 8601（含時區或 `Z`）；來源只標日期的就只寫日期。 |
| `published_at_taipei` | 給人讀的台灣時間。精確度不夠時，在字串裡說明，例如「原文僅標日期」。 |
| `updated_at` | 原文後來的更新時間。沒有更新就省略。格式比照 `published_at`，偶爾會在字串裡加註這次更新改了什麼。 |
| `time_precision` | 時間有多準。本批使用的值：`exact`（有時分秒或到分鐘）、`approximate`（採用基金會等來源對齊後的時刻，頁面本身可能只標日期）、`date-only`（只有日期）。 |
| `language` | 原文語言。本批見過 `en`、`zh-TW`、`zh-HK`、`ja`。 |
| `fetched_at` | 本站抓取或整理這份摘要的日期，本批為 `2026-10-22`。 |
| `tags` | 主題標籤陣列，例如官方、外洩、修補、在野利用。 |
| `audience` | 這則摘要以後適合給誰看。值與知識庫相同：`non-technical`、`developer`、`onlooker`，可多值。 |

個別檔案另有選用欄位，不屬於上面的必備定義：`time_note`（時間為什麼這樣標）、`url_mailing_list`、`advisories`（GHSA 清單）、`fetch_status`（例如付費牆導致正文沒抓完）。

摘要正文是給知識庫用的濃縮，不是原文複製品。和別篇衝突的數字，保留在該篇，並在 `knowledge/06-discrepancies.md` 對照，不在新聞檔裡改掉。
