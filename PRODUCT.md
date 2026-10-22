# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro（靜態輸出）+ MDX + Content Collections，部署於 Cloudflare Pages。使用者於 2026-10-22 確認。

## Users

台灣（及繁體中文圈）因 PHP2Shell 事件而來的三類訪客，進站先自選身份：

1. **非技術人員**：網站老闆、小店家、行政／主管、學校與機關承辦人。手上有網站（常見是 WordPress、Drupal、Joomla、cPanel／Plesk 虛擬主機、外包廠商代管），看到新聞很緊張，想知道「我的網站有沒有事、我該找誰、要說什麼」。
2. **軟體開發人員**：工程師、維運、站長、資安人員。需要可信的技術說明，以及 Debian／Ubuntu／RHEL／Windows／Docker／控制台／Drupal、WordPress 工具等各平台的具體修補、緩解與偵測步驟。
3. **吃瓜群眾**：關心科技新聞的一般人與業界人士，想看事件前因後果、時間軸、新聞彙整、八卦與名言。

## Product Purpose

用一個網站把 PHP2Shell 事件依受眾講清楚：讓非技術人員能採取正確行動、讓工程師快速修好系統、讓一般讀者看懂這起事件為何重要。成功指標：非技術人員能在幾分鐘內判斷要不要聯絡主機商並拿到可直接傳送的訊息；工程師能找到自己平台的修補步驟；新聞牆能隨事件發展快速更新。

## Positioning

台灣繁中、依身份分流、每個說法都附來源的單一入口。其他報導只服務一種讀者；本站同一份查證過的事實，以三種語氣與三種視覺世界呈現。

## Operating Context

- 新聞以 Markdown 檔加入 `docs/news/`，push 後自動建置；維護者會頻繁小量更新。
- 研究素材在 `docs/knowledge/`；核心事實、時間軸、名詞表以結構化資料集中管理。
- 讀者大量來自社群分享與手機。

## Capabilities and Constraints

- 純靜態，無登入、無後端；除 GA4 流量統計外不收集訪客資料。
- 不得包含任何攻擊步驟、exploit 或可重現攻擊的內容。
- 不得 commit 任何主機資訊（IP、路徑、環境變數、連接埠、金鑰）。
- 非技術區不用專有名詞；開發者區所有專有名詞需有註解。
- 時間同時標示 UTC 與台灣時間。
- 僅台灣繁中，不做英文版。
- 勘誤與聯絡透過站長 email（待提供）。
- 使用 Google Analytics 4（ID 待提供，經環境變數注入）；需提供隱私說明。

## Brand Commitments

- 網站名稱：**php2shell.tw**（頁首、分頁標題、社群分享卡都用這個名稱）。
- 不署名：只以「本站」自稱，不放個人或公司名稱與 logo；讀者透過站長 email 聯絡。
- 語氣：非技術區親切、像朋友解釋；開發者區精準、直接；吃瓜區**輕鬆但不嘲諷**——可以有梗與比喻，但不嘲笑維護團隊、研究者或受影響的網站。

## Evidence on Hand

- `docs/news/`：70 餘篇新聞、官方公告、政府機關與研究來源摘要（含網址與發布時間），持續增加。
- `docs/knowledge/08-platform-advisories.md`：各 Linux 發行版、Windows、Docker、控制台、Drupal／WordPress 的官方修補資訊。
- `src/data/`：核心事實、時間軸、名詞表、關站名單、名言的結構化資料。
- `docs/knowledge/`：總覽、時間軸、三種受眾素材、名詞表、說法分歧、來源總表。
- 不得杜撰：讀者見證、合作單位、統計數字、官方背書。

## Product Principles

1. 先給行動，再給解釋：每頁都以「下一步做什麼」收尾。
2. 每個事實可追溯：附來源，分歧處明講。
3. 同一份事實，三種講法：內容資料共用，呈現依身份分流。
4. 防守者立場：只教修補與偵測，不教攻擊。
5. 好更新：新增新聞不需要碰程式碼。

## Accessibility & Inclusion

WCAG 2.2 AA；行動裝置優先；名詞註解不能只靠 hover；尊重 `prefers-reduced-motion` 與 `prefers-color-scheme`；中文排版需處理標點與行長。
