import Link from 'next/link';
import { cva } from 'class-variance-authority';
import TechnicalGuide, { type GuideItem } from '@/components/business/TechnicalGuide';
import Code from '@/components/business/Code';
import ClientCopyButton from '@/components/business/ClientCopyButton';
import OnThisPage from '@/components/business/OnThisPage';
import Heading from '@/components/ui/Heading';

const contentWrap = cva('border-line relative mt-2 w-[82vw] overflow-auto rounded-md border sm:w-2xl');

const dependInstall = 'npm install class-variance-authority clsx tailwind-merge @tabler/icons-react';
const aliasConfig = `{
  compilerOptions: {
  "paths": {
        "@/*": ["./src/*"]
      }
  }
}`;

const cssConfig = `/* basic semantic colors  base on tailwindcss colors */
:root {
  --background: #fff;
  --foreground: oklch(0.269 0 0);
  --line: oklch(0.922 0 0);
}

[data-theme='dark'] {
  --background: oklch(0.269 0 0);
  --foreground: #fafafa;
  --line: oklch(0.371 0 0);
}

@theme {
  --color-foreground: var(--foreground);
  --color-background: var(--background);
  --color-line: var(--line);

  --color-primary: var(--color-blue-500);
  --color-primary-active: var(--color-blue-600);
  --color-danger: var(--color-red-500);
  --color-danger-active: var(--color-red-600);
  --color-success: var(--color-green-500);
  --color-success-active: var(--color-green-600);
  --color-warning: var(--color-orange-500);
  --color-warning-active: var(--color-orange-600);
}

body {
  color: var(--foreground);
  background-color: var(--background);
}
`;

const utils = `import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';
export function cn(...classnames: ClassValue[]): string {
  return twMerge(clsx(classnames));
}
`;

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
    id: 'install-dependencies',
    title: 'install dependencies',
    description: 'Add the following necessary dependencies',
    content: (
      <div className="relative">
        <ClientCopyButton size="sm" text={dependInstall} asIcon className="absolute top-1/2 right-1 z-10 -translate-y-1/2" />
        <div className={contentWrap()}>
          <Code code={dependInstall} lang="bash" />
        </div>
      </div>
    ),
  },
  {
    id: 'configure-alias',
    title: 'Configure alias',
    description: 'add path alias in tsconfig.json',
    content: (
      <div className={contentWrap()}>
        <Code code={aliasConfig} lang="json" />
      </div>
    ),
  },
  {
    id: 'configure-styles',
    title: 'Configure styles',
    description: 'styles are based on tailwindcss, no other style plugins are required. Add the following css in the root css file',
    content: (
      <div className="relative w-[82vw] sm:w-2xl">
        <p className="mt-2 text-sm">
          e.g <span className="italic">src/index.css</span>
        </p>
        <ClientCopyButton size="sm" text={cssConfig} asIcon className="absolute top-8.5 right-1 z-10" />
        <div className="border-line relative mt-2 h-fit max-h-80 overflow-auto rounded-md border">
          <Code code={cssConfig} lang="css" />
        </div>
      </div>
    ),
  },
  {
    id: 'add-utils',
    description: 'add the necessary utils functions',
    content: (
      <div className="relative w-[82vw] sm:w-2xl">
        <p className="mt-2 text-sm">
          <span className="italic">src/lib/utils.ts</span>
        </p>
        <ClientCopyButton size="sm" text={utils} asIcon className="absolute top-8.5 right-1 z-10" />
        <div className="border-line relative mt-2 h-fit max-h-80 overflow-auto rounded-md border">
          <Code code={utils} lang="ts" />
        </div>
      </div>
    ),
  },
];
export default function Page() {
  return (
    <div className="flex">
      <div className="sm:mr-90">
        <Heading as="h1" className="mb-8">
          Installation
        </Heading>
        <TechnicalGuide className="max-w-[90vw]" guides={guides} />
      </div>
      <OnThisPage list={guides.map((item) => ({ anchorId: item.id, label: item.title as string }))} />
    </div>
  );
}
