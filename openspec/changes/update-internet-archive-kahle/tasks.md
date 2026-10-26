# Tasks

## 1. 新聞

- [x] 1.1 新增 `docs/news/2026-10-22-0641-internet-archive-kahle-outage-update.md`，frontmatter 比照 news schema 與既有 X 貼文（`source_type: 官方社群貼文`、tags 用既有的「網站下線」「修補」）
- [x] 1.2 延伸報導的 Reuters factbox 改成與站上摘要一致（StreetInsider 轉載、轉載頁時間台灣 2026-10-21 23:05、電頭 Oct 22），移除 Investing.com
- [x] 1.3 原文節錄略去修補與測試所用工具的描述，保留「偵測到攻擊、短暫下線、修補後恢復」

## 2. 關站名單

- [x] 2.1 `internet-archive` 的 `php_confirmed` 改為 `true`，sources 加入新聞檔
- [x] 2.2 action 保留路透那句，補上 Kahle 說明；Mashable 那句改成「當時無法直接連結」；不寫遭入侵

## 3. 知識庫

- [x] 3.1 `04-for-onlookers.md`：檔案館與 Asana 拆列，檔案館改為已確認
- [x] 3.2 `06-discrepancies.md`：改寫成「跟 PHP 漏洞有沒有關」，註明 TechRadar 報導曾寫 not definitively linked（轉述，本站未收錄該篇全文），之後由官方說明釐清
- [x] 3.3 `07-sources.md`：Wikipedia 那列註明檔案館已有路透與官方說明可依
- [x] 3.4 搜尋 `docs/knowledge`、`src` 其他把檔案館寫成未確認的文字

## 4. 時間軸

- [x] 4.1 確認時間軸沒有單一受影響單位停機的條目，不新增

## 5. 驗證

- [x] 5.1 以 Node 24 執行 `npm run build` 驗證 schema 與來源檔名
- [x] 5.2 確認 `dist/news/outages/index.html` 的未證實筆數由 23 變 22
