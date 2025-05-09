export const defaultCode = `import HoverCard from "@/components/ui/HoverCard";
import Avatar from "@/components/ui/Avatar";
import Link from "@/components/ui/Link";
import { IconExternalLink } from '@tabler/icons-react';

export default function Page() {
  return (
     <HoverCard
        className="min-w-55"
        align="start"
        trigger={
          <Link href="#">
            Sam John
            <IconExternalLink size={16} />
          </Link>
        }>
        <div className="flex gap-3">
          <Avatar src="/images/avatar-1.png" className="size-11" />
          <div>
            <p className="font-semibold">Sam John</p>
            <p className="text-description text-sm">UX Designer</p>
            <div className="text-description/70 mt-2 space-x-2 text-sm">
              <span>following: 123</span>
              <span>followers: 456</span>
            </div>
          </div>
        </div>
      </HoverCard>
  )
}
`;

export const placementCode = `import HoverCard from "@/components/ui/HoverCard";
import Avatar from "@/components/ui/Avatar";
import Link from "@/components/ui/Link";
import { IconExternalLink } from '@tabler/icons-react';

export default function Page() {
  return (
     <HoverCard
        className="min-w-55"
        side="top" 
        align="center"
        trigger={
          <Link href="#">
            Sam John
            <IconExternalLink size={16} />
          </Link>
        }>
        <div className="flex gap-3">
          <Avatar src="/images/avatar-1.png" className="size-11" />
          <div>
            <p className="font-semibold">Sam John</p>
            <p className="text-description text-sm">UX Designer</p>
            <div className="text-description/70 mt-2 space-x-2 text-sm">
              <span>following: 123</span>
              <span>followers: 456</span>
            </div>
          </div>
        </div>
      </HoverCard>
  )
}
`;

export const offsetCode = `import HoverCard from "@/components/ui/HoverCard";
import Avatar from "@/components/ui/Avatar";
import Link from "@/components/ui/Link";
import { IconExternalLink } from '@tabler/icons-react';

export default function Page() {
  return (
     <HoverCard
        className="min-w-55"
        align="start"
        sideOffset={16}
        trigger={
          <Link href="#">
            Sam John
            <IconExternalLink size={16} />
          </Link>
        }>
        <div className="flex gap-3">
          <Avatar src="/images/avatar-1.png" className="size-11" />
          <div>
            <p className="font-semibold">Sam John</p>
            <p className="text-description text-sm">UX Designer</p>
            <div className="text-description/70 mt-2 space-x-2 text-sm">
              <span>following: 123</span>
              <span>followers: 456</span>
            </div>
          </div>
        </div>
      </HoverCard>
  )
}
`;

export const hiddenArrowCode = `import HoverCard from "@/components/ui/HoverCard";
import Avatar from "@/components/ui/Avatar";
import Link from "@/components/ui/Link";
import { IconExternalLink } from '@tabler/icons-react';

export default function Page() {
  return (
     <HoverCard
        className="min-w-55"
        align="start"
        hiddenArrow
        trigger={
          <Link href="#">
            Sam John
            <IconExternalLink size={16} />
          </Link>
        }>
        <div className="flex gap-3">
          <Avatar src="/images/avatar-1.png" className="size-11" />
          <div>
            <p className="font-semibold">Sam John</p>
            <p className="text-description text-sm">UX Designer</p>
            <div className="text-description/70 mt-2 space-x-2 text-sm">
              <span>following: 123</span>
              <span>followers: 456</span>
            </div>
          </div>
        </div>
      </HoverCard>
  )
}
`;
