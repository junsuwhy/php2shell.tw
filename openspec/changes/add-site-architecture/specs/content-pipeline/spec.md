# Spec Delta

## Purpose

讓維護者只新增或修改資料檔就能更新全站事實與新聞，並在資料不合格時讓建置失敗，避免壞資料被發布上線。

## ADDED Requirements

### Requirement: 結構化資料驅動內容且壞資料無法建置

網站 SHALL 以 `docs/news` 的 Markdown 作為新聞 collection，並以 schema 驗證 frontmatter。事實、時間軸、名詞、關站名單與名言 MUST 各只用一份 YAML。新增一則符合 schema 的新聞 MUST NOT 需要修改程式碼。缺漏或不合格的資料 MUST 使建置失敗。來源頁 MUST 由新聞 collection 與知識庫引用產生。網站 MUST NOT 在建置或瀏覽時即時抓取外部新聞。

#### Scenario: 新增新聞不改程式碼

- **WHEN** 維護者只在 `docs/news` 新增一則通過 schema 的 Markdown
- **THEN** 建置收錄該則新聞，新聞牆與對應單則頁看得到它
- **AND** 不需要為這一則修改程式碼

#### Scenario: 壞的新聞檔擋下建置

- **WHEN** 新聞檔缺少 schema 規定的必填欄位，或欄位格式不合格
- **THEN** 建置失敗，該筆資料不會變成已發布頁面

#### Scenario: 事實只有一處

- **WHEN** 維護者更新事實資料裡的 CVE、CVSS、修補版本或最後更新時間
- **THEN** 首頁與開發者區版本矩陣顯示同一份新值
- **AND** 這些數字沒有第二份需要手動同步的副本

#### Scenario: 時間軸欄位

- **WHEN** 維護者在時間軸資料新增一筆
- **THEN** 該筆包含時間（保留原時區）、精度、標題、摘要、來源、標籤與重要程度
- **AND** 精度只接受 exact、approximate 或 date-only，重要程度只接受 1 到 3
- **AND** 重要程度超出 1 到 3 時建置失敗

#### Scenario: 名詞關站與名言

- **WHEN** 維護者在名詞表新增一詞，或在關站名單、名言各新增一筆
- **THEN** 名詞含詞、別名、一句白話、給開發者的註解與相關詞
- **AND** 新的關站與名言分別出現在關站頁與名言頁，且不需要改程式碼

#### Scenario: 來源頁

- **WHEN** 訪客開啟 `/sources/`
- **THEN** 頁面列出由新聞 collection 與知識庫引用產生的參考來源

#### Scenario: 不即時抓新聞

- **WHEN** 網站建置或訪客瀏覽新聞牆
- **THEN** 新聞只來自已收錄的 `docs/news` 檔案，不會即時抓取外部網站
