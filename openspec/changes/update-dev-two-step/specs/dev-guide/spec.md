# Spec Delta

## Purpose

讓帶著問題進來的工程師，從 `/dev/` 首頁兩步就到自己平台的修補頁：先看版本對照，再選你的系統。

## ADDED Requirements

### Requirement: 開發者首頁提供兩步路線

`/dev/` SHALL 在 hero 下方依序呈現標號的兩步：步驟 1「先看版本對照」（`#step-versions`）與步驟 2「選你的系統」（`#step-platform`）。步驟 1 MUST 預設只列出 `facts.yaml` 中每個已修補分支要升級到的版本，並把完整版本矩陣原封不動放在預設收合（不帶 `open`）的原生 `<details>` 裡，summary 為「完整版本對照表」且觸控高度至少 44px；步驟 1 MUST 連到 `/dev/versions/`。步驟 2 MUST 以按鈕連到 Debian、Ubuntu、RHEL、Alpine、Windows、macOS、Docker、控制台與自行編譯的修補頁。同一組平台連結 MUST NOT 在首頁出現兩份。頁面 MUST 在沒有 JavaScript 時完整可用。

#### Scenario: 首頁到修補頁

- **WHEN** 訪客開啟 `/dev/`，看完版本對照後在步驟 2 點「Ubuntu」
- **THEN** 進到 `/dev/fix/ubuntu/`，從首頁到答案共 2 頁

#### Scenario: 版本對照不寫死

- **WHEN** `facts.yaml` 的已修補版本更新
- **THEN** 首頁步驟 1 的升級目標清單、收合的版本矩陣與 hero 版號膠囊都跟著更新，不需改頁面

#### Scenario: 完整對照表預設收合

- **WHEN** 訪客開啟 `/dev/`
- **THEN** 步驟 1 顯示每個分支要升級到的版本，完整版本對照表預設收合
- **AND** 點「完整版本對照表」展開後，看到與 `/dev/versions/` 相同、不缺列的版本矩陣

#### Scenario: 手機上步驟 2 早點出現

- **WHEN** 訪客在 390px 寬的手機上開啟 `/dev/`
- **THEN** 步驟 2「選你的系統」約在 1～2 個螢幕內可見

#### Scenario: 跳轉小字

- **WHEN** 訪客點 hero 內「跳到：版本對照｜選你的系統」的任一連結
- **THEN** 頁面跳到對應步驟，且每個連結觸控高度至少 44px

#### Scenario: 手機平台按鈕

- **WHEN** 訪客在 390px 寬的手機上看步驟 2
- **THEN** 平台按鈕可換行顯示，每顆觸控目標至少 44px 高

## MODIFIED Requirements

### Requirement: 開發者區以固定結構提供修補且不含攻擊內容

開發者區 SHALL 提供草案所列的技術頁。每個平台修補頁 MUST 依序包含檢查、更新、重啟、驗證，且維持獨立頁。全區 MUST NOT 包含攻擊步驟、exploit、payload 或可重現攻擊的內容。指令區塊 MUST 可一次複製。

#### Scenario: 開發者首頁

- **WHEN** 訪客開啟 `/dev/`
- **THEN** 頁面包含 TL;DR 與修補行動按鈕（立刻修補、我受影響嗎、今天還不能升級）
- **AND** 頁面以「先看版本對照 → 選你的系統」兩步呈現版本矩陣與各平台修補頁入口
- **AND** 受影響 SAPI 的風險排序由步驟 1 連到 `/dev/versions/` 查看

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

#### Scenario: Drupal 與 WordPress 網站

- **WHEN** 訪客開啟 `/dev/am-i-affected/`
- **THEN** 頁面說明 Drupal、WordPress 只需更新底下的 PHP，不另設修補頁
- **AND** 頁面說明從 Drupal 狀態報告、WordPress Site Health 看網站實際的 PHP 版本

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
