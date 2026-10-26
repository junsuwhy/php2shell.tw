# Proposal

## Why

10/23 到 10/26 之間有幾則和站上說法直接相關的新消息：Unit 42 撤回 10/23 那則「歐洲政府機關遭入侵與 PHP2Shell 有關」的更新，The Record 報導利用嘗試增加但受訪專家說都還沒成功，CISA 更新了 10/21 的公告，還有 Reuters 的關站整理和 iThome 的台灣廠商修補消息。網站新聞牆與時間軸還沒有這些內容，站上舊的 Unit 42 摘要也還留著已經從原頁面消失的句子。

## What Changes

- 新增 4 則新聞摘要：
  - `docs/news/2026-10-26-0515-unit42-retracts-european-agency-claim.md`（Unit 42 撤回說法）
  - `docs/news/2026-10-21-2305-reuters-factbox-websites-offline.md`（Reuters 關站整理）
  - `docs/news/2026-10-24-0155-therecord-exploitation-attempts-pocs.md`（The Record：利用嘗試與 PoC 現況）
  - `docs/news/2026-10-23-ithome-sharetech-php2shell-patches.md`（iThome：台灣廠商修補）
- 用更新後的內容覆蓋 `docs/news/2026-10-21-cisa-critical-php-patch-now.md`。
- 更正舊文 `docs/news/2026-10-21-unit42-php-threat-brief.md`：`updated_at` 改為 10/25 撤回更新的時間、標籤加「更正」、文末加「更正（2026-10-26）」一節，寫明本站不把那起歐洲政府機關事件列為 PHP2Shell 入侵案例。
- `src/data/timeline.yaml`：
  - 新增 The Record 報導（2026-10-23 17:55 UTC）與 Unit 42 撤回（2026-10-25 14:15 PT）兩筆事件。兩筆摘要都不寫任何已確認的入侵。
  - 既有的 `preventive-shutdowns-2026-10-21` 補上 Reuters 來源。

## Capabilities

### New Capabilities

無。

### Modified Capabilities

無（只新增與更正內容資料）。

## Out of Scope

- `src/data/outages.yaml` 的關站名單更新，之後另開 PR 處理。
- 攻擊步驟、PoC 內容或任何可重現攻擊的細節，一律不寫。

## Impact

- 新增 4 個 news md 檔、覆蓋 1 個、更正 1 個，時間軸資料加 2 筆、改 1 筆來源。不動版面與建置流程。
