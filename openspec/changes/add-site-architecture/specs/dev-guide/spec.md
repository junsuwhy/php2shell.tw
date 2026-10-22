# Spec Delta

## Purpose

讓工程師用同一套結構找到自己平台的修補、緩解與偵測做法，並只停留在概念與防守，不提供可重現的攻擊內容。

## ADDED Requirements

### Requirement: 開發者區以固定結構提供修補且不含攻擊內容

開發者區 SHALL 提供草案所列的技術頁。每個平台修補頁 MUST 依序包含檢查、更新、重啟、驗證。全區 MUST NOT 包含攻擊步驟、exploit、payload 或可重現攻擊的內容。指令區塊 MUST 可一次複製。

#### Scenario: 開發者首頁

- **WHEN** 訪客開啟 `/dev/`
- **THEN** 頁面包含 TL;DR、版本矩陣、受影響 SAPI 的風險排序，以及「現在立刻做」清單

#### Scenario: 成因只講概念

- **WHEN** 訪客開啟 `/dev/root-cause/`
- **THEN** 頁面只說明 OOM bailout 會留下半初始化或過期狀態
- **AND** 頁面只涵蓋 session upload-progress、OPcache、fatal error backtrace 三個面向，不說明如何利用

#### Scenario: 判斷是否受影響

- **WHEN** 訪客開啟 `/dev/am-i-affected/`
- **THEN** 頁面說明 `php -v` 與實際的 FPM 或 mod_php 版本可能不同
- **AND** 頁面說明發行版回移植版號怎麼判讀，以及容器映像要分開看

#### Scenario: Debian 與 Ubuntu

- **WHEN** 訪客開啟 `/dev/fix/debian/` 或 `/dev/fix/ubuntu/`
- **THEN** 兩頁都依序呈現檢查、更新、重啟、驗證
- **AND** Debian 頁包含 Sury 套件庫，Ubuntu 頁包含 ondrej PPA

#### Scenario: RHEL 家族與 Alpine

- **WHEN** 訪客開啟 `/dev/fix/rhel/` 或 `/dev/fix/alpine/`
- **THEN** 兩頁都依序呈現檢查、更新、重啟、驗證
- **AND** RHEL 頁涵蓋 Rocky、Alma，以及 remi 當天沒有更新時怎麼處理

#### Scenario: Windows 與 Docker

- **WHEN** 訪客開啟 `/dev/fix/windows/` 或 `/dev/fix/docker/`
- **THEN** 兩頁都依序呈現檢查、更新、重啟、驗證
- **AND** Windows 頁包含官方 binary，以及 IIS、XAMPP 等內建的 php-cgi.exe
- **AND** Docker 頁包含重建映像、釘版本與重新部署，並涵蓋 Kubernetes

#### Scenario: macOS 與控制台

- **WHEN** 訪客開啟 `/dev/fix/macos/` 或 `/dev/fix/panels/`
- **THEN** 兩頁都依序呈現檢查、更新、重啟、驗證
- **AND** macOS 頁說明 Homebrew 用於開發機
- **AND** 控制台頁包含 cPanel 的 EA-PHP、Plesk 與 DirectAdmin

#### Scenario: Drupal 與 WordPress 工具

- **WHEN** 訪客開啟 `/dev/fix/drupal/` 或 `/dev/fix/wordpress/`
- **THEN** 兩頁都依序呈現檢查、更新、重啟、驗證
- **AND** Drupal 頁包含 drush 檢查環境、狀態報告、composer 平台需求與代管平台
- **AND** WordPress 頁包含 WP-CLI 檢查與 Site Health

#### Scenario: 自行編譯

- **WHEN** 訪客開啟 `/dev/fix/build-from-source/`
- **THEN** 頁面依序呈現檢查、更新、重啟、驗證
- **AND** 頁面只說明 7.4、8.0、8.1 的官方最小回移植與自行編譯注意事項

#### Scenario: 暫時緩解與不要做的事

- **WHEN** 訪客開啟 `/dev/mitigation/`
- **THEN** 頁面說明無法立即升級時的官方暫時緩解
- **AND** 頁面列出不要做的項目：RLIMIT_AS、RLIMIT_DATA、ini_set、.user.ini

#### Scenario: 偵測與舊版策略

- **WHEN** 訪客開啟 `/dev/detect/` 或 `/dev/eol/`
- **THEN** 偵測頁包含偵測訊號、事件應變清單與日誌保全
- **AND** 舊版頁說明小於等於 8.1 的版本策略

#### Scenario: 名詞表頁

- **WHEN** 訪客開啟 `/dev/glossary/`
- **THEN** 頁面呈現與全站自動標註相同的那一份名詞資料

#### Scenario: 指令可複製且沒有攻擊內容

- **WHEN** 訪客閱讀任一開發者區頁面
- **THEN** 指令區塊可以一次複製，且不依賴滑鼠懸停
- **AND** 頁面沒有攻擊步驟、exploit、payload 或可重現攻擊的內容
