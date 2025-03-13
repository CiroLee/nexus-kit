'use client';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
  `inline-flex items-center justify-center transition-colors not-disabled:hover:opacity-90 box-border 
  text-white outline-none focus-visible:ring-3 focus-visible:transition-none`,
  {
    variants: {
      size: {
        xs: 'px-2 rounded-sm h-6 text-xs',
        sm: 'px-3 rounded h-8 text-sm',
        md: 'px-4 rounded-md h-10',
        lg: 'px-5 rounded-lg h-12',
      },
      variant: {
        primary: 'bg-primary not-disabled:active:bg-primary-active focus-visible:ring-primary/50',
        danger: 'bg-danger not-disabled:active:bg-danger-active focus-visible:ring-danger/50',
        success: 'bg-success not-disabled:active:bg-success-active focus-visible:ring-success/50',
        warning: 'bg-warning not-disabled:active:bg-warning-active focus-visible:ring-warning/50',
        ghost: 'text-foreground bg-transparent dark:not-disabled:hover:bg-neutral-700 not-disabled:hover:bg-neutral-200 focus-visible:ring-primary/50',
      },
      bordered: {
        true: 'border bg-transparent',
      },
      icon: {
        true: 'aspect-square p-0',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
      loading: {
        true: 'cursor-not-default opacity-50',
      },
      rounded: {
        true: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        bordered: true,
        className: 'border-primary text-primary not-disabled:hover:bg-primary/10 not-disabled:active:bg-primary/20',
      },
      {
        variant: 'success',
        bordered: true,
        className: 'border-success text-success not-disabled:hover:bg-success/10 not-disabled:active:bg-success/20',
      },
      {
        variant: 'warning',
        bordered: true,
        className: 'border-warning text-warning not-disabled:hover:bg-warning/10 not-disabled:active:bg-warning/20',
      },
      {
        variant: 'danger',
        bordered: true,
        className: 'border-danger text-danger not-disabled:hover:bg-danger/10 not-disabled:active:bg-danger/20',
      },
      {
        variant: 'ghost',
        bordered: true,
        className: 'border-neutral-300 dark:border-neutral-700',
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
);

type ButtonVariants = VariantProps<typeof button>;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Omit<ButtonVariants, 'disabled'> {
  className?: string;
  style?: React.CSSProperties;
  asChild?: boolean;
}
export default function Button(props: ButtonProps, ref?: React.Ref<HTMLButtonElement>) {
  const { variant, size, icon, bordered, disabled, loading, rounded, className, asChild, children, ...rest } = props;
  const Component = asChild ? Slot : 'button';
  return (
    <Component ref={ref} disabled={disabled || !!loading} className={cn(button({ variant, size, icon, bordered, disabled, loading, rounded, className }))} {...rest}>
      {children}
    </Component>
  );
}
