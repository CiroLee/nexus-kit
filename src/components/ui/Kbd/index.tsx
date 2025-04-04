'use client';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

export type KbdKey =
  | 'command'
  | 'shift'
  | 'ctrl'
  | 'option'
  | 'enter'
  | 'delete'
  | 'escape'
  | 'tab'
  | 'capslock'
  | 'up'
  | 'right'
  | 'down'
  | 'left'
  | 'pageup'
  | 'pagedown'
  | 'home'
  | 'end'
  | 'help'
  | 'space';

const kbdKeyMap: Record<KbdKey, string> = {
  command: '⌘',
  shift: '⇧',
  ctrl: '⌃',
  option: '⌥',
  enter: '⏎',
  delete: '⌦',
  escape: '⎋',
  tab: '⇥',
  capslock: '⇪',
  up: '↑',
  right: '→',
  down: '↓',
  left: '←',
  pageup: '⇞',
  pagedown: '⇟',
  home: '⇱',
  end: '⇲',
  help: '?',
  space: '␣',
};

const kbd = cva('inline-flex gap-1.5 items-center bg-background relative border border-line rounded inset-shadow-[0_-1px_0] inset-shadow-line', {
  variants: {
    size: {
      sm: 'text-xs h-5 px-1',
      md: 'text-xs h-6 px-1.5',
      lg: 'text-sm h-7 px-1.5 inset-shadow-[0_-2px_0]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
type KbdVariants = VariantProps<typeof kbd>;
interface KbdProps extends React.HTMLAttributes<HTMLDivElement>, KbdVariants {
  keys?: KbdKey[];
}
export default function Kbd({ keys, size, className, children, ...props }: KbdProps) {
  return (
    <div role="kbd" className={cn(kbd({ size, className }))} {...props}>
      {keys?.map((k, i) => <span key={i}>{kbdKeyMap[k] || k}</span>)}
      {children ? <span>{children}</span> : null}
    </div>
  );
}
