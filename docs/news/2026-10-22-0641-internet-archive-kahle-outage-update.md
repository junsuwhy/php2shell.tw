---
title: "An update from Brewster Kahle on today's outage."
title_zh: "Internet Archive 轉貼創辦人 Brewster Kahle 對停機的說明"
source: Internet Archive（X 官方帳號 @internetarchive）
source_type: 官方社群貼文
url: https://x.com/internetarchive/status/2113037994924163166
author: Brewster Kahle（Internet Archive 創辦人）
published_at: "2026-10-21T22:41:30+00:00"
published_at_taipei: "2026-10-22 06:41 (UTC+8)"
time_precision: exact
time_note: "時間取自 X API 回傳的貼文 created_at（22:41:30 UTC）。Kahle 原文是截圖，原發文時間無法從圖中精確得知。"
language: en
fetched_at: "2026-10-26"
tags: [官方, 網站下線, 修補]
audience: [developer, non-technical]
---

## 摘要（翻譯）

Internet Archive 官方 X 帳號在 2026-10-22 06:41（台灣時間）轉貼創辦人 Brewster Kahle 的說明截圖，回應前一晚 archive.org 的停機。Kahle 表示，PHP 漏洞公布後不久，他們就偵測到攻擊；團隊隔離漏洞、為較舊的 PHP 版本做好修補後部署，也加強了 WAF（網站應用程式防火牆）等防護。網站短暫下線，換上新版本後已恢復運作。

## 重點

- **跟 PHP 漏洞有關，是官方自己說的**：Kahle 明寫「PHP vulnerability announced, soon saw attacks」，再說「Offline briefly, Back on new versions and running!」。
- **是「看到攻擊」，不是「被攻破」**：說明中沒有提到資料外洩或系統遭入侵。
- **停機時間**：官方帳號在 2026-10-21 22:22（台灣時間）發文說 archive.org 暫時下線（[貼文](https://x.com/internetarchive/status/2112912342564622841)），本則說明約 8 小時後發出，表示已恢復。
- 說明沒有指出是 CVE-2026-109618 還是 CVE-2026-109619，此處也不推測。

## 原文（截圖文字，節錄）

> Internet Archive ops staff were heroes last night.
> PHP vulnerability announced, soon saw attacks, isolated the vulnerability, […] deployed.
> reinforced WAF and other guards.
> Offline briefly, Back on new versions and running!

（第二行中間描述修補與測試所用工具的部分，本站略去；後段為感謝各單位維運人員的話，也略。）

## 延伸報導

- Reuters factbox（StreetInsider 轉載，轉載頁時間為台灣時間 2026-10-21 23:05，正文電頭寫 Oct 22）引述 Internet Archive 的 X 貼文，稱因緊急維護與安全修補讓入口網站下線，之後已恢復。見本站摘要 `2026-10-21-2305-reuters-factbox-websites-offline.md`。
- TechRadar 報導曾寫「not definitively linked」（尚未明確連結到 PHP 漏洞；本站未收錄該篇全文），與本則官方說明不同，以官方說明為準。
