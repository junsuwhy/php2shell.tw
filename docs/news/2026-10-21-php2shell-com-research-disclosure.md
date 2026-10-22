---
title: "PHP2Shell — AI uncovers critical vulnerabilities in the backbone of the web"
title_zh: "PHP2Shell：研究團隊聯合揭露頁"
source: PHP2Shell（研究團隊官網）
source_type: 原始研究（Wiz Research、OpenAI Codex Security、Calif 聯合揭露頁）
url: https://www.php2shell.com/
author: Wiz Research、OpenAI Codex Security、Calif
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（頁面未標時刻）"
time_precision: date-only
time_note: "頁面 meta 沒有 article:published_time。同日 Wiz 部落格（2026-10-21T09:59:59-04:00，台灣 21:59）已連結此站，故日期取 2026-10-21，不把部落格鐘點當成此頁的發布時間。"
language: en
fetched_at: "2026-10-23"
tags: [原始研究, 修補, 緩解, 偵測, 人工智慧]
audience: [developer, onlooker, non-technical]
---

## 摘要

Wiz Research、OpenAI Codex Security、Calif 的聯合揭露頁。說明兩個漏洞類別的影響、受支援分支的修補版、暫時緩解與更新後要回頭檢查的設定。頁面上的示範影片與示範用程式本摘要不收、不連結、不描述利用鏈。

## 誰署名

- Wiz Research：Sagi Tzadik、Shir Tamari、Nir Ohfeld、Tomer Schwartz。
- OpenAI Codex Security：Amy Burnett。
- Calif：Ryan A.（頁面連結到 x.com/lcfr_hax）。
- 協調對象包含 PHP 安全團隊，以及 Google 的 Gemini 團隊（發現、協調、修補驗證）。

這套署名和本站既有說法並陳：基金會與 Calif 文章寫 Ryan Austin；基金會只確認 OpenAI 於 8 月 11 日獨立回報，沒有寫個人姓名。見差異檔，此處不合併。

## 影響（只記後果）

- 兩類漏洞，CVSS 9.2：記憶體不足處理造成的破壞（CVE-2026-109618），以及跨請求殘留的過期全域狀態（CVE-2026-109619）。
- 頁面寫未驗證的人可能在受影響伺服器上執行程式，或讀取 PHP 行程記憶體。記憶體裡可能有其他請求或伺服器本身的密碼、驗證 token、API 金鑰、憑證。
- 讀取記憶體不需要先達成遠端執行程式。頁面說這會讓只盯著「有沒有惡意程式被執行」的工具較難發現。
- 不限 WordPress、Drupal、Joomla。那三個是當時用來示範的代表目標。漏洞在 PHP 本身，連簡單的 Hello World 也算。頁面另列常見軟體：WordPress、Moodle、Nextcloud、Laravel、Symfony、Drupal、Joomla、MediaWiki。
- 頁面寫已示範的遠端執行與記憶體外洩不需要帳號；個別變體的條件不同。
- 跑在最新已修補版本上的網站受到保護。只更新應用程式不會更新底下的 PHP。

## 頁面自己的數字與版本說法

- 頁面寫 “PHP powers approximately 70% of websites”。沒有 W3Techs「已知伺服器端語言」的限定。本站維持 69.3% 的說法，不改成七成。
- 問答寫：受影響版本可追溯到 PHP 5.4，修補前幾乎每個 PHP 版本都至少中一個問題；實際曝險仍看版本、設定與個別漏洞。這是研究團隊說法。
- 同頁列出的第一個修補版只有四個受支援分支：8.2.35、8.3.36、8.4.27、8.5.12。這四個與 PHP 官方公告一致。官方沒有「自 5.4 起每一個版號都已驗證」的清單，也另為 7.4、8.0、8.1 提供最小化原始碼回移植。本摘要不把研究團隊的「幾乎每個版本」寫成官方矩陣。

## 暫時緩解與更新後

頁面原話：Upgrading PHP is the only complete remediation。下列措施只降低特定路徑的曝險，可能影響功能、效能或可用性，不能代替更新。

- `memory_limit = -1` 可擋一些依賴 PHP 記憶體上限處理的路徑，但記憶體耗盡改由作業系統處理，worker 可能被殺掉，請求中斷，穩定度與可用性下降。若採用，搭配 Linux cgroup v2 的 `memory.max`（或同等機制）把影響限在 PHP 行程。擋不了應用程式自己的大量配置，以及跟記憶體無關的觸發。多執行緒部署裡，殺掉行程也可能打斷其他執行緒上的請求。
- 不要用 `RLIMIT_AS` 或 `RLIMIT_DATA` 代替。頁面寫 PHP 公告警告它們可能觸發同一類失敗。
- 依實際上傳需求調低 `post_max_size`（會限制正常上傳，要實測）、在應用允許時調低 `max_input_nesting_level`（複雜表單可能需要較高值）、不依賴上傳進度時設 `session.upload_progress.enabled = 0`。這些只限制特定的記憶體壓力來源。
- 正式環境 `display_errors = 0` 並重啟 worker，減少錯誤訊息外洩；不是修補。
- 支援的版本可設 `fatal_error_backtraces = 0` 並重啟 worker。頁面說這只對應已示範的 backtrace 機制，其他機制仍在。
- 調低 PHP-FPM 的 `pm.max_requests`，讓 worker 較常回收，可降低損壞狀態跨請求留下來的機會；有效能代價，且不管不靠多次請求的機制。
- SELinux 或 AppArmor 可限制 worker 的能力與執行其他程式，用來約束影響，不能當成已阻止所有執行程式或記憶體外洩。

更新後：官方修補新增硬性記憶體上限，到達會終止行程，shutdown handler 不會執行，要評估對應用的影響。回頭檢查 `memory_limit`（含把暫時的 `-1` 改回）、讓 `post_max_size` 低於記憶體預算仍能完成正常上傳、把 `max_input_nesting_level` 限在應用需要的深度。可選 `expose_php = 0` 減少版號外洩，頁面寫明這不是修補。

對照 PHP 官方：php.net 短公告沒有「硬性記憶體上限會跳過 shutdown handler」這句營運說明。GHSA-w8hw-w9fx-j79w 的修補說明與此相符的部分是，除了較緩和的處理，還有一道較高的門檻會立刻結束行程，使收尾程序看不到無效狀態。本摘要不寫那道門檻在程式裡怎麼實作。`max_input_nesting_level` 這個設定名稱出現在研究團隊頁，沒有出現在 php.net 短公告；官方短公告說的是在網頁伺服器或 proxy 限制巢狀深度。

## 調查訊號

頁面列出：異常大或格式錯誤的 PHPSESSID 回應 cookie；異常 multipart 請求之後接著 memory limit 錯誤或連續 HTTP 500；無法解釋的 PHP worker 當掉或重啟。

同時寫明：單一規則涵蓋不了每條路徑；這些訊號不能單獨證明遭到利用；沒看到也不代表沒事；有些情況只外洩記憶體、沒有在伺服器上執行惡意程式；應用程式日誌可能幾乎沒有紀錄，因為路徑在應用層之下。不論有沒有看到可疑活動，都要更新 PHP。本摘要不寫可拿來測試的請求。

## 名稱、模型、協作

- 頁面寫 php2shell 是他們給示範用組合程式取的名字，後來也指這整個研究。不描述那支程式的內容。
- 人工智慧：頁面自述 Wiz Research 使用 Wiz Atlas、Gemini 4 Argon、GPT-5.6-Sol。並寫 Gemini 4 的貢獻特別顯著，Gemini 團隊參與。這是研究團隊自述。Wiz 部落格把第三個模型寫成 “GPT-5.6 Sol”（空格，沒有連字號）。本摘要不寫這些模型如何被用來發展利用方式。
- 產業協作：Google Cloud、Cloudflare、AWS、Microsoft、Automattic、Fastly、Akamai、Imperva、Vercel 等協助準備客戶指引、偵測與暫時防護。頁面寫這些不能取代更新 PHP；涵蓋範圍視廠商與路徑而定。

## 可對上原文的句子

- “Sites running the latest patched PHP releases are protected.”
- “Upgrading PHP is the only complete remediation.”

## 技術細節連結

頁面「Technical details」連到 12 家官方文章：Wiz、OpenAI、Calif、PHP Foundation、Akamai、Imperva、Cloudflare、Corelight、CrowdStrike、Unit 42、Cisco Talos、Vercel。本站新聞目錄已有其中 10 篇；本次另收 Akamai 與 Vercel。OpenAI 那篇先前抓取失敗，本檔不補寫其正文。
