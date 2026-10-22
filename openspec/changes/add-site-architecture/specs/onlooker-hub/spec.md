# Spec Delta

## Purpose

讓關心事件的讀者用懶人包、時間軸與新聞牆看懂前因後果，並能對照關站名單、名言與尚未一致的說法。時間同時標出 UTC 與台灣時間。

## ADDED Requirements

### Requirement: 吃瓜區提供可篩選的事件閱讀

吃瓜區 SHALL 提供懶人包、故事、時間軸、新聞牆、單則摘要、關站名單、名言與說法分歧。時間軸 MUST 能在 UTC 與台灣時間之間切換。來源只有日期時，頁面 MUST NOT 補上時分。

#### Scenario: 懶人包首頁

- **WHEN** 訪客開啟 `/news/`
- **THEN** 頁面包含一句話、數字看板、最新五則與時間軸精華
- **AND** 時間軸精華只列出資料標記要出現在精華的事件

#### Scenario: 長篇故事

- **WHEN** 訪客開啟 `/news/story/`
- **THEN** 故事依序涵蓋 2004、2024、AI、外洩與全球關站

#### Scenario: 時間軸切換

- **WHEN** 訪客在 `/news/timeline/` 切換 UTC 與台灣時間
- **THEN** 同一事件同時可對照 UTC 與台灣時間（UTC+8）
- **AND** 精度只有日期的事件只顯示日期，不出現補上的時分

#### Scenario: 新聞牆篩選

- **WHEN** 訪客開啟 `/news/wall/`
- **THEN** 新聞以卡片牆呈現
- **AND** 可以依語言、來源類型與標籤篩選

#### Scenario: 單則新聞

- **WHEN** 訪客開啟某一則新聞摘要頁
- **THEN** 頁面顯示該則摘要與原文連結

#### Scenario: 關站名單與名言

- **WHEN** 訪客開啟 `/news/outages/` 或 `/news/quotes/`
- **THEN** 關站頁列出全球關站名單，名言頁列出名言

#### Scenario: 說法分歧

- **WHEN** 訪客開啟 `/news/rumors/`
- **THEN** 頁面並列說法不一致或待查證的項目
- **AND** 頁面不把分歧改寫成單一結論
