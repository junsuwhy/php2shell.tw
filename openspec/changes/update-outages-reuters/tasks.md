# Tasks

## 1. 關站名單

- [x] 1.1 既有 11 筆（ITZBund、法國地方政府、比利時外交部、荷蘭 NCSC、Overheid.nl、鹿特丹港、KNVB、Valtori、維基媒體、網際網路檔案館、愛丁堡市議會）補上 Reuters 來源，不改 `php_confirmed` 與 action
- [x] 1.2 新增 Reuters 明確連到 PHP 或跟著荷蘭 NCSC 下線的 3 筆（荷蘭五大政黨、荷蘭醫院、Orange），`php_confirmed: true`
- [x] 1.3 新增 Reuters 沒提 PHP 的 10 筆（捷克政府、日本財務省、氣象廳、國稅廳、加拿大政府、野村、三菱 UFJ、全日空、JR 東日本、BBC 部分網頁入口），`php_confirmed: false`，action 寫明沒提到 PHP
- [x] 1.4 新條目放在同地區條目旁
- [x] 1.5 Valtori 維持 `php_confirmed: true`，action 補上路透社引述 Valtori 的說法：未發現任何利用嘗試，停機並非資料外洩所致
- [x] 1.6 網際網路檔案館維持 `php_confirmed: false`，action 補上路透引述其 X 貼文的說法：因緊急維護與安全修補下線，已恢復；並移除寫給編輯的提醒句「不要寫成已證實因 PHP 關閉。」

## 2. 驗證

- [x] 2.1 以 Node 24 執行 `npm run build` 驗證 schema 與來源檔名
- [x] 2.2 確認 `dist/news/outages/index.html` 出現新增的單位名稱
