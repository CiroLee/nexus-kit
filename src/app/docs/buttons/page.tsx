import PreviewAndCode from '@/components/PreviewAndCode';
import Button from '@/components/ui/Button';
import Code from '@/components/Code';
import { variantCode, sizeCode, iconCode, borderedCode, disabledCode, withIconCode, loadingCode } from '@/codes/code.buttons';
import SectionIntro from '../components/SectionIntro';
import { IconUpload, IconShoppingCart, IconArrowRight, IconLoader } from '@tabler/icons-react';

export default function ButtonsPage() {
  return (
    <div>
      <SectionIntro title="Button" description="Buttons are used to trigger actions" />
      <PreviewAndCode title="Variants" code={<Code code={variantCode} />}>
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
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
      <PreviewAndCode title="Icon" code={<Code code={iconCode} />}>
        <Button icon>
          <IconUpload size={18} />
        </Button>
      </PreviewAndCode>
      <PreviewAndCode title="Bordered" code={<Code code={borderedCode} />}>
        <div className="flex gap-4">
          <Button bordered variant="primary">
            Primary
          </Button>
          <Button bordered variant="success">
            Success
          </Button>
          <Button bordered variant="warning">
            Warning
          </Button>
          <Button bordered variant="danger">
            Danger
          </Button>
          <Button bordered variant="ghost">
            Ghost
          </Button>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="Disabled" code={<Code code={disabledCode} />}>
        <div className="flex gap-4">
          <Button disabled variant="primary">
            Primary
          </Button>
          <Button disabled variant="success">
            Success
          </Button>
          <Button disabled variant="warning">
            Warning
          </Button>
          <Button disabled variant="danger">
            Danger
          </Button>
          <Button disabled variant="ghost">
            Ghost
          </Button>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="With icon" code={<Code code={withIconCode} />}>
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
      <PreviewAndCode title="Loading" code={<Code code={loadingCode} />}>
        <div className="flex gap-4">
          <Button loading className="gap-1">
            <IconLoader className="animate-spin" size={18} />
            Loading...
          </Button>
        </div>
      </PreviewAndCode>
    </div>
  );
}
