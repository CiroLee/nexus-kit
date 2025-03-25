'use client';
import { useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { IconCopy, IconCheck } from '@tabler/icons-react';
import Button from '../ui/Button';
import Show from './Show';

interface ClientCopyButtonProps {
  text: string;
  className?: string;
  asIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
export default function ClientCopyButton({ text, size, asIcon, className }: ClientCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(null);
  const iconSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return 18;
      case 'md':
        return 20;
      case 'lg':
        return 22;
      default:
        return 20;
    }
  }, [size]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <Button variant="bordered" colors="neutral" size={size} icon={asIcon} className={cn('group', className)} onClick={handleCopy}>
      <Show
        if={!copied}
        else={
          <div className="flex items-center gap-1">
            <IconCheck size={iconSize} className="group" />
            {asIcon ? null : ' Copied'}
          </div>
        }>
        <div className="flex items-center gap-1">
          <IconCopy size={18} className="text-white opacity-50 group-hover:opacity-100" />
          {asIcon ? null : ' Copy'}
        </div>
      </Show>
    </Button>
  );
}
