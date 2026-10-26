# Tasks

## 1. 元件（basic-guide）

- [x] 1.1 `AskVendor` 新增可選 `idPrefix`、`inline`，標題層級支援 4；`aria-labelledby` 跟著 id；連結改為 `/basic/act/#done`
- [x] 1.2 `SafeVersions` 新增可選 `idPrefix` 與 `level`；連結改為 `/basic/act/#done`
- [x] 1.3 其他頁面不傳參數時輸出不變

## 2. 單一行動頁 `/basic/act/`（basic-guide）

- [x] 2.1 三個步驟照舊，指向 `/basic/done/` 的連結改為 `#done`
- [x] 2.2 頁內導覽列，手機可換行、觸控目標 ≥44px
- [x] 2.3 兩個問題（`#q1`、`#q2`）搬入，選項改指向本頁錨點
- [x] 2.4 七個系統段落以 `<details>`／`<summary>` 呈現，內容照搬，含該找誰、詢問訊息、怎樣算處理完連結；保留 `#vendor`、`#unknown`、`#hosted`
- [x] 2.5 `#done`、`#reopen`、`#no-owner` 三段搬入，版本號由 `facts.fixed` 產生
- [x] 2.6 JavaScript：依錨點打開祖先 `<details>`、捲動並聚焦；問題一次一題；尊重 `prefers-reduced-motion`；沒有 JavaScript 時全部可用
- [x] 2.7 頁尾保留給工程師的連結

## 3. 刪頁、轉址與連結

- [x] 3.1 刪除 `check.astro`、`done.astro`、`systems/*.astro`
- [x] 3.2 新增 `public/_redirects`，舊網址（有無結尾斜線）301 到新錨點
- [x] 3.3 `nav.ts`、`/news/*`、`/dev/detect/`、`/dev/eol/`、`images.yaml`、`docs/architecture.md` 改指新網址
- [x] 3.4 `grep` 確認 `src`、`docs` 沒有殘留舊網址（`_redirects`、OpenSpec 提案與歷史任務說明除外）

## 4. 驗證

- [x] 4.1 `npm run build` 建置成功
- [x] 4.2 `dist/_redirects` 存在；`dist/basic/act/index.html` 含所有錨點 id，且沒有重複 id
- [x] 4.3 `dist/sitemap-*.xml` 不含 `/basic/systems/`、`/basic/done/`、`/basic/check/`
