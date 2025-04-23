import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const skeleton = cva('relative', {
  variants: {
    variant: {
      flicker: `bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_20%,rgba(0,0,0,0.1)_40%,rgba(0,0,0,0.05)_60%)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_20%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0.05)_60%)] 
      animate-flicker bg-[size:400%_100%]`,
      shimmer: 'dark:bg-white/10 bg-black/10 animate-shimmer',
    },
  },
  defaultVariants: {
    variant: 'flicker',
  },
});

type SkeletonVariants = VariantProps<typeof skeleton>;
interface SkeletonProps extends React.ComponentPropsWithRef<'div'>, SkeletonVariants {}

export function SkeletonBlock({ className, variant, ...props }: SkeletonProps) {
  return <div className={cn('h-20 rounded', skeleton({ variant, className }))} {...props}></div>;
}

export function SkeletonText({ className, variant, ...props }: SkeletonProps) {
  return <div className={cn('h-4 rounded', skeleton({ variant, className }))} {...props}></div>;
}

export function SkeletonCircle({ className, variant, ...props }: SkeletonProps) {
  return <div className={cn('size-10 rounded-full', skeleton({ variant, className }))} {...props}></div>;
}
