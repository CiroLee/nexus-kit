import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Tag from '@/components/ui/Tag';
import { colorsCode, borderedCode, pillCode } from '@/codes/demos/code.tags';
import sourceCode from '@/codes/sources/source.tag';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';

const navList: AnchorItem[] = [
  {
    anchorId: 'colors',
    label: 'colors',
  },
  {
    anchorId: 'bordered',
    label: 'bordered',
  },
  {
    anchorId: 'pill',
    label: 'pill shape',
  },
];

export default function Page() {
  return (
    <div className="flex">
      <div className="flex-1 sm:mr-90">
        <SectionIntro title="Tags" description="Tags are used to categorize content" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="colors" title="colors" codeText={colorsCode} code={<Code code={colorsCode} />}>
          <div className="flex gap-4">
            <Tag colors="primary">primary</Tag>
            <Tag colors="success">success</Tag>
            <Tag colors="warning">warning</Tag>
            <Tag colors="danger">danger</Tag>
            <Tag colors="neutral">neutral</Tag>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="bordered" title="bordered" codeText={borderedCode} code={<Code code={borderedCode} />}>
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
        <PreviewAndCode anchorId="pill" title="pill shape" codeText={pillCode} code={<Code code={pillCode} />}>
          <div className="flex gap-4">
            <Tag bordered pill colors="primary">
              Tag
            </Tag>
            <Tag bordered pill colors="success">
              Tag
            </Tag>
            <Tag bordered pill colors="warning">
              Tag
            </Tag>
            <Tag bordered pill colors="danger">
              Tag
            </Tag>
            <Tag bordered pill colors="neutral">
              Tag
            </Tag>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
