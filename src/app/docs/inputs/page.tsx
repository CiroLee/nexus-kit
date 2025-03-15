import { IconUserFilled, IconLockFilled } from '@tabler/icons-react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Input from '@/components/ui/Input';
import { sizeCode, stateCode, preAndSuffixCode, disabledCode } from '@/codes/code.inputs';
export default function InputPage() {
  return (
    <>
      <SectionIntro title="Input" description="Inputs allow users to enter text, they usually appear in forms" />
      <PreviewAndCode title="size" code={<Code code={sizeCode} />}>
        <div className="grid grid-cols-2 items-center gap-4">
          <Input size="xs" placeholder="xs size" />
          <Input size="sm" placeholder="sm size" />
          <Input size="md" placeholder="md size" />
          <Input size="lg" placeholder="lg size" />
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="state" code={<Code code={stateCode} />}>
        <div className="grid grid-cols-2 items-center gap-4">
          <Input state="warning" placeholder="warning message" />
          <Input state="error" placeholder="error message" />
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="prefix and suffix" code={<Code code={preAndSuffixCode} />}>
        <div className="grid grid-cols-2 gap-4">
          <Input prefix={<IconUserFilled size={20} color="gray" />} />
          <Input type="password" prefix={<IconLockFilled size={20} color="gray" />} />
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="disabled" code={<Code code={disabledCode} />}>
        <Input placeholder="disabled input" disabled />
      </PreviewAndCode>
    </>
  );
}
