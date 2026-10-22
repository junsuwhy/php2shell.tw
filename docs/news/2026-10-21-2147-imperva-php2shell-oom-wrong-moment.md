---
title: "PHP2Shell: When PHP Runs Out of Memory at the Wrong Moment"
title_zh: "PHP2Shell：當 PHP 在錯誤的時刻記憶體耗盡"
source: Imperva
source_type: 資安廠商部落格（技術分析）
url: https://www.imperva.com/blog/php2shell-vulnerability-updates/
author: Nadav Avital, Bar Menachem
published_at: "2026-10-21T13:47:21+00:00"
published_at_taipei: "2026-10-21 21:47 (UTC+8)"
updated_at: "2026-10-21T14:30:52+00:00"
time_precision: exact
language: en
fetched_at: "2026-10-22"
tags: [技術分析, bailout, OPcache, session, CWE-824]
audience: [developer]
---

## 摘要

對 PHP2Shell 的機制做了清楚的分類拆解，並特別指出「觸發容易、轉成 RCE 難」——攻擊複雜度高。

## 重點

- 兩漏洞皆歸類 **CWE-824：存取未初始化指標**，CVSS v4.0 9.2。
- 涉及元件：session 處理、OPcache 類別快取、致命錯誤 backtrace 產生。
- 除 RCE 外，已展示的效果還有：worker 崩潰、任意檔案讀取、伺服器記憶體外洩。
- 「一個只會 echo "OK" 的端點也可能受影響」——漏洞在任何一行應用程式碼執行前就發生。
- 被認為可回溯到 PHP 5.4.0，但並非每個版本都逐一驗證。
- **共通主線：bailout 留下陳舊狀態。** PHP 遇到致命錯誤（例如超過 `memory_limit`）時用 `longjmp()` 式的 bailout 中止處理；若此時已發布指標或配置快取槽、但收尾還沒做，就會留下半初始化或過期狀態。在 worker 會重複處理多個請求的部署（如 Apache prefork）中，下一個落到同一 worker 的請求就可能碰到已釋放的記憶體。
- 五種已展示的利用技巧中，**三種用 session upload-progress 當遠端觸發點**。
- OPcache 那條路徑：bailout 留下已配置但未發布的類別快取槽 → 陳舊的類別查找把攻擊者資料當內部結構 → 影響類別常數解析 → 檔案操作被導向攻擊者指定路徑 → **任意檔案讀取**（設定檔、資料庫密碼、API 金鑰）。
- Session ID 外洩：攻擊者影響的記憶體被當成超長字串，透過 `Set-Cookie: PHPSESSID` 回傳。
- 攻擊複雜度高：需要下一個請求打到同一個 Apache worker，並精準塑形資料填入被釋放的空間；時機不對 worker 可能只會崩潰或正常回應。
