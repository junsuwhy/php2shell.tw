# 任務 basic-systems：非技術區

先讀 [README.md](README.md) 的共同規則。

## 目標

完成 `/basic/` 底下所有頁面：`/basic/`、`check`、`systems/*`（wordpress、drupal、joomla、cpanel、plesk、shop、outsourced）、`ask-your-vendor`、`faq`。

## 素材

`docs/knowledge/02-for-non-technical.md`、`src/data/facts.yaml`、`src/data/glossary.yaml` 的 `plain` 欄位（白話比喻）。

## 要求

- **不得出現專有名詞**：CVE、RCE、SAPI、worker、OOM、mod_php、FPM 等一律不用；非提不可的概念用生活比喻（PHP＝餐廳廚房的主廚）。
- 語氣親切、像朋友解釋；每頁只講一件事；每頁結尾是「下一步做什麼」。
- `/basic/check/`：檢查精靈，用幾個問題（網站是誰做的？放在哪裡？用什麼系統？）導向對應的系統頁；不需要 JS 也能用（例如每個選項是連結），有 JS 時可以更順。任何路徑都不能是死路，「不知道」也要有去處。
- 系統頁：怎麼在後台看到 PHP 版本（WordPress「網站健康狀態」、Drupal「狀態報告」、Joomla「系統資訊」、cPanel、Plesk 的位置），看到的版本要怎麼對照「安全版本」（讀 facts.yaml），以及該找誰。WordPress 頁要寫明「只更新 WordPress 本身不夠」。商店頁說明 Shopify 這類代管平台由平台處理。
- `/basic/ask-your-vendor/`：可一鍵複製的訊息範本（給主機商、給外包廠商各一份），複製按鈕不依賴 hover。
- FAQ 至少包含：手機會不會中毒？網站關掉代表被駭了嗎？要不要改密碼？
- 每頁可放一張插圖：在 images.yaml 登記 slot（風格沿用檔頭的 style），頁面用 ImageSlot。
