import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import { IconHome, IconDashboard } from '@tabler/icons-react';
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/Breadcrumb';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeDrawer from '@/components/business/CodeDrawer';
import { defaultCode, variantsCode, sizeCode, disabledCode, separatorCode, iconCode } from '@/codes/demos/code.breadcrumbs';
import { getSourceCode } from '@/app/api/github';
import Link from 'next/link';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'variant', label: 'variant' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'disabled', label: 'disabled' },
  { anchorId: 'custom-separator', label: 'custom separator' },
  { anchorId: 'icon', label: 'icon' },
];

export default async function BreadcrumbPage() {
  const sourceCode = await getSourceCode('Breadcrumb/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Breadcrumb" description="Breadcrumb is used to navigate to the current location." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Breadcrumb>
            <BreadcrumbItem asChild>
              <Link href="/docs/buttons">Button</Link>
            </BreadcrumbItem>
            <BreadcrumbItem asChild>
              <Link href="/docs/avatars">Avatar</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PreviewAndCode>
        <PreviewAndCode anchorId="variant" title="variant" codeText={variantsCode} code={<CodeBox code={variantsCode} />}>
          <Breadcrumb variant="underline">
            <BreadcrumbItem asChild>
              <Link href="/docs/buttons">Button</Link>
            </BreadcrumbItem>
            <BreadcrumbItem asChild>
              <Link href="/docs/avatars">Avatar</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
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
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <Breadcrumb>
            <BreadcrumbItem asChild disabled>
              <Link href="/docs/buttons">Button</Link>
            </BreadcrumbItem>
            <BreadcrumbItem asChild>
              <Link href="/docs/avatars">Avatar</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-separator" title="custom separator" codeText={separatorCode} code={<CodeBox code={separatorCode} />}>
          <Breadcrumb>
            <BreadcrumbItem asChild separator="/">
              <Link href="/docs/buttons">Button</Link>
            </BreadcrumbItem>
            <BreadcrumbItem asChild separator="/">
              <Link href="/docs/avatars">Avatar</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PreviewAndCode>
        <PreviewAndCode anchorId="icon" title="icon" codeText={iconCode} code={<CodeBox code={iconCode} />}>
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
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
