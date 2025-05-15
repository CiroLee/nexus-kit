import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import Link from '@/components/ui/Link';
import OnThisPage, { type AnchorItem } from '@/components/business/OnThisPage';
import { IconExternalLink } from '@tabler/icons-react';
import { defaultCode, disabledCode, externalCode, underlineCode } from '@/codes/demos/code.links';
import CodeDrawer from '@/components/business/CodeDrawer';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'disabled',
    label: 'disabled',
  },
  {
    anchorId: 'underline',
    label: 'underline',
  },
  {
    anchorId: 'external',
    label: 'external',
  },
];

export default async function LinkPage() {
  const sourceCode = await getSourceCode('Link/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Link" description="Links are used to navigate between pages or to external resources, providing interactive elements for user navigation." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Link href="#">Link</Link>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<CodeBox code={disabledCode} />}>
          <Link href="#" disabled>
            Link
          </Link>
        </PreviewAndCode>
        <PreviewAndCode anchorId="underline" title="underline" codeText={underlineCode} code={<CodeBox code={underlineCode} />}>
          <Link href="#" underline>
            Link
          </Link>
        </PreviewAndCode>
        <PreviewAndCode anchorId="external" title="external" codeText={externalCode} code={<CodeBox code={externalCode} />}>
          <div className="flex gap-4">
            <Link href="https://github.com/CiroLee/nexus-kit" target="_blank">
              Link
            </Link>
            <Link href="https://github.com/CiroLee/nexus-kit" target="_blank" underline>
              Link <IconExternalLink size={16} />
            </Link>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
