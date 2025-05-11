import Link from 'next/link';
import { cva } from 'class-variance-authority';
import TechnicalGuide, { type GuideItem } from '@/components/business/TechnicalGuide';
import Code from '@/components/business/Code';
import ClientCopyButton from '@/components/business/ClientCopyButton';
import OnThisPage from '@/components/business/OnThisPage';
import Heading from '@/components/ui/Heading';
import { cn } from '@/lib/utils';

const contentWrap = cva('border-line relative mt-2 overflow-auto rounded-md border bg-[#24292e]');
const clientCopyBtn = cva('dark:text-foreground text-neutral-300');

const dependInstall = 'npm install class-variance-authority clsx tailwind-merge @tabler/icons-react';
const aliasConfig = `{
  compilerOptions: {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`;

const cssConfig = `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

/* basic semantic colors base on tailwindcss colors */
:root {
  --background: #fff;
  --foreground: oklch(0.269 0 0);
  --line: oklch(0.922 0 0);
  --description: oklch(70.8% 0 0);
  /* semantic z-index */
  --loading: 60;
  --popup: 50;
  --tooltip: 40;
}

[data-theme='dark'] {
  --background: oklch(0.269 0 0);
  --foreground: #fafafa;
  --line: oklch(0.371 0 0);
  --description: oklch(55.6% 0 0);

}

@theme {
  --color-foreground: var(--foreground);
  --color-background: var(--background);
  --color-line: var(--line);
  --color-description: var(--description);

  --color-primary: var(--color-blue-500);
  --color-primary-active: var(--color-blue-600);
  --color-danger: var(--color-red-500);
  --color-danger-active: var(--color-red-600);
  --color-secondary: var(--color-green-500);
  --color-secondary-active: var(--color-green-600);
  --color-warning: var(--color-orange-500);
  --color-warning-active: var(--color-orange-600);
}

body {
  color: var(--foreground);
  background-color: var(--background);
}`;

const animationConfig = `@theme {
  --animate-fade-in: fade-in 0.15s ease-in;
  --animate-fade-out: fade-out 0.15s ease-out;

  --animate-slide-in-from-top: slide-in-from-top 0.2s linear;
  --animate-slide-out-to-top: slide-out-to-top 0.2s linear;
  --animate-slide-in-from-right: slide-in-from-right 0.2s linear;
  --animate-slide-out-to-right: slide-out-to-right 0.2s linear;
  --animate-slide-in-from-bottom: slide-in-from-bottom 0.2s linear;
  --animate-slide-out-to-bottom: slide-out-to-bottom 0.2s linear;
  --animate-slide-in-from-left: slide-in-from-left 0.2s linear;
  --animate-slide-out-to-left: slide-out-to-left 0.2s linear;

  --animate-zoom-fade-in: zoom-fade-in 0.15s ease-in;
  --animate-zoom-fade-out: zoom-fade-out 0.15s ease-out;

  --animate-accordion-slide-down: accordion-slide-down 0.2s ease-in;
  --animate-accordion-slide-up: accordion-slide-up 0.2s ease-out;
  --animate-collapsible-slide-down: collapsible-slide-down 0.2s ease-in;
  --animate-collapsible-slide-up: collapsible-slide-up 0.2s ease-out;

  --animate-flicker: flicker 2s infinite ease;
  --animate-shimmer: shimmer 2s infinite linear;

  /* fade animation */
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  /* slide animation */
  @keyframes slide-in-from-top {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out-to-top {
    to {
      transform: translateY(-100%);
    }
  }
  @keyframes slide-in-from-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slide-out-to-right {
    to {
      transform: translateX(100%);
    }
  }
  @keyframes slide-in-from-bottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out-to-bottom {
    to {
      transform: translateY(100%);
    }
  }
  @keyframes slide-in-from-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slide-out-to-left {
    to {
      transform: translateX(-100%);
    }
  }
  @keyframes zoom-fade-in {
    from {
      opacity: 0;
      transform: scale(0.94);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes zoom-fade-out {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.94);
    }
  }

  /* accordion keyframes */
  @keyframes accordion-slide-down {
    from {
      height: 0;
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    to {
      opacity: 1;
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes accordion-slide-up {
    from {
      opacity: 1;
      height: var(--radix-accordion-content-height);
    }
    90% {
      opacity: 0;
    }
    to {
      height: 0;
      opacity: 0;
    }
  }

  /* collapsible keyframes */
  @keyframes collapsible-slide-down {
    from {
      height: 0;
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    to {
      opacity: 1;
      height: var(--radix-collapsible-content-height);
    }
  }

  @keyframes collapsible-slide-up {
    from {
      opacity: 1;
      height: var(--radix-collapsible-content-height);
    }
    90% {
      opacity: 0;
    }
    to {
      height: 0;
      opacity: 0;
    }
  }

  @keyframes flicker {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  @keyframes shimmer {
    50% {
      opacity: 0.5;
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
      <div className={contentWrap({ className: 'w-2xl max-w-[82vw]' })}>
        <Code code={aliasConfig} lang="json" />
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
          <ClientCopyButton size="sm" text={cssConfig} asIcon className={cn(clientCopyBtn({ className: 'absolute top-9 right-2 z-1' }))} />
          <div className="border-line relative mt-2 h-fit max-h-80 overflow-auto rounded-md border bg-[#24292e]">
            <Code code={cssConfig} lang="css" />
          </div>
        </div>
        <div className="relative">
          <ClientCopyButton size="sm" text={animationConfig} asIcon className={cn(clientCopyBtn({ className: 'absolute top-14 right-2 z-1 sm:top-9' }))} />
          <p className="mt-4 text-sm">
            add <span className="italic">animation.css(optional)</span> if you use components such as Drawer, Dialog, Tooltip etc.
          </p>
          <div className="border-line relative mt-2 h-fit max-h-80 overflow-auto rounded-md border bg-[#24292e]">
            <Code code={animationConfig} lang="css" />
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
            <Code code={utils} lang="ts" />
          </div>
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
