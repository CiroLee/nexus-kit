import Link from 'next/link';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Button from '@/components/ui/Button';
import ButtonGroup from '@/components/ui/ButtonGroup';
import Code from '@/components/business/Code';
import { colorsCode, sizeCode, iconCode, variantsCode, disabledCode, withIconCode, loadingCode, pillCode, asChildCode, buttonGroupCode } from '@/codes/demos/code.buttons';
import SectionIntro from '../../../components/business/SectionIntro';
import { IconUpload, IconShoppingCart, IconArrowRight, IconLoader } from '@tabler/icons-react';
import sourceCode from '@/codes/sources/source.button';
import buttonVariantsCode from '@/codes/sources/source.buttonVariants';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';

const navList: AnchorItem[] = [
  {
    anchorId: 'colors',
    label: 'colors',
  },
  {
    anchorId: 'size',
    label: 'size',
  },
  {
    anchorId: 'icon',
    label: 'icon',
  },
  {
    anchorId: 'variants',
    label: 'variants',
  },
  {
    anchorId: 'disabled',
    label: 'disabled',
  },
  {
    anchorId: 'pill',
    label: 'pill shape',
  },
  {
    anchorId: 'with-icon',
    label: 'with icon',
  },
  {
    anchorId: 'loading',
    label: 'loading',
  },
  {
    anchorId: 'asChild',
    label: 'asChild',
  },
  {
    anchorId: 'button-group',
    label: 'buttonGroup',
  },
];
export default function ButtonsPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Button" description="Buttons are used to trigger actions." />
        <CodeDrawer
          codeTabs={[
            { id: 'index', label: 'index.tsx', content: sourceCode },
            { id: 'variant', label: 'buttonVariants.ts', content: buttonVariantsCode },
          ]}
        />
        <PreviewAndCode anchorId="colors" codeText={colorsCode} title="colors" code={<Code code={colorsCode} />}>
          <div className="flex gap-4">
            <Button colors="primary">Primary</Button>
            <Button colors="secondary">Secondary</Button>
            <Button colors="warning">Warning</Button>
            <Button colors="danger">Danger</Button>
            <Button colors="neutral">Neutral</Button>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" codeText={sizeCode} title="size" code={<Code code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <Button size="xs">Button</Button>
            <Button size="sm">Button</Button>
            <Button size="md">Button</Button>
            <Button size="lg">Button</Button>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="icon" codeText={iconCode} title="icon" code={<Code code={iconCode} />}>
          <Button icon>
            <IconUpload size={18} />
          </Button>
        </PreviewAndCode>
        <PreviewAndCode anchorId="variants" codeText={variantsCode} title="variants" code={<Code code={variantsCode} />}>
          <div className="flex gap-4">
            <Button variant="solid" colors="primary">
              Solid
            </Button>
            <Button variant="bordered" colors="primary">
              Bordered
            </Button>
            <Button variant="light" colors="primary">
              Light
            </Button>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" codeText={disabledCode} title="disabled" code={<Code code={disabledCode} />}>
          <div className="flex gap-4">
            <Button disabled colors="primary">
              Primary
            </Button>
            <Button disabled colors="secondary">
              Secondary
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
        <PreviewAndCode anchorId="pill" codeText={pillCode} title="pill shape" code={<Code code={pillCode} />}>
          <div className="flex items-center gap-4">
            <Button size="xs" pill>
              Rounded
            </Button>
            <Button size="sm" pill>
              Rounded
            </Button>
            <Button size="md" pill>
              Rounded
            </Button>
            <Button size="lg" pill>
              Rounded
            </Button>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="with-icon" codeText={withIconCode} title="with icon" code={<Code code={withIconCode} />}>
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
        <PreviewAndCode anchorId="loading" codeText={loadingCode} title="loading" code={<Code code={loadingCode} />}>
          <div className="flex gap-4">
            <Button loading className="gap-1">
              <IconLoader className="animate-spin" size={18} />
              Loading...
            </Button>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="asChild" codeText={asChildCode} title="asChild" code={<Code code={asChildCode} />}>
          <Button asChild variant="light" className="hover:underline">
            <Link href="https://tailwindcss.com/" target="_blank">
              tailwindcss
            </Link>
          </Button>
        </PreviewAndCode>
        <PreviewAndCode anchorId="button-group" codeText={buttonGroupCode} title="Button Group" code={<Code code={buttonGroupCode} />}>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
