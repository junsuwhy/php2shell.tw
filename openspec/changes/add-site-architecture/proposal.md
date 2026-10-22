# Proposal

## Why

php2shell.tw 已有新聞摘要、知識庫與架構草案，但還沒有對外網站。三種讀者需要同一份查證過的事實，卻要不同的講法與下一步；若直接寫程式，容易加進草案沒有的功能，或寫進攻擊內容與主機資訊。本變更把 `docs/architecture.md` 收成可驗收的規格，作為實作的唯一範圍。

## What Changes

- 新增身份選擇首頁：記住選擇、不自動跳轉，三區頁首可切換，並依草案互相導流。
- 新增非技術區：無術語說明、檢查精靈、所列系統頁、可複製的問廠商訊息、指定常見問題；每頁以下一步收尾。
- 新增開發者區：版本矩陣、成因概念、各平台修補頁（固定「檢查 → 更新 → 重啟 → 驗證」）、緩解、偵測與舊版策略；不得含攻擊內容。
- 新增名詞自動標註：只作用於開發者內容，每頁首次出現才標，註解在段落下方；程式碼、標題、連結不標。
- 新增吃瓜區：懶人包、故事、可切換 UTC／台灣時間的時間軸、可篩選新聞牆、單則頁、關站名單、名言、說法分歧。
- 新增內容管線：`docs/news` 為 collection 並以 schema 驗證；事實、時間軸、名詞、關站、名言各一份 YAML；新增新聞不改程式碼；壞資料無法建置。
- 新增三套 design tokens，以 `data-persona` 切換共用骨架；視覺細節交 impeccable 產生 `DESIGN.md`。
- 以 Cloudflare Pages 部署：`main` 自動建置、PR 預覽；維持 pre-commit 掃描與 `.gitignore`，不得 commit 主機資訊。

## Capabilities

### New Capabilities

- `persona-gateway`：首頁選身份、記住選擇但不自動跳轉、各區切換與跨區導流，以及共用的關於頁與找不到頁。
- `basic-guide`：非技術區的無術語說明、檢查精靈、系統頁、問廠商訊息範本與常見問題。
- `dev-guide`：開發者區的版本矩陣、成因概念、各平台修補、緩解、偵測與舊版策略，且不含攻擊內容。
- `glossary-annotation`：名詞表自動標註每頁首次出現的詞，段落下方註解，非技術區不啟用。
- `onlooker-hub`：吃瓜區的懶人包、故事、時間軸、新聞牆、單則頁、關站名單、名言與說法分歧。
- `content-pipeline`：新聞 collection、結構化 YAML、來源頁，以及新增新聞免改程式碼、建置失敗擋壞資料。
- `persona-theming`：三套 design tokens 以 `data-persona` 切換、共用骨架，以及無障礙與動效、配色偏好。
- `deployment-and-hygiene`：Cloudflare Pages、PR 預覽、pre-commit 主機資訊掃描、`.gitignore`，以及不得 commit 主機資訊。

### Modified Capabilities

無。`openspec/specs` 目前沒有既有 capability。

## Impact

- 實作階段才會新增 Astro 靜態站、`src/data` 與 `src/content`。本提案不建立這些目錄。
- 讀取既有 `docs/news` 與 `docs/knowledge`。不為本變更改寫新聞正文。
- 部署目標為 Cloudflare Pages；推送 `main` 建置，PR 產生預覽。
- 沿用既有 `.gitignore` 與 `.githooks/pre-commit`，不放寬掃描。
- 色票、字體與元件細節不在本變更決定，改由 impeccable 寫入 `DESIGN.md`。
- 主規格在本變更歸檔時才併入 `openspec/specs`。

## Out of Scope

- 第二階段才做：Pagefind 靜態全文搜尋、`/news/rss.xml`。
- 不做英文版。網域 DNS 是否也在 Cloudflare 仍待決定，不影響本變更。
- 不提供攻擊、exploit 檢測，或掃描別人網站的工具。
- 除 GA4 流量統計外不收集訪客資料；不登入、不建後端、不即時抓取外部新聞。
- 不新增架構草案沒有的路由、互動或資料集。
