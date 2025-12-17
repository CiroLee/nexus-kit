'use client';
import { cn } from '@/lib/utils';
import { IconArrowBarBoth } from '@tabler/icons-react';
import { Panel, Group, Separator } from 'react-resizable-panels';
interface ResizeBoxProps {
  className?: string;
  children?: React.ReactNode;
}

function ResizeHandler() {
  return (
    <Separator className="relative flex-1!">
      <div className="transition-color top-1/2 flex h-full w-5 items-center justify-center bg-neutral-200 dark:bg-neutral-700">
        <IconArrowBarBoth size={14} className="text-neutral-500 dark:text-neutral-300" />
      </div>
    </Separator>
  );
}
export default function Resizable(props: ResizeBoxProps) {
  const { children, className } = props;
  return (
    <Group className={cn('relative', className)}>
      <Panel defaultSize="100%" minSize={320} className="h-full">
        {children}
      </Panel>
      <ResizeHandler />
      <Panel defaultSize={0} />
    </Group>
  );
}
