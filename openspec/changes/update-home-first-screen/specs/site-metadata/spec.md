# Spec Delta

## Purpose

讓首頁在搜尋結果與社群分享卡上一眼看出「這是 PHP2Shell 漏洞的懶人包、網站老闆與工程師都適用」，並讓訪客從頁尾找到本站的社群帳號。

## ADDED Requirements

### Requirement: 首頁標題與描述

首頁 `<title>` SHALL 為「PHP2Shell 漏洞懶人包：該怎麼更新、怎麼檢查｜php2shell.tw」，MUST NOT 被版面再加一次網站名稱後綴。meta description SHALL 是一句自然的句子，包含「PHP2Shell 漏洞」「網站老闆」「工程師」，長度約 120 字以內。`og:title`、`og:description`、`twitter:title`、`twitter:description` MUST 與 `<title>`、meta description 由同一處產生且內容一致。

#### Scenario: 搜尋結果與分頁標題

- **WHEN** 搜尋引擎或瀏覽器讀取首頁
- **THEN** 標題為「PHP2Shell 漏洞懶人包：該怎麼更新、怎麼檢查｜php2shell.tw」，只出現一次「php2shell.tw」

#### Scenario: 社群分享

- **WHEN** 有人把首頁網址貼到社群平台
- **THEN** 分享卡的標題與描述和首頁 `<title>`、meta description 相同

#### Scenario: 其他頁面

- **WHEN** 其他頁面傳入不含網站名稱的標題
- **THEN** 版面照舊加上「｜php2shell.tw」後綴

### Requirement: 頁尾社群帳號連結

每一頁的頁尾 SHALL 提供 Instagram 與 Threads 連結，網址由 `src/data/site.yaml` 的 `social` 管理並帶有標明來自頁尾的 utm 參數。連結 MUST 另開新視窗並加上 `rel="noopener"`，且 MUST 有說明「另開新視窗」的無障礙標籤。

#### Scenario: 點社群連結

- **WHEN** 訪客點頁尾的 Instagram 或 Threads
- **THEN** 在新視窗開啟 php2shell.tw 的帳號頁

#### Scenario: 螢幕閱讀器

- **WHEN** 螢幕閱讀器讀到頁尾社群連結
- **THEN** 讀出例如「php2shell.tw 的 Instagram（另開新視窗）」
