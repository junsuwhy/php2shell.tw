# Proposal

## Why

大哥希望帶著問題進來的人，在 1～2 頁內就拿到答案（怎麼修補、該找誰）。目前 `/dev/` 首頁在 hero 之後只有一行小字「選你的平台」，版本對照要再點進 `/dev/versions/` 才看得到；工程師進站後得自己拼湊「我該升到哪一版、我的平台去哪看」。

產品經理的提議：「工程師這條線，`/dev/` 首頁直接放『先看版本對照 → 選你的系統』兩步，點下去就是 Ubuntu、Docker 這些修補頁。修補頁內容長，維持獨立頁，首頁到答案剛好 2 頁。」

## What Changes

- `/dev/` 首頁 hero 保留原樣（標題、事實副句、版號膠囊、三顆修補行動按鈕），版號膠囊下方加一行跳轉小字「跳到：版本對照｜選你的系統」（`<nav class="jump-line">`，分別連到 `#step-versions`、`#step-platform`），與 `/basic/act/` 的跳轉小字一致。小字外觀但連結觸控高度 ≥44px；文字顏色跟著 hero（HeroBanner 疊圖時會把連結改白字，這行沿用而不強制指定顏色）。
- hero 正下方新增標號的兩步（`<ol class="steps">`）：
  1. **先看版本對照**（`#step-versions`）：直接嵌入既有的 `VersionMatrix` 元件（讀 `facts.yaml`，不寫死版號），包在原生 `<details open>` 裡，可收合；下方連到 `/dev/versions/` 看完整矩陣與受影響 SAPI 風險排序。
  2. **選你的系統**（`#step-platform`）：一組按鈕連到各平台修補頁——Debian、Ubuntu、RHEL、Alpine、Windows、macOS、Docker、控制台，以及自行編譯（`/dev/fix/build-from-source/`，原本在 `/dev/checklist/`、`/dev/am-i-affected/` 與選單都已有入口，因此一併納入）。按鈕高度 48px，手機 390px 寬可換行。下方附一行連到既有的 `/dev/am-i-affected/#source`「先分辨 PHP 從哪裡來」。
- 移除原本底部那行「選你的平台：」小字清單，避免同一組連結出現兩份。名詞表那行說明保留在頁尾。
- 純 HTML／CSS，沒有 JavaScript 也能用；視覺沿用 dev 區的 `--line-dev`、`--on-line`、`--graphite` 等既有變數。
- `docs/architecture.md` 的 `/dev/` 列改為描述新的兩步結構。

## Capabilities

### New Capabilities

（無）

### Modified Capabilities

- `dev-guide`：開發者首頁改為「先看版本對照 → 選你的系統」兩步，首頁到修補頁剛好 2 頁。

## Out of Scope

- 不合併、不搬移、不刪除任何頁面；修補頁維持獨立頁。
- `/dev/am-i-affected/` 與其 `#verify` 等錨點原封不動（已有對外貼文連到 `/dev/am-i-affected/#verify`）。
- 不新增 `_redirects`。
- 不新增或改寫任何事實與說法，只重組既有內容與連結。
- 不調整 `DESIGN.md` 視覺系統、`CampaignLanding`、`HeroBanner` 與 `VersionMatrix` 元件。

## Impact

- 修改 `src/pages/dev/index.astro`、`docs/architecture.md`。
- 新增 `openspec/changes/update-dev-two-step/`。
- 不影響內容 schema、路由與 sitemap。
