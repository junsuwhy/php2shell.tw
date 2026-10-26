---
title: "給吃瓜群眾：PHP2Shell 這兩天發生了什麼"
audience: [onlooker]
updated_at: "2026-10-22"
sources:
  - https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/
  - https://thenextweb.com/news/php-foundation-structural-failure-2024-flaw-leak
  - https://calif.io/php2shell/
  - https://www.wiz.io/blog/php2shell-php-rce
  - https://watchtowr.com/intelligence/php-cve-2026-109618-faq/
  - https://www.bleepingcomputer.com/news/security/php-warns-admins-of-two-critical-flaws-emergency-patches-coming-tomorrow/
  - https://blog.cloudflare.com/php-vulnerabilities-waf-protection/
  - https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/
  - https://sansec.io/research/php2shell
  - https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities
  - https://www.bbc.com/news/articles/cmly0lg3w5x2o
  - https://www.nbcnews.com/tech/security/critical-vulnerabilities-php-update-systems-rcna604751
  - https://mashable.com/tech/php-vulnerability-websites-offline-affected-services
  - https://www.theguardian.com/technology/2026/oct/21/flaw-in-php-computer-language-leads-to-shutdown-of-websites-around-world
  - https://www.itmedia.co.jp/news/article/2610/21/2000002472/
  - https://www.helpnetsecurity.com/2026/10/21/php2shell-php-vulnerabilities-patched-cve-2026-109618-cve-2026-109619/
  - https://arstechnica.com/security/2026/10/php-maintainers-tell-web-devs-to-prepare-themselves-for-critical-security-patches/
---

# 給吃瓜群眾

這不是某一家網站寫錯密碼。這是網際網路上很常見的那位「主廚」——PHP——自己的基本功，在預定公開的前兩天，先被貼上了論壇。

下面照時間講。分數、版本、誰說了什麼，都以 [總覽](00-overview.md) 和 [時間軸](01-timeline.md) 為準。有人講得很滿、來源卻對不上的地方，在 [差異](06-discrepancies.md)，不要幫它們擴散。

## 一個老毛病，拖到 AI 把它證明完

PHP 是很多網站的引擎。已知伺服器端語言的網站裡，69.3% 用它。購物車、論壇、政府頁、wiki，常常都是它在後廚煮頁面。

這類「記憶體不夠、事情做到一半就跳走，然後把半成品當成成品」的問題，早有人聞過味道：

- 2004 年，PHP 安全圈的前輩 Stefan Esser 找到第一個 memory-limit 類的遠端漏洞。他覺得太嚴重，exploit 沒有公開。
- 2020 年，有人在 bug tracker 回報 bug #78876：一個很長的變數把記憶體吃光，暫存檔也沒清。沒有掀起浪。
- 2024 年，PHP 終於做了多年來第一次外部健檢。德國主權科技機構（Sovereign Tech Agency）出錢，OSTIF 張羅，Quarkslab 執行。核心開發者在修別的東西時，看見了 OOM 問題的影子，可是**找不到一條真的打得到的路**。

然後開始吵架。修法有好幾套，每一套都有代價：弄壞舊程式、弄出容易被打到當機的新風險，或是要求外面一大堆擴充套件跟著改。安全團隊人少，又習慣要全員同意才敢動手，怕選錯。工作停擺了幾個月。

修補當天，基金會沒有找台階下。原文是：

> We won't pretend otherwise: the delay was a structural failure, caused by both the security team's decision process and its lack of resources.

結構性失敗。決策方式，加上沒有資源。兩樣都認。

2026 年 5 月他們組了 Ecosystem Security Team，決策改成可以多數決。同一年，AI 加入現場：Alpha-Omega 合作裡用 Anthropic 的 Claude Mythos 掃 PHP，後來用 OpenAI 的 Daybreak Red 驗證回報。自 7 月起他們發出 15 個 CVE，也清掉一百多份無效回報。AI 讓箱子變忙，不全是驚喜。

## 三組人，幾乎同時摸到同一面牆

**Calif** 的 Ryan Austin 參加 OpenAI 資助的 Patch the Planet。基金會說他 7 月 30 日開始看；Sansec、電腦王阿達和衛報轉述則把「找到」或「開工」寫在 8 月 1 日。8 月 11 日他回報。同一天，OpenAI 自己的人也獨立回報了同一個根。Calif 執行長 Thai Duong 拿起電話打給基金會的 Volker Dusch。

Austin 後來說，他沒有用一般人拿不到的模型，也沒有秘密工具。電腦王阿達引他的話：到今天，「了解你的目標」依然管用。鉅亨網編譯《華爾街日報》則寫他用的是 GPT-5.6 Sol。這句和他的自述並陳，見差異檔，不要合成。

研究團隊聯合官網（`news/2026-10-21-php2shell-com-research-disclosure.md`）的署名是另一套：Wiz Research 的 Sagi Tzadik、Shir Tamari、Nir Ohfeld、Tomer Schwartz；OpenAI Codex Security 的 Amy Burnett；Calif 的 Ryan A.。基金會寫的是 Ryan Austin，以及 OpenAI 同日獨立回報、沒有個人姓名。兩套名字不要互相覆蓋。

同一頁自述，Wiz Research 使用 Wiz Atlas、Gemini 4 Argon、GPT-5.6-Sol，Google 的 Gemini 團隊參與發現、協調與修補驗證。Wiz 部落格把第三個模型寫成 GPT-5.6 Sol（空格）。這是研究團隊自述。不寫這些模型如何被用來發展利用方式。

php2shell 是他們給示範用組合程式取的名字，後來也指整個研究。不描述那支程式的內容，也不收官網上的示範影片。

**Wiz**（已經是 Google 旗下）晚了幾週，但是獨立的。8 月 19 日找到第一個問題；20 日 Drupal，21 日 WordPress，24 日回報 PHP。他們有一句被轉述得很廣的自評：一個研究者一個星期做完的事，以前要一個世界級團隊做幾個月。

9 月 18 日 OpenAI 又補了更多路徑。9 月 21 日 PHP 確認 Wiz 的報告，開始協調修補。原本大家約好先別說，等修補一起上桌。這叫禁運。

## 禁運在預定公開前裂開

原訂是 10 月 22 日公開。鐘點有三種講法（美東早上 11 點、中歐 18:00、或另一種 14:00 UTC），見差異檔。總之不是 10 月 20 日。

10 月 20 日下午，UTC 大約三點（台灣晚上 11 點），Hacker News 出現一篇貼文。編號是真的：CVE-2026-109618、CVE-2026-109619。分數是錯的：它寫 10.0，官方是 9.2。時間也是錯的。貼文的人自己說，他只是相信消息來源。貼文隨後撤下，但螢幕截圖不會跟著撤。

CyberQ 算過，從那則貼文到 PHP 宣布提前修補，不到四小時。台灣時間 10 月 21 日凌晨 3 點 30 分，官方預告：修補改到當天晚上 10 點（UTC 下午 2 點）。預告通篇沒寫 CVE，也沒寫「遠端程式碼執行」這五個字。那些字是外流貼文和 watchTowr 補上的。watchTowr 在預告後五分鐘發出 FAQ，向媒體確認：洞是真的。

然後 Calif 在大約 UTC 晚上 8 點（台灣 10 月 21 日凌晨 4 點）**誤發了一段 PoC 影片**。刪了，副本留下。Huntress 的人也看過這段後來下架的影片。基金會說，這段影片讓隔天的 PoC 寫得更快。

同一天深夜，給少數關鍵基礎設施的緩解建議，也可能已經不只少數人看得到。

真正讓「公開日才是第一天」這個信念破產的，是 Amazon。他們的蜜罐 MadPot 在 **10 月 17 日**就看到利用嘗試，來源掛在商業匿名網路上，比修補公開早四天。禁運期間對方怎麼知道的，Amazon 說不知道。10 月 21 日早上（UTC 兩點前後）多份 PoC 出現，接下來六小時又有另一批，基礎設施和 payload 都不一樣，像是不止一組人。這些嘗試有沒有在真人網站上成功，Amazon 當時還不能斷言。

Cloudflare 從 10 月初就在做 WAF 規則，10 月 21 日 11:02（台灣）對免費方案也預設打開。外洩之後，他們看到打向客戶的流量，也看到有人把請求變個樣子、想從規則旁邊繞。Sansec 把 Cloudflare 回報早期攻擊的時間記在台灣下午 3 點 43 分。

下午 3 點 41 分，Chainguard 不等協調發布，先把**已經含修補的映像**推出去，比正式公開早了六個多小時。對防守方，映像是更新；對想研究修補差異的人，映像是對照本。基金會直接把它寫成單方面打破禁運。

晚上 10 點，修補準時上線：8.5.12、8.4.27、8.3.36、8.2.35。近 200 個檔案、超過一萬行。發布的那一刻，安全團隊說還沒看到能用的公開 exploit。蜜罐上的故事則是：公開後數小時，新的 PoC 幾乎立刻打到感測器。AWS 後來的用詞是「已被廣泛在野利用」。Huntress 到美東下午 4 點 30 分，在自己的客戶機器上仍舊沒看到。兩句話都留著，因為一個在看誘餌，一個在看客戶。

## 全球關站名單

下線多半是預防。Mashable 寫得很白：把服務關掉，不表示已經被駭，是為了不要被駭。

### 政府與公共服務

| 誰 | 報導裡發生的事 | 出處 |
| --- | --- | --- |
| 美國 NSA | 建議不能立刻更新的系統下線，稱這類漏洞往往有一條直達檔案系統或資料庫的路 | BBC、CTWANT |
| 美國白宮 | BBC：聯邦機構與主要 AI 實驗室合作加速修補。香港01：評估對政府系統與關鍵基礎設施的影響。衛報：稱周五接獲通知，沒寫日期 | 三家側重不同，沒有白宮原文 |
| 英國 NCSC | 建議考慮下線，並在升級前檢查後門 | NCSC 公告、衛報 |
| 英國市議會 | 愛丁堡（BBC）；牛津、布里斯托（衛報） | 見左 |
| 荷蘭 | DigiD、眾議院、國家網路安全中心網站下線（CTWANT、BBC、衛報）。Mashable 另列 Overheid.nl、鹿特丹港、足協 KNVB | 見左 |
| 法國 | 應 ANSSI 要求，多個地方政府網站與巴黎警察局網站無法存取 | CTWANT、香港經濟日報、衛報 |
| 比利時 | 外交部網站暫時關閉。CCB 當時還沒記錄到針對比利時網站的攻擊 | CTWANT、Mashable |
| 芬蘭 | 政府公共網路服務暫停；Mashable 寫是 Valtori 預防性關閉 | BBC、Mashable |
| 德國 | 部分聯邦網站預防性停用，Mashable 點名 ITZBund | Mashable、香港經濟日報 |
| 日本 | 首相高市早苗在 X 發文，香港經濟日報描述為「極緊急請求」，請大家確認公開網站是否使用 PHP。國家サイバー統括室要求儘速處理 | BBC、香港經濟日報、ITmedia |
| 澳洲 | ACSC 最高級別警告（香港經濟日報）。cyber.gov.au 本身也受影響（CTWANT）。衛報：ASD 當地夜間短暫受影響 | 見左 |
| 歐盟 | CERT-EU 在外洩當下確認 CVE 編號對得上（iThome）。CERT-EU 與 ENISA 的聯合聲明：本站已查證有這份聲明，**全文未收進 news** | iThome；聲明全文待補 |
| 台灣 | 10/22 數位發展部資通安全署經資安警訊、N-ISAC、TWCERT/CC 通知各機關與企業 | `news/2026-10-22-moda-php-emergency-update.md` |

香港01 的配圖說明寫法國政府網站 info.gouv.fr 無法存取。那是圖說，沒有更多細節，不要單獨把它升級成確認名單。

### 民間網站

| 誰 | 狀態 | 和 PHP 的關係 |
| --- | --- | --- |
| 維基媒體 | 預防性關閉部分支援系統。Mashable 點名 Toolforge、Cloud VPS，並寫明**不是**維基百科整個關掉 | BBC、Mashable。已連結 |
| 4chan | NBC 說下線；Mashable 說改成唯讀 | 已連結。精確狀態兩說並存 |
| Something Awful | 下線或維護 | NBC、Mashable |
| Pinboard | 下線 | NBC、Mashable |
| Fur Affinity、Miraheze | 預防性關站 | Mashable |
| GrapheneOS 討論區、Choice of Games | 維護或關站 | Mashable |
| OpenStreetMap | 關掉 wiki 與次要服務；主地圖不在該公告裡 | Mashable |
| 日本 コドモン、Shadowverse: Worlds Beyond、BASE、さくらのレンタルサーバ | 緊急維護。Shadowverse、BASE 等已由業者或 ITmedia 向對方確認與 PHP 有關 | ITmedia |
| X Server、pictSQUARE，以及 ITmedia 提到的キンボル、つなぐ | 預計採取類似對應。其中 pictSQUARE、キンボル、BASE 已確認與 PHP 有關 | ITmedia |
| 《賽馬娘》《碧藍幻想》《公主連結》、Shadowverse: Worlds Beyond、CHUNITHM 國際帳號 | 緊急維護 | Mashable 將這些遊戲與 PHP 連結 |
| 遊戲《ワールドクエスト》 | 標題稱因舊系統無法因應，當日終止服務 | ITmedia 標題，本站已查證；**該則全文沒有收進 news**。時間戳問題見差異檔 |
| BBC 的 Doctor Who、The Traitors 頁面 | 離線 | BBC **未證實**與 PHP 有關 |
| Pokémon Sleep、Pokémon HOME、Pokémon Champions | 維護 | Mashable：**未證實**與 PHP 有關 |
| GOG | 維護，沒說原因 | Mashable：未證實 |
| Duolingo | 有人回報錯誤變多 | Mashable：對方未提及此漏洞 |
| 網際網路檔案館 | 短暫下線，更新修補後恢復 | 路透引述其 X 貼文：因緊急維護與安全修補下線，已恢復。官方帳號轉貼創辦人 Brewster Kahle 的說明（[X 貼文](https://x.com/internetarchive/status/2113037994924163166)，台灣時間 2026-10-22 06:41）：PHP 漏洞公布後偵測到攻擊，**已確認與 PHP 漏洞有關**。Mashable、TechRadar 當時都沒能連結到 PHP（TechRadar 報導曾寫 not definitively linked，本站未收錄該篇全文），之後由官方說明釐清。「看到攻擊」不等於「被攻破」，不要寫成遭入侵 |
| Asana | DownDetector 有障礙回報 | Mashable：無法直接連結到這次更新，不要寫成已證實 |

## 名言集

能對上原文或新聞摘要的才放。中文若是編譯，就註明是編譯。

**Volker Dusch**（PHP 基金會，經鉅亨網編譯《華爾街日報》）：這是 PHP 十多年來最嚴重的安全問題，並比擬 2014 年的 Heartbleed。

**PHP 基金會**：If you run PHP, it is imperative that you update now.

**PHP 基金會**，談 2024 年為什麼沒修：the delay was a structural failure。完整句見上面那節。

**Wiz**（Help Net Security 所引）：These findings rank among the most severe vulnerabilities discovered in PHP, and arguably in software history.

**Wiz**：a single researcher completed in a week what previously would have taken a world-class team months of work.

**Wiz 共同創辦人 Ami Luttwak**（鉅亨網編譯 WSJ）：這是迄今透過 AI 發現最嚴重的漏洞。

**OpenAI**（CTWANT 引法新社的編譯）：這是近期記憶中影響最深遠的漏洞之一；AI 已經能找出可能對整個網際網路規模產生影響的安全漏洞。本站另有一則較短的中文轉述「標誌著新階段」，意思相同，沒有更早的英文原檔在 news 裡。

**Calif 執行長 Thai Duong**（鉅亨網、香港經濟日報）：若有人拿到修補、交給 AI 分析，再把攻擊腳本公開，情況可能很快失控。

**Ryan Austin**（電腦王阿達引述）：沒有用特殊工具，也沒有用一般人拿不到的模型。「了解你的目標」依然管用。

**Kevin Beaumont**（Help Net Security）：one of the biggest vulns in years。原文較長：The PHP situation will lead to a mass of incidents.

**Sansec**（iThome、Ars Technica）：預期修補發布後 15 分鐘內就會出現大規模攻擊。

**AWS 的 CJ Moses**：An embargo protects defenders only until someone else finds the same bug.

**Ethan Mollick**（華頓商學院，CTWANT 引述）：企業已經追不上修補的速度；消費者也會面對「所有東西都必須頻繁而且迅速地更新」。

**Alan Woodward**（薩里大學，衛報）：麻煩的是後面有一長串沒人維護的網站，攻擊可能會拖上好幾週、好幾個月。

**Gina Peter Banyard**（電腦王阿達轉述核心開發者）：唯一的緩解就是打補丁或升級 PHP。旁邊還有 Joe Ferguson 的 “ini 設定救不了你”。官方的精密版是：暫時設定只能降低某幾條路的風險，不能讓系統變成安全的。

## 數字看板

這五個數字會在標題裡輪流出現。它們不是同一件事。

| 數字 | 請這樣讀 |
| --- | --- |
| **69.3%** | 已知伺服器端語言的網站裡，用 PHP 的比例（W3Techs）。不是「網際網路的七成」，也不是「七成網站今天都會被駭」 |
| **近 5,500 萬** | Censys 在當天看到、跑著 PHP 的網路資產（NBC） |
| **約 2,260 萬** | Cortex Xpanse 認為可能受影響、且暴露在網路上的實例（蕃新聞引 Tenable） |
| **59% 沒有官方修補** | 約 150 萬台**有回報版本號**的主機裡，883,717 台跑著官方沒有修補包的版本。另有約 74 萬台根本不告訴你版本（CyberQ 引 Mallory）。韓國 82%、中國 75%、日本 61%、美國 54% 是這份統計的國別切片 |
| **近 200 個檔、超過 1 萬行** | 這次修補本身的規模（鉅亨網編譯《華爾街日報》） |

電腦王阿達還引了另一組：VirusTotal 約 510 萬個相關 IP、Silas Cutler 約 130 萬台可能受影響的主機、Shodan 約 190 萬台。NBC 裡的 Cutler 則說，大家還在從「所有 PHP 都有洞」往下撈。數字會再改，看板先不要加總。

## 看熱鬧時不要做的事

編號外洩那天，就有人擔心研究人員會把 PHP 的修補程式丟給語言模型，生成攻擊細節再貼出去。Kevin Beaumont 對 iThome 的警告是這個方向，Thai Duong 說的也是這件事。

所以吃瓜可以，轉 PoC、轉「一鍵檢測腳本」、對別人的網站試手氣，都不在看熱鬧的範圍裡。那些東西會讓還沒更新的學校、診所和店家更危險。

想幫忙的版本很無聊：把自己管的網站問出版本號，或把 [給非技術人員](02-for-non-technical.md) 的問題清單貼給主機商。
