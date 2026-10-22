---
title: "Two critical RCEs in PHP core"
title_zh: "PHP 核心的兩項重大遠端程式碼執行"
source: Cisco Talos
source_type: 廠商威脅通報
url: https://blog.talosintelligence.com/two-critical-rces-in-php-core/
author: Cisco Talos
published_at: "2026-10-21T11:10"
published_at_taipei: "未換算（原文未標時區）"
time_precision: exact
time_note: "頁面寫 Wednesday, October 21, 2026 11:10，沒有時區，因此不換算，檔名不加時分。"
language: en
fetched_at: "2026-10-22"
tags: [廠商, 修補]
audience: [developer]
---

## 摘要

Cisco Talos 威脅通報把 PHP 核心的兩項未授權遠端程式碼執行稱為 php2shell，並表示自 PHP 5.4 起的版本都可能受影響。

## 重點

- CVE-2026-109618 與 CVE-2026-109619 的 CVSS v4.0 皆為 9.2。
- 影響面寫到 WordPress、Drupal、Magento、Shopware、WooCommerce、Laravel，以及 cPanel、Plesk 上的 PHP 站台。
- Cisco 客戶可使用 Talos 的 Snort 特徵 67359 與 67360；頁面寫社群規則集也有提供。特徵內容不轉述。
- 請升級到已發布的修補版本。Talos 寫 PHP 8.1 與更舊版本沒有修補，並強烈建議升到 PHP 8.2 或更新。這是 Talos 頁面上的說法，與 PHP 專案另提供部分舊分支原始碼處置的說法並存，此處不改寫。
