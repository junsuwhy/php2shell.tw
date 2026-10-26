# Spec Delta

## Purpose

讓網站老闆在「你需要做的三件事」就能一鍵帶走要傳給主機商的詢問訊息，不必另外找頁面、也不必自己打字。

## ADDED Requirements

### Requirement: 行動頁提供可複製的詢問訊息

`/basic/act/` 第二步 SHALL 顯示共用的詢問訊息範本，並提供「複製詢問訊息」按鈕。複製成功後 MUST 顯示可見的「已複製」回饋，並透過 `aria-live` 區域通知螢幕閱讀器。Clipboard API 不可用或失敗時 MUST 提供後備做法：先嘗試舊式複製，仍失敗則選取整段訊息並提示訪客手動複製。沒有 JavaScript 時，訊息文字 MUST 仍可見、可選取，且不顯示無作用的按鈕。

#### Scenario: 複製成功

- **WHEN** 訪客在支援 Clipboard API 的瀏覽器點「複製詢問訊息」
- **THEN** 詢問訊息全文複製到剪貼簿
- **AND** 按鈕與訊息下方顯示「已複製」，螢幕閱讀器讀出同樣內容

#### Scenario: 無法自動複製

- **WHEN** 瀏覽器不支援或拒絕自動複製
- **THEN** 整段詢問訊息被選取
- **AND** 頁面顯示提示，告訴訪客用鍵盤快速鍵或長按來手動複製

#### Scenario: 沒有 JavaScript

- **WHEN** 訪客的瀏覽器停用 JavaScript
- **THEN** 詢問訊息全文照常顯示、可以選取複製，頁面上沒有點了沒反應的按鈕
