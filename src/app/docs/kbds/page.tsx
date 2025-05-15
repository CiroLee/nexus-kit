import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '../../../components/business/SectionIntro';
import CodeBox from '@/components/business/CodeBox';
import Kbd from '@/components/ui/Kbd';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { defaultCode, sizeCode } from '@/codes/demos/code.kbds';
import CodeDrawer from '@/components/business/CodeDrawer';
import { getSourceCode } from '@/app/api/github';

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

export default async function KbdPage() {
  const sourceCode = await getSourceCode('Kbd/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Kbd" description="Kbd is a component that displays keyboard shortcuts." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <div className="flex gap-4">
            <Kbd keys={['command']} />
            <Kbd keys={['command']}>K</Kbd>
            <Kbd keys={['option', 'shift']}>T</Kbd>
            <Kbd>Command + D</Kbd>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
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
