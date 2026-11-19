# Proposal

Owner：大哥

## Why

PHP 於 2026-11-19 發布 8.5.13、8.4.28、8.3.37、8.2.36（原站上為 10/21 版 8.5.12、8.4.27、8.3.36、8.2.35）。已對照 php.net ChangeLog 與 GHSA-658j-r8rw-q6mx：四個版本都修補了 CVE-2026-115560（Session serializer 不一致可導致遠端程式碼執行）。站上原本寫「尚待修補、維持關閉上傳進度直到下一個例行版」，需要更新。

## What Changes

- `src/data/facts.yaml` 修補版本改為新版號（全站以 `facts.fixed` 呈現的地方一併更新）。
- 重寫 `PendingFix.astro`（9 個修補頁共用，`#pending` 錨點保留）：說明 11/19 新版已含 CVE-2026-115560 修補。
- `/dev/mitigation/`：改為「升級後才算根本解，升級前維持關閉上傳進度」。
- Docker、Windows 頁：不再宣稱新版 tag／zip 已上架，保留 10/21 版查詢結果並標「11/19 新版上架狀況待查證」。
- 時間軸新增 11/19 事件、新增新聞摘要；10/23 事件加註已修補。
- 各廠商頁的版本表是當日查詢結果，維持不變。

## Out of Scope

- PHP 8.6.0（同日發布）：ChangeLog 8.6.0 區段也列了該修補，但站上不新增 8.6 修補版表，待另案決定。
- 其他 10 月之後才出現的廠商狀態，需另行查證。
- 不寫攻擊方式、主機資訊。

## Impact

首頁、/dev/、/basic/act/、/dev/versions/、/dev/mitigation/、9 個 /dev/fix/ 頁、時間軸、新聞。
