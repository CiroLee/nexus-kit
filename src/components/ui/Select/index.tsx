'use client';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Select as SelectPrimitive } from 'radix-ui';
import { IconCheck, IconChevronDown } from '@tabler/icons-react';

interface SelectOption {
  id: string;
  label?: React.ReactNode;
  value?: string;
  disabled?: boolean;
}
export interface SelectItem extends SelectOption {
  title?: React.ReactNode;
  options?: SelectOption[];
}

const selectTrigger = cva(
  `inline-flex border border-line items-center justify-between px-2 focus:ring-3 focus:border-primary focus:ring-primary/30 outline-none 
  disabled:opacity-50 disabled:cursor-not-allowed`,
  {
    variants: {
      size: {
        sm: 'rounded-sm text-sm h-8',
        md: 'rounded-md h-10 text-sm',
        lg: 'rounded-lg h-12 px-2.5 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const selectContent = cva(
  `p-1 bg-background border z-(--popup) border-line transition overflow-y-auto overflow-x-hidden data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in 
  origin-[--radix-select-content-transform-origin] max-h-[--radix-select-content-available-height]`,
  {
    variants: {
      size: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

type SelectTriggerVariants = VariantProps<typeof selectTrigger>;

interface SelectProps extends React.ComponentPropsWithRef<typeof SelectPrimitive.Root>, SelectTriggerVariants {
  className?: string;
  placeholder?: string;
  items: SelectItem[];
}
export default function Select({ placeholder, size, items, className, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className={cn('group', selectTrigger({ size, className }))}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild className="transition-transform group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-180">
          <IconChevronDown size="1em" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content position="popper" sideOffset={8} className={cn('min-w-(--radix-select-trigger-width)', selectContent({ size }))}>
          <SelectPrimitive.Viewport>
            {items.map((item) => {
              if (item.options?.length) {
                return (
                  <Fragment key={item.id}>
                    <SelectPrimitive.Group>
                      {item.title ? <SelectPrimitive.Label className="p-2 text-sm text-neutral-500">{item.title}</SelectPrimitive.Label> : null}
                      {item.options.map((opt) => (
                        <SelectItem key={opt.id} value={opt.value || ''} size={size} disabled={opt.disabled}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectPrimitive.Group>
                    <SelectPrimitive.Separator className="bg-line mx-auto my-2 h-px w-[94%] last:hidden" />
                  </Fragment>
                );
              }
              return (
                <SelectItem key={item.id} value={item.value || ''} size={size} disabled={item.disabled}>
                  {item.label}
                </SelectItem>
              );
            })}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

const selectItemStyle = cva(
  `cursor-default rounded-[inherit] flex justify-between items-center p-2 transition-colors data-disabled:opacity-50 data-disabled:cursor-not-allowed  
  outline-none not-data-disabled:focus:text-white not-data-disabled:focus:bg-primary relative`,
  {
    variants: {
      size: {
        sm: 'rounded-sm text-sm p-1.5',
        md: 'rounded-sm text-sm',
        lg: 'rounded-md text-base p-2.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface SelectItemProps extends React.ComponentPropsWithRef<typeof SelectPrimitive.Item>, VariantProps<typeof selectItemStyle> {}
function SelectItem({ className, size, children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item className={cn(selectItemStyle({ size, className }))} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="text-foreground">
        <IconCheck size="1em" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}
