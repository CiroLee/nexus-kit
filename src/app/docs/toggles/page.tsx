import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Toggle from '@/components/ui/Toggle';
import { IconItalic } from '@tabler/icons-react';

const navList: AnchorItem[] = [{ anchorId: 'default', label: 'default' }];

export default function TogglePage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Toggle" description="Toggle component is a two-state button that can be either on or off." />
        <PreviewAndCode anchorId="default" title="default" codeText="" code={<CodeBox code={''} />}>
          <Toggle>B</Toggle>
        </PreviewAndCode>
        <PreviewAndCode anchorId="with-icon" title="with icon" codeText="" code={<CodeBox code={''} />}>
          <Toggle>
            <IconItalic size={18} />
            Italic
          </Toggle>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText="" code={<CodeBox code={''} />}>
          <div className="flex items-center gap-4">
            <Toggle size="sm">B</Toggle>
            <Toggle size="md">B</Toggle>
            <Toggle size="lg">B</Toggle>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="variant" title="variant" codeText="" code={<CodeBox code={''} />}>
          <div className="flex items-center gap-4">
            <Toggle variant="light">light</Toggle>
            <Toggle variant="bordered">light</Toggle>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
