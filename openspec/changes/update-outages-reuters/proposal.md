# Proposal

## Why

Reuters 的關站整理（`docs/news/2026-10-21-2305-reuters-factbox-websites-offline.md`）點名了多個預防性下線或暫停服務的政府、企業與組織。關站紀錄頁（`/news/outages/`）的資料檔 `src/data/outages.yaml` 還沒有引用這篇：一部分已在名單上的單位缺少這個來源，另有一些單位完全不在名單上。

## What Changes

只處理 Reuters 原文明確點名的單位；`php_confirmed` 依 Reuters 原文判斷，只有原文把該單位的動作明確連到 PHP 漏洞（或寫明是跟著荷蘭 NCSC 預防性下線）才設為 `true`。原文只寫「安全措施」「緊急措施」「安全修補」而沒提 PHP 的，一律設為 `false`，action 也寫明「路透社這段沒有提到 PHP」。

### 新增

| id | 名稱 | php_confirmed |
| --- | --- | --- |
| `netherlands-political-parties` | 荷蘭五大政黨網站 | true |
| `netherlands-hospitals` | 荷蘭多家醫院網站 | true |
| `orange` | Orange（法國電信集團） | true |
| `czech-government` | 捷克政府 | false |
| `japan-mof` | 日本財務省 | false |
| `japan-jma` | 日本氣象廳 | false |
| `japan-nta` | 日本國稅廳 | false |
| `canada-government` | 加拿大政府 | false |
| `nomura` | 野村 | false |
| `mufg` | 三菱 UFJ 金融集團 | false |
| `ana` | 全日空（ANA） | false |
| `jr-east` | JR 東日本 | false |
| `bbc-web-portals` | BBC 部分網頁入口 | false |

荷蘭政黨與醫院是 Reuters 沒有逐一點名的群組；名單裡已有 `france-local-governments` 這類群組條目，因此比照收錄，action 寫明未點名。

既有的 `japan-government` 寫的是首相發文與國家網路統括室的要求，和財務省、氣象廳、國稅廳暫停服務是不同的事，所以另開條目，不併入。既有的 BBC《Doctor Who》《The Traitors》條目是特定頁面，Reuters 只說「部分網頁入口」，也另開一筆。

### 補上 Reuters 來源（不改 php_confirmed 與 action）

| id | php_confirmed |
| --- | --- |
| `germany-itzbund` | true |
| `france-local-governments` | true |
| `belgium-foreign-ministry` | true |
| `netherlands-ncsc` | true |
| `overheid-nl` | true |
| `port-of-rotterdam` | true |
| `knvb` | true |
| `finland-valtori` | true |
| `wikimedia` | true |
| `internet-archive` | false（Reuters 只說緊急維護與安全修補，沒提 PHP，維持未證實） |
| `edinburgh-city-council` | true |

## Capabilities

### New Capabilities

無。

### Modified Capabilities

無（只更新內容資料）。

## Out of Scope

- Reuters 沒點名的單位（例如原文開頭泛稱的學校）不收。
- 不改既有條目的 `php_confirmed` 與 action 文字。
- 攻擊步驟、PoC 內容或任何可重現攻擊的細節，一律不寫。

## Impact

- 只改 `src/data/outages.yaml`：新增 13 筆、11 筆補來源。不動版面與建置流程。
- 本分支以 `news/2026-10-26-batch`（PR #12）為基底：建置時 `resolveSources` 會拿 `outages.yaml` 的 sources 對 `docs/news` 檔名驗證，Reuters 這篇新聞檔在 PR #12 才加入，所以要等 PR #12 合併後再合併本變更。
