import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Link from '@/components/ui/Link';
import OnThisPage, { type AnchorItem } from '@/components/business/OnThisPage';
import { IconExternalLink } from '@tabler/icons-react';
import sourceCode from '@/codes/sources/source.link';
import { defaultCode, disabledCode, externalCode, underlineCode } from '@/codes/demos/code.links';
import CodeDrawer from '@/components/business/CodeDrawer';

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

export default function LinkPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Link" description="Links are used to navigate between pages or to external resources, providing interactive elements for user navigation" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Link href="#">Link</Link>
        </PreviewAndCode>
        <PreviewAndCode anchorId="disabled" title="disabled" codeText={disabledCode} code={<Code code={disabledCode} />}>
          <Link href="#" disabled>
            Link
          </Link>
        </PreviewAndCode>
        <PreviewAndCode anchorId="underline" title="underline" codeText={underlineCode} code={<Code code={underlineCode} />}>
          <Link href="#" underline>
            Link
          </Link>
        </PreviewAndCode>
        <PreviewAndCode anchorId="external" title="external" codeText={externalCode} code={<Code code={externalCode} />}>
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
