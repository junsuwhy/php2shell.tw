# Proposal

## Why

網站目前的 favicon 還是 Astro 預設圖示，分頁、書籤與加到主畫面時看不出是 php2shell.tw；社群帳號（Instagram／Threads）也需要同一個識別。本變更加入正式標誌，讓網站與社群大頭照一致。

## What Changes

- 新增標誌：石墨底的淺色盾牌，裡面是終端機提示字元 `>_`，綠色底線代表「已修補」。只用全站既有色票（graphite、floor、line-dev），不含文字、不使用駭客、骷髏等威脅意象。
- 取代 `public/favicon.svg` 與 `public/favicon.ico`（16／32／48，16px 用加粗簡化版以保持清楚），拿掉舊圖示的深色模式樣式。
- 新增 `apple-touch-icon.png`（180）、`icon-192.png`、`icon-512.png` 與 `site.webmanifest`。
- `Base.astro` 的 `<head>` 加上 ico 備援、apple-touch-icon 與 manifest 連結。

## Capabilities

### New Capabilities

- `site-branding`：網站圖示與社群大頭照使用同一個標誌，小尺寸仍可辨識。

### Modified Capabilities

無。

## Out of Scope

- 頁首文字標題、OG 分享圖與整體視覺系統（`DESIGN.md`）不在本變更範圍。
- 社群大頭照原始檔不放進版本庫。

## Impact

- 只新增或取代 `public/` 下的靜態檔，並修改 `src/layouts/Base.astro` 的 `<head>`。不影響內容與建置流程。
