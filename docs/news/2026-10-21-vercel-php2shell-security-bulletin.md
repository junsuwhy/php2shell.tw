---
title: "PHP security advisory: php2shell (CVE-2026-109618, CVE-2026-109619)"
title_zh: "Vercel：php2shell 安全公告"
source: Vercel
source_type: 平台安全公告
url: https://vercel.com/kb/bulletin/php2shell-security-bulletin
author: Security Team
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文只寫日期）"
updated_at: "2026-10-21T18:32:20.561Z"
time_precision: date-only
time_note: "內文只寫 On October 21, 2026。頁面資料的 lastUpdated 為 2026-10-21T18:32:20.561Z（台灣 10 月 22 日 02:32），沒有獨立的 published 時刻，故發布時間只記日期，lastUpdated 記入 updated_at。"
language: en
fetched_at: "2026-10-23"
tags: [廠商, 修補, WAF]
audience: [developer]
---

## 摘要

Vercel 知識庫公告。重點是立刻更新 PHP 執行環境；他們在公開前上線的網站防火牆規則不能代替修補。不轉述攻擊樣貌。

## 重點

- 2026-10-21 PHP 公開 CVE-2026-109618、CVE-2026-109619，合稱 php2shell。文章以影響描述：特製的 HTTP 請求可能讓攻擊者遠端執行程式、看到其他請求的資料，或造成阻斷服務。並寫已有可運作的公開利用程式、業界已回報利用嘗試。利用方式不轉述。
- 不論有沒有 WAF 或主機商防護，都要立刻把 PHP 執行環境升到修補版。只更新應用程式或外掛不夠。
- Vercel 說自己在協調揭露期間事先接到通知，並在公開前部署 WAF 規則，自動套用到所有專案、不另收費、不用自行設定。涵蓋部署在 Vercel 上的 PHP，以及由 Vercel 轉送或代理到外部 PHP 後端的請求。擋下的請求出現在專案的 Firewall 儀表板。
- 規則不能代替修補。不經過 Vercel 網路、直接打到外部 PHP 後端的請求不在涵蓋範圍。
- 受影響範圍：文章寫 PHP 5.4 與之後的預設設定。WordPress、Drupal、Laravel、Magento 等在有漏洞的 PHP 上執行時受影響。這句「5.4 與之後」是 Vercel 的說法，不是 PHP 官方的逐版驗證清單。官方點名的執行方式，文章複述為 PHP-FPM、Apache mod_php、php-cgi、FrankenPHP、LiteSpeed，並寫換網站伺服器或框架不能代替修補。
- 修補版與官方一致：8.2.35、8.3.36、8.4.27、8.5.12。PHP 8.1 與更舊不再收到 PHP 專案的例行更新，要升到受支援分支，或向發行版／長期支援廠商詢問回移植。
- 容器要重建已更新的基底映像並重新部署。要確認真正在接流量的那一份是修補後的執行環境，只改本機開發環境不夠。外部 PHP 後端也要修，並限制流量經過 Vercel。
- 致謝 OpenAI 與 Wiz 的協作。沒有另外點名 Calif。
