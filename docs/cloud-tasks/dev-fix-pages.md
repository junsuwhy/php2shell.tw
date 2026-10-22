# 任務 dev-fix：開發者區內容頁

先讀 [README.md](README.md) 的共同規則。

## 目標

完成 `/dev/` 底下所有頁面（目前是佔位頁）：`/dev/`、`root-cause`、`am-i-affected`、`fix/*`（debian、ubuntu、rhel、alpine、windows、docker、macos、panels、drupal、wordpress、build-from-source）、`mitigation`、`detect`、`eol`、`glossary`。

## 素材

- 版本、CVE、SAPI 風險：`src/data/facts.yaml`（版本矩陣一律讀這裡，不要寫死）。
- 各平台官方修補資訊：`docs/knowledge/08-platform-advisories.md`（只用其中有來源的指令與版號）。
- 成因、緩解、偵測：`docs/knowledge/03-for-developers.md`、`docs/news/2026-10-21-2200-php-net-security-advisory.md`。
- 名詞：`src/data/glossary.yaml`。

## 要求

- 每個 `fix/*` 頁固定四段：**檢查 → 更新 → 重啟 → 驗證**；指令放在可一鍵複製的程式碼區塊（做一個共用 `CommandBlock` 元件，含複製按鈕，不依賴 hover）。
- 每頁附來源連結（官方公告優先），並標示查詢日期。
- Drupal 工具頁：drush 與「狀態報告」如何看 PHP 版本、composer 平台需求、代管平台（Acquia、Pantheon 等）應聯絡誰；只寫官方文件有的指令。
- WordPress 工具頁：WP-CLI 與 Site Health。
- 成因頁只到概念層級（OOM bailout 留下半初始化／過期狀態；session upload-progress、OPcache、fatal error backtrace 三個面向），**不得**出現函式內部流程或利用手法。
- 緩解頁要有「不要做」清單：RLIMIT_AS／RLIMIT_DATA、`ini_set()`、`.user.ini`。
- 頁面以 MDX 撰寫（放 `src/content/dev/` 或直接 `src/pages/dev/*.mdx`），讓之後的名詞自動註解能套用。
- 每頁結尾都有「下一步」。
