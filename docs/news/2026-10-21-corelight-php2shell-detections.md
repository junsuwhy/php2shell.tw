---
title: "php2shell: Zeek and Suricata Detections for PHP RCE"
title_zh: "Corelight：php2shell 的 Zeek 與 Suricata 偵測"
source: Corelight
source_type: 原始研究報告
url: https://corelight.com/blog/php2shell-detection-before-disclosure
author: Ben Reardon
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文僅標日期）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [廠商, 偵測, 修補]
audience: [developer]
---

## 摘要

Corelight Labs 的 Ben Reardon 寫道，他們與 OpenAI、PHP 及其他單位協作，在協調揭露的同時公開 Zeek 與 Suricata 偵測，供修補優先順序使用。

## 重點

- CVE-2026-109618 致謝 Calif、Wiz、OpenAI、Quarkslab；CVE-2026-109619 致謝 Wiz、Calif、OpenAI。兩者 CVSS 4.0 皆 9.2。
- 偵測儲存庫：https://github.com/corelight/php2shell-detect 。文章說用途包含可疑 HTTP 活動，以及從回應標頭辨識公告中的 PHP 版本；需要可以檢查的 HTTP。規則內容不轉述。
- 另有產品公告頁 https://corelight.com/blog/bulletins ，最後更新 2026-10-21，寫 Corelight 產品本身不用 PHP、不受影響。
- 文章對兩種攻擊策略的描述不轉述。
