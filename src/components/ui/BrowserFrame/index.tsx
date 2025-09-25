'use client';
import { cn } from '@/lib/utils';
type BrowserType = 'macOS' | 'windows';
interface BrowserFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  browserType: BrowserType;
  title?: string;
}

type IFrameCondition = { asIFrame?: false; url?: string } | { asIFrame: true; url: string };

export default function BrowserFrame({ className, browserType, asIFrame, url, title, children, ...props }: BrowserFrameProps & IFrameCondition) {
  return (
    <div className={cn('border-line flex flex-col rounded border', className)} {...props}>
      <header data-slot="frame-header" className={cn('border-line relative flex h-9 items-center border-b px-2', { 'justify-end': browserType === 'windows' })}>
        <BrowserFrameController browserType={browserType} />
        {url && !title ? (
          <a
            target="_blank"
            href={url}
            rel="noopener noreferrer"
            className="bg-neutral/50 hover:text-primary absolute left-1/2 max-w-50 -translate-x-1/2 truncate rounded-sm px-1.5 py-1 text-xs transition-colors">
            {url}
          </a>
        ) : (
          <span className="absolute left-1/2 max-w-50 -translate-x-1/2 truncate text-sm">{title}</span>
        )}
      </header>
      <main data-slot="frame-content" className="relative h-90">
        {asIFrame && url ? <iframe src={url} className="size-full border-none" /> : <>{children}</>}
      </main>
    </div>
  );
}

const browserControllerEnum = {
  macOS: <MacOSController />,
  windows: <WindowsController />,
};

function BrowserFrameController({ browserType }: { browserType: BrowserType }) {
  return <>{browserControllerEnum[browserType]}</>;
}

function WindowsController() {
  return (
    <ul className="flex items-center gap-2 text-neutral-300 dark:text-neutral-500">
      <li className="h-px w-3 bg-current"></li>
      <li className="size-3 border border-current"></li>
      <li className="relative size-3.5 before:absolute before:left-1/2 before:h-full before:w-px before:-translate-x-1/2 before:rotate-45 before:bg-current after:absolute after:left-1/2 after:h-full after:w-px after:-translate-x-1/2 after:-rotate-45 after:bg-current"></li>
    </ul>
  );
}

function MacOSController() {
  return (
    <ul className="flex items-center gap-2">
      <li className="size-3 rounded-full bg-red-500"></li>
      <li className="size-3 rounded-full bg-yellow-500"></li>
      <li className="size-3 rounded-full bg-green-500"></li>
    </ul>
  );
}
