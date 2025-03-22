import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Button from '@/components/ui/Button';
import { Dialog, DialogClose } from '@/components/ui/Dialog';
import { defaultCode, backdropCode, hiddenCode, sizeCode, scrollCode } from '@/codes/code.dialogs';

export default function DialogPage() {
  return (
    <>
      <SectionIntro title="Dialog" description="Dialogs are used to display custom content to the user via a modal" />
      <PreviewAndCode title="default" code={<Code code={defaultCode} />}>
        <Dialog trigger={<Button variant="bordered">open dialog</Button>} title="dialog title" description="This a description...">
          content...
        </Dialog>
      </PreviewAndCode>
      <PreviewAndCode title="backdrop" code={<Code code={backdropCode} />}>
        <div className="flex gap-4">
          <Dialog trigger={<Button variant="bordered">opaque</Button>} backdrop="opaque" title="dialog title" description="This a description...">
            content...
          </Dialog>
          <Dialog trigger={<Button variant="bordered">blur</Button>} backdrop="blur" title="dialog title" description="This a description...">
            content...
          </Dialog>
          <Dialog trigger={<Button variant="bordered">transparent</Button>} backdrop="transparent" title="dialog title" description="This a description...">
            content...
          </Dialog>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="hidden title/description" code={<Code code={hiddenCode} />}>
        <Dialog trigger={<Button variant="bordered">open dialog</Button>} title="Title">
          omitting title/description will not render
        </Dialog>
      </PreviewAndCode>
      <PreviewAndCode title="size" code={<Code code={sizeCode} />}>
        <div className="flex gap-4">
          <Dialog size="sm" trigger={<Button variant="bordered">small</Button>} title="dialog title" description="This a description...">
            content...
          </Dialog>
          <Dialog size="md" trigger={<Button variant="bordered">medium</Button>} title="dialog title" description="This a description...">
            content...
          </Dialog>
          <Dialog size="lg" trigger={<Button variant="bordered">large</Button>} title="dialog title" description="This a description...">
            content...
          </Dialog>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="content scroll" code={<Code code={scrollCode} />}>
        <Dialog trigger={<Button variant="bordered">open dialog</Button>} title="dialog title" description="This a description...">
          {new Array(30).fill(0).map((_, index) => (
            <p key={index}>this is text {index} ...</p>
          ))}
        </Dialog>
      </PreviewAndCode>
      <PreviewAndCode title="custom footer" code={<Code code={scrollCode} />}>
        <div className="flex gap-4">
          <Dialog trigger={<Button variant="bordered">hide footer</Button>} title="dialog title" description="This a description..." hideFooter>
            content...
          </Dialog>
          <Dialog
            trigger={<Button variant="bordered">custom footer</Button>}
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
    </>
  );
}
