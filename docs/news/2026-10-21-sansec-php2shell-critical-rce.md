---
title: "PHP2Shell: Critical PHP RCE (CVE-2026-109618, CVE-2026-109619)"
title_zh: "PHP2Shell：PHP 重大 RCE"
source: Sansec
source_type: 資安廠商研究（電商安全）
url: https://sansec.io/research/php2shell
author: Sansec Forensics Team
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（metadata 為 00:00:00Z，視為僅有日期）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [電商, Magento, 緩解, 時間軸, 舊版本]
audience: [developer, non-technical]
---

## 摘要

專注電商安全的 Sansec 整理的 UTC 時間軸、受影響平台清單與電商店家的緊急做法。

## 時間軸（UTC）

| 時間 | 事件 |
|---|---|
| 2026-08-01 | Calif 找到多條 RCE 路徑 |
| 2026-08-11 | Calif 向 PHP 回報第一個 bug，開始協調揭露 |
| 2026-08-24 | Wiz Research 向 PHP 回報 |
| 2026-10-20 | 細節外洩；watchTowr 確認 |
| 2026-10-21 07:43 | Cloudflare 回報早期攻擊 |
| 2026-10-21 14:00 | PHP 發布修補；各方公開揭露 |

## 重點

- 漏洞程式碼可回溯到 PHP 5.4.0（2012），預設設定就有漏洞。
- Calif 展示可未授權 RCE 的應用包括：Magento、WordPress、Drupal、Joomla、MediaWiki、Roundcube、phpMyAdmin、Nextcloud、Laravel、Symfony、WHMCS。
- Magento、Shopware、WooCommerce 商店即使自身程式碼乾淨也會曝險；mod_php 與 PHP-FPM 都受影響。
- PHP 8.1 以前沒有官方修補：請主機商回移植，或搬到受支援版本。
- 應用層防護（如 Sansec Shield）擋不了，因為問題發生在應用程式碼之前。
- 電商暫時做法：在 web server 擋 `multipart/form-data`（會影響上傳與部分結帳）；或改唯讀／靜態維護頁（**應用程式自己的維護模式沒用**）；關閉 `session.upload_progress.enabled`、`memory_limit=-1`（修補後要改回）。
