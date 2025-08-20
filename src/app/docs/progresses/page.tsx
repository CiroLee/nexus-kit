import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Progress from '@/components/ui/Progress';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeDrawer from '@/components/business/CodeDrawer';
import { defaultCode, sizeCode, colorsCode, stripedCode } from '@/codes/demos/code.progresses';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'colors', label: 'colors' },
  { anchorId: 'striped', label: 'striped' },
];

export default async function ProgressPage() {
  const sourceCode = await getSourceCode('Progress/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Progress" description="Progress is a component that displays the progress of an operation." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Progress value={65} className="w-80" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="space-y-4">
            <Progress value={65} size="sm" className="w-80" />
            <Progress value={65} size="md" className="w-80" />
            <Progress value={65} size="lg" className="w-80" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="colors" title="colors" codeText={colorsCode} code={<CodeBox code={colorsCode} />}>
          <div className="space-y-4">
            <Progress value={65} colors="primary" className="w-80" />
            <Progress value={65} colors="secondary" className="w-80" />
            <Progress value={65} colors="warning" className="w-80" />
            <Progress value={65} colors="danger" className="w-80" />
            <Progress value={65} colors="neutral" className="w-80" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="striped" title="striped" codeText={stripedCode} code={<CodeBox code={stripedCode} />}>
          <div className="space-y-4">
            <Progress value={65} striped colors="primary" className="w-80" />
            <Progress value={65} striped colors="secondary" className="w-80" />
            <Progress value={65} striped colors="warning" className="w-80" />
            <Progress value={65} striped colors="danger" className="w-80" />
            <Progress value={65} striped colors="neutral" className="w-80" />
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
