'use client';
import { Popover as PopoverPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const popoverContent = cva(
  `rounded-md bg-background drop-shadow-[0_-1px_0,1px_0_0,0_1px_0,-1px_0_0] drop-shadow-line p-2 z-(--popup) transition-all origin-(--radix-popover-content-transform-origin)
  animate-zoom-fade-in data-[state=closed]:animate-zoom-fade-out outline-none`,
);

interface PopoverProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>, React.ComponentPropsWithRef<typeof PopoverPrimitive.Content> {
  trigger: React.ReactNode;
  hiddenArrow?: boolean;
}
export function Popover({ trigger, children, hiddenArrow, className, sideOffset = 5, alignOffset = 1, defaultOpen, open, onOpenChange, modal, ...props }: PopoverProps) {
  return (
    <PopoverPrimitive.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content className={cn(popoverContent({ className }))} sideOffset={sideOffset} alignOffset={alignOffset} {...props}>
          {children}
          {hiddenArrow ? null : <PopoverPrimitive.Arrow className="fill-background" />}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

export const PopoverClose = (props: React.ComponentProps<typeof PopoverPrimitive.Close>) => <PopoverPrimitive.Close asChild {...props} />;
