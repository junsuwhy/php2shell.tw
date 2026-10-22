# Spec Delta

## Purpose

讓三個身份區看起來是三個不同的世界，同時共用同一套版面骨架與無障礙基準，具體視覺數值則以 DESIGN.md 為準。

## ADDED Requirements

### Requirement: 以身份切換 design tokens 並符合無障礙基準

三個身份區 SHALL 共用版面骨架與字級階層，並以 `data-persona` 切換該區的 design tokens。介面 MUST 符合 WCAG 2.2 AA，且 MUST 可用鍵盤操作。網站 MUST 尊重減少動效與配色偏好。色票、字體與元件的具體數值 MUST 以 impeccable 產生的 DESIGN.md 為準。

#### Scenario: 三個世界共用骨架

- **WHEN** 訪客在非技術區、開發者區與吃瓜區之間切換
- **THEN** 三區使用同一套版面骨架與字級階層
- **AND** 頁面以 `data-persona` 切換該區的 design tokens

#### Scenario: 各區的視覺方向

- **WHEN** 訪客分別閱讀三個身份區
- **THEN** 非技術區呈現明亮、暖色、大字、圓角、插圖與高對比，並維持一頁一件事
- **AND** 開發者區呈現深色、等寬字、終端機提示符與 diff 樣式，掃描線只作克制點綴
- **AND** 吃瓜區呈現報頭、卡片牆、時間軸與引言大字

#### Scenario: 首頁預告風格但保持中性

- **WHEN** 訪客觀看首頁的三張身份卡片
- **THEN** 每張卡片預告該身份世界的風格
- **AND** 首頁其餘部分保持中性、清楚的三選一，而不是整頁改成其中一個世界

#### Scenario: 鍵盤與對比

- **WHEN** 訪客只用鍵盤操作
- **THEN** 可以完成選擇身份、切換身份與開啟各區主要頁面
- **AND** 文字與背景對比符合 WCAG 2.2 AA

#### Scenario: 減少動效

- **WHEN** 訪客的環境要求減少動效
- **THEN** 網站不播放非必要動畫，包含掃描線一類的裝飾動效

#### Scenario: 配色偏好

- **WHEN** 訪客的環境表明配色偏好
- **THEN** 頁面宣告與該身份世界一致的 color-scheme
- **AND** 非技術區維持亮色世界，開發者區維持深色世界

#### Scenario: 視覺數值以 DESIGN.md 為準

- **WHEN** 實作三區的色票、字體或元件細節
- **THEN** 這些數值來自 impeccable 產生的 DESIGN.md
- **AND** 不在規格裡另訂一套色票或字級數值
