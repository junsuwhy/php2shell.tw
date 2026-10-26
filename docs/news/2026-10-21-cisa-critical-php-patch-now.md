---
title: "Critical Vulnerabilities in PHP Require Immediate Patching"
title_zh: "PHP 重大漏洞須立即修補"
source: CISA
source_type: 政府資安機構公告
url: https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching
author: CISA
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
updated_at: "2026-10-23（Last Revised；新增 SIGMA 偵測規則、合作夥伴資源，並加強既有緩解建議）"
time_precision: date-only
time_note: "發布日期來自網址路徑。頁面 Last Revised 標 October 23, 2026，沒有時分（頁面 datetime 屬性為 2026-10-23T12:00:00Z，看起來是系統預設的中午值，不當作實際時刻）。"
language: en
fetched_at: "2026-10-26"
tags: [官方, 政府, 美國, 修補, 偵測]
audience: [developer, non-technical]
---

## 摘要

美國網路安全暨基礎設施安全局（CISA）於 2026-10-21 發布警訊，要求立刻修補 CVE-2026-109618 與 CVE-2026-109619（文中稱 php2shell）。10 月 23 日更新後，公告寫明截至發布時，CISA **尚未觀察到這些漏洞在野遭成功利用**。

## 10 月 23 日更新

CISA 在警訊開頭加註 Update October 23, 2026，說明這次更新做了三件事：

1. 提供一份 **SIGMA 偵測規則**，協助找出可疑活動。規則放在 CISA 的 SIGMA Rules GitHub 儲存庫（https://github.com/cisagov/SIGMA_Rules ），CISA 註明可能隨新資訊更新。
2. 加入**合作夥伴資源**：美國 NSA、英國 NCSC、澳洲 ASD's ACSC、荷蘭 NCSC-NL 的 php2shell GitHub 儲存庫、紐西蘭 NCSC、加拿大網路安全中心的公告，另列 PHP 官方安全公告與 PHP 基金會部落格。
3. **加強既有緩解建議**（見下方重點）。

用語也有調整：10/21 版寫「尚未觀察到利用」，10/23 版改成「尚未觀察到在野**成功**利用」。

## 重點

- 兩項漏洞可在未經身分驗證的情況下，於處理網頁請求的 PHP 達成遠端程式碼執行。影響所有處理網頁請求的 PHP 安裝，包括 Apache + mod_php（PHP 官方認為風險最高）、PHP-FPM、php-cgi、FrankenPHP、LiteSpeed。
- 修補版本為 PHP 8.5.12、8.4.27、8.3.36、8.2.35。
- 請盤點 PHP，包含內嵌在其他產品裡的安裝；優先處理對外系統。
- 無法立即更新，或仍使用已不受支援的 PHP 8.1 及更早版本，應先下線，直到修補或升級完成。
- 網頁應用防火牆只被稱為更新前可能有部分保護。請同時閱讀 PHP 官方公告，並監看可疑活動，例如 PHP worker 程序啟動 shell 或下載工具。

## 值得引用

> While CISA has not observed successful exploitation of these vulnerabilities in the wild as of the time of publication, they pose a risk to organizations if left unpatched.
