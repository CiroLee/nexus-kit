import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeDrawer from '@/components/business/CodeDrawer';
import Image from '@/components/ui/Image';
import sourceCode from '@/codes/sources/source.image';
import { defaultCode, fitCode, aspectRatioCode, nativeWHCode } from '@/codes/demos/code.images';

const navList: AnchorItem[] = [
  {
    anchorId: 'default',
    label: 'default',
  },
  {
    anchorId: 'fit',
    label: 'fit',
  },
  {
    anchorId: 'aspectRatio',
    label: 'aspectRatio',
  },
  {
    anchorId: 'w-h',
    label: 'width and height',
  },
];

export default function ImagePage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Image" description="Image component is used to display images in your application" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<Code code={defaultCode} />}>
          <Image src="https://bit.ly/427Ny7S" h={150} alt="playing guitar" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="fit" title="fit" codeText={fitCode} code={<Code code={fitCode} />}>
          <Image src="https://bit.ly/4jit4yF" fit="cover" w={150} h={200} alt="building" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="aspectRatio" title="aspectRatio" codeText={aspectRatioCode} code={<Code code={aspectRatioCode} />}>
          <Image src="https://bit.ly/4jit4yF" fit="cover" w={150} aspectRatio={16 / 9} alt="building" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="w-h" title="with html width and height" codeText={nativeWHCode} code={<Code code={nativeWHCode} />}>
          <Image src="https://bit.ly/4jit4yF" fit="cover" width={622} height={943} w={150} aspectRatio={16 / 9} alt="building" />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
