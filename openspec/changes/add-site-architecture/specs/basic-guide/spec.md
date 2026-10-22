# Spec Delta

## Purpose

讓沒有技術背景的網站負責人用生活語言判斷自己的網站要不要處理，知道該找誰，並能直接把問廠商的訊息傳出去。

## ADDED Requirements

### Requirement: 非技術區以無術語頁面引導下一步

非技術區 SHALL 用比喻說明事件，並提供檢查精靈、草案所列系統頁、可複製的問廠商訊息與指定常見問題。每一頁 MUST 以「下一步做什麼」收尾。這些頁面 MUST NOT 出現 CVE、RCE、worker、SAPI。

#### Scenario: 非技術首頁

- **WHEN** 訪客開啟 `/basic/`
- **THEN** 頁面以「PHP 是餐廳廚房的主廚」這類比喻說明發生什麼事
- **AND** 頁面說明有多嚴重、為什麼許多網站在關門，以及讀者需要做的三件事
- **AND** 頁面結尾是下一步

#### Scenario: 檢查精靈

- **WHEN** 訪客在 `/basic/check/` 回答網站是誰架的、放在哪
- **THEN** 選到 WordPress、Drupal、Joomla、cPanel、Plesk、網路商店或外包／不知道誰做的時，分別進入對應系統頁

#### Scenario: WordPress

- **WHEN** 訪客開啟 `/basic/systems/wordpress/`
- **THEN** 頁面說明如何在後台的網站健康狀態查看 PHP 版本，以及該找誰
- **AND** 頁面寫明只更新 WordPress 本身不夠

#### Scenario: Drupal

- **WHEN** 訪客開啟 `/basic/systems/drupal/`
- **THEN** 頁面說明用後台的狀態報告查看 PHP 版本，以及該找誰

#### Scenario: Joomla

- **WHEN** 訪客開啟 `/basic/systems/joomla/`
- **THEN** 頁面說明用系統資訊查看 PHP 版本

#### Scenario: cPanel

- **WHEN** 訪客開啟 `/basic/systems/cpanel/`
- **THEN** 頁面說明在哪裡查看或切換 PHP 版本，以及何時要找主機商

#### Scenario: Plesk

- **WHEN** 訪客開啟 `/basic/systems/plesk/`
- **THEN** 頁面用非技術語言說明 Plesk 主機面板與 PHP 版本有關的下一步

#### Scenario: 網路商店

- **WHEN** 訪客開啟 `/basic/systems/shop/`
- **THEN** 頁面涵蓋 WooCommerce 與 Magento 這類商店
- **AND** 頁面說明 Shopify 這類代管平台由平台處理

#### Scenario: 外包或不知道誰做的

- **WHEN** 訪客開啟 `/basic/systems/outsourced/`
- **THEN** 頁面同時涵蓋外包廠商代管，以及讀者不知道網站是誰做的

#### Scenario: 該找誰、要確認什麼

- **WHEN** 訪客在系統頁或檢查頁看完自己的情況
- **THEN** 頁面用一般說明文字告訴讀者該找誰、要請對方確認哪幾件事（版本號、更新時間、是否重新啟動）
- **AND** 網站 MUST NOT 提供逐字複製的問廠商訊息範本

#### Scenario: 常見問題

- **WHEN** 訪客開啟 `/basic/faq/`
- **THEN** 頁面回答「我的手機會中毒嗎」、「網站關掉代表被駭了嗎」與「要不要改密碼」
- **AND** 答案不含 CVE、RCE、worker、SAPI，也不教攻擊

#### Scenario: 必要概念用比喻

- **WHEN** 非技術頁必須提到一個技術概念
- **THEN** 該處立刻用生活比喻解釋，而不是只留下專有名詞
