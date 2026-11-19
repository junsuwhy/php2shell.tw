---
title: "PHP ChangeLog: 8.5.13, 8.4.28, 8.3.37, 8.2.36 (2026-11-19)"
title_zh: "PHP ChangeLog：8.5.13、8.4.28、8.3.37、8.2.36 安全修補版（2026-11-19）"
source: PHP.net
source_type: 官方公告
url: https://www.php.net/ChangeLog-8.php
author: PHP Security Team
published_at: "2026-11-19"
published_at_taipei: "2026-11-19"
time_precision: date-only
time_note: "ChangeLog 只標日期，沒有發布鐘點，本站不補猜時間。"
language: en
fetched_at: "2026-11-19"
tags: [官方, 修補]
audience: [developer, non-technical]
---

## 摘要（翻譯）

PHP 在 2026-11-19 發布 8.5.13、8.4.28、8.3.37、8.2.36。ChangeLog 列出 CVE-2026-115560（GHSA-658j-r8rw-q6mx，Session serializer 不一致，可導致遠端程式碼執行）已在這四個版本修補。同日還修補其他多個 CVE，涵蓋 CGI、Date、FPM、Phar、Session、SOAP、Standard 等元件。

## 重點

- **新版本**：8.5.13、8.4.28、8.3.37、8.2.36。先前 2026-10-21 的 PHP2Shell 修補版為 8.5.12、8.4.27、8.3.36、8.2.35。
- **CVE-2026-115560 已修補**：這是 2026-10-23 PHP 官方資訊性公告提到、當時待修補的 RCE 途徑（見 `2026-10-23-1812-php-net-informational-advisory-session-upload-progress.md`）。影響範圍為各分支修補版之前的版本，例如 8.2.0 至 8.2.35。
- **建議**：只更新到 10/21 版的環境，請再升級到這些版本。升級前仍建議維持 `session.upload_progress.enabled=0`。
- **發行版與主機商**：各家套件何時跟上，請看各自公告；本站尚未針對 11/19 新版重新查證廠商狀態。
