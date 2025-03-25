const code = `'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

const inputWrap = cva(
  \`relative px-3 border border-line outline-none not-disabled:has-focus:border-primary transition-colors flex gap-2 items-center 
  not-data-[disabled]:hover:border-primary not-disabled:has-focus-visible:ring-3 not-disabled:has-focus-visible:ring-primary/30\`,
  {
    variants: {
      size: {
        xs: 'rounded-sm h-6 text-xs px-2',
        sm: 'rounded h-8 text-sm',
        md: 'rounded-md h-10 text-sm',
        lg: 'rounded-lg h-12',
      },
      state: {
        warning: 'not-disabled:has-focus:border-warning border-warning not-data-[disabled]:hover:border-warning not-disabled:has-focus-visible:ring-warning/40',
        error: 'not-disabled:has-focus:border-danger border-danger not-data-[disabled]:hover:border-danger not-disabled:has-focus-visible:ring-danger/40',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-70 [&_input]:cursor-not-allowed',
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

const input = cva('outline-none size-full');

type InputWrapVariants = VariantProps<typeof inputWrap>;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'prefix' | 'disabled'>, InputWrapVariants {
  type?: 'text' | 'password' | 'email';
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLInputElement>;
}
export default function Input(props: InputProps) {
  const { size, state, prefix, suffix, disabled, rounded, className, style, ref, ...rest } = props;
  return (
    <div data-disabled={disabled} className={cn(inputWrap({ size, state, disabled, rounded, className }))} style={style}>
      {prefix ? <>{prefix}</> : null}
      <input ref={ref} className={input()} disabled={!!disabled} {...rest} />
      {suffix ? <>{suffix}</> : null}
    </div>
  );
}
`;
export default code;
