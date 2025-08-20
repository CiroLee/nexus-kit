import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Tag from '@/components/ui/Tag';
import { colorsCode, borderedCode, pillCode, sizeCode } from '@/codes/demos/code.tags';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'colors', label: 'colors' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'bordered', label: 'bordered' },
  { anchorId: 'pill', label: 'pill shape' },
];

export default async function Page() {
  const sourceCode = await getSourceCode('Tag/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Tag" description="Tags are used to categorize content." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="colors" title="colors" codeText={colorsCode} code={<CodeBox code={colorsCode} />}>
          <div className="flex gap-4">
            <Tag colors="primary">primary</Tag>
            <Tag colors="secondary">secondary</Tag>
            <Tag colors="warning">warning</Tag>
            <Tag colors="danger">danger</Tag>
            <Tag colors="neutral">neutral</Tag>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <Tag colors="neutral" size="sm">
              Tag
            </Tag>
            <Tag colors="neutral" size="md">
              Tag
            </Tag>
            <Tag colors="neutral" size="lg">
              Tag
            </Tag>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="bordered" title="bordered" codeText={borderedCode} code={<CodeBox code={borderedCode} />}>
          <div className="flex gap-4">
            <Tag bordered colors="primary">
              primary
            </Tag>
            <Tag bordered colors="secondary">
              secondary
            </Tag>
            <Tag bordered colors="warning">
              warning
            </Tag>
            <Tag bordered colors="danger">
              danger
            </Tag>
            <Tag bordered colors="neutral">
              neutral
            </Tag>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="pill" title="pill shape" codeText={pillCode} code={<CodeBox code={pillCode} />}>
          <div className="flex gap-4">
            <Tag bordered pill colors="primary">
              Tag
            </Tag>
            <Tag bordered pill colors="secondary">
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
