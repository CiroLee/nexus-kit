'use client';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { IconCopy, IconCheck } from '@tabler/icons-react';
import Button from '../ui/Button';
import Show from './Show';
export default function ClientCopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

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
    <Button size="sm" icon variant="ghost" className={cn('group', className)} onClick={handleCopy}>
      <Show if={!copied} else={<IconCheck size={18} className="opacity-50 group-hover:opacity-100" />}>
        <IconCopy size={18} className="opacity-50 group-hover:opacity-100" />
      </Show>
    </Button>
  );
}
