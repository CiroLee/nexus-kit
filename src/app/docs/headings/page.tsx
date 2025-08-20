import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '../../../components/business/SectionIntro';
import CodeBox from '@/components/business/CodeBox';
import Heading from '@/components/ui/Heading';
import { asCode } from '@/codes/demos/code.headings';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'as',
    label: 'as',
  },
];

export default async function HeadingPage() {
  const sourceCode = await getSourceCode('Heading/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Heading" description="Headings are used to display the title content." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="as" codeText={asCode} title="as" code={<CodeBox code={asCode} />}>
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
