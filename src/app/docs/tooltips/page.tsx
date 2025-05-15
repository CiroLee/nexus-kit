import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Button from '@/components/ui/Button';
import ToolTip from '@/components/ui/Tooltip';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeDrawer from '@/components/business/CodeDrawer';
import { defaultCode, placementCode, offsetCode, hiddenArrowCode } from '@/codes/demos/code.tooltips';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'placement',
    label: 'placement',
  },
  {
    anchorId: 'offset',
    label: 'offset',
  },
  {
    anchorId: 'hidden-arrow',
    label: 'hidden arrow',
  },
];

export default async function TooltipPage() {
  const sourceCode = await getSourceCode('Tooltip/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Tooltip" description="Tooltip is a floating text that appears when a user hovers over an element." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <ToolTip trigger={<Button>Hover Me</Button>}>tooltip</ToolTip>
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="placement"
          title="placement"
          description="use side and align props to change the position of the tooltip"
          codeText={placementCode}
          code={<CodeBox code={placementCode} />}>
          <ToolTip side="right" align="end" trigger={<Button>Hover Me</Button>}>
            tooltip
          </ToolTip>
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="offset"
          title="offset"
          description="use sideOffset and alignOffset props to change the offset of the tooltip"
          codeText={offsetCode}
          code={<CodeBox code={offsetCode} />}>
          <ToolTip side="right" align="end" sideOffset={10} trigger={<Button>Hover Me</Button>}>
            tooltip
          </ToolTip>
        </PreviewAndCode>
        <PreviewAndCode anchorId="hidden-arrow" title="hidden arrow" codeText={hiddenArrowCode} code={<CodeBox code={hiddenArrowCode} />}>
          <ToolTip hiddenArrow trigger={<Button>Hover Me</Button>}>
            tooltip
          </ToolTip>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
