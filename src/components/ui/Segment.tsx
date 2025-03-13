'use client';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Option } from './types/component';
import { useCallback, useEffect, useRef, useState } from 'react';
const segmentBase = cva('bg-neutral-100 inline-flex box-border relative h-10 rounded-md p-1 dark:bg-neutral-700');
const segmentItem = cva(`h-full flex gap-0.5 text-sm items-center justify-center select-none z-2 transition rounded text-neutral-500 px-3`, {
  variants: {
    active: {
      true: 'text-neutral-800 dark:text-neutral-50',
      false: 'hover:text-neutral-600 dark:hover:text-neutral-400',
    },
  },
});
const segmentIndicator = cva(
  `h-full transition ease-linear rounded box-border  absolute top-0 z-1 shadow outline-none bg-white dark:bg-neutral-800
  focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:transition-none`,
);

interface SegmentProps {
  defaultValue?: Option['value'];
  option: Option[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (value: Option['value']) => void;
}
export default function Segment(props: SegmentProps, ref?: React.Ref<HTMLDivElement>) {
  const { defaultValue, option, className, style, onChange } = props;
  const [activeValue, setActiveValue] = useState(defaultValue ?? option[0].value);
  const segmentRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const clickHandler = (item: Option) => {
    if (item.disabled) return;
    setActiveValue(item.value);
    onChange?.(item.value);
  };

  const calcIndicatorStyle = useCallback(() => {
    if (!indicatorRef.current) return;
    const children = segmentRef.current?.children || [];
    const activeIndex = option.findIndex((item) => item.value === activeValue);
    const activeEl = Array.from(children)[activeIndex] as HTMLDivElement;
    indicatorRef.current.style.width = `${activeEl.offsetWidth}px`;
    indicatorRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
  }, [activeValue, option]);

  useEffect(() => {
    calcIndicatorStyle();
  }, [activeValue, calcIndicatorStyle]);

  return (
    <div ref={ref} className={cn(segmentBase({ className }))} style={style}>
      <div ref={segmentRef} className="relative flex w-full">
        {option.map((opt, index) => (
          <div key={index} data-segment-item="segment-item" className={segmentItem({ active: activeValue === opt.value })} onClick={() => clickHandler(opt)}>
            {opt.label}
          </div>
        ))}
        <div ref={indicatorRef} data-segment-item="segment-indicator" className={segmentIndicator()} tabIndex={0}></div>
      </div>
    </div>
  );
}
