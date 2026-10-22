---
title: "多家資安公司警告PHP零時差漏洞風暴即將來襲，預告修補的重大漏洞已經曝光"
source: iThome
source_type: 台灣科技媒體
url: https://www.ithome.com.tw/news/179861
author: 周峻佑
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
language: zh-TW
fetched_at: "2026-10-22"
tags: [外洩, 預告, 零時差]
audience: [developer, onlooker]
---

## 摘要

iThome 在修補釋出前的報導：PHP 預告 10/21 14:00 UTC（台灣 22:00）發布更新，但漏洞資訊已經外流，資安公司警告零時差攻擊風暴將至。

## 重點

- 依 W3Techs，全球約 **69.3%** 網站使用 PHP；WordPress、Drupal、Joomla、Magento 等皆以 PHP 打造。
- 外洩源自 **Hacker News 論壇貼文**，稱 PHP 將於 CEST 10/22 18:00（台灣 10/23 00:00）公布兩個 CVSS 滿分 10 的 RCE，影響 PHP 5 以上所有版本。
- watchTowr 確認屬實；Nextron Systems 研究員 Florian Roth 透露其中一個 RCE 在 PHP 核心；CERT-EU 也證實 CVE 編號對應。
- Sansec：已有疑似 Calif.IO 打造的攻擊工具 PHP2Shell 出現，號稱可在 PHP 5.4.0 以上運作——這是兩漏洞被統稱為 PHP2Shell 的由來；預測官方公告後 15 分鐘內可能出現大規模攻擊。
- Huntress 曾看到 PHP2Shell 的 PoC 影片（後下架）。
- 資安專家 Kevin Beaumont 警告：有研究人員疑似根據 PHP 團隊在 GitHub 的提交，**用大型語言模型生成漏洞細節並公布**。
