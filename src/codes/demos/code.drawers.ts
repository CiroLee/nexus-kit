export const placementCode = `import { Drawer } from "@/components/ui/Drawer";

export default function Page() {
const [placement, setPlacement] = useState<Placement>('top');
  return (
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
  )
}
`;

export const backdropCode = `import { Drawer } from "@/components/ui/Drawer";

export default function Page() {
const [placement, setPlacement] = useState<Placement>('top');
  return (
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
  )
}
`;

export const widthCode = `import { Drawer } from "@/components/ui/Drawer";

export default function Page() {
const [placement, setPlacement] = useState<Placement>('top');
  return (
    <Drawer placement="right" width="60%" trigger={<Button>Open Drawer</Button>}>
      width=60%
    </Drawer>
  )
}
`;

export const heightCode = `import { Drawer } from "@/components/ui/Drawer";

export default function Page() {
const [placement, setPlacement] = useState<Placement>('top');
  return (
    <Drawer placement="bottom" height="60%" trigger={<Button>Open Drawer</Button>}>
      height=60%
    </Drawer>
  )
}
`;

export const contentCode = `import { IconX } from '@tabler/icons-react';
import { Drawer, DrawerClose } from "@/components/ui/Drawer";

export default function Page() {
const [placement, setPlacement] = useState<Placement>('top');
  return (
    <Drawer trigger={<Button>Open Drawer</Button>}>
      <div className="flex items-center justify-between">
        <Heading as="h4">Title</Heading>
        <DrawerClose>
          <Button variant="light" size="sm" rounded colors="neutral" icon>
            <IconX size={18} />
          </Button>
        </DrawerClose>
      </div>
      <section className="py-4">content...</section>
    </Drawer>
  )
}
`;
