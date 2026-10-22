---
title: "PHP2Shell: AI uncovers critical RCE vulnerabilities affecting 70% of the Internet"
title_zh: "PHP2Shell：AI 揭露影響七成網路的重大 RCE 漏洞"
source: Wiz Research
source_type: 原始研究報告（發現者之一）
url: https://www.wiz.io/blog/php2shell-php-rce
author: Sagi Tzadik, Shir Tamari, Nir Ohfeld, Tomer Schwartz
published_at: "2026-10-21T09:59:59-04:00"
published_at_taipei: "2026-10-21 21:59 (UTC+8)"
time_precision: exact
language: en
fetched_at: "2026-10-22"
tags: [原始研究, AI, OPcache, session, backtrace, 記憶體外洩, 時間軸]
audience: [developer, onlooker]
---

## 摘要

發現者之一 Wiz 的官方技術文。說明四條 bug 路徑、AI 的角色、已展示的攻擊目標與偵測方式。另設有活動官網 https://www.php2shell.com/ 。

## 四條路徑

| Bug | CVE | 元件 | 展示的影響 |
|---|---|---|---|
| Upload-progress 反序列化器 use-after-free | CVE-2026-109618 | Session / unserializer（`BG(unserialize)`） | 記憶體破壞 → RCE |
| 遠端行程記憶體外洩 | CVE-2026-109618 | Session（`PS(id)`） | 透過 `PHPSESSID` cookie 未授權讀取記憶體 |
| 致命錯誤 backtrace use-after-free | CVE-2026-109619 | `EG(last_fatal_error_backtrace)` | 跨請求 UAF → RCE（Drupal） |
| OPcache 型別混淆 | CVE-2026-109619 | OPcache 共享記憶體（`CG(map_ptr_last)`） | 跨 worker 型別混淆 → RCE（WordPress） |

- 記憶體外洩路徑**即使應用程式從未呼叫 `session_start()` 也能成立**。
- 外洩路徑 + 破壞路徑組合起來可「消除位址不確定性」再達成 RCE；整合成單一攻擊腳本，命名為 **php2shell**。
- 在 `wordpress:latest`、`drupal:latest`、`joomla:latest` 容器映像上展示了未授權 RCE。
- 「即使是一個簡單的 Hello World 應用」也可能受影響。
- 「過去十年發布的每個 PHP 版本，至少受其中一個漏洞影響。」

## AI 的角色

- 使用 Wiz Atlas、Gemini 4 Argon、GPT-5.6 Sol；Argon 在發現、利用開發、攻擊偵測與修補驗證上貢獻「無可取代」。
- LLM 協助把 exploit 調整到不同版本、設定與記憶體配置——「大幅降低擴大攻擊規模的門檻」。

## Wiz 時間軸

- 2026-08-19：用 Wiz Atlas + Gemini 4 Argon + GPT-5.6 Sol 找到第一個 PHP 漏洞
- 2026-08-20：對 Drupal 確認未授權 RCE
- 2026-08-21：對 WordPress 確認未授權 RCE
- 2026-08-24：通報 PHP 安全團隊
- 2026-09-21：PHP 確認並開始協調修補
- 2026-10-21：修補版發布、公開揭露

## 偵測

應用層日誌可能幾乎看不到東西。注意：異常 multipart 請求後接著 memory-limit 錯誤或連續 HTTP 500；異常巨大或格式錯誤的 `PHPSESSID` 回應 cookie；無法解釋的 PHP worker 重啟。

## 值得引用

> "a single researcher completed in a week what previously would have taken a world-class team months of work."

> "Applying the PHP security update remains the only complete remediation."
