---
title: "PHP2Shell 時間軸"
audience: [non-technical, developer, onlooker]
updated_at: "2026-10-22"
sources:
  - https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/
  - https://thenextweb.com/news/php-foundation-structural-failure-2024-flaw-leak
  - https://calif.io/php2shell/
  - https://sansec.io/research/php2shell
  - https://www.wiz.io/blog/php2shell-php-rce
  - https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/
  - https://www.php.net/archive/2026.php#2026-10-20-1
  - https://www.php.net/archive/2026.php#2026-10-21-5
  - https://watchtowr.com/intelligence/php-cve-2026-109618-faq/
  - https://blog.cloudflare.com/php-vulnerabilities-waf-protection/
  - https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities
  - https://www.theguardian.com/technology/2026/oct/21/flaw-in-php-computer-language-leads-to-shutdown-of-websites-around-world
  - https://moda.gov.tw/ACS/press/news/press/21134
  - https://www.bleepingcomputer.com/news/security/php-warns-admins-of-two-critical-flaws-emergency-patches-coming-tomorrow/
---

# PHP2Shell 時間軸

時間一律並列 **UTC** 與 **台灣時間（UTC+8）**。只寫到小時的，代表來源用了「約」。只有日期的，代表來源沒有公布時分。媒體發稿時間不逐則列入；關站名單見 [給吃瓜群眾](04-for-onlookers.md)。互相矛盾的時刻見 [差異](06-discrepancies.md)。

2026-10-21 是星期三。10 月仍為美東夏令時間（EDT，UTC−4）與中歐夏令時間（CEST，UTC+2）。

## 總表

| UTC | 台灣時間（UTC+8） | 事件 | 來源 |
| --- | --- | --- | --- |
| 2004（僅年份） | 同左 | Stefan Esser 發現第一個與 memory limit 相關的遠端漏洞，認為嚴重，未公開 exploit | `news/2026-10-21-calif-tale-of-two-php-remote-vulnerabilities.md`、`news/2026-10-22-0747-kocpc-php2shell-history-ai.md` |
| 2020（僅年份） | 同左 | bug #78876：過長變數造成記憶體耗盡，暫存檔沒清掉。未受重視 | 同上 |
| 2024（僅年份） | 同左 | 多年來首次外部稽核：Sovereign Tech Agency 出資、OSTIF 組織、Quarkslab 執行。核心開發者在修另一個問題時看到 OOM 問題的跡象，當時找不到具體攻擊路徑。幾種修法互相衝突（破壞相容、帶來阻斷服務風險、或要改大量擴充），共識決的小團隊停擺數月。基金會後來稱之為 structural failure（結構性失敗） | `news/2026-10-21-php-foundation-security-release-strengthening.md`、`news/2026-10-22-0002-thenextweb-php-foundation-structural-failure.md` |
| 2026-05（僅月份） | 同左 | PHP 基金會成立 Ecosystem Security Team。Volker Dusch 擔任 AI Security Engineer in Residence | `news/2026-10-21-php-foundation-security-release-strengthening.md` |
| 2026 年稍早（無日期） | 同左 | 與 Alpha-Omega 合作，用 Anthropic Claude Mythos 掃描 PHP；之後以 OpenAI Daybreak Red 驗證回報。Trail of Bits 近期亦在稽核 PHP（基金會未把他們列為這兩個 CVE 的回報者） | 同上 |
| 2026-07-01 起 | 同左 | 至修補日，已發布 15 個 CVE，並處理逾 100 份無效、重複或無法重現的回報 | 同上；The Next Web 作「自 7 月起」 |
| 2026-07-30 | 2026-07-30 | 基金會：Calif 開始稽核（PHP 被納入 Patch the Planet） | `news/2026-10-21-php-foundation-security-release-strengthening.md` |
| 2026-08-01 | 2026-08-01 | Sansec：Calif 找到多條 RCE 路徑。電腦王阿達寫「8/1 開始動手」。衛報轉述 Calif 稱 8/1 在語言模型協助下發現。與上一列是不同說法，尚未對齊成單一里程碑 | `news/2026-10-21-sansec-php2shell-critical-rce.md`、`news/2026-10-22-0747-kocpc-php2shell-history-ai.md`、`news/2026-10-22-0839-guardian-php-flaw-shutdown-websites.md` |
| 2026-08-11 | 2026-08-11 | Calif 研究員 Ryan Austin 向 PHP 回報，與 2024 年那個 OOM 問題同根。OpenAI 同日獨立回報同一根因。Calif 執行長 Thai Duong 致電 Volker Dusch | 基金會文；致電見 `news/2026-10-21-2240-cnyes-php-emergency-patch-heartbleed.md` |
| 2026-08-19 | 2026-08-19 | Wiz 用 Wiz Atlas、Gemini 4 Argon、GPT-5.6 Sol 找到第一個漏洞 | `news/2026-10-21-2159-wiz-php2shell-ai-uncovers-rce.md` |
| 2026-08-20 | 2026-08-20 | Wiz 在 Drupal 上確認未授權 RCE | 同上 |
| 2026-08-21 | 2026-08-21 | Wiz 在 WordPress 上確認未授權 RCE | 同上 |
| 2026-08-24 | 2026-08-24 | Wiz 向 PHP 安全團隊回報 | 同上；Sansec 時間軸同日 |
| 2026-09-18 | 2026-09-18 | OpenAI 回報更多攻擊路徑 | `news/2026-10-21-php-foundation-security-release-strengthening.md` |
| 2026-09-21 | 2026-09-21 | PHP 確認 Wiz 的報告，開始協調修補 | `news/2026-10-21-2159-wiz-php2shell-ai-uncovers-rce.md` |
| 2026-10-16（待查證） | 待查證 | 衛報寫白宮稱「周五」接獲通知，沒有寫日期。10/21 是周三，前一個周五是 10/16。是否就是這一天，待查證 | `news/2026-10-22-0839-guardian-php-flaw-shutdown-websites.md` |
| 2026-10-17（時分未公布） | 2026-10-17（時分未公布） | Amazon MadPot 蜜罐看到 PHP2Shell 利用嘗試，來源與商業匿名網路有關，比公開早四天。對方如何在禁運期間得知利用方式，AWS 表示不明 | `news/2026-10-22-0636-aws-php2shell-exploitation-madpot.md` |
| 2026-10-20 約 15:00 | 2026-10-20 23:00 | CVE 編號在論壇與社群流傳，附錯誤的發布時間與錯誤的 CVSS 10.0（官方為 9.2），當時沒有技術細節 | 基金會、`news/2026-10-22-0002-thenextweb-php-foundation-structural-failure.md` |
| 2026-10-20 15:20 | 2026-10-20 23:20 | CyberQ、ICSDA：Hacker News 出現貼文（隨後撤下）。貼文稱將於 10/22 18:00 CEST 公布，並稱 CVSS 10、影響 PHP 5 以上所有版本。貼文者自承未經證實 | `news/2026-10-21-0852-cyberq-php-core-rce-leak.md`、`news/2026-10-21-1357-icsda-php2shell-patch-released.md`、`news/2026-10-21-0335-watchtowr-php2shell-faq.md`、`news/2026-10-21-ithome-php-zero-day-storm-warning.md` |
| 2026-10-20 19:30 | 2026-10-21 03:30 | PHP 發出預告。釋出日從 10/22 提前到 **10/21 14:00 UTC**。預告本身沒有 CVE 編號，也沒有寫「遠端程式碼執行」。官方保留「細節公開或出現在野利用就再提前」的權利。發行商仍在打包，所以沒有立刻公開 | `news/2026-10-21-0330-php-net-upcoming-security-release.md`、基金會、`news/2026-10-21-0852-cyberq-php-core-rce-leak.md` |
| 2026-10-20 19:35:22 | 2026-10-21 03:35 | watchTowr 發布 FAQ，向公開管道確認這兩個 CVE 是真的 | `news/2026-10-21-0335-watchtowr-php2shell-faq.md` |
| 2026-10-20 約 20:00 | 2026-10-21 約 04:00 | Calif 誤發一段 PoC 展示影片。刪除後副本仍在社群流傳，加速隔日的 PoC | 基金會、The Next Web。Huntress 亦表示看過後來下架的影片（`news/2026-10-21-ithome-php-zero-day-storm-warning.md`） |
| 2026-10-20 約 23:00 起 | 2026-10-21 約 07:00 起 | 提供給少數關鍵基礎設施業者的緩解建議，可能外流 | 基金會 |
| 2026-10-21 約 02:00 | 2026-10-21 約 10:00 | Amazon 看到多份 PoC | `news/2026-10-22-0636-aws-php2shell-exploitation-madpot.md` |
| 2026-10-21 02:00–08:00 | 2026-10-21 10:00–16:00 | 更多利用嘗試，payload 與匿名基礎設施的選型與稍早不同，AWS 研判為多名行為者。能否在真實系統成功，當時仍不清楚 | 同上 |
| 2026-10-21 03:02 | 2026-10-21 11:02 | Cloudflare WAF 規則對免費與付費客戶預設上線，約比公開早 9 小時。外洩之後已看到針對客戶的攻擊，以及試圖變造請求以避開規則的流量 | `news/2026-10-21-2156-cloudflare-waf-protection.md` |
| 2026-10-21 07:41 | 2026-10-21 15:41 | Chainguard 在協調發布前六個多小時，單方面打破禁運，發布含修補的映像。攻擊者因而能提前對照修補 | 基金會 |
| 2026-10-21 07:43 | 2026-10-21 15:43 | Sansec 時間軸：Cloudflare 回報早期攻擊 | `news/2026-10-21-sansec-php2shell-critical-rce.md` |
| 2026-10-21 13:34（待查證） | 2026-10-21 21:34（待查證） | Wikipedia 稱 GitHub advisory 提前公開。php.net 摘要註記此說有 citation needed。本庫沒有 Wikipedia 全文 | `news/2026-10-21-2200-php-net-security-advisory.md` 的 time_note |
| 2026-10-21 14:00 | 2026-10-21 22:00 | 修補發布：PHP 8.5.12、8.4.27、8.3.36、8.2.35。官方安全公告與基金會說明同日公開。發布當下，安全團隊表示尚未發現可運作的公開 exploit | `news/2026-10-21-2200-php-net-security-advisory.md`、基金會 |
| 2026-10-21 14:00 後數小時 | 2026-10-21 22:00 後 | AWS：又出現更多 PoC，感測器幾乎立刻被打到。AWS 稱其後已被廣泛在野利用 | `news/2026-10-22-0636-aws-php2shell-exploitation-madpot.md` |
| 2026-10-21（時分未公布） | 同左 | watchTowr 全球蜜罐（Attacker Eye）觀察到在野利用 | `news/2026-10-21-0335-watchtowr-php2shell-faq.md` |
| 2026-10-21 16:30 EDT = 20:30 UTC | 2026-10-22 04:30 | Huntress 截至此時，在其客戶端尚未觀察到在野利用；同時寫明其他研究者已回報攻擊出現 | `news/2026-10-20-huntress-rapid-response-php2shell.md` |
| 2026-10-21（時分未公布，待查證） | 待查證 | Wikipedia 稱 CISA 表示尚未觀察到在野利用。本庫沒有 CISA 或 Wikipedia 全文 | 已查證事實指向 Wikipedia；news 無對應全文 |
| 2026-10-21 當日 | 2026-10-21 至 10/22 | 多國政府與民間網站預防性下線或限制功能。比利時 CCB 當時尚未記錄到針對比利時網站的攻擊 | 見 [04-for-onlookers.md](04-for-onlookers.md)；CCB 見 `news/2026-10-22-0848-ctwant-php-global-security-crisis.md` |
| 2026-10-22（僅日期） | 2026-10-22 | 數位發展部資通安全署新聞稿（民國 115 年 10 月 22 日）。已透過資安警訊、N-ISAC、TWCERT/CC 通知各機關與企業 | `news/2026-10-22-moda-php-emergency-update.md` |

## 三種「原本要公開的時間」

這三個時刻是**計畫**，不是已經發生的事件。換算如下，供對新聞時使用。

| 說法 | UTC | 台灣時間 | 其他時區 | 誰在說 |
| --- | --- | --- | --- | --- |
| 原訂 10/22，後提前 | 基金會沒有把「原訂的 10/22」寫成一個鐘點；提前後的鐘點是 10/21 14:00 UTC | 提前後為 10/21 22:00 | — | PHP 基金會、The Next Web |
| 10/22 11:00 美東 | 15:00 UTC | 10/22 23:00 | 10/22 17:00 CEST | watchTowr 向 BleepingComputer 所述的原協調揭露時間（`news/2026-10-21-0456-bleepingcomputer-php-warns-admins.md`） |
| 10/22 18:00 CEST | 16:00 UTC | **10/23 00:00** | 10/22 12:00 美東 | 外洩貼文（`news/2026-10-21-ithome-php-zero-day-storm-warning.md` 寫台灣 10/23 00:00） |

另有一說把「原協調揭露」記成 10/22 14:00 UTC（等於台灣 10/22 22:00、美東 10:00、中歐 16:00）。基金會公開文確認的是「從 10/22 提前到 10/21 14:00 UTC」，沒有寫原訂就是 14:00 UTC。AWS 部落格摘要則寫禁運原訂於 **10/21 14:00 UTC** 解除，與「原訂 10/22」的敘事並排時要看是不是把提前之後的時間當成了原訂。見差異檔。

## 讀這張表時的三個錨

- **10/17**：調查日誌不要從新聞稿當天開始，AWS 建議至少從這一天看。（`news/2026-10-22-0636-aws-php2shell-exploitation-madpot.md`）
- **10/20 23:00（台灣）前後**：編號外流。官方預告在台灣時間 10/21 凌晨 3:30。
- **10/21 22:00（台灣）**：修補與正式說明公開。台灣機關的通報新聞稿是次日。
