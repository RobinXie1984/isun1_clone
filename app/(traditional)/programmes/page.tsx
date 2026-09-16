import { Catalogue } from '../../catalogue';
import { languageAlternates } from '../../../lib/metadata';
export const metadata = {
  title: '经典节目 | iSunTV',
  alternates: languageAlternates('programmes', 'zh-Hans'),
};
export default function Page() {
  return <Catalogue locale="zh-Hans" />;
}
