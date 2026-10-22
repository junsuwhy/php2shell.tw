---
title: "Security advisory: Critical remote code execution vulnerabilities, update now"
title_zh: "安全公告：重大遠端程式碼執行漏洞，請立即更新"
source: PHP.net
source_type: 官方公告
url: https://www.php.net/archive/2026.php#2026-10-21-5
advisories:
  - https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w
  - https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp
author: PHP Security Team
published_at: "2026-10-21T14:00:00+00:00"
published_at_taipei: "2026-10-21 22:00 (UTC+8)"
time_precision: approximate
time_note: "官方排定 14:00 UTC 發布；Wikipedia 稱 GitHub advisory 於 13:34 UTC（提前 26 分鐘）先公開，該說法標有 citation needed。"
language: en
fetched_at: "2026-10-22"
tags: [官方, 修補, 緩解]
audience: [developer, non-technical]
---

## 摘要（翻譯）

PHP 8.5.12、8.4.27、8.3.36、8.2.35 修補兩個可能導致未授權遠端程式碼執行的重大漏洞。強烈建議所有 PHP 使用者立即更新。

## 誰有風險

所有服務網頁請求的 PHP 安裝：PHP-FPM、Apache + mod_php、php-cgi、FrankenPHP、LiteSpeed。**mod_php 風險最高**——已有展示：未驗證請求可在任何應用程式碼執行前觸發攻擊。

## 兩個漏洞

- **RCE via OOM corruption，CVE-2026-109618（GHSA-w8hw-w9fx-j79w）**：記憶體不足處理可能在內部請求資料只初始化一半時中斷 PHP，請求清理可能把無效資料當成有效。
- **RCE via stale global state，CVE-2026-109619（GHSA-6wmf-4rv5-p3rp）**：請求擁有的內部狀態可能在其記憶體被釋放後仍存活，同一 worker 處理的後續請求可能在正常初始化重設前使用這份過期狀態。

## 如何更新

- 更新至 8.5.12、8.4.27、8.3.36 或 8.2.35（含 Windows binaries）。
- Linux 發行版與 LTS 廠商已事先拿到修補，請找你的廠商。
- PHP 8.1 以前不再由 PHP 專案更新；有些發行版／LTS 廠商提供回移植。
- 依賴志工維護的 rpms.remirepo.net 者，請改用發行版套件或自行編譯——**該 repo 當天不會更新**。
- 鑑於嚴重性，為 **7.4、8.0、8.1 提供最小化原始碼回移植**。
- PHP 8.2 於 **2026-12-31** EOL。

## 無法立即更新時（只能降低特定路徑的曝險，不會讓系統安全）

CVE-2026-109618：
- `memory_limit=-1`，最好以應用程式無法覆寫的方式設定（如 FPM pool 或 Apache 設定中的 `php_admin_value`），並檢查沒有任何 pool、目錄或應用設定把有限值設回去。底層配置失敗仍可能走到漏洞路徑。
- 調低 `post_max_size`：不需上傳的設 8M，需要上傳的設 32M；`upload_max_filesize` 要小於 `post_max_size`。考慮在 web server／proxy 層限制解碼後請求大小、欄位數、multipart part 數、header 數與巢狀深度；這些限制也要涵蓋沒有可用 Content-Length 的請求。
- 用容器或 cgroup 限制當可用性邊界（最好只殺受影響的 worker）。**不要改用 `RLIMIT_AS` 或 `RLIMIT_DATA`，它們本身就可能造成漏洞所需的配置失敗。**

CVE-2026-109619：
- `session.upload_progress.enabled=0` 並重啟所有 worker。必須寫在請求解析前就生效的 php.ini、FPM pool 或伺服器設定；**`ini_set()` 或 FPM `.user.ini` 無效**。這只擋已確認的 session 路徑，擋不了其他變體。
- PHP 8.5：`fatal_error_backtraces=0` 並重啟所有 worker（只擋已確認的 backtrace 路徑）。
- 移除會在初始化前輸出診斷訊息的無效／棄用 per-request 設定。用 `error_reporting`、`display_errors` 或 `@` 隱藏診斷**沒有用**。
- 修掉攻擊者可觸及的致命錯誤與執行逾時（含 callback、上傳／匯入處理與清理中的失敗）。

> There are no complete mitigations, updating is the only safe choice.
