# Proposal

## Why

關站紀錄裡的網際網路檔案館（`internet-archive`）目前是 `php_confirmed: false`：Mashable 當時只看到 DownDetector 障礙回報、無法直接連結到 PHP 漏洞，路透引述其 X 貼文也只說「緊急維護與安全修補」。之後 Internet Archive 官方 X 帳號轉貼創辦人 Brewster Kahle 的說明（https://x.com/internetarchive/status/2113037994924163166 ，2026-10-21 22:41 UTC，台灣時間 2026-10-22 06:41），明確寫出 PHP 漏洞公布後偵測到攻擊、網站短暫下線、更新修補後恢復。官方說明已釐清關聯，站上資料與知識庫應跟著更新。

## What Changes

### 新增新聞

- `docs/news/2026-10-22-0641-internet-archive-kahle-outage-update.md`：Kahle 說明的摘要。frontmatter 比照既有 X 貼文（`source_type: 官方社群貼文`），tags 改用站上既有的「網站下線」「修補」。延伸報導的 Reuters factbox 改成與站上 `2026-10-21-2305-reuters-factbox-websites-offline.md` 一致（StreetInsider 轉載），不另引 Investing.com。原文節錄略去修補與測試所用工具的描述，只保留「偵測到攻擊、短暫下線、修補後恢復」。

### 關站名單

| id | 變更 |
| --- | --- |
| `internet-archive` | `php_confirmed` 由 `false` 改為 `true`；sources 加入新聞檔；action 保留路透那句，補上 Kahle 說明，Mashable 那句改成「當時無法直接連結」，前後不矛盾 |

措辭只寫「偵測到攻擊」，不寫遭入侵或 compromised：說明裡沒有提到入侵或資料外洩。

### 知識庫

- `docs/knowledge/04-for-onlookers.md`：網際網路檔案館和 Asana 拆成兩列；檔案館改寫成已確認與 PHP 漏洞有關，Asana 維持未證實。
- `docs/knowledge/06-discrepancies.md`：把「有沒有關站」改成「跟 PHP 漏洞有沒有關」，註明 Mashable、TechRadar（not definitively linked）當時的說法，以及之後由官方說明釐清。
- `docs/knowledge/07-sources.md`：Wikipedia 那列註明檔案館短暫下線已有路透與官方說明可依，不必再靠 Wikipedia。

### 時間軸

不新增。`src/data/timeline.yaml` 沒有單一受影響單位停機的條目，個別單位都併在 `preventive-shutdowns-2026-10-21`（「個別名單見關站資料」）。

## Capabilities

### New Capabilities

無。

### Modified Capabilities

無（只更新內容資料）。

## Out of Scope

- 不改 Mashable、Reuters 新聞摘要本身：它們記錄的是當時原文的說法。
- 不推測是 CVE-2026-109618 還是 CVE-2026-109619。
- 攻擊步驟、PoC 內容、修補手法細節或任何可重現攻擊的細節，一律不寫。

## Impact

- 關站紀錄頁（`/news/outages/`）的「來源沒有證實與 PHP 有關」筆數由 23 變 22（總數 62 不變），網際網路檔案館不再標示「與 PHP 的關聯未證實」。
- 不動版面與建置流程。
