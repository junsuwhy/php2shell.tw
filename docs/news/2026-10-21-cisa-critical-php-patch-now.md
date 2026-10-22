---
title: "Critical Vulnerabilities in PHP Require Immediate Patching"
title_zh: "PHP 重大漏洞須立即修補"
source: CISA
source_type: 政府資安機構公告
url: https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching
author: CISA
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [官方, 政府, 美國, 修補]
audience: [developer, non-technical]
---

## 摘要

美國網路安全暨基礎設施安全局（CISA）於 2026-10-21 發布警訊，要求立刻修補 CVE-2026-109618 與 CVE-2026-109619（文中稱 php2shell）。公告寫明，截至發布時尚未觀察到利用。

## 重點

- 兩項漏洞可在未經身分驗證的情況下，於處理網頁請求的 PHP 達成遠端程式碼執行。
- 修補版本為 PHP 8.5.12、8.4.27、8.3.36、8.2.35。
- 請盤點 PHP，包含內嵌在其他產品裡的安裝；優先處理對外系統。
- 無法立即更新，或仍使用已不受支援的 PHP 8.1 及更早版本，應先下線。
- 網頁應用防火牆只被稱為更新前可能有部分保護。請同時閱讀 PHP 官方公告，並留意 PHP worker 的異常行為。

## 值得引用

> While CISA has not observed exploitation of these vulnerabilities as of the time of publication, they pose a risk to organizations if left unpatched.
