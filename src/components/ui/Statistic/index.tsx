'use client';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { IconTrendingUp, IconTrendingDown } from '@tabler/icons-react';

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
interface StatisticProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'>, StatisticVariants {
  value: string | number;
  title?: string;
  unit?: string;
  helpText?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  trend?: 'increase' | 'decrease';
  ref?: React.Ref<HTMLDivElement>;
}
export default function Statistic({ className, helpText, title, value, unit, colors, prefix, suffix, trend, ...props }: StatisticProps) {
  const trendIcon = useMemo(() => {
    switch (trend) {
      case 'increase':
        return <IconTrendingUp className="relative -bottom-[0.1em]" size="1.2em" data-node="statistic-trend" />;
      case 'decrease':
        return <IconTrendingDown className="relative -bottom-[0.1em]" size="1.2em" data-node="statistic-trend" />;
      default:
        return null;
    }
  }, [trend]);

  return (
    <div className={cn('flex flex-col gap-1', className)} {...props}>
      <p className="text-description text-sm">{title}</p>
      <div className={statistic({ colors })}>
        {prefix}
        {trendIcon}
        <span data-node="statistic-value" className="text-2xl leading-[1] font-semibold">
          {value}
        </span>
        {unit ? (
          <span data-node="statistic-unit" className="self-end text-sm">
            {unit}
          </span>
        ) : null}
        {suffix}
      </div>
      {helpText ? <span className="text-description text-xs">{helpText}</span> : null}
    </div>
  );
}
