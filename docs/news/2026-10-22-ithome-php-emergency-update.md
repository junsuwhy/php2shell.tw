---
title: "PHP發布緊急安全更新，修補震驚全球的重大漏洞PHP2Shell"
source: iThome
source_type: 台灣科技媒體
url: https://www.ithome.com.tw/news/179870
author: 周峻佑
published_at: "2026-10-22"
published_at_taipei: "2026-10-22（原文僅標日期）"
time_precision: date-only
language: zh-TW
fetched_at: "2026-10-22"
tags: [修補, 官方, 外洩]
audience: [developer, onlooker]
---

## 摘要

iThome 報導 PHP 於 10/21 釋出 8.5.12、8.4.27、8.3.36 與 8.2.35，修補兩個 CVSS v4.0 9.2 的 PHP2Shell 漏洞；所有處理網路請求的 PHP 系統都曝險，且公告前漏洞資訊已經外流。

## 重點

- CVE-2026-109618、CVE-2026-109619 可讓未通過身分驗證的攻擊者遠端執行程式碼。影響 PHP-FPM、配置 mod_php 的 Apache、php-cgi、FrankenPHP 與 LiteSpeed。
- 團隊認為 **mod_php 風險最高**：已有展示顯示，攻擊者只要在任何應用程式碼執行前發出未驗證請求，就有機會觸發弱點。
- CVE-2026-109618 由記憶體耗盡（OOM）中斷造成，內部請求資料僅部分初始化時，清理工作可能把無效資料視為有效。CVE-2026-109619 由過時全域狀態形成，請求的內部狀態在備份記憶體釋放後仍留存，同一 worker 後續請求可能在初始化重設前使用。
- Linux 發行版與 LTS 廠商已事先取得修補。8.1 以前無法直接從 PHP 專案取得更新，但團隊已把修補移植到 7.4、8.0、8.1 原始碼，可經發行版／LTS 或自行編譯取得。
- 無法即時更新時，PHP 列出能減少特定攻擊路徑曝險的設定調整，但強調這麼做無法讓系統變得安全。

## 值得引用

> 該團隊認為mod_php的風險最高，原因是已有展示如何利用漏洞的公開資訊，攻擊者只要在任何應用程式的程式碼執行前，發出未通過身分驗證的請求，就有機會觸發弱點。
