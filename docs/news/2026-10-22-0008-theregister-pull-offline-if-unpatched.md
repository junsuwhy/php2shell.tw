---
title: "PHP devs publish critical bug fix as site owners warned: Pull 'em offline if you're unpatched"
title_zh: "PHP 開發者發布重大修復；未修補者被警告先下線"
source: The Register
source_type: 資安媒體
url: https://www.theregister.com/security/2026/10/21/php-devs-publish-critical-bug-fix-as-site-owners-warned-pull-em-offline-if-youre-unpatched/5304519
author: Lindsay Clark
published_at: "2026-10-21T16:08:00Z"
published_at_taipei: "2026-10-22 00:08 (UTC+8)"
time_precision: exact
language: en
fetched_at: "2026-10-22"
tags: [媒體, 修補, 網站下線]
audience: [developer, onlooker]
---

## 摘要

The Register 記者 Lindsay Clark 報導：PHP 已發布兩項重大漏洞的緊急更新，資安機構警告不能立刻修補時應考慮讓對外應用下線。

## 重點

- 修補版為 PHP 8.5.12、8.4.27、8.3.36、8.2.35，對應 CVE-2026-109618 與 CVE-2026-109619，可未驗證遠端執行程式碼。
- 受影響的網頁執行方式包含 PHP-FPM、Apache mod_php、php-cgi、FrankenPHP、LiteSpeed。PHP 稱 mod_php 風險最高。
- watchTowr 的 Jake Knott 說已看到帶 php2shell 識別的攻擊嘗試，但截至受訪時沒有人成功。
- 報導提到芬蘭政府服務、荷蘭國會、資安與個資機關，以及 noyb，有預防性下線。
- 文章裡關於如何觸發的句子不轉述。
