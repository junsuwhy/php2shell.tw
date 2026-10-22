---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# 首頁（身份選擇入口）

## Scope
- 路由 `/`；Persuade 模式；code-led（本機無生圖工具，圖片之後由 Grok 依 `src/data/images.yaml` 的 prompt 產生）。
- 一併交付全站共用的右上角「轉乘」身份切換選單（Base layout）。三個身份區的視覺世界不在本次範圍。

## Audience & job
從社群分享點進來的台灣讀者，多為手機、緊張或好奇。3 秒內找到自己的出口；出口下方看到要更新的版本。

## Direction contract
THESIS：首頁是一座車站的導引層——三種身份是三個編號出口，各有自己的路線色；拒絕「置中標題＋三張等大卡片」的產業預設。
OWN-WORLD：深石墨導引牌（#22262c 類）在淺灰磨石地坪上；三條自創路線色：黃（非技術）、綠（開發）、粉紅（吃瓜）；警示紅只給「旅客注意」。思源黑體 Black 當導引字，數字用等寬表格數字。平塗、無陰影、無漸層；圓形編號標、粗頂邊色條、方向箭頭為自繪 SVG。
STORY：讀者先認出事件（站名牌），再認出自己（出口情境句），點進出口；離開前看到要更新的版本與來源小票。
FIRST VIEWPORT：上方站名牌佔約 1/4 高：事件名、一句指示、右側 CVE 與更新時間；中段三個出口橫排（手機直排），每個出口：編號圓標＋路線色頂邊、身份名（最大字）、情境句、出口插圖位、「往」目的地、箭頭；出口下緊接紅色「旅客注意」靜態告示：四個修補版本＋來源小票。回訪者在出口上方看到「上次搭乘」牌。
FORM：IMPECCABLE’S PICK「車站導引」，我的排序第 1；seed key cc9bcc26。
FINISH：unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Image slots
站體橫幅插畫、三個出口插圖、社群分享卡；定義於 `src/data/images.yaml`，未產生時以標示框（開發）或乾淨的備用樣式（正式）呈現。

## Unresolved
- 圖片待 Grok 產生；不得仿冒任何真實交通單位的標誌、字體或官方配色。
