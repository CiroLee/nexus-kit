'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}
export function RadioGroup({ orientation = 'horizontal', className, ref, ...props }: RadioGroupProps) {
  return <RadioGroupPrimitive.Root ref={ref} orientation={orientation} className={cn('flex flex-row gap-2.5', { 'flex-col': orientation === 'vertical' }, className)} {...props} />;
}

const radioItem = cva(
  `relative rounded-full flex shrink-0 items-center justify-center border-2 border-neutral-300 dark:border-neutral-600 transition-colors data-[state=checked]:border-primary outline-none
  focus-visible:ring-3 focus-visible:ring-primary/50 not-data-disabled:hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed`,
  {
    variants: {
      size: {
        sm: 'size-4 border',
        md: 'size-5',
        lg: 'size-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const label = cva('peer-disabled:cursor-not-allowed peer-disabled:opacity-50', {
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

type RadioItemVariants = VariantProps<typeof radioItem>;
interface RadioProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, RadioItemVariants {
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

export function Radio({ id, size, children, className, ref, ...props }: RadioProps) {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupPrimitive.Item ref={ref} id={id ?? props.value} className={cn('peer', radioItem({ size, className }))} {...props}>
        <RadioGroupPrimitive.Indicator className="bg-primary block size-[52%] rounded-full opacity-0 transition-opacity data-[state=checked]:opacity-100" />
      </RadioGroupPrimitive.Item>
      <label className={label({ size })} htmlFor={id ?? props.value}>
        {children}
      </label>
    </div>
  );
}
