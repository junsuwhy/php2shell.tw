---
title: "各平台官方修補資訊"
audience: [developer]
updated_at: "2026-10-22"
sources:
  - https://security-tracker.debian.org/tracker/DSA-6574-1
  - https://security-tracker.debian.org/tracker/DLA-4848-1
  - https://ubuntu.com/security/notices/USN-8948-1
  - https://ubuntu.com/security/notices/USN-8948-2
  - https://ubuntu.com/blog/php2shell-vulnerability-fixes-available
  - https://access.redhat.com/security/cve/CVE-2026-109618
  - https://access.redhat.com/security/vulnerabilities/RHSB-2026-013
  - https://pkgs.alpinelinux.org/package/edge/community/x86_64/php85
  - https://pkgs.alpinelinux.org/package/edge/community/x86_64/php84
  - https://pkgs.alpinelinux.org/package/edge/community/x86_64/php83
  - https://hub.docker.com/v2/repositories/library/php/tags?name=8.5.12
  - https://hub.docker.com/v2/repositories/library/php/tags?name=8.4.27
  - https://hub.docker.com/v2/repositories/library/php/tags?name=8.3.36
  - https://hub.docker.com/v2/repositories/library/php/tags?name=8.2.35
  - https://windows.php.net/downloads/releases/
  - https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/p/php.rb
  - https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/p/php%408.4.rb
  - https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/p/php%408.3.rb
  - https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/p/php%408.2.rb
  - https://support.cpanel.net/hc/en-us/articles/44397389677335-Critical-PHP-Security-Release-CVE-2026-109618-and-CVE-2026-109619
  - https://support.plesk.com/hc/en-us/articles/44397729587351-Vulnerability-CVE-2026-109618-and-CVE-2026-109619-Remote-code-execution-in-PHP-shipped-with-Plesk
  - https://blog.cloudlinux.com/php-cve-2026-109618-and-cve-2026-109619/
  - https://www.drupal.org/psa-2026-10-20
  - https://wordpress.org/news/2026/10/critical-php-security-release/
  - https://developer.wordpress.org/cli/commands/cli/info/
---

查詢日期：2026-10-22。這一頁只記當時從官方頁讀到的修補版本與指令。官方沒寫的標成「未找到官方資訊」，不推測版號。檢查與升級指令只抄官方正文已經寫出的句子。

## Debian

來源：<https://security-tracker.debian.org/tracker/DSA-6574-1>、<https://security-tracker.debian.org/tracker/DLA-4848-1>。查詢日期 2026-10-22。

debian.org 的 DSA／DLA 公告郵件本次遇到驗證牆，沒有讀到「請升級某套件」那句正文，因此不自寫 `apt` 指令。

| 公告 | 套件 | 發行版 | 追蹤頁上的修補版 | 追蹤頁上仍列為有漏洞的版 |
| --- | --- | --- | --- | --- |
| DSA-6574-1 | php8.4 | trixie | trixie（security）8.4.27-1~deb13u1 | trixie 8.4.24-1~deb13u1 |
| DLA-4848-1 | php8.2 | bookworm | bookworm（security）8.2.35-1~deb12u1 | bookworm 8.2.32-1~deb12u1 |

php8.3 的 DSA：未找到官方資訊。

## Ubuntu

來源：<https://ubuntu.com/security/notices/USN-8948-1>、<https://ubuntu.com/security/notices/USN-8948-2>、<https://ubuntu.com/blog/php2shell-vulnerability-fixes-available>（Luci Stanescu，21 October 2026）。查詢日期 2026-10-22。

USN-8948-1 涵蓋 26.10、26.04 LTS、24.04 LTS、22.04 LTS，發布日期 21 October 2026。USN-8948-2 涵蓋 20.04 LTS、18.04 LTS、16.04 LTS、14.04 LTS，發布日期同日。兩份公告的共同句子是：一般來說，標準的系統更新就會帶入必要變更。

USN-8948-1 套件版（先前打開該公告時讀到，並與部落格的 Fixed in 欄對得上的列一併列出）：

| 發行版 | 套件 | 修補版 |
| --- | --- | --- |
| 26.10 | php8.5（含 libapache2-mod-php8.5、php8.5-cgi、php8.5-cli、php8.5-fpm） | 8.5.9-0ubuntu2.1 |
| 26.04 LTS | php8.5（同上四個套件名） | 8.5.4-0ubuntu1.5 |
| 24.04 LTS | php8.3（libapache2-mod-php8.3、php8.3-cgi、php8.3-cli、php8.3-fpm） | 8.3.6-0ubuntu0.24.04.13 |
| 22.04 LTS | php8.1（libapache2-mod-php8.1、php8.1-cgi、php8.1-cli、php8.1-fpm） | 8.1.2-1ubuntu2.28 |

USN-8948-2 本次打開的套件版：

| 發行版 | 套件 | 修補版 | 取得方式 |
| --- | --- | --- | --- |
| 20.04 LTS | libapache2-mod-php7.4、php7.4、php7.4-cgi、php7.4-cli、php7.4-fpm | 7.4.3-4ubuntu2.29+esm5 | Ubuntu Pro |
| 18.04 LTS | php7.2、php7.2-cgi、php7.2-cli、php7.2-fpm | 7.2.24-0ubuntu0.18.04.17+esm14 | Ubuntu Pro |
| 16.04 LTS | libapache2-mod-php7.0、php7.0、php7.0-cgi、php7.0-cli、php7.0-fpm | 7.0.33-0ubuntu0.16.04.16+esm22 | Ubuntu Pro 的 Legacy Support 附加元件 |
| 14.04 LTS | libapache2-mod-php5、php5、php5-cgi、php5-cli、php5-fpm | 5.5.9+dfsg-1ubuntu4.29+esm18 | Ubuntu Pro 的 Legacy Support 附加元件 |

部落格寫出的指令：

```
apt list '?installed ?name(^php[0-9.]+$)'
sudo apt update && sudo apt upgrade
sudo apt update && sudo apt install --only-upgrade '?name(^php[0-9.]+$)'
```

使用 mod_php 時，部落格寫完成後執行 `sudo systemctl restart apache2`，或 `sudo reboot`。

ondrej/php PPA：USN 與這篇部落格都沒有提到。未找到說明這兩個 CVE 的 PPA 文字公告，因此不列 PPA 套件版號。狀態：未找到官方資訊。

## RHEL、Rocky、Alma 與 Remi

來源：<https://access.redhat.com/security/cve/CVE-2026-109618>、<https://access.redhat.com/security/vulnerabilities/RHSB-2026-013>。查詢日期 2026-10-22。

RHSB-2026-013 標題為 “Request handling memory corruption - php”，公開時間 October 21, 2026, 13:38，更新 October 21, 2026, 23:04。直接受影響的產品包含 Red Hat Enterprise Linux 10 與 Red Hat Enterprise Linux 9。公報沒有列出 rpm 版號。

CVE 頁在查詢當下的 PHP 相關列（沒有 NEVRA，不補版號）：

| 產品 | 套件 | 狀態 | 勘誤 |
| --- | --- | --- | --- |
| Red Hat Enterprise Linux 10 | php | Fixed | RHSA-2026:87070，2026-10-21T20:11:09Z |
| Red Hat Enterprise Linux 10 | php8.4 | Fixed | RHSA-2026:87071，2026-10-21T20:10:03Z |
| Red Hat Enterprise Linux 9 | php:8.2 | Fixed | RHSA-2026:87072，2026-10-21T20:35:47Z |
| Red Hat Enterprise Linux 9 | php:8.3 | Fixed | RHSA-2026:87079，2026-10-21T20:36:00Z |
| Red Hat Enterprise Linux 9 | php | Fixed | RHSA-2026:87151，2026-10-21T20:06:07Z |
| Red Hat Enterprise Linux 8 | php:8.2 | Fixed | RHSA-2026:87073，2026-10-21T20:30:32Z |
| Red Hat Enterprise Linux 8 | php:7.4 | Fixed | RHSA-2026:87080，2026-10-21T15:53:19Z |
| Red Hat Enterprise Linux 9 | php:8.4/php | Affected | 未找到勘誤 |
| Red Hat Enterprise Linux 7 | php | Under investigation | 未找到勘誤 |
| Red Hat Enterprise Linux 6 | php | Under investigation | 未找到勘誤 |

CVE 頁沒有直接寫出 `dnf` 或 `yum`。不自寫安裝指令。

Rocky Linux、AlmaLinux：未找到對這兩個 CVE 的官方勘誤頁。

Remi：未找到事件之後的正式修補公告。2026-10-09 的 RC 測試庫文章不是這次正式修補，不採用其中的版號或測試庫指令。

## Alpine

來源與查詢日期 2026-10-22。以下都是 edge／community／x86_64 套件頁：

| 套件頁 | 版本 |
| --- | --- |
| php85 | 8.5.12-r0（build time 2026-10-21 18:17:49，頁面未標時區） |
| php84 | 8.4.27-r0 |
| php83 | 8.3.36-r0 |

edge／community／x86_64 的 php82 頁面為 404。其他分支、其他架構，以及 security.alpinelinux.org 的漏洞頁：未找到官方資訊。套件頁沒有 `apk` 指令，不自寫。

## 官方 Docker PHP 映像

來源：Docker Hub 官方庫 `library/php` 的標籤 API。查詢日期 2026-10-22。

以 8.5.12、8.4.27、8.3.36、8.2.35 為名查詢時，都已有正式 tag，變體包含 cli、apache、fpm、alpine、bookworm、trixie，以及對應的 ZTS。8.5.12 與 8.4.27 的查詢結果同時仍列出 RC1 tag；那不是這次的正式發行 tag。

抽查各版第一筆映像的 `last_pushed`：8.5.12 為 2026-10-21T23:26:35Z，8.4.27 為 2026-10-21T23:31:23Z，8.3.36 為 2026-10-21T23:28:51Z，8.2.35 為 2026-10-21T23:27:44Z。這不是每一個 tag 的推送時間。API 沒有升級指令，不自寫。

## Windows 官方 binary

來源：<https://windows.php.net/downloads/releases/>（本次被轉到 releases 目錄）。查詢日期 2026-10-22。目錄未標時區。

目錄中有 php-8.2.35（2026-10-21 13:47）、php-8.3.36（2026-10-21 13:49）、php-8.4.27（2026-10-21 13:48）、php-8.5.12（2026-10-21 13:48）的 zip。同一目錄還有 NTS、x86、x64 與 src。目錄本身沒有安裝指令。未找到官方資訊中的升級指令。

## Homebrew

來源：Homebrew homebrew-core 公式，查詢日期 2026-10-22。

| 公式 | 公式裡的上游 tarball |
| --- | --- |
| php | php-8.5.12.tar.xz |
| php@8.4 | php-8.4.27.tar.xz |
| php@8.3 | php-8.3.36.tar.xz |
| php@8.2 | php-8.2.35.tar.xz |

未找到針對這次漏洞的 Homebrew 公告。公式頁沒有檢查或升級指令，不自寫 `brew` 指令。

## cPanel EA-PHP

來源：<https://support.cpanel.net/hc/en-us/articles/44397389677335-Critical-PHP-Security-Release-CVE-2026-109618-and-CVE-2026-109619>。頁面時間 October 22, 2026 00:11，未標時區。查詢日期 2026-10-22。

cPanel EasyApache 4：ea-php74 7.4.33-19、ea-php80 8.0.30-12、ea-php81 8.1.34-5、ea-php82 8.2.35、ea-php83 8.3.36、ea-php84 8.4.27、ea-php85 8.5.12。

官方指令：

```
yum clean all && yum makecache
/scripts/rpmup
```

檢查例子（把 php81 換成要查的分支）：

```
rpm -q --changelog ea-php81-php-cli | grep -m1 CVE-2026-109618
```

7.4 以前，該頁指向 TuxCare Extended Lifecycle Support，沒有列出對應的 ea-php 修補版。

同一篇文章的 CloudLinux EasyApache 4 欄寫的是 ea-php52 5.2.17-27、ea-php53 5.3.29-29、ea-php54 5.4.45-82、ea-php55 5.5.38-64、ea-php56 5.6.40-25、ea-php70 7.0.33-29、ea-php71 7.1.33-20、ea-php72 7.2.34-12、ea-php73 7.3.33-15、ea-php74 7.4.33-18、ea-php80 8.0.30-11、ea-php81 8.1.34-4、ea-php82 8.2.34-2、ea-php83 8.3.35-2、ea-php84 8.4.26-2、ea-php85 8.5.11-2。這是 cPanel 頁面上的欄，CloudLinux 狀態頁本次沒有打開。

## Plesk

來源：<https://support.plesk.com/hc/en-us/articles/44397729587351-Vulnerability-CVE-2026-109618-and-CVE-2026-109619-Remote-code-execution-in-PHP-shipped-with-Plesk>。頁面時間 Updated October 22, 2026 02:11，未標時區。查詢日期 2026-10-22。

Linux 與 Windows 的 8.2 至 8.5：8.5.12、8.4.27、8.3.36、8.2.35。Linux 的 8.1.34、8.0.30、7.4.33 版號不變，2026-10-21 建置的才含修補。sw-engine：18.0.80 Update 11、18.0.81 Update 4。5.6、7.2、7.3 指向付費 TuxCare。

官方正文的處置句是更新到當時最新的 Plesk。檢查例子：

```
/opt/plesk/php/8.3/bin/php -v
```

示例輸出為 PHP 8.3.36，built: Oct 21 2026 08:04:57。文章連到的一般更新教學本次沒有打開，不另抄該頁指令。留言區指令不採用。

## CloudLinux alt-php

來源：<https://blog.cloudlinux.com/php-cve-2026-109618-and-cve-2026-109619/>。查詢日期 2026-10-22。

頁面標題已確認，正文沒有取回。alt-php 修補版號與 `yum`／`apt` 指令：未找到官方資訊。不把 cPanel 文章裡的 CloudLinux EasyApache 欄當成 CloudLinux 部落格的說法。

## Drupal

來源嘗試：<https://www.drupal.org/psa-2026-10-20>。查詢日期 2026-10-22。

該網址回的是用戶端驗證頁，沒有讀到 PSA 正文。修補後的 PHP 版號、drush 指令，以及狀態報告的官方句子：未找到官方資訊。不採用論壇上的 drush 範例。

## WordPress

來源：<https://wordpress.org/news/2026/10/critical-php-security-release/>（John Blackbourn，October 21, 2026）、<https://developer.wordpress.org/cli/commands/cli/info/>。查詢日期 2026-10-22。

官方查看路徑：Tools > Site Health > Info > Server。新聞稿沒有列出 8.5.12 等版號，也寫沒有、且不計劃發布 WordPress 更新。自行管理主機且 PHP 還在 8.2 以前時，新聞稿建議考慮先下線。

WP-CLI 官方文件的 `wp cli info` 會印出環境細節，文件範例含 PHP version 欄位。範例裡的版本是舊的，也含本機路徑，此處不照抄。新聞稿沒有寫 WP-CLI 指令。
