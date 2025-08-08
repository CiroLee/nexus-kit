import NextLink from 'next/link';
import { cn } from '@/lib/utils';
import { IconComponents, IconMoonStars, IconBrandTailwind, IconBrush } from '@tabler/icons-react';
import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Header from '@/components/business/Header';
import LoginDemo from '@/components/demos/Login';
import { navConfig } from '@/app/docs/config';
import NotificationDemo from '@/components/demos/Notification';
import MiniMusicDemo from '@/components/demos/MiniMusic';
import UserDemo from '@/components/demos/User';

const componentsAmounts = navConfig?.filter((item) => item.category === 'components').reduce((prev, cur) => prev + (cur?.children?.length ?? 0), 0);

export default function Home() {
  return (
    <div className="relative px-4 sm:px-8">
      <Header showToggleSidebar={false} />
      <div className="relative mx-auto mt-25 w-[90vw] border border-dashed border-teal-400/50 p-5 sm:max-w-3xl dark:border-teal-500/50">
        <span className="absolute top-0 left-0 size-2.5 bg-teal-400 dark:bg-teal-500"></span>
        <span className="absolute top-0 right-0 size-2.5 bg-teal-400 dark:bg-teal-500"></span>
        <span className="absolute right-0 bottom-0 size-2.5 bg-teal-400 dark:bg-teal-500"></span>
        <span className="absolute bottom-0 left-0 size-2.5 bg-teal-400 dark:bg-teal-500"></span>
        <Heading as="h1" className="text-center sm:text-7xl">
          Nexus-Kit
        </Heading>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-200">
          A practical and beautiful component library, built based on{' '}
          <NextLink className="font-bold" href="https://www.radix-ui.com/">
            Radix-UI
          </NextLink>{' '}
          and{' '}
          <NextLink href="https://tailwindcss.com/" className="font-bold">
            TailwindCSS
          </NextLink>
          , just <span className="font-bold">Copy</span> codes and <span className="font-bold">Paste</span> to your project.
        </p>
      </div>
      <div className="relative mx-4 mt-8 flex sm:justify-center">
        <Button className="w-full sm:w-fit" asChild>
          <NextLink href="/docs">Get Started</NextLink>
        </Button>
        <Button className="ml-4 w-full sm:w-fit" variant="light" colors="neutral" asChild>
          <NextLink href="/blocks">View Blocks</NextLink>
        </Button>
      </div>
      <section>
        <Heading as="h2" className="mt-20 text-center">
          Get Started for Free
        </Heading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:mx-auto xl:max-w-7xl">
          <ShowCard
            icon={<IconComponents size={28} />}
            title={`${componentsAmounts}+ components`}
            description={`More than ${componentsAmounts} practical and beautiful components, they are FREE`}
            className="w-full"
          />
          <ShowCard icon={<IconMoonStars size={28} />} title="Dark Mode" description="All components support dark mode" className="w-full" />
          <ShowCard icon={<IconBrandTailwind size={28} />} title="Tailwindcss v4" description="support the latest tailwindcss v4" className="w-full" />
          <ShowCard icon={<IconBrush size={28} />} title="Themes" description="easy to customize themes just by css" className="w-full" />
        </ul>
      </section>
      <section className="my-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:mx-auto xl:max-w-7xl">
        <LoginDemo />
        <NotificationDemo />
        <MiniMusicDemo />
        <UserDemo />
      </section>
    </div>
  );
}

interface ShowCardProps {
  title: string;
  description?: string;
  icon: React.ReactNode;
  className?: string;
}
function ShowCard({ title, description, icon, className }: ShowCardProps) {
  return (
    <div className={cn('border-line flex shrink-0 overflow-hidden rounded-md border p-3', className)}>
      <span className="mt-1.5">{icon}</span>
      <div className="ml-3 flex-1">
        <Heading as="h4">{title}</Heading>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
