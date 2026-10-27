# Proposal

Owner：大哥

## Why

產品經理可讀性清單第 4 項：taste-skill 的 inspect 工具量到 `/`、`/basic/act/`、`/dev/` 各用了 11–14 種不同字級（例如 `/basic/act/`：13/14/15/16/17/18/19/20/21/22/24/44px；`/dev/`：13/14/15/17/18/19/20/21/22/24/46px）。原因是各頁面與元件各自寫死 px／rem 值（0.8125、0.875、0.9、0.9375、0.95、1、1.05、1.0625、1.125、1.1875、1.2、1.25、1.3、1.35、1.375、1.4、1.5、1.625、1.875、2rem 與多組不同的 clamp），相差 1px 的字級彼此相鄰，層級看不出來，也難以維護。

## What Changes

在 `src/styles/global.css` 的 `:root` 定義 5 個共用字級變數，全站頁面與元件改用這些變數，取代零碎的字級值。相近的字級併到最接近的一級，不大幅放大或縮小。

| 名稱 | 變數 | 值 | 用途 |
|---|---|---|---|
| display | `--fs-display` | `clamp(2rem, 6vw, 2.75rem)`（32–44px） | 各頁 h1、首頁「事件始末」大標、首頁身份卡名稱、懶人包數字看板 |
| heading | `--fs-heading` | `1.5rem`（24px） | h2 區段標題、/basic/act/ 問題與收合段落標題、首頁「請立即更新」標題與版號牌、→ 箭頭 |
| lead | `--fs-lead` | `1.1875rem`（19px） | 導言、h3 與小標、卡片標題、大按鈕文字、「下一步」等次標題、站名；**非技術區內文**（原本就是 19px） |
| body | `--fs-body` | `1.0625rem`（17px） | 全站內文（`body` 預設）、表單與一般按鈕、清單 |
| small | `--fs-small` | `0.9375rem`（15px） | 註記、來源、日期與中繼資料、標籤、表格、頁尾、程式碼區塊 |

- `display` 是唯一會隨視窗寬度變化的字級：同一個寬度下只有一個值（手機 32px、約 733px 以上 44px），沿用原本最多頁面使用的 h1 寫法。
- 合併原則：13／14／14.4／15.2px → small；16／16.8px → body；18／19.2／20／20.8／21px → lead；21.6／22／22.4／26／30px → heading；28–38、26–36、30–46、34–56px 的 h1 類 clamp → display。
- 三區不另外覆寫變數：非技術區「明亮、大字」的特性改用 `--fs-lead` 當內文字級表達（`BasicPage` 的 `.basic-page` 原本就是 19px）。字體、顏色、對比都不動。
- 內文與次要文字最小 15px，比原本最小的 13px 大。

只改樣式，不改任何文案或內容。

### 較明顯的變化

- 首頁「重要：有用 PHP 的網站，請立即更新」與「急著搞懂？先看懶人包」：桌機 32px → 24px（heading）。
- 首頁修補版號牌：桌機 30px → 24px；手機 18px → 19px；分支小字手機 12px → 15px。
- 開發者文件頁（DevDoc）與名詞表 h1：桌機 38px → 44px；新聞單篇 h1：36px → 44px（手機 26px → 32px）；懶人包 h1：56px → 44px。
- 原本 13px 的標籤、日期、時間軸類別膠囊：→ 15px。
- 首頁身份卡名稱：以 display 呈現，平板寬度（約 600–1100px）會比原本大；手機維持 24px。
- 非技術區 h3 與內文同為 19px，靠字重 800 區分。

### 例外（不套用 5 種字級）

| 位置 | 值 | 原因 |
|---|---|---|
| 首頁站名牌 h1（`index.astro` `.station__text h1`） | `clamp(2.5rem, 6.4vw, 5.25rem)`，手機 `2.25rem` | 品牌主視覺大標，等同 logo；併入 display 會從 84px 縮成 44px |
| 首頁身份卡出口號碼（`.exit__badge`） | `clamp(1.75rem, 3vw, 2.375rem)`，手機 `1.5rem` | 圓形號碼牌（`aria-hidden`），字級與圓的直徑綁定，放大會撐破圓形 |
| 首頁身份卡箭頭圖示（`.exit__arrow`） | `2.75rem`，平板 `2.25rem` | SVG 圖示，以 `1em` 決定圖示大小 |
| /dev/ hero 副句（`.sub__line`） | `clamp(0.8125rem, 3.55cqi, var(--fs-body))` | 已修好的容器寬度縮字，最小 13px、上限改用 body；維持不動 |
| 內文行內程式碼（DevDoc `:not(pre) > code`） | `0.9em` | 等寬字體看起來較大，用相對值跟著所在段落或標題縮放 |
| 開發模式圖片佔位框（`global.css` `.image-slot__id`／`__meta`） | `0.875rem`／`0.75rem` | 只在本機開發模式出現，正式站不會顯示 |

## Capabilities

### New Capabilities

無。

### Modified Capabilities

無（只改樣式）。

## Out of Scope

- `arch.html` 不動。
- 不調整行高、字重、字距、顏色、對比與版面寬度。
- 不另外為三個身份區覆寫字級變數。

## Impact

- 檔案：`src/styles/global.css`、`src/layouts/Base.astro`、`src/layouts/DevDoc.astro`、`src/components/` 下有字級的元件、`src/pages/` 下有字級的頁面、`src/plugins/glossary/glossary-annotation.css`。
- 已修好的項目維持：/dev/ hero 副句最小 13px、/dev/ 段落 `max-width: 60ch`、主選單目前頁面深字。
