export const sizeCode = `import Input from "@/components/ui/Input";

export default function Page() {
  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <Input size="xs" placeholder="xs size" />
      <Input size="sm" placeholder="sm size" />
      <Input size="md" placeholder="md size" />
      <Input size="lg" placeholder="lg size" />
    </div>
  )
}
`;

export const stateCode = `import Input from "@/components/ui/Input";

export default function Page() {
  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <Input state="warning" placeholder="warning message" />
      <Input state="error" placeholder="error message" />
    </div>
  )
}
`;

export const preAndSuffixCode = `import { IconUserFilled, IconLockFilled } from '@tabler/icons-react';
import Input from "@/components/ui/Input";

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Input prefix={<IconUserFilled size={20} color="gray" />} />
      <Input type="password" prefix={<IconLockFilled size={20} color="gray" />} />
    </div>
  )
}
`;
export const disabledCode = `import Input from "@/components/ui/Input";

export default function Page() {
  return (
    <Input placeholder="disabled input" disabled />
  )
}
`;
