export const defaultCode = `import Link from "@/components/ui/Link";

export default function Page() {
  return (
    <Link href="#">Link</Link>
  )
}
`;

export const disabledCode = `import Link from "@/components/ui/Link";

export default function Page() {
  return (
    <Link href="#" disabled>Link</Link>
  )
}
`;

export const underlineCode = `import Link from "@/components/ui/Link";

export default function Page() {
  return (
    <Link href="#" underline>Link</Link>
  )
}
`;

export const externalCode = `import Link from "@/components/ui/Link";
import { IconExternalLink } from '@tabler/icons-react';

export default function Page() {
  return (
    <div className="flex gap-4">
      <Link href="https://github.com/CiroLee/nexus-kit" target="_blank">
        Link
      </Link>
      <Link href="https://github.com/CiroLee/nexus-kit" target="_blank" underline>
        Link <IconExternalLink size={16} />
      </Link>
    </div>
  )
}
`;
