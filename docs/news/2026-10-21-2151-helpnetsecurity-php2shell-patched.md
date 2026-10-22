---
title: "PHP2Shell: Critical PHP vulnerabilities patched, update now!"
title_zh: "PHP2Shell：PHP 重大漏洞已修補，立即更新！"
source: Help Net Security
source_type: 資安新聞媒體
url: https://www.helpnetsecurity.com/2026/10/21/php2shell-php-vulnerabilities-patched-cve-2026-109618-cve-2026-109619/
author: Mirko Zorz
published_at: "2026-10-21T13:51:05+00:00"
published_at_taipei: "2026-10-21 21:51 (UTC+8)"
updated_at: "2026-10-21T14:17:02+00:00"
time_precision: exact
language: en
fetched_at: "2026-10-22"
tags: [修補, AI, 名言]
audience: [developer, onlooker]
---

## 摘要

PHP 釋出 8.5.12、8.4.27、8.3.36、8.2.35，修補統稱 PHP2Shell 的 CVE-2026-109618 與 CVE-2026-109619，攻擊者無需登入即可遠端執行程式碼。

## 重點

- 所有服務網頁請求的 PHP 都受影響：PHP-FPM、Apache mod_php、php-cgi、FrankenPHP、LiteSpeed；mod_php 最危險。
- CVE-2026-109618：OOM 處理中斷時內部請求資料只初始化一半，清理時把無效資料當有效。
- CVE-2026-109619：請求擁有的內部狀態在記憶體釋放後仍殘留，同一 worker 的下一個請求可能誤用。
- 英國 NCSC 呼籲無法立即修補的系統考慮下線。

## 值得引用

> "These findings rank among the most severe vulnerabilities discovered in PHP, and arguably in software history... Frontier AI models substantially reduced that barrier, turning a longstanding flaw into an exploit." —— Wiz 研究員

> "The PHP situation will lead to a mass of incidents – it's one of the biggest vulns in years." —— Kevin Beaumont
