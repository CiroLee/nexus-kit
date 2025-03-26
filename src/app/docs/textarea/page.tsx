import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Textarea from '@/components/ui/Textarea';
import { defaultCode, stateCode, disabledCode, resizeCode } from '@/codes/demos/code.textarea';
import sourceCode from '@/codes/sources/source.textarea';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';

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

export default function TextareaPage() {
  return (
    <div className="flex">
      <div className="flex-1 sm:mr-90">
        <SectionIntro title="Textarea" description="Inputs allow users to enter large texts, they usually appear in forms" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Textarea className="w-80" placeholder="enter texts here" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="state" title="state" codeText={stateCode} code={<Code code={stateCode} />}>
          <div className="space-y-5">
            <Textarea className="w-80" state="warning" placeholder="warning state" />
            <Textarea className="w-80" state="error" placeholder="error state" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<Code code={disabledCode} />}>
          <Textarea className="w-80" disabled placeholder="enter texts here" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="resize" title="resize" codeText={resizeCode} code={<Code code={resizeCode} />}>
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
