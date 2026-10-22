---
title: "Critical Remote Code Execution Vulnerabilities in PHP Core"
title_zh: "PHP 核心的重大遠端程式碼執行漏洞"
source: Akamai
source_type: 資安廠商部落格
url: https://www.akamai.com/blog/security-research/critical-remote-code-execution-vulnerabilities-php-core
author: Akamai Security Intelligence Group
published_at: "2026-10-21T13:00:00Z"
published_at_taipei: "2026-10-21 21:00 (UTC+8)；署名只寫日期"
time_precision: approximate
time_note: "頁面署名是 October 21, 2026，沒有時分。抓取讀到的 Published Time 為 2026-10-21T13:00:00Z，整點，正文沒有再確認，故標 approximate，不把它當成已核對的發布秒數。"
language: en
fetched_at: "2026-10-23"
tags: [廠商, 修補, WAF]
audience: [developer]
---

## 摘要

Akamai Security Intelligence Group 在修補日當天的短文。直接連到原站時被拒，本文依可讀到的頁面轉寫。只記修補與產品防護，不轉述攻擊內容。

## 重點

- 文章說 2026-10-21 PHP 發布安全公告，處理兩個嚴重漏洞，CVSS v4.0 皆為 9.2，編號 CVE-2026-109618、CVE-2026-109619。請盡快升到已修補版本。
- 文內連結指向 `https://www.php.net/archive/2026.php#2026-10-20-1`。那個錨點是 10 月 20 日的提前預告，不是 10 月 21 日 14:00 UTC 的正式安全公告（`#2026-10-21-5`）。句子本身寫的是修補已經發布。
- App & API Protector 客戶：Adaptive Security Engine 規則 3000991 v1，名稱為 PHP Remote Code Execution Attack Detected（CVE-2026-109618、CVE-2026-109619）。文章稱既有的命令注入規則正在處理他們看到的攻擊流量。規則內容與流量樣貌不轉述。
- 文章寫最有效的防守仍是盡快套上廠商修補。暫時無法更新時，他們認為應加上網站應用程式防火牆規則。這句是廠商對自家客戶的建議，不取代「更新才是唯一完整修補」。
