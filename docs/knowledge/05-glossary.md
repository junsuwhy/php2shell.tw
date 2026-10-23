---
title: "PHP2Shell 術語表"
audience: [non-technical, developer, onlooker]
updated_at: "2026-10-22"
sources:
  - https://www.php.net/archive/2026.php#2026-10-21-5
  - https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/
  - https://www.imperva.com/blog/php2shell-vulnerability-updates/
  - https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/
  - https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities
---

# 術語表

一句話版本。技術定義從寬，方便對照這次新聞。不解釋攻擊手法。

| 術語 | 白話 |
| --- | --- |
| RCE | 遠端程式碼執行：人不用坐在伺服器前面，就能叫那台機器執行他要的指令。 |
| CVE | 漏洞的戶口名簿編號，這次是 CVE-2026-109618 與 CVE-2026-109619，方便大家確定在講同一個洞。 |
| GHSA | GitHub 上的安全公告編號；這次官方公告對應 GHSA-w8hw-w9fx-j79w 與 GHSA-6wmf-4rv5-p3rp。 |
| CVSS | 一套把漏洞嚴重程度打成數字的規則；這次官方用的是第 4 版，兩個都是 9.2。 |
| CWE | 弱點的「種類」編號。Imperva 把這次歸成 CWE-824，意思是程式去用了一個還沒準備好、不能當真的內部指標。 |
| OOM | Out of memory，記憶體不夠用。這次其中一條路，就是 PHP 在記憶體用盡、事情只做一半時收攤收壞了。 |
| use-after-free | 一塊記憶體已經歸還，程式卻還把它當成活的資料來用；CVE-2026-109619 的官方描述屬於這一類後果。 |
| worker | 真正上場處理網頁請求的那一支 PHP 行程；同一支 worker 常常連續服務很多個訪客。 |
| SAPI | PHP 接上網站伺服器的方式，例如嵌在 Apache 裡、或另外跑一支 PHP-FPM。不同接法，這次的風險排序不一樣。 |
| mod_php | 把 PHP 嵌進 Apache 行程裡的模組。官方認為這次風險最高，因為請求可以在網站程式開始前就碰到漏洞。 |
| PHP-FPM | 讓 PHP 以獨立行程池處理請求的常見跑法。這次同樣被確認可以 RCE，只是官方沒有把它排在 mod_php 前面。 |
| php-cgi | 另一種由網站伺服器叫起 PHP 的舊式介面。官方把它列在受影響名單；Windows 上的 php-cgi 也是 2024 年另一個漏洞的現場。 |
| FrankenPHP | 較新的 PHP 執行方式，官方列入這次受影響名單。 |
| LiteSpeed | 一種網站伺服器及其 PHP 執行方式，官方同樣列入受影響名單。 |
| OPcache | PHP 把已經編譯過的程式暫存起來、下次不用重頭編譯的快取。這次它是過期狀態會殘留的位置之一。 |
| session | 伺服器用來記得「你是剛才那位訪客」的一段伺服器端狀態，常見憑證是瀏覽器裡的 cookie。 |
| PHPSESSID | 攜帶 session 識別資料的 cookie 名稱。這次研究者展示，異常的回應 cookie 可能把伺服器記憶體裡的敏感資料帶出去。 |
| session upload-progress | PHP 預設用來記錄「檔案上傳到哪了」的功能。它是這次已被確認的遠端入口之一，關掉它只擋這條路。 |
| backtrace | 發生嚴重錯誤時，PHP 留下的「程式當時走到哪裡」的紀錄。PHP 8.5 上它是另一條已被確認的路徑。 |
| WAF | Web Application Firewall，站在網站前面幫你擋可疑請求的過濾器。Cloudflare 有上線規則，但它不能取代更新 PHP。 |
| 禁運（embargo） | 修補還沒好之前，知情者約定先不公開細節，讓防守方有時間準備。 |
| 協調揭露 | 發現者、維護者與重要廠商約好同一天公開，讓修補和說明一起到。這次約定被外洩打亂。 |
| PoC | Proof of concept，用來證明「這個洞真的打得動」的示範。有 PoC 不等於每一台機器都已經被打成功。 |
| 蜜罐 | 故意放上網、假裝是真系統的誘餌，用來觀察誰在攻擊。Amazon 的叫 MadPot。 |
| webshell | 攻擊者放在網站目錄裡的網頁程式，之後靠它遙控伺服器。它是入侵之後的落腳點，不是這次漏洞本身。 |
| 回移植（backport） | 發行版不升級大版本，只把安全性修補搬回舊版套件。所以版號不一定變成 8.3.36，仍可能已經修好。 |
| EOL | End of life，官方不再修的版本。PHP 8.2 的安全支援到 2026-12-31；8.1 以前更早就停了。 |
| LTS | Long-term support，廠商承諾長期維護的產品線。這次不少 LTS 廠商事先拿到修補。 |
| Heartbleed | 2014 年 OpenSSL 的重大漏洞，攻擊者能讀到伺服器記憶體裡的密鑰與資料，全球管理員緊急更新。PHP 基金會的 Volker Dusch 用它比喻這次的嚴重程度。 |
| 零時差 | 防守方還沒有修補可用、攻擊就已經出現。這次原屬協調修補，外洩之後、修補發布之前的那一段，新聞才用這個詞。 |
| 在野利用 | 實驗室以外，真實網路上已經有人在用這個漏洞。蜜罐看到，和客戶機器上已經失守，是兩件不同的事。 |
| KEV | CISA 的已知被利用漏洞目錄。CVE-2024-4577 與 CVE-2019-11043 在上面；截至蕃新聞引 Tenable 整理時，這兩個新 CVE 還沒進去。 |
| X-Powered-By | 有些網站在回應裡自報「我是 PHP 某版」。Mallory 的 59% 統計靠的就是這個標頭，沒自報的主機不會進分母。 |
| cgroup | Linux 用來限制一組行程能用多少記憶體與 CPU 的機制。官方建議用它當「記憶體上限的邊界」。若暫時把 memory_limit 設成 -1，研究團隊建議搭配 cgroup v2 的 memory.max。不要改用 RLIMIT。 |
| RLIMIT | 作業系統給行程的記憶體配額。`RLIMIT_AS` 與 `RLIMIT_DATA` 不能拿來代替 PHP 的 memory_limit，官方寫明它們可能造成漏洞所需要的配置失敗。 |
| CDN | 幫網站擋在前面、就近送出內容的服務。和 WAF、主機商規則一樣，不能代替更新 PHP。 |
| SELinux／AppArmor | Linux 上限制程式能做哪些事的門禁。能縮小失守後的活動範圍，不是修補，也可能讓正常功能失敗。 |
| expose_php | 設成 0 可減少回應裡的 PHP 版號。研究團隊標成可選強化，不是這次的修補。 |
| shutdown handler | 請求或行程結束前要做的收尾。研究團隊寫，硬性記憶體上限到達時行程被終止，這類收尾不會執行。 |
| post_max_size | 一次請求 PHP 願意收下的總大小。官方暫時數字是不需上傳 8M、需要上傳 32M。 |
| max_input_nesting_level | 輸入可以套幾層。研究團隊建議降到應用需要的深度。這個名稱不在 php.net 短公告裡；官方說的是在網頁伺服器或 proxy 限制巢狀深度。 |
| pm.max_requests | PHP-FPM 讓 worker 處理多少請求後回收。調低有幫助也有效能代價，不是修補。 |
| multipart | 一次送出很多塊資料的格式，上傳常用。異常的這種請求之後出現記憶體錯誤或連續 HTTP 500，只是調查訊號。 |
| 發行版 | 把 Linux、PHP 與其他套件打包出售後維護的廠商或社群，例如 Debian、Ubuntu、RHEL。修補常常走它們的套件公告。 |
