---
title: "Cloudflare deploys protections against php2shell vulnerability"
title_zh: "Cloudflare 部署 php2shell 防護"
source: Cloudflare Blog
source_type: 基礎設施廠商部落格
url: https://blog.cloudflare.com/php-vulnerabilities-waf-protection/
author: Cloudflare
published_at: "2026-10-21T13:56:45.655Z"
published_at_taipei: "2026-10-21 21:56 (UTC+8)"
updated_at: "2026-10-21T19:12:17.798Z"
time_precision: exact
language: en
fetched_at: "2026-10-22"
tags: [WAF, 防護, 在野攻擊]
audience: [developer, onlooker]
---

## 摘要

Cloudflare 參與協調防護，自 10 月初就開始開發 WAF 規則，在公開揭露前約 9 小時上線，**免費方案客戶也預設受保護**。

## 重點

- 揭露方列為 Calif.io、Wiz、OpenAI、Quarkslab；稱影響所有執行 PHP 5.4 以上的伺服器，可能造成 DoS、RCE 與資料外洩。
- **自 10/21 03:02 UTC（台灣 11:02）起**，使用免費或付費 WAF 的客戶預設受 php2shell 防護。
- 外洩後已觀察到針對客戶的攻擊流量，並看到攻擊者**變異 payload 嘗試繞過規則**。
- 推出新能力「full transaction detection」：同時看請求與回應，在來源伺服器回應送到攻擊者手上前攔截（這是首個使用此能力的託管偵測）。
- 仍強調：有 WAF 也要修補 PHP。
