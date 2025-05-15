import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Badge from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { IconBellFilled } from '@tabler/icons-react';
import { defaultCode, sizeCode, placementCode, contentCode, asDotCode } from '@/codes/demos/code.badges';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
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
  {
    anchorId: 'placement',
    label: 'placement',
  },
  {
    anchorId: 'custom-content',
    label: 'custom content',
  },
  {
    anchorId: 'as-dot',
    label: 'asDot',
  },
];
export default async function BadgePage() {
  const sourceCode = await getSourceCode('Badge/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Badge" description="Badges are used to display additional information, status, or counts in a compact visual format." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" codeText={defaultCode} title="default" code={<CodeBox code={defaultCode} />}>
          <Badge content="2">
            <Avatar src="/images/avatar-2.png" />
          </Badge>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" codeText={sizeCode} title="size" code={<CodeBox code={sizeCode} />}>
          <div className="flex gap-4">
            <Badge size="sm" content="2">
              <Avatar rounded src="/images/avatar-2.png" />
            </Badge>
            <Badge size="md" content="2">
              <Avatar rounded src="/images/avatar-2.png" />
            </Badge>
            <Badge size="lg" content="2">
              <Avatar rounded src="/images/avatar-2.png" />
            </Badge>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="placement" codeText={placementCode} title="placements" code={<CodeBox code={placementCode} />}>
          <div className="flex gap-4">
            <Badge content="2" placement="top-left">
              <Avatar bordered src="/images/avatar-2.png" />
            </Badge>
            <Badge content="2" placement="top-right">
              <Avatar bordered src="/images/avatar-2.png" />
            </Badge>
            <Badge content="2" placement="bottom-left">
              <Avatar bordered src="/images/avatar-2.png" />
            </Badge>
            <Badge content="2" placement="bottom-right">
              <Avatar bordered src="/images/avatar-2.png" />
            </Badge>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-content" codeText={contentCode} title="custom content" code={<CodeBox code={contentCode} />}>
          <div className="flex gap-4">
            <Badge content={<IconBellFilled size={12} />}>
              <Avatar rounded src="/images/avatar-2.png" />
            </Badge>
            <Badge content="99+" className="bg-secondary">
              <Avatar rounded src="/images/avatar-2.png" />
            </Badge>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="as-dot" codeText={asDotCode} title="asDot" code={<CodeBox code={asDotCode} />}>
          <Badge asDot>
            <Avatar src="/images/avatar-2.png" />
          </Badge>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
