import { Tabs as TabsPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const tabs = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-col',
      vertical: 'flex-row',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
type TabsVariants = VariantProps<typeof TabsPrimitive.Root>;
interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, TabsVariants {
  ref?: React.Ref<HTMLDivElement>;
}

export function Tabs({ className, children, orientation, ref, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root orientation={orientation} ref={ref} className={cn(tabs({ orientation, className }))} {...props}>
      {children}
    </TabsPrimitive.Root>
  );
}

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  ref?: React.Ref<HTMLDivElement>;
}
export function TabsList({ className, children, ref, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn('border-line flex data-[orientation=horizontal]:h-10 data-[orientation=horizontal]:border-b data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r', className)}
      ref={ref}
      {...props}>
      {children}
    </TabsPrimitive.List>
  );
}

interface TabsItemProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  ref?: React.Ref<HTMLButtonElement>;
}

const tabItem = cva(
  `data-[state=active]:border-primary flex items-center gap-0.5 disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:text-primary border-transparent px-2 transition outline-none 
  data-[orientation=horizontal]:border-b-2 focus-visible:rounded focus-visible:ring-primary focus-visible:border-none focus-visible:ring-2 data-[orientation=vertical]:h-8 
  data-[orientation=vertical]:border-r-2`,
);
export function TabsItem({ className, children, ref, ...props }: TabsItemProps) {
  return (
    <TabsPrimitive.Trigger className={cn(tabItem({ className }))} ref={ref} {...props}>
      {children}
    </TabsPrimitive.Trigger>
  );
}

interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  ref?: React.Ref<HTMLDivElement>;
}
export function TabsContent({ className, children, ref, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content className={cn('focus-visible:outline-primary data-[orientation=horizontal]:mt-5 data-[orientation=vertical]:ml-5', className)} ref={ref} {...props}>
      {children}
    </TabsPrimitive.Content>
  );
}
