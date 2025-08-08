import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToggleGroup';
import { getSourceCode } from '@/app/api/github';
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'with-icon', label: 'with icon' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'variant', label: 'variant' },
  { anchorId: 'disabled', label: 'disabled' },
];

export default async function TogglePage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="ToggleGroup" description="ToggleGroup component is a set of two-state buttons that can be either on or off." />
        <PreviewAndCode title="default" anchorId="default" codeText="" code={<CodeBox code="" />}>
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
        <PreviewAndCode title="multiple" anchorId="multiple" codeText="" code={<CodeBox code="" />}>
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
        <PreviewAndCode title="variant" anchorId="variant" codeText="" code={<CodeBox code="" />}>
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
        <PreviewAndCode title="size" anchorId="size" codeText="" code={<CodeBox code="" />}>
          <div className="space-y-4">
            <ToggleGroup type="multiple" size="sm">
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
            <ToggleGroup type="multiple" size="md">
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
            <ToggleGroup type="multiple" size="lg">
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
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
