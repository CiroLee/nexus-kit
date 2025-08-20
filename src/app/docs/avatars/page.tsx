import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import { Avatar } from '@/components/ui/Avatar';
import { IconUserFilled } from '@tabler/icons-react';
import { defaultCode, sizeCode, borderedCode, fallbackCode } from '@/codes/demos/code.avatars';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'bordered', label: 'bordered' },
  { anchorId: 'fallback', label: 'fallback' },
];

export default async function AvatarPage() {
  const sourceCode = await getSourceCode('Avatar/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Avatar" description="Avatars are used to represent a user, and the profile picture." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" codeText={defaultCode} title="default" code={<CodeBox code={defaultCode} />}>
          <div className="flex items-center gap-3.5">
            <Avatar src="/images/avatar-1.png" alt="avatar 1" />
            <Avatar src="/images/avatar-2.png" alt="avatar 2" rounded />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" codeText={sizeCode} title="size" code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-3.5">
            <Avatar size="sm" src="/images/avatar-1.png" alt="avatar 1" />
            <Avatar size="md" src="/images/avatar-2.png" alt="avatar 2" />
            <Avatar size="lg" src="/images/avatar-3.png" alt="avatar 3" />
            <Avatar size="xl" src="/images/avatar-4.png" alt="avatar 4" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="bordered" codeText={borderedCode} title="bordered" code={<CodeBox code={borderedCode} />}>
          <div className="flex items-center gap-3.5">
            <Avatar bordered src="/images/avatar-1.png" alt="avatar 1" />
            <Avatar bordered src="/images/avatar-2.png" alt="avatar 2" />
            <Avatar bordered src="/images/avatar-3.png" alt="avatar 3" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="fallback" codeText={fallbackCode} title="fallback" code={<CodeBox code={fallbackCode} />}>
          <div className="flex items-center gap-3.5">
            <Avatar alt="avatar 1" fallback="A" />
            <Avatar alt="avatar 2" fallback={<IconUserFilled size={20} />} />
            <Avatar alt="avatar 3" fallbackClassName="!bg-orange-400" fallback={<IconUserFilled size={20} />} />
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
