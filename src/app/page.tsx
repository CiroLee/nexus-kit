import { cn } from '@/lib/utils';
import { IconComponents, IconMoonStars } from '@tabler/icons-react';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Header from '@/components/business/Header';
import Link from 'next/link';
import { navConfig } from '@/app/docs/config';
const componentsAmounts = navConfig[0].children.length;

export default function Home() {
  return (
    <div className="relative px-4 sm:px-8">
      <Header showToggleSidebar={false} />
      <div className="relative mx-auto mt-25 w-[90vw] border border-teal-400/50 p-5 sm:max-w-3xl dark:border-teal-500/50">
        <span className="absolute top-0 left-0 size-2.5 bg-teal-400 dark:bg-teal-500"></span>
        <span className="absolute top-0 right-0 size-2.5 bg-teal-400 dark:bg-teal-500"></span>
        <span className="absolute right-0 bottom-0 size-2.5 bg-teal-400 dark:bg-teal-500"></span>
        <span className="absolute bottom-0 left-0 size-2.5 bg-teal-400 dark:bg-teal-500"></span>
        <Heading as="h1" className="sm:text-7xl">
          Nexus-Kit
        </Heading>
        <p className="mt-4 text-gray-600 dark:text-gray-200">A practical and beautiful component library, built based on radix-ui and tailwind css v4, just copy and paste</p>
      </div>
      <div className="relative mx-4 mt-8 flex sm:justify-center">
        <Button className="w-full sm:w-fit" asChild>
          <Link href="/docs">Get Started</Link>
        </Button>
      </div>
      <section>
        <Heading as="h3" className="mt-10 text-center">
          Get Started for Free
        </Heading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:mx-auto xl:max-w-7xl xl:grid-cols-4">
          <ShowCard
            icon={<IconComponents size={28} />}
            title={`${componentsAmounts}+ Free components`}
            description={`more than ${componentsAmounts} practical and beautiful components, they are FREE`}
            className="w-full"
          />
          <ShowCard icon={<IconMoonStars size={28} />} title="Dark Mode" description="all components support dark mode" className="w-full" />
        </ul>
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
