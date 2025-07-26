import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import { Star, StarRating } from '@/components/ui/StarRating';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { starCode, starRatingCode, sizeCode, customColorsCode } from '@/codes/demos/code.star-ratings';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'star',
    label: 'star',
  },
  {
    anchorId: 'star-rating',
    label: 'StarRating',
  },
  {
    anchorId: 'size',
    label: 'size',
  },
  {
    anchorId: 'custom-colors',
    label: 'custom colors',
  },
];

export default async function StarRatingPage() {
  const sourceCode = await getSourceCode('StarRating/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="StarRating" description="StarRating is a component that shows star ratings in a detailed way." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="star" title="star" codeText={starCode} code={<CodeBox code={starCode} />}>
          <Star value={0.4} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="star-rating" title="StarRating" codeText={starRatingCode} code={<CodeBox code={starRatingCode} />}>
          <StarRating value={3.4} max={5} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <StarRating size={24} value={3.4} max={5} />
        </PreviewAndCode>
        <PreviewAndCode
          anchorId="custom-colors"
          title="custom colors"
          description="fillColor and defaultColor support both light and dark mode, also support css variable colors"
          codeText={customColorsCode}
          code={<CodeBox code={customColorsCode} />}>
          <div className="space-y-4">
            <StarRating
              size={24}
              defaultColor={{ light: 'var(--color-purple-200)', dark: 'var(--color-purple-900)' }}
              fillColor={{ light: 'var(--color-purple-500)', dark: 'var(--color-purple-700)' }}
              value={3.4}
              max={5}
            />
            <StarRating size={24} defaultColor={{ light: '#ffc7d1', dark: '#0d1a3e' }} fillColor={{ light: '#fa1818', dark: '#0d39b1' }} value={3.4} max={5} />
            <StarRating size={24} defaultColor="gray" fillColor="black" value={3.4} max={5} />
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
