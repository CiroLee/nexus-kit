import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import { Popover, PopoverClose } from '@/components/ui/Popover';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeDrawer from '@/components/business/CodeDrawer';
import { defaultCode, placementCode, offsetCode, hiddenArrowCode } from '@/codes/demos/code.popovers';
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
export default async function PopoverPage() {
  const sourceCode = await getSourceCode('Popover/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Popover" description="Popover is a component that displays a popup content when the user clicks on an element." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Popover side="top" align="start" trigger={<Button colors="danger">Delete</Button>}>
            <p className="font-semibold">Alert</p>
            <p className="text-sm">Make sure to Delete this item?</p>
            <Divider className="mt-2 mb-3" />
            <div className="flex justify-end gap-2">
              <PopoverClose>
                <Button size="sm" variant="light" colors="neutral">
                  Later
                </Button>
              </PopoverClose>
              <PopoverClose>
                <Button size="sm">Confirm</Button>
              </PopoverClose>
            </div>
          </Popover>
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="placement"
          title="placement"
          description="use side and align props to change the position of the Popover"
          codeText={placementCode}
          code={<Code code={placementCode} />}>
          <Popover side="right" align="end" trigger={<Button>Click Me</Button>}>
            popover content
          </Popover>
        </PreviewAndCode>
        <PreviewAndCode anchorId="offset" title="offset" description="use sideOffset and alignOffset props to change the offset of the popover" codeText={offsetCode} code={<Code code={offsetCode} />}>
          <Popover sideOffset={10} trigger={<Button>Click Me</Button>}>
            popover content
          </Popover>
        </PreviewAndCode>
        <PreviewAndCode anchorId="hidden-arrow" title="hidden arrow" codeText={hiddenArrowCode} code={<Code code={hiddenArrowCode} />}>
          <Popover hiddenArrow trigger={<Button>Click Me</Button>}>
            popover content
          </Popover>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
