import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '../../../components/business/SectionIntro';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import HoverCard from '@/components/ui/HoverCard';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Link from '@/components/ui/Link';
import { Avatar } from '@/components/ui/Avatar';
import { IconExternalLink } from '@tabler/icons-react';
import { defaultCode, placementCode, offsetCode, hiddenArrowCode } from '@/codes/demos/code.hover-cards';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'placement', label: 'placement' },
  { anchorId: 'offset', label: 'offset' },
  { anchorId: 'hidden-arrow', label: 'hiddenArrow' },
];

function HoverCardContent() {
  return (
    <div className="flex gap-3">
      <Avatar src="/images/avatar-1.png" className="size-11" />
      <div>
        <p className="font-semibold">Sam John</p>
        <p className="text-description text-xs">UX Designer</p>
        <div className="text-description/70 mt-2 space-x-2 text-sm">
          <span>following: 123</span>
          <span>followers: 456</span>
        </div>
      </div>
    </div>
  );
}

function HoverTrigger() {
  return (
    <Link href="#">
      Sam John
      <IconExternalLink size={16} />
    </Link>
  );
}
export default async function HoverCardPage() {
  const sourceCode = await getSourceCode('HoverCard/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="HoverCard" description="HoverCard is used to display content when hovering over an element." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <HoverCard className="min-w-55" align="start" trigger={<HoverTrigger />}>
            <HoverCardContent />
          </HoverCard>
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="placement"
          title="placement"
          description="use side and align props to change the position of the HoverCard"
          codeText={placementCode}
          code={<CodeBox code={placementCode} />}>
          <HoverCard className="min-w-55" side="top" align="center" trigger={<HoverTrigger />}>
            <HoverCardContent />
          </HoverCard>
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="offset"
          title="offset"
          description="use sideOffset and alignOffset props to change the offset of the HoverCard"
          codeText={offsetCode}
          code={<CodeBox code={offsetCode} />}>
          <HoverCard className="min-w-55" align="start" sideOffset={16} trigger={<HoverTrigger />}>
            <HoverCardContent />
          </HoverCard>
        </PreviewAndCode>
        <PreviewAndCode anchorId="hidden-arrow" title="hiddenArrow" codeText={hiddenArrowCode} code={<CodeBox code={hiddenArrowCode} />}>
          <HoverCard className="min-w-55" align="start" hiddenArrow trigger={<HoverTrigger />}>
            <HoverCardContent />
          </HoverCard>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
