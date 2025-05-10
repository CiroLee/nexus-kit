export const defaultCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";

export default function Page() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="/docs/buttons">Button</BreadcrumbItem>
      <BreadcrumbItem href="/docs/avatars">Avatar</BreadcrumbItem>
      <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}`;

export const variantsCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";

export default function Page() {
  return (
    <Breadcrumb variant="underline">
      <BreadcrumbItem href="/docs/buttons">Button</BreadcrumbItem>
      <BreadcrumbItem href="/docs/avatars">Avatar</BreadcrumbItem>
      <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}`;

export const disabledCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";

export default function Page() {
  return (
    <Breadcrumb>
      <BreadcrumbItem disabled href="/docs/buttons">Button</BreadcrumbItem>
      <BreadcrumbItem href="/docs/avatars">Avatar</BreadcrumbItem>
      <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}`;

export const sizeCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";

export default function Page() {
  return (
    <div className="space-y-4">
      <Breadcrumb size="sm">
        <BreadcrumbItem href="/docs/buttons">Button</BreadcrumbItem>
        <BreadcrumbItem href="/docs/avatars">Avatar</BreadcrumbItem>
        <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="md">
        <BreadcrumbItem href="/docs/buttons">Button</BreadcrumbItem>
        <BreadcrumbItem href="/docs/avatars">Avatar</BreadcrumbItem>
        <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="lg">
        <BreadcrumbItem href="/docs/buttons">Button</BreadcrumbItem>
        <BreadcrumbItem href="/docs/avatars">Avatar</BreadcrumbItem>
        <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}`;

export const separatorCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";

export default function Page() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="/docs/buttons" separator="/">Button</BreadcrumbItem>
      <BreadcrumbItem href="/docs/avatars" separator="/">Avatar</BreadcrumbItem>
      <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}`;

export const iconCode = `import { Breadcrumb, BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { IconHome, IconDashboard } from '@tabler/icons-react';

export default function Page() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">
        <IconHome size="1em" />
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">
        <IconDashboard size="1em" />
        Dashboard
      </BreadcrumbItem>
      <BreadcrumbItem asCurrent>Data</BreadcrumbItem>
    </Breadcrumb>
  )
}`;
