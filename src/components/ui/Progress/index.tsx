'use client';
import { Progress as ProgressPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const progress = cva('rounded-full bg-neutral overflow-hidden', {
  variants: {
    size: {
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-3.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const progressIndicator = cva('size-full rounded-full transition-transform', {
  variants: {
    colors: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      warning: 'bg-warning',
      danger: 'bg-danger',
      neutral: 'bg-neutral-400 dark:bg-neutral-500',
    },
    striped: {
      true: 'bg-[length:1.25rem_1.25rem] bg-[linear-gradient(45deg,rgba(0,0,0,.1)_25%,transparent_0,transparent_50%,rgba(0,0,0,.1)_0,rgba(0,0,0,.1)_75%,transparent_0,transparent)]',
    },
  },
  defaultVariants: {
    colors: 'primary',
  },
});
type ProgressVariants = VariantProps<typeof progress>;
type ProgressIndicatorVariants = VariantProps<typeof progressIndicator>;

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, ProgressVariants, ProgressIndicatorVariants {}
export default function Progress({ size, colors, value, max = 100, striped, className, style, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root value={value} max={max} className={cn(progress({ size, className }))} style={{ transform: 'translateZ(0)', ...style }} {...props}>
      <ProgressPrimitive.Indicator data-slot="progress-indicator" className={cn(progressIndicator({ colors, striped }))} style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
    </ProgressPrimitive.Root>
  );
}
