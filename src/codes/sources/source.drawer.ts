const code = `import { Dialog as DrawerPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const drawerContent = cva('fixed z-50 bg-background overflow-auto p-4 border-line', {
  variants: {
    placement: {
      top: 'border-b top-0 left-0 w-full min-h-80 data-[state=open]:animate-slide-in-from-top data-[state=closed]:animate-slide-out-to-top',
      right: 'border-l top-0 right-0 min-w-80 h-full data-[state=open]:animate-slide-in-from-right data-[state=closed]:animate-slide-out-to-right',
      bottom: 'border-t bottom-0 left-0 w-full min-h-80 data-[state=open]:animate-slide-in-from-bottom data-[state=closed]:animate-slide-out-to-bottom',
      left: 'border-r top-0 left-0 min-w-80 h-full data-[state=open]:animate-slide-in-from-left data-[state=closed]:animate-slide-out-to-left',
    },
  },
  defaultVariants: {
    placement: 'right',
  },
});
type DrawerContentVariants = VariantProps<typeof drawerContent>;
const dialogOverlay = cva('data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-50', {
  variants: {
    backdrop: {
      opaque: 'bg-black/30',
      blur: 'bg-black/30 backdrop-blur',
      transparent: 'bg-transparent',
    },
  },
  defaultVariants: {
    backdrop: 'opaque',
  },
});
export type DialogOverlayVariants = VariantProps<typeof dialogOverlay>;

interface DialogProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root>, DialogOverlayVariants, DrawerContentVariants {
  trigger: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}

export const DrawerClose = ({ children }: { children: React.ReactNode }) => <DrawerPrimitive.Close asChild>{children}</DrawerPrimitive.Close>;

export function Drawer({ trigger, width, height, style, className, backdrop, placement, children, ref, ...props }: DialogProps) {
  return (
    <DrawerPrimitive.Root {...props}>
      <DrawerPrimitive.Trigger asChild>{trigger}</DrawerPrimitive.Trigger>
      <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className={dialogOverlay({ backdrop })} />
        <DrawerPrimitive.Content ref={ref} style={{ width, height, ...style }} className={cn(drawerContent({ placement, className }))}>
          <DrawerPrimitive.Title />
          {children}
        </DrawerPrimitive.Content>
      </DrawerPrimitive.Portal>
    </DrawerPrimitive.Root>
  );
}
`;
export default code;
