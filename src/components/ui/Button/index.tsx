'use client';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { colors, colorsBorderedVariants, colorsLightVariants } from './cvaVariants';

// TODO separate button styles out for decreasing file size
const button = cva(
  `inline-flex items-center justify-center transition not-disabled:hover:opacity-80 box-border 
  text-white outline-none focus-visible:ring-3 focus-visible:transition-none`,
  {
    variants: {
      colors,
      size: {
        xs: 'px-2 rounded-sm h-6 text-xs',
        sm: 'px-3 rounded h-8 text-sm',
        md: 'px-4 rounded-md h-10',
        lg: 'px-5 rounded-lg h-12',
      },

      variant: {
        light: 'text-foreground bg-transparent dark:bg-transparent',
        bordered: 'border bg-transparent dark:bg-transparent',
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
    compoundVariants: [...colorsBorderedVariants, ...colorsLightVariants],
    defaultVariants: {
      size: 'md',
      colors: 'primary',
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
  const { colors, size, icon, variant, disabled, loading, rounded, className, asChild, children, ...rest } = props;
  const Component = asChild ? Slot : 'button';
  return (
    <Component ref={ref} disabled={disabled || !!loading} className={cn(button({ colors, size, icon, variant, disabled, loading, rounded, className }))} {...rest}>
      {children}
    </Component>
  );
}
