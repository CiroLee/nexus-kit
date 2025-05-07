export const defaultCode = `import AlertDialog from '@/components/ui/AlertDialog';
import Button from '@/components/ui/Button';

export default function Page() {
  return (
    <>
      <AlertDialog trigger={<Button>delete item</Button>} title="Warning" description="Are you sure you want to delete this item?" />
    </>
  )
}
`;

export const backdropCode = `import AlertDialog from '@/components/ui/AlertDialog';
import Button from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <AlertDialog backdrop="opaque" trigger={<Button>opaque</Button>} title="Warning" description="Are you sure you want to delete this item?" />
      <AlertDialog backdrop="blur" trigger={<Button>blur</Button>} title="Warning" description="Are you sure you want to delete this item?" />
      <AlertDialog backdrop="transparent" trigger={<Button>transparent</Button>} title="Warning" description="Are you sure you want to delete this item?" />
    </div>
  )
}
`;

export const sizeCode = `import AlertDialog from '@/components/ui/AlertDialog';
import Button from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <AlertDialog size="sm" trigger={<Button>small</Button>} title="Warning" description="Are you sure you want to delete this item?" />
      <AlertDialog size="md" trigger={<Button>medium</Button>} title="Warning" description="Are you sure you want to delete this item?" />
      <AlertDialog size="lg" trigger={<Button>large</Button>} title="Warning" description="Are you sure you want to delete this item?" />
    </div>
  )
}
`;

export const customFooterCode = `import AlertDialog, { AlertDialogAction, AlertDialogCancel } from '@/components/ui/AlertDialog';
import Button from '@/components/ui/Button';

export default function Page() {
  return (
    <>
      <AlertDialog
        trigger={<Button>delete item</Button>}
        title="Warning"
        description="Are you sure you want to delete this item?"
        footer={
          <div className="flex gap-4 px-3.5 pt-6">
            <AlertDialogCancel>
              <Button colors="danger" variant="light">
                Quit
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction>
              <Button>Submit</Button>
            </AlertDialogAction>
          </div>
        }
      />
    </>
  )
}
`;
