const code = `import { Collapsible as CollapsiblePrimitive } from 'radix-ui';

interface CollapsibleProps extends React.ComponentPropsWithRef<typeof CollapsiblePrimitive.Root> {
  trigger: React.ReactNode;
}
export default function Collapsible({ trigger, children, className, ...props }: CollapsibleProps) {
  return (
    <CollapsiblePrimitive.Root {...props}>
      <CollapsiblePrimitive.Trigger asChild>{trigger}</CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content className="data-[state=open]:animate-collapsible-slide-down data-[state=closed]:animate-collapsible-slide-up">
        <div className={className}>{children}</div>
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
}`;
export default code;
