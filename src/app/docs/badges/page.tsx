import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Badge from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { IconBellFilled } from '@tabler/icons-react';
import { defaultCode, sizeCode, placementCode, contentCode, asDotCode } from '@/codes/code.badges';

export default function Page() {
  return (
    <>
      <SectionIntro title="Badge" description="Badges are used to display additional information, status, or counts in a compact visual format" />
      <PreviewAndCode title="default" code={<Code code={defaultCode} />}>
        <Badge content="2">
          <Avatar src="/images/avatar-2.png" />
        </Badge>
      </PreviewAndCode>
      <PreviewAndCode title="size" code={<Code code={sizeCode} />}>
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
      <PreviewAndCode title="placements" code={<Code code={placementCode} />}>
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
      <PreviewAndCode title="custom content" code={<Code code={contentCode} />}>
        <div className="flex gap-4">
          <Badge content={<IconBellFilled size={12} />}>
            <Avatar rounded src="/images/avatar-2.png" />
          </Badge>
          <Badge content="99+" className="bg-success">
            <Avatar rounded src="/images/avatar-2.png" />
          </Badge>
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="asDot" code={<Code code={asDotCode} />}>
        <Badge asDot>
          <Avatar src="/images/avatar-2.png" />
        </Badge>
      </PreviewAndCode>
    </>
  );
}
