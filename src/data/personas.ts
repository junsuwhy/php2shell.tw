// 三種身份＝三條路線。名稱、路線色與入口集中在這裡，首頁、轉乘選單、404 共用。
export type PersonaId = 'basic' | 'dev' | 'news';

export interface Persona {
  id: PersonaId;
  exit: number;
  line: string;
  name: string;
  gets: string;
  toward: string;
  href: string;
  image: string;
}

export const personas: Persona[] = [
  {
    id: 'basic',
    exit: 1,
    line: '黃線',
    name: '非技術人員',
    gets: '確認網站有沒有事、該找誰、要確認什麼。',
    toward: 'WordPress・Drupal・cPanel・外包廠商',
    href: '/basic/',
    image: 'exit-basic',
  },
  {
    id: 'dev',
    exit: 2,
    line: '綠線',
    name: '軟體開發人員',
    gets: '各平台的修補、緩解與偵測步驟。',
    toward: 'Debian・Ubuntu・RHEL・Windows・Docker',
    href: '/dev/',
    image: 'exit-dev',
  },
  {
    id: 'news',
    exit: 3,
    line: '粉紅線',
    name: '吃瓜群眾',
    gets: '前因後果、時間軸、新聞牆。',
    toward: 'AI 找漏洞・消息外洩・全球關站',
    href: '/news/',
    image: 'exit-news',
  },
];
