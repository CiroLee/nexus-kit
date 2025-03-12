export const variantCode = `'use client';

import Button from '@/components/Button';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}
`;

export const sizeCode = `'use client';

import Button from '@/components/Button';

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

export const iconCode = `'use client';

import { IconUpload } from '@tabler/icons-react';
import Button from '@/components/Button';

export default function Demo() {
  return (
    <Button icon>
      <IconUpload size={20} />
    </Button>
  )
}
`;

export const borderedCode = `'use client';

import Button from '@/components/Button';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Button bordered variant="primary">Primary</Button>
      <Button bordered variant="success">Success</Button>
      <Button bordered variant="warning">Warning</Button>
      <Button bordered variant="danger">Danger</Button>
      <Button bordered variant="ghost">Ghost</Button>
    </div>
  )
}
`;

export const disabledCode = `'use client';

import Button from '@/components/Button';

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Button disabled variant="primary">Primary</Button>
      <Button disabled variant="success">Success</Button>
      <Button disabled variant="warning">Warning</Button>
      <Button disabled variant="danger">Danger</Button>
      <Button disabled variant="ghost">Ghost</Button>
    </div>
  )
}
`;

export const withIconCode = `'use client';

import { IconShoppingCart, IconArrowRight } from '@tabler/icons-react';
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

export const loadingCode = `'use client';

import { IconLoader } from '@tabler/icons-react';
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
