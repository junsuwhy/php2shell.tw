---
title: "PHP2Shell爆發：AI協助找到藏了20年的PHP驚天漏洞，全球各地政府網站集體下線避風頭"
source: 電腦王阿達
source_type: 台灣科技媒體
url: https://www.kocpc.com.tw/archives/700257
author: 達小編
published_at: "2026-10-22T07:47:43+08:00"
published_at_taipei: "2026-10-22 07:47 (UTC+8)"
time_precision: exact
language: zh-TW
fetched_at: "2026-10-22"
tags: [歷史, AI, 網站下線, 曝險統計]
audience: [developer, onlooker]
---

## 摘要

電腦王阿達整理 PHP2Shell 的歷史脈絡與 AI 角色：從 2004 年 Stefan Esser、2020 年 bug #78876，到 2026 年 Calif／Wiz 在 AI 協助下證明可利用；並彙整各國關站與修補版本。

## 重點

- CVE-2026-109618 與 CVE-2026-109619，CVSS v4.0 9.2。修補預定台灣時間 10/21 22:00 釋出，細節前一日已在 Hacker News 外洩，多國政府選擇先關站。
- 依 W3Techs，約 69.3% 已知伺服器端語言網站使用 PHP。漏洞在引擎本身，與上層應用無關。
- **歷史**：2004 年 PHP 核心貢獻者 Stefan Esser 挖出第一個與記憶體上限相關的遠端漏洞，當時認為嚴重到不公開攻擊程式。2020 年 bug tracker 有人回報長變數造成記憶體耗盡且暫存檔未清除（bug #78876），未受重視。2024 年 OSTIF 與 Quarkslab 稽核時又找到一次。
- Calif 受 OpenAI「Patch the Planet」邀請，8/1 開始動手。Ryan Austin 說最初發現「沒有使用任何特殊工具，也沒有使用一般人拿不到的模型」，重點仍是了解目標與漏洞史。後續才把反覆出現的失敗路徑模式交給 LLM 抽象，用來找第二個漏洞。
- Wiz 的 Sagi Tzadik 等人 8/19 用 Wiz Atlas 搭配 Gemini 4 Argon 與 GPT-5.6 Sol 找到第一個 PHP 漏洞，8/24 回報。
- 核心開發者 Gina Peter Banyard：「唯一的緩解措施就是打補丁或升級 PHP。」Joe Ferguson：「ini 設定救不了你。」修補版 8.5.12、8.4.27、8.3.36、8.2.35；另為 7.4／8.0／8.1 提供精簡原始碼回移植。
- 英國 NCSC：無法立即修補者應考慮讓系統下線。Cloudflare 稱已部署 WAF 規則，比公開揭露早約 9 小時。
- 曝險數字：VirusTotal 公布約 510 萬個與 PHP 關聯的 IP；Silas Cutler 估約 130 萬台連網主機可能受影響；Shodan 搜尋約 190 萬台暴露的 PHP 主機。
- 下線案例含荷蘭眾議院與 NCSC、芬蘭 Valtori 公共服務、法國省市與巴黎警察局、比利時外交部、英國市議會，以及 Pinboard、4chan 唯讀、日本 Codmon 等。

## 值得引用

> 「了解你的目標」到今天依然管用。—— Calif 研究員 Ryan Austin（文中引述）
