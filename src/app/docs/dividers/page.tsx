import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import OnThisPage, { type AnchorItem } from '@/components/business/OnThisPage';
import Divider from '@/components/ui/Divider';
import Heading from '@/components/ui/Heading';
import sourceCode from '@/codes/sources/source.divider';
import { defaultCode, withContentCode } from '@/codes/demos/code.dividers';
import CodeDrawer from '@/components/business/CodeDrawer';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'with-content',
    label: 'with content',
  },
];

export default function DividerPage() {
  return (
    <div className="flex">
      <div className="flex-1 xl:mr-90">
        <SectionIntro title="Divider" description="Divider is used to separate content" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <div className="max-w-80">
            <Heading as="h5">Nexus-Kit</Heading>
            <p className="mt-1 text-sm">beautiful and useful React components</p>
            <Divider />
            <div className="flex h-5 items-center">
              <p>Home</p>
              <Divider orientation="vertical" />
              <p>Components</p>
              <Divider orientation="vertical" />
              <p>Examples</p>
            </div>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="with-content" title="with content" codeText={withContentCode} code={<Code code={withContentCode} />}>
          <div className="flex">
            <Divider orientation="horizontal" className="flex-1">
              divider
            </Divider>
            <div className="relative flex h-60 w-1/2 justify-center">
              <Divider orientation="vertical">divider</Divider>
            </div>
          </div>
        </PreviewAndCode>
      </div>

      <OnThisPage list={navList} />
    </div>
  );
}
