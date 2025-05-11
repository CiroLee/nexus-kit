const code = `'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { IconCheck } from '@tabler/icons-react';

const checkbox = cva(
  \`relative shrink-0 flex items-center justify-center border-2 border-neutral-300 dark:border-neutral-600 transition cursor-pointer
 data-[state=checked]:border-primary disabled:opacity-50 disabled:cursor-not-allowed outline-none\`,
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

const label = cva('cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
type CheckboxVariants = VariantProps<typeof checkbox>;
interface CheckboxProps extends React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root>, CheckboxVariants {}
export function Checkbox({ className, id, size, children, ...props }: CheckboxProps) {
  return (
    <div className={cn('relative flex items-center gap-2.5 select-none', className)}>
      <CheckboxPrimitive.Root id={id} className={cn('peer focus-visible:ring-primary/50 not-disabled:hover:border-primary focus-visible:ring-3', checkbox({ size }))} {...props}>
        <CheckboxPrimitive.Indicator className={checkboxIndicator({ size })}>
          <IconCheck size="1em" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label className={label({ size })} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

const checkboxCard = cva(
  \`has-[*:focus-visible]:ring-primary/50 relative flex items-center gap-2.5 rounded-md border p-2 select-none
  has-[*:focus-visible]:ring-3 has-[*:disabled]:cursor-not-allowed border-line has-[*:disabled]:opacity-50\`,
);
export function CheckboxCard({ className, id, size, children, ...props }: CheckboxProps) {
  return (
    <div className={cn(checkboxCard({ className }))}>
      <CheckboxPrimitive.Root id={id} className={cn('peer', checkbox({ size }))} {...props}>
        <CheckboxPrimitive.Indicator className={checkboxIndicator({ size })}>
          <IconCheck size="1em" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label className={label({ size })} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}`;

export default code;
