'use client';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
  `inline-flex items-center justify-center transition-colors not-disabled:hover:opacity-90 box-border 
  outline-none focus-visible:ring-3 focus-visible:transition-none`,
  {
    variants: {
      size: {
        xs: 'px-2 rounded-sm h-6 text-xs',
        sm: 'px-2 rounded h-8 text-sm',
        md: 'px-4 rounded-md h-10',
        lg: 'px-4 rounded-lg h-11',
      },
      variant: {
        primary: 'bg-primary active:bg-primary-active focus-visible:ring-primary/60',
        danger: 'bg-danger active:bg-danger-active focus-visible:ring-danger/60',
        success: 'bg-success active:bg-success-active focus-visible:ring-success/60',
        warning: 'bg-warning active:bg-warning-active focus-visible:ring-warning/60',
        ghost: 'bg-transparent dark:hover:bg-neutral-700 hover:bg-neutral-200 focus-visible:ring-primary/60',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  },
);

type ButtonVariants = VariantProps<typeof button>;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  className?: string;
  style?: React.CSSProperties;
  asChild?: boolean;
}
export default function Button(props: ButtonProps, ref?: React.Ref<HTMLButtonElement>) {
  const { variant, size, className, asChild, children, ...rest } = props;
  const Component = asChild ? Slot : 'button';
  return (
    <Component ref={ref} className={cn(button({ variant, size, className }))} {...rest}>
      {children}
    </Component>
  );
}
