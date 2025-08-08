'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';
import { Button } from '@/components/ui/Button';
import ThemeSwitch from '@/components/business/ThemeSwitch';
import ToggleSidebarButton from './ToggleSidebarButton';
import Show from './Show';
import GlobalSearch from './GlobalSearch';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks';

export default function DocHeader({ showToggleSidebar }: { showToggleSidebar?: boolean }) {
  const pathname = usePathname();
  const isMobile = useMobile();

  return (
    <header className="bg-background/80 border-line fixed top-0 left-0 z-30 flex h-16 w-full items-center justify-between border-b px-4 backdrop-blur-sm">
      <Link href="/" className="flex h-full shrink-0 items-center gap-1.5 text-lg font-semibold">
        <Image src="/images/logo.svg" width={64} height={64} className="size-6 object-scale-down" alt="logo" />
        Nexus Kit
      </Link>
      <div className="flex h-full items-center gap-2">
        <Show when={!isMobile}>
          <GlobalSearch />
        </Show>
        <Link href="/docs" className={cn('hover:text-primary block text-sm transition-colors', { hidden: pathname === '/' || pathname.startsWith('/docs') })}>
          Documents
        </Link>
        <Button variant="light" size="sm" colors="neutral" name="github" asIcon asChild>
          <Link href="https://github.com/CiroLee/nexus-kit" target="_blank">
            <IconBrandGithub size={20} />
          </Link>
        </Button>
        <Button variant="light" size="sm" name="twitter" asChild colors="neutral" asIcon>
          <Link href="https://x.com/threeLollipop" target="_blank">
            <IconBrandX size={20} />
          </Link>
        </Button>
        <ThemeSwitch />
        <Show when={showToggleSidebar}>
          <ToggleSidebarButton className="sm:hidden" />
        </Show>
      </div>
    </header>
  );
}
