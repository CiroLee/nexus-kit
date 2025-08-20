import { IconTemperature } from '@tabler/icons-react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import NumberStepper from '@/components/ui/NumberStepper';
import { defaultCode, sizeCode, prefixCode, disabledCode, minMaxCode, stepCode } from '@/codes/demos/code.number-stepper';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'prefix', label: 'prefix' },
  { anchorId: 'disabled', label: 'disabled' },
  { anchorId: 'min-max', label: 'min and max' },
  { anchorId: 'step', label: 'step' },
];

export default async function NumberStepperPage() {
  const sourceCode = await getSourceCode('NumberStepper/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="NumberStepper" description="A stepper component for number inputs, and increase or decrease the value using the stepper buttons." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <NumberStepper className="w-50" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <NumberStepper size="sm" />
            <NumberStepper size="md" />
            <NumberStepper size="lg" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="prefix" title="prefix" codeText={prefixCode} code={<CodeBox code={prefixCode} />}>
          <div className="flex gap-4">
            <NumberStepper className="w-50" prefix="$" />
            <NumberStepper className="w-50" prefix={<IconTemperature className="ml-1.5" size={16} />} />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <NumberStepper disabled className="w-50" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="min-max" title="min and max" codeText={minMaxCode} code={<CodeBox code={minMaxCode} />}>
          <NumberStepper className="w-50" defaultValue={1} min={1} max={10} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="step" title="step" codeText={stepCode} code={<CodeBox code={stepCode} />}>
          <NumberStepper className="w-50" step={2} />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
