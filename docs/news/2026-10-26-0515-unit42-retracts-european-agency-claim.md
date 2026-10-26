---
title: "Threat Brief: Critical Vulnerabilities in PHP: CVE-2026-109618, CVE-2026-109619 (Updated October 25)"
title_zh: "Unit 42 撤回 10/23 更新：無法證實歐洲政府機關遭入侵與 PHP2Shell 有關"
source: Palo Alto Unit 42
source_type: 原始研究報告（更正）
url: https://unit42.paloaltonetworks.com/cve-2026-109618-cve-2026-109619/
author: Unit 42
published_at: "2026-10-25T14:15:00-07:00"
published_at_taipei: "2026-10-26 05:15 (UTC+8)"
updated_at: "2026-10-25T14:46:00-07:00"
time_precision: exact
time_note: "本則記錄的是撤回這次更新，不是原簡報首發。頁尾更新紀錄寫 Updated October 25, 2026, at 2:15 p.m. PT to retract our October 23 update（太平洋日光節約時間，21:15 UTC）。頁尾另有 Updated 25 October, 2026 at 2:46 PM PDT，與頁面 article:modified_time 2026-10-25T21:46:24+00:00 一致，記為 updated_at。頁面 Published 現在顯示 October 23, 2026（article:published_time 2026-10-23T19:00:34+00:00），跟本站 10/21 那篇記錄的首發日期不同。"
language: en
fetched_at: "2026-10-26"
tags: [原始研究, 廠商, 更正, 撤回]
audience: [developer, non-technical, onlooker]
---

## 摘要

Palo Alto Networks 的 Unit 42 在 PHP2Shell 威脅簡報開頭加了「October 25 Update」，**撤回 10 月 23 日的更新**。那次更新說，研究人員觀察到一起歐洲政府機關遭攻擊後的入侵後活動，當時以為跟 PHP2Shell 有關。現在 Unit 42 表示**無法證實初始入侵跟 PHP2Shell 這兩個 CVE 有關**。

## 重點

- Unit 42 的說法（翻譯）：研究人員看到的是一起針對歐洲政府機關的攻擊，發生在一個有漏洞的 PHP 應用程式環境裡，因此一度認為是這兩個漏洞遭到利用；但無法證實初始入侵與 PHP2Shell 的 CVE 有關，已撤回 10 月 23 日的更新。
- 撤回之後，**目前沒有具名單位被證實是因 PHP2Shell 遭成功入侵**。本站不把這起事件算作 PHP2Shell 入侵案例。
- 簡報其他內容沒變：兩個漏洞都是遠端程式碼執行，CVSS 4.0 皆為 9.2；建議看 PHP 官方公告並立刻修補。
- 同一時期也有其他單位撤回或保留說法：據 The Record 10/23 報導，Sophos 撤回了「成功利用」的報告，改說只看到少量失敗的利用嘗試（見 `2026-10-24-0155-therecord-exploitation-attempts-pocs.md`）。CISA 10/23 更新的警訊也寫到，發布時尚未觀察到在野成功利用（見 `2026-10-21-cisa-critical-php-patch-now.md`）。
- 頁面裡的偵測查詢語法與利用後活動的技術描述，不在此轉述。

## 對讀者的意思

沒有證實入侵，不代表可以不修。攻擊嘗試和掃描仍在持續，請照 PHP 官方公告更新到 8.5.12、8.4.27、8.3.36 或 8.2.35。

## 值得引用

> We are unable to confirm that initial access is associated with the specific PHP2Shell CVEs. We have retracted our previous update from October 23.
