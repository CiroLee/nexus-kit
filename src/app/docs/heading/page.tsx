import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '../../../components/business/SectionIntro';
import Code from '@/components/business/Code';
import Heading from '@/components/ui/Heading';
import { asCode } from '@/codes/code.headings';

export default function HeadingPage() {
  return (
    <>
      <SectionIntro title="Heading" description="Headings are used to display the title content" />
      <PreviewAndCode title="as" code={<Code code={asCode} />}>
        <div className="space-y-3">
          <Heading as="h1">I think therefore I am</Heading>
          <Heading as="h2">I think therefore I am</Heading>
          <Heading as="h4">I think therefore I am</Heading>
          <Heading as="h4">I think therefore I am</Heading>
          <Heading as="h5">I think therefore I am</Heading>
          <Heading as="h6">I think therefore I am</Heading>
        </div>
      </PreviewAndCode>
    </>
  );
}
