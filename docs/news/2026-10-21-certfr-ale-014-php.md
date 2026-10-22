---
title: "[Màj] Multiples vulnérabilités dans PHP"
title_zh: "PHP 的多項漏洞（已更新）"
source: CERT-FR
source_type: 政府資安機構公告
url: https://cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-014/
author: CERT-FR
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
updated_at: "2026-10-21"
language: fr
fetched_at: "2026-10-22"
tags: [官方, 政府, 法國, 修補]
audience: [developer]
---

## 摘要

法國 CERT-FR 警報 CERTFR-2026-ALE-014。初版與最後版本都是 2026-10-21。風險為遠端任意程式碼執行。10 月 21 日的更新寫修補已可在編輯者網站取得。

## 重點

- 受影響範圍：PHP 5.x、6.x、7.x、8.0.x、8.1.x 全部版本；8.2.35、8.3.36、8.4.27、8.5.12 之前的對應分支。
- 初版寫修補預定 2026-10-21 16:00 巴黎時間（14:00 UTC）。更新後改寫修補已經提供，並點名 CVE-2026-109618、CVE-2026-109619。
- 對已停止支援的 5.x 到 8.1.x，CERT-FR 建議先隔離，再遷到仍受維護且已修補的版本。
- 頁面另列尚未經 CERT-FR 驗證的暫時設定。那些項目只降低其中一項的部分範圍，不是完整修補；此處不抄設定值。
- 同頁連到 CERTFR-2026-AVI-1359。該 avis 本次沒有打開，不摘要。
