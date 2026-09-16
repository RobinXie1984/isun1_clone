import { playlists } from '../../../../lib/collection';
import { videoMetadata } from '../../../../lib/metadata';
import { Video } from '../../../video';
import { type Locale, locales } from '../../../../lib/catalogue';
import { notFound } from 'next/navigation';
export default async function Page({
  params,
}: {
  params: Promise<{ id: string; locale?: string }>;
}) {
  const p = await params;
  const locale = 'zh-Hans';
  if (!locales.includes(locale as Locale)) notFound();
  return <Video locale={locale as Locale} id={p.id} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale?: string }>;
}) {
  const p = await params;
  return videoMetadata('zh-Hans', p.id);
}

export function generateStaticParams() { return [...new Set(playlists.flatMap(p => p.entries.map(v => v.id)))].map(id => ({ id })); }
