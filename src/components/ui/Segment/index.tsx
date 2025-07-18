'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export interface Option {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

const segmentBase = cva('bg-neutral-100 inline-flex box-border relative h-10 rounded-md p-1 dark:bg-neutral-700', {
  variants: {
    size: {
      sm: 'h-9',
      md: 'h-10',
      lg: 'h-11',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
const segmentItem = cva(`h-full flex gap-0.5 items-center justify-center select-none z-2 transition rounded text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 outline-none px-3`, {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-base',
    },
    active: {
      true: 'text-neutral-800 dark:text-neutral-50',
      false: 'not-disabled:hover:text-neutral-600 not-disabled:dark:hover:text-neutral-400',
    },
    equaledWidth: {
      true: 'flex-1',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
const segmentIndicator = cva(
  `h-full transition ease-linear rounded box-border absolute top-0 shadow outline-none bg-white dark:bg-neutral-800/80 disabled:cursor-not-allowed
  not-disabled:focus-visible:ring-3 not-disabled:focus-visible:ring-primary/50 not-disabled:focus-visible:transition-none`,
);

type SegmentBaseVariants = VariantProps<typeof segmentBase>;
interface SegmentProps extends React.HTMLAttributes<HTMLDivElement>, SegmentBaseVariants {
  defaultValue?: Option['value'];
  equaledWidth?: boolean;
  options: Option[];
  ref?: React.Ref<HTMLDivElement>;
  onValueChange?: (value: Option['value']) => void;
}
export default function Segment({ defaultValue, size, options = [], equaledWidth, className, ref, onValueChange, ...props }: SegmentProps) {
  const [activeValue, setActiveValue] = useState(defaultValue ?? options[0]?.value);
  const segmentRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const clickHandler = (item: Option) => {
    if (item.disabled) return;
    setActiveValue(item.value);
    onValueChange?.(item.value);
  };

  const calcIndicatorStyle = useCallback(() => {
    if (!indicatorRef.current || !segmentRef.current) return;
    const children = segmentRef.current.children;
    const activeIndex = options.findIndex((item) => item.value === activeValue);
    if (activeIndex === -1) return;
    const activeEl = children[activeIndex] as HTMLDivElement;
    if (!activeEl) return;
    indicatorRef.current.style.width = `${activeEl.offsetWidth}px`;
    indicatorRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
  }, [activeValue, options]);

  useEffect(() => {
    const segmentEl = segmentRef.current;
    if (!segmentEl) return;
    // observer self size changes to recalculate indicator
    calcIndicatorStyle();
    const resizeObserver = new ResizeObserver(calcIndicatorStyle);
    resizeObserver.observe(segmentEl);
    return () => {
      resizeObserver.disconnect();
    };
  }, [calcIndicatorStyle]);

  return (
    <div ref={ref} className={cn(segmentBase({ size, className }))} {...props}>
      <div ref={segmentRef} className={cn('relative flex w-full', { grid: equaledWidth })} style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr)` }}>
        {options.map((opt, index) => (
          <button
            key={index}
            data-segment-item="segment-item"
            disabled={opt.disabled}
            className={segmentItem({ size, equaledWidth, active: activeValue === opt.value })}
            onClick={() => clickHandler(opt)}>
            {opt.label}
          </button>
        ))}
        {options.length > 0 && <div ref={indicatorRef} data-segment-item="segment-indicator" className={segmentIndicator()} tabIndex={0}></div>}
      </div>
    </div>
  );
}
