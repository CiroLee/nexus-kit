'use client';
import { createContext, useContext } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { colors, colorsBorderedVariants, colorsLightVariants } from './buttonVariants';
type TightenButtonVariants = Omit<ButtonVariants, 'loading'>;
interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, TightenButtonVariants {
  ref?: React.Ref<HTMLDivElement>;
}

const ButtonGroupContext = createContext<TightenButtonVariants>({
  variant: 'solid',
  colors: 'primary',
  size: 'md',
  disabled: false,
  pill: false,
});

const childrenBordered = '[&>[data-variant=bordered]]:border-l-0 [&>[data-variant=bordered]:first-child]:border-l';
const childrenRounded = '[&>*]:first:rounded-r-none [&>*:not(:last-child,:first-child)]:rounded-none [&>*:last-child]:rounded-l-none';
export function ButtonGroup({ className, variant, colors, size, asIcon, disabled, pill, children, ...props }: ButtonGroupProps) {
  return (
    <div className={cn('flex items-center', childrenBordered, childrenRounded, className)} {...props}>
      <ButtonGroupContext.Provider value={{ variant, colors, asIcon, size, disabled, pill }}>{children}</ButtonGroupContext.Provider>
    </div>
  );
}

const button = cva(`inline-flex items-center justify-center transition not-disabled:hover:opacity-80 box-border outline-none focus-visible:ring-3 focus-visible:transition-none`, {
  variants: {
    colors,
    size: {
      xs: 'px-2 rounded-sm h-6 text-xs',
      sm: 'px-3 rounded h-8 text-sm',
      md: 'px-4 rounded-md h-10',
      lg: 'px-5 rounded-lg h-12',
    },

    variant: {
      solid: 'text-white',
      light: 'text-foreground bg-transparent dark:bg-transparent',
      bordered: 'border bg-transparent dark:bg-transparent',
    },
    asIcon: {
      true: 'aspect-square p-0',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
    loading: {
      true: 'cursor-not-default opacity-50',
    },
    pill: {
      true: 'rounded-full',
    },
  },
  compoundVariants: [
    ...colorsBorderedVariants,
    ...colorsLightVariants,
    {
      variant: 'solid',
      colors: 'neutral',
      className: 'text-foreground',
    },
  ],
  defaultVariants: {
    size: 'md',
    colors: 'primary',
    variant: 'solid',
  },
});

export type ButtonVariants = VariantProps<typeof button>;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Omit<ButtonVariants, 'disabled'> {
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}
export function Button(props: ButtonProps) {
  const { colors, size, asIcon, variant, disabled, loading, pill, className, asChild, children, ...rest } = props;
  const Component = asChild ? Slot : 'button';
  const context = useContext(ButtonGroupContext);
  const _props: TightenButtonVariants = {
    colors: colors ?? context?.colors,
    size: size ?? context?.size,
    variant: variant ?? context?.variant,
    pill: pill ?? context?.pill,
    disabled: disabled ?? context?.disabled,
    asIcon: asIcon ?? context?.asIcon,
  };
  return (
    <Component data-variant={_props.variant} disabled={_props.disabled || !!loading} className={cn(button({ loading, ..._props, className }))} {...rest}>
      {children}
    </Component>
  );
}
