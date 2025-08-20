import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Select, { type SelectItem } from '@/components/ui/Select';
import CodeDrawer from '@/components/business/CodeDrawer';
import { IconFilter, IconSortAZ } from '@tabler/icons-react';
import { defaultCode, sizeCode, disabledCode, groupCode, prefixCode } from '@/codes/demos/code.selects';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'disabled', label: 'disabled' },
  { anchorId: 'group', label: 'group' },
];

const selectItems: SelectItem[] = [
  {
    id: '1',
    label: 'Apple',
    value: 'apple',
  },
  {
    id: '2',
    label: 'Orange',
    value: 'orange',
  },
  {
    id: '3',
    label: 'Banana',
    value: 'banana',
  },
  {
    id: '4',
    label: 'Pineapple',
    value: 'pineapple',
  },
];
const selectItems2: SelectItem[] = [
  {
    id: 'apple',
    label: 'apple',
    value: 'apple',
  },
  {
    id: 'orange',
    label: 'orange',
    value: 'orange',
    disabled: true,
  },
  {
    id: 'banana',
    label: 'banana',
    value: 'banana',
  },
];
const groupedItems: SelectItem[] = [
  {
    id: 'fruits',
    title: 'Fruits',
    options: selectItems,
  },
  {
    id: 'deserts',
    title: 'Deserts',
    options: [
      {
        id: 'tiramisu',
        label: 'Tiramisu',
        value: 'tiramisu',
      },
      {
        id: 'cheesecake',
        label: 'Cheesecake',
        value: 'cheesecake',
      },
      {
        id: 'macaron',
        label: 'Macaron',
        value: 'macaron',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    options: [
      {
        id: 'bubble tea',
        label: 'Bubble Tea',
        value: 'bubble-tea',
      },
      {
        id: 'lemonade',
        label: 'Lemonade',
        value: 'lemonade',
      },
      {
        id: 'iced-americano',
        label: 'Iced Americano',
        value: 'iced-americano',
      },
    ],
  },
];

export default async function SelectPage() {
  const sourceCode = await getSourceCode('Select/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Select" description="Selects are used to select one option from a list." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Select className="w-60" placeholder="select sth..." items={selectItems} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="grid items-center gap-4 md:grid-cols-3">
            <Select size="sm" placeholder="small size..." items={selectItems} />
            <Select size="md" placeholder="medium size..." items={selectItems} />
            <Select size="lg" placeholder="large size..." items={selectItems} />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="prefix" title="prefix" codeText={prefixCode} code={<CodeBox code={prefixCode} />}>
          <div className="grid items-center gap-4 md:grid-cols-3">
            <Select size="sm" prefix="$" placeholder="select sth..." items={selectItems} />
            <Select size="md" prefix={<IconFilter size={18} />} placeholder="select sth..." items={selectItems} />
            <Select size="lg" prefix={<IconSortAZ size={24} />} placeholder="select sth..." items={selectItems} />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <div className="grid items-center gap-4 md:grid-cols-2">
            <Select disabled placeholder="whole select disabled" items={selectItems} />
            <Select placeholder="item disabled" items={selectItems2} />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="group" title="group" codeText={groupCode} code={<CodeBox code={groupCode} />}>
          <Select className="min-w-70" placeholder="select you what like" items={groupedItems} />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
