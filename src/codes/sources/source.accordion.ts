const code = `import { Accordion as AccordionPrimitive } from 'radix-ui';
import { IconChevronUp } from '@tabler/icons-react';

export interface AccordionItem {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}
type AccordionProps = React.ComponentPropsWithRef<typeof AccordionPrimitive.Root> & {
  items: AccordionItem[];
};
export default function Accordion({ className, items, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root className={className} {...props}>
      {items.map((item) => (
        <AccordionPrimitive.Item data-node="accordion-item" key={item.value} value={item.value} disabled={item.disabled} className="border-line border-b data-disabled:opacity-50">
          <AccordionPrimitive.Header className="relative flex min-h-14 w-full items-center select-none">
            <AccordionPrimitive.Trigger className="group not-data-disabled:focus-visible:ring-primary/50 flex size-full items-center justify-between rounded text-start outline-none focus-visible:ring-3 data-disabled:cursor-not-allowed">
              <div>{item.title}</div>
              <IconChevronUp size="1em" className="transition-transform group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content data-node="accordion-content" className="data-[state=open]:animate-accordion-slide-down data-[state=closed]:animate-accordion-slide-up text-sm">
            <div className="pb-4">{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
`;
export default code;
