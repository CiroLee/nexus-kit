'use client';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { IconTrendingUp, IconTrendingDown } from '@tabler/icons-react';
import React from 'react';

const statistic = cva('inline-flex items-center gap-1', {
  variants: {
    colors: {
      default: '',
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      danger: 'text-danger',
      warning: 'text-warning',
    },
  },
  defaultVariants: {
    colors: 'default',
  },
});

type StatisticVariants = VariantProps<typeof statistic>;
interface StatisticProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix' | 'title'>, StatisticVariants {
  value: React.ReactNode;
  title?: React.ReactNode;
  unit?: React.ReactNode;
  helpText?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  trend?: 'increase' | 'decrease';
  ref?: React.Ref<HTMLDivElement>;
}
export default function Statistic({ className, helpText, title, value, unit, colors, prefix, suffix, trend, ...props }: StatisticProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)} {...props}>
      <div data-slot="statistic-title" className="text-description text-sm">
        {title}
      </div>
      <div className={statistic({ colors })}>
        {prefix}
        <TrendIcon trend={trend} />
        <div data-slot="statistic-value" className="text-2xl leading-[1] font-semibold">
          {value}
        </div>
        {unit ? (
          <div data-slot="statistic-unit" className="self-end text-sm">
            {unit}
          </div>
        ) : null}
        {suffix}
      </div>
      {helpText ? (
        <div data-slot="statistic-help-text" className="text-description text-xs">
          {helpText}
        </div>
      ) : null}
    </div>
  );
}

function TrendIcon({ trend }: { trend?: 'increase' | 'decrease' }) {
  if (!trend) return null;
  return trend === 'increase' ? (
    <IconTrendingUp className="relative -bottom-[0.1em]" size="1.2em" data-slot="statistic-trend" />
  ) : (
    <IconTrendingDown className="relative -bottom-[0.1em]" size="1.2em" data-slot="statistic-trend" />
  );
}
