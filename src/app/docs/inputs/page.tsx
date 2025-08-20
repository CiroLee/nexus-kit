import { IconUserFilled, IconLockFilled } from '@tabler/icons-react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Input from '@/components/ui/Input';
import { sizeCode, stateCode, preAndSuffixCode, disabledCode } from '@/codes/demos/code.inputs';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';

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
    anchorId: 'prefix',
    label: 'prefix',
  },
  {
    anchorId: 'suffix',
    label: 'suffix',
  },
  {
    anchorId: 'disabled',
    label: 'disabled',
  },
];
export default async function InputPage() {
  const sourceCode = await getSourceCode('Input/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Input" description="Inputs allow users to enter text, they usually appear in forms." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="size" codeText={sizeCode} title="size" code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <Input size="sm" placeholder="sm size" />
            <Input size="md" placeholder="md size" />
            <Input size="lg" placeholder="lg size" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="state" title="state" codeText={stateCode} code={<CodeBox code={stateCode} />}>
          <div className="grid grid-cols-2 items-center gap-4">
            <Input state="warning" placeholder="warning message" />
            <Input state="error" placeholder="error message" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="prefix" title="prefix" codeText={preAndSuffixCode} code={<CodeBox code={preAndSuffixCode} />}>
          <div className="grid grid-cols-2 gap-4">
            <Input prefix={<IconUserFilled size={20} color="gray" />} />
            <Input type="password" prefix={<IconLockFilled size={20} color="gray" />} />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="suffix" title="suffix" codeText={preAndSuffixCode} code={<CodeBox code={preAndSuffixCode} />}>
          <div className="grid grid-cols-2 gap-4">
            <Input suffix={<div className="text-neutral-500">Kg</div>} />
            <Input suffix={<div className="text-neutral-500">MB</div>} />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <Input placeholder="disabled input" disabled />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
