---
title: "PHP RCE FAQ: PHP2Shell CVE-2026-109618 & CVE-2026-109619"
title_zh: "PHP RCE 常見問題：PHP2Shell"
source: watchTowr
source_type: 威脅情報公司
url: https://watchtowr.com/intelligence/php-cve-2026-109618-faq/
author: watchTowr
published_at: "2026-10-20T19:35:22+00:00"
published_at_taipei: "2026-10-21 03:35 (UTC+8)"
updated_at: "2026-10-22T00:33:02+00:00"
time_precision: exact
language: en
fetched_at: "2026-10-22"
tags: [外洩, FAQ, 在野利用, 蜜罐]
audience: [developer, onlooker]
---

## 摘要

watchTowr 是最早公開「確認外洩的兩個 CVE 是真的」的資安公司。這份 FAQ 在外洩當晚發布，之後持續更新。

## 重點

- 稱兩漏洞「影響 PHP 5 以後所有版本」（PHP 5、7、8 全系列）。
- 修補：8.5.12、8.4.27、8.3.36、8.2.35；7.4、8.0、8.1 僅有有限的原始碼修補；PHP 5 無修補。
- **10/21 起其全球蜜罐網路（Attacker Eye）已觀察到在野利用。**
- 外洩起點：社群貼文稱將於 2026-10-22 18:00 CEST 公布兩個 PHP RCE；貼文者自承只是相信消息來源、未經證實。
- watchTowr 執行長 Benjamin Harris 對 BleepingComputer 表示兩者都是「CVSS 10」——後來官方正式評分為 **9.2**。

## 備註

watchTowr 的「CVSS 10」與「PHP 5 起全部受影響」說法，與官方公告（9.2；研究者實測回溯到 5.4）有出入，引用時請註明。
