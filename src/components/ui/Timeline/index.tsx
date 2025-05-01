'use client';
import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

export function Timeline({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-node="timeline" className={className} {...props} />;
}

export function TimelineItem({ className, style, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setH(height);
    }
  }, []);

  return <div ref={ref} data-node="timeline-item" className={cn('group flex gap-3', className)} style={{ '--timeline-item-height': `${h}px`, ...style } as CSSProperties} {...props} />;
}

const timelineIndicator = cva(
  `relative rounded-full flex shrink-0 items-center justify-center before:absolute before:top-[calc(100%_+_4px)] before:w-px before:bg-line 
   before:h-[calc(var(--timeline-item-height)_-_var(--timeline-indicator-height)_-_8px)] before:-translate-x-1/2 before:left-1/2 group-last:before:w-0`,
  {
    variants: {
      styles: {
        none: '',
        solid: 'size-2 top-[calc(var(--timeline-indicator-height)/2)]',
      },
      colors: {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        danger: 'bg-danger',
        warning: 'bg-warning',
        neutral: 'bg-neutral-300 dark:bg-neutral-600',
      },
    },
    defaultVariants: {
      styles: 'solid',
      colors: 'primary',
    },
  },
);
type TimelineINdicatorVariants = VariantProps<typeof timelineIndicator>;
interface TimelineIndicatorProps extends React.HTMLAttributes<HTMLDivElement>, TimelineINdicatorVariants {}
export function TimelineIndicator({ className, colors, styles, style, ...props }: TimelineIndicatorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setH(height);
    }
  }, []);
  return (
    <div
      ref={ref}
      data-node="timeline-indicator"
      className={cn(timelineIndicator({ colors, styles, className }))}
      style={{ '--timeline-indicator-height': `${h}px`, ...style } as CSSProperties}
      {...props}
    />
  );
}

export function TimelineTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) {
  return <h3 data-node="timeline-title" className={cn('text-sm leading-[1em] font-semibold', className)} {...props} />;
}
export function TimelineContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-node="timeline-content" className={cn('flex flex-col gap-2 pb-6', className)} {...props} />;
}
