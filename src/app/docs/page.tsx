import Link from 'next/link';
import { cva } from 'class-variance-authority';
import TechnicalGuide, { type GuideItem } from '@/components/business/TechnicalGuide';
import CodeBox from '@/components/business/CodeBox';
import ClientCopyButton from '@/components/business/ClientCopyButton';
import OnThisPage from '@/components/business/OnThisPage';
import Heading from '@/components/ui/Heading';
import { cn } from '@/lib/utils';
import { getSourceCode } from '../api/github';
import { removeLastEmptyLine } from '@/utils/utils';

const contentWrap = cva('border-line relative mt-2 overflow-auto rounded-md border bg-[#24292e]');
const clientCopyBtn = cva('dark:text-foreground text-neutral-300');

const cssConfig = await getSourceCode('styles/theme.css');
const animationConfig = await getSourceCode('styles/animation.css');

const dependInstall = 'npm install radix-ui class-variance-authority clsx tailwind-merge @tabler/icons-react';
const aliasConfig = `{
  compilerOptions: {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`;

const utils = `import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';
export function cn(...classnames: ClassValue[]): string {
  return twMerge(clsx(classnames));
}`;

const guides: GuideItem[] = [
  {
    id: 'add-tailwindcss-v4',
    title: 'Install Tailwindcss v4',
    description: (
      <div className="space-y-4">
        <p>All components are based on tailwindcss v4, you need install it first</p>
        <Link className="underline" href="https://tailwindcss.com/docs/installation/using-vite" target="_blank">
          Follow the installation of Tailwindcss
        </Link>
      </div>
    ),
  },
  {
    id: 'Install-dependencies',
    title: 'install dependencies',
    description: 'Add the following necessary dependencies',
    content: (
      <div className="relative w-2xl max-w-[82vw]">
        <ClientCopyButton size="sm" text={dependInstall} asIcon className={cn(clientCopyBtn({ className: 'absolute top-1/2 right-2 z-1 -translate-y-1/2' }))} />
        <div className={contentWrap()}>
          <CodeBox code={dependInstall} lang="bash" />
        </div>
      </div>
    ),
  },
  {
    id: 'configure-alias',
    title: 'Configure alias',
    description: 'add path alias in tsconfig.json',
    content: (
      <div className={contentWrap({ className: 'w-2xl max-w-[82vw]' })}>
        <CodeBox code={aliasConfig} lang="json" />
      </div>
    ),
  },
  {
    id: 'configure-styles',
    title: 'Configure styles',
    description: 'styles are based on tailwindcss, no other style plugins are required. Add the following css in the root css file',
    content: (
      <div className="relative w-2xl max-w-[82vw]">
        <div className="relative">
          <p className="mt-2 text-sm">
            e.g <span className="italic">src/index.css</span>
          </p>
          <ClientCopyButton size="sm" text={removeLastEmptyLine(cssConfig)} asIcon className={cn(clientCopyBtn({ className: 'absolute top-9 right-2 z-1' }))} />
          <div className="border-line relative mt-2 h-fit max-h-80 overflow-auto rounded-md border bg-[#24292e]">
            <CodeBox code={removeLastEmptyLine(cssConfig)} lang="css" />
          </div>
        </div>
        <div className="relative">
          <ClientCopyButton size="sm" text={removeLastEmptyLine(animationConfig)} asIcon className={cn(clientCopyBtn({ className: 'absolute top-14 right-2 z-1 sm:top-9' }))} />
          <p className="mt-4 text-sm">
            add <span className="italic">animation.css(optional)</span> if you use components such as Drawer, Dialog, Tooltip etc.
          </p>
          <div className="border-line relative mt-2 h-fit max-h-80 overflow-auto rounded-md border bg-[#24292e]">
            <CodeBox code={removeLastEmptyLine(animationConfig)} lang="css" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'add-utils',
    description: 'Add the necessary utils functions',
    content: (
      <div className="relative w-2xl max-w-[82vw]">
        <p className="mt-2 text-sm">
          <span className="italic">src/lib/utils.ts</span>
        </p>
        <div className="rounded-md bg-[#24292e]">
          <ClientCopyButton size="sm" text={utils} asIcon className="absolute top-9 right-2 z-1" />
          <div className="border-line relative mt-2 h-fit max-h-80 overflow-auto rounded-[inherit] border">
            <CodeBox code={utils} lang="ts" />
          </div>
        </div>
      </div>
    ),
  },
];

export default function Page() {
  return (
    <div className="flex">
      <div className="main-container">
        <Heading as="h1" className="mb-8">
          Installation
        </Heading>
        <TechnicalGuide guides={guides} />
      </div>
      <OnThisPage list={guides.map((item) => ({ anchorId: item.id, label: item.title as string }))} />
    </div>
  );
}
