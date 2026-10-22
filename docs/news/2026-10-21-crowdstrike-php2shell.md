---
title: "CrowdStrike Protects Customers from Threats Delivered via PHP2Shell"
title_zh: "CrowdStrike：防護經由 PHP2Shell 送達的威脅"
source: CrowdStrike
source_type: 廠商威脅通報
url: https://www.crowdstrike.com/en-us/blog/crowdstrike-protects-customers-from-php-rce-zero-days/
author: CrowdStrike
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [廠商, 修補]
audience: [developer]
---

## 摘要

CrowdStrike 於 2026-10-21 發文，將 CVE-2026-109618 與 CVE-2026-109619 合稱 PHP2Shell。文章頁沒有具名作者，此處作者記為 CrowdStrike。

## 重點

- 兩項 CVSS 4.0 皆為 9.2。未驗證的遠端攻擊者可在受影響的網頁伺服器上執行指令，而且不需要應用程式本身另有漏洞。
- 文章寫 Falcon 對事後行為提供現成的可視性與偵測，並稱已端到端驗證此影響。
- 7.x 與 8.x 都被寫入受影響範圍；文章稱沒有仍受支援的分支完全不受影響。
- 唯一完整處置是修補。不能立刻修補時，該文把端點行為監控當成主要防線。
- 記憶體分類與利用路徑不轉述。
