# Proposal

## Why

Workers Builds 在非 main 分支（PR）上會執行 `npx wrangler preview` 建立預覽。`wrangler.jsonc` 沒有 `previews` 區塊，網站建置成功後部署步驟就失敗，PR 一律顯示建置失敗（例如 PR #9）。

## What Changes

- `wrangler.jsonc` 加上空的 `"previews": {}` 區塊。assets 與相容性設定維持在最上層，不需搬動。

## Capabilities

### New Capabilities

無。

### Modified Capabilities

無（只改部署設定）。

## Out of Scope

- 正式站（main）的部署方式不變。

## Impact

- 只改 `wrangler.jsonc`。PR 分支可以產生預覽網址；main 的正式部署不受影響。
