import '../brand.css';
import { IdentityGraph } from '../../components/identity-graph';
import type { Metadata } from 'next';
import { languageAlternates } from '../../lib/metadata';
import '../globals.css';
export const metadata: Metadata = {
  title: '阳光卫视 iSunTV | 人文・历史・纪录',
  description: '探索阳光卫视的人文、歷史與紀錄節目。',
  robots: { index: true, follow: true },
  icons: { icon: '/isuntv-logo.png' },
  alternates: languageAlternates('', 'zh-Hans'),
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans">
      <head>
      </head>
      <body>
        <IdentityGraph />
        {children}
      </body>
    </html>
  );
}
