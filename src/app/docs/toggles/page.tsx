import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Toggle from '@/components/ui/Toggle';
import { IconItalic } from '@tabler/icons-react';
import { getSourceCode } from '@/app/api/github';
import { defaultCode, withIconCode, sizeCode, variantCode, disabledCode } from '@/codes/demos/code.toggles';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'with-icon', label: 'with icon' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'variant', label: 'variant' },
  { anchorId: 'disabled', label: 'disabled' },
];

export default async function TogglePage() {
  const sourceCode = await getSourceCode('Toggle/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Toggle" description="Toggle component is a two-state button that can be either on or off." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Toggle>B</Toggle>
        </PreviewAndCode>
        <PreviewAndCode anchorId="with-icon" title="with icon" codeText={withIconCode} code={<CodeBox code={withIconCode} />}>
          <Toggle>
            <IconItalic size={18} />
            Italic
          </Toggle>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <Toggle size="sm">B</Toggle>
            <Toggle size="md">B</Toggle>
            <Toggle size="lg">B</Toggle>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="variant" title="variant" codeText={variantCode} code={<CodeBox code={variantCode} />}>
          <div className="flex items-center gap-4">
            <Toggle variant="light">light</Toggle>
            <Toggle variant="bordered">bordered</Toggle>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <Toggle disabled>disabled</Toggle>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
