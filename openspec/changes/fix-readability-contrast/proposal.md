# Proposal

Owner：大哥

## Why

taste-skill 的 inspect 工具在正式站找到三個可讀性問題：

1. `/basic/act/` 區域主選單的目前頁面「先做什麼」是白字配路線黃（#ffffff on #f2b705），對比只有 1.8:1。原本就寫了深字（`--on-line`），但 `.area-nav__list > li > a` 的選擇器權重比 `.area-nav a[aria-current='page']` 高，白字蓋過了深字。開發者區（綠）與事件始末（粉紅）的目前頁面也是同一條規則。
2. `/basic/act/` 1440px 與 768px 寬時，「直接傳給外包廠商的訊息」標題（h4）被判定 100% 被蓋住。這一頁沒有 sticky／fixed 元素，scroll-margin 只影響錨點捲動位置，都不是原因。標題在收合的「網站是外包的」段落（`<details class="sys">`）裡：新版 Chromium 收合 `<details>` 時用 `content-visibility: hidden` 藏內容，內容仍保有版面位置，疊在後面的段落底下，工具因此判定為被蓋住。實測收合時這個 h4 在頁面約 4900px 處仍有 43px 高的版面框，展開後沒有任何元素蓋住它，讀者實際上看不到被蓋的情況。各系統收合段落都有同樣情形。
3. `/dev/` 首頁 390px 寬時，hero 副句兩行用容器寬度縮字（`3.55cqi`），縮到約 12.7px，小於 13px。1440px 寬時步驟區與頁尾說明的段落寬約 720px，每行過長（工具估約 96 字）。

## What Changes

- `AreaNav.astro`：提高目前頁面規則的權重，讓三區目前頁面都用 `--on-line` 深字（含下拉選單內的目前頁面）；hover／focus 沿用同一個顏色，focus 外框改用 `--on-line`。
- `act.astro`：各系統收合段落在收合時把內容設為 `display: none`，不留版面位置；展開後照常顯示。
- `dev/index.astro`：
  - hero 副句字級改為 `clamp(0.8125rem, 3.55cqi, 1.0625rem)`，最小 13px；容器窄到放不下一行時改為換行，不再橫向溢出。
  - 步驟區段落與頁尾名詞表說明限制行寬 `60ch`（約 30 個中文字）；版本表、平台按鈕維持原寬度。

只改樣式，不改任何文案或內容。

## Capabilities

### New Capabilities

無。

### Modified Capabilities

無（只改樣式）。

## Out of Scope

- `arch.html` 不動。
- 其他頁面的行寬不在這次範圍。

## Impact

- 檔案：`src/components/AreaNav.astro`、`src/pages/basic/act.astro`、`src/pages/dev/index.astro`。
- 收合段落用 `display: none` 後，Chromium 的頁內搜尋（Ctrl+F）不會再自動展開收合段落找字；點選單或錨點連結仍會由頁面程式展開。
