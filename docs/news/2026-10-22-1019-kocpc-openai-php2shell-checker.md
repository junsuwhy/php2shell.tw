---
title: "OpenAI 推出免費網站安全檢查工具！輸入網址，就能快速檢查 PHP2Shell 漏洞風險"
source: 電腦王阿達
source_type: 台灣科技媒體
url: https://www.kocpc.com.tw/archives/700277
author: Rocky
published_at: "2026-10-22T10:19:12+08:00"
published_at_taipei: "2026-10-22 10:19 (UTC+8)"
updated_at: "2026-10-22T11:13:20+08:00"
time_precision: exact
language: zh-TW
fetched_at: "2026-10-23"
tags: [檢查, 工具, 台灣媒體]
audience: [non-technical, developer, onlooker]
---

## 摘要

電腦王阿達介紹 OpenAI 公開的 php2shell-checker：用來看網站或主機的 PHP 版號有沒有落在受影響範圍。標題寫「輸入網址就能查」，正文說明這是 GitHub 上的開源工具，要透過 Codex 技能或自己在終端機執行，不是一個公開網頁表單。

## 重點

- 文章發布於 2026-10-22 10:19（台灣時間），11:13 有更新。作者 Rocky。文中嵌入 OpenAI 官方 X 貼文（2026-10-21）。
- 工具免費、Apache 2.0、用 Node.js，文章說不用另外安裝 npm 套件。網址模式讀 `Server` 與 `X-Powered-By`；本機模式執行 `php -v`。另有 phpcheck-url、phpcheck-server 兩個 Codex 技能。
- 文章寫它不發送漏洞利用請求：預設只送 HEAD，遇到 405 或 501 才改 GET，不讀網頁內容、不跟隨轉址。這與官方 README 一致。
- 三種結果：OK 是正式版且高於該分支的受影響界線；VULNERABLE 是等於或低於界線；UNKNOWN 是無法判斷，不代表已經修補。文章把網址模式的可信度寫成參考用，因為標頭可能被隱藏或修改；有伺服器權限的檢查較高，並建議以那種方式為準，還要核對發行商公告。
- 文章附了安裝與執行步驟。本站不轉貼那些步驟。檢查別人的網站不在這則摘要的建議裡；只能檢查自己有權限的系統。

## 值得引用

> 功能很單純，就是幫你確認「這個網站或這台主機跑的 PHP 版本，有沒有落在漏洞範圍內」。
