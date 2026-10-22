---
title: "PHP knew about one of the flaws in 2024 but could not agree a fix"
title_zh: "PHP 基金會承認 2024 年就知道其中一個漏洞，卻遲遲無法決定修法"
source: The Next Web
source_type: 科技新聞媒體
url: https://thenextweb.com/news/php-foundation-structural-failure-2024-flaw-leak
author: Ana Maria Constantin
published_at: "2026-10-21T16:02:04+00:00"
published_at_taipei: "2026-10-22 00:02 (UTC+8)"
time_precision: exact
language: en
fetched_at: "2026-10-22"
tags: [官方, 結構性失敗, 外洩, Chainguard, AI]
audience: [developer, onlooker]
---

## 摘要

The Next Web 整理 PHP 基金會修補當日的坦白：其中一個重大漏洞早在 2024 年就被發現，卻因修法代價難有共識而拖延數月，基金會稱之為「結構性失敗」，並向企業用戶募資強化安全。

## 重點

- 兩個漏洞都位在幾乎每個請求都會碰到的記憶體管理與錯誤處理，嚴重且難在不破壞生態的前提下修好。
- 2024 年首次外部安全稽核期間，核心開發者修另一個問題時發現記憶體處理缺陷；當時有人推測可能被利用，但找不到具體路徑，更清楚的問題被優先處理。
- 安全團隊提出多種互相競爭的修法：有的破壞向下相容、有的引入拒絕服務風險、有的要求大量第三方擴充修改。團隊採共識決、又怕選錯，工作反覆停擺數月。
- **10/20 約 15:00 UTC**：兩個 CVE 編號開始在論壇與社群流傳，附錯誤發布時間與錯誤的 CVSS 10.0（實際 9.2），當時尚無技術細節。基金會把釋出從 10/22 提前到 10/21；發行商仍在打包，立刻發布會讓許多人無法簡單更新。
- 約 20:00 UTC，回報者之一 Calif 誤發 PoC 展示影片，刪除後副本仍流傳，加速了隔日公開 exploit 程式碼的出現。
- 協調發布前逾六小時，Chainguard 單方面釋出含修補的映像，讓攻擊者能以二進位形式研究修補。發布當下安全團隊尚未看到可運作的公開 exploit。
- 自 7 月起已發布 15 個 CVE，另處理逾 100 件無效或重複回報。5 月成立 Ecosystem Security Team，安全決策改為多數決，並用 Anthropic Claude Mythos 掃描、OpenAI Daybreak 驗證回報。
- Calif 於 7/30 開始稽核；8/11 Ryan A 回報該缺陷，OpenAI 同日獨立回報同一根因。

## 值得引用

> "We won’t pretend otherwise: the delay was a structural failure, caused by both the security team’s decision process and its lack of resources." —— The PHP Foundation
