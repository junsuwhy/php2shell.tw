# 雲端工作階段任務

可以交給雲端代理（Claude Code 雲端工作階段等）獨立執行的工作。每份任務自成一體。

## 共同規則（每個任務都適用）

1. 開工前先讀：`AGENTS.md`、`PRODUCT.md`、`docs/architecture.md`、`openspec/changes/add-site-architecture/`（proposal、design、tasks 與對應 specs）。
2. 從 `main` 開新分支 `cloud/<任務代號>`，完成後開 PR，PR 描述列出完成的 OpenSpec 任務編號與驗證方式。
3. **不要動**：`src/pages/index.astro`、`src/layouts/Base.astro`、`src/styles/global.css`、`src/components/TransferMenu.astro`、`.impeccable/`、`PRODUCT.md`。首頁與全站視覺由本機設計流程負責。
4. 各區頁面先用現有基礎樣式（global.css 的變數）做出清楚可讀的版面；三個身份區的視覺世界之後會統一套上，所以樣式寫在各頁或該區共用元件的 scoped style，不要新增全域樣式。
5. 圖片：需要插圖的地方在 `src/data/images.yaml` 新增 slot（照現有格式，含 prompt 與 alt），頁面用 `<ImageSlot id="…" />`，不要放任何實際圖片檔。
6. 內容只用 `docs/news/`、`docs/knowledge/`、`src/data/` 已有的資料；不確定就寫「待查證」，不要編造版本號、指令或數字。
7. 安全紅線：不得寫入攻擊步驟、exploit、payload 或可重現攻擊的內容；不得寫入 IP、本機路徑、連接埠、環境變數值、金鑰。
8. 完成前執行 `npm run build`，必須成功；commit 前 `git config core.hooksPath .githooks` 讓主機資訊掃描生效。
9. 全部台灣繁體中文。

## 任務清單

| 代號 | 檔案 | OpenSpec 任務 |
|---|---|---|
| dev-fix | [dev-fix-pages.md](dev-fix-pages.md) | 4.7–4.16 |
| basic-systems | [basic-system-pages.md](basic-system-pages.md) | 4.1–4.6 |
| news-data | [news-data-pages.md](news-data-pages.md) | 2.3、4.17–4.20 |
| glossary | [glossary-annotation.md](glossary-annotation.md) | 5.1–5.2 |
