---
title: "Critical PHP Security Release - CVE-2026-109618 and CVE-2026-109619"
title_zh: "cPanel：PHP 重大安全更新"
source: cPanel
source_type: 主機控制台官方公告
url: https://support.cpanel.net/hc/en-us/articles/44397389677335-Critical-PHP-Security-Release-CVE-2026-109618-and-CVE-2026-109619
author: David Hertenstein
published_at: "2026-10-22T00:11"
published_at_taipei: "未換算（原文未標時區）"
time_precision: exact
time_note: "頁面只標 Updated：October 22, 2026 00:11，沒有時區，因此不換算，檔名不加時分。"
language: en
fetched_at: "2026-10-22"
tags: [官方, 主機控制台, 修補]
audience: [developer]
---

## 摘要

cPanel 支援文章列出 CVE-2026-109618 與 CVE-2026-109619 的修補版本，並提供 EasyApache 4 的更新與檢查指令。成功利用可能造成遠端程式碼執行。

## 重點

- cPanel & WHM 修補版：11.110.0.153、11.134.0.66、11.136.0.50、11.138.0.18。WP Squared：11.138.1.17。
- cPanel EasyApache 4：ea-php74 7.4.33-19、ea-php80 8.0.30-12、ea-php81 8.1.34-5、ea-php82 8.2.35、ea-php83 8.3.36、ea-php84 8.4.27、ea-php85 8.5.12。
- 同一張表的 CloudLinux EasyApache 4 欄另有一組 ea-php 版號，並指向 CloudLinux 狀態頁。那些數字是 cPanel 文章裡的欄位，不是本次從 CloudLinux 部落格正文讀到的。
- 官方指令是先更新套件庫資料，再執行 cPanel 的更新腳本。7.4 以前指向 TuxCare 延長支援。
- 檢查例子是查指定 ea-php 套件的變更紀錄是否出現 CVE-2026-109618。

## 值得引用

> yum clean all && yum makecache
>
> /scripts/rpmup
