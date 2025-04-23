const code = `'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputWrap = cva(
  \`relative px-3 border border-line outline-none not-disabled:has-focus:border-primary transition-colors flex gap-2 items-center 
  not-data-[disabled]:hover:border-primary not-disabled:has-focus-visible:ring-3 not-disabled:has-focus-visible:ring-primary/30\`,
  {
    variants: {
      size: {
        sm: 'rounded h-8 text-sm',
        md: 'rounded-md h-10 text-sm',
        lg: 'rounded-lg h-12',
      },
      state: {
        warning: 'not-disabled:has-focus:border-warning border-warning not-data-[disabled]:hover:border-warning not-disabled:has-focus-visible:ring-warning/30',
        error: 'not-disabled:has-focus:border-danger border-danger not-data-[disabled]:hover:border-danger not-disabled:has-focus-visible:ring-danger/30',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
      rounded: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const input = cva('outline-none size-full disabled:cursor-not-allowed');

type InputWrapVariants = VariantProps<typeof inputWrap>;
interface InputProps extends Omit<React.ComponentPropsWithRef<'input'>, 'size' | 'disabled' | 'prefix'>, InputWrapVariants {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
export default function Input({ size, state, prefix, suffix, disabled, rounded, className, style, ...props }: InputProps) {
  return (
    <div {...(disabled ? { 'data-disabled': '' } : {})} className={cn(inputWrap({ size, state, disabled, rounded, className }))} style={style}>
      {prefix ? <>{prefix}</> : null}
      <input className={input()} disabled={!!disabled} {...props} />
      {suffix ? <>{suffix}</> : null}
    </div>
  );
}
`;
export default code;
