# Proposal

Owner：大哥

## Why

PHP 在 2026-11-19 發布 8.5.13、8.4.28、8.3.37、8.2.36，同日推出 8.6.0，CVE-2026-115560 已修補。PR #23 只改了全站共用的修補版號，各平台修補頁（Ubuntu、Debian、Alpine、Docker、Windows、macOS、RHEL、控制台）還停在 10/21 版或寫「待查證」，讀者會看到兩套說法。

## What Changes

- `src/data/facts.yaml` 的修補版本加入 8.6.0，`updated_at` 改為 2026-11-20。
- 各平台修補頁依 2026-11-20（台灣時間）查到的官方來源更新：
  - 已發布：Debian（DSA-6641-1、DLA-4916-1）、Alpine edge 與 v3.24 部分套件、Docker 官方映像、windows.php.net、Homebrew php@8.4／php@8.3、remi、ondrej/php PPA、cPanel EA4、Plesk。
  - 尚未發布：Ubuntu 官方套件（CVE 頁仍為 Needs evaluation）、RHEL（Affected，尚無 RHSA）、Alpine v3.23 以前、Homebrew php 與 php@8.2，寫明查詢時間並請讀者先用緩解設定。
  - 查不到官方來源：DirectAdmin，標「待查證」。
- `PendingFix` 元件拿掉「廠商資訊尚未重新查證」，改為提醒部分發行版尚未發布。
- `am-i-affected` 的發行版版號範例、版本矩陣說明、時間軸 11/19 那筆同步更新。
- 10/21 版號只保留在「只升到 10/21 版的請再升級」這類提醒與歷史事件中。

## Capabilities

### New Capabilities

無（只改內容）。

### Modified Capabilities

無（只改內容）。

## Out of Scope

- 不寫攻擊方式、payload、主機資訊。
- `arch.html` 不動。
- 不新增 `docs/news/` 檔案。

## Impact

- 檔案：`src/data/facts.yaml`、`src/data/timeline.yaml`、`src/components/dev/*`、`src/pages/index.astro`、`src/pages/dev/am-i-affected.mdx`、`src/pages/dev/fix/*.mdx` 等。
- 全站修補版本清單多一個 8.6.0。
