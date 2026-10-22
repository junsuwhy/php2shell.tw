---
title: "PHP warns admins of two critical flaws, emergency patches coming tomorrow"
title_zh: "PHP 警告管理員兩個重大漏洞，緊急修補明天推出"
source: BleepingComputer
source_type: 資安新聞媒體
url: https://www.bleepingcomputer.com/news/security/php-warns-admins-of-two-critical-flaws-emergency-patches-coming-tomorrow/
author: Lawrence Abrams
published_at: "2026-10-20T16:56:43-04:00"
published_at_taipei: "2026-10-21 04:56 (UTC+8)"
updated_at: "2026-10-21（文首加註修補已釋出）"
time_precision: exact
language: en
fetched_at: "2026-10-22"
tags: [預告, 外洩, watchTowr]
audience: [developer, onlooker]
---

## 摘要

PHP 安全團隊發出預告：將於 **2026-10-21 14:00 UTC（台灣時間 22:00）** 發布安全更新，修補兩個 CVSS v4.0 9.2 的漏洞，並保留「細節公開或出現在野攻擊時提前發布」的權利。官方當時未透露任何技術細節、受影響版本或修補版號。

## 重點

- 預告同時寄到 PHP 的 ANNOUNCE 郵件列表。
- watchTowr 向 BleepingComputer 確認：漏洞編號是 CVE-2026-109618、CVE-2026-109619，屬 RCE，被認為影響 PHP 5、6、7、8。
- 原本的協調揭露時間是**週四（10/22）美東上午 11 點**，因外洩而提前。

## 值得引用

> "We reserve the right to release earlier should details of either vulnerability become public, or should evidence of active exploitation appear in the wild." —— PHP 安全團隊

> "In the last hour, two remote code execution vulnerabilities in PHP have been leaked... we can confirm that these vulnerabilities are indeed real." —— watchTowr 執行長 Benjamin Harris
