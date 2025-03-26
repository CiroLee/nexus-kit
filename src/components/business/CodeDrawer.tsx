import { cn } from '@/lib/utils';
import Button from '../ui/Button';
import { Drawer, DrawerClose } from '../ui/Drawer';
import { IconX } from '@tabler/icons-react';
import Code from './Code';
import ClientCopyButton from './ClientCopyButton';

interface CodeDrawerProps {
  code: string;
  className?: string;
}
export default function CodeDrawer({ code, className }: CodeDrawerProps) {
  return (
    <Drawer
      placement="right"
      trigger={
        <Button variant="bordered" colors="neutral" className="mb-11">
          Source Code
        </Button>
      }
      className={cn('w-[84%] sm:w-[40%]', className)}>
      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="mb-4 flex items-center justify-between">
          <DrawerClose>
            <Button variant="light" colors="neutral" icon>
              <IconX size={20} />
            </Button>
          </DrawerClose>
          <ClientCopyButton text={code} />
        </div>
        <div className="overflow-auto">
          <Code code={code} />
        </div>
      </div>
    </Drawer>
  );
}
