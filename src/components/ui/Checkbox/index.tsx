'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { IconCheck } from '@tabler/icons-react';

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
interface CheckboxProps extends React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root>, CheckboxVariants {}
export default function Checkbox({ className, id, size, children, ...props }: CheckboxProps) {
  return (
    <div className="relative flex items-center gap-2.5 select-none">
      <CheckboxPrimitive.Root id={id} className={cn('peer', checkbox({ size, className }))} {...props}>
        <CheckboxPrimitive.Indicator className={checkboxIndicator({ size })}>
          <IconCheck size="1em" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50" htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
