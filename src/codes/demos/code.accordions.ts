export const defaultCode = `import Accordion, { type AccordionItem } from "@/components/ui/Accordion";

const accordionItems: AccordionItem[] = [
  {
    value: 'item-1',
    title: 'Accordion Item 1',
    content: 'Accordion Item 1 Content',
  },
  {
    value: 'item-2',
    title: 'Accordion Item 2',
    content: 'Accordion Item 2 Content',
  },
  {
    value: 'item-3',
    title: 'Accordion Item 3',
    content: 'Accordion Item 3 Content',
  },
];

export default function Page() {
  return (
    <Accordion type="single" collapsible items={accordionItems} className="max-w-100" />
  )
}`;

export const multipleCode = `import Accordion, { type AccordionItem } from "@/components/ui/Accordion";

const accordionItems: AccordionItem[] = [
  {
    value: 'item-1',
    title: 'Accordion Item 1',
    content: 'Accordion Item 1 Content',
  },
  {
    value: 'item-2',
    title: 'Accordion Item 2',
    content: 'Accordion Item 2 Content',
  },
  {
    value: 'item-3',
    title: 'Accordion Item 3',
    content: 'Accordion Item 3 Content',
  },
];

export default function Page() {
  return (
    <Accordion type="multiple" items={accordionItems} className="max-w-100" />
  )
}`;

export const disabledCode = `import Accordion, { type AccordionItem } from "@/components/ui/Accordion";

const accordionItems: AccordionItem[] = [
  {
    value: 'item-1',
    title: 'Accordion Item 1',
    content: 'Accordion Item 1 Content',
  },
  {
    value: 'item-2',
    title: 'Accordion Item 2',
    content: 'Accordion Item 2 Content',
  },
  {
    value: 'item-3',
    title: 'Accordion Item 3',
    content: 'Accordion Item 3 Content',
    disabled: true,
  },
];

export default function Page() {
  return (
    <Accordion type="single" collapsible items={accordionItems} className="max-w-100" />
  )
}`;

export const withIconCode = `import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import { IconAccessible, IconAlarm, IconArmchair } from '@tabler/icons-react';

const accordionItems: AccordionItem[] = [
  {
    value: 'item-1',
    title: (
      <div className="flex items-center gap-1">
        <IconAccessible size={20} />
        Accessible
      </div>
    ),
    content: 'Accordion Item 1 Content',
  },
  {
    value: 'item-2',
    title: (
      <div className="flex items-center gap-1">
        <IconAlarm size={20} />
        Alarm
      </div>
    ),
    content: 'Accordion Item 2 Content',
  },
  {
    value: 'item-3',
    title: (
      <div className="flex items-center gap-1">
        <IconArmchair size={20} />
        Armchair
      </div>
    ),
    content: 'Accordion Item 3 Content',
  },
];

export default function Page() {
  return (
    <Accordion type="single" collapsible items={accordionItems} className="max-w-100" />
  )
}`;
