import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Tag from '@/components/ui/Tag';
import { colorsCode, borderedCode, roundedCode } from '@/codes/demos/code.tags';
import sourceCode from '@/codes/sources/source.tag';
import CodeDrawer from '@/components/business/CodeDrawer';

export default function Page() {
  return (
    <>
      <SectionIntro title="Tags" description="Tags are used to categorize content" />
      <CodeDrawer code={sourceCode} />
      <PreviewAndCode title="colors" codeText={colorsCode} code={<Code code={colorsCode} />}>
        <div className="flex gap-4">
          <Tag colors="primary">primary</Tag>
          <Tag colors="success">success</Tag>
          <Tag colors="warning">warning</Tag>
          <Tag colors="danger">danger</Tag>
          <Tag colors="neutral">neutral</Tag>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="bordered" codeText={borderedCode} code={<Code code={borderedCode} />}>
        <div className="flex gap-4">
          <Tag bordered colors="primary">
            Primary
          </Tag>
          <Tag bordered colors="success">
            Success
          </Tag>
          <Tag bordered colors="warning">
            Warning
          </Tag>
          <Tag bordered colors="danger">
            Danger
          </Tag>
          <Tag bordered colors="neutral">
            Neutral
          </Tag>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="rounded" codeText={roundedCode} code={<Code code={roundedCode} />}>
        <div className="flex gap-4">
          <Tag bordered rounded colors="primary">
            Tag
          </Tag>
          <Tag bordered rounded colors="success">
            Tag
          </Tag>
          <Tag bordered rounded colors="warning">
            Tag
          </Tag>
          <Tag bordered rounded colors="danger">
            Tag
          </Tag>
          <Tag bordered rounded colors="neutral">
            Tag
          </Tag>
        </div>
      </PreviewAndCode>
    </>
  );
}
