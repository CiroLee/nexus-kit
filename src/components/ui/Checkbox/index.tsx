'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';

const checkbox = cva(
  `relative flex items-center justify-center border-2 border-neutral-300 dark:border-neutral-600 transition cursor-pointer
 data-[state=checked]:border-primary not-disabled:hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed`,
  {
    variants: {
      size: {
        sm: 'size-4 border rounded-xs',
        md: 'size-5 rounded',
        lg: 'size-6 rounded',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const checkboxIndicator = cva('relative size-full text-white flex items-center justify-center transition-colors data-[state=checked]:bg-primary', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
type CheckboxVariants = VariantProps<typeof checkbox>;
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, CheckboxVariants {
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}
export default function Checkbox({ className, ref, id, size, children, ...props }: CheckboxProps) {
  return (
    <div className="relative flex items-center gap-2.5 select-none">
      <CheckboxPrimitive.Root ref={ref} id={id ?? String(props.value)} className={cn('peer', checkbox({ size, className }))} {...props}>
        <CheckboxPrimitive.Indicator className={checkboxIndicator({ size })}>
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50" htmlFor={id ?? String(props.value)}>
        {children}
      </label>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}
