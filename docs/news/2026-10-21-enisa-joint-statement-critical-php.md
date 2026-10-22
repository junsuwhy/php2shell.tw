---
title: "Joint statement on critical PHP vulnerabilities"
title_zh: "歐盟機構就 PHP 重大漏洞發布聯合聲明"
source: ENISA
source_type: 政府資安機構公告
url: https://www.enisa.europa.eu/news/joint-statement-on-critical-php-vulnerabilities
author: European Commission（DG CNECT）、ENISA、CERT-EU、Europol EC3、歐盟國家 CSIRT 網路
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [官方, 政府, 歐盟, 修補]
audience: [developer, non-technical]
---

## 摘要

歐盟執委會通訊網路內容與科技總署（DG CNECT）、歐盟網路與資訊安全局（ENISA）、CERT-EU、歐洲刑警組織 EC3，以及歐盟國家 CSIRT 網路，於 2026-10-21 聯合呼籲立刻處理 PHP 的兩項重大漏洞。

## 重點

- 編號為 CVE-2026-109618、CVE-2026-109619，可讓攻擊者在未驗證下於有漏洞的伺服器遠端執行程式碼。
- 聲明寫 PHP 安全團隊於 2026-10-21 13:40 UTC 發布更新。受影響與修補版本以該次發布為準，聲明本身沒有逐一列出版號。
- 請找出使用 PHP 的應用、與主機或服務商協調，並套用已發布的安全更新；優先處理對外系統。
- 不能立刻完成時，考慮把暴露的應用與公共網路隔離，直到修補完成。
- 有些產品在背景使用 PHP，即使表面看不出來也可能受影響。聲明指向荷蘭 NCSC 的彙整，以及 CERT-EU 指引與 ENISA 的 CSIRTs Network 彙整。
- 另提醒：依歐盟網路韌性法，硬體與軟體製造商自 2026-09-11 起須透過單一通報平台通報已遭主動利用的漏洞。

## 值得引用

> Prioritise internet-facing systems. Where immediate remediation is not feasible, consider isolating exposed applications from public networks until fixes can be applied.
