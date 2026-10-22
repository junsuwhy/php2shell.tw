---
title: "PHP2Shell 參考來源總表"
audience: [non-technical, developer, onlooker]
updated_at: "2026-10-22"
sources:
  - https://www.php.net/archive/2026.php#2026-10-21-5
  - https://www.php.net/archive/2026.php#2026-10-20-1
  - https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/
  - https://moda.gov.tw/ACS/press/news/press/21134
---

# 參考來源總表

資料截止 **2026-10-22**。有 `docs/news/` 檔的，代表本站讀過摘要；知識庫的事實以那些摘要加上已查證整理為準。本表不補網絡搜尋。

`docs/news/` 若在本表寫成之後又新增檔案，以目錄裡的檔案為準，本表可能還沒跟上。

## 官方

維護 PHP 的單位自己說的話。版本、緩解與「沒有完整解法」以這裡為準。

| 來源 | 新聞檔 | URL | 本庫用它做什麼 |
| --- | --- | --- | --- |
| PHP.net 預告 | `news/2026-10-21-0330-php-net-upcoming-security-release.md` | https://www.php.net/archive/2026.php#2026-10-20-1 | 10/21 14:00 UTC 提前發布、CVSS 9.2、保留再提前的權利 |
| 同上，郵件列表副本 | 同上檔的 `url_mailing_list` | https://news-web.php.net/php.announce/509 | 預告的另一個網址 |
| PHP.net 安全公告 | `news/2026-10-21-2200-php-net-security-advisory.md` | https://www.php.net/archive/2026.php#2026-10-21-5 | 兩個 CVE 的官方描述、修補版、SAPI、暫時緩解 |
| GHSA，OOM | 同上檔的 `advisories` | https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w | CVE-2026-109618 |
| GHSA，過期狀態 | 同上 | https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp | CVE-2026-109619 |
| PHP 基金會部落格 | `news/2026-10-21-php-foundation-security-release-strengthening.md` | https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/ | 2024 結構性失敗、發現時間、外洩、Chainguard、AI 稽核 |

## 原始研究

發現者自己的文章。影響展示與研究時間軸以這裡為第一手；若與官方成因用詞不同，成因以官方公告為準。

| 來源 | 新聞檔 | URL | 本庫用它做什麼 |
| --- | --- | --- | --- |
| Calif | `news/2026-10-21-calif-tale-of-two-php-remote-vulnerabilities.md` | https://calif.io/php2shell/ | 2004／2020 的歷史、Ryan Austin 對方法的自述 |
| Wiz | `news/2026-10-21-2159-wiz-php2shell-ai-uncovers-rce.md` | https://www.wiz.io/blog/php2shell-php-rce | 三個面向的後果、記憶體讀取、8 月時間軸、AI 工具名稱 |
| php2shell.com | Wiz 文內連結；本庫**沒有**單獨的新聞摘要 | https://www.php2shell.com/ | 修補後的硬性記憶體上限、`expose_php`、SELinux／AppArmor、`pm.max_requests`。逐條沒有收進 news，知識庫依已查證事實引用，並標成活動網站 |

## 政府機關

有全文摘要的才放網址。其餘機關是媒體轉述，不偽造公告網址。

| 來源 | 新聞檔 | URL | 本庫用它做什麼 |
| --- | --- | --- | --- |
| 數位發展部資通安全署 | `news/2026-10-22-moda-php-emergency-update.md` | https://moda.gov.tw/ACS/press/news/press/21134 | 10/22 通報：資安警訊、N-ISAC、TWCERT/CC |
| 英國 NCSC | `news/2026-10-21-ncsc-critical-security-issue-php.md` | https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php | 下線、查後門、盤點內嵌 PHP；並提到荷屬 NCSC-NL 有一份產品清單（該清單 URL 未收錄） |

只有媒體轉述、本庫沒有原公告檔的機關：美國 NSA、白宮、FBI、CISA、澳洲 ASD／ACSC、法國 ANSSI、荷蘭 NCSC、比利時 CCB、芬蘭 Valtori、德國 ITZBund、日本國家サイバー統括室、CERT-EU、ENISA。NSA 的句子經 BBC 與 CTWANT；不要把 PCMag 寫成已讀。

## 資安廠商與基礎設施

| 來源 | 新聞檔 | URL | 本庫用它做什麼 |
| --- | --- | --- | --- |
| watchTowr | `news/2026-10-21-0335-watchtowr-php2shell-faq.md` | https://watchtowr.com/intelligence/php-cve-2026-109618-faq/ | 外洩當晚的確認、蜜罐看到在野利用、曾稱 CVSS 10 |
| Imperva | `news/2026-10-21-2147-imperva-php2shell-oom-wrong-moment.md` | https://www.imperva.com/blog/php2shell-vulnerability-updates/ | CWE-824、三個面向、複雜度、並非逐版驗證 |
| Cloudflare | `news/2026-10-21-2156-cloudflare-waf-protection.md` | https://blog.cloudflare.com/php-vulnerabilities-waf-protection/ | 03:02 UTC WAF、免費方案、揭露名單含 Quarkslab |
| JFrog | `news/2026-10-21-jfrog-php2shell-all-you-need-to-know.md` | https://research.jfrog.com/post/php2shell-all-you-need-to-know-about-cve-2026-109618-and-cve-2026-109619/ | 緩解的邊界、`pm.max_requests`、FrankenPHP 的風險判斷 |
| Huntress | `news/2026-10-20-huntress-rapid-response-php2shell.md` | https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities | 子行程偵測、客戶端截至 16:30 ET 未見利用 |
| Sansec | `news/2026-10-21-sansec-php2shell-critical-rce.md` | https://sansec.io/research/php2shell | 電商、展示過的應用清單、維護模式無效、Cloudflare 07:43 |
| AWS 安全部落格 | `news/2026-10-22-0636-aws-php2shell-exploitation-madpot.md` | https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/ | MadPot 10/17、PoC 時段、禁運引言 |
| 竣盟科技 | `news/2026-10-22-1105-billows-php-enterprise-response.md` | https://blog.billows.com.tw/?p=6420 | 企業盤點：應用更新不等於 PHP 更新 |

## 國際媒體

| 來源 | 新聞檔 | URL | 本庫用它做什麼 |
| --- | --- | --- | --- |
| BleepingComputer（預告） | `news/2026-10-21-0456-bleepingcomputer-php-warns-admins.md` | https://www.bleepingcomputer.com/news/security/php-warns-admins-of-two-critical-flaws-emergency-patches-coming-tomorrow/ | 原訂美東 10/22 11:00、watchTowr 確認外洩 |
| BleepingComputer（修補） | `news/2026-10-21-2207-bleepingcomputer-php-ships-emergency-patches.md` | https://www.bleepingcomputer.com/news/security/php-ships-emergency-patches-for-critical-php2shell-flaws/ | 修補版與官方對 mod_php 的句子 |
| Ars Technica | `news/2026-10-21-1012-arstechnica-php-maintainers-prepare.md` | https://arstechnica.com/security/2026/10/php-maintainers-tell-web-devs-to-prepare-themselves-for-critical-security-patches/ | 修補前的準備清單、Sansec 的 15 分鐘 |
| Help Net Security | `news/2026-10-21-2151-helpnetsecurity-php2shell-patched.md` | https://www.helpnetsecurity.com/2026/10/21/php2shell-php-vulnerabilities-patched-cve-2026-109618-cve-2026-109619/ | Wiz 與 Kevin Beaumont 的英文原句 |
| BBC News | `news/2026-10-21-2009-bbc-websites-taken-down-worldwide.md` | https://www.bbc.com/news/articles/cmly0lg3w5x2o | NSA、高市、維基、芬蘭、荷蘭 NCSC、愛丁堡、Doctor Who 未證實 |
| NBC News | `news/2026-10-21-2106-nbcnews-critical-vulnerabilities-rush-to-update.md` | https://www.nbcnews.com/tech/security/critical-vulnerabilities-php-update-systems-rcna604751 | Censys 5,500 萬、4chan、Pinboard、Something Awful |
| The Next Web | `news/2026-10-22-0002-thenextweb-php-foundation-structural-failure.md` | https://thenextweb.com/news/php-foundation-structural-failure-2024-flaw-leak | 基金會說法的獨立整理 |
| Mashable | `news/2026-10-22-0232-mashable-php-vulnerability-websites-offline.md` | https://mashable.com/tech/php-vulnerability-websites-offline-affected-services | 關站清單，並標出未證實項目 |
| The Guardian | `news/2026-10-22-0839-guardian-php-flaw-shutdown-websites.md` | https://www.theguardian.com/technology/2026/oct/21/flaw-in-php-computer-language-leads-to-shutdown-of-websites-around-world | 牛津與布里斯托、10/17、白宮「周五」、Woodward |
| Australian Financial Review | `news/2026-10-22-0405-afr-websites-go-dark-ai-discovered-bug.md` | https://www.afr.com/world/north-america/websites-go-dark-as-ai-discovered-bug-sparks-global-security-scramble-20261022-p617nf | 轉載路透的導言。**正文被付費牆擋住，摘要標成未讀完** |
| ITmedia NEWS | `news/2026-10-22-0147-itmedia-php-emergency-maintenance.md` | https://www.itmedia.co.jp/news/article/2610/21/2000002472/ | 日本業者維護清單、國家サイバー統括室 |

## 台灣／中文媒體

香港刊物放在這節，並註明地區。

| 來源 | 地區 | 新聞檔 | URL | 本庫用它做什麼 |
| --- | --- | --- | --- | --- |
| iThome | 台灣 | `news/2026-10-21-ithome-php-zero-day-storm-warning.md` | https://www.ithome.com.tw/news/179861 | 外洩當日、69.3%、Hacker News、Sansec 的 15 分鐘 |
| iThome | 台灣 | `news/2026-10-22-ithome-php-emergency-update.md` | https://www.ithome.com.tw/news/179870 | 修補版、7.4／8.0／8.1 原始碼回移植 |
| CyberQ 賽博客 | 台灣 | `news/2026-10-21-0852-cyberq-php-core-rce-leak.md` | https://cyberq.tw/2026/10/21/two-cvss-92-rce-vulnerabilities/ | 15:20 UTC、Mallory 的 59%、cve.org 當時為 Reserved |
| ICSDA | 台灣 | `news/2026-10-21-1357-icsda-php2shell-patch-released.md` | https://icsda.org.tw/php2shell-cve-2026-109618-109619/ | 在地應變、remi、Docker、PHP4Shell 別名、7.3 以前 |
| 鉅亨網 | 台灣 | `news/2026-10-21-2240-cnyes-php-emergency-patch-heartbleed.md` | https://news.cnyes.com/news/id/6635339 | 編譯 WSJ：Heartbleed 比喻、近 200 檔、Thai Duong 致電、Ami Luttwak |
| 電腦王阿達 | 台灣 | `news/2026-10-22-0747-kocpc-php2shell-history-ai.md` | https://www.kocpc.com.tw/archives/700257 | Austin 的「了解你的目標」、另一組曝險數字、開發者引言 |
| CTWANT | 台灣 | `news/2026-10-22-0848-ctwant-php-global-security-crisis.md` | https://tw.news.yahoo.com/php%E9%87%8D%E5%A4%A7%E6%BC%8F%E6%B4%9E%E5%BC%95%E7%88%86%E5%85%A8%E7%90%83%E8%B3%87%E5%AE%89%E5%8D%B1%E6%A9%9F-%E5%90%84%E5%9C%8B%E6%94%BF%E5%BA%9C%E5%8F%8A%E4%BC%81%E6%A5%AD%E7%B7%8A%E6%80%A5%E9%97%9C%E9%96%89%E7%B6%B2%E7%AB%99-004855247.html | 法新社編譯：各國關站、OpenAI、Mollick、cyber.gov.au |
| 蕃新聞 | 台灣 | `news/2026-10-22-1115-yam-php2shell-devcore.md` | https://n.yam.com/Article/20261022685398 | Cortex Xpanse 2,260 萬、DEVCORE 的 CVE-2024-4577、KEV 對照 |
| Tony.Wu's Blog（itnotetk） | 台灣 | `news/2026-10-22-0011-itnotetk-php-webshell-rce-detection-hardening.md` | https://www.itnotetk.com/2026/10/22/php-webshell-rce-detection-hardening/ | 防守向加固。**成因段落與官方不符**，只拿來當差異案例，不當技術依據 |
| 香港01 | 香港 | `news/2026-10-21-2346-hk01-php-vulnerability-government-sites.md` | https://www.hk01.com/%E5%8D%B3%E6%99%82%E5%9C%8B%E9%9A%9B/60402259/%E6%94%AF%E6%8C%81%E5%85%A8%E7%90%83%E4%B8%83%E6%88%90%E7%B6%B2%E7%AB%99php%E7%88%86%E9%87%8D%E5%A4%A7%E6%BC%8F%E6%B4%9E-%E6%AD%90%E6%B4%B2%E5%A4%9A%E5%9C%8B%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99%E5%A4%A7%E8%A6%8F%E6%A8%A1%E4%B8%8B%E7%B7%9A | 路透轉述、白宮評估影響、info.gouv.fr 圖說 |
| 香港經濟日報 | 香港 | `news/2026-10-22-1010-hket-php-security-vulnerability.md` | https://inews.hket.com/article/4212585/php-security-vulnerability-global-websites-offline-2026 | 主廚比喻的新聞版、高市、ACSC、DigiD、ANSSI |

## 未取得全文

下列來源在事件裡被提到，或本站列為應核對的原文。**本庫沒有它們的全文，知識庫沒有把它們當成已讀。** 不填猜測的網址。

| 來源 | 為什麼出現 | 本庫實際靠什麼 |
| --- | --- | --- |
| The Hacker News | 10/20 的外洩貼文被多家說是起點，隨後撤下 | iThome、CyberQ、ICSDA、watchTowr、基金會的轉述 |
| PCMag／NSA | NSA 呼籲無法立即更新者下線。PCMag 若有專文，本庫沒讀 | BBC、CTWANT 對 NSA 句子的轉述 |
| OpenAI | 同日獨立回報、以及「AI 能找到網際網路規模漏洞」的聲明 | 基金會確認有回報；語句見 CTWANT、NBC、衛報的轉述。Codex Security 的 Amy Burnett 這個姓名，新聞摘要沒有出現 |
| Reuters | 歐洲關站與修補的通稿 | 香港01、Mashable、香港經濟日報轉述。AFR 轉載的正文未抓到 |
| 《華爾街日報》（WSJ） | Heartbleed 比喻、近 200 個檔與逾 1 萬行、Thai Duong 與 Luttwak | 只有鉅亨網的編譯 |
| 《紐約時報》（NYT） | 列入待核對清單 | `docs/news` 沒有 NYT 的摘要，知識檔也沒有引用 NYT 的具體句子 |
| Wikipedia | GitHub advisory 是否在 13:34 UTC 公開（citation needed）；CISA 是否表示尚未觀察到；網際網路檔案館是否短暫關閉 | 僅 php.net 摘要的 time_note 提到 advisory 時間。另外兩則是待查證，沒有條目全文 |

另外沒有獨立全文、但被點過名的：Tenable 原文（蕃新聞有引，其中「攻擊鏈開發者為 LCFR」**沒有**出現在蕃新聞摘要）、CISA 的 KEV 頁、Chainguard 自己的發布說明（只有基金會記述 07:41 UTC）、ITmedia 關於《ワールドクエスト》停服的那一則、CERT-EU／ENISA 聯合聲明全文、NCSC-NL 的產品清單。
