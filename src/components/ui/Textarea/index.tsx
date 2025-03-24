'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';
const textareaWrap = cva(
  `relative flex border w-fit border-line outline-none not-disabled:has-focus:border-primary transition-colors items-center rounded-md 
  not-data-[disabled]:hover:border-primary not-disabled:has-focus-visible:ring-3 not-disabled:has-focus-visible:ring-primary/30`,
  {
    variants: {
      state: {
        warning: 'not-disabled:has-focus:border-warning border-warning not-data-[disabled]:hover:border-warning not-disabled:has-focus-visible:ring-warning/40',
        error: 'not-disabled:has-focus:border-danger border-danger not-data-[disabled]:hover:border-danger not-disabled:has-focus-visible:ring-danger/40',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-70 [&_textarea]:cursor-not-allowed',
      },
    },
  },
);
const textarea = cva('outline-none size-full box-border p-2 text-sm', {
  variants: {
    resize: {
      none: 'resize-none',
      both: 'resize',
      vertical: 'resize-y',
      horizontal: 'resize-x',
    },
  },
});

type TextAreaVariants = VariantProps<typeof textareaWrap>;
interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'disabled'>, TextAreaVariants {
  state?: 'warning' | 'error';
  resize?: 'none' | 'both' | 'vertical' | 'horizontal';
  disabled?: boolean;
  ref?: React.Ref<HTMLTextAreaElement>;
}
export default function Textarea(props: TextareaProps) {
  const { state, disabled, className, style, resize = 'horizontal', rows = 3, ref, ...rest } = props;
  return (
    <div data-disabled={disabled} className={cn(textareaWrap({ state, disabled }))} style={style}>
      <textarea ref={ref} rows={rows} className={textarea({ resize, className })} disabled={!!disabled} {...rest} />
    </div>
  );
}
