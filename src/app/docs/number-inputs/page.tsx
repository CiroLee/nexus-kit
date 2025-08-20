import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeBox from '@/components/business/CodeBox';
import NumberInput from '@/components/ui/NumberInput';
import { IconCurrencyDollar } from '@tabler/icons-react';
import { defaultCode, sizeCode, minMaxCode, stepCode, disabledCode, prefixCode } from '@/codes/demos/code.number-inputs';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'min-max', label: 'min and max' },
  { anchorId: 'step', label: 'step' },
  { anchorId: 'disabled', label: 'disabled' },
  { anchorId: 'prefix', label: 'prefix' },
];

export default async function NumberInputPage() {
  const sourceCode = await getSourceCode('NumberInput/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="NumberInput" description="NumberInput is used to enter a number, and increase or decrease the value using the stepper buttons." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <NumberInput className="w-50" defaultValue={2} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <NumberInput size="sm" />
            <NumberInput size="md" />
            <NumberInput size="lg" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="min-max" title="min and max" codeText={minMaxCode} code={<CodeBox code={minMaxCode} />}>
          <NumberInput min={2} max={20} className="w-50" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="step" title="step" codeText={stepCode} code={<CodeBox code={stepCode} />}>
          <NumberInput step={2} className="w-50" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <NumberInput disabled className="w-50" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="prefix" title="prefix" codeText={prefixCode} code={<CodeBox code={prefixCode} />}>
          <NumberInput className="w-50" prefix={<IconCurrencyDollar size={20} />} />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
