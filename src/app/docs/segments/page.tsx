import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Segment, { type Option } from '@/components/ui/Segment';
import { IconBrandReact, IconBrandVue, IconBrandAngular } from '@tabler/icons-react';
import CodeDrawer from '@/components/business/CodeDrawer';
import { defaultCode, sizeCode, equaledWidthCode, disabledCode, widthIconCode } from '@/codes/demos/code.segments';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'equaled-width', label: 'equaledWidth' },
  { anchorId: 'disabled-item', label: 'disabled' },
  { anchorId: 'with-icon', label: 'with icon' },
];

const option: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];

const option2: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue', disabled: true },
  { label: 'Angular', value: 'angular' },
];
const option3: Option[] = [
  {
    label: (
      <>
        <IconBrandReact size={16} />
        React
      </>
    ),
    value: 'react',
  },
  {
    label: (
      <>
        <IconBrandVue size={16} />
        Vue
      </>
    ),
    value: 'vue',
  },
  {
    label: (
      <>
        <IconBrandAngular size={16} />
        Angular
      </>
    ),
    value: 'angular',
  },
];

export default async function SegmentPage() {
  const sourceCode = await getSourceCode('Segment/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Segment" description="Segment is a controller to switch between different options." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Segment option={option} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <Segment size="sm" option={option} />
            <Segment size="md" option={option} />
            <Segment size="lg" option={option} />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="equaled-width" title="equaledWidth" codeText={equaledWidthCode} code={<CodeBox code={equaledWidthCode} />}>
          <Segment equaledWidth option={option} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled-item" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <Segment defaultValue="react" option={option2} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="with-icon" title="with icon" codeText={widthIconCode} code={<CodeBox code={widthIconCode} />}>
          <Segment option={option3} />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
