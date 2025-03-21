'use client';
import Link from 'next/link';
import { useMobile } from '@/hooks';
import { useSidebar } from '@/contexts/doc-context';
import { usePathname } from 'next/navigation';
import { navConfig } from '@/app/docs/config';
import { cn } from '@/lib/utils';

const aside = cn(
  `bg-background absolute z-10 h-full w-full -translate-y-full overflow-auto px-3 py-5 opacity-0 transition-all duration-200 ease-linear sm:relative sm:w-[300px] sm:translate-y-0 sm:opacity-100`,
);
export default function SideNavBar() {
  const pathname = usePathname();
  const { isOpen, toggleSidebar } = useSidebar();
  const isMobile = useMobile();

  const handleCloseSidebar = () => {
    if (isMobile) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={cn(aside, {
        'translate-y-0 opacity-100': isOpen,
      })}>
      {navConfig.map((nav) => (
        <div key={nav.key}>
          <h4>{nav.title}</h4>
          <div>
            {nav.children
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <Link
                  className={cn('before:bg-line/80 relative flex items-center py-2 pl-3 text-sm before:absolute before:left-0 before:h-full before:w-0.5', {
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
