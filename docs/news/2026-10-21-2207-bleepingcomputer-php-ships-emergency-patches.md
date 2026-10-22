---
title: "PHP ships emergency patches for critical PHP2Shell flaws"
title_zh: "PHP 為重大 PHP2Shell 漏洞推出緊急修補"
source: BleepingComputer
source_type: 資安新聞媒體
url: https://www.bleepingcomputer.com/news/security/php-ships-emergency-patches-for-critical-php2shell-flaws/
author: Sergiu Gatlan
published_at: "2026-10-21T10:07:05-04:00"
published_at_taipei: "2026-10-21 22:07 (UTC+8)"
time_precision: exact
language: en
fetched_at: "2026-10-22"
tags: [修補, 官方]
audience: [developer]
---

## 摘要

PHP 安全團隊為統稱 PHP2Shell 的兩個未授權 RCE 推出緊急修補。漏洞由 Calif、OpenAI 與 Wiz 的研究人員發現。

## 重點

- 兩者同根：請求異常結束時，PHP 可能把記憶體留在已損壞的狀態。
- CVE-2026-109618：OOM 造成的記憶體破壞，可導致以 web worker 帳號身分執行程式碼。
- CVE-2026-109619：過期全域狀態，可導致 use-after-free、記憶體外洩與 RCE。
- PHP 8.x 用戶盡快安裝 8.5.12 / 8.4.27 / 8.3.36 / 8.2.35；PHP 7 以前請遷移到有修補的版本。
- 7.4 / 8.0 / 8.1 提供最小化原始碼回移植。

## 值得引用

> "We consider the risk highest for mod_php, with a demonstrated exploit where an unauthenticated request can trigger the attack before any application code runs." —— PHP 安全團隊
