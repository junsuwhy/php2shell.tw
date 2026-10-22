---
title: "PHP2Shell 到 webshell：CVE-2026-109618/109619 檢查與加固"
source: Tony.Wu's Blog
source_type: 技術部落格（防守向）
url: https://www.itnotetk.com/2026/10/22/php-webshell-rce-detection-hardening/
author: Tony.Wu
published_at: "2026-10-22T00:11:36+08:00"
published_at_taipei: "2026-10-22 00:11 (UTC+8)"
time_precision: exact
language: zh-TW
fetched_at: "2026-10-22"
tags: [偵測, 緩解, webshell, 加固]
audience: [developer]
---

## 摘要

Tony.Wu's Blog 的防守向長文：把 PHP2Shell 當成入口、把落地 webshell 當成駐點，說明如何判斷是否受影響、從日誌與檔案找入侵跡象、修補與主機加固。全文宣稱不含可直接利用的攻擊程式碼。

## 重點

- 受影響版本寫成 PHP 5.4.0 至 8.5.11；修補版 8.2.35／8.3.36／8.4.27／8.5.12。文中也一併處理 CVE-2024-4577（Windows PHP-CGI）與 CVE-2021-3129（Laravel Ignition debug RCE）。
- 檢查方式：對照 PHP 版本與 SAPI、確認相關設定是否生效；不要只看版本號。
- 偵測：從 access log 找對上傳／快取／暫存目錄裡 `.php` 的請求；掃描可寫目錄近期新增的 PHP 檔；以危險函式特徵、混淆特徵、熵值與 git／AIDE 等完整性比對交叉驗證。命中項目需人工確認，不要自動刪檔。
- 修補順序：先關掉入口再清落地檔。根本解是升級 PHP；無法立刻升級時，文中建議暫時關閉用不到的 `session.upload_progress`，並收緊 session 設定。
- 加固：改用 PHP-FPM、收斂 `disable_functions` 與 `open_basedir`、上傳目錄禁止執行 PHP、關閉 `expose_php`／正式環境 `display_errors`、檔案完整性監控、WAF 當過渡層、Web 行程最小權限。
- 強調 WAF 與設定緩解不能取代升級；清完檔案後仍須輪替可能外洩的憑證。

## 值得引用

> 漏洞是門，webshell 是攻擊者自己配的鑰匙；很多團隊把 PHP 升級好了，卻沒發現鑰匙早就留在門後。

## 備註

本文把 PHP2Shell 的成因寫成：`session.upload_progress` 在應用程式碼執行前把攻擊者可控內容寫進 session，之後反序列化失敗時觸發物件魔術方法而導致 RCE。這與 PHP 官方安全公告不一致。

官方將 CVE-2026-109618 定為記憶體不足（OOM）處理造成的記憶體破壞，CVE-2026-109619 定為過期全域狀態（stale global state）在記憶體釋放後仍被後續請求使用。技術成因請以 PHP 安全公告為準。文中「關閉 `session.upload_progress`」僅能視為針對特定路徑的暫時緩解，不能當成兩洞的完整成因說明。
