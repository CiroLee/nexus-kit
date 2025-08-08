import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import { Avatar, AvatarGroup, type AvatarVariants } from '@/components/ui/Avatar';
import { orientationHCode, orientationVCode } from '@/codes/demos/code.avatars';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'size',
    label: 'size',
  },
  {
    anchorId: 'orientation-vertical',
    label: 'orientation vertical',
  },
];

export default async function AvatarPage() {
  const sourceCode = await getSourceCode('Avatar/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Avatar Group" description="Avatar Group is a group of avatars." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="size" codeText={orientationHCode} title="size" code={<CodeBox code={orientationHCode} />}>
          <div className="space-y-8">
            {['sm', 'md', 'lg', 'xl'].map((size) => (
              <AvatarGroup orientation="horizontal" key={size} size={size as AvatarVariants['size']}>
                <Avatar bordered src="/images/avatar-1.png" alt="avatar 1" />
                <Avatar bordered src="/images/avatar-2.png" alt="avatar 2" />
                <Avatar bordered src="/images/avatar-3.png" alt="avatar 3" />
                <Avatar bordered src="/images/avatar-4.png" alt="avatar 4" />
                <Avatar bordered alt="more" fallback="+2" />
              </AvatarGroup>
            ))}
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="orientation-vertical" codeText={orientationVCode} title="vertical" code={<CodeBox code={orientationVCode} />}>
          <AvatarGroup orientation="vertical">
            <Avatar bordered src="/images/avatar-1.png" alt="avatar 1" />
            <Avatar bordered src="/images/avatar-2.png" alt="avatar 2" />
            <Avatar bordered src="/images/avatar-3.png" alt="avatar 3" />
            <Avatar bordered src="/images/avatar-4.png" alt="avatar 4" />
            <Avatar bordered alt="more" fallback="+2" />
          </AvatarGroup>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
