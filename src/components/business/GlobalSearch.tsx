'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { Command } from 'cmdk';
import { Dialog } from '../ui/Dialog';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Kbd from '../ui/Kbd';
import { isWindows } from '@/utils/utils';
import { navConfig } from '@/app/docs/config';

const commandGroup = cva('[&_[cmdk-group-items]]:pt-2 [&_[cmdk-group-heading]]:text-description [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:p-2');

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const isWindowPC = isWindows();
  const router = useRouter();
  const handleCommandSelect = (href?: string) => {
    if (href) {
      setOpen(false);
      router.push(href);
    }
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  return (
    <Dialog
      className="sm:max-w-140 [&>[data-slot=dialog-children]]:max-h-[unset] [&>[data-slot=dialog-children]]:overflow-hidden"
      open={open}
      onOpenChange={setOpen}
      hideCloseButton
      hideFooter
      trigger={
        <Button variant="solid" colors="neutral" size="sm" className="bg-neutral/40 not-disabled:active:bg-neutral/60 w-50 justify-between px-1.5">
          <span className="text-xs">Search documentations...</span>
          <div className="flex items-center gap-1">
            <Kbd keys={isWindowPC ? [] : ['command']}>{isWindowPC && 'Ctrl'} K</Kbd>
          </div>
        </Button>
      }>
      <Command label="global search" className="hidden-scrollbar relative top-11.5 h-100 overflow-y-auto">
        <Command.Input className="bg-background fixed top-4 w-[calc(100%_-_var(--spacing)*3.5*2)]" asChild placeholder="Search documentations...">
          <Input size="sm" />
        </Command.Input>
        <Command.List className="outline-none">
          <Command.Empty className="text-description py-6 text-center text-sm">No results found</Command.Empty>
          {navConfig.map((nav) => {
            if (nav.children?.length) {
              return (
                <Command.Group key={nav.key} heading={nav.title} className={commandGroup()}>
                  {nav.children.map((item) => (
                    <CommandItem key={item.name} value={item.name} onSelect={() => handleCommandSelect(item.href)}>
                      {item.name}
                    </CommandItem>
                  ))}
                </Command.Group>
              );
            }
            return (
              <CommandItem key={nav.key} onSelect={() => handleCommandSelect(nav?.href)}>
                {nav.title}
              </CommandItem>
            );
          })}
        </Command.List>
      </Command>
    </Dialog>
  );
}

const commandItem = cva('p-2 flex items-center group justify-between rounded text-sm data-[selected=true]:bg-neutral/50');
function CommandItem({ className, children, ...props }: React.ComponentPropsWithRef<typeof Command.Item>) {
  return (
    <Command.Item className={commandItem({ className })} {...props}>
      {children}
      <Kbd keys={['enter']} className="text-description hidden size-5 items-center justify-center text-[10px] group-data-[selected=true]:flex" />
    </Command.Item>
  );
}
