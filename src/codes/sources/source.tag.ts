const code = `'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
const tag = cva('h-6 inline-flex items-center px-2 text-sm rounded-sm outline-none focus-visible:ring-3', {
  variants: {
    colors: {
      primary: 'text-primary border-primary bg-blue-50 dark:border-blue-800 dark:text-foreground dark:bg-blue-950 ring-primary/20',
      secondary: 'text-secondary border-secondary bg-green-50 dark:border-green-800 dark:text-foreground dark:bg-green-950 ring-secondary/20',
      warning: 'text-warning border-warning bg-orange-50 dark:border-yellow-800 dark:text-foreground dark:bg-yellow-950 ring-warning/20',
      danger: 'text-danger border-danger bg-red-50 dark:border-red-800 dark:text-foreground dark:bg-red-950 ring-danger/20',
      neutral: 'text-foreground border-neutral-300 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-700 ring-neutral-300/40 dark:ring-neutral-700/60',
    },
    pill: {
      true: 'rounded-full',
    },
    bordered: {
      true: 'border',
    },
  },
  defaultVariants: {
    colors: 'primary',
  },
});

type TagVariants = VariantProps<typeof tag>;
interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, TagVariants {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLSpanElement>;
}
export default function Tag({ className, colors, bordered, pill, children, ref, ...props }: TagProps) {
  return (
    <span ref={ref} tabIndex={0} className={cn(tag({ colors, bordered, pill, className }))} {...props}>
      {children}
    </span>
  );
}
`;
export default code;
