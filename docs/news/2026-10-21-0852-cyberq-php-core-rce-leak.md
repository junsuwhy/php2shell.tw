---
title: "PHP 核心雙 RCE 漏洞提前外洩！全球近六成主機無修補可用，企業偵測與緊急應變指南"
source: CyberQ 賽博客
source_type: 台灣資安媒體
url: https://cyberq.tw/2026/10/21/two-cvss-92-rce-vulnerabilities/
author: CyberQ
published_at: "2026-10-21T00:52:00+00:00"
published_at_taipei: "2026-10-21 08:52 (UTC+8)"
updated_at: "2026-10-21T14:00:12+00:00"
time_precision: exact
language: zh-TW
fetched_at: "2026-10-22"
tags: [外洩, 曝險統計, 舊版本, 台灣]
audience: [developer, non-technical]
---

## 摘要

在修補釋出前撰寫的台灣在地應變指南，特色是整理了「多少主機根本拿不到修補」的統計，並清楚標示哪些說法尚待官方確認。

## 重點

- 事件從 **10/20 15:20 UTC 一則 Hacker News 貼文**開始，到 PHP 官方宣布提前一天修補，前後不到四小時。
- 原訂揭露時間是美東 10/22（週四）上午 11 點，提前到 10/21。
- 外流內容含一張名為 PHP2Shell 的攻擊工具截圖，標示出自 Calif.IO，宣稱可打 PHP 5.4.0 以後所有版本。
- php.net 的預告全文**沒有提到 CVE 編號，也沒用「遠端程式碼執行」一詞**；這些描述來自 watchTowr 與外流貼文。
- 當時兩個 CVE 在 cve.org 仍為 Reserved，NVD 未評分。
- **曝險統計（引 Mallory，以 Shodan 的 X-Powered-By 標頭統計）**：約 150 萬台回報版本的對外主機中，**59%（883,717 台）跑的是拿不到官方修補的版本**；另約 74 萬台隱藏版本號未納入。
  - 美國 593,489 台中 54% 無修補；日本 142,213 台中 61%；中國 189,636 台中 75%；韓國 49,009 台中 82%。
  - 主機商：Amazon 網路逾 29 萬台、Hostinger 142,401、Alibaba Cloud 81,078、Hetzner 51,354、DigitalOcean 47,105、OVH 36,848。
- PHP 8.2 安全支援於 **2026-12-31** 結束，8.1 以前早已停止支援。
- Debian、Ubuntu、RHEL 可能回移植（backport）修補，應以發行版公告為準，不能只看 php.net 版號。
- Huntress 的 John Hammond 解讀「2shell」命名慣例：通常意味一個請求就能拿到 shell。

## 對台灣的意義

> 對於台灣大量以 PHP 架設的 WordPress、WooCommerce、Drupal 與各類內部系統而言，這意味著在修補程式落地之前，攻擊者已經知道有東西值得找，防守方卻還不知道該防什麼。
