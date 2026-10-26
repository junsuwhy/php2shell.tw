# Proposal

## Why

讀者大量從社群分享點進來，而且多半用手機。目前手機版首頁第一屏幾乎被塗鴉主視覺和站名牌占滿，「請立即更新」與修補版本要捲過兩張很高的身份卡才看得到，網站老闆也找不到一個直接的「下一步」。另外，非技術區最重要的行動頁 `/basic/act/` 沒有可以直接複製的詢問訊息；首頁標題與描述對搜尋和社群分享不夠清楚；頁尾也還沒有社群帳號入口。

## What Changes

- 首頁把「重要：有用 PHP 的網站，請立即更新」公告移到身份卡之前，版本仍從 `src/data/facts.yaml` 的 `fixed` 產生，並加一顆醒目的主要按鈕「我有網站，現在該做什麼」連到 `/basic/act/`。
- 手機版（寬度 600px 以下）：主視覺改用原圖 21:9 比例（比 16:9 矮、塗鴉不被裁）、站名牌資訊行距縮小、四個修補版本排成一列、身份卡改成矮的橫條（圖縮成右側小方塊）。在約 390×844 的畫面上，不捲動就看得到公告、四個版本與主要按鈕。桌機版維持滿版主視覺與左側站名牌。
- `/basic/act/` 第二步放入共用的詢問訊息（`AskVendor`）。按鈕改名為「複製詢問訊息」，複製後按鈕與訊息下方都顯示「已複製」，並以 `aria-live` 通知螢幕閱讀器。Clipboard API 不可用時先試舊式複製，再不行就自動選取整段文字並提示手動複製。沒有 JavaScript 時不顯示按鈕，訊息文字照常可見、可選取。其他頁面的詢問訊息一併套用。
- 首頁 `<title>` 改為「PHP2Shell 漏洞懶人包：該怎麼更新、怎麼檢查｜php2shell.tw」；`Base.astro` 遇到已經以「｜php2shell.tw」結尾的標題不再重複加後綴。meta description 改成含「PHP2Shell 漏洞」「網站老闆」「工程師」的一句話。og 與 twitter 的 title／description 由同一處產生，保持一致（新增 `twitter:title`、`twitter:description`）。
- 頁尾加入 Instagram、Threads 連結（網址放在 `src/data/site.yaml` 的 `social`），另開新視窗並附無障礙標籤。

## Capabilities

### New Capabilities

- `site-metadata`：首頁標題、描述與社群分享資訊一致；頁尾提供社群帳號連結。

### Modified Capabilities

- `persona-gateway`：首頁第一屏優先顯示立即更新公告、修補版本與主要行動按鈕。
- `basic-guide`：行動頁提供可一鍵複製的詢問訊息，含回饋與後備做法。

## Out of Scope

- 不更換主視覺或身份卡圖片，也不調整 `DESIGN.md` 視覺系統。
- 不改詢問訊息的內容文字。
- 其他頁面的標題與描述、OG 分享圖不在本變更範圍。
- 不新增社群分享按鈕或嵌入社群貼文。

## Impact

- 修改 `src/pages/index.astro`、`src/components/HeroBanner.astro`、`src/components/basic/AskVendor.astro`、`src/pages/basic/act.astro`、`src/layouts/Base.astro`、`src/lib/data.ts`、`src/data/site.yaml`。
- 純前端與內容變更，不影響內容 schema 與建置流程。
