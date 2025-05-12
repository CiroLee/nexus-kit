import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
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
      <div className="main-container">
        <SectionIntro title="Progress" description="Progress is a component that displays the progress of an operation." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Progress value={65} className="max-w-100" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<Code code={sizeCode} />}>
          <div className="space-y-4">
            <Progress value={65} size="sm" className="max-w-100" />
            <Progress value={65} size="md" className="max-w-100" />
            <Progress value={65} size="lg" className="max-w-100" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="colors" title="colors" codeText={colorsCode} code={<Code code={colorsCode} />}>
          <div className="space-y-4">
            <Progress value={65} colors="primary" className="max-w-100" />
            <Progress value={65} colors="secondary" className="max-w-100" />
            <Progress value={65} colors="warning" className="max-w-100" />
            <Progress value={65} colors="danger" className="max-w-100" />
            <Progress value={65} colors="neutral" className="max-w-100" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="striped" title="striped" codeText={stripedCode} code={<Code code={stripedCode} />}>
          <div className="space-y-4">
            <Progress value={65} striped colors="primary" className="max-w-100" />
            <Progress value={65} striped colors="secondary" className="max-w-100" />
            <Progress value={65} striped colors="warning" className="max-w-100" />
            <Progress value={65} striped colors="danger" className="max-w-100" />
            <Progress value={65} striped colors="neutral" className="max-w-100" />
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
