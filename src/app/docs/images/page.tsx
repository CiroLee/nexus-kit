import PreviewAndCode from '@/components/business/PreviewAndCode';
import SectionIntro from '../../../components/business/SectionIntro';
import CodeBox from '@/components/business/CodeBox';
import Image from '@/components/ui/Image';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { defaultCode, roundedCode, aspectRatioCode, fitCode } from '@/codes/demos/code.images';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'rounded', label: 'rounded' },
  { anchorId: 'aspectRatio', label: 'aspectRatio' },
  { anchorId: 'fit', label: 'fit' },
];

export default async function ImagePage() {
  const sourceCode = await getSourceCode('Image/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Image" description="Image is used to display the image content." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Image src="https://dub.sh/mUoRWra" className="h-70 w-50" alt="demo image" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="rounded" title="rounded" codeText={roundedCode} code={<CodeBox code={roundedCode} />}>
          <Image src="https://dub.sh/mUoRWra" className="h-70 w-50 rounded-md" alt="demo image" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="aspectRatio" title="aspectRatio" codeText={aspectRatioCode} code={<CodeBox code={aspectRatioCode} />}>
          <Image src="https://dub.sh/mUoRWra" className="w-50" aspectRatio={16 / 9} alt="demo image" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="fit" title="fit" codeText={fitCode} code={<CodeBox code={fitCode} />}>
          <Image src="https://dub.sh/mUoRWra" className="h-40 w-80 rounded border border-red-400" fit="contain" alt="demo image" />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
