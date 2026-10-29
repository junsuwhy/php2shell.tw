# Proposal

Owner：大哥

## Why

資安公司 Dream 揭露，有人用 PHP2Shell 攻擊防火牆的管理介面。站上把防火牆講成「多一層看守」（`/basic/act/` 第 2 張步驟卡），但沒有提到防火牆、VPN 設備本身也可能跑 PHP。社群貼文的讀者點進來，找不到這類設備該怎麼處理。

## What Changes

- `/basic/act/`：步驟卡之後新增 `#firewall` 小段「防火牆、VPN 設備也要顧」，三點內容：
  1. 防火牆、VPN 設備的管理頁面裡也可能跑 PHP，Dream 揭露有人用 PHP2Shell 攻擊防火牆管理介面（附 Dream 原文連結，註明目前只有這一個來源）。
  2. 設備的管理頁面不要開放外網連線，只讓公司內部連得到。
  3. 去問設備廠商有沒有受影響、修補什麼時候出來；有修補就盡快更新。
- `docs/knowledge/07-sources.md`：「資安廠商與基礎設施」表格加 Dream 一列。

## Capabilities

### New Capabilities

無（只加內容）。

### Modified Capabilities

無（只加內容）。

## Out of Scope

- 不寫廠商、型號、版本、攻擊方式、主機資訊。
- `arch.html` 不動。
- 不新增 `docs/news` 新聞檔。

## Impact

- 檔案：`src/pages/basic/act.astro`、`docs/knowledge/07-sources.md`。
- 新增錨點 `/basic/act/#firewall`，可供社群貼文直接連結。
