'use client';
import { useCallback } from 'react';
import Link from 'next/link';
import { useMobile } from '@/hooks';
import { useSidebar } from '@/contexts/doc-context';
import { usePathname } from 'next/navigation';
import { navConfig } from '@/app/docs/config';
import { cn } from '@/lib/utils';

const aside = cn(`bg-background absolute z-10 h-full w-full overflow-auto px-3 py-5 sm:relative sm:w-[300px] sm:translate-y-0 sm:opacity-100`);
export default function SideNavBar() {
  const pathname = usePathname();
  const { isOpen, toggleSidebar } = useSidebar();
  const isMobile = useMobile();

  const handleCloseSidebar = useCallback(() => {
    if (isMobile) {
      toggleSidebar();
    }
  }, [isMobile, toggleSidebar]);

  return (
    <aside
      className={cn(aside, {
        'translate-y-0': isOpen,
        '-translate-y-full': !isOpen,
      })}>
      {navConfig.map((nav) => (
        <div key={nav.key} className="not-last:mb-4">
          {nav.href ? (
            <Link href={nav.href}>
              <h4>{nav.title}</h4>
            </Link>
          ) : (
            <h4>{nav.title}</h4>
          )}
          <div className="before:bg-line/80 relative h-fit space-y-1 before:absolute before:left-0 before:h-full before:w-0.5">
            {nav.children
              ?.sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <Link
                  className={cn('hover:before:bg-primary relative flex items-center rounded p-2 text-sm transition before:absolute before:left-0 before:h-full before:w-0.5', {
                    'before:bg-primary text-primary font-semibold': pathname === item.href,
                  })}
                  key={item.href}
                  href={item.href}
                  onClick={handleCloseSidebar}>
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
