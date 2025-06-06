import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import { IconHome, IconDashboard } from '@tabler/icons-react';
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/Breadcrumb';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeDrawer from '@/components/business/CodeDrawer';
import { defaultCode, variantsCode, sizeCode, disabledCode, separatorCode, iconCode } from '@/codes/demos/code.breadcrumbs';
import { getSourceCode } from '@/app/api/github';

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
            <BreadcrumbItem href="/docs/buttons">Button</BreadcrumbItem>
            <BreadcrumbItem href="/docs/avatars">Avatar</BreadcrumbItem>
            <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PreviewAndCode>
        <PreviewAndCode anchorId="variant" title="variant" codeText={variantsCode} code={<CodeBox code={variantsCode} />}>
          <Breadcrumb variant="underline">
            <BreadcrumbItem href="/docs/buttons">Button</BreadcrumbItem>
            <BreadcrumbItem href="/docs/avatars">Avatar</BreadcrumbItem>
            <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
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
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <Breadcrumb>
            <BreadcrumbItem disabled href="/docs/buttons">
              Button
            </BreadcrumbItem>
            <BreadcrumbItem href="/docs/avatars">Avatar</BreadcrumbItem>
            <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-separator" title="custom separator" codeText={separatorCode} code={<CodeBox code={separatorCode} />}>
          <Breadcrumb>
            <BreadcrumbItem href="/docs/buttons" separator="/">
              Button
            </BreadcrumbItem>
            <BreadcrumbItem href="/docs/avatars" separator="/">
              Avatar
            </BreadcrumbItem>
            <BreadcrumbItem asCurrent>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PreviewAndCode>
        <PreviewAndCode anchorId="icon" title="icon" codeText={iconCode} code={<CodeBox code={iconCode} />}>
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
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
