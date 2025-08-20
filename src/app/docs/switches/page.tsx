import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Switch from '@/components/ui/Switch';
import { defaultCode, labelCode, sizeCode, disabledCode } from '@/codes/demos/code.switches';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'width-icon',
    label: 'with label',
  },
  {
    anchorId: 'size',
    label: 'size',
  },
  {
    anchorId: 'disabled',
    label: 'disabled',
  },
];

export default async function SwitchPage() {
  const sourceCode = await getSourceCode('Switch/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Switch" description="Switches are used to toggle between two mutually exclusive states." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Switch defaultChecked />
        </PreviewAndCode>
        <PreviewAndCode anchorId="width-icon" title="with label" codeText={labelCode} code={<CodeBox code={labelCode} />}>
          <Switch id="auto-trans">Auto Translation</Switch>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <Switch size="sm" id="small">
              Small
            </Switch>
            <Switch size="md" id="medium">
              Medium
            </Switch>
            <Switch size="lg" id="large">
              Large
            </Switch>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <Switch disabled>disabled</Switch>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
