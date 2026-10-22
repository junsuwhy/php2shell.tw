---
title: "PHP爆「php2shell」重大漏洞 免登入即可遠端執行程式碼 官方籲立即升級"
source: 蕃新聞
source_type: 台灣新聞媒體
url: https://n.yam.com/Article/20261022685398
author: 阿利恩 Alion
published_at: "2026-10-22T11:15:50+08:00"
published_at_taipei: "2026-10-22 11:15 (UTC+8)"
updated_at: "2026-10-22T11:40:00+08:00"
time_precision: exact
language: zh-TW
fetched_at: "2026-10-22"
tags: [修補, 曝險統計, 台灣, DEVCORE]
audience: [developer, non-technical]
---

## 摘要

蕃新聞／報新聞綜合 PHP 官方與 Tenable 等公開資訊：兩個 php2shell 漏洞 CVSS v4.0 皆 9.2，必須升級 PHP 本身；並提到 Cortex Xpanse 統計約 2,260 萬個暴露實例，以及台灣 DEVCORE 發現的 CVE-2024-4577 曾被列入 CISA KEV。

## 重點

- CVE-2026-109618：OOM 處理流程中，請求資料只初始化一半就被中斷，清理程序把不完整資料當成有效。CVE-2026-109619：過期全域狀態，請求狀態在記憶體釋放後仍被同一 worker 的下一請求誤用（use-after-free）。
- 影響所有對外提供網頁服務的 PHP，包括 PHP-FPM、Apache mod_php、php-cgi、FrankenPHP、LiteSpeed。mod_php 風險最高，已有示範顯示未驗證請求可在應用程式碼執行前觸發。
- 修補版：8.5.12、8.4.27、8.3.36、8.2.35。8.1 及更舊僅對 7.4／8.0／8.1 提供最小範圍原始碼修補。官方強調沒有完整緩解措施，升級是唯一安全選擇。8.2 於 2026-12-31 停止支援。
- Cloudflare 已觀察到早期攻擊並對含免費方案在內的客戶部署 WAF；watchTowr 也觀察到利用嘗試。發布當下 PHP 安全團隊表示未發現可實際運作的攻擊程式。
- Palo Alto Networks 旗下 Cortex Xpanse 統計，全球約有 2,260 萬個可能受影響、暴露在網路上的 PHP 實例。只更新 WordPress 等網站系統不夠，必須升級伺服器上的 PHP。
- 文中對照 PHP 過去曾被勒索軟體利用的漏洞：2024 年台灣戴夫寇爾（DEVCORE）發現的 PHP-CGI CVE-2024-4577，以及 2019 年 PHP-FPM CVE-2019-11043，皆已列入 CISA KEV。截至 Tenable 整理時，這兩個新洞尚未列入。

## 值得引用

> 由於漏洞位於 PHP 本身，只更新網站系統或外掛無法修補，必須升級伺服器上的 PHP。
