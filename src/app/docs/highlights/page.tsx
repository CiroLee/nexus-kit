import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '../../../components/business/SectionIntro';
import Code from '@/components/business/Code';
import Highlight from '@/components/ui/Highlight';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import sourceCode from '@/codes/sources/source.highlight';
import { defaultCode, multipleCode, customCode } from '@/codes/demos/code.highlights';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'multiple', label: 'multiple' },
  { anchorId: 'custom-style', label: 'custom highlight style' },
];

export default function HighlightPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Highlight" description="Highlight is used to highlight subsets of text" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Highlight query="emphasize">Using the Highlight component to emphasize content</Highlight>
        </PreviewAndCode>
        <PreviewAndCode anchorId="multiple" title="multiple" codeText={multipleCode} code={<Code code={multipleCode} />}>
          <Highlight query={['component', 'emphasize']}>Using the Highlight component to emphasize content</Highlight>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-style" title="custom highlight style" codeText={customCode} code={<Code code={customCode} />}>
          <Highlight query="emphasize" highLightClass="italic bg-primary">
            Using the Highlight component to emphasize content
          </Highlight>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
