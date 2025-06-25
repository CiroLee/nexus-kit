'use client';
import { useRef } from 'react';
import { IconChevronUp } from '@tabler/icons-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputWrap = cva(
  `relative pl-3 border border-line outline-none not-disabled:has-focus:border-primary transition-colors flex gap-2 items-center
  not-data-[disabled]:hover:border-primary not-disabled:has-focus-visible:ring-3 not-disabled:has-focus-visible:ring-primary/30`,
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

const input = cva('peer outline-none size-full disabled:cursor-not-allowed [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]');
const innerSpin = cva(
  `relative flex flex-1 items-center justify-center border-l border-line first:border-b transition-colors
  not-disabled:hover:bg-primary/10 disabled:cursor-not-allowed`,
  {
    variants: {
      size: {
        sm: 'w-6 text-xs',
        md: 'w-7 text-xs',
        lg: 'w-8 text-sm',
      },
      state: {
        warning: 'not-disabled:hover:bg-warning/10',
        error: 'not-disabled:hover:bg-danger/10',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

type InputWrapVariants = VariantProps<typeof inputWrap>;
interface InputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'disabled' | 'prefix' | 'type' | 'defaultValue'>, InputWrapVariants {
  defaultValue?: number;
  prefix?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
  onStepperAction?: (action: 'up' | 'down', value: number) => void;
}
export default function NumberInput({ size, state, prefix, disabled, rounded, className, style, onStepperAction, ref, ...props }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const changeNumber = (action: 'up' | 'down') => {
    if (action === 'up') {
      inputRef.current?.stepUp();
    } else {
      inputRef.current?.stepDown();
    }
    onStepperAction?.(action, inputRef.current?.valueAsNumber || 0);
  };
  return (
    <div {...(disabled ? { 'data-disabled': '' } : {})} ref={ref} className={cn(inputWrap({ size, state, disabled, rounded, className }))} style={style}>
      {prefix ? <>{prefix}</> : null}
      <input ref={inputRef} className={input()} type="number" disabled={!!disabled} {...props} />
      <div className="flex h-full flex-col">
        <button type="button" disabled={!!disabled} className={innerSpin({ size, state })} onClick={() => changeNumber('up')}>
          <IconChevronUp size="1em" />
        </button>
        <button type="button" disabled={!!disabled} className={innerSpin({ size, state })} onClick={() => changeNumber('down')}>
          <IconChevronUp className="rotate-180" size="1em" />
        </button>
      </div>
    </div>
  );
}
