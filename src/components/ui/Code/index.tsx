'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const code = cva('rounded px-1 inline-flex items-center bg-neutral', {
  variants: {
    size: {
      sm: 'text-xs h-5',
      md: 'text-sm h-6',
      lg: 'text-base px-1.5 h-7 rounded-md',
    },
    bordered: {
      true: 'border border-line dark:border-neutral-600',
    },
  },
  defaultVariants: {
    size: 'sm',
    bordered: false,
  },
});

type CodeVariants = VariantProps<typeof code>;
interface CodeProps extends React.HTMLAttributes<HTMLElement>, CodeVariants {
  ref?: React.Ref<HTMLElement>;
}
export default function Code({ className, bordered, size, ...props }: CodeProps) {
  return <code className={cn(code({ size, bordered, className }))} {...props} />;
}
