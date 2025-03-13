import PreviewAndCode from '@/components/PreviewAndCode';
import SectionIntro from '../components/SectionIntro';
import Code from '@/components/Code';
import Heading from '@/components/ui/Heading';
import { asCode } from '@/codes/code.headings';

export default function HeadingPage() {
  return (
    <>
      <SectionIntro title="Heading" description="Headings are used to display the title content" />
      <PreviewAndCode title="as" className="space-y-3" code={<Code code={asCode} />}>
        <Heading as="h1">I think therefore I am</Heading>
        <Heading as="h2">I think therefore I am</Heading>
        <Heading as="h4">I think therefore I am</Heading>
        <Heading as="h4">I think therefore I am</Heading>
        <Heading as="h5">I think therefore I am</Heading>
        <Heading as="h6">I think therefore I am</Heading>
      </PreviewAndCode>
    </>
  );
}
