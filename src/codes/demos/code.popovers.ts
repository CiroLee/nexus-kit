export const defaultCode = `import { Popover, PopoverClose } from '@/components/ui/Popover';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';

export default function Page() {
  return (
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
  )
}`;

export const placementCode = `import { Popover } from '@/components/ui/Popover';

export default function Page() {
  return (
    <Popover side="right" align="end" trigger={<Button>Click Me</Button>}>popover content</Popover>
  )
}`;

export const offsetCode = `import { Popover } from '@/components/ui/Popover';

export default function Page() {
  return (
    <Popover sideOffset={10} trigger={<Button>Click Me</Button>}>popover content</Popover>
  )
}`;

export const hiddenArrowCode = `import { Popover } from '@/components/ui/Popover';

export default function Page() {
  return (
   <Popover hiddenArrow trigger={<Button>Click Me</Button>}>popover content</Popover>
  )
}`;
