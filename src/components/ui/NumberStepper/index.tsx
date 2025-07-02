'use client';
import { isValidElement, useRef } from 'react';
import { IconPlus, IconMinus } from '@tabler/icons-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputWrap = cva(
  `relative border border-line outline-none not-disabled:has-focus:border-primary transition-colors inline-flex items-center overflow-hidden
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

const input = cva('peer outline-none flex-1 px-2 size-full disabled:cursor-not-allowed [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]');
const innerSpin = cva(
  `flex items-center justify-center aspect-square outline-none h-full transition-colors relative not-disabled:hover:bg-primary/10 disabled:cursor-not-allowed
  not-disabled:hover:before:opacity-0 not-disabled:hover:after:opacity-0`,
  {
    variants: {
      stepper: {
        up: 'before:w-px before:h-[40%] before:bg-line before:absolute before:left-0 before:transition-opacity',
        down: 'after:w-px after:h-[40%] after:bg-line after:absolute after:right-0 after:transition-opacity',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
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
export default function NumberStepper({ size, state, prefix, disabled, rounded, className, style, onStepperAction, ref, ...props }: InputProps) {
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
      <button type="button" data-slot="stepper-down" disabled={!!disabled} className={innerSpin({ stepper: 'down', size })} onClick={() => changeNumber('down')}>
        <IconMinus size="1em" />
      </button>
      {isValidElement(prefix) ? <>{prefix}</> : prefix ? <span className="pl-1.5">{prefix}</span> : null}
      <input ref={inputRef} className={input()} type="number" disabled={!!disabled} {...props} />
      <button type="button" data-slot="stepper-up" disabled={!!disabled} className={innerSpin({ stepper: 'up', size })} onClick={() => changeNumber('up')}>
        <IconPlus className="rotate-180" size="1em" />
      </button>
    </div>
  );
}
