import { IconUserFilled, IconLockFilled } from '@tabler/icons-react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Input from '@/components/ui/Input';
import { sizeCode, stateCode, preAndSuffixCode, disabledCode } from '@/codes/demos/code.inputs';
import sourceCode from '@/codes/sources/source.input';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';

const navList: AnchorItem[] = [
  {
    anchorId: 'size',
    label: 'size',
  },
  {
    anchorId: 'state',
    label: 'state',
  },
  {
    anchorId: 'prefix-suffix',
    label: 'prefix and suffix',
  },
  {
    anchorId: 'disabled',
    label: 'disabled',
  },
];
export default function InputPage() {
  return (
    <div className="flex">
      <div className="flex-1 xl:mr-90">
        <SectionIntro title="Input" description="Inputs allow users to enter text, they usually appear in forms" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="size" codeText={sizeCode} title="size" code={<Code code={sizeCode} />}>
          <div className="grid grid-cols-2 items-center gap-4">
            <Input size="xs" placeholder="xs size" />
            <Input size="sm" placeholder="sm size" />
            <Input size="md" placeholder="md size" />
            <Input size="lg" placeholder="lg size" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="state" title="state" codeText={stateCode} code={<Code code={stateCode} />}>
          <div className="grid grid-cols-2 items-center gap-4">
            <Input state="warning" placeholder="warning message" />
            <Input state="error" placeholder="error message" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="prefix-suffix" title="prefix and suffix" codeText={preAndSuffixCode} code={<Code code={preAndSuffixCode} />}>
          <div className="grid grid-cols-2 gap-4">
            <Input prefix={<IconUserFilled size={20} color="gray" />} />
            <Input type="password" prefix={<IconLockFilled size={20} color="gray" />} />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<Code code={disabledCode} />}>
          <Input placeholder="disabled input" disabled />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
