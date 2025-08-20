import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Textarea from '@/components/ui/Textarea';
import { defaultCode, stateCode, disabledCode, resizeCode } from '@/codes/demos/code.textarea';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'state',
    label: 'state',
  },
  {
    anchorId: 'disabled',
    label: 'disabled',
  },
  {
    anchorId: 'resize',
    label: 'resize',
  },
];

export default async function TextareaPage() {
  const sourceCode = await getSourceCode('Textarea/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Textarea" description="Inputs allow users to enter large texts, they usually appear in forms." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Textarea className="w-80" placeholder="enter texts here" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="state" title="state" codeText={stateCode} code={<CodeBox code={stateCode} />}>
          <div className="space-y-5">
            <Textarea className="w-80" state="warning" placeholder="warning state" />
            <Textarea className="w-80" state="error" placeholder="error state" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <Textarea className="w-80" disabled placeholder="enter texts here" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="resize" title="resize" codeText={resizeCode} code={<CodeBox code={resizeCode} />}>
          <div className="space-y-5">
            <Textarea className="w-80" resize="both" placeholder="resize both" />
            <Textarea className="w-80" resize="horizontal" placeholder="resize horizontal" />
            <Textarea className="w-80" resize="vertical" placeholder="resize vertical" />
            <Textarea className="w-80" resize="none" placeholder="not allow resize" />
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
