---
title: "php2shell: A tale of two PHP remote vulnerabilities"
title_zh: "php2shell：兩個 PHP 遠端漏洞的故事"
source: Calif Research
source_type: 原始研究報告（發現者之一）
url: https://calif.io/php2shell/
author: Ryan Austin（Calif）
published_at: "2026-10-21"
published_at_taipei: "2026-10-21（原文未標時間；依 Sansec，於 14:00 UTC 協調揭露時公開）"
time_precision: date-only
language: en
fetched_at: "2026-10-22"
tags: [原始研究, 歷史, AI]
audience: [developer, onlooker]
---

## 摘要

最早發現漏洞的 Calif 所寫的長篇故事，從 2004 年講起，說明「一個早就知道的 bug 類型」為何到現在才被證明可遠端利用。（本站只摘錄歷史與方法論，技術細節請讀原文。）

## 歷史脈絡

- **2004**：PHP 安全研究先驅 Stefan Esser 發現第一個「memory limit」類遠端漏洞，因嚴重而未公開 exploit。
- **2020**：有人回報 bug #78876（長變數造成記憶體耗盡、暫存檔未清除），未受重視。
- **2024**：OSTIF／Quarkslab 稽核期間再次碰到相關問題（見 PHP 基金會說明）。
- **2026**：Calif 參與 OpenAI 的 Patch the Planet，重新審視這類「致命錯誤打斷清理」的老問題。

## AI 在其中的角色

- 研究者用 LLM 協助審查記憶體配置、致命錯誤與請求結束流程中「可能被中途打斷」的位置。
- 找到第一個問題後，讓 LLM 把模式**一般化成一份 SKILL.md**：「先發布／銷毀狀態 → 執行可能失敗的工作 → 再初始化或提交；若中途致命錯誤，提交與回滾被跳過，後續使用者就會信任錯誤狀態」。這份模式帶他們找到 session upload-progress 的第二個漏洞。
- Ryan Austin 自述：沒有用特殊工具或一般人拿不到的模型，而是專注在自己熟悉、了解漏洞史的目標——「了解你的目標」依然管用。

## 值得引用

> 證明它們可被利用，需要一條極度複雜的步驟鏈結，接近人類研究者實際能達成的極限。（中文轉述，引自電腦王阿達報導）
