---
title: "Rapid Response: php2shell"
title_zh: "快速應變：php2shell"
source: Huntress
source_type: 資安廠商部落格
url: https://www.huntress.com/blog/php2shell-leaked-critical-php-vulnerabilities
author: John Hammond
published_at: "2026-10-20"
published_at_taipei: "2026-10-20（原文未標時間）"
updated_at: "2026-10-21（多次更新，最後一次註明為 2026-10-21 16:30 ET 之狀態）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [外洩, 偵測, 應變, webshell]
audience: [developer]
---

## 摘要

Huntress 在漏洞資訊外洩當天（10/20）發布的應變文，隔天持續更新。重點放在「怎麼偵測被打了」：RCE 得手後最明顯的跡象，是 PHP 工作行程生出不該出現的子行程。

## 重點

- 兩個漏洞：CVE-2026-109618、CVE-2026-109619，CVSS v4.0 9.2。修補版 8.5.12 / 8.4.27 / 8.3.36 / 8.2.35，約美東 10/21 09:30 釋出。
- 截至 10/21 16:30 ET，Huntress 在其客戶端**尚未觀察到**在野利用，但其他研究者已回報攻擊出現。
- 對無修補的 EOL 版本，PHP 建議 `session.upload_progress.enabled = Off`。
- 偵測建議：
  - 監看 `php-fpm`、`php-cgi`、`php-cgi.exe`、`httpd`、`apache2` 是否啟動 `sh`、`bash`、`cmd.exe`、`powershell.exe`、`python`、`perl`、`curl`、`wget`、`nc`、`certutil.exe`。
  - 指令列出現 `/dev/tcp/`、`fsockopen`、`mkfifo`（反向 shell 特徵）。
  - 網頁伺服器直接執行 `whoami`、`id`、`uname -a`、`ipconfig`。
  - 檢查網站根目錄新增檔案（webshell）、新排程、新帳號。
- 推薦 Florian Roth 的 process-watcher 工具（先用觀察模式）。
- 懷疑遭入侵：隔離主機、保留 web server 與 PHP 日誌。
- 發布時 IOC 標示為「TBD」。

## 值得引用

> exploitation "will most likely show up as" suspicious child processes spawned by PHP.

> be ready to patch the minute they land.
