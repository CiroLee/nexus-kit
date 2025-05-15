'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
const tag = cva('min-h-6 inline-flex items-center px-2 text-sm rounded-sm outline-none focus-visible:ring-3', {
  variants: {
    colors: {
      primary: 'text-primary border-primary bg-blue-100 dark:border-blue-700 dark:text-foreground dark:bg-blue-900 ring-primary/20',
      secondary: 'text-secondary border-secondary bg-green-100 dark:border-green-700 dark:text-foreground dark:bg-green-900 ring-secondary/20',
      warning: 'text-warning border-warning bg-orange-100 dark:border-yellow-700 dark:text-foreground dark:bg-yellow-900 ring-warning/20',
      danger: 'text-danger border-danger bg-red-100 dark:border-red-700 dark:text-foreground dark:bg-red-900 ring-danger/20',
      neutral: 'text-foreground border-neutral-200 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-700 ring-neutral-300/40 dark:ring-neutral-700/60',
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
  ref?: React.Ref<HTMLSpanElement>;
}
export default function Tag({ className, colors, bordered, pill, children, ref, ...props }: TagProps) {
  return (
    <span ref={ref} tabIndex={0} className={cn(tag({ colors, bordered, pill, className }))} {...props}>
      {children}
    </span>
  );
}
