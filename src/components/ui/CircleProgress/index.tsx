'use client';
import { useCallback } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const circleProgress = cva('relative inline-block overflow-hidden', {
  variants: {
    size: {
      sm: 'size-8',
      md: 'size-14',
      lg: 'size-20',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type CircleProgressVariants = VariantProps<typeof circleProgress>;

const indicator = cva('transition-all ease-linear', {
  variants: {
    colors: {
      primary: 'stroke-primary',
      secondary: 'stroke-secondary',
      warning: 'stroke-warning',
      danger: 'stroke-danger',
      neutral: 'dark:stroke-neutral-500 stroke-neutral-400',
    },
  },
  defaultVariants: {
    colors: 'primary',
  },
});

type IndicatorVariants = VariantProps<typeof indicator>;

interface CircleProgressProps extends React.HTMLAttributes<HTMLDivElement>, CircleProgressVariants, IndicatorVariants {
  percent?: number;
  min?: number;
  max?: number;
}

const RADIUS = 10;
const strokeDashLength = 2 * Math.PI * RADIUS;
export default function CircleProgress({ className, min = 0, max = 100, percent = 0, colors, size, children, ...props }: CircleProgressProps) {
  const updateOffset = useCallback(() => {
    const percentage = percent < min ? min : percent > max ? max : percent;
    const offset = strokeDashLength - (strokeDashLength * percentage) / 100;
    return offset >= strokeDashLength ? strokeDashLength : offset;
  }, [percent, min, max]);

  return (
    <div className={cn(circleProgress({ size, className }))} {...props}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className="stroke-2">
        <circle cx="12" cy="12" r={RADIUS} transform="rotate(-90 12 12)" data-slot="circle-progress-tracker" className="stroke-neutral" />
        <circle
          cx="12"
          cy="12"
          r={RADIUS}
          transform="rotate(-90 12 12)"
          data-slot="circle-progress-indicator"
          className={indicator({ colors })}
          strokeDashoffset={updateOffset()}
          strokeDasharray={`${strokeDashLength} ${strokeDashLength}`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}
