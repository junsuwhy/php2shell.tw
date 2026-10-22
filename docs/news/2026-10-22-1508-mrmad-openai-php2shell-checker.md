---
title: "PHP2Shell漏洞檢查工具來了！OpenAI推出一鍵查網站PHP安全檢測"
source: 瘋先生
source_type: 台灣科技媒體
url: https://mrmad.com.tw/openai-php2shell-checker-tool
author: 瘋先生
published_at: "2026-10-22T15:08:41+08:00"
published_at_taipei: "2026-10-22 15:08 (UTC+8)"
time_precision: exact
language: zh-TW
fetched_at: "2026-10-23"
tags: [檢查, 工具, 台灣媒體]
audience: [non-technical, developer]
---

## 摘要

瘋先生報導 OpenAI 在 GitHub 公開 php2shell-checker，給網站管理員對 PHP 版號做基本檢查，並附 Codex 技能。標題的「一鍵查」在正文裡是技能與腳本，不是公開網頁表單。

## 重點

- 文章發布於 2026-10-22 15:08（台灣時間）。頁面作者欄沿用站名。
- Apache License 2.0，用 Node.js，文章說不需要另外安裝第三方 npm 套件。支援網址與本機兩種檢查。
- 與會實際觸發漏洞的工具不同：不主動傳送漏洞利用程式碼，只拿 PHP 版號比對受影響範圍。網址模式讀 `Server`、`X-Powered-By`；能登入主機時檢查本機 PHP 執行檔版本。支援 JSON 與不同結束代碼。
- phpcheck-url 給只有網址的人，版本資訊可能被隱藏或修改，結果當初步參考。phpcheck-server 需要主機存取權限，可信度較高，但仍要確認網站實際在跑的環境。文章建議自己管主機的人優先確認 PHP-FPM 或 Apache 綁定的版本。
- 文章後段有安裝步驟。本站不轉貼。最重要的工作文章自己也寫了：檢查版本，並安裝對應的安全修補。工具不代替 PHP 官方修補。

## 值得引用

> 不會主動傳送漏洞利用程式碼，而是透過 PHP 版本資訊比對已知受影響範圍。
