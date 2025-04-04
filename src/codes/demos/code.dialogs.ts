export const defaultCode = `import { Dialog } from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <Dialog trigger={<Button variant="bordered">open dialog</Button>} title="dialog title" description="This a description...">
      content...
    </Dialog>
  )
}
`;

export const backdropCode = `import { Dialog } from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
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
  )
}
`;

export const hiddenCode = `import { Dialog } from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <Dialog trigger={<Button variant="bordered">open dialog</Button>} title="Title">
      omitting title/description will not render
    </Dialog>
  )
}
`;

export const sizeCode = `import { Dialog } from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
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
  )
}
`;

export const scrollCode = `import { Dialog } from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <Dialog trigger={<Button variant="bordered">open dialog</Button>} title="dialog title" description="This a description...">
      {new Array(30).fill(0).map((_, index) => (
        <p key={index}>this is text {index} ...</p>
      ))}
    </Dialog>
  )
}
`;

export const customFooter = `import { Dialog, DialogClose } from "@/components/ui/Dialog";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Dialog trigger={<Button variant="bordered">hide footer</Button>} title="dialog title" description="This a description..." hideFooter>
        custom footer buttons must be wrapped with DialogClose
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
        content...
      </Dialog>
    </div>
  )
}
`;
