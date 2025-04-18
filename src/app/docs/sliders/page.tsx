import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Slider from '@/components/ui/Slider';
import Code from '@/components/business/Code';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import sourceCode from '@/codes/sources/source.slider';
import { defaultCode, disabledCode, stepCode, colorsCode, sizeCode, verticalCode, rangeCode } from '@/codes/demos/code.sliders';
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
export default function SlidersPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Slider" description="Slider allows users to select values within a range" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Slider defaultValue={[40]} className="max-w-100" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<Code code={disabledCode} />}>
          <Slider defaultValue={[40]} disabled className="max-w-100" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="step" title="step" codeText={stepCode} code={<Code code={stepCode} />}>
          <Slider defaultValue={[40]} step={20} className="max-w-100" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="colors" title="colors" codeText={colorsCode} code={<Code code={colorsCode} />}>
          <div className="space-y-6">
            <Slider defaultValue={[40]} colors="primary" className="max-w-100" />
            <Slider defaultValue={[40]} colors="secondary" className="max-w-100" />
            <Slider defaultValue={[40]} colors="warning" className="max-w-100" />
            <Slider defaultValue={[40]} colors="danger" className="max-w-100" />
            <Slider defaultValue={[40]} colors="neutral" className="max-w-100" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<Code code={sizeCode} />}>
          <div className="space-y-6">
            <Slider defaultValue={[40]} size="sm" className="max-w-100" />
            <Slider defaultValue={[40]} size="md" className="max-w-100" />
            <Slider defaultValue={[40]} size="lg" className="max-w-100" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="orientation" title="orientation" description="orientation='vertical'" codeText={verticalCode} code={<Code code={verticalCode} />}>
          <Slider defaultValue={[40]} orientation="vertical" className="h-60" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="range-slider" title="range slider" codeText={rangeCode} code={<Code code={rangeCode} />}>
          <Slider defaultValue={[40, 80]} className="max-w-100" />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
