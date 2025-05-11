export const defaultCode = `import Badge from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar

export default function Page() {
  return (
    <Badge content="2">
      <Avatar src="/images/avatar-2.png" />
    </Badge>
  )
}`;

export const sizeCode = `import Badge from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge size="sm" content="2">
        <Avatar rounded src="/images/avatar-2.png" />
      </Badge>
      <Badge size="md" content="2">
        <Avatar rounded src="/images/avatar-2.png" />
      </Badge>
      <Badge size="lg" content="2">
        <Avatar rounded src="/images/avatar-2.png" />
      </Badge>
    </div>
  )
}`;

export const placementCode = `import Badge from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge content="2" placement="top-left">
        <Avatar bordered src="/images/avatar-2.png" />
      </Badge>
      <Badge content="2" placement="top-right">
        <Avatar bordered src="/images/avatar-2.png" />
      </Badge>
      <Badge content="2" placement="bottom-left">
        <Avatar bordered src="/images/avatar-2.png" />
      </Badge>
      <Badge content="2" placement="bottom-right">
        <Avatar bordered src="/images/avatar-2.png" />
      </Badge>
    </div>
  )
}`;

export const contentCode = `import Badge from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge content={<IconBellFilled size={12} />}>
        <Avatar rounded src="/images/avatar-2.png" />
      </Badge>
      <Badge content="99+" className="bg-secondary">
        <Avatar rounded src="/images/avatar-2.png" />
      </Badge>
    </div>
  )
}`;

export const asDotCode = `import Badge from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar

export default function Page() {
  return (
    <Badge asDot>
      <Avatar src="/images/avatar-2.png" />
    </Badge>
  )
}`;
