# Proposal

## Why

每一頁頁尾（`src/layouts/Base.astro` 的 `site-footer`）都顯示「資料更新 {facts.updated_at}」。這個日期是手動寫死在 `facts.yaml` 的，但網站其實一直在更新（新聞、時間軸隨時增加），日期常常沒跟著改。資安事件站的頁尾掛著舊日期，看起來像沒人管，反而降低可信度。大哥與團隊已同意拿掉這一行。

## What Changes

- 移除 `src/layouts/Base.astro` 頁尾的 `<p>資料更新 <span class="num">{facts.updated_at}</span></p>` 一行。
- 頁尾其他內容保留：「關於本站」、「資料來源」、「聯絡站長」（有設定 email 時）與社群帳號。
- 頁尾 CSS 為 flex 排版，移除後不會留下空白或間距問題，不調整。

## Capabilities

### New Capabilities

（無）

### Modified Capabilities

（無；現有 specs 與 `docs/architecture.md` 都沒有描述頁尾顯示資料更新日期）

## Out of Scope

- 不改 `src/data/facts.yaml` 的 `updated_at` 欄位、`src/lib/data.ts`、`src/content.config.ts`。
- 內容裡的日期顯示都不動：首頁「本站更新」、`/about/`「資料最後更新」、新聞頁「原文更新」等。
- `Base.astro` 的 `facts` import 仍被頁面 title／description 使用，保留。

## Impact

- 修改 `src/layouts/Base.astro`（全站每一頁的頁尾）。
- 新增 `openspec/changes/remove-footer-updated/`。
- 不影響內容 schema、路由與 sitemap。
