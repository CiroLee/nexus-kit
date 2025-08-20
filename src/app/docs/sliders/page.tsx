import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Slider from '@/components/ui/Slider';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { defaultCode, disabledCode, stepCode, colorsCode, sizeCode, verticalCode, rangeCode } from '@/codes/demos/code.sliders';
import { getSourceCode } from '@/app/api/github';
const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'disabled',
    label: 'disabled',
  },
  {
    anchorId: 'step',
    label: 'step',
  },
  {
    anchorId: 'colors',
    label: 'colors',
  },
  {
    anchorId: 'size',
    label: 'size',
  },
  {
    anchorId: 'orientation',
    label: 'orientation',
  },
  {
    anchorId: 'range-slider',
    label: 'range slider',
  },
];
export default async function SlidersPage() {
  const sourceCode = await getSourceCode('Slider/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Slider" description="Slider allows users to select values within a range." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Slider defaultValue={[40]} className="w-80" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <Slider defaultValue={[40]} disabled className="w-80" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="step" title="step" codeText={stepCode} code={<CodeBox code={stepCode} />}>
          <Slider defaultValue={[40]} step={20} className="w-80" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="colors" title="colors" codeText={colorsCode} code={<CodeBox code={colorsCode} />}>
          <div className="space-y-6">
            <Slider defaultValue={[40]} colors="primary" className="w-80" />
            <Slider defaultValue={[40]} colors="secondary" className="w-80" />
            <Slider defaultValue={[40]} colors="warning" className="w-80" />
            <Slider defaultValue={[40]} colors="danger" className="w-80" />
            <Slider defaultValue={[40]} colors="neutral" className="w-80" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="space-y-6">
            <Slider defaultValue={[40]} size="sm" className="w-80" />
            <Slider defaultValue={[40]} size="md" className="w-80" />
            <Slider defaultValue={[40]} size="lg" className="w-80" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="orientation" title="orientation" description="orientation='vertical'" codeText={verticalCode} code={<CodeBox code={verticalCode} />}>
          <Slider defaultValue={[40]} orientation="vertical" className="h-60" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="range-slider" title="range slider" codeText={rangeCode} code={<CodeBox code={rangeCode} />}>
          <Slider defaultValue={[40, 80]} className="w-80" />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
