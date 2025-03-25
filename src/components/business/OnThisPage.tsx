'use client';
import { useIsClient } from 'usehooks-ts';
import { cn } from '@/lib/utils';

export interface AnchorItem {
  anchorId: string;
  label: string;
}
interface OnThisPageProps {
  list: AnchorItem[];
  className?: string;
}
export default function OnThisPage({ list, className }: OnThisPageProps) {
  const isClient = useIsClient();
  if (!isClient) return null;
  const docMainEl = document.querySelector('.doc-main');
  const handleScrollIntoView = (id: string) => {
    const el = document?.getElementById(id);
    if (el) {
      docMainEl?.scrollTo({
        top: el.offsetTop - 40,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className={cn('absolute right-0 hidden h-full w-80 md:block', className)}>
      <p className="pb-3 text-sm font-semibold">On This Page</p>
      {list.map((item) => (
        <li
          key={item.anchorId}
          className="hover:text-foreground block cursor-pointer py-1 text-sm text-neutral-500 transition-colors dark:text-neutral-300"
          onClick={() => handleScrollIntoView(item.anchorId)}>
          {item.label}
        </li>
      ))}
    </div>
  );
}
