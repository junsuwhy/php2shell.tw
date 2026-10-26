# Tasks

## 1. 開發者首頁 `/dev/`（dev-guide）

- [x] 1.1 hero 保留標題、事實副句、版號膠囊與三顆修補行動按鈕
- [x] 1.2 版號膠囊下加跳轉小字（`nav.jump-line`）：「版本對照」→ `#step-versions`、「選你的系統」→ `#step-platform`，分隔符號 `aria-hidden`；連結觸控高度 ≥44px，顏色跟著 hero 文字
- [x] 1.3 步驟 1「先看版本對照」：以 `<details open>` 嵌入 `VersionMatrix`（讀 `facts.yaml`），連到 `/dev/versions/` 看完整矩陣與 SAPI 排序
- [x] 1.4 步驟 2「選你的系統」：九個平台按鈕（含自行編譯）連到 `/dev/fix/*/`，高度 48px、可換行；附連結到 `/dev/am-i-affected/#source`
- [x] 1.5 移除底部「選你的平台」小字清單；名詞表說明保留
- [x] 1.6 不用 JavaScript；樣式沿用 `--line-dev` 等既有變數

## 2. 文件

- [x] 2.1 `docs/architecture.md` 的 `/dev/` 列改寫為兩步結構

## 3. 驗證

- [x] 3.1 `npm run build` 建置成功
- [x] 3.2 `dist/dev/index.html` 含 `#step-versions`、`#step-platform` 與九個 `/dev/fix/*/` 連結，且沒有重複 id
- [x] 3.3 `dist/dev/am-i-affected/index.html` 仍有 `id="verify"`
