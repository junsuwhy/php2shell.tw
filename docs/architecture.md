# 網站架構（草案 v0.1）

> 狀態：架構規劃，尚未實作。實作前以 OpenSpec 變更 `add-site-architecture` 為準。
> 資料截止：2026-10-22。

## 1. 使用者旅程

```
          ┌──────────────── /  首頁：選身份 ────────────────┐
          │  修補版本 · 最後更新時間 · 事件始末（原 /news/ 首頁） │
          ▼                     ▼                         ▼
   /basic/ 非技術人員      /dev/ 軟體開發人員       /#what-happened 事件始末
   「我的網站有事嗎？」     「怎麼修、怎麼查」        → 懶人包、/news/* 各頁
```

- 首頁兩張大卡片選身份（「吃瓜群眾」已不是身份選項，事件始末直接放在首頁「請立即更新」下方）；選擇記在 localStorage，下次進站顯示「繼續上次的身份」但**不自動跳轉**（避免使用者卡住）。
- 每個區塊頁首都有「切換身份」入口，三區互相導流：
  - basic →「想看技術細節？給你的工程師這頁」→ /dev/
  - dev →「要跟老闆解釋？丟這頁給他」→ /basic/
  - /news/* →「我自己也有網站」→ /basic/act/#q1

## 2. 站點地圖

### 共用

| 路由 | 內容 |
|---|---|
| `/` | 身份選擇、事件一句話、目前修補版本、最後更新時間 |
| `/about/` | 網站目的、資料來源原則、免責聲明、勘誤回報方式 |
| `/sources/` | 所有參考來源（由 news collection 與 knowledge 產生） |
| `/404` | 兩種身份入口＋事件始末 |

### `/basic/` 非技術人員（明亮、親切、不講術語）

| 路由 | 內容 |
|---|---|
| `/basic/` | 發生什麼事（比喻：PHP＝餐廳廚房的主廚）、有多嚴重、為什麼全世界網站在關門、我需要做的三件事 |
| `/basic/what-happened/` | 發生什麼事（給非技術讀者的完整說明） |
| `/basic/act/` | **單一行動頁**，由上而下：三件事 → 頁內導覽 → 兩個問題（`#q1`、`#q2`）→ 各系統收合段落 → 怎樣算處理完（`#done`、`#reopen`、`#no-owner`）|
| `/basic/act/#wordpress` | WordPress：怎麼在後台看 PHP 版本（網站健康狀態）、該找誰、更新 WordPress 本身「不夠」 |
| `/basic/act/#drupal` | Drupal：後台「狀態報告」看 PHP 版本、該找誰 |
| `/basic/act/#joomla` | Joomla：系統資訊看 PHP 版本 |
| `/basic/act/#cpanel` | cPanel 虛擬主機：在哪看／切換 PHP 版本，何時要找主機商 |
| `/basic/act/#plesk` | Plesk 主機面板 |
| `/basic/act/#shop` | 網路商店（WooCommerce、Magento 等；`#hosted` 說明 Shopify 這類代管平台由平台處理） |
| `/basic/act/#outsourced` | 網站是外包廠商做的（`#vendor`）／不知道誰做的（`#unknown`） |
| `/basic/faq/` | 我的手機會中毒嗎？網站關掉代表被駭了嗎？要不要改密碼？ |

原則：不出現 CVE、RCE、worker、SAPI 等字；必要概念一律用比喻；每頁結尾都是「下一步做什麼」。

原本獨立的檢查頁、「怎樣算處理完」頁與七個系統頁已併入 `/basic/act/`，舊網址由 `public/_redirects` 以 301 轉到對應錨點（OpenSpec 變更 `merge-basic-one-page`）。

### `/dev/` 軟體開發人員（geek／hacker 風格）

| 路由 | 內容 |
|---|---|
| `/dev/` | TL;DR、版本矩陣、受影響 SAPI 風險排序、「現在立刻做」清單 |
| `/dev/root-cause/` | 成因概念（OOM bailout 留下半初始化／過期狀態；session upload-progress、OPcache、fatal error backtrace 三面向）——**只講概念，不講利用** |
| `/dev/am-i-affected/` | 判斷方法：`php -v` 與實際 FPM／mod_php 版本可能不同、發行版回移植版號判讀、容器映像 |
| `/dev/fix/debian/` | Debian（含 Sury 套件庫）|
| `/dev/fix/ubuntu/` | Ubuntu（含 ondrej PPA）|
| `/dev/fix/rhel/` | RHEL／Rocky／Alma（含 remi 當天無更新的處理）|
| `/dev/fix/alpine/` | Alpine |
| `/dev/fix/windows/` | Windows（官方 binary、IIS／XAMPP 等內建 php-cgi.exe）|
| `/dev/fix/docker/` | Docker／Kubernetes：重建映像、釘版本、重新部署 |
| `/dev/fix/macos/` | Homebrew（開發機）|
| `/dev/fix/panels/` | cPanel（EA-PHP）、Plesk、DirectAdmin |
| `/dev/fix/build-from-source/` | 7.4／8.0／8.1 官方最小回移植、自行編譯注意事項 |
| `/dev/mitigation/` | 無法立即升級時的官方暫時緩解（含「不要做」清單：RLIMIT_AS／RLIMIT_DATA、ini_set、.user.ini）|
| `/dev/detect/` | 偵測訊號、事件應變清單、日誌保全 |
| `/dev/eol/` | 舊版本（≤8.1）策略 |
| `/dev/glossary/` | 名詞表（同一份 glossary 資料）|

原則：**每個專有名詞第一次出現時，在下方顯示註解**（由 glossary 資料自動標註，見 §4）。指令區塊可一鍵複製；每個平台頁固定結構：檢查 → 更新 → 重啟 → 驗證。

### `/news/` 事件始末（新聞牆／專題；入口在首頁，不是身份選項）

| 路由 | 內容 |
|---|---|
| `/news/` | 轉址到首頁 `/#what-happened`（懶人包按鈕、六個子頁、最新消息） |
| `/news/story/` | 前因後果長篇故事（2004 → 2024 → AI → 外洩 → 全球關站）|
| `/news/timeline/` | 完整時間軸（UTC／台灣時間切換）|
| `/news/wall/` | 新聞牆：卡片瀑布流，可依語言、來源類型、標籤篩選 |
| `/news/[slug]/` | 單則新聞摘要頁＋原文連結（只有非中文來源；中文來源直接連原文）|
| `/news/outages/` | 預防性關站紀錄（標明不是受害名單）|

## 3. 內容模型（方便更新的關鍵）

| 資料 | 位置 | 格式 | 更新方式 |
|---|---|---|---|
| 新聞 | `docs/news/*.md` | Markdown + frontmatter | 新增一個檔案 → push → 自動建置 |
| 時間軸 | `src/data/timeline.yaml` | YAML 陣列 | 加一筆事件 |
| 核心事實 | `src/data/facts.yaml` | YAML | CVE、CVSS、修補版本、最後更新時間——全站引用，只改一處 |
| 名詞表 | `src/data/glossary.yaml` | YAML | 加一個詞，全站自動標註 |
| 關站名單 | `src/data/outages.yaml` | YAML | 加一筆 |
| 角色頁面 | `src/content/{basic,dev,story}/*.mdx` | MDX | 編輯文章 |

Astro content collection 以 glob loader 讀 `docs/news/`，用 zod schema 驗證 frontmatter；欄位缺漏時建置失敗，避免壞資料上線。

時間軸事件欄位草案：`at`（ISO，保留原時區）、`precision`（exact/approximate/date-only）、`title`、`summary`、`sources`（news 檔名或 URL）、`tags`、`importance`（1–3，決定是否出現在精華）。

名詞欄位草案：`term`、`aliases`、`plain`（一句白話，給 basic 用）、`note`（給 dev 的註解）、`see`（相關詞）。

## 4. 名詞註解機制（/dev/）

- 自訂 remark 外掛：建置時掃描 MDX 文字，比對 glossary 的 `term`／`aliases`，每頁**第一次出現**的詞包成 `<Term>`。
- 呈現：詞彙加底線標記，**該段落下方**列出「註」區塊（行動裝置不依賴 hover）。
- 程式碼區塊、標題、連結內不標註。
- `/basic/` 不啟用自動標註；改由寫作規則禁止術語。

## 5. 視覺方向（交由 impeccable 細化，寫入 DESIGN.md）

| 區塊 | 方向 | 關鍵字 |
|---|---|---|
| 首頁 | 中性、清楚的三選一 | 三張卡片各自預告其世界的風格 |
| basic | 明亮 | 暖色、大字、圓角、插圖、高對比、一頁一件事 |
| dev | geek／hacker | 深色、等寬字、終端機提示符、diff 樣式、掃描線點綴（克制） |
| news | 新聞牆／專題 | 報頭、卡片牆、時間軸、引言大字 |

三區共用：版面骨架、字級階層、無障礙（WCAG 2.2 AA、鍵盤可操作、`prefers-reduced-motion`、`prefers-color-scheme`）。每區以 `data-persona` 切換一組 design tokens。

## 6. 技術與部署

- Astro（靜態輸出）、MDX、TypeScript；不需要後端。
- Cloudflare Pages：push `main` 自動建置；PR 產生預覽網址。
- 搜尋：Pagefind（靜態全文搜尋，支援中文）——列為第二階段。
- RSS：`/news/rss.xml`（新聞牆訂閱）——第二階段。
- 分析：Google Analytics 4。Measurement ID 由 Cloudflare Pages 環境變數 `PUBLIC_GA_MEASUREMENT_ID` 注入（值不進 repo）；未設定時不載入 GA。`/about/` 需有隱私說明。
- 聯絡：`/about/` 與頁尾顯示站長聯絡 email，由 `src/data/site.yaml` 的 `contact_email` 設定（待站長提供，未設定時不顯示）。

## 7. 不做的事

- 不提供任何攻擊、檢測 exploit 或「掃描別人網站」的工具。
- 不收集訪客資料、不需要登入。
- 不即時抓外部新聞（新聞由人工／代理審核後以 md 檔加入）。

## 8. 已決定

- 不做英文版，僅台灣繁中。
- 勘誤與聯絡：站長 email（待提供）。
- 分析：Google Analytics 4（ID 待提供）。

## 9. 待決定

- 網域 DNS 是否也在 Cloudflare。
