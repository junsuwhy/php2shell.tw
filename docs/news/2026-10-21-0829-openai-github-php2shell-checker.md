---
title: "PHP Version Checker"
title_zh: "PHP 版本檢查工具 php2shell-checker"
source: OpenAI
source_type: 官方工具（GitHub）
url: https://github.com/openai/php2shell-checker
author: OpenAI
published_at: "2026-10-21T00:29:12Z"
published_at_taipei: "2026-10-21 08:29 (UTC+8)"
time_precision: exact
time_note: "published_at 是 GitHub API 的儲存庫建立時間。本站 2026-10-23 讀到的 README 對應同日 18:05:54 UTC（台灣 10 月 22 日 02:05）的提交 Update README.md。官方 X 貼文指向這個儲存庫的時間另見該則摘要。"
language: en
fetched_at: "2026-10-23"
tags: [官方, 檢查, 工具]
audience: [developer, non-technical]
---

## 摘要

OpenAI 的 GitHub 儲存庫 php2shell-checker，README 標題為 PHP Version Checker。它用來檢查網站或本機的 PHP 版號是否落在工具內建的 php2shell 門檻，不是 PHP 官方修補本身。儲存庫建立時間不等於對外宣布的時間；宣布見官方 X 貼文那則。

## 重點

- 儲存庫 `openai/php2shell-checker`，GitHub API 記錄建立於 2026-10-21 00:29:12 UTC（台灣時間 08:29）。授權 Apache-2.0。OpenAI 不接受外部程式碼貢獻，問題與非程式回饋走 GitHub issues。
- 給兩種人：只有網址時用 phpcheck-url；有伺服器權限時用 phpcheck-server。也可以直接用 Node.js 執行儲存庫裡的腳本。檔案清單沒有套件清單。
- 網址模式只讀 HTTP 回應標頭的 `Server` 與 `X-Powered-By`。本機模式讀 `php -v`。結果是 OK、VULNERABLE 或 UNKNOWN。
- README 寫明：只評估標頭或 `php -v` 露出的版本；送出 HEAD，只有在 HEAD 回 405 或 501 時才改送 GET；不跟隨重新導向，也不看回應本文。看不到版本就是 UNKNOWN。
- OK 是版本比較：假設該分支其後的穩定版含有修補，並沒有獨立驗證修補真的在那支執行檔裡。要對照 PHP 官方安全公告。標頭可以隱藏或改寫；發行版回移植可能不改上游版號。UNKNOWN 不代表已經修補。
- 網址檢查技能寫明：不要跑會觸發漏洞的測試。結束代碼 1 與 3 分別是有風險與無法判斷，不是程式執行失敗。
- 這個工具不代替更新 PHP。只能檢查自己有權限的系統。

## 值得引用

> The checker only evaluates versions exposed in HTTP response headers or by `php -v`. […] `UNKNOWN` does not mean the target is patched!
