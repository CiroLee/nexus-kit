import Link from 'next/link';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Button from '@/components/ui/Button';
import Code from '@/components/business/Code';
import { variantCode, sizeCode, iconCode, variantsCode, disabledCode, withIconCode, loadingCode, roundedCode, asChildCode } from '@/codes/code.buttons';
import SectionIntro from '../../../components/business/SectionIntro';
import { IconUpload, IconShoppingCart, IconArrowRight, IconLoader } from '@tabler/icons-react';

export default function ButtonsPage() {
  return (
    <>
      <SectionIntro title="Button" description="Buttons are used to trigger actions" />
      <PreviewAndCode title="colors" code={<Code code={variantCode} />}>
        <div className="flex gap-4">
          <Button colors="primary">Primary</Button>
          <Button colors="success">Success</Button>
          <Button colors="warning">Warning</Button>
          <Button colors="danger">Danger</Button>
          <Button colors="neutral">Neutral</Button>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="size" code={<Code code={sizeCode} />}>
        <div className="flex items-center gap-4">
          <Button size="xs">Button</Button>
          <Button size="sm">Button</Button>
          <Button size="md">Button</Button>
          <Button size="lg">Button</Button>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="icon" code={<Code code={iconCode} />}>
        <Button icon>
          <IconUpload size={18} />
        </Button>
      </PreviewAndCode>
      <PreviewAndCode title="variants" code={<Code code={variantsCode} />}>
        <div className="flex gap-4 space-y-4">
          <Button variant="bordered" colors="primary">
            Bordered
          </Button>
          <Button variant="bordered" colors="success">
            Bordered
          </Button>
          <Button variant="bordered" colors="warning">
            Bordered
          </Button>
          <Button variant="bordered" colors="danger">
            Bordered
          </Button>
          <Button variant="bordered" colors="neutral">
            Bordered
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="light" colors="primary">
            Light
          </Button>
          <Button variant="light" colors="success">
            Light
          </Button>
          <Button variant="light" colors="warning">
            Light
          </Button>
          <Button variant="light" colors="danger">
            Light
          </Button>
          <Button variant="light" colors="neutral">
            Light
          </Button>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="disabled" code={<Code code={disabledCode} />}>
        <div className="flex gap-4">
          <Button disabled colors="primary">
            Primary
          </Button>
          <Button disabled colors="success">
            Success
          </Button>
          <Button disabled colors="warning">
            Warning
          </Button>
          <Button disabled colors="danger">
            Danger
          </Button>
          <Button disabled colors="neutral">
            Danger
          </Button>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="rounded" code={<Code code={roundedCode} />}>
        <div className="flex items-center gap-4">
          <Button size="xs" rounded>
            Rounded
          </Button>
          <Button size="sm" rounded>
            Rounded
          </Button>
          <Button size="md" rounded>
            Rounded
          </Button>
          <Button size="lg" rounded>
            Rounded
          </Button>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="with icon" code={<Code code={withIconCode} />}>
        <div className="flex gap-4">
          <Button className="gap-1">
            <IconShoppingCart size={18} />
            Add to cart
          </Button>
          <Button className="gap-1">
            Go Next
            <IconArrowRight size={18} />
          </Button>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="loading" code={<Code code={loadingCode} />}>
        <div className="flex gap-4">
          <Button loading className="gap-1">
            <IconLoader className="animate-spin" size={18} />
            Loading...
          </Button>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="asChild" code={<Code code={asChildCode} />}>
        <Button asChild variant="light" className="hover:underline">
          <Link href="https://tailwindcss.com/" target="_blank">
            tailwindcss
          </Link>
        </Button>
      </PreviewAndCode>
    </>
  );
}
