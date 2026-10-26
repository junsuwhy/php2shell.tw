# Tasks

## 1. 開發者首頁 `/dev/`（dev-guide）

- [x] 1.1 hero 保留標題、事實副句、版號膠囊與三顆修補行動按鈕
- [x] 1.2 版號膠囊下加跳轉小字（`nav.jump-line`）：「版本對照」→ `#step-versions`、「選你的系統」→ `#step-platform`，分隔符號 `aria-hidden`；連結觸控高度 ≥44px，顏色跟著 hero 文字
- [x] 1.3 步驟 1「先看版本對照」：以 `<details open>` 嵌入 `VersionMatrix`（讀 `facts.yaml`），連到 `/dev/versions/` 看完整矩陣與 SAPI 排序（已由 4.1、4.2 改為預設只列升級目標、完整表收合）
- [x] 1.4 步驟 2「選你的系統」：九個平台按鈕（含自行編譯）連到 `/dev/fix/*/`，高度 48px、可換行；附連結到 `/dev/am-i-affected/#source`
- [x] 1.5 移除底部「選你的平台」小字清單；名詞表說明保留
- [x] 1.6 不用 JavaScript；樣式沿用 `--line-dev` 等既有變數

## 2. 文件

- [x] 2.1 `docs/architecture.md` 的 `/dev/` 列改寫為兩步結構

## 3. 驗證

- [x] 3.1 `npm run build` 建置成功
- [x] 3.2 `dist/dev/index.html` 含 `#step-versions`、`#step-platform` 與九個 `/dev/fix/*/` 連結，且沒有重複 id
- [x] 3.3 `dist/dev/am-i-affected/index.html` 仍有 `id="verify"`

## 4. 步驟 1 精簡（產品經理決定：手機上讓步驟 2 早點出現）

- [x] 4.1 步驟 1 預設只列 `facts.fixed` 每個分支要升級到的版本（「分支 → 升級到 版號 以上」），下方一行「升級後重啟所有 worker」；不寫死版號、不新增事實或說法
- [x] 4.2 完整 `VersionMatrix` 原封不動移進預設收合的 `<details>`（無 `open`），summary 為「完整版本對照表」，觸控高度 ≥44px；移除原本「官方修補版本」summary
- [x] 4.3 保留 `/dev/versions/` 連結、hero 跳轉小字與步驟 2 不變
- [x] 4.4 更新 `specs/dev-guide/spec.md` 相關描述

## 5. 驗證（步驟 1 精簡）

- [ ] 5.1 `npm run build` 建置成功
- [ ] 5.2 `dist/dev/index.html` 的步驟 1 列出全部 `facts.fixed` 版號；`<details class="step__matrix">` 沒有 `open` 屬性，summary 為「完整版本對照表」，裡面的矩陣列數與 `/dev/versions/` 相同
- [ ] 5.3 手機 390px 寬時，步驟 2「選你的系統」約在 1～2 個螢幕內可見；展開 details 後完整表正常顯示、可橫向捲動
- [ ] 5.4 沒有 JavaScript 時 details 仍可展開收合；summary 鍵盤可操作且有焦點外框
