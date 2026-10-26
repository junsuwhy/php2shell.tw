# Tasks

## 1. 首頁第一屏（persona-gateway）

- [x] 1.1 立即更新公告移到身份卡之前，版本由 `facts.fixed` 產生，加上「我有網站，現在該做什麼」主要按鈕連到 `/basic/act/`
- [x] 1.2 手機版主視覺改 21:9、站名牌資訊縮小、四個版本排成一列，確保約 390×844 不捲動可見公告、版本與按鈕
- [x] 1.3 手機版身份卡改為矮的橫條，桌機版版面維持不變
- [x] 1.4 桌機（≥900px）首頁主視覺高度改跟視窗走（`clamp(340px, 100svh - 400px, 21:9 原高)`），圖以 `object-fit: cover` 裁上下、標題面板上下間距縮小，確保 1440×900、1280×800 不捲動可見公告、四個版本與按鈕

## 2. 複製詢問訊息（basic-guide）

- [x] 2.1 `AskVendor` 按鈕改為「複製詢問訊息」，沒有 JavaScript 時隱藏按鈕、文字照常可選取
- [x] 2.2 複製成功時顯示可見的「已複製」並以 `aria-live` 通知；Clipboard API 不可用時改用舊式複製，再不行則選取文字並提示手動複製
- [x] 2.3 `/basic/act/` 第二步放入詢問訊息，手機上步驟卡片號碼移到上方以保留寬度

## 3. 標題、描述與頁尾（site-metadata）

- [x] 3.1 首頁 `<title>` 改為新標題，`Base.astro` 遇到已含網站名稱後綴的標題不重複加
- [x] 3.2 首頁 meta description 改寫，og 與 twitter 的 title／description 由同一處產生
- [x] 3.3 `site.yaml` 新增 `social`，頁尾加入 Instagram、Threads 連結（另開新視窗、`rel="noopener"`、無障礙標籤）
- [x] 3.4 `npm run build` 建置成功
