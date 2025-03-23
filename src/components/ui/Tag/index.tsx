import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
const tag = cva('h-6 inline-flex items-center px-2 text-sm rounded-sm', {
  variants: {
    colors: {
      primary: 'text-primary border-primary bg-blue-50 dark:border-blue-800 dark:text-foreground dark:bg-blue-950',
      success: 'text-success border-success bg-green-50 dark:border-green-800 dark:text-foreground dark:bg-green-950',
      warning: 'text-warning border-warning bg-orange-50 dark:border-yellow-800 dark:text-foreground dark:bg-yellow-950',
      danger: 'text-danger border-danger bg-red-50 dark:border-red-800 dark:text-foreground dark:bg-red-950',
      neutral: 'text-foreground border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800',
    },
    rounded: {
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
}
export default function Tag({ className, colors, bordered, rounded, children, ...props }: TagProps) {
  return (
    <span className={cn(tag({ colors, bordered, rounded, className }))} {...props}>
      {children}
    </span>
  );
}
