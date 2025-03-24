import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import { Avatar, AvatarGroup } from '@/components/ui/Avatar';
import { IconUserFilled } from '@tabler/icons-react';
import { defaultCode, sizeCode, borderedCode, fallbackCode, orientationHCode, orientationVCode } from '@/codes/demos/code.avatars';

export default function AvatarPage() {
  return (
    <>
      <SectionIntro title="Avatar" description="Avatars are used to represent a user, and the profile picture" />
      <PreviewAndCode title="default" code={<Code code={defaultCode} />}>
        <div className="flex items-center gap-3.5">
          <Avatar src="/images/avatar-1.png" alt="avatar 1" />
          <Avatar src="/images/avatar-2.png" alt="avatar 2" rounded />
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="size" code={<Code code={sizeCode} />}>
        <div className="flex items-center gap-3.5">
          <Avatar size="sm" src="/images/avatar-1.png" alt="avatar 1" />
          <Avatar size="md" src="/images/avatar-2.png" alt="avatar 2" />
          <Avatar size="lg" src="/images/avatar-3.png" alt="avatar 3" />
          <Avatar size="xl" src="/images/avatar-4.png" alt="avatar 4" />
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="bordered" code={<Code code={borderedCode} />}>
        <div className="flex items-center gap-3.5">
          <Avatar bordered src="/images/avatar-1.png" alt="avatar 1" />
          <Avatar bordered src="/images/avatar-2.png" alt="avatar 2" />
          <Avatar bordered src="/images/avatar-3.png" alt="avatar 3" />
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="fallback" code={<Code code={fallbackCode} />}>
        <div className="flex items-center gap-3.5">
          <Avatar alt="avatar 1" fallback="A" />
          <Avatar alt="avatar 2" fallback={<IconUserFilled size={20} />} />
          <Avatar alt="avatar 3" fallbackClassName="!bg-orange-400" fallback={<IconUserFilled size={20} />} />
        </div>
      </PreviewAndCode>
      <PreviewAndCode title="avatar group" description="orientation='horizontal'" code={<Code code={orientationHCode} />}>
        <AvatarGroup orientation="horizontal">
          <Avatar bordered src="/images/avatar-1.png" alt="avatar 1" />
          <Avatar bordered src="/images/avatar-2.png" alt="avatar 2" />
          <Avatar bordered src="/images/avatar-3.png" alt="avatar 3" />
          <Avatar bordered src="/images/avatar-4.png" alt="avatar 4" />
          <Avatar bordered alt="more" fallback="+2" />
        </AvatarGroup>
      </PreviewAndCode>
      <PreviewAndCode title="avatar group" description="orientation='vertical'" code={<Code code={orientationVCode} />}>
        <AvatarGroup orientation="vertical">
          <Avatar bordered src="/images/avatar-1.png" alt="avatar 1" />
          <Avatar bordered src="/images/avatar-2.png" alt="avatar 2" />
          <Avatar bordered src="/images/avatar-3.png" alt="avatar 3" />
          <Avatar bordered src="/images/avatar-4.png" alt="avatar 4" />
          <Avatar bordered alt="more" fallback="+2" />
        </AvatarGroup>
      </PreviewAndCode>
    </>
  );
}
