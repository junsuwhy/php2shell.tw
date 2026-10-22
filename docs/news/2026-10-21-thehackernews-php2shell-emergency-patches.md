---
title: "PHP Issues Emergency Patches for Two Critical PHP2Shell RCE Flaws as Exploit Attempts Emerge"
title_zh: "PHP 為兩項 PHP2Shell 重大遠端程式碼執行發布緊急修補，攻擊嘗試已出現"
source: The Hacker News
source_type: 資安媒體
url: https://thehackernews.com/2026/10/php-issues-emergency-patches-for-two.html
author: Swati Khandelwal
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
updated_at: "2026-10-21"
language: en
fetched_at: "2026-10-22"
tags: [媒體, 修補, 在野利用]
audience: [developer, onlooker]
---

## 摘要

The Hacker News 報導 PHP 發布緊急更新，修補語言本身的兩項重大缺陷。作者 Swati Khandelwal。頁面日期只有 2026-10-21，文末寫當天發布後有更新。

## 重點

- 修補在 PHP 8.5.12、8.4.27、8.3.36、8.2.35。文章寫只有更新才是完整保護。
- CVE-2026-109618 與 CVE-2026-109619 的 CVSS v4.0 皆為 9.2，約在 2026-10-21 14:00 UTC 公開，比原訂的 10 月 22 日早一天。問題在執行環境，不在網站程式。
- PHP 8.1 與更舊版沒有官方發行版；文章寫 7.4、8.0、8.1 有原始碼回溯。PHP 8.2 的安全支援到 2026-12-31。
- watchTowr 於當日 11:26 UTC 仍稱沒看到野外利用，14:19 UTC 改稱觀察到對兩個 CVE 的攻擊嘗試。Cloudflare 稱修補前就有攻擊流量，並在 03:02 UTC 預設啟用防火牆規則。文章寫當時沒有來源確認特定伺服器已被入侵，也不在 CISA 已知遭利用漏洞目錄。
- PHP Foundation 的說法：Calif 約在 10 月 20 日 20:00 UTC 誤貼概念驗證影片；Chainguard 於 10 月 21 日 07:41 UTC 公開含修補的映像，比修補釋出早約六小時。2024 年外部稽核已見到其中一項的跡象，但當時沒有具體的程式碼執行路徑；延宕被基金會稱為決策流程與資源的結構問題。
- 外流的 CVSS 10 不是 PHP 的評分。PHP 評為 9.2。
- 攻擊路徑與設定值如何對上漏洞，不在此轉述。
