'use client';
import { cn } from '@/lib/utils';
import { useCallback, useEffect, useState } from 'react';
import { codeToHtml, type BundledLanguage } from 'shiki';

interface Props {
  code: string;
  lang?: BundledLanguage;
  className?: string;
}

export default function ClientCode({ code, lang = 'tsx', className }: Props) {
  const [out, setOut] = useState('');

  const getCode = useCallback(
    async (code: string) => {
      const out = await codeToHtml(code, {
        lang,
        theme: 'github-dark',
      });
      setOut(out);
    },
    [lang],
  );
  useEffect(() => {
    getCode(code);
  }, [code, getCode]);
  return (
    <div className={cn('relative h-full overflow-auto bg-[#24292e] text-sm [&_pre]:h-full [&_pre]:p-3', className)}>
      <div dangerouslySetInnerHTML={{ __html: out }}></div>
    </div>
  );
}
