---
title: "給開發與維運：PHP2Shell 的概念、修補與應變"
audience: [developer]
updated_at: "2026-10-22"
sources:
  - https://www.php.net/archive/2026.php#2026-10-21-5
  - https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w
  - https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp
  - https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/
  - https://www.wiz.io/blog/php2shell-php-rce
  - https://www.php2shell.com/
  - https://www.imperva.com/blog/php2shell-vulnerability-updates/
  - https://sansec.io/research/php2shell
  - https://research.jfrog.com/post/php2shell-all-you-need-to-know-about-cve-2026-109618-and-cve-2026-109619/
  - https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities
  - https://blog.cloudflare.com/php-vulnerabilities-waf-protection/
  - https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/
  - https://calif.io/php2shell/
  - https://www.helpnetsecurity.com/2026/10/21/php2shell-php-vulnerabilities-patched-cve-2026-109618-cve-2026-109619/
  - https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php
  - https://moda.gov.tw/ACS/press/news/press/21134
---

# 給開發與維運

本文只到概念、影響、修補、緩解與偵測。不寫攻擊步驟、payload、記憶體配置手法或可重現的流程。官方原文與 GHSA 連結在 [來源總表](07-sources.md)。時間見 [時間軸](01-timeline.md)。

官方的一句話可以當標題：沒有完整的暫時解法，**更新是唯一安全的選擇**。（`news/2026-10-21-2200-php-net-security-advisory.md`）

## 成因，停在概念

兩個 CVE 是同一類失敗的兩個面孔。PHP 在處理網頁請求時，若於記憶體不足或致命錯誤的當下中斷（研究者用 bailout 描述這種「立刻跳走」），可能留下**只初始化一半**或**已經過期**的內部狀態。

會反覆處理許多請求的 worker，下一個請求可能在正常初始化把狀態清掉之前，就把這份殘留當成有效資料。官方描述如下。

| CVE | GHSA | 官方名稱 | 官方在說什麼 | 已展示的後果 |
| --- | --- | --- | --- | --- |
| CVE-2026-109618 | GHSA-w8hw-w9fx-j79w | RCE via OOM corruption | 記憶體不足處理可能在內部請求資料只初始化一半時中斷 PHP，請求清理可能把無效資料當成有效 | mod_php 預設設定下的完整 RCE；另有不經 RCE 的行程記憶體讀取 |
| CVE-2026-109619 | GHSA-6wmf-4rv5-p3rp | RCE via stale global state | 請求擁有的內部狀態可能在記憶體被釋放後仍存活，同一 worker 的後續請求可能在正常初始化重設前使用它 | 回報者在真實應用（Apache mod_php）上展示 RCE；Wiz 亦在 WordPress、Drupal 上展示 |

Imperva 把兩者都歸為 **CWE-824**（存取未初始化指標），CVSS v4.0 皆 9.2，並提醒：遠端觸發的門檻，與把結果穩定變成 RCE 的難度，不是同一件事。打不中時，worker 可能只是崩潰或正常回應。這不降低「必須更新」的結論，只避免把名稱裡的 “2shell” 理解成每一個請求都必然得到 shell。（`news/2026-10-21-2147-imperva-php2shell-oom-wrong-moment.md`）

Huntress 的 John Hammond 另說，“2shell” 這個命名習慣通常意味一個請求就能拿到 shell。那是命名慣例的解讀，不是官方的複雜度評分。（`news/2026-10-21-0852-cyberq-php-core-rce-leak.md`）

程式歷史上，這類「致命錯誤打斷清理」不是 2026 年才出現。2004 年 Stefan Esser 遇過 memory-limit 類的遠端問題且未公開 exploit；2020 年 bug #78876 提過 OOM 與暫存檔未清；2024 年外部稽核時核心開發者再次看到跡象，卻沒有找到具體路徑，修法爭議停擺。見時間軸。

### 三個被點名的面向

研究者把可走到嚴重後果的位置分成三處。下面只說明「在哪、官方如何對應、擋得住什麼」，不說明如何觸發。

**1. Session upload-progress（與 CVE-2026-109618 相關）**

PHP 預設會在 multipart 上傳過程記錄進度（`session.upload_progress.enabled`，出廠為開）。Imperva 指出，已展示的路徑裡，這是常見的遠端入口，但不是唯一入口。Wiz 將此方向的後果分成兩類：記憶體破壞以致 RCE，以及經回應裡的 `PHPSESSID` cookie 讀取行程記憶體。後者在應用程式**從未呼叫 `session_start()`** 時仍成立，讀到的內容可以包含密碼、token、API 金鑰與憑證。

官方對這條**已確認**路徑的暫時措施：在請求開始解析之前就生效的 php.ini、FPM pool 或伺服器設定裡設 `session.upload_progress.enabled=0`，然後**重啟所有 worker**。`ini_set()` 與 FPM 的 `.user.ini` 來不及，等於沒設。這項設定擋不了 OPcache 與 backtrace 那些變體。（`news/2026-10-21-2200-php-net-security-advisory.md`、`news/2026-10-21-jfrog-php2shell-all-you-need-to-know.md`）

**2. OPcache（與 CVE-2026-109619 相關）**

OPcache 把編譯結果放在可重複使用的快取。請求若在錯誤時刻中斷，快取槽可能處於已配置卻未正確發布的狀態，後續請求誤用它。Wiz 在 `wordpress:latest` 容器上由此展示未授權 RCE，並指出這份狀態坐落在共享快取，影響範圍不限於「剛好打到同一支 worker 的下一個請求」這種最窄的想像。實務上不要假設只回收一支 worker 就清乾淨。

Imperva 另稱，這條路徑曾展示把檔案操作帶到攻擊者指定的位置，從而讀到設定檔、資料庫密碼與 API 金鑰。此處只記錄**後果**。JFrog 寫明：關掉 upload-progress **不會**蓋住 OPcache 這條路。

**3. 致命錯誤 backtrace（與 CVE-2026-109619 相關）**

致命錯誤留下的回溯資訊，可能在所屬記憶體釋放後仍被當成有效狀態。同一 worker 的下一個請求若在初始化重設前用到它，就踩到過期資料。Wiz 在 Drupal 上展示過由此導致的 RCE。

PHP 8.5 的對應暫時措施是 `fatal_error_backtraces=0` 並重啟所有 worker。官方說這只擋已確認的 backtrace 路徑。

三條以外，官方還要求處理「初始化完成前就會印出診斷」的無效或棄用設定，以及攻擊者碰得到的致命錯誤與逾時（含 callback、上傳／匯入與清理過程）。用 `error_reporting`、`display_errors` 或 `@` 把訊息藏起來**沒有用**，因為問題不是訊息被看見，而是中斷發生的時機。

它不限於「有登入、有上傳功能、有 bug 的應用」。Wiz 與 Imperva 都用「一行 Hello World／echo OK」說明：漏洞可以發生在應用程式碼之前。Sansec 補充，Magento、Shopware、WooCommerce 即使自家程式乾淨也曝險；應用層的防護產品擋不住這一時機。

Calif 經 Sansec 列出曾展示未授權 RCE 的應用：Magento、WordPress、Drupal、Joomla、MediaWiki、Roundcube、phpMyAdmin、Nextcloud、Laravel、Symfony、WHMCS。清單是影響面，不是攻擊教學。

## 受影響的 SAPI 與風險排序

官方點名所有服務網頁請求的安裝：

| 順序 | SAPI | 依據 |
| --- | --- | --- |
| 官方明確最高 | Apache **mod_php** | 未驗證請求可在任何應用程式碼前觸發；預設設定已展示完整 RCE。Imperva 特別提到，worker 會跨請求重複使用的部署（例如 Apache prefork）讓過期狀態有機會留下來 |
| 已確認，不要降級看待 | **PHP-FPM** | 基金會：經應用層路徑確認 RCE。JFrog：同樣受影響。官方沒有把 FPM 寫成安全 |
| 官方列入，沒有單獨的第二名、第三名 | **php-cgi**、**FrankenPHP**、**LiteSpeed** | 都在「誰有風險」清單。JFrog 認為 FrankenPHP 很可能與 mod_php 同屬高風險，這是廠商判斷，不是官方排序 |
| 仍要盤點 | 控制台與設備裡的 PHP | cPanel、Plesk，以及廠商軟體或 Windows 軟體內建的 `php.exe`、`php-cgi.exe`（ICSDA）。表面沒寫 PHP 的產品也可能內嵌（資安署、NCSC） |

命令列的 `php` 不在官方「服務網頁請求」那句的主詞裡。NCSC 的用詞更寬，說任何版本都可能受影響。本庫沒有看到官方保證「CLI 絕對無關」。盤點時以「會不會被網頁請求碰到」為準，而不是只找很舊的版號。（`news/2026-10-21-ncsc-critical-security-issue-php.md`）

## 版本對照

| 分支 | 這次官方給了什麼 | 你該怎麼對待 |
| --- | --- | --- |
| 8.5 | 8.5.12，含 Windows 安裝包 | 升級並重啟 worker。8.5 另有 `fatal_error_backtraces` 這項暫時開關，見下節 |
| 8.4 | 8.4.27，含 Windows 安裝包 | 同上 |
| 8.3 | 8.3.36，含 Windows 安裝包 | 同上 |
| 8.2 | 8.2.35，含 Windows 安裝包 | 可修。安全支援到 **2026-12-31**，修完這次仍要排離開 8.2 |
| 8.1、8.0、7.4 | 最小化**原始碼**回移植，沒有新的官方安裝包 | 優先用發行版或 LTS 廠商的回移植套件。自行編譯只適合有人能維護建置的團隊 |
| 7.3 與更早，含 5.x | 現有公告與 ICSDA 都沒有官方修補 | 升級到仍受支援且已修的分支。完成前不要直接對網際網路開放；ICSDA 提到的過渡是 VPN、內網，或 WAF 加上來源 IP 限制。這些都不是修補 |
| 發行版套件上的 8.x | 版號可能不是 8.3.36 這種 php.net 版號 | 以該發行版的安全公告為準。Debian、Ubuntu、RHEL 一類可能回移植（CyberQ）。看套件更新紀錄，不要只對版號 |
| Docker 映像 | 官方映像或自建映像都不會因為主機 `apt upgrade` 而改變 | 用已修補的基底重新建置並部署（ICSDA） |
| `rpms.remirepo.net` | 官方寫明**當天不會更新** | 改用發行版套件或自行編譯（`news/2026-10-21-2200-php-net-security-advisory.md`） |

Linux 發行版與 LTS 廠商事先拿到修補。8.1 以前不再由 PHP 專案做一般發布；7.4／8.0／8.1 的原始碼回移植是因這次嚴重性而額外提供的。（`news/2026-10-22-ithome-php-emergency-update.md`）

## 如何確認「網站真正跑的那一版」

`php -v` 印的是你在 shell 裡叫到的那支執行檔。網站用的 FPM pool 或 Apache 模組可以是另一支，版號不同并不稀奇。（`news/2026-10-21-1357-icsda-php2shell-patch-released.md`）

建議同時做：

- 看 FPM pool 的設定指向哪一支 `php-fpm` 二進位，再對那一支執行 `-v`。
- Apache 用 `apachectl -M` 一類的方式確認是否載入 `php_module`（mod_php），並看該模組對應的版號，而不是只看 PATH 上的 `php`。
- 主機控制台（cPanel、Plesk）顯示的 PHP 版本，要和上面兩支對得起來。對不上就以**真正處理請求的那支**為準。
- 發行版：查套件更新紀錄或安全公告，確認回移植已安裝。版號仍顯示發行版自己的編號時，不代表沒修。
- 需要一個只給管理員看的檢查頁時，印出 `PHP_VERSION` 與 SAPI 名稱即可。用完從文件根目錄移除。不要把 `phpinfo()` 長時間留在公開網址。
- Docker：進到**正在接流量的容器**裡看，不要只看建置機或舊的本機映像。
- 隱藏版本的網站（沒送 `X-Powered-By`）不會出現在 Mallory 那份 59% 的分母裡。你自己的主機就算沒露出版本，該修還是要修。

## 官方暫時緩解，以及不要做的事

以下全部引用 PHP 安全公告的方向。每一項都只降低**特定路徑**的曝險。公告原文寫：There are no complete mitigations, updating is the only safe choice.

針對 CVE-2026-109618：

- `memory_limit=-1`，並用應用程式改不掉的方式鎖住，例如 FPM pool 或 Apache 設定裡的 `php_admin_value`。接著檢查沒有 pool、目錄或應用設定把有限值寫回去。底層的配置失敗仍可能走到漏洞路徑，所以這不是關掉漏洞。
- 不需要上傳的站，把 `post_max_size` 降到 8M；需要上傳的降到 32M，且 `upload_max_filesize` 小於 `post_max_size`。
- 在 web server 或 proxy 限制解碼後的請求大小、欄位數、multipart 的 part 數、header 數與巢狀深度。沒有 `Content-Length` 的請求也要涵蓋。
- 用容器或 cgroup 的記憶體限制當可用性邊界，最好只停掉受影響的 worker。

針對 CVE-2026-109619：

- `session.upload_progress.enabled=0` 並重啟全部 worker（設定位置見上一節；`ini_set()` 與 `.user.ini` 無效）。
- PHP 8.5：`fatal_error_backtraces=0` 並重啟全部 worker。
- 移除會在初始化前輸出診斷的無效或棄用 per-request 設定。
- 修掉攻擊者可觸及的致命錯誤與執行逾時，包含 callback、上傳／匯入處理與清理失敗。這裡指的是把會讓 PHP 中途 bailout 的缺陷修掉，不是請你製造錯誤。

**不要做：**

- **不要**改用 `RLIMIT_AS` 或 `RLIMIT_DATA` 來限制記憶體。官方寫明，它們本身就可能造成漏洞所需要的配置失敗。
- **不要**以為在程式裡 `ini_set('session.upload_progress.enabled', '0')` 或放進 `.user.ini` 就生效。
- **不要**以為 `display_errors=0`、調低 `error_reporting`、或在陳述式前加 `@`，能處理「初始化前的診斷」。`display_errors=0` 與 `expose_php=0` 仍是正式環境的衛生項目，itnotetk 與 php2shell.com 都有提到；php2shell.com 把 `expose_php=0` 標成**不是修補**。
- **不要**把 WordPress／Drupal／Joomla／Magento 的應用更新當成這次的修補。
- **不要**把應用程式維護模式當成緩解。Sansec：電商若要臨時止血，是在 web server 層處理 `multipart/form-data`（會影響上傳與部分結帳），或改成唯讀／靜態維護頁。先確認業務影響。AWS 同樣說，擋 multipart 之前要評估應用。
- **不要**把 WAF 當成修補。Cloudflare 自 10/21 03:02 UTC 起對含免費方案在內的客戶預設防護，同時寫明仍須更新 PHP，而且已看到有人變造請求試圖避開規則。
- **不要**把降低 `pm.max_requests` 當成修復。JFrog 說它有幫助，因為 worker 較早回收，但有效能代價，而且每一項單獨都只是部分有效。php2shell.com 亦有此建議。
- **不要**以為 SELinux 或 AppArmor 限制了網頁行程，漏洞就不存在。那是縮小失守後的活動範圍（php2shell.com 的建議），不是修補。

## 修補之後還要注意

- 裝上套件或換上新二進位之後，**重啟所有** php-fpm、Apache、LiteSpeed worker，再向正在接流量的行程確認版號。滾動更新若留下舊 worker，等於還沒修完。
- php2shell.com 指出：修補會加入一個硬性記憶體上限，超過時**終止行程，且不執行 shutdown handler**。若你的程式靠 shutdown function 寫日誌、釋放鎖或送出收尾工作，行為會改變。請在測試環境看過，而不是等正式機第一次爆記憶體。（此句的逐字依據是該活動網站；`docs/news` 的 Wiz 摘要有連結 https://www.php2shell.com/ ，沒有逐條摘錄。）
- 若緩解期間把 `memory_limit` 設成 `-1`，修補後改回應用真正需要的上限。Sansec 對電商的說法也是修補後要改回來。無限記憶體本身會變成可用性問題。
- Docker 要重建映像並重新部署，確認編排檔沒有把舊 tag 拉回來。
- 8.2.35 修了這次，分支仍在 2026-12-31 EOL。排程不要停在「已經打了 8.2 的安全更新」。
- 調查視窗從 **2026-10-17** 起算。AWS 寫明，不要假設公開日就是最早的利用日。禁運只保護到「別人還沒自己找到」之前；他們的原話是：An embargo protects defenders only until someone else finds the same bug.
- 修補發布當下，基金會說還沒看到可運作的公開 exploit。同一天 07:41 UTC Chainguard 已打破禁運釋出含修補映像，02:00 UTC 起 AWS 已看到多份 PoC。不要用「公告當時說沒有公開 exploit」把查日誌延到下週。
- 若清理過可疑檔案，仍要輪替可能已出現在行程記憶體或設定檔裡的密碼、API 金鑰、session 祕密與憑證（itnotetk、資安署的「確認帳號與憑證」）。記憶體讀取這條路徑意味著「沒有留下 webshell」不等於祕密還安全。
- WAF 規則可以留著，作為更新之後的另一層。它不取代版本。

## 偵測與事件應變

這些訊號**不足以單獨證明**遭利用。完全沒看到，也不代表沒事。應用層存取日誌可能幾乎是空的（Wiz）。

值得對一下的現象：

- 異常的 multipart 請求之後，緊接著 memory-limit 錯誤，或連續的 HTTP 500。
- 回應裡出現異常巨大、或格式不像正常 session id 的 `PHPSESSID` cookie。
- 無法解釋的 worker 崩潰或重啟。
- PHP 的父行程（`php-fpm`、`php-cgi`、`php-cgi.exe`、`httpd`、`apache2`）衍生出 `sh`、`bash`、`cmd`、`powershell`、`python`、`perl`、`curl`、`wget`、`nc`。Huntress 另提到 `certutil.exe`。
- 指令列出現 `/dev/tcp`、`mkfifo`。
- 網頁伺服器行程在執行 `whoami`、`id`、`uname`。
- 網站根目錄或上傳目錄新增 PHP 檔、新增排程、新增系統帳號。

Huntress 說，RCE 得手之後最常見的樣子，就是 PHP 工作行程生出不該出現的子行程。他們也建議先以觀察模式跑行程監控，不要一上線就自動砍行程。itnotetk 補充：對命中的檔案做人工確認，不要自動刪除；可以搭配檔案完整性比對。自動刪檔會毀證據，也可能刪到正常的快取。

懷疑已經失守時：

1. 隔離該主機或至少把它從負載平衡拔掉，停止繼續對網際網路提供有洞的服務。
2. 保留 web server 日誌、PHP 日誌、系統行程與檔案時間。先不要重灌。
3. 並行修補其他還沒被隔離、仍暴露的系統。不要等完整鑑識做完，才去更新剩下的主機。
4. 盤點是否有新的 PHP 檔、新的帳號、新的排程、異常的子行程。
5. 輪替憑證與金鑰。通知需要知道的人。台灣的機關與企業，資安署已透過資安警訊、N-ISAC、TWCERT/CC 做過通報，內部窗口依各單位自己的規定。
6. 沒有把握時，找事件應變支援。英國 NCSC 指出可尋找其認證廠商；這句是給英國組織的路徑，台灣單位走自己的資安通報窗口。

AWS 另外提醒：他們公開了一些蜜罐上看到的來源 IP，其中包含共用的匿名基礎設施，適合拿來**調查**，不適合直接當成永久封鎖清單。本知識庫不轉貼那些 IP。

## 和過去兩個 PHP 漏洞比

蕃新聞引 Tenable：CVE-2024-4577 與 CVE-2019-11043 都已列入美國 CISA 的已知被利用漏洞目錄（KEV），也曾被勒索軟體利用。截至該文整理時，CVE-2026-109618 與 CVE-2026-109619 **尚未**列入 KEV。沒進 KEV 只表示那個時間點的目錄狀態，不表示這次比較不急。（`news/2026-10-22-1115-yam-php2shell-devcore.md`）

| | PHP2Shell（這次） | CVE-2024-4577 | CVE-2019-11043 |
| --- | --- | --- | --- |
| 公開 | 2026-10 | 2024 | 2019 |
| 誰發現 | Calif、OpenAI、Wiz | 台灣戴夫寇爾（DEVCORE） | 本庫新聞摘要沒有寫發現者，不在此補名字 |
| 位置 | PHP 核心的記憶體與錯誤處理 | PHP-CGI | PHP-FPM |
| 範圍 | 官方：服務網頁請求的安裝都要假設有風險；mod_php 在預設設定下已展示完整 RCE | 特定的執行方式（PHP-CGI），不是每一種 SAPI | 特定的 PHP-FPM 部署，不是「預設的每一台 PHP」 |
| 和這次的關係 | — | 當年修好 Windows 上的 PHP-CGI，**不會**使這次的洞消失。兩件事都要出現在資產清單上 | 同左。FPM 當年的修補版本，不包含 2026 年這兩個 CVE |
| KEV（蕃新聞引 Tenable 的時點） | 尚未列入 | 已列入 | 已列入 |

CVE-2024-4577 對台灣的意義是：不少單位的 Windows＋PHP-CGI 組合當時就被點名，而且是在地研究單位找到的。它證明「PHP 的舊介面還在生產環境」很常見。盤點 php-cgi 時，把 2024 那個洞的修補狀態一起看，但不要把它們當成同一個 CVE。

這次和那兩次的差別，用一句話就夠：以前要對上特定的 SAPI 與部署，這次官方要求所有還在回應網頁的 PHP 都更新。核心開發者 Gina Peter Banyard 的說法（電腦王阿達轉述）是，唯一的緩解就是打補丁或升級 PHP。
