import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '../../../components/business/SectionIntro';
import Code from '@/components/business/Code';
import Image from '@/components/ui/Image';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import sourceCode from '@/codes/sources/source.image';
import { defaultCode, roundedCode, aspectRatioCode, fitCode } from '@/codes/demos/code.images';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'rounded', label: 'rounded' },
  { anchorId: 'aspectRatio', label: 'aspectRatio' },
  { anchorId: 'fit', label: 'fit' },
];

export default function ImagePage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Image" description="Image is used to display the image content." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Image src="https://dub.sh/mUoRWra" className="h-70 w-50" alt="demo image" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="rounded" title="rounded" codeText={roundedCode} code={<Code code={roundedCode} />}>
          <Image src="https://dub.sh/mUoRWra" className="h-70 w-50 rounded-md" alt="demo image" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="aspectRatio" title="aspectRatio" codeText={aspectRatioCode} code={<Code code={aspectRatioCode} />}>
          <Image src="https://dub.sh/mUoRWra" className="w-50" aspectRatio={16 / 9} alt="demo image" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="fit" title="fit" codeText={fitCode} code={<Code code={fitCode} />}>
          <Image src="https://dub.sh/mUoRWra" className="h-40 w-80 rounded border border-red-400" fit="contain" alt="demo image" />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
