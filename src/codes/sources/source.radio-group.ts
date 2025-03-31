const code = `'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
export function RadioGroup({ orientation = 'horizontal', className, ...props }: React.ComponentPropsWithRef<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root orientation={orientation} className={cn('flex flex-row gap-2.5', { 'flex-col': orientation === 'vertical' }, className)} {...props} />;
}

const radioItem = cva(
  \`relative rounded-full flex shrink-0 items-center justify-center border-2 border-neutral-300 dark:border-neutral-600 transition-colors data-[state=checked]:border-primary outline-none
  focus-visible:ring-3 focus-visible:ring-primary/50 not-data-disabled:hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed\`,
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
interface RadioProps extends React.ComponentPropsWithRef<typeof RadioGroupPrimitive.Item>, RadioItemVariants {}

export function Radio({ id, size, children, className, ...props }: RadioProps) {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupPrimitive.Item id={id} className={cn('peer', radioItem({ size, className }))} {...props}>
        <RadioGroupPrimitive.Indicator className="bg-primary block size-[52%] rounded-full opacity-0 transition-opacity data-[state=checked]:opacity-100" />
      </RadioGroupPrimitive.Item>
      <label className={label({ size })} htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

const radioButton = cva(
  \`relative border border-line not-data-disabled:hover:border-primary outline-none not-disabled:hover:bg-primary/10 transition data-[state=checked]:border-primary 
  not-data-disabled:focus-visible:ring-3 focus-visible:ring-primary/50 data-disabled:opacity-50 data-disabled:cursor-not-allowed\`,
  {
    variants: {
      size: {
        sm: 'size-8 rounded text-sm',
        md: 'size-10 rounded-md',
        lg: 'size-12 rounded-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
export function RadioButton({ id, size, children, className, ...props }: RadioProps) {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupPrimitive.Item id={id} className={cn(radioButton({ size, className }))} {...props}>
        <span className="flex size-full items-center justify-center">{children}</span>
      </RadioGroupPrimitive.Item>
    </div>
  );
}
`;
export default code;
