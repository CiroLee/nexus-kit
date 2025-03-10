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
    theme: 'one-dark-pro',
  });

  return <div className={cn(className)} dangerouslySetInnerHTML={{ __html: out }} />;
}
