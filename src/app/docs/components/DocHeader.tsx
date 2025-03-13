import Image from 'next/image';
import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';
import Button from '@/components/ui/Button';
import ThemeSwitch from '@/components/ThemeSwitch';
import Link from 'next/link';
export default function DocHeader() {
  return (
    <header className="bg-background/80 border-line fixed top-0 left-0 z-20 flex h-16 w-full items-center justify-between border-b px-4 backdrop-blur-sm">
      <div className="flex h-full items-center gap-1 text-lg font-semibold">
        <Image src="/images/logo.svg" width={64} height={64} className="size-6 object-scale-down" alt="logo" />
        Nexus Kit
      </div>
      <div className="flex h-full items-center gap-2">
        <ThemeSwitch />
        <Button variant="ghost" icon asChild>
          <Link href="https://github.com/CiroLee/nexus-kit" target="_blank">
            <IconBrandGithub size={22} />
          </Link>
        </Button>
        <Button asChild variant="ghost" icon>
          <Link href="https://x.com/threeLoolipop" target="_blank">
            <IconBrandX size={22} />
          </Link>
        </Button>
      </div>
    </header>
  );
}
