---
title: "PHP2Shell 事件總覽"
audience: [non-technical, developer, onlooker]
updated_at: "2026-10-22"
sources:
  - https://www.php.net/archive/2026.php#2026-10-21-5
  - https://www.php.net/archive/2026.php#2026-10-20-1
  - https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w
  - https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp
  - https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/
  - https://www.wiz.io/blog/php2shell-php-rce
  - https://www.php2shell.com/
  - https://sansec.io/research/php2shell
  - https://www.imperva.com/blog/php2shell-vulnerability-updates/
  - https://calif.io/php2shell/
  - https://watchtowr.com/intelligence/php-cve-2026-109618-faq/
  - https://blog.cloudflare.com/php-vulnerabilities-waf-protection/
  - https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/
  - https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities
  - https://moda.gov.tw/ACS/press/news/press/21134
  - https://www.nbcnews.com/tech/security/critical-vulnerabilities-php-update-systems-rcna604751
---

# PHP2Shell 事件總覽

資料截止 2026-10-22。這裡只談事件是什麼、誰有風險、修補與現況，不寫攻擊步驟。細節時間見 [時間軸](01-timeline.md)，三種讀法見文末。

PHP2Shell（也有人寫成 PHP4Shell）是 PHP 語言本體的兩個重大漏洞，編號 CVE-2026-109618、CVE-2026-109619。還沒登入的人，有機會讓伺服器執行他指定的程式。問題不在 WordPress 或某一家購物車寫錯，而在 PHP 自己怎麼管理記憶體、怎麼處理嚴重錯誤。（`news/2026-10-21-2200-php-net-security-advisory.md`、`news/2026-10-21-1357-icsda-php2shell-patch-released.md`）

修補已於 **2026-10-21 14:00 UTC（台灣時間 22:00）** 發布。官方說法是：沒有完整的暫時解法，更新 PHP 是唯一安全的做法。

## 一張卡看懂

| 項目 | 內容 |
| --- | --- |
| 名稱 | PHP2Shell；社群亦有人稱 PHP4Shell |
| CVE | CVE-2026-109618、CVE-2026-109619 |
| GitHub 公告 | GHSA-w8hw-w9fx-j79w（RCE via OOM corruption）、GHSA-6wmf-4rv5-p3rp（RCE via stale global state） |
| 分數 | CVSS **v4.0 皆 9.2**。外洩貼文與 watchTowr 曾稱 10.0，那不是官方分數 |
| 弱點類型 | CWE-824（存取未初始化指標；Imperva 的歸類） |
| 後果 | 未授權遠端程式碼執行（RCE）。另已展示：讀取行程記憶體、worker 崩潰，以及讀到伺服器上的敏感檔內容 |
| 誰有風險 | 所有「用來回應網頁請求」的 PHP：PHP-FPM、Apache mod_php、php-cgi、FrankenPHP、LiteSpeed |
| 風險最高 | Apache **mod_php**。未驗證的請求可在任何應用程式碼之前觸發；預設設定下已展示完整 RCE |
| 已確認的另一條 | PHP-FPM 經應用層路徑亦確認可 RCE |
| 修補版本 | **8.5.12、8.4.27、8.3.36、8.2.35**（含 Windows 安裝包） |
| 舊版 | 7.4、8.0、8.1：官方最小化原始碼回移植，沒有新的官方安裝包。7.3 以前：現有資料沒有官方修補 |
| 8.2 壽命 | 安全支援到 **2026-12-31**，有修補仍應規劃離開這個分支 |
| 問題有多老 | 研究者稱相關程式可回溯到 PHP 5.4.0（2012）。Wiz：過去十年每個版本至少受其中一個影響。Imperva：並非每一版都逐一驗證 |
| 發現者 | Calif（Ryan Austin）、OpenAI（同日獨立回報）、Wiz。Cloudflare 的揭露名單另列 Quarkslab，見 [差異](06-discrepancies.md) |
| 公開時間 | 2026-10-21 14:00 UTC／台灣 22:00。原訂更晚，因 10/20 外洩而提前 |
| 修補規模 | 近 200 個檔案、逾 1 萬行（鉅亨網編譯《華爾街日報》） |
| 現況（2026-10-22） | 修補已發布。10/17 起蜜罐就有利用嘗試；10/21 多家感測器稱已在野利用，也有廠商當時在客戶端還沒看到。各國有預防性關站。台灣數位發展部資通安全署於 10/22 通報各機關與企業 |

## 兩個漏洞，用官方的話講

兩者都落在幾乎每個請求都會碰到的記憶體管理與錯誤處理，所以很難在不影響相容性、效能或擴充套件的前提下修好。（`news/2026-10-21-php-foundation-security-release-strengthening.md`）

**CVE-2026-109618**（記憶體不足造成的破壞）：PHP 碰到記憶體上限時，可能在內部請求資料只準備好一半的時候就中斷。後面的清理步驟可能把這份無效資料當成有效資料來用。

**CVE-2026-109619**（過期的全域狀態）：某一次請求持有的內部狀態，可能在記憶體已經釋放之後還留著。同一支 worker 接下一個請求時，可能在正常的初始化把它清掉之前就用到它。

同一類中斷，在三個地方被證明可以走到嚴重後果：session 的上傳進度、OPcache、致命錯誤的 backtrace。概念說明在 [給開發者](03-for-developers.md)，這裡不展開做法。

即使網站只是印出一行字，只要那一行由 PHP 處理，問題仍可能發生在你的程式開始之前。Wiz 在 WordPress、Drupal、Joomla 的官方 `latest` 容器映像上展示了未授權 RCE，並展示可以不執行程式碼、就經 `PHPSESSID` cookie 讀到行程記憶體（密碼、token、API 金鑰、憑證）。應用程式沒有呼叫 `session_start()` 也成立。（`news/2026-10-21-2159-wiz-php2shell-ai-uncovers-rce.md`）

Calif 經 Sansec 列出曾展示未授權 RCE 的應用：Magento、WordPress、Drupal、Joomla、MediaWiki、Roundcube、phpMyAdmin、Nextcloud、Laravel、Symfony、WHMCS。（`news/2026-10-21-sansec-php2shell-critical-rce.md`）

## 誰發現的

- **Calif**：Ryan Austin。2026-07-30 起參與 OpenAI 資助的 Patch the Planet 稽核（基金會的日期；其他說法見差異檔）。使用 GPT-5.6 Sol。08-11 回報。Calif 執行長 Thai Duong 當天致電 PHP 基金會的 Volker Dusch。（`news/2026-10-21-php-foundation-security-release-strengthening.md`、`news/2026-10-21-2240-cnyes-php-emergency-patch-heartbleed.md`）
- **OpenAI**：同一天（08-11）獨立回報同一根因。基金會說後來以 Daybreak Red 協助驗證回報。Codex Security 的 Amy Burnett 參與此事：新聞摘要沒有點名，此姓名依本站已查證整理。
- **Wiz**（Google 旗下）：Sagi Tzadik、Shir Tamari、Nir Ohfeld、Tomer Schwartz。使用 Wiz Atlas、Gemini 4 Argon、GPT-5.6 Sol。08-19 找到第一個問題，08-24 回報。（`news/2026-10-21-2159-wiz-php2shell-ai-uncovers-rce.md`、`news/2026-10-21-2240-cnyes-php-emergency-patch-heartbleed.md`）
- **Quarkslab** 是 2024 年外部稽核的執行方。Cloudflare 把他們列進這次的揭露方；基金會沒有把他們寫成 2026 年的回報者。兩說並列，見差異檔。

## 現況怎麼理解

三件事同時為真，因為觀察的位置不一樣：

1. **修補已經在手上。** 8.5／8.4／8.3／8.2 有正式版。發行版與 LTS 廠商事先拿到修補。`rpms.remirepo.net` 當天不更新。用 Docker 的人要重建映像，主機更新不會自動換掉映像裡的 PHP。（`news/2026-10-21-2200-php-net-security-advisory.md`、`news/2026-10-21-1357-icsda-php2shell-patch-released.md`）
2. **公開之前就有人在試。** Amazon MadPot 蜜罐在 10/17 看到利用嘗試，比公開早四天。10/21 約 02:00 UTC 起出現多份 PoC。AWS 之後稱已在野被廣泛利用。這些早期嘗試是否已在真實系統上成功，AWS 表示尚不清楚。（`news/2026-10-22-0636-aws-php2shell-exploitation-madpot.md`）
3. **不是每一家資安公司都在自己的客戶機器上看到。** Huntress 截至 10/21 16:30（美東）尚未在客戶端觀察到利用。比利時 CCB 當時也還沒記錄到針對比利時網站的攻擊。沒看到不等於沒發生。（`news/2026-10-20-huntress-rapid-response-php2shell.md`、`news/2026-10-22-0848-ctwant-php-global-security-crisis.md`）

台灣方面，數位發展部資通安全署於 2026-10-22 發新聞稿，已透過資安警訊、N-ISAC、TWCERT/CC 通知各機關與企業，請盤點 PHP、依原廠公告修補，並在更新後檢查日誌。（`news/2026-10-22-moda-php-emergency-update.md`）

基金會在修補發布當下表示，尚未看到可運作的公開 exploit。數小時前 Chainguard 已單方面發布含修補的映像（10/21 07:41 UTC），Calif 也在前一晚誤發過展示影片。時間先後見 [時間軸](01-timeline.md)。

## 幾個數字不是同一把尺

| 數字 | 它實際在數什麼 | 來源 |
| --- | --- | --- |
| 69.3% | 已知伺服器端語言的網站裡，用 PHP 的比例。不是「全網際網路的 69.3%」 | W3Techs，經 iThome、香港經濟日報 |
| 近 5,500 萬 | Censys 當天看到、跑著 PHP 的網路資產 | NBC News |
| 約 2,260 萬 | Cortex Xpanse 認為可能受影響、且暴露在網路上的實例 | 蕃新聞引 Tenable／Cortex Xpanse |
| 59%（883,717） | 約 150 萬台「有回報版本號」的主機裡，跑著沒有官方修補版本的比例。另有約 74 萬台隱藏版本號，沒算進去 | CyberQ 引 Mallory（Shodan 的 `X-Powered-By`） |
| 近 200 檔、逾 1 萬行 | 這次修補的程式規模 | 鉅亨網編譯 WSJ |

韓國 82%、中國 75%、日本 61%、美國 54% 是同一份 Mallory 統計裡「無官方修補版本」的比例，只涵蓋有露出版本號的主機。（`news/2026-10-21-0852-cyberq-php-core-rce-leak.md`）

電腦王阿達另引了 VirusTotal 約 510 萬個與 PHP 相關的 IP、Silas Cutler 約 130 萬台可能受影響的連網主機、Shodan 約 190 萬台暴露的 PHP 主機。口徑不同，不要加總。（`news/2026-10-22-0747-kocpc-php2shell-history-ai.md`）

## 接下來讀哪一份

- 非技術人員、網站負責人、用虛擬主機的人：[02-for-non-technical.md](02-for-non-technical.md)
- 要修補、盤點、看日誌的開發與維運：[03-for-developers.md](03-for-developers.md)
- 想看外洩、關站與名言：[04-for-onlookers.md](04-for-onlookers.md)
- 名詞：[05-glossary.md](05-glossary.md)
- 來源互相打架的地方：[06-discrepancies.md](06-discrepancies.md)
- 出處總表：[07-sources.md](07-sources.md)
