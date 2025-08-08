import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeDrawer from '@/components/business/CodeDrawer';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { Button, ButtonGroup, type ButtonVariants } from '@/components/ui/Button';
import { getSourceCode } from '@/app/api/github';
import { buttonGroupAsIconCode, buttonGroupCode, buttonGroupColorsCode, buttonGroupDisabledCode, buttonGroupPilledCode, buttonGroupSizeCode, buttonGroupVariantCode } from '@/codes/demos/code.buttons';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'variant', label: 'variant' },
  { anchorId: 'colors', label: 'colors' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'pill', label: 'pill' },
  { anchorId: 'as-icon', label: 'asIcon' },
  { anchorId: 'disabled', label: 'disabled' },
];

export default async function ButtonGroupPage() {
  const sourceCode = await getSourceCode('Button/index.tsx');
  const buttonVariantsCode = await getSourceCode('Button/buttonVariants.ts');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="ButtonGroup" description="ButtonGroup is a group of buttons." />
        <CodeDrawer
          codeTabs={[
            { id: 'index', label: 'index.tsx', content: sourceCode },
            { id: 'variant', label: 'buttonVariants.ts', content: buttonVariantsCode },
          ]}
        />
        <PreviewAndCode anchorId="default" title="default" codeText={buttonGroupCode} code={<CodeBox code={buttonGroupCode} />}>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>Four</Button>
          </ButtonGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="variant" title="variant" codeText={buttonGroupVariantCode} code={<CodeBox code={buttonGroupVariantCode} />}>
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
        </PreviewAndCode>
        <PreviewAndCode anchorId="colors" title="colors" codeText={buttonGroupColorsCode} code={<CodeBox code={buttonGroupColorsCode} />}>
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
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={buttonGroupSizeCode} code={<CodeBox code={buttonGroupSizeCode} />}>
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
        </PreviewAndCode>
        <PreviewAndCode anchorId="pill" title="pill" codeText={buttonGroupPilledCode} code={<CodeBox code={buttonGroupPilledCode} />}>
          <ButtonGroup pill>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>Four</Button>
          </ButtonGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="as-icon" title="asIcon" codeText={buttonGroupAsIconCode} code={<CodeBox code={buttonGroupAsIconCode} />}>
          <ButtonGroup asIcon>
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
            <Button>D</Button>
          </ButtonGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={buttonGroupDisabledCode} code={<CodeBox code={buttonGroupDisabledCode} />}>
          <ButtonGroup disabled>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>Four</Button>
          </ButtonGroup>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
