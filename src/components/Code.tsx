import type { BundledLanguage } from 'shiki';
import { codeToHtml } from 'shiki';
import { cn } from '@/lib/utils';
interface Props {
  code: string;
  lang?: BundledLanguage;
  className?: string;
}

export default async function Code({ code, lang = 'tsx', className }: Props) {
  const out = await codeToHtml(code, {
    lang,
    theme: 'github-dark',
  });

  return <div className={cn('relative h-full min-w-fit overflow-auto text-sm [&_pre]:h-full [&_pre]:p-3', className)} dangerouslySetInnerHTML={{ __html: out }}></div>;
}
