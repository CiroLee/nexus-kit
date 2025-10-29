export const defaultCode = `import { useState } from "react";
import NativeDialog from "@/components/ui/NativeDialog";
import { Button } from '@/components/ui/Button';

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <NativeDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Title"
        description="This is a description..."
        onCancel={() => {
          console.log('NativeDialog: you click cancel');
        }}
        onConfirm={() => {
          console.log('nativeDialog: you click confirm');
        }}>
        content...
      </NativeDialog>
    </div>
  )
}`;

export const backdropCode = `import { useState } from "react";
import NativeDialog from "@/components/ui/NativeDialog";
import { Button } from '@/components/ui/Button';

export default function Page() {
  const [open, setOpen] = useState(false);
  const [backdrop, setBackdrop] = useState<'opaque' | 'blur' | 'transparent'>('opaque');
  const openDialog = (backdrop: 'opaque' | 'blur' | 'transparent') => {
    setBackdrop(backdrop);
    setOpen(true);
  }
  return (
    <div>
      <div className="flex gap-4">
        <Button onClick={() => openDialog('opaque')}>opaque</Button>
        <Button onClick={() => openDialog('blur')}>blur</Button>
        <Button onClick={() => openDialog('transparent')}>transparent</Button>
      </div>
      <NativeDialog open={open} backdrop={backdrop} onClose={() => setOpen(false)} title="Title" description="This is a description...">content...</NativeDialog>
    </div>
  )
}`;

export const sizeCode = `import { useState } from "react";
import NativeDialog from "@/components/ui/NativeDialog";
import { Button } from '@/components/ui/Button';

export default function Page() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const openDialog = (size: 'sm' | 'md' | 'lg') => {
    setSize(size);
    setOpen(true);
  }
  return (
    <div>
      <div className="flex gap-4">
        <Button onClick={() => openDialog('sm')}>Small</Button>
        <Button onClick={() => openDialog('md')}>Medium</Button>
        <Button onClick={() => openDialog('lg')}>Large</Button>
      </div>
      <NativeDialog open={open} size={size} onClose={() => setOpen(false)} title="Title" description="This is a description...">content...</NativeDialog>
    </div>
  )
}`;

export const hideDescCode = `import { useState } from "react";
import NativeDialog from "@/components/ui/NativeDialog";
import { Button } from '@/components/ui/Button';

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
       <NativeDialog open={open} onClose={() => setOpen(false)} title="Title">omitting title/description will not render</NativeDialog>
    </div>
  )
}`;

export const scrollContentCode = `import { useState } from "react";
import NativeDialog from "@/components/ui/NativeDialog";
import { Button } from '@/components/ui/Button';

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
       <NativeDialog open={open} onClose={() => setOpen(false)} title="Title" description="This is a description...">
         {new Array(30).fill(0).map((_, index) => (
            <p key={index}>this is text {index} ...</p>
          ))}
       </NativeDialog>
    </div>
  )
}`;

export const hideFooterCode = `import { useState } from "react";
import NativeDialog from "@/components/ui/NativeDialog";
import { Button } from '@/components/ui/Button';

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
       <NativeDialog hideFooter open={open} onClose={() => setOpen(false)} title="Title" description="This is a description...">content...</NativeDialog>
    </div>
  )
}`;

export const customFooterCode = `import { useState } from "react";
import NativeDialog from "@/components/ui/NativeDialog";
import { Button } from '@/components/ui/Button';

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
       <NativeDialog
          open={open}
          title="Title"
          description="this is description..."
          onClose={() => setOpen(false)}
          footer={
            <div className="flex gap-4 px-3.5 pt-6">
              <Button colors="danger" variant="light" onClick={() => setOpen(false)}>
                Quit
              </Button>
              <Button onClick={() => setOpen(false)}>Submit</Button>
            </div>
          }>
          content...
        </NativeDialog>
    </div>
  )
}`;
