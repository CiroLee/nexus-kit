import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Center from '@/components/ui/Center';
import { defaultCode, centerXCode, centerYCode } from '@/codes/demos/code.centers';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'center-x', label: 'centerX' },
  { anchorId: 'center-y', label: 'centerY' },
];

export default async function CenterPage() {
  const sourceCode = await getSourceCode('Center/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Center" description="Center is a layout component that centers its children." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Center display="flex" center className="h-20 w-80 rounded bg-neutral-200 dark:bg-neutral-700">
            center
          </Center>
        </PreviewAndCode>
        <PreviewAndCode anchorId="center-x" title="centerX" codeText={centerXCode} code={<CodeBox code={centerXCode} />}>
          <Center display="flex" centerX className="h-20 w-80 rounded bg-neutral-200 dark:bg-neutral-700">
            center x
          </Center>
        </PreviewAndCode>
        <PreviewAndCode anchorId="center-y" title="centerY" codeText={centerYCode} code={<CodeBox code={centerYCode} />}>
          <Center display="flex" centerY className="h-20 w-80 rounded bg-neutral-200 dark:bg-neutral-700">
            center y
          </Center>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
