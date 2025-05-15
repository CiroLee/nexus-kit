import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeDrawer from '@/components/business/CodeDrawer';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import ButtonGroup from '@/components/ui/ButtonGroup';
import Button from '@/components/ui/Button';
import { getSourceCode } from '@/app/api/github';
import { buttonGroupCode, buttonGroupPilledCode } from '@/codes/demos/code.buttons';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'pill', label: 'pill' },
];

export default async function ButtonGroupPage() {
  const sourceCode = await getSourceCode('ButtonGroup/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="ButtonGroup" description="ButtonGroup is a group of buttons." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={buttonGroupCode} code={<CodeBox code={buttonGroupCode} />}>
          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="pill" title="pill" codeText={buttonGroupPilledCode} code={<CodeBox code={buttonGroupPilledCode} />}>
          <ButtonGroup>
            <Button pill>One</Button>
            <Button pill>Two</Button>
            <Button pill>Three</Button>
          </ButtonGroup>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
