---
title: "PHP2Shell 修補已釋出：PHP 核心兩個重大 RCE 漏洞（CVE-2026-109618／109619），請立即更新到 8.5.12／8.4.27／8.3.36／8.2.35"
source: ICSDA 中華民國資通安全發展協會
source_type: 台灣資安社群／協會
url: https://icsda.org.tw/php2shell-cve-2026-109618-109619/
author: ICSDA 資安小編
published_at: "2026-10-21T05:57:49+00:00"
published_at_taipei: "2026-10-21 13:57 (UTC+8)"
updated_at: "2026-10-21T14:03:02+00:00（22:00 修補釋出後更新）"
time_precision: exact
language: zh-TW
fetched_at: "2026-10-22"
tags: [修補, 緩解, 偵測, 台灣, 舊版本]
audience: [developer, non-technical]
---

## 摘要

台灣在地、以繁中撰寫的完整應變整理，在官方 22:00 發布後立即更新。內容涵蓋時間軸、成因白話說明、受影響範圍、版本對照、暫時緩解與偵測。

## 重點

- 資安社群稱為 PHP2Shell（也有人稱 PHP4Shell）。
- 時間軸（台灣時間）：
  - 10/20 23:20：Hacker News 出現貼文透露 PHP 即將揭露兩個 RCE，隨後撤下。
  - 同日 watchTowr 證實並表示已重現 CVE-2026-109618。
  - PHP 安全團隊發預告，原定週四的揭露提前到 10/21。
  - 10/21 22:00：PHP 官方準時發布修補版與安全公告。
- **風險最高：Apache mod_php**（未登入的請求就能在網站程式執行前觸發）。
- 無法從網站程式碼修補，只能更新 PHP 本身。
- 使用 remi 套件庫（rpms.remirepo.net）的主機當天不會有更新；Docker 使用者要重建映像並重新部署。
- **舊版本**：7.4／8.0／8.1 有官方最小化原始碼修補；**7.3 以前（含 5.x）沒有任何修補**，應立即規劃升級，完成前改為不直接對外（VPN、內網、WAF + 限縮來源 IP）。
- 盤點範圍：對外官網、電商、報名系統、論壇；cPanel、Plesk 等控制台；廠商設備或 Windows 軟體內建的 `php.exe`、`php-cgi.exe`。
- 檢查：每台主機 `php -v`，同時確認網站實際使用的 php-fpm 或 mod_php 版本（兩者可能不同）。
- 暫時緩解：見 [[03-for-developers]]（同官方建議：`session.upload_progress.enabled=0`、`memory_limit=-1` 並以 `php_admin_value` 鎖定、調低 `post_max_size`、勿用 `RLIMIT_AS`/`RLIMIT_DATA`）。

## 值得引用

> 修補已經釋出，接下來就是和攻擊者賽跑：更新 PHP、重啟服務、確認版本、檢查紀錄，四件事請在今晚到明天上班前完成。
