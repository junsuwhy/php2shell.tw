# Spec Delta

## Purpose

讓 php2shell.tw 在瀏覽器分頁、書籤、行動裝置主畫面與社群帳號上，都以同一個沉穩、可信的標誌被認出來。

## ADDED Requirements

### Requirement: 網站圖示使用正式標誌

網站 SHALL 以 php2shell.tw 標誌（盾牌內的 `>_` 提示字元）提供 SVG favicon、多尺寸 ICO 備援（16、32、48）、180px apple-touch-icon，以及 manifest 用的 192／512 圖示。標誌 MUST 只使用全站色票，MUST NOT 含文字或威脅性意象。16px 版本 MUST 仍能辨識盾牌與提示字元。

#### Scenario: 瀏覽器分頁顯示標誌

- **WHEN** 訪客在支援 SVG favicon 的瀏覽器開啟任何頁面
- **THEN** 分頁顯示 `/favicon.svg` 的盾牌標誌，不再是 Astro 預設圖示

#### Scenario: 不支援 SVG 的環境

- **WHEN** 瀏覽器或工具只讀取 ICO
- **THEN** `/favicon.ico` 提供 16、32、48 三種尺寸的同一標誌

#### Scenario: 加到主畫面

- **WHEN** 訪客在行動裝置把網站加到主畫面
- **THEN** 使用 apple-touch-icon 或 manifest 圖示顯示標誌
