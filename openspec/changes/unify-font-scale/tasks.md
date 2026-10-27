# Tasks

## 1. 字級變數

- [x] 1.1 `global.css` 的 `:root` 定義 `--fs-display`、`--fs-heading`、`--fs-lead`、`--fs-body`、`--fs-small`，`body` 改用 `--fs-body`

## 2. 套用到全站

- [x] 2.1 共用版面：`Base.astro`、`DevDoc.astro`、`TransferMenu.astro`、`CampaignLanding.astro`
- [x] 2.2 首頁：`index.astro`、`news/WhatHappened.astro`（例外照提案保留）
- [x] 2.3 非技術區：`BasicPage.astro`、`NextStep.astro`、`AskVendor.astro`、`SafeVersions.astro`、`basic/index.astro`、`basic/act.astro`、`basic/faq.astro`
- [x] 2.4 開發者區：`dev/index.astro`、`dev/glossary.astro`、`CommandBlock.astro`、`VersionMatrix.astro`、`SapiRisk.astro`、`glossary-annotation.css`
- [x] 2.5 事件始末與其他頁：`news/*.astro`、`NewsCard.astro`、`TimelineList.astro`、`SourceLinks.astro`、`about.astro`、`sources.astro`
- [x] 2.6 搜尋 `src/` 確認除提案列出的例外外，沒有寫死的字級

## 3. 驗證

- [x] 3.1 以 Node 24 執行 `npm run build` 確認建置通過
- [x] 3.2 本機建置或 PR 預覽以 taste-skill inspect 複驗 `/`、`/basic/act/`、`/dev/` 的字級種類；確認 /dev/ hero 副句最小 13px、/dev/ 段落 60ch、主選單目前頁面深字維持不變
