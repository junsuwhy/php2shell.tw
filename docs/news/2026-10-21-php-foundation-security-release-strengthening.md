---
title: "Today's PHP Security Release, and How We're Strengthening PHP Security"
title_zh: "今天的 PHP 安全更新，以及我們如何強化 PHP 安全"
source: The PHP Foundation
source_type: 官方部落格（維護方）
url: https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/
author: The PHP Foundation
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期，發布於修補釋出後）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [官方, 幕後, 外洩, Chainguard, 結構性失敗, AI, 時間軸]
audience: [developer, onlooker]
---

## 摘要

PHP 基金會罕見坦白的幕後說明：漏洞怎麼被發現、為什麼 2024 年就察覺的問題拖到現在、外洩與禁運被打破的過程，以及向依賴 PHP 的組織募資。是本事件最權威的時間軸來源之一。

## 兩個漏洞（官方說法）

- CVE-2026-109618（OOM 破壞）：請求在錯誤時刻碰到 `memory_limit`，PHP 留下半初始化資料並之後當成有效使用。Apache mod_php 上以預設設定展示了完整 RCE；PHP-FPM 上也透過應用層路徑確認 RCE。
- CVE-2026-109619（過期全域狀態）：致命錯誤留下指向前一個請求記憶體的內部狀態；回報者對真實應用（Apache mod_php）展示了 RCE。
- 兩者都位在幾乎每個請求都會碰到的記憶體管理與錯誤處理，因此很難在不破壞相容性、效能或擴充生態的情況下修好。

## 2024 年就察覺，卻沒修

- 2024 年 PHP 進行多年來首次外部安全稽核（Sovereign Tech Agency 出資、OSTIF 組織、Quarkslab 執行）。修其中一個問題時，核心開發者發現了 OOM 問題的最初跡象，但當時找不到具體攻擊路徑。
- 安全團隊做了幾種互相競爭的修法，各有代價（破壞相容、引入 DoS 風險、要求大量第三方擴充修改）；共識決的小團隊不敢選錯，工作反覆停擺數月。

> "We won't pretend otherwise: the delay was a structural failure, caused by both the security team's decision process and its lack of resources."

- 之後已改為可多數決、鼓勵妥協的流程。

## 發現與通報

- 2026 年 5 月成立 Ecosystem Security Team；Volker Dusch 擔任 AI Security Engineer in Residence。
- 今年稍早與 Alpha-Omega 合作用 Anthropic 的 Claude Mythos 掃描 PHP；之後加入 OpenAI 的 Daybreak Red 驗證回報。
- 基金會把 PHP 帶進 Patch the Planet 計畫，Calif 於 **2026-07-30** 開始稽核。
- **08-11**：Calif 研究員 Ryan A 回報與 2024 年 OOM 問題同根的 RCE；OpenAI 同日獨立回報同一根因。
- **08-24** Wiz、**09-18** OpenAI 回報更多攻擊路徑；Trail of Bits 近期也在稽核 PHP。
- 自 7/1 起已發布 15 個 CVE，處理逾 100 份無效／重複／無法重現的回報——AI 讓回報量暴增。

## 外洩與禁運被打破

- **10-20 約 15:00 UTC**：兩個 CVE 編號在論壇與社群流傳，附錯誤的時間與錯誤的 CVSS 10.0（實際 9.2），無技術細節。
- **19:30 UTC**：提前發出預告，釋出從 10/22 提前到 **10/21 14:00 UTC**（發行商仍在打包，立刻發布會讓很多人無法簡單更新）。
- **約 20:00 UTC**：Calif 誤發一段 PoC 展示影片，刪除後副本在社群流傳，加速了各方 PoC 開發。
- 10/20 23:00 UTC 起提供給少數關鍵基礎設施業者的緩解建議也可能外流。
- 發布當下，安全團隊未發現可運作的公開 exploit。
- **10-21 07:41 UTC**：Chainguard 在協調發布前六小時多單方面打破禁運，發布含修補的映像，讓攻擊者能提前研究修補。

## 值得引用

> "If you run PHP, it is imperative that you update now."
