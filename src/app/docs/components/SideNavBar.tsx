'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navConfig } from '../config';
import { cn } from '@/lib/utils';
export default function SideNavBar() {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <aside className="h-full w-[300px] p-3">
      {navConfig.map((nav) => (
        <div key={nav.key}>
          <h4>{nav.title}</h4>
          <div>
            {nav.children.map((item) => (
              <Link
                className={cn('before:bg-line/80 relative flex items-center py-2 pl-3 text-sm before:absolute before:left-0 before:h-full before:w-0.5', {
                  'before:bg-primary text-primary font-semibold': pathname === item.href,
                })}
                key={item.href}
                href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
