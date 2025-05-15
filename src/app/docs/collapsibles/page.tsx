import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '@/components/business/SectionIntro';
import Collapsible from '@/components/ui/Collapsible';
import Button from '@/components/ui/Button';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { type AnchorItem } from '@/components/business/OnThisPage';
import { defaultCode } from '@/codes/demos/code.collapsibles';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [{ anchorId: 'default', label: 'default' }];

export default async function CollapsiblePage() {
  const sourceCode = await getSourceCode('Collapsible/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Collapsible" description="Collapsible is an interactive element that toggles a panel's visibility." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Collapsible className="pt-4" trigger={<Button>toggle</Button>}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquet nisl, eu aliquam nisl nunc eu nisl.
          </Collapsible>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
