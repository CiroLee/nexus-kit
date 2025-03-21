import Image from 'next/image';
import Link from 'next/link';
import { useSidebar } from '@/contexts/doc-context';
import { IconBrandGithub, IconBrandX, IconMenu } from '@tabler/icons-react';
import Button from '@/components/ui/Button';
import ThemeSwitch from '@/components/business/ThemeSwitch';

export default function DocHeader() {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="bg-background/80 border-line fixed top-0 left-0 z-20 flex h-16 w-full items-center justify-between border-b px-4 backdrop-blur-sm">
      <Link href="/" className="flex h-full items-center gap-1.5 text-lg font-semibold">
        <Image src="/images/logo.svg" width={64} height={64} className="size-5 object-scale-down" alt="logo" />
        Nexus Kit
      </Link>
      <div className="flex h-full items-center gap-2">
        <Button variant="light" colors="neutral" icon asChild>
          <Link href="https://github.com/CiroLee/nexus-kit" target="_blank">
            <IconBrandGithub size={22} />
          </Link>
        </Button>
        <Button variant="light" asChild colors="neutral" icon>
          <Link href="https://x.com/threeLoolipop" target="_blank">
            <IconBrandX size={22} />
          </Link>
        </Button>
        <ThemeSwitch />
        <Button variant="light" colors="neutral" icon onClick={toggleSidebar}>
          <IconMenu size={22} />
        </Button>
      </div>
    </header>
  );
}
