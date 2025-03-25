export const colorsCode = `import Button from '@/components/Button';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Button colors="primary">Primary</Button>
      <Button colors="success">Success</Button>
      <Button colors="warning">Warning</Button>
      <Button colors="danger">Danger</Button>
      <Button colors="neutral">Neutral</Button>
    </div>
  )
}
`;

export const sizeCode = `import Button from '@/components/Button';

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
    </div>
  )
}
`;

export const iconCode = `import { IconUpload } from '@tabler/icons-react';
import Button from '@/components/Button';

export default function Demo() {
  return (
    <Button icon>
      <IconUpload size={20} />
    </Button>
  )
}
`;

export const variantsCode = `import Button from '@/components/Button';

export default function Demo() {
  return (
    <>
      <div className="flex gap-4 space-y-4">
      <Button variant="bordered" colors="primary">Bordered</Button>
      <Button variant="bordered" colors="success">Bordered</Button>
      <Button variant="bordered" colors="warning">Bordered</Button>
      <Button variant="bordered" colors="danger">Bordered</Button>
      <Button variant="bordered" colors="neutral">Bordered</Button>
    </div>
    <div className="flex gap-4">
      <Button variant="light" colors="primary">Light</Button>
      <Button variant="light" colors="success">Light</Button>
      <Button variant="light" colors="warning">Light</Button>
      <Button variant="light" colors="danger">Light</Button>
      <Button variant="light" colors="neutral">Light</Button>
    </div>
    </>
  )
}
`;

export const disabledCode = `import Button from '@/components/Button';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Button disabled variant="primary">Primary</Button>
      <Button disabled variant="success">Success</Button>
      <Button disabled variant="warning">Warning</Button>
      <Button disabled variant="danger">Danger</Button>
      <Button disabled colors="neutral">neutral</Button>
    </div>
  )
}
`;

export const roundedCode = `import Button from '@/components/Button';

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <Button size="xs" rounded>Rounded</Button>
      <Button size="sm" rounded>Rounded</Button>
      <Button size="md" rounded>Rounded</Button>
      <Button size="lg" rounded>Rounded</Button>
    </div>
  )
}
`;

export const withIconCode = `import { IconShoppingCart, IconArrowRight } from '@tabler/icons-react';
import Button from '@/components/Button';

export default function Demo() {
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
}
`;

export const loadingCode = `import { IconLoader } from '@tabler/icons-react';
import Button from '@/components/Button';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Button loading className="gap-1">
        <IconLoader className="animate-spin" size={18} />
        Loading...
      </Button>
    </div>
  )
}
`;

export const asChildCode = `import Link from 'next/link';
import Button from '@/components/Button';

export default function Demo() {
  return (
    <>
      <Button asChild variant="ghost" className="hover:underline">
        <Link href="https://tailwindcss.com/" target="_blank">
          tailwindcss
        </Link>
      </Button>
    </>
  )
}
`;

export const buttonGroupCode = `import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';

export default function Demo() {
  return (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  )
}
`;
