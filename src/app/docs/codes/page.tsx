import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Code from '@/components/ui/Code';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';
import { defaultCode, borderedCode, sizeCode } from '@/codes/demos/code.codes';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'bordered', label: 'bordered' },
  { anchorId: 'size', label: 'size' },
];

export default async function CodePage() {
  const sourceCode = await getSourceCode('Code/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Code" description="Code is used to display the inline code content." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Code>hello world!</Code>
        </PreviewAndCode>
        <PreviewAndCode anchorId="bordered" title="bordered" codeText={borderedCode} code={<CodeBox code={borderedCode} />}>
          <Code bordered>hello world!</Code>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="flex flex-col items-start gap-2">
            <Code size="sm">hello world!</Code>
            <Code size="md">hello world!</Code>
            <Code size="lg">hello world!</Code>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
