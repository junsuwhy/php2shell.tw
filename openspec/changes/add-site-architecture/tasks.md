# Tasks

## 1. 骨架

- [ ] 1.1 [persona-theming] 建立 Astro 靜態專案與共用版面骨架，以 `data-persona` 切換語意 token；臨時值只求可讀。驗證：三個身份值都能切換 token，靜態建置成功，減少動效時沒有掃描線等裝飾動畫。
- [x] 1.2 [persona-gateway] 建立首頁、`/basic/`、`/dev/`、`/news/`、`/about/` 與找不到頁的空路由，以及頁首切換身份入口。驗證：這些路徑都在靜態產出中，頁首可進到另外兩區。

## 2. 內容模型

- [x] 2.1 [content-pipeline] 新增 `facts`、`timeline`、`glossary`、`outages`、`quotes` 五份 YAML，並依草案欄位驗證。驗證：合法樣本可建置；時間軸缺欄位，或重要程度超出 1–3 時，建置失敗。
- [x] 2.2 [content-pipeline] 以 glob 把 `docs/news` 收成 collection，schema 對齊該目錄既有的 frontmatter，不另發明必填欄位。驗證：現有一則新聞可建置；去掉必填欄位的複本使建置失敗；只多加一則合法檔案、不改程式，新聞牆就多一則。
- [x] 2.3 [content-pipeline] 做出 `/sources/`，來源來自新聞 collection 與知識庫引用。驗證：頁面列出已收錄新聞的網址，且建置與瀏覽都不會即時抓取外部新聞。

## 3. 首頁

- [ ] 3.1 [persona-gateway] 完成首頁三張卡片、事件一句話、修補版本與最後更新時間，後兩項讀 `facts`。驗證：只改 `facts` 後首頁數字改變；三張卡片分別進入 `/basic/`、`/dev/`、`/news/`。
- [ ] 3.2 [persona-gateway] 把身份記在該瀏覽器，顯示「繼續上次的身份」，且不自動跳轉。驗證：再次開啟首頁仍停在首頁；沒有已存選擇時不顯示繼續；只用鍵盤也能選身份。
- [ ] 3.3 [persona-gateway] 接上三條跨區導流、關於頁與找不到頁。驗證：連結分別通往 `/dev/`、`/basic/`、`/basic/check/`；關於頁含目的、資料來源原則、免責，說明使用 GA4；`contact_email` 有值才顯示聯絡連結；找不到頁有三個身份入口。

## 4. 三區

- [x] 4.1 [basic-guide] 撰寫 `/basic/`：廚房主廚的比喻、嚴重性、為何關門、要做的三件事，頁尾是下一步。驗證：內文沒有 CVE、RCE、worker、SAPI。
- [x] 4.2 [basic-guide] 做 `/basic/check/` 檢查精靈，依「誰架的／放在哪」導到七個系統頁。驗證：WordPress、Drupal、Joomla、cPanel、Plesk、商店、外包或不清楚，都會進到對應頁，且沒有死路。
- [x] 4.3 [basic-guide] 撰寫 WordPress、Drupal、Joomla 系統頁，頁尾都是下一步。驗證：三頁分別說明網站健康狀態、狀態報告、系統資訊；WordPress 頁寫明只更新 WordPress 本身不夠。
- [x] 4.4 [basic-guide] 撰寫 cPanel 與 Plesk 系統頁，頁尾都是下一步。驗證：cPanel 頁說明在哪看或切換 PHP 版本，以及何時找主機商；Plesk 頁說明主機面板上的下一步。
- [x] 4.5 [basic-guide] 撰寫商店與外包系統頁，頁尾都是下一步。驗證：商店頁含 WooCommerce、Magento，並說明 Shopify 這類代管平台由平台處理；外包頁含不知道誰做的。
- [x] 4.6 [basic-guide] 做可一次複製的問廠商訊息，以及 FAQ 三題。驗證：複製不靠懸停；頁面有「手機會不會中毒」「關掉是否代表被駭」「要不要改密碼」；答案沒有禁用術語，也不附攻擊做法。
- [x] 4.7 [dev-guide] 撰寫 `/dev/`：TL;DR、版本矩陣、受影響 SAPI 風險排序、「現在立刻做」。驗證：版本矩陣只讀 `facts`；頁面沒有攻擊步驟、exploit 或 payload。
- [x] 4.8 [dev-guide] 撰寫成因頁與「是否受影響」頁。驗證：成因只含 OOM bailout 的半初始化或過期狀態，以及 session upload-progress、OPcache、fatal error backtrace，且不寫利用；另一頁說明 `php -v` 可能不同於 FPM 或 mod_php，並含回移植版號與容器映像。
- [x] 4.9 [dev-guide] 撰寫 Debian 與 Ubuntu 修補頁，順序為檢查、更新、重啟、驗證，指令可一次複製。驗證：兩頁都有這四段；Debian 含 Sury，Ubuntu 含 ondrej PPA；沒有攻擊內容。
- [x] 4.10 [dev-guide] 撰寫 RHEL 家族與 Alpine 修補頁，同樣四段，指令可一次複製。驗證：RHEL 頁含 Rocky、Alma，以及 remi 當天沒有更新時的處理；沒有攻擊內容。
- [x] 4.11 [dev-guide] 撰寫 Windows 與 Docker 修補頁，同樣四段，指令可一次複製。驗證：Windows 含官方 binary 與 IIS、XAMPP 等內建 php-cgi.exe；Docker 含重建映像、釘版本、重新部署與 Kubernetes；沒有攻擊內容。
- [x] 4.12 [dev-guide] 撰寫 macOS 與控制台修補頁，同樣四段，指令可一次複製。驗證：macOS 為 Homebrew 開發機；控制台含 cPanel 的 EA-PHP、Plesk、DirectAdmin；沒有攻擊內容。
- [x] 4.13 [dev-guide] 撰寫 Drupal 與 WordPress 工具頁，同樣四段，指令可一次複製。驗證：Drupal 含 drush、狀態報告、composer 平台需求與代管平台；WordPress 含 WP-CLI 與 Site Health；沒有攻擊內容。
- [x] 4.14 [dev-guide] 撰寫自行編譯頁，同樣四段。驗證：內容限 7.4、8.0、8.1 的官方最小回移植與編譯注意事項；沒有攻擊內容。
- [x] 4.15 [dev-guide] 撰寫緩解頁與偵測頁。驗證：緩解頁含官方暫時做法，以及不要做的 RLIMIT_AS、RLIMIT_DATA、ini_set、.user.ini；偵測頁含訊號、應變清單與日誌保全；沒有攻擊內容。
- [x] 4.16 [dev-guide] 撰寫舊版策略頁與 `/dev/glossary/`。驗證：舊版頁說明小於等於 8.1 的策略；名詞表讀 `glossary`，與全站標註是同一份。
- [x] 4.17 [onlooker-hub] 撰寫 `/news/` 懶人包與 `/news/story/`。驗證：懶人包有一句話、數字看板、最新五則，且時間軸精華只列出標記要出現的事件；故事依序含 2004、2024、AI、外洩、全球關站。
- [x] 4.18 [onlooker-hub] 做完整時間軸，可切換 UTC 與台灣時間。驗證：同一事件可對照 UTC 與台灣時間；精度只有日期的事件不出現補上的時分。
- [x] 4.19 [onlooker-hub] 做新聞牆篩選與單則摘要頁。驗證：可依語言、來源類型、標籤篩選；單則頁有摘要與原文連結。
- [x] 4.20 [onlooker-hub] 做關站名單、名言與說法分歧。驗證：前兩頁分別讀 `outages` 與 `quotes`，加一筆資料不必改程式；分歧頁並列各種說法，官方說法不拿來刪掉其他說法。

## 5. 名詞機制

- [x] 5.1 [glossary-annotation] 在建置時依詞與別名標註開發者內容，每頁只標第一次，並略過程式碼、標題、連結。驗證：同一頁第二次不標；這三類位置裡的詞不產生註解。
- [x] 5.2 [glossary-annotation] 讓標註呈現為底線，註解用 `note` 放在該段落下方；`/basic/` 不掛這段處理。驗證：窄視窗不懸停也讀得到註；任一非技術頁沒有自動標註。

## 6. 部署

- [ ] 6.1 [deployment-and-hygiene] 將靜態產出接到 Cloudflare Pages：推送 `main` 自動建置，PR 產生預覽。驗證：建置結果是靜態檔；站內沒有登入與後端；未設定 `PUBLIC_GA_MEASUREMENT_ID` 時產出不含追蹤程式，設定後只載入 GA4。
- [ ] 6.2 [deployment-and-hygiene] 確認 `.gitignore` 排除環境檔與本機設定，pre-commit 拒絕主機資訊，並註明新 clone 要啟用 `.githooks`。驗證：環境檔未被追蹤；放入一筆主機資訊時提交被拒，檢查後刪掉該筆，確認它沒有進入版本庫。
- [ ] 6.3 [persona-theming] 依 impeccable 產出 `DESIGN.md`（只含三區 token、字級與動效，不新增頁面）。驗證：檔案寫明三個身份世界的 token，且沒有草案以外的路由。
- [ ] 6.4 [persona-theming] 把三區 token 換成 `DESIGN.md` 的數值，並做無障礙整合檢查。驗證：三區色票與該檔一致；對比達 WCAG 2.2 AA；只用鍵盤可選身份並進入三區；`color-scheme` 與該世界一致（非技術區為亮、開發者區為暗）。
