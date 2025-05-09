import { cn } from '@/lib/utils';
import Button from '../ui/Button';
import { Drawer, DrawerClose } from '../ui/Drawer';
import { IconX } from '@tabler/icons-react';
import Code from './Code';
import ClientCode from './ClientCode';
import ClientCopyButton from './ClientCopyButton';
import { Tabs, TabsContent, TabsItem, TabsList } from '../ui/Tabs';

interface CodeDrawerProps {
  code?: string;
  codeTabs?: { id: string; label: string; content: string }[];
  className?: string;
  isClient?: boolean;
}
export default function CodeDrawer({ code, isClient, codeTabs, className }: CodeDrawerProps) {
  return (
    <Drawer
      placement="right"
      trigger={
        <Button variant="bordered" colors="neutral" className="mb-11">
          Source Code
        </Button>
      }
      className={cn('w-[84%] sm:w-[40%]', className)}>
      <div className="relative grid h-full grid-rows-[auto_1fr] overflow-hidden">
        <DrawerClose>
          <Button variant="light" className="mb-4" colors="neutral" icon>
            <IconX size={20} />
          </Button>
        </DrawerClose>
        {codeTabs?.length ? (
          <Tabs defaultValue={codeTabs[0].id} className="relative overflow-hidden">
            <TabsList>
              {codeTabs.map((tab) => (
                <TabsItem key={tab.id} value={tab.id}>
                  {tab.label}
                </TabsItem>
              ))}
            </TabsList>
            {codeTabs.map((tab) => (
              <TabsContent className="h-full overflow-auto" key={tab.id} value={tab.id}>
                <CodeBox isClient={isClient} code={tab.content} />
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <CodeBox isClient={isClient} code={code || ''} />
        )}
      </div>
    </Drawer>
  );
}

function CodeBox({ isClient, code }: { code: string; isClient?: boolean }) {
  return (
    <div className="relative h-full overflow-auto rounded-md">
      <ClientCopyButton size="sm" asIcon className="absolute top-2 right-2 z-10" text={code} />
      {isClient ? <ClientCode code={code} /> : <Code code={code} />}
    </div>
  );
}
