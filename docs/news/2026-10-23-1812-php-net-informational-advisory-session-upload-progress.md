---
title: "Informational advisory: Session upload progress"
title_zh: "資訊性公告：Session 上傳進度功能"
source: PHP.net
source_type: 官方公告
url: https://www.php.net/archive/2026.php#2026-10-23-1
author: PHP Security Team
published_at: "2026-10-23T10:12:28+00:00"
published_at_taipei: "2026-10-23 18:12 (UTC+8)"
time_precision: exact
time_note: "時間取自 php.net 新聞頁該則公告的 datetime 屬性（10:12:28 UTC）。"
language: en
fetched_at: "2026-10-26"
tags: [官方, 緩解, 待修補]
audience: [developer, non-technical]
---

## 摘要（翻譯）

PHP 官方於 2026-10-23 10:12 UTC（台灣時間 18:12）發布資訊性公告：PHP 還有一個遠端程式碼執行（RCE）漏洞 **CVE-2026-115560** 尚待修補。官方建議先把 `session.upload_progress.enabled` 設為 `0`，維持到下一個常規 bugfix 版本，以完全避開這個「不太可能發生」的 RCE 途徑。

## 重點

- **只在少見的設定組合下才會觸發**：需要特定的 session 設定與應用程式寫法同時成立，官方評估實務上不太可能遇到。此處不轉述觸發條件細節。
- **走常規發布週期**：官方不另發緊急版本，會在下一個常規版本發布時，一併公布 CVE-2026-115560 的完整安全公告。
- **目前緩解**：`session.upload_progress.enabled=0`。這項設定本來就列在 10/21 CVE-2026-109619（GHSA-6wmf-4rv5-p3rp）公告的緩解措施中；**當時已經設定的人保持原狀即可，不需要再做其他事**。
- **尚未公布**：受影響版本、包含修補的版本、嚴重程度評分，官方都還沒說明。據 iThome 2026-10-24 報導，NVD 與 CVE 等漏洞資料庫當時也尚未收錄 CVE-2026-115560，評分與版本一律「待查證」。

## 提醒：PHP2Shell 修補仍是第一優先

PHP2Shell（CVE-2026-109618、CVE-2026-109619）的修補版 **8.5.12、8.4.27、8.3.36、8.2.35** 已於 2026-10-21 釋出（見 `2026-10-21-2200-php-net-security-advisory.md`）。還沒更新的話，請先更新；上面的緩解設定是額外的一層保護，不能取代更新。

## 延伸報導

- iThome（李宗翰，2026-10-24）〈PHP2Shell漏洞修補釋出兩天後，PHP基金會警告還有一個待修補的遠端程式碼執行漏洞〉：https://www.ithome.com.tw/news/179943 ——另提到 Fortinet 的 PHP2Shell 爆發警示已將此漏洞與 CVE-2026-109618、CVE-2026-109619 並列為同一組觀測目標，且官方尚未說明它是否與 CVE-2026-109619 同一根本原因。
