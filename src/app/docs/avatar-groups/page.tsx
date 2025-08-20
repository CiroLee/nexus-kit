import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import { Avatar, AvatarGroup, type AvatarVariants } from '@/components/ui/Avatar';
import { avatarGroupSizeCode, roundedCode, orientationVCode } from '@/codes/demos/code.avatars';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'size', label: 'size' },
  { anchorId: 'rounded', label: 'rounded' },
  { anchorId: 'orientation-vertical', label: 'orientation vertical' },
];

export default async function AvatarPage() {
  const sourceCode = await getSourceCode('Avatar/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Avatar Group" description="Avatar Group is a group of avatars." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="size" codeText={avatarGroupSizeCode} title="size" code={<CodeBox code={avatarGroupSizeCode} />}>
          <div className="space-y-8">
            {['sm', 'md', 'lg', 'xl'].map((size) => (
              <AvatarGroup bordered key={size} size={size as AvatarVariants['size']}>
                <Avatar src="/images/avatar-1.png" alt="avatar 1" />
                <Avatar src="/images/avatar-2.png" alt="avatar 2" />
                <Avatar src="/images/avatar-3.png" alt="avatar 3" />
                <Avatar src="/images/avatar-4.png" alt="avatar 4" />
                <Avatar alt="more" fallback="+2" />
              </AvatarGroup>
            ))}
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="rounded" codeText={roundedCode} title="rounded" code={<CodeBox code={roundedCode} />}>
          <AvatarGroup bordered rounded>
            <Avatar src="/images/avatar-1.png" alt="avatar 1" />
            <Avatar src="/images/avatar-2.png" alt="avatar 2" />
            <Avatar src="/images/avatar-3.png" alt="avatar 3" />
            <Avatar src="/images/avatar-4.png" alt="avatar 4" />
            <Avatar alt="more" fallback="+2" />
          </AvatarGroup>
        </PreviewAndCode>
        <PreviewAndCode anchorId="orientation-vertical" codeText={orientationVCode} title="vertical" code={<CodeBox code={orientationVCode} />}>
          <AvatarGroup bordered orientation="vertical">
            <Avatar src="/images/avatar-1.png" alt="avatar 1" />
            <Avatar src="/images/avatar-2.png" alt="avatar 2" />
            <Avatar src="/images/avatar-3.png" alt="avatar 3" />
            <Avatar src="/images/avatar-4.png" alt="avatar 4" />
            <Avatar alt="more" fallback="+2" />
          </AvatarGroup>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
