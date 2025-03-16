import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Textarea from '@/components/ui/Textarea';
import { defaultCode, stateCode, disabledCode, resizeCode } from '@/codes/code.textarea';

export default function TextareaPage() {
  return (
    <>
      <SectionIntro title="Textarea" description="Inputs allow users to enter large texts, they usually appear in forms" />
      <PreviewAndCode title="default" code={<Code code={defaultCode} />}>
        <Textarea placeholder="enter texts here" />
      </PreviewAndCode>
      <PreviewAndCode title="state" code={<Code code={stateCode} />}>
        <div className="space-y-5">
          <Textarea state="warning" placeholder="warning state" />
          <Textarea state="error" placeholder="error state" />
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="disabled" code={<Code code={disabledCode} />}>
        <Textarea disabled placeholder="enter texts here" />
      </PreviewAndCode>
      <PreviewAndCode title="resize" code={<Code code={resizeCode} />}>
        <div className="space-y-5">
          <Textarea resize="both" placeholder="resize both" />
          <Textarea resize="horizontal" placeholder="resize horizontal" />
          <Textarea resize="vertical" placeholder="resize vertical" />
          <Textarea resize="none" placeholder="not allow resize" />
        </div>
      </PreviewAndCode>
    </>
  );
}
