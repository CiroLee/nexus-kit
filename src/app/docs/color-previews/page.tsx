import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import ColorPreview from '@/components/ui/ColorPreview';
import { defaultCode, alphaCode, inTypographyCode } from '@/codes/demos/color-previews';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'alpha', label: 'alpha' },
  { anchorId: 'use-in-typography', label: 'use in typography' },
];

export default function ColorPreviewPage() {
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Color Preview" description="ColorPreview is used to preview colors. It is usually used in typography." />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <div className="flex flex-col gap-2">
            <ColorPreview color="#b02525" />
            <ColorPreview color="#4263eb" />
            <ColorPreview color="#37b24d" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="alpha" title="alpha" codeText={alphaCode} code={<CodeBox code={alphaCode} />}>
          <div className="flex flex-col gap-2">
            <ColorPreview color="rgb(223 38 0 / 60%)" />
            <ColorPreview color="rgb(0 0 192 / 60%)" />
            <ColorPreview color="rgb(0 143 74 / 60%)" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="use-in-typography" title="use in typography" codeText={inTypographyCode} code={<CodeBox code={inTypographyCode} />}>
          <div className="leading-loose">
            Use color <ColorPreview color="#4263eb" className="mx-0.5 align-middle" /> as brand color, and gray <ColorPreview color="#3a3a37" className="mx-0.5 align-middle" /> as background color,
            and reserve using pure colors like <ColorPreview color="rgb(0 0 0 / 60%)" className="mx-0.5 align-middle" /> for interactive elements.
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
