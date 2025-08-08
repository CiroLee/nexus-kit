'use client';
import { createContext, useContext } from 'react';
import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
export interface ToggleGroupVariants {
  variant?: 'light' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}
const ToggleGroupContext = createContext<ToggleGroupVariants>({
  disabled: false,
  variant: 'light',
  size: 'md',
});
type ToggleGroupProps = React.ComponentPropsWithRef<typeof ToggleGroupPrimitive.Root> & ToggleGroupVariants;
const toggleGroup = cva('flex items-center');
export function ToggleGroup({ className, variant = 'light', size = 'md', children, disabled, ...props }: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive.Root disabled={disabled} className={cn(toggleGroup({ className }))} data-variant={variant} data-size={size} data-slot="toggle-group" {...props}>
      <ToggleGroupContext.Provider value={{ size, variant, disabled }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

const toggleGroupItem = cva(
  `inline-flex items-center gap-1 justify-center focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-neutral/50
   data-[state=on]:text-foreground data-[state=on]:bg-neutral/60 transition-colors first:rounded-tr-none first:rounded-br-none
   last:rounded-tl-none last:rounded-bl-none [&:not(:first-child,:last-child)]:rounded-none`,
  {
    variants: {
      size: {
        sm: 'h-7 min-w-7 px-1.5 text-xs rounded',
        md: 'h-8.5 min-w-8.5 px-2 text-sm rounded-md',
        lg: 'h-10 min-w-10 px-2.5 rounded-lg',
      },
      variant: {
        light: '',
        bordered: 'border border-line border-l-0 first:border-l',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'hover:bg-neutral/50 hover:text-foreground/50',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'light',
      disabled: false,
    },
  },
);
export function ToggleGroupItem({ className, disabled, ...props }: React.ComponentPropsWithRef<typeof ToggleGroupPrimitive.Item>) {
  const { disabled: rootDisabled, ...rest } = useContext(ToggleGroupContext);
  const _disabled = disabled ?? rootDisabled;
  return <ToggleGroupPrimitive.Item data-slot="toggle-group-item" disabled={disabled} className={toggleGroupItem({ ...rest, disabled: _disabled, className })} {...props} />;
}
