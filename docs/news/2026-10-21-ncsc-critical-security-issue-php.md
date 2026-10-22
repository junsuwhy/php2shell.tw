---
title: "Critical security issue affecting PHP"
title_zh: "影響 PHP 的重大資安問題"
source: UK NCSC
source_type: 政府資安機構公告
url: https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php
author: National Cyber Security Centre
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [官方, 政府, 修補, 緩解]
audience: [developer]
---

## 摘要

英國國家網路安全中心（NCSC）呼籲英國組織立即處理 CVE-2026-109618 與 CVE-2026-109619：任何版本的 PHP 都可能受影響，無法更新或套用暫時緩解時應考慮讓系統下線，並在升級前檢查是否已遭入侵、是否有後門。

## 重點

- PHP 已發布安全更新。漏洞可能讓攻擊者觸發 OOM 並造成記憶體破壞，在特定條件下達成未授權遠端程式碼執行；現已修復。
- CVE-2026-109618：OOM 處理可能在內部請求資料只初始化一半時中斷 PHP，請求清理把無效資料當成有效。
- CVE-2026-109619：請求擁有的內部狀態可能在其記憶體釋放後仍存活，同一 worker 的後續請求可能在正常初始化重設前使用過期狀態。
- 使用任何版本 PHP 的組織都受影響，舊版應升級到仍受完整支援的版本。
- 優先行動：盤點基礎設施中所有跑 PHP 的系統（含網際網路暴露者，不要只找過舊版本）；持續追蹤第三方與內嵌 PHP 的設備更新；升級到最新 PHP；套用 PHP 團隊提供的額外加固與暫時緩解。
- 若無法更新或套用暫時緩解、或緩解耗時過久，應考慮讓系統下線直到完成修復。
- 無法立即更新或停用時，應在升級前評估是否已遭入侵，並尋找攻擊者安裝的後門；沒把握可找 NCSC 認證的事件應變廠商。
- 荷屬 NCSC-NL 已公布一份可能受影響、具 PHP 相依性的軟體產品清單。

## 值得引用

> If you are unable to apply the temporary mitigations, or applying them would take too long, you should consider taking the system offline until it can be fully mitigated.
