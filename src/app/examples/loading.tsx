import { IconLoader } from '@tabler/icons-react';
export default function Loading() {
  return (
    <div className="flex size-full items-center justify-center">
      <IconLoader className="animate-spin" size={20} />
    </div>
  );
}
