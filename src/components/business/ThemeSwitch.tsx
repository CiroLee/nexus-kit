'use client';
import { useState } from 'react';
import { useIsClient } from 'usehooks-ts';
import { cva } from 'class-variance-authority';
import { DropdownMenu } from 'radix-ui';
import { AnimatePresence, motion } from 'motion/react';
import Button from '../ui/Button';
import { useTheme } from 'next-themes';
import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react';

const item = cva('flex items-center outline-none gap-1 text-sm rounded p-2 cursor-default transition-colors focus:bg-primary focus:text-white');
const themeMap = {
  light: <IconSun size={22} />,
  dark: <IconMoon size={20} />,
  system: <IconDeviceDesktop size={20} />,
};
export default function ThemeSwitch() {
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();
  const { theme, setTheme } = useTheme();

  const handleSetTheme = (theme: string) => {
    setTheme(theme);
    setOpen(false);
  };

  if (!isClient) return null;
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <Button variant="light" colors="neutral" size="sm" icon>
          {themeMap[theme as keyof typeof themeMap]}
        </Button>
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {open ? (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content sideOffset={8} align="end" className="z-(--popup) outline-none">
              <motion.div className="border-line bg-background rounded-md border p-1" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
                <DropdownMenu.Item className={item()} onSelect={() => handleSetTheme('light')}>
                  <IconSun size={18} />
                  Light
                </DropdownMenu.Item>
                <DropdownMenu.Item className={item()} onClick={() => handleSetTheme('dark')}>
                  <IconMoon size={18} />
                  Dark
                </DropdownMenu.Item>
                <DropdownMenu.Item className={item()} onClick={() => handleSetTheme('system')}>
                  <IconDeviceDesktop size={18} />
                  System
                </DropdownMenu.Item>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        ) : null}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
}
