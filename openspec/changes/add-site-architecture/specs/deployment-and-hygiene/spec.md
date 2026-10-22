# Spec Delta

## Purpose

讓網站以純靜態方式發到 Cloudflare Pages，正式與預覽建置都不收入主機資訊，除 GA4 流量統計外不收集訪客資料。

## ADDED Requirements

### Requirement: 靜態部署且拒絕主機資訊

網站 SHALL 以純靜態輸出部署到 Cloudflare Pages。推送 `main` MUST 自動建置，PR MUST 產生預覽網址。版本庫 MUST NOT 收入主機資訊，包含 IP、主機名稱、本機絕對路徑、環境變數值、連接埠、帳號、金鑰或 token。既有的 pre-commit 掃描 MUST 拒絕這類內容，`.gitignore` MUST 排除環境檔與本機設定。網站 MUST NOT 提供登入、後端、訪客資料收集、攻擊教學或掃描他人網站的工具。

#### Scenario: 推送主分支會建置

- **WHEN** 變更進入 `main`
- **THEN** Cloudflare Pages 自動建置純靜態產出

#### Scenario: PR 預覽

- **WHEN** 開啟或更新一個 PR
- **THEN** 產生該次變更的預覽網址，內容為靜態站

#### Scenario: pre-commit 拒絕主機資訊

- **WHEN** 準備提交的內容含有 IP、主機名稱、本機絕對路徑、環境變數值、連接埠、帳號、金鑰或 token
- **THEN** pre-commit 拒絕該次提交

#### Scenario: 環境檔不被追蹤

- **WHEN** 本機存在環境檔或僅供本機使用的設定檔
- **THEN** `.gitignore` 排除這些檔案，它們不會進入版本庫

#### Scenario: 只有 GA4，且由環境變數控制

- **WHEN** 建置環境未設定 `PUBLIC_GA_MEASUREMENT_ID`
- **THEN** 產出的頁面不含任何追蹤程式
- **AND** 網站沒有登入與後端

#### Scenario: GA4 ID 不進版本庫

- **WHEN** 正式環境需要 GA4
- **THEN** Measurement ID 只設定在 Cloudflare Pages 環境變數，版本庫只含 `.env.example` 的空白範本

#### Scenario: 沒有攻擊或掃描工具

- **WHEN** 訪客瀏覽全站
- **THEN** 沒有攻擊教學、exploit 檢測或掃描他人網站的工具
