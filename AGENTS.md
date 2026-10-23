# AGENTS.md — php2shell.tw

給所有 AI 代理（Claude Code、grok、Codex 等）與協作者的專案背景。開始任何工作前先讀完本檔。

## 專案是什麼

php2shell.tw 是一個以**繁體中文（台灣用語）**深入淺出說明 **PHP2Shell 事件**（CVE-2026-109618、CVE-2026-109619，2026-10-21 修補的 PHP 核心重大漏洞）的網站。

訪客進站先選身份（兩種），首頁下方另有「事件始末」：

| 角色 | 路由 | 風格 | 目標 |
|---|---|---|---|
| 非技術人員 | `/basic/` | 明亮、親切、大字 | 看懂嚴重性、確認自己的網站有沒有事、知道要找誰做什麼 |
| 軟體開發人員 | `/dev/` | geek／hacker、終端機感 | 技術成因、各平台修補步驟、緩解、偵測 |
| （事件始末，非身份選項）| 首頁 `/#what-happened`、`/news/*` | 新聞牆／專題 | 懶人包、前因後果、時間軸、新聞牆、關鍵發言、關站紀錄 |

完整架構見 [docs/architecture.md](docs/architecture.md)；產品定位見 [PRODUCT.md](PRODUCT.md)。

## 技術選型

- **Astro**（靜態輸出）+ Content Collections，部署到 **Cloudflare Pages**。
- 新聞資料來源是 `docs/news/*.md`（直接作為 Astro collection），**新增新聞＝新增一個 md 檔**。
- 時間軸、名詞解釋、核心事實都放在結構化資料檔（YAML），全站共用單一事實來源。

## 開發指令

```
npm install
npm run dev -- --background   # 背景啟動開發伺服器；用 npx astro dev stop / status / logs 管理
npm run build                 # 靜態輸出到 dist/，會用 schema 驗證所有內容
npx astro sync                # 只驗證內容與產生型別
```

- 本機需要 GA 時，複製 `.env.example` 為 `.env` 再填值；`.env` 不會被 commit。
- Astro 文件：https://docs.astro.build（routing、content collections、styling）。

## 目錄慣例

```
docs/news/        新聞摘要（每篇一檔，frontmatter 見 docs/README.md）
docs/knowledge/   研究用知識庫（寫網站內容的素材，不直接渲染）
docs/architecture.md  網站架構
openspec/         規格驅動開發（OpenSpec），變更提案放 openspec/changes/
PRODUCT.md        產品背景（impeccable 設計流程讀取）
DESIGN.md         視覺系統（由 impeccable 產生後才會存在）
src/content.config.ts  內容 schema（news、timeline、glossary、outages）
src/data/         facts.yaml（核心事實）、site.yaml（站台設定）、timeline/glossary/outages.yaml
src/pages/        路由；/basic/ /dev/ 兩個身份區＋/news/ 事件始末子頁，對應 docs/architecture.md
src/layouts/      Base.astro（以 data-persona 切換三種視覺世界）
```

## 寫作規則

1. **語言**：一律繁體中文、台灣用語（伺服器、程式碼、網路、資訊、軟體、影片）。避免中國用語（服务器、代码、网络、信息、软件、视频）。
2. **事實**：只寫有來源的事；每個重要數字或說法要能追到 `docs/news/` 的檔案或官方公告。來源說法互相矛盾時，以 PHP 官方公告為準，並參考 `docs/knowledge/06-discrepancies.md`。不確定就寫「待查證」。
3. **安全紅線**：網站與文件**不得**包含攻擊步驟、exploit、payload、記憶體利用手法、函式內部流程或任何可直接重現攻擊的內容。技術內容只到「成因概念、影響範圍、修補、緩解、偵測、應變」。
4. **非技術頁**：不用專有名詞；非用不可時要立刻用生活比喻解釋。
5. **開發者頁**：每個專有名詞都要在下方有註解（由 glossary 資料自動產生，不要手寫重複定義）。
6. **時間**：同時標示 UTC 與台灣時間（UTC+8）；原文只有日期就寫日期，不要補猜時間。

## 新增一則新聞

1. 在 `docs/news/` 新增 `YYYY-MM-DD-HHMM-來源-slug.md`（台灣時間；只有日期則省略 HHMM）。
2. frontmatter 照 `docs/README.md` 的欄位定義填，`url`、`published_at`（保留原始時區）、`published_at_taipei`、`time_precision` 必填。
3. 若是時間軸級的事件，同步在時間軸資料檔加一筆（路徑見 docs/architecture.md）。
4. 抓不到原文時加 `fetch_status: failed`，只寫標題可確認的內容。

## 隱私與主機資訊（嚴格）

**絕對不要 commit** 任何主機相關資訊：IP 位址、主機名稱、本機絕對路徑（如使用者家目錄）、環境變數值、連接埠、帳號、金鑰、token。

- 機密與本機設定放 `.env`／`*.local.*`，已列入 `.gitignore`。
- 文件範例需要 IP 時只用文件保留段（`192.0.2.0/24`、`198.51.100.0/24`、`203.0.113.0/24`）；路徑只寫通用路徑（如 `/etc/php/8.3/fpm/php.ini`），不要寫任何人的本機路徑。
- 已啟用 `.githooks/pre-commit` 掃描；新 clone 後執行 `git config core.hooksPath .githooks`。
- 不要提及開發伺服器的連接埠或部署帳號細節。

## 工具

- **OpenSpec**：功能變更先寫提案（`/opsx:propose`，或 grok／其他代理用 `openspec-propose` skill），核准後再實作，完成後 archive。規格文件用台灣繁中，結構標題與 SHALL/MUST 保留英文。
- **impeccable**（設計 skill）：做 UI 前先跑它的 context，讀 `PRODUCT.md`；視覺系統由它產生 `DESIGN.md`。三個角色是三個「視覺世界」，共用同一套版面骨架與無障礙基準。
- **grok CLI**：大量讀網頁、寫檔案（例如補新聞）可交給 `grok --prompt-file <檔>` 無頭模式處理，以節省 token；交辦時務必附上上面的安全紅線。

## Git

- 預設分支 `main`；commit 訊息用繁中或英文皆可，簡潔描述「為什麼」。
- commit 前確認 pre-commit 掃描通過；不要用 `--no-verify` 跳過。
