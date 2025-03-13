'use client';
import { useState } from 'react';
import { useIsClient } from 'usehooks-ts';
import { cva } from 'class-variance-authority';
import { Popover } from 'radix-ui';
import { AnimatePresence, motion } from 'motion/react';
import Button from '../ui/Button';
import { useTheme } from 'next-themes';
import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react';

const item = cva('flex items-center gap-1 rounded p-2 cursor-default transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700');
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
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button variant="ghost" icon>
          {themeMap[theme as keyof typeof themeMap]}
        </Button>
      </Popover.Trigger>
      <AnimatePresence>
        {open ? (
          <Popover.Portal forceMount>
            <Popover.Content sideOffset={8} align="end" className="z-30">
              <motion.div className="border-line bg-background rounded-md border p-1" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
                <div className={item()} onClick={() => handleSetTheme('light')}>
                  <IconSun size={20} />
                  Light
                </div>
                <div className={item()} onClick={() => handleSetTheme('dark')}>
                  <IconMoon size={18} />
                  Dark
                </div>
                <div className={item()} onClick={() => handleSetTheme('system')}>
                  <IconDeviceDesktop size={18} />
                  System
                </div>
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        ) : null}
      </AnimatePresence>
    </Popover.Root>
  );
}
