export const defaultCode = `import { Avatar } from "@/components/ui/Avatar";

export default function Page() {
  return (
    <div className="flex items-center gap-3.5">
      <Avatar src="/images/avatar-1.png" alt="avatar 1" />
      <Avatar src="/images/avatar-2.png" alt="avatar 2" rounded />
    </div>
  )
}
`;

export const sizeCode = `import { Avatar } from "@/components/ui/Avatar";

export default function Page() {
  return (
    <div className="flex items-center gap-3.5">
      <Avatar size="sm" src="/images/avatar-1.png" alt="avatar 1" />
      <Avatar size="md" src="/images/avatar-2.png" alt="avatar 2" />
      <Avatar size="lg" src="/images/avatar-3.png" alt="avatar 3" />
      <Avatar size="xl" src="/images/avatar-4.png" alt="avatar 4" />
    </div>
  )
}
`;

export const borderedCode = `import { Avatar } from "@/components/ui/Avatar";

export default function Page() {
  return (
    <div className="flex items-center gap-3.5">
      <Avatar bordered src="/images/avatar-1.png" alt="avatar 1" />
      <Avatar bordered src="/images/avatar-2.png" alt="avatar 2" />
      <Avatar bordered src="/images/avatar-3.png" alt="avatar 3" />
    </div>
  )
}
`;

export const fallbackCode = `import { Avatar } from "@/components/ui/Avatar";
import { IconUserFilled } from '@tabler/icons-react';

export default function Page() {
  return (
    <div className="flex items-center gap-3.5">
    <Avatar alt="avatar 1" fallback="A" />
    <Avatar alt="avatar 2" fallback={<IconUserFilled size={20} />} />
    <Avatar alt="avatar 3" fallbackClassName="!bg-orange-400" fallback={<IconUserFilled size={20} />} />
  </div>
  )
}
`;

export const orientationHCode = `import { Avatar, AvatarGroup } from "@/components/ui/Avatar";

export default function Page() {
  return (
    <AvatarGroup orientation="horizontal">
      <Avatar bordered src="/images/avatar-1.png" alt="avatar 1" />
      <Avatar bordered src="/images/avatar-2.png" alt="avatar 2" />
      <Avatar bordered src="/images/avatar-3.png" alt="avatar 3" />
      <Avatar bordered src="/images/avatar-4.png" alt="avatar 4" />
      <Avatar bordered alt="more" fallback="+2" />
    </AvatarGroup>
  )
}
`;

export const orientationVCode = `import { Avatar, AvatarGroup } from "@/components/ui/Avatar";

export default function Page() {
  return (
    <AvatarGroup orientation="vertical">
      <Avatar bordered src="/images/avatar-1.png" alt="avatar 1" />
      <Avatar bordered src="/images/avatar-2.png" alt="avatar 2" />
      <Avatar bordered src="/images/avatar-3.png" alt="avatar 3" />
      <Avatar bordered src="/images/avatar-4.png" alt="avatar 4" />
      <Avatar bordered alt="more" fallback="+2" />
    </AvatarGroup>
  )
}
`;
