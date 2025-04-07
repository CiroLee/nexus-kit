'use client';
import { cn } from '@/lib/utils';
import { IconArrowBarBoth } from '@tabler/icons-react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
interface ResizeBoxProps {
  className?: string;
  children?: React.ReactNode;
}

function ResizeHandler() {
  return (
    <PanelResizeHandle className="relative !flex-1">
      <div className="transition-color top-1/2 flex h-full w-5 items-center justify-center bg-neutral-200 dark:bg-neutral-700">
        <IconArrowBarBoth size={14} className="text-neutral-500 dark:text-neutral-300" />
      </div>
    </PanelResizeHandle>
  );
}
export default function Resizable(props: ResizeBoxProps) {
  const { children, className } = props;
  return (
    <PanelGroup direction="horizontal" className={cn('relative', className)}>
      <Panel defaultSize={100} className="h-full">
        {children}
      </Panel>
      <ResizeHandler />
      <Panel defaultSize={0} />
    </PanelGroup>
  );
}
