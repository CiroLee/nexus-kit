import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import Blockquote from '@/components/ui/Blockquote';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeDrawer from '@/components/business/CodeDrawer';
import { defaultCode, colorsCode } from '@/codes/demos/code.blockquotes';
import { getSourceCode } from '@/app/api/github';
const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'colors',
    label: 'colors',
  },
];

export default async function BlockquotePage() {
  const sourceCode = await getSourceCode('Blockquote/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Blockquote" description="Blockquote is used to highlight and emphasize text from another source." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Blockquote cite="—— Thomas Edison">
            I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
          </Blockquote>
        </PreviewAndCode>
        <PreviewAndCode anchorId="colors" title="colors" codeText={colorsCode} code={<Code code={colorsCode} />}>
          <div className="space-y-4">
            <Blockquote colors="primary" cite="—— Thomas Edison">
              I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
            </Blockquote>
            <Blockquote colors="neutral" cite="—— Thomas Edison">
              I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
            </Blockquote>
            <Blockquote colors="secondary" cite="—— Thomas Edison">
              I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
            </Blockquote>
            <Blockquote colors="warning" cite="—— Thomas Edison">
              I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
            </Blockquote>
            <Blockquote colors="danger" cite="—— Thomas Edison">
              I want to bring out the secrets of nature and apply them for the happiness of man. I don’t know of any better service to offer for the short time we are in the world.
            </Blockquote>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
