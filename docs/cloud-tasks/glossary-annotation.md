# 任務 glossary：專有名詞自動註解

先讀 [README.md](README.md) 的共同規則。

## 目標

實作 OpenSpec capability `glossary-annotation`（任務 5.1、5.2）。

## 要求

- 寫一個 remark（或 rehype）外掛，建置時讀 `src/data/glossary.yaml`，比對 `term` 與 `aliases`。
- 只套用在 `/dev/` 的 MDX 內容；`/basic/` 不啟用。
- 每頁只標註每個詞**第一次**出現的位置；略過程式碼（inline 與區塊）、標題、連結內文字。
- 呈現：詞彙加底線標記，並在**該段落下方**輸出「註」區塊列出這段新出現的詞與 `note`；行動裝置不靠 hover 也看得到。
- 輸出語意正確（例如詞彙用 `<dfn>` 或帶 `aria-describedby` 指向註解）。
- 中文比對注意：不要在英文單字中間誤配（例如 `FPM` 不應命中 `PHP-FPM` 以外的字串片段時要依詞表定義處理）；比對優先長詞。
- 附上一個測試用的 MDX 範例頁（可放在 `/dev/glossary/` 頁面下方的示範段落或單元測試），證明上述規則。
