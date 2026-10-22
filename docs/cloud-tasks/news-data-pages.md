# 任務 news-data：吃瓜區資料頁

先讀 [README.md](README.md) 的共同規則。

## 目標

完成 `/news/` 底下的資料驅動頁面與 `/sources/`：`/news/`（懶人包）、`timeline`、`wall`、`[slug]`（已有雛形，補完）、`outages`、`quotes`、`rumors`，以及 `/sources/`。`/news/story/`（長篇故事）可先做結構與段落，文字以 `docs/knowledge/04-for-onlookers.md` 為準。

## 素材

content collections（見 `src/content.config.ts`）：`news`、`timeline`、`outages`、`quotes`；說法分歧見 `docs/knowledge/06-discrepancies.md`。

## 要求

- 語氣：**輕鬆但不嘲諷**，可以有梗，但不嘲笑維護團隊、研究者或受影響網站。
- 時間軸：可切換 UTC／台灣時間；`precision: date-only` 的事件不得顯示補上的時分；`importance: 3` 的事件標為精華，懶人包首頁只列精華。
- 新聞牆：依語言、來源類型、標籤篩選（無 JS 時顯示全部，有 JS 時篩選）；卡片顯示來源、台灣時間、標題（有 title_zh 用 title_zh）。`fetch_status: failed` 的新聞要標示「未取得全文」。
- 關站名單：`php_confirmed: false` 的要清楚標示「與 PHP 的關聯未證實」。
- 說法打架頁：並列各說法與來源，官方說法不刪除其他說法。
- `/sources/`：從 news collection 自動列出所有來源，依 source_type 分組。
- 新增一筆 YAML 或一篇新聞 md 時，不需要改程式碼頁面就會更新。
