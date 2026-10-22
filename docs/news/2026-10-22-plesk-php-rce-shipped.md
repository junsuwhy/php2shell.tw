---
title: "Vulnerability CVE-2026-109618 and CVE-2026-109619: Remote code execution in PHP shipped with Plesk"
title_zh: "Plesk 隨附 PHP 的遠端程式碼執行漏洞"
source: Plesk
source_type: 主機控制台官方公告
url: https://support.plesk.com/hc/en-us/articles/44397729587351-Vulnerability-CVE-2026-109618-and-CVE-2026-109619-Remote-code-execution-in-PHP-shipped-with-Plesk
author: Plesk
published_at: "2026-10-22T02:11"
published_at_taipei: "未換算（原文未標時區）"
time_precision: exact
time_note: "頁面只標 Updated October 22, 2026 02:11，沒有時區，因此不換算，檔名不加時分。"
language: en
fetched_at: "2026-10-22"
tags: [官方, 主機控制台, 修補]
audience: [developer]
---

## 摘要

Plesk 支援文章：隨 Plesk 提供的 PHP 都受 CVE-2026-109618 與 CVE-2026-109619 影響。兩項都被標為重大，CVSS 9.2，可能遠端程式碼執行。

## 重點

- Linux 與 Windows 的 8.2 至 8.5：修補版為 8.5.12、8.4.27、8.3.36、8.2.35。
- Linux 上的 8.1.34、8.0.30、7.4.33 版號不變；2026-10-21 建置的才含修補，更早的建置不含。
- Plesk 本身的 sw-engine：Obsidian 18.0.80 Update 11，以及 18.0.81 Update 4。Linux 與 Windows 都有。
- 5.6、7.2、7.3 指向付費的 TuxCare 延長支援。
- 正文的處置是把 Plesk 更新到當時最新版本。檢查例子是 `/opt/plesk/php/8.3/bin/php -v`，示例輸出為 PHP 8.3.36，建置時間 Oct 21 2026 08:04:57。
- 留言區的其他指令不是官方本文，不採用。文章連到的一般更新教學本次沒有另開。
