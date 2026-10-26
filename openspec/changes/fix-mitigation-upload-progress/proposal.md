# Proposal

## Why

`/dev/mitigation/` 的摘要表寫 `session.upload_progress.enabled=0`「修補後可保留；需要上傳進度再打開」。PHP 官方 2026-10-23 的資訊性公告（CVE-2026-115560）建議維持關閉直到下一個例行修正版，兩者衝突，讀者照舊說法打開可能重新暴露風險。

## What Changes

- 摘要表第 2 項「修補後」欄改為：在 PHP 下一個例行修正版釋出前，請維持 `session.upload_progress.enabled=0`。
- 「關掉上傳進度」段落補一句說明，連到本站 CVE-2026-115560 新聞摘要與 php.net 公告。

## Capabilities

### New Capabilities

無。

### Modified Capabilities

無（只更正內容）。

## Out of Scope

- 其他緩解措施與頁面不在本變更範圍。

## Impact

- 只改 `src/pages/dev/mitigation.mdx`。
