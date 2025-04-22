import { IconAccessible, IconAlarm, IconArmchair } from '@tabler/icons-react';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '@/components/business/SectionIntro';
import Code from '@/components/business/Code';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { type AnchorItem } from '@/components/business/OnThisPage';
import Accordion, { type AccordionItem } from '@/components/ui/Accordion';
import sourceCode from '@/codes/sources/source.accordion';
import { defaultCode, multipleCode, disabledCode, withIconCode } from '@/codes/demos/code.accordions';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'multiple', label: 'multiple' },
  { anchorId: 'disabled', label: 'disabled' },
  { anchorId: 'with-icon', label: 'with icon' },
];

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
const accordionItems2: AccordionItem[] = [
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

const accordionItems3: AccordionItem[] = [
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
export default function AccordionPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Accordion" description="Accordion displays interactive vertical tabs where each clickable heading displays its corresponding content panel below it." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Accordion type="single" collapsible items={accordionItems} className="max-w-100" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="multiple" title="multiple" codeText={multipleCode} code={<Code code={multipleCode} />}>
          <Accordion type="multiple" items={accordionItems} className="max-w-100" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<Code code={disabledCode} />}>
          <Accordion type="single" collapsible items={accordionItems2} className="max-w-100" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="with-icon" title="with icon" codeText={withIconCode} code={<Code code={withIconCode} />}>
          <Accordion type="single" collapsible items={accordionItems3} className="max-w-100" />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
