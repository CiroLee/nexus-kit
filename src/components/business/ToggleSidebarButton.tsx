import { IconMenuDeep } from '@tabler/icons-react';
import Button from '../ui/Button';
import { useSidebar } from '@/contexts/doc-context';

export default function ToggleSidebarButton({ className }: { className?: string }) {
  const { toggleSidebar } = useSidebar();
  return (
    <Button variant="light" size="sm" colors="neutral" className={className} asIcon onClick={toggleSidebar}>
      <IconMenuDeep size={20} />
    </Button>
  );
}
