export const defaultCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";
import Link from 'next/link';

export default function Page() {
  return (
    <Breadcrumb>
      <BreadcrumbItem asChild>
        <Link href="/docs/buttons">Button</Link>
      </BreadcrumbItem>
      <BreadcrumbItem asChild>
        <Link href="/docs/avatars">Avatar</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}`;

export const variantsCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";
import Link from 'next/link';

export default function Page() {
  return (
    <Breadcrumb variant="underline">
      <BreadcrumbItem asChild>
        <Link href="/docs/buttons">Button</Link>
      </BreadcrumbItem>
      <BreadcrumbItem asChild>
        <Link href="/docs/avatars">Avatar</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}`;

export const disabledCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";
import Link from 'next/link';

export default function Page() {
  return (
    <Breadcrumb>
      <BreadcrumbItem asChild disabled>
        <Link href="/docs/buttons">Button</Link>
      </BreadcrumbItem>
      <BreadcrumbItem asChild>
        <Link href="/docs/avatars">Avatar</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}`;

export const sizeCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-4">
      <Breadcrumb size="sm">
        <BreadcrumbItem asChild>
          <Link href="/docs/buttons">Button</Link>
        </BreadcrumbItem>
        <BreadcrumbItem asChild>
          <Link href="/docs/avatars">Avatar</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="md">
        <BreadcrumbItem asChild>
          <Link href="/docs/buttons">Button</Link>
        </BreadcrumbItem>
        <BreadcrumbItem asChild>
          <Link href="/docs/avatars">Avatar</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="lg">
        <BreadcrumbItem asChild>
          <Link href="/docs/buttons">Button</Link>
        </BreadcrumbItem>
        <BreadcrumbItem asChild>
          <Link href="/docs/avatars">Avatar</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}`;

export const separatorCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";
import Link from 'next/link';

export default function Page() {
  return (
    <Breadcrumb>
      <BreadcrumbItem asChild separator="/">
        <Link href="/docs/buttons">Button</Link>
      </BreadcrumbItem>
      <BreadcrumbItem asChild separator="/">
        <Link href="/docs/avatars">Avatar</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}`;

export const iconCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { IconHome, IconDashboard } from '@tabler/icons-react';

export default function Page() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <IconHome size="1em" />
        Home
      </BreadcrumbItem>
      <BreadcrumbItem>
        <IconDashboard size="1em" />
        Dashboard
      </BreadcrumbItem>
      <BreadcrumbItem>Data</BreadcrumbItem>
    </Breadcrumb>
  )
}`;
