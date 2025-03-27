import { codeToHtml } from 'shiki';
import { cn } from '@/lib/utils';
import type { BundledLanguage } from 'shiki';
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

  return (
    <div className={cn('relative h-full overflow-auto bg-[#24292e] text-sm [&_pre]:h-full [&_pre]:p-3', className)}>
      <div dangerouslySetInnerHTML={{ __html: out }}></div>
    </div>
  );
}
