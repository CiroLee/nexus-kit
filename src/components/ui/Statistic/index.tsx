'use client';
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
  return (
    <div className={cn('flex flex-col gap-1', className)} {...props}>
      <p className="text-description text-sm">{title}</p>
      <div className={statistic({ colors })}>
        {prefix}
        <TrendIcon trend={trend} />
        <span data-slot="statistic-value" className="text-2xl leading-[1] font-semibold">
          {value}
        </span>
        {unit ? (
          <span data-slot="statistic-unit" className="self-end text-sm">
            {unit}
          </span>
        ) : null}
        {suffix}
      </div>
      {helpText ? <span className="text-description text-xs">{helpText}</span> : null}
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
