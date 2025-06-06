import { IconX } from '@tabler/icons-react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Button from '@/components/ui/Button';
import { Drawer, DrawerClose } from '@/components/ui/Drawer';
import Heading from '@/components/ui/Heading';
import { placementCode, backdropCode, widthCode, heightCode, contentCode } from '@/codes/demos/code.drawers';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'placement',
    label: 'placement',
  },
  {
    anchorId: 'backdrop',
    label: 'backdrop',
  },
  {
    anchorId: 'custom-width',
    label: 'custom width',
  },
  {
    anchorId: 'custom-height',
    label: 'custom height',
  },
  {
    anchorId: 'custom-content',
    label: 'custom content',
  },
];

export default async function DrawerPage() {
  const sourceCode = await getSourceCode('Drawer/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Drawer" description="Drawers are used to display additional content on top of the main content." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="placement" codeText={placementCode} title="placement" code={<CodeBox code={placementCode} />}>
          <div className="flex gap-4">
            <Drawer placement="top" trigger={<Button>top</Button>}>
              content...
            </Drawer>
            <Drawer placement="right" trigger={<Button>right</Button>}>
              content...
            </Drawer>
            <Drawer placement="bottom" trigger={<Button>bottom</Button>}>
              content...
            </Drawer>
            <Drawer placement="left" trigger={<Button>left</Button>}>
              content...
            </Drawer>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="backdrop" codeText={backdropCode} title="backdrop" code={<CodeBox code={backdropCode} />}>
          <div className="flex gap-4">
            <Drawer placement="right" backdrop="opaque" trigger={<Button>opaque</Button>}>
              content...
            </Drawer>
            <Drawer placement="right" backdrop="blur" trigger={<Button>blur</Button>}>
              content...
            </Drawer>
            <Drawer placement="right" backdrop="transparent" trigger={<Button>transparent</Button>}>
              content...
            </Drawer>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-width" codeText={widthCode} title="custom width" code={<CodeBox code={widthCode} />}>
          <Drawer placement="right" width="60%" trigger={<Button>Open Drawer</Button>}>
            width=60%
          </Drawer>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-height" codeText={heightCode} title="custom height" code={<CodeBox code={heightCode} />}>
          <Drawer placement="bottom" height="60%" trigger={<Button>Open Drawer</Button>}>
            height=60%
          </Drawer>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-content" codeText={contentCode} title="custom content" code={<CodeBox code={contentCode} />}>
          <Drawer trigger={<Button>Open Drawer</Button>}>
            <div className="flex items-center justify-between">
              <Heading as="h4">Title</Heading>
              <DrawerClose>
                <Button variant="light" size="sm" pill colors="neutral" asIcon>
                  <IconX size={18} />
                </Button>
              </DrawerClose>
            </div>
            <section className="py-4">content...</section>
          </Drawer>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
