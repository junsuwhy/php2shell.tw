---
title: "來源不一致與待查證"
audience: [developer, onlooker]
updated_at: "2026-10-22"
sources:
  - https://www.php.net/archive/2026.php#2026-10-21-5
  - https://www.php.net/archive/2026.php#2026-10-20-1
  - https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/
  - https://watchtowr.com/intelligence/php-cve-2026-109618-faq/
  - https://www.bleepingcomputer.com/news/security/php-warns-admins-of-two-critical-flaws-emergency-patches-coming-tomorrow/
  - https://www.imperva.com/blog/php2shell-vulnerability-updates/
  - https://sansec.io/research/php2shell
  - https://www.wiz.io/blog/php2shell-php-rce
  - https://blog.cloudflare.com/php-vulnerabilities-waf-protection/
  - https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/
  - https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities
  - https://www.itnotetk.com/2026/10/22/php-webshell-rce-detection-hardening/
  - https://cyberq.tw/2026/10/21/two-cvss-92-rce-vulnerabilities/
  - https://www.ithome.com.tw/news/179861
  - https://www.itmedia.co.jp/news/article/2610/21/2000002472/
  - https://n.yam.com/Article/20261022685398
  - https://www.kocpc.com.tw/archives/700257
  - https://www.theguardian.com/technology/2026/oct/21/flaw-in-php-computer-language-leads-to-shutdown-of-websites-around-world
  - https://thenextweb.com/news/php-foundation-structural-failure-2024-flaw-leak
  - https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php
  - https://mashable.com/tech/php-vulnerability-websites-offline-affected-services
  - https://www.bbc.com/news/articles/cmly0lg3w5x2o
  - https://www.hk01.com/%E5%8D%B3%E6%99%82%E5%9C%8B%E9%9A%9B/60402259/%E6%94%AF%E6%8C%81%E5%85%A8%E7%90%83%E4%B8%83%E6%88%90%E7%B6%B2%E7%AB%99php%E7%88%86%E9%87%8D%E5%A4%A7%E6%BC%8F%E6%B4%9E-%E6%AD%90%E6%B4%B2%E5%A4%9A%E5%9C%8B%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99%E5%A4%A7%E8%A6%8F%E6%A8%A1%E4%B8%8B%E7%B7%9A
  - https://inews.hket.com/article/4212585/php-security-vulnerability-global-websites-offline-2026
  - https://tw.news.yahoo.com/php%E9%87%8D%E5%A4%A7%E6%BC%8F%E6%B4%9E%E5%BC%95%E7%88%86%E5%85%A8%E7%90%83%E8%B3%87%E5%AE%89%E5%8D%B1%E6%A9%9F-%E5%90%84%E5%9C%8B%E6%94%BF%E5%BA%9C%E5%8F%8A%E4%BC%81%E6%A5%AD%E7%B7%8A%E6%80%A5%E9%97%9C%E9%96%89%E7%B6%B2%E7%AB%99-004855247.html
---

# 來源不一致與待查證

同一件事有兩種說法時，下表並列。能對上官方文件或第一手研究的，放在右欄。右欄寫「待查證」表示本庫截止 2026-10-22 仍無法裁定。

| 主題 | 說法 | 來源 | 官方或較可信的說法 |
| --- | --- | --- | --- |
| CVSS 分數 | 10.0，或「滿分 10」 | 外洩的 Hacker News 貼文；watchTowr 執行長 Benjamin Harris 對 BleepingComputer 亦稱 CVSS 10（`news/2026-10-21-0335-watchtowr-php2shell-faq.md`、`news/2026-10-21-0456-bleepingcomputer-php-warns-admins.md`） | 官方 CVSS **v4.0 為 9.2**。基金會說外流貼文的 10.0 是錯的（`news/2026-10-21-2200-php-net-security-advisory.md`、`news/2026-10-21-php-foundation-security-release-strengthening.md`） |
| 從哪一版開始有問題 | 「PHP 5 以後全部」，有的連 PHP 6 一起算；研究團隊官網寫可追溯到 PHP 5.4、修補前幾乎每個版本都至少中一個；Vercel 寫 PHP 5.4 與之後的預設設定 | watchTowr FAQ、BleepingComputer、Ars、`news/2026-10-21-php2shell-com-research-disclosure.md`、`news/2026-10-21-vercel-php2shell-security-bulletin.md` | **研究團隊說法**（以及 Vercel 的轉述）不是官方逐版清單。PHP 官方與 GHSA 列出的是各受支援分支低於修補版（8.2.35、8.3.36、8.4.27、8.5.12），並另為 7.4、8.0、8.1 提供最小化原始碼回移植。研究者與 Sansec：程式可回溯到 **PHP 5.4.0（2012）**。Imperva：**並非每個版本都逐一驗證**。PHP 6 從未作為正式版發行。本站版本矩陣維持官方說法 |
| 「過去十年每一版都中」 | Wiz：過去十年發布的每個 PHP 版本，至少受其中一個漏洞影響 | `news/2026-10-21-2159-wiz-php2shell-ai-uncovers-rce.md` | 與「回溯到 2012 的 5.4.0」時間長度不同。Wiz 這句是他們的研究結論；Imperva 提醒沒有逐版驗證。引用時兩句一起下，不要寫成官方已驗證的完整矩陣 |
| 受影響版本寫成一條區間 | PHP 5.4.0 至 8.5.11 | itnotetk（`news/2026-10-22-0011-itnotetk-php-webshell-rce-detection-hardening.md`） | 8.5.12、8.4.27、8.3.36、8.2.35 是修補版，因此各分支「上一版」未更新就仍有風險。5.4.0 到 8.5.11 的每一個版號是否都驗證過：官方摘要沒有這樣寫，**待查證** |
| 原訂公開時間 | 10/22 14:00 UTC | 本站已查證整理裡的一種說法；基金會公開文只寫「從 10/22 提前」，沒有寫原訂鐘點就是 14:00 UTC | 基金會與 The Next Web：原訂 **10/22**，外洩後提前到 **10/21 14:00 UTC**。watchTowr 對 BleepingComputer：原協調時間是 **10/22 11:00 美東（15:00 UTC）**。外洩貼文：**10/22 18:00 CEST（16:00 UTC，台灣 10/23 00:00）**。三個鐘點都不要當成已經發生的事 |
| 禁運何時解除 | AWS 摘要寫「禁運原訂 2026-10-21 14:00 UTC 解除」 | `news/2026-10-22-0636-aws-php2shell-exploitation-madpot.md` | 這個鐘點與**提前之後**的實際發布時間相同。基金會說原本是 10/22。AWS 可能是在描述改期後的禁運，也可能是另一套記憶。引用「原訂」時要註明是哪一家 |
| Calif 從哪一天算起 | 7/30 開始稽核 | PHP 基金會、The Next Web | 保留基金會的 7/30（開始）與 8/11（回報）。Sansec 的 8/01 是「找到多條 RCE 路徑」。電腦王阿達寫 8/1 開始動手；衛報轉述 Calif 稱 8/1 發現。像是「開工」和「找到」被寫成同一天，**尚未有人對表** |
| 第一次看到攻擊 | 10/17 MadPot；外洩後 Cloudflare 看到客戶流量；Sansec 把 Cloudflare 的回報記在 10/21 07:43 UTC | AWS、Cloudflare 部落格、Sansec | 三個都是觀察紀錄，不是互相否定。10/17 最早，而且當時仍在禁運。07:43 是 Sansec 所記的「回報時間」，不是 Cloudflare 規則上線時間（規則是 03:02 UTC）。AWS 並說 10/17 與 10/21 清晨那些嘗試是否已在真實系統成功，當時仍不清楚 |
| 有沒有在野利用 | 有：watchTowr 蜜罐、AWS（並稱修補後已被廣泛利用）、Cloudflare（外洩後的客戶流量） | 各自家部落格 | 同時：Huntress 截至 10/21 16:30 美東未在**客戶端**看到；比利時 CCB 當時未記錄到針對比利時網站的攻擊；Wikipedia 稱 CISA 尚未觀察到（**全文未讀，待查證**）。蜜罐／WAF 與客戶端是不同視角。基金會在 14:00 UTC 發布當下說尚未看到可運作的公開 exploit，與「數小時前已有 PoC、能否成功仍待分析」可以並存 |
| 發現者名單有沒有 Quarkslab | Cloudflare 把揭露方寫成 Calif.io、Wiz、OpenAI、Quarkslab | `news/2026-10-21-2156-cloudflare-waf-protection.md` | 基金會的 2026 年回報者是 Calif、OpenAI、Wiz。Quarkslab 是 **2024 年稽核**的執行單位。他們有沒有在 2026 年另案回報這兩個 CVE：**待查證**。不要把 2024 的稽核直接寫成這次的發現者 |
| OpenAI 回報者姓名 | Codex Security 的 Amy Burnett | 研究團隊官網（`news/2026-10-21-php2shell-com-research-disclosure.md`） | 基金會只確認「OpenAI 於 08-11 獨立回報同一根因」，沒有寫個人姓名。Amy Burnett 是研究團隊官網的署名，不是 PHP 官方公告的用詞 |
| 成因 | 上傳進度把攻擊者可控內容寫進 session，反序列化失敗時觸發物件的魔術方法，因而 RCE | itnotetk（該摘要已自行標註與官方不符） | **以 PHP 安全公告為準**：109618 是 OOM 處理造成的記憶體破壞；109619 是過期全域狀態在記憶體釋放後仍被後續請求使用。關掉 `session.upload_progress` 只是一條已確認路徑的暫時緩解 |
| 攻擊鏈開發者是 LCFR | Tenable 如此稱呼；研究團隊官網把 Calif 寫成 Ryan A.，連結到 x.com/lcfr_hax | 本站已查證指向 Tenable；`news/2026-10-21-php2shell-com-research-disclosure.md` | 官網沒有寫「LCFR 是攻擊鏈開發者」，也沒有寫 Ryan A. 就是 Ryan Austin。不要把帳號代號寫進發現者名單，也不要把兩個名字合併。**待查證** |
| cve.org 狀態 | 外洩到修補前後仍是 Reserved，NVD 未評分 | CyberQ（文檔更新時間 2026-10-21 14:00 UTC） | 這是那個時間點的紀錄。10/22 當天 cve.org／NVD 是否已改為已公開並打分：**待查證**（news 沒有後續核對） |
| GitHub advisory 是否 13:34 UTC 就公開 | 比官方 14:00 UTC 早 26 分鐘 | Wikipedia，經 php.net 摘要的 time_note，並註記 citation needed | **待查證**。本庫沒有 Wikipedia 全文，也沒有 GitHub advisory 的時間戳截圖 |
| ITmedia 的 `datePublished` | 部分報導的發布時間晚於內文所描述的事件時間 | 本站已查證；對應的《ワールドクエスト》停服報導**沒有**收進 `docs/news` | 已收錄的那篇（コドモン等）`published_at` 為 2026-10-21 17:47 UTC，約當日本時間 22:47，內文談的是當日 23:00 前後的預告維護，大致對得上。其他篇的時間戳問題：**待查證**。不要把 CMS 時間戳直接當成關站時刻 |
| 修補發布的美東時間 | Huntress 寫約 10/21 09:30 美東釋出 | `news/2026-10-20-huntress-rapid-response-php2shell.md` | 官方排定並於 **14:00 UTC** 發布，等於美東 10:00。Huntress 的 09:30 視為約略，差了約 30 分鐘 |
| 「七成網站」 | Wiz 標題、多家媒體，以及研究團隊官網 “PHP powers approximately 70% of websites”（沒有「已知伺服器端語言」的限定） | Wiz 標題、CTWANT、香港01、AFR、`news/2026-10-21-php2shell-com-research-disclosure.md` | W3Techs 的原句是：**已知伺服器端語言的網站**有 **69.3%** 使用 PHP。NBC 寫 69%。香港經濟日報保留了「已知伺服器端語言」這個限定。本站說法不變，不要寫成全世界七成的網站、或七成的網際網路 |
| 有多少主機 | 5,500 萬（Censys）、2,260 萬（Cortex Xpanse）、150 萬有版本號其中 59% 無官方修補（Mallory）、510 萬 IP（VirusTotal）、130 萬（Silas Cutler，電腦王阿達轉述）、190 萬（Shodan，電腦王阿達轉述） | NBC、蕃新聞、CyberQ、電腦王阿達 | 沒有單一官方總數。每家在數的母體不同（資產、暴露實例、帶版本標頭的主機、IP）。NBC 引 Cutler：大家仍在從「所有 PHP 都有洞」往下縮範圍。不要加總 |
| 網際網路檔案館有沒有關站 | Wikipedia：短暫關閉 | 全文未讀 | Mashable：DownDetector 有障礙回報，**無法直接連結**到這次更新。Asana 同樣只有障礙回報。寫成「有人回報打不開」，不要寫成已證實因 PHP 關閉 |
| BBC 節目頁、Pokémon、GOG、Duolingo | BBC 的 Doctor Who、The Traitors 頁面離線；Pokémon 系列維護；GOG 維護；Duolingo 錯誤增加 | BBC 自己說**未證實**與 PHP 有關。Mashable：Pokémon Sleep／HOME／Champions、GOG、Duolingo **未證實**或未提及此漏洞 | 放在「同時發生的中斷」，不要放進已確認名單 |
| 4chan 是唯讀還是整個下線 | NBC：下線。Mashable：改為唯讀 | 兩篇新聞 | 對外不能正常使用這一點一致。精確狀態（唯讀或全關）依各篇，**沒有官方單一聲明**在本庫 |
| 白宮在做什麼 | 與主要 AI 實驗室合作加速修補 | BBC | 香港01：評估對政府系統與關鍵基礎設施的影響。衛報：周五接獲通知（日期待查證）。香港經濟日報把白宮、NSA、FBI 寫在同一句「敦促立即處理」。側重不同，本庫沒有白宮原文，**不要合成成一篇不存在的聲明** |
| NCSC 的範圍用詞 | 「任何版本的 PHP」都可能受影響 | `news/2026-10-21-ncsc-critical-security-issue-php.md` | PHP 官方把風險對象寫成「服務網頁請求的安裝」，並點名 mod_php、FPM、php-cgi、FrankenPHP、LiteSpeed。命令列、不對外的 PHP 是否同等風險，官方摘要沒有單獨保證安全，也沒有說每一種 SAPI 都已展示 RCE |
| 「ini 完全沒用」 | 核心開發者 Joe Ferguson：「ini 設定救不了你。」Gina Peter Banyard：「唯一的緩解就是打補丁或升級」 | 電腦王阿達轉述 | 官方同一立場的精確版是：**沒有完整緩解，更新是唯一安全選擇**；同時仍公布了只能降低特定路徑曝險的設定。那些設定不是在說系統已經安全 |
| 名稱 | PHP2Shell、php2shell、PHP4Shell；研究團隊官網：php2shell 是示範用組合程式的名字，後來也指整個研究 | ICSDA；Wiz；`news/2026-10-21-php2shell-com-research-disclosure.md` | 新聞與官方公告都用 PHP2Shell 指這兩個 CVE。PHP4Shell 只是別名。官網的「組合程式」一句可以寫，不描述那支程式的內容。Huntress 的 John Hammond 說「2shell」慣例通常指一個請求就能拿到 shell；Imperva 則說真正走到 RCE 的複雜度高。命名習慣不是官方的攻擊難度評分 |
| Calif 發現者怎麼署名 | Ryan Austin；研究團隊官網寫 Ryan A. | Calif 文章、基金會、鉅亨網；`news/2026-10-21-php2shell-com-research-disclosure.md` | 兩邊沒有在同一句寫成同一個人。故事頁並陳，不用縮寫覆蓋 Ryan Austin |
| 研究用了哪些模型、算在誰頭上 | 鉅亨網：Ryan Austin 在 GPT-5.6 Sol 協助下發現。Calif 自述：沒有用一般人拿不到的模型。官網：Wiz Research 使用 Wiz Atlas、Gemini 4 Argon、GPT-5.6-Sol，Gemini 團隊參與。Wiz 部落格寫 GPT-5.6 Sol（空格） | `news/2026-10-21-2240-cnyes-php-emergency-patch-heartbleed.md`、Calif 文、官網、Wiz 部落格 | 不要合成成「三組人都用同一批模型」。模型清單以各家自述為準。不寫這些模型如何被用來發展利用方式 |

## 本庫有意不裁定的事

- 10/17 的行為者是誰、如何在禁運期間得知利用方式：AWS 寫明不明。
- 早期 PoC 在真實網站上的成功率：AWS 寫明分析仍在進行。
- 個別關站是否已經遭受入侵：Mashable 與多家政府說法都是預防性下線。沒有一份公開的「已被竊取資料清單」。
- Tenable 原文、CISA 聲明、Wikipedia 條目、OpenAI 原文、The Hacker News 原文、WSJ 原文、NYT：見 [來源總表](07-sources.md) 的未取得全文。
