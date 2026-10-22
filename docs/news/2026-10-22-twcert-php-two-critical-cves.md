---
title: "PHP 存在2個重大資安漏洞(CVE-2026-109618 和 CVE-2026-109619)"
source: TWCERT/CC
source_type: 台灣政府資安警訊
url: https://www.twcert.org.tw/tw/cp-169-11303-1d68a-1.html
author: TWCERT/CC
published_at: "2026-10-22"
published_at_taipei: "2026-10-22（原文僅標日期）"
time_precision: date-only
updated_at: "2026-10-22"
language: zh-TW
fetched_at: "2026-10-22"
tags: [官方, 台灣, 政府, 修補]
audience: [developer, non-technical]
---

## 摘要

台灣電腦網路危機處理暨協調中心（TWCERT/CC）漏洞警訊：PHP 公告 CVE-2026-109618 與 CVE-2026-109619，CVSS 4.x 皆為 9.2。頁面寫網路上已出現概念驗證程式，請儘速處置。

## 重點

- 兩項都可能讓未經身分驗證的遠端攻擊者執行任意程式碼。警訊將類型標為使用釋放後記憶體；此處不轉述記憶體細節。
- 官方仍支援、且需要升級的範圍：PHP 8.5.11（含）以下、8.4.26（含）以下、8.3.35（含）以下、8.2.34（含）以下。
- 建議升至 PHP 8.5.12、8.4.27、8.3.36、8.2.35。
- PHP 8.1（含）以下已停止維護，警訊寫不會有官方修補，建議升到仍受支援的版本。
- WordPress、Drupal、Joomla、Magento 等內容管理系統的底層多使用 PHP，應一併盤點。
