export const colorsCode = `import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button colors="primary">Primary</Button>
      <Button colors="secondary">Secondary</Button>
      <Button colors="warning">Warning</Button>
      <Button colors="danger">Danger</Button>
      <Button colors="neutral">Neutral</Button>
    </div>
  )
}`;

export const sizeCode = `import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
    </div>
  )
}`;

export const iconCode = `import { IconUpload } from '@tabler/icons-react';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <Button asIcon>
      <IconUpload size={20} />
    </Button>
  )
}`;

export const variantsCode = `import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button variant="solid" colors="primary">Solid</Button>
      <Button variant="bordered" colors="primary">Bordered</Button>
      <Button variant="light" colors="primary">Light</Button>
    </div>
  )
}`;

export const disabledCode = `import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button disabled variant="primary">Primary</Button>
      <Button disabled variant="secondary">Secondary</Button>
      <Button disabled variant="warning">Warning</Button>
      <Button disabled variant="danger">Danger</Button>
      <Button disabled colors="neutral">neutral</Button>
    </div>
  )
}`;

export const pillCode = `import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <Button size="xs" pill>Rounded</Button>
      <Button size="sm" pill>Rounded</Button>
      <Button size="md" pill>Rounded</Button>
      <Button size="lg" pill>Rounded</Button>
    </div>
  )
}`;

export const withIconCode = `import { IconShoppingCart, IconArrowRight } from '@tabler/icons-react';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button className="gap-1">
        <IconShoppingCart size={20} />
        Add to cart
      </Button>
      <Button className="gap-1">
        Go Next
        <IconArrowRight size={20} />
      </Button>
    </div>
  )
}`;

export const loadingCode = `import { IconLoader } from '@tabler/icons-react';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button loading className="gap-1">
        <IconLoader className="animate-spin" size={18} />
        Loading...
      </Button>
    </div>
  )
}`;

export const asChildCode = `import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <>
      <Button asChild variant="ghost" className="hover:underline">
        <Link href="https://tailwindcss.com/" target="_blank">
          tailwindcss
        </Link>
      </Button>
    </>
  )
}`;

export const buttonGroupCode = `import { Button, ButtonGroup } from '@/components/ui/Button';

export default function Page() {
  return (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
    </ButtonGroup>
  )
}`;

export const buttonGroupPilledCode = `import { Button, ButtonGroup } from '@/components/ui/Button';

export default function Page() {
  return (
    <ButtonGroup pill>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
    </ButtonGroup>
  )
}`;

export const buttonGroupVariantCode = `import { Button, ButtonGroup, type ButtonVariants } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="space-y-4">
      {['solid', 'light', 'bordered'].map((item) => (
        <ButtonGroup key={item} variant={item as ButtonVariants['variant']}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
        </ButtonGroup>
      ))}
    </div>
  )
}`;

export const buttonGroupColorsCode = `import { Button, ButtonGroup, type ButtonVariants } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="space-y-4">
      {['primary', 'secondary', 'warning', 'danger', 'neutral'].map((item) => (
        <ButtonGroup key={item} colors={item as ButtonVariants['colors']}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
        </ButtonGroup>
      ))}
    </div>
  )
}`;

export const buttonGroupSizeCode = `import { Button, ButtonGroup, type ButtonVariants } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="space-y-4">
      {['xs', 'sm', 'md', 'lg'].map((item) => (
        <ButtonGroup key={item} size={item as ButtonVariants['size']}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
        </ButtonGroup>
      ))}
    </div>
  )
}`;

export const buttonGroupAsIconCode = `import { Button, ButtonGroup, type ButtonVariants } from '@/components/ui/Button';

export default function Page() {
  return (
    <ButtonGroup asIcon>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
    </ButtonGroup>
  )
}`;

export const buttonGroupDisabledCode = `import { Button, ButtonGroup, type ButtonVariants } from '@/components/ui/Button';

export default function Page() {
  return (
    <ButtonGroup asIcon>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <Button>Four</Button>
    </ButtonGroup>
  )
}`;
