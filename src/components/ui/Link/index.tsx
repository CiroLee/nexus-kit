'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const link = cva(
  `inline-flex items-center gap-0.5 transition-colors outline-none leading-[1em]
  not-data-disabled:focus-visible:ring-primary/50 not-data-disabled:focus-visible:ring-3 not-data-disabled:focus-visible:rounded-xs`,
  {
    variants: {
      colors: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        danger: 'text-danger',
        warning: 'text-warning',
        neutral: 'text-foreground',
      },
      underline: {
        true: 'shadow-[0_1px_0_0] shadow-[currentColor]',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'hover:opacity-80',
      },
    },
    defaultVariants: {
      colors: 'primary',
      underline: false,
      disabled: false,
    },
  },
);

type LinkVariants = VariantProps<typeof link>;
interface LinkProps extends React.ComponentPropsWithRef<'a'>, LinkVariants {}
export default function Link({ className, underline, colors, disabled, target, onClick, ...props }: LinkProps) {
  return (
    <a
      role="link"
      tabIndex={0}
      {...(disabled ? { 'data-disabled': '' } : {})}
      aria-disabled={!!disabled}
      className={cn(link({ underline, colors, disabled, className }))}
      target={target}
      {...(target === '_blank' && !disabled ? { rel: 'noopener noreferrer' } : {})}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        onClick?.(e);
      }}
      {...props}
    />
  );
}
