import { IconLoader } from '@tabler/icons-react';
export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <IconLoader className="animate-spin" size={30} />
    </div>
  );
}
