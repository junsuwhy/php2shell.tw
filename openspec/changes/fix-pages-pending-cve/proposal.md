# Proposal

Owner：大哥

## Why

讀者照修補頁做完「檢查、更新、重啟、驗證」四步驟，很容易以為已經沒事。但 PHP 官方 10/23 公告的 CVE-2026-115560 尚待修補，目前只有 `/dev/mitigation/` 有寫，修補頁完全沒提，讀者可能漏掉。

## What Changes

- 新增 `src/components/dev/PendingFix.astro` 元件，內容為「還沒完：維持關掉上傳進度」段落（`#pending` 錨點），說明 CVE-2026-115560 尚待修補、建議維持 `session.upload_progress.enabled=0`，並連到 `/dev/mitigation/` 與 php.net 公告。
- `src/pages/dev/fix/` 的 9 個修補頁結尾加入 `<PendingFix />`：alpine、build-from-source、debian、docker、macos、panels、rhel、ubuntu、windows。

## Capabilities

### New Capabilities

無（只加內容）。

### Modified Capabilities

無（只加內容）。

## Out of Scope

- 不寫攻擊方式、主機資訊。
- `arch.html` 不動。

## Impact

- 檔案：`src/components/dev/PendingFix.astro`、`src/pages/dev/fix/*.mdx`（9 個）。
- 每個修補頁新增錨點 `#pending`。
