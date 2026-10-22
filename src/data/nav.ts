// 三區主選單。頁面不要各自手寫連結；目前頁面由 AreaNav 標 aria-current。
import type { PersonaId } from './personas';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export interface AreaNavData {
  id: PersonaId;
  /** 給 nav 的無障礙名稱，例如「非技術區」。 */
  label: string;
  items: NavItem[];
}

export function isGroup(item: NavItem): item is NavGroup {
  return 'children' in item;
}

/** 去掉片段識別，只留路徑（含結尾斜線）。 */
export function navPath(href: string) {
  return href.split('#')[0];
}

export function isCurrentPage(href: string, pathname: string) {
  return !href.includes('#') && navPath(href) === pathname;
}

export const areaNav: Record<PersonaId, AreaNavData> = {
  basic: {
    id: 'basic',
    label: '非技術區',
    items: [
      { label: '首頁', href: '/basic/' },
      { label: '先做什麼', href: '/basic/act/' },
      { label: '發生什麼事', href: '/basic/what-happened/' },
      { label: '檢查我的網站', href: '/basic/check/' },
      {
        label: '各系統',
        children: [
          { label: 'WordPress', href: '/basic/systems/wordpress/' },
          { label: 'Drupal', href: '/basic/systems/drupal/' },
          { label: 'Joomla', href: '/basic/systems/joomla/' },
          { label: 'cPanel', href: '/basic/systems/cpanel/' },
          { label: 'Plesk', href: '/basic/systems/plesk/' },
          { label: '購物平台', href: '/basic/systems/shop/' },
          { label: '外包廠商', href: '/basic/systems/outsourced/' },
        ],
      },
      { label: '常見問題', href: '/basic/faq/' },
    ],
  },
  dev: {
    id: 'dev',
    label: '開發者區',
    items: [
      { label: '首頁', href: '/dev/' },
      { label: '技術摘要', href: '/dev/overview/' },
      { label: '立刻做', href: '/dev/checklist/' },
      {
        label: '影響判斷',
        children: [
          { label: '是否受影響', href: '/dev/am-i-affected/' },
          { label: '版本矩陣', href: '/dev/versions/' },
          { label: '受影響 SAPI', href: '/dev/versions/#sapi' },
        ],
      },
      {
        label: '各平台修補',
        children: [
          { label: 'Debian', href: '/dev/fix/debian/' },
          { label: 'Ubuntu', href: '/dev/fix/ubuntu/' },
          { label: 'RHEL', href: '/dev/fix/rhel/' },
          { label: 'Alpine', href: '/dev/fix/alpine/' },
          { label: 'Windows', href: '/dev/fix/windows/' },
          { label: 'macOS', href: '/dev/fix/macos/' },
          { label: 'Docker', href: '/dev/fix/docker/' },
          { label: '控制台', href: '/dev/fix/panels/' },
          { label: '自行編譯', href: '/dev/fix/build-from-source/' },
        ],
      },
      {
        label: '各工具',
        children: [
          { label: 'Drupal', href: '/dev/fix/drupal/' },
          { label: 'WordPress', href: '/dev/fix/wordpress/' },
        ],
      },
      {
        label: '緩解與偵測',
        children: [
          { label: '暫時緩解', href: '/dev/mitigation/' },
          { label: '偵測與應變', href: '/dev/detect/' },
        ],
      },
      {
        label: '背景',
        children: [
          { label: '成因概念', href: '/dev/root-cause/' },
          { label: '舊版本策略 EOL', href: '/dev/eol/' },
          { label: '名詞表', href: '/dev/glossary/' },
        ],
      },
    ],
  },
  news: {
    id: 'news',
    label: '吃瓜區',
    items: [
      { label: '首頁', href: '/news/' },
      { label: '懶人包', href: '/news/brief/' },
      { label: '前因後果', href: '/news/story/' },
      { label: '時間軸', href: '/news/timeline/' },
      { label: '新聞牆', href: '/news/wall/' },
      { label: '關站名單', href: '/news/outages/' },
      { label: '名言錄', href: '/news/quotes/' },
      { label: '說法打架', href: '/news/rumors/' },
    ],
  },
};
