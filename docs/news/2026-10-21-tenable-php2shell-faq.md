---
title: "php2shell (CVE-2026-109618, CVE-2026-109619): Frequently asked questions about critical PHP remote code execution vulnerabilities"
title_zh: "Tenable：php2shell 常見問題"
source: Tenable
source_type: 廠商研究
url: https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote
author: Satnam Narang
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [廠商, 修補, 常見問題]
audience: [developer]
---

## 摘要

Tenable 研究員 Satnam Narang 的問答：兩項都是未驗證的遠端程式碼執行，PHP 安全團隊評為 CVSS v4.0 9.2。外流時曾出現不正確的 10.0。

## 重點

- 文章寫 CVE 編號於 2026-10-20 外流，原訂 10 月 22 日的發布提前到 2026-10-21 14:00 UTC。
- 正式修補為 8.5.12、8.4.27、8.3.36、8.2.35。7.4 至 8.1 沒有正式發行版，只有最小原始碼回溯；5.4 至 7.3 已終止支援，PHP 專案不提供修補。
- 文章並列數種說法：Cloudflare 技術長 Dane Knecht 稱已看到早期攻擊；watchTowr 稱觀察到對兩者的攻擊嘗試；PHP Foundation 稱，到發布時沒有在外流的概念驗證裡找到可運作的利用程式。此處保留並陳，不挑選。
- Tenable 將兩者列為 Vulnerability of Concern。更新是唯一完整修復；PHP 列出的設定只能降低部分路徑的風險。
- 掃描外掛的輸出欄位與任何可重現步驟不轉述。
