import { useIsClient } from 'usehooks-ts';
import { cva } from 'class-variance-authority';
import { DropdownMenu } from 'radix-ui';
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
  const isClient = useIsClient();
  const { theme, setTheme } = useTheme();

  if (!isClient) return null;
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="light" colors="neutral" size="sm" icon>
          {themeMap[theme as keyof typeof themeMap]}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={10}
          align="end"
          className="border-line bg-background data-[state=open]:animate-zoom-fade-in data-[state=closed]:animate-zoom-fade-out z-(--popup) rounded-md border p-1 outline-none">
          <DropdownMenu.Item className={item()} onSelect={() => setTheme('light')}>
            <IconSun size={18} />
            Light
          </DropdownMenu.Item>
          <DropdownMenu.Item className={item()} onClick={() => setTheme('dark')}>
            <IconMoon size={18} />
            Dark
          </DropdownMenu.Item>
          <DropdownMenu.Item className={item()} onClick={() => setTheme('system')}>
            <IconDeviceDesktop size={18} />
            System
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
