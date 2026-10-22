---
title: "PHP2Shell: All You Need to Know About CVE-2026-109618 and CVE-2026-109619"
title_zh: "PHP2Shell 須知"
source: JFrog Security Research
source_type: 資安廠商研究
url: https://research.jfrog.com/post/php2shell-all-you-need-to-know-about-cve-2026-109618-and-cve-2026-109619/
author: Eddy Tsalolikhin, Afek Berger
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [前提條件, 緩解]
audience: [developer]
---

## 摘要

稱 PHP2Shell 兼具「未授權 RCE」與「Heartbleed 式記憶體外洩」，且與上層應用無關；整理了影響判斷用的前提條件。

## 重點

- 相關設定：`session.upload_progress.enabled=On`（出廠預設）且接受 multipart 上傳。
- 環境：Apache mod_php（很可能也含 FrankenPHP）風險最高；FPM 也受影響。
- 緩解（依官方）：升級；無法升級時以管理層級設定 `session.upload_progress.enabled=0`（8.5 另加 `fatal_error_backtraces=0`）並重啟 worker、`memory_limit=-1`（勿用 RLIMIT_AS/RLIMIT_DATA）；降低 `pm.max_requests` 也有幫助但有效能代價。
- 注意：upload-progress 開關不影響 OPcache 與 backtrace 路徑；每項措施單獨都只是部分有效。
