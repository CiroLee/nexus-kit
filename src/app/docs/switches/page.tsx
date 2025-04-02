import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Switch from '@/components/ui/Switch';
import { defaultCode, labelCode, sizeCode, disabledCode } from '@/codes/demos/code.switches';
import sourceCode from '@/codes/sources/source.switch';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';

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

export default function SwitchPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Switch" description="Switches are used to toggle between two mutually exclusive states" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Switch defaultChecked />
        </PreviewAndCode>
        <PreviewAndCode anchorId="width-icon" title="with label" codeText={labelCode} code={<Code code={labelCode} />}>
          <Switch id="auto-trans">Auto Translation</Switch>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<Code code={sizeCode} />}>
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
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<Code code={disabledCode} />}>
          <Switch disabled>disabled</Switch>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
