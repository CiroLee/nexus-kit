'use client';
import { useState } from 'react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import ClientCode from '@/components/business/ClientCode';
import Button from '@/components/ui/Button';
import { Dialog, DialogClose } from '@/components/ui/Dialog';
import { defaultCode, backdropCode, hiddenCode, sizeCode, scrollCode, customFooter, controlledCode } from '@/codes/demos/code.dialogs';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Code from '@/components/ui/Code';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'backdrop', label: 'backdrop' },
  { anchorId: 'hidden-title', label: 'hidden title/description' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'content-scroll', label: 'content scroll' },
  { anchorId: 'custom-footer', label: 'custom footer' },
  { anchorId: 'controlled-mode', label: 'controlled mode' },
];

export default function DialogPage({ sourceCode }: { sourceCode?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Dialog" description="Dialogs are used to display custom content to the user via a modal." />
        <CodeDrawer isClient code={sourceCode} />
        <PreviewAndCode anchorId="default" codeText={defaultCode} title="default" code={<ClientCode code={defaultCode} />}>
          <Dialog trigger={<Button>open dialog</Button>} title="dialog title" description="This a description...">
            content...
          </Dialog>
        </PreviewAndCode>
        <PreviewAndCode anchorId="backdrop" codeText={backdropCode} title="backdrop" code={<ClientCode code={backdropCode} />}>
          <div className="flex gap-4">
            <Dialog trigger={<Button>opaque</Button>} backdrop="opaque" title="dialog title" description="This a description...">
              content...
            </Dialog>
            <Dialog trigger={<Button>blur</Button>} backdrop="blur" title="dialog title" description="This a description...">
              content...
            </Dialog>
            <Dialog trigger={<Button>transparent</Button>} backdrop="transparent" title="dialog title" description="This a description...">
              content...
            </Dialog>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="hidden-title" codeText={hiddenCode} title="hidden title/description" code={<ClientCode code={hiddenCode} />}>
          <Dialog trigger={<Button>open dialog</Button>} title="Title">
            omitting title/description will not render
          </Dialog>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" codeText={sizeCode} title="size" code={<ClientCode code={sizeCode} />}>
          <div className="flex gap-4">
            <Dialog size="sm" trigger={<Button>small</Button>} title="dialog title" description="This a description...">
              content...
            </Dialog>
            <Dialog size="md" trigger={<Button>medium</Button>} title="dialog title" description="This a description...">
              content...
            </Dialog>
            <Dialog size="lg" trigger={<Button>large</Button>} title="dialog title" description="This a description...">
              content...
            </Dialog>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="content-scroll" codeText={scrollCode} title="content scroll" code={<ClientCode code={scrollCode} />}>
          <Dialog trigger={<Button>open dialog</Button>} title="dialog title" description="This a description...">
            {new Array(30).fill(0).map((_, index) => (
              <p key={index}>this is text {index} ...</p>
            ))}
          </Dialog>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-footer" codeText={customFooter} title="custom footer" code={<ClientCode code={customFooter} />}>
          <div className="flex gap-4">
            <Dialog trigger={<Button>hide footer</Button>} title="dialog title" description="This a description..." hideFooter>
              content...
            </Dialog>
            <Dialog
              trigger={<Button>custom footer</Button>}
              title="dialog title"
              description="This a description..."
              footer={
                <div className="flex gap-4 px-3.5 pt-6">
                  <DialogClose>
                    <Button colors="danger" variant="light">
                      Quit
                    </Button>
                  </DialogClose>
                  <DialogClose>
                    <Button>Submit</Button>
                  </DialogClose>
                </div>
              }>
              custom footer buttons must be wrapped with DialogClose
            </Dialog>
          </div>
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="controlled-mode"
          title="controlled mode"
          description={
            <p>
              controlled Dialog must use <Code className="text-foreground">open</Code> and <Code className="text-foreground">onOpenChange</Code> to control the dialog visibility.
            </p>
          }
          codeText={controlledCode}
          code={<ClientCode code={controlledCode} />}>
          <Button onClick={() => setOpen(true)}>open dialog</Button>
          <Dialog open={open} onOpenChange={setOpen} title="dialog title" description="This a description...">
            this is a controlled dialog
          </Dialog>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
