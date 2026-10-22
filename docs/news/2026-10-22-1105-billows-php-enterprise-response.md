---
title: "PHP2Shell 重大漏洞震撼全球！駭客可能不必登入就能控制網站，數發部資安署急籲修補"
source: 竣盟科技
source_type: 台灣資安廠商部落格
url: https://blog.billows.com.tw/?p=6420
author: 竣盟科技
published_at: "2026-10-22T11:05:33+08:00"
published_at_taipei: "2026-10-22 11:05 (UTC+8)"
time_precision: exact
language: zh-TW
fetched_at: "2026-10-22"
tags: [應變, 企業, 台灣, 修補]
audience: [developer, non-technical]
---

## 摘要

竣盟科技從企業應處角度寫 PHP2Shell：不必登入就可能遠端執行程式碼，數發部資安署已啟動通報聯防；重點是盤點資產、確認 PHP 執行環境（不是只更新 WordPress）、修補後查日誌，以及不要把 WAF 當成修補替代品。

## 重點

- CVE-2026-109618 與 CVE-2026-109619，CVSS v4.0 皆 9.2。資安署已透過資安警訊、N-ISAC 及 TWCERT/CC 通知機關與企業。
- 預防性下線不等於已遭入侵；企業要能回答：哪些系統在跑受影響 PHP、哪些直接暴露在網際網路、能否立即更新、修補前有無被利用跡象。
- WordPress／Drupal／Joomla／Magento 等 CMS 底層是 PHP；只更新應用程式、忽略執行環境，漏洞仍在。部分未標示使用 PHP 的軟體內部仍可能依賴 PHP。
- 官方修補版本包括 8.5.12、8.4.27、8.3.36、8.2.35。Linux 發行版可能回補套件，不能只看版號判斷是否已修。
- 建議五件事：盤點所有 PHP 系統（含委外與舊系統）；依官方公告更新並驗證生效；修補後檢查日誌、陌生檔案與異常帳號，必要時輪替憑證；WAF 只能當過渡；把處理納入有負責人與期限的管理流程。
- AI 角色：Wiz 研究指出部分底層問題可追溯至 PHP 5.4.0（約 2012 年）。文中強調 AI 降低發現與驗證門檻，企業必須縮短從公布到修補的時間。

## 值得引用

> 網站使用 WordPress，不代表只要更新 WordPress 就能修補 PHP 漏洞；應用程式更新與 PHP 執行環境更新，是兩項不同的工作。
