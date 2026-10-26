# Proposal

## Why

網站主人希望帶著問題進來的人，在 1～2 頁內就拿到答案。目前非技術區的行動路線拆成好幾頁：`/basic/act/`（三件事）→ `/basic/check/`（兩個問題）→ `/basic/systems/*`（七個系統頁）→ `/basic/done/`（怎樣算處理完），讀者要點三、四次才走完，手機上來回換頁也容易迷路。把這條線合成單一頁 `/basic/act/`，讀者從三件事一路往下，就能找到自己的系統、複製詢問訊息、對照處理完的條件。

## What Changes

- `/basic/act/` 改為單一行動頁，由上而下：
  0. 標題正下方一行跳轉小字「跳到：選你的系統｜怎樣算處理完」（`<nav class="jump-line">`，分別連到 `#q1`、`#done`）。只佔一行，第一屏仍看得到前兩個步驟；想直接找自己系統或對照處理完條件的人，不用先往下滑過三個步驟。視覺是小字底線連結，但每個連結觸控高度 ≥44px，純 HTML／CSS。
  1. 現有的三個步驟（內容不變，原本指向 `/basic/done/` 的連結改成頁內 `#done`）。
  2. 頁內導覽列：一排跳到各段的按鈕，手機 390px 寬可換行，觸控目標 ≥44px。
  3. 原 `/basic/check/` 的兩個問題（`#q1`、`#q2`），選項改指向本頁各系統段落的錨點。
  4. 七個系統段落（`#wordpress`、`#drupal`、`#joomla`、`#shop`、`#cpanel`、`#plesk`、`#outsourced`），各為原生 `<details>`／`<summary>` 收合段落，內容照搬原系統頁；每段都有「該找誰」、可複製的詢問訊息（`AskVendor`）與連到 `#done` 的「怎樣算處理完」。
  5. 原 `/basic/done/` 的三段（`#done`、`#reopen`、`#no-owner`）整段搬入，維持一般段落、預設可見。
  6. 頁尾保留「要把技術細節交給你的工程師？」。
- 原頁內子錨點保留原 id：`#vendor`、`#unknown`（外包）、`#hosted`（商店）。合併後全頁沒有重複，因此不加前綴。
- 小段 JavaScript：載入、`hashchange`、點頁內連結時，若目標在 `<details>` 裡就打開所有祖先 `<details>`、捲動並聚焦；兩個問題維持一次顯示一題。尊重 `prefers-reduced-motion`。沒有 JavaScript 時兩題都顯示，錨點照常跳轉，所有段落可用原生 `<details>` 展開。
- `AskVendor`、`SafeVersions` 新增可選的 `idPrefix` 與標題層級參數，同一頁出現多次時 id 不重複；`AskVendor` 另新增 `inline` 參數，讓外觀不再綁在標題層級上。兩者指向 `/basic/done/` 的連結改為 `/basic/act/#done`。其他頁面不傳參數時行為不變。
- 刪除 `src/pages/basic/check.astro`、`src/pages/basic/done.astro`、`src/pages/basic/systems/*.astro`。
- 新增 `public/_redirects`（Cloudflare Workers static assets 支援），舊網址以 301 轉到 `/basic/act/` 對應錨點，有無結尾斜線都轉。不使用 Astro `redirects`（靜態輸出只會產生 meta refresh 頁）；`astro.config.mjs` 既有設定不動。
- 全站內部連結（`src/data/nav.ts` 非技術區選單、`/news/*` 的「我自己也有網站」、`/dev/detect/`、`/dev/eol/` 的下一步）改指新錨點；`src/data/images.yaml` 的 `page` 紀錄欄改為 `/basic/act/`；`docs/architecture.md` 路由表更新。

## Capabilities

### New Capabilities

（無）

### Modified Capabilities

- `basic-guide`：非技術區的檢查、各系統說明與處理完條件合併為單一行動頁 `/basic/act/`，舊網址轉址。

## Out of Scope

- 不新增或改寫任何事實、說法與詢問訊息內容；只搬移、調整標題層級與連結。
- `/basic/` 首頁、`/basic/what-happened/`、`/basic/faq/` 保留原樣。
- 不更換或刪除圖片；原系統頁、檢查頁的橫幅圖在新頁暫不使用。
- 不調整 `DESIGN.md` 視覺系統。

## Impact

- 修改 `src/pages/basic/act.astro`、`src/components/basic/AskVendor.astro`、`src/components/basic/SafeVersions.astro`、`src/data/nav.ts`、`src/data/images.yaml`、`src/pages/news/{wall,story,outages,brief,timeline,[slug]}.astro`、`src/pages/dev/detect.mdx`、`src/pages/dev/eol.mdx`、`docs/architecture.md`。
- 刪除 `src/pages/basic/check.astro`、`src/pages/basic/done.astro`、`src/pages/basic/systems/` 七頁。
- 新增 `public/_redirects`。
- sitemap 不再列出被刪除的頁面。純前端與內容變更，不影響內容 schema。
