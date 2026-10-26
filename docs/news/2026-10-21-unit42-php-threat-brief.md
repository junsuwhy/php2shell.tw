---
title: "Threat Brief: Critical Vulnerabilities in PHP: CVE-2026-109618, CVE-2026-109619"
title_zh: "Unit 42 威脅簡報：PHP 的兩項重大漏洞"
source: Palo Alto Unit 42
source_type: 原始研究報告
url: https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619/
author: Unit 42
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
updated_at: "2026-10-25T14:46:00-07:00"
time_note: "頁面 Published 只有日期。更新戳為 2026-10-21 9:30 a.m. PT，以及同日 1:00 p.m. PT。updated_at 取較晚的太平洋日光節約時間。updated_at 現改為 10-25 撤回更新的時間。"
language: en
fetched_at: "2026-10-22"
tags: [原始研究, 廠商, 修補, 更正]
audience: [developer]
---

## 摘要

Unit 42 威脅簡報：CVE-2026-109618 與 CVE-2026-109619 都是遠端程式碼執行，CVSS 4.0 皆 9.2。建議立刻看 PHP Group 公告並修補。

## 重點

- 發布時，Cortex Xpanse 遙測估計超過 2,260 萬個暴露、可能受影響的實例。
- Unit 42 寫已看到概念驗證，並提到至少一個歐洲政府網站預防性下線。
- 客戶防護包含 Cortex XDR、XSIAM、Cortex Cloud、Xpanse 與 Advanced Threat Prevention。Frontier Virtual Patching 自 2026-10-20 晚上 10:21（太平洋時間）起提供，Threat ID 543004。
- 文中另連到 Palo Alto 產品影響公告。那是產品頁，不是這篇研究文。
- 簡報對兩項漏洞的記憶體描述不在此轉述。

## 更正（2026-10-26）

Unit 42 於 2026-10-25 14:15 PT（台灣時間 10-26 05:15）撤回 10 月 23 日的更新：該更新曾稱觀察到一起歐洲政府機關遭攻擊的入侵後活動，並認為與 PHP2Shell 有關；Unit 42 現表示無法證實初始入侵與 PHP2Shell 的 CVE 有關。本站不將其列為 PHP2Shell 入侵案例。另，頁面目前已改以 2026-10-23 為發布日，本篇記錄的「已看到概念驗證」「至少一個歐洲政府網站預防性下線」等句，現行頁面已不見，以現行頁面為準。詳見 `2026-10-26-0515-unit42-retracts-european-agency-claim.md`。
