const code = `'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
const badge = cva('rounded-full text-white p-0.5 box-border absolute flex items-center justify-center border-2 border-background whitespace-nowrap bg-red-500', {
  variants: {
    size: {
      sm: 'text-xs min-w-4 h-4',
      md: ' text-sm min-w-5 h-5',
      lg: 'text-base min-w-5.5 h-5.5',
    },
    placement: {
      'top-left': 'top-[10%] left-[10%] -translate-x-1/2 -translate-y-1/2',
      'top-right': 'top-[10%] right-[10%] translate-x-1/2 -translate-y-1/2',
      'bottom-left': 'bottom-[10%] left-[10%] -translate-x-1/2 translate-y-1/2',
      'bottom-right': 'bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2',
    },
    asDot: {
      true: 'min-w-[unset]',
    },
  },
  compoundVariants: [
    {
      asDot: true,
      size: 'sm',
      className: 'w-2.5 h-2.5',
    },
    {
      asDot: true,
      size: 'md',
      className: 'w-3.5 h-3.5',
    },
    {
      asDot: true,
      size: 'lg',
      className: 'w-4 h-4',
    },
  ],
  defaultVariants: {
    size: 'md',
    placement: 'top-right',
  },
});

type BadgeVariants = VariantProps<typeof badge>;
interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'content'>, BadgeVariants {
  content?: React.ReactNode;
  ref?: React.Ref<HTMLSpanElement>;
}
export default function Badge({ className, asDot, placement, content, children, size, ref, ...props }: BadgeProps) {
  return (
    <div className="relative inline-flex shrink-0">
      {children}
      <span ref={ref} className={cn(badge({ size, placement, asDot, className }))} {...props}>
        {asDot ? null : content}
      </span>
    </div>
  );
}`;

export default code;
