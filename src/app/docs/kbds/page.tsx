import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '../../../components/business/SectionIntro';
import Code from '@/components/business/Code';
import Kbd from '@/components/ui/Kbd';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import sourceCode from '@/codes/sources/source.kbd';
import { defaultCode, sizeCode } from '@/codes/demos/code.kbds';
import CodeDrawer from '@/components/business/CodeDrawer';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'size',
    label: 'size',
  },
];

export default function KbdPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Kbd" description="Kbd is a component that displays keyboard shortcuts" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <div className="flex gap-4">
            <Kbd keys={['command']} />
            <Kbd keys={['command']}>K</Kbd>
            <Kbd keys={['option', 'shift']}>T</Kbd>
            <Kbd>Command + D</Kbd>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<Code code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <Kbd keys={['command']} size="sm">
              K
            </Kbd>
            <Kbd keys={['command']} size="md">
              K
            </Kbd>
            <Kbd keys={['command']} size="lg">
              K
            </Kbd>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
