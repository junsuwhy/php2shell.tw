---
title: "Your Sites Are Protected Against the PHP2Shell Vulnerabilities"
title_zh: "你的網站已受到 PHP2Shell 漏洞的保護"
source: Automattic
source_type: CMS 官方公告
url: https://automattic.com/2026/10/21/php2shell/
author: Rudy
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [官方, CMS, WordPress, 修補]
audience: [developer, non-technical]
---

## 摘要

Automattic 表示，WordPress.com、WordPress VIP、WP Cloud、Pressable 與 Tumblr 上的網站已經受到保護，使用者不用另外動作。自行管理 PHP 的人必須自己更新執行環境。

## 重點

- 修補版為 PHP 8.5.12、8.4.27、8.3.36、8.2.35。
- 只更新 WordPress、佈景主題或外掛不夠，因為問題在 PHP 執行環境。
- 文章寫受影響範圍回溯到 PHP 5.4，不需登入，應用程式本身也不必另有缺陷。
- 不能當天修補時，文章提到網頁應用防火牆，以及關閉檔案上傳相關功能等暫時做法，並明說那些只是爭取時間，不能取代更新。設定值不在此抄錄。
- 文章沒有提供 WP-CLI 指令。
