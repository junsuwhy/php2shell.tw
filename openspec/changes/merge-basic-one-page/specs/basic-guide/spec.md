# Spec Delta

## Purpose

讓帶著問題進來的網站負責人，在 1～2 頁內拿到答案：從「你需要做的三件事」一路往下，就能找到自己的系統、該找誰、要傳的訊息，以及怎樣算處理完。

## ADDED Requirements

### Requirement: 非技術區行動路線合併為單一頁

`/basic/act/` SHALL 依序包含：三個步驟、頁內導覽列、兩個問題（`#q1`、`#q2`）、七個系統段落（`#wordpress`、`#drupal`、`#joomla`、`#shop`、`#cpanel`、`#plesk`、`#outsourced`），以及處理完條件（`#done`、`#reopen`、`#no-owner`）。每個系統段落 MUST 是原生 `<details>`／`<summary>`，並包含該找誰、可複製的詢問訊息與連到 `#done` 的連結。頁面內的 id MUST NOT 重複。

#### Scenario: 用錨點打開系統段落

- **WHEN** 訪客開啟 `/basic/act/#wordpress`，或在頁內點到指向 `#wordpress` 的連結
- **THEN** WordPress 段落展開、捲動到畫面上，焦點移到該段的 summary
- **AND** 偏好減少動態效果的訪客不會看到平滑捲動

#### Scenario: 錨點指向段落內部

- **WHEN** 訪客開啟 `/basic/act/#unknown`
- **THEN** 外包段落與其內部的「我不知道網站是誰做的」都可見並捲動到該處

#### Scenario: 回答問題

- **WHEN** 有 JavaScript 的訪客在問題 2 選「WordPress」
- **THEN** 不換頁，WordPress 段落展開並取得焦點

#### Scenario: 沒有 JavaScript

- **WHEN** 訪客的瀏覽器停用 JavaScript
- **THEN** 兩個問題都顯示，選項連結照常跳到頁內錨點
- **AND** 所有系統段落都能用原生 `<details>` 展開

#### Scenario: 手機導覽列

- **WHEN** 訪客在 390px 寬的手機上看頁內導覽列
- **THEN** 按鈕可換行顯示，每顆觸控目標至少 44px 高

### Requirement: 舊網址轉址到單一頁

被合併的 `/basic/check/`、`/basic/done/`、`/basic/systems/{wordpress,drupal,joomla,shop,cpanel,plesk,outsourced}/` SHALL 由 `public/_redirects` 以 301 轉到 `/basic/act/` 的對應錨點，有無結尾斜線都 MUST 轉址。這些網址 MUST NOT 再出現在 sitemap。

#### Scenario: 舊的系統頁

- **WHEN** 訪客開啟 `/basic/systems/drupal`
- **THEN** 伺服器回 301，導向 `/basic/act/#drupal`

#### Scenario: 舊的檢查頁

- **WHEN** 訪客開啟 `/basic/check/`
- **THEN** 伺服器回 301，導向 `/basic/act/#q1`

## MODIFIED Requirements

### Requirement: 非技術區以無術語頁面引導下一步

非技術區 SHALL 用比喻說明事件，並在 `/basic/act/` 提供兩個問題、各系統段落、可複製的詢問訊息與處理完條件，另有 `/basic/faq/` 指定常見問題。每一頁 MUST 以「下一步做什麼」或給工程師的連結收尾。這些頁面 MUST NOT 出現 CVE、RCE、worker、SAPI。

#### Scenario: 非技術首頁

- **WHEN** 訪客開啟 `/basic/`
- **THEN** 頁面以「PHP 是餐廳廚房的主廚」這類比喻說明發生什麼事
- **AND** 頁面說明有多嚴重、為什麼許多網站在關門，以及讀者需要做的三件事
- **AND** 頁面結尾是下一步

#### Scenario: 兩個問題

- **WHEN** 訪客在 `/basic/act/#q1` 回答誰管主機、能登入哪種後台
- **THEN** 選到 WordPress、Drupal、Joomla、cPanel、Plesk、網路商店或外包／不知道誰做的時，分別到本頁對應的系統段落

#### Scenario: WordPress

- **WHEN** 訪客展開 `/basic/act/#wordpress`
- **THEN** 段落說明如何在後台的網站健康狀態查看 PHP 版本，以及該找誰
- **AND** 段落寫明只更新 WordPress 本身不夠

#### Scenario: Drupal

- **WHEN** 訪客展開 `/basic/act/#drupal`
- **THEN** 段落說明用後台的狀態報告查看 PHP 版本，以及該找誰

#### Scenario: Joomla

- **WHEN** 訪客展開 `/basic/act/#joomla`
- **THEN** 段落說明用系統資訊查看 PHP 版本

#### Scenario: cPanel

- **WHEN** 訪客展開 `/basic/act/#cpanel`
- **THEN** 段落說明在哪裡查看或切換 PHP 版本，以及何時要找主機商

#### Scenario: Plesk

- **WHEN** 訪客展開 `/basic/act/#plesk`
- **THEN** 段落用非技術語言說明 Plesk 主機面板與 PHP 版本有關的下一步

#### Scenario: 網路商店

- **WHEN** 訪客展開 `/basic/act/#shop`
- **THEN** 段落涵蓋 WooCommerce 與 Magento 這類商店
- **AND** 段落說明 Shopify 這類代管平台由平台處理

#### Scenario: 外包或不知道誰做的

- **WHEN** 訪客展開 `/basic/act/#outsourced`
- **THEN** 段落同時涵蓋外包廠商代管，以及讀者不知道網站是誰做的

#### Scenario: 該找誰、要確認什麼

- **WHEN** 訪客在系統段落看完自己的情況
- **THEN** 段落告訴讀者該找誰，並提供可複製的詢問訊息（版本號、更新時間、是否重新啟動、是否檢查過異常）
- **AND** 段落連到 `#done`，讓讀者拿回覆對照處理完的條件

#### Scenario: 常見問題

- **WHEN** 訪客開啟 `/basic/faq/`
- **THEN** 頁面回答「我的手機會中毒嗎」、「網站關掉代表被駭了嗎」與「要不要改密碼」
- **AND** 答案不含 CVE、RCE、worker、SAPI，也不教攻擊

#### Scenario: 必要概念用比喻

- **WHEN** 非技術頁必須提到一個技術概念
- **THEN** 該處立刻用生活比喻解釋，而不是只留下專有名詞
