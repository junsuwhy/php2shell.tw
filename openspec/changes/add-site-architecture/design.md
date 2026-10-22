# Design

## Context

見 proposal.md 的 Why。現況是還沒有網站程式：新聞在 `docs/news`，研究素材在 `docs/knowledge`，站點地圖以 `docs/architecture.md` 為準。行為契約在本變更的 specs。實作不得加草案沒有的路由或工具，不得寫入攻擊內容或主機資訊。

## Goals / Non-Goals

**Goals:**

- 用一個靜態站承載三個身份區，共用版面骨架，事實只維護一處。
- 新聞與 YAML 在建置時驗證；不合格就失敗。
- 名詞註解在建置後就在 HTML 裡，不靠懸停。
- 部署與提交檢查沿用 Cloudflare Pages 與既有的衛生鉤子。

**Non-Goals:**

- 不在本設計決定色票、字體或元件數值；那是 impeccable 的 `DESIGN.md`。
- 不把 `docs/knowledge` 原檔直接當成頁面。它是寫作素材。
- 不新增搜尋、RSS、英文版、登入或即時抓取。分析只接 GA4，且僅在設定環境變數時載入。

## Decisions

### 1. Astro 靜態輸出，加上 MDX 與 Content Collections

草案要的是無後端的檔案型網站。靜態輸出可以直接放到 Cloudflare Pages。

另案是伺服器渲染或自建 API。兩者都引入後端，也和「不即時抓新聞、純靜態」衝突，因此不採用。

### 2. `docs/news` 用 glob 讀取，不複製到別的目錄

新增新聞必須等於新增一個 Markdown。collection 直接讀 `docs/news`，frontmatter 用 schema 驗證。欄位對齊這個目錄已經在用的契約，不另發明一套必填欄位。缺必填或格式不合就讓建置失敗。

另案是把新聞搬進 `src/content`。研究用目錄和網站目錄會分成兩份，維護者容易只改到其中一邊。

### 3. 五份 YAML 是唯一事實來源

路徑依草案：

- `src/data/facts.yaml`：CVE、CVSS、修補版本、最後更新時間
- `src/data/timeline.yaml`：`at`（保留原時區）、`precision`（`exact`／`approximate`／`date-only`）、`title`、`summary`、`sources`、`tags`、`importance`（1–3）
- `src/data/glossary.yaml`：`term`、`aliases`、`plain`、`note`、`see`
- `src/data/outages.yaml`
- `src/data/quotes.yaml`

首頁的修補版本、最後更新時間，以及開發者區版本矩陣，都讀 `facts.yaml`。不在 MDX 再寫一份數字。

角色長文放 `src/content/basic`、`src/content/dev`、`src/content/story` 的 MDX。檢查精靈、新聞牆篩選、時間軸切換與複製按鈕是頁面上的互動，題庫與篩選結果仍來自上述資料，不對外部發請求。

另案是把時間軸和名詞寫在各篇文章裡。全站會出現對不上的版本與定義。

### 4. 名詞標註在建置時完成

自訂 remark 外掛掃描 MDX 文字，比對 `term` 與 `aliases`。每一頁只包第一次出現的詞，輸出底線與該段落下方的註解；註解用 `note`。`plain` 留給非技術寫作，不自動插進頁面。

外掛略過程式碼區塊、標題、連結。`/basic/` 的管線不掛這個外掛。

另案是瀏覽器端掃描。靜態 HTML 會先閃過未標註的正文，沒有懸停的裝置也比較難做穩，因此不採用。

### 5. `data-persona` 切換 token，不拆成三個站

三區共用版面骨架與字級階層。`data-persona` 只切換語意 token（背景、文字、字體角色）。首頁保持中性，三張卡片各自預告該世界：非技術區明亮暖色、開發者區深色終端機感、吃瓜區報頭與卡片牆。

身份決定視覺世界。頁面宣告與該世界一致的 `color-scheme`（非技術區為亮、開發者區為暗），讓瀏覽器介面跟著世界走。不做草案沒有的全域明暗切換器。`prefers-reduced-motion` 關掉掃描線等裝飾動效。具體色票等 `DESIGN.md`；在該檔寫入前，臨時值只要能讀、對比達到 WCAG 2.2 AA，不當成視覺定案。

另案是三套獨立版型。跨區導流與無障礙基準會各走各的，維護成本也更高。

### 6. 身份存在瀏覽器本地，不自動跳轉

用 localStorage 記住身份。下次進首頁只顯示「繼續上次的身份」。沒有已存選擇、或儲存不可用時，就只顯示三張卡片。兩種情況都不自動導向。

另案是用 cookie 在進站時導走。靜態站沒有必要的伺服器，而且會造成草案禁止的自動跳轉。

### 7. 分歧頁並列，官方說法不拿來刪掉其他說法

`/news/rumors/` 的內容來自說法分歧素材。若 PHP 官方公告已有說法，頁面標出官方說法，其他說法仍留在頁上。不改寫成只有一個結論。

### 8. Cloudflare Pages 與既有衛生檢查

推送 `main` 建置靜態目錄；PR 使用 Pages 的預覽。建置指令只負責靜態輸出，不啟動常駐服務。

`.gitignore` 已排除環境檔與本機設定，`.githooks/pre-commit` 已會拒絕主機資訊。本變更沿用，不放寬規則，也不在文件裡寫主機資訊實例。新 clone 要將鉤子路徑指到 `.githooks`。提交時不跳過鉤子。

另案是改放別的靜態主機。草案已指定 Cloudflare Pages，預覽網址也靠它的 PR 整合，因此不另選。

## Risks / Trade-offs

- [名詞表命中日常用詞，正文被過度標註] → 只比對完整詞與別名，略過程式碼、標題、連結，每頁只標第一次；別名維持夠具體。
- [非技術頁仍出現術語] → `/basic/` 不掛標註外掛，並用禁用詞（CVE、RCE、worker、SAPI）做內容檢查。
- [修補版本在各頁寫死後對不上] → 數字只讀 `facts.yaml`。
- [開發者頁寫成可重現的攻擊說明] → 成因只留草案點名的概念；驗收時確認沒有攻擊步驟、exploit 或 payload。
- [範例把主機資訊寫進版本庫] → pre-commit 維持拒絕；規格與文件不放這類實例。
- [三套主題有一套對比不足] → 共用 AA 基準；`DESIGN.md` 進來後再覆核三區。
- [隱私模式無法使用本地儲存] → 退化成每次重選，仍然不跳轉。
- [既有新聞缺欄位導致第一次建置失敗] → schema 對齊現有契約；缺欄就補資料，不放寬成警告。
- [發行版套件庫當天沒有套件] → RHEL 頁保留 remi 無更新時的處理，不假設每個套件庫都已同步。

## Migration Plan

這是新站，沒有舊資料要搬。

1. 先讓合格的新聞與 YAML 能建出靜態檔，壞資料會失敗。
2. 再把 Cloudflare Pages 接到 `main` 與 PR 預覽。
3. 回溯時重新部署上一個成功的靜態版本，資料檔以版本庫還原。沒有資料庫要清。

## Decisions（2026-10-22 站長確認）

- 只做台灣繁中，不做英文版。
- 聯絡與勘誤：站長 email，設定於 `src/data/site.yaml` 的 `contact_email`（待提供；空值時不顯示）。
- 分析：Google Analytics 4。Measurement ID 由 Cloudflare Pages 環境變數 `PUBLIC_GA_MEASUREMENT_ID` 注入，值不進版本庫；未設定時不載入任何追蹤程式。`/about/` 須說明使用 GA4。

## Open Questions

- 網域 DNS 是否也在 Cloudflare（不影響本變更）。
