import { Tabs as TabsPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export function Tabs({ className, children, ...props }: React.ComponentPropsWithRef<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root className={cn('flex data-[orientation=horizontal]:flex-col', className)} {...props}>
      {children}
    </TabsPrimitive.Root>
  );
}

export function TabsList({ className, children, ...props }: React.ComponentPropsWithRef<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn('border-line flex data-[orientation=horizontal]:h-10 data-[orientation=horizontal]:border-b data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r', className)}
      {...props}>
      {children}
    </TabsPrimitive.List>
  );
}

const tabItem = cva(
  `data-[state=active]:border-primary flex items-center gap-0.5 disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:text-primary border-transparent px-2 transition outline-none 
  data-[orientation=horizontal]:border-b-2 focus-visible:rounded focus-visible:ring-primary focus-visible:border-none focus-visible:ring-2 data-[orientation=vertical]:h-8 
  data-[orientation=vertical]:border-r-2 cursor-pointer`,
);
export function TabsItem({ className, children, ...props }: React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger className={cn(tabItem({ className }))} {...props}>
      {children}
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent({ className, children, ...props }: React.ComponentPropsWithRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content className={cn('focus-visible:outline-primary data-[orientation=horizontal]:mt-5 data-[orientation=vertical]:ml-5', className)} {...props}>
      {children}
    </TabsPrimitive.Content>
  );
}
