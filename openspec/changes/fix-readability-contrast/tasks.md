# Tasks

## 1. 主選單目前頁面對比

- [x] 1.1 `AreaNav.astro` 目前頁面改用 `--on-line` 深字，權重高於一般連結白字（含下拉選單與 hover／focus）
- [x] 1.2 檢查其他頁面與元件是否還有白字配路線色的樣式

## 2. 收合段落內容被判定遮住（判定為誤判、不修）

- [x] 2.1 確認 `/basic/act/` 沒有 sticky／fixed 元素，找出被蓋住的原因
- [x] 2.2 經產品經理判斷為檢查工具誤判、不修，保留 Ctrl+F 自動展開收合段落；`act.astro` 不改

## 3. /dev/ 字級與行寬

- [x] 3.1 hero 副句最小字級 13px，放不下一行時換行
- [x] 3.2 步驟區段落與頁尾說明限制行寬 `60ch`

## 4. 驗證

- [x] 4.1 以 Node 24 執行 `npm run build` 確認建置通過（97 頁）
- [x] 4.2 本機建置以 taste-skill inspect 複驗 `/`、`/basic/act/`、`/dev/`：contrast、small-text、measure 三項都消失；covered-text 因不修仍會出現
- [x] 4.3 PR 預覽網址複驗同三項；covered-text 因不修仍會出現
