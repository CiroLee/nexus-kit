import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '../../../components/business/SectionIntro';
import Code from '@/components/business/Code';
import Heading from '@/components/ui/Heading';
import { asCode } from '@/codes/demos/code.headings';
import sourceCode from '@/codes/sources/source.heading';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';

const navList: AnchorItem[] = [
  {
    anchorId: 'as',
    label: 'as',
  },
];

export default function HeadingPage() {
  return (
    <div className="flex">
      <div className="flex-1 sm:mr-90">
        <SectionIntro title="Heading" className="border-line border-b" description="Headings are used to display the title content" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="as" codeText={asCode} title="as" code={<Code code={asCode} />}>
          <div className="space-y-3">
            <Heading as="h1">I think therefore I am</Heading>
            <Heading as="h2">I think therefore I am</Heading>
            <Heading as="h4">I think therefore I am</Heading>
            <Heading as="h4">I think therefore I am</Heading>
            <Heading as="h5">I think therefore I am</Heading>
            <Heading as="h6">I think therefore I am</Heading>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
