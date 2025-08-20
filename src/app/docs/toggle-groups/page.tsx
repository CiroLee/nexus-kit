import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { ToggleGroup, ToggleGroupItem, type ToggleGroupVariants } from '@/components/ui/ToggleGroup';
import { getSourceCode } from '@/app/api/github';
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react';
import { defaultCode, multipleCode, variantCode, sizeCode, disabledCode } from '@/codes/demos/code.toggle-groups';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'multiple', label: 'multiple' },
  { anchorId: 'variant', label: 'variant' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'disabled', label: 'disabled' },
];

export default async function ToggleGroupPage() {
  const sourceCode = await getSourceCode('ToggleGroup/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="ToggleGroup" description="ToggleGroup component is a set of two-state buttons that can be either on or off." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode title="default" anchorId="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <ToggleGroup type="single">
            <ToggleGroupItem value="bold">
              <IconBold size={20} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <IconItalic size={20} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline">
              <IconUnderline size={20} />
            </ToggleGroupItem>
          </ToggleGroup>
        </PreviewAndCode>
        <PreviewAndCode title="multiple" anchorId="multiple" codeText={multipleCode} code={<CodeBox code={multipleCode} />}>
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold">
              <IconBold size={20} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <IconItalic size={20} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline">
              <IconUnderline size={20} />
            </ToggleGroupItem>
          </ToggleGroup>
        </PreviewAndCode>
        <PreviewAndCode title="variant" anchorId="variant" codeText={variantCode} code={<CodeBox code={variantCode} />}>
          <div className="space-y-4">
            <ToggleGroup type="single" variant="light">
              <ToggleGroupItem value="bold">
                <IconBold size={20} />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic">
                <IconItalic size={20} />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline">
                <IconUnderline size={20} />
              </ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup type="single" variant="bordered">
              <ToggleGroupItem value="bold">
                <IconBold size={20} />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic">
                <IconItalic size={20} />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline">
                <IconUnderline size={20} />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </PreviewAndCode>
        <PreviewAndCode title="size" anchorId="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="space-y-4">
            {['sm', 'md', 'lg'].map((size) => (
              <ToggleGroup key={size} type="multiple" size={size as ToggleGroupVariants['size']}>
                <ToggleGroupItem value="bold">
                  <IconBold size={16} />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <IconItalic size={16} />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <IconUnderline size={16} />
                </ToggleGroupItem>
              </ToggleGroup>
            ))}
          </div>
        </PreviewAndCode>
        <PreviewAndCode title="disabled" anchorId="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <div className="space-y-4">
            <ToggleGroup type="single" disabled>
              <ToggleGroupItem value="bold">
                <IconBold size={20} />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic">
                <IconItalic size={20} />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline">
                <IconUnderline size={20} />
              </ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup type="single" variant="bordered">
              <ToggleGroupItem value="bold">
                <IconBold size={20} />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" disabled>
                <IconItalic size={20} />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline">
                <IconUnderline size={20} />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
