import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import Code from '@/components/business/Code';
import { Star, StarRating } from '@/components/ui/StarRating';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import sourceCode from '@/codes/sources/source.star-rating';
import { starCode, starRatingCode, sizeCode, customColorsCode } from '@/codes/demos/code.star-ratings';

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

export default function StarRatingPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="StarRating" description="StarRating is a component that shows star ratings in a detailed way" />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="star" title="star" codeText={starCode} code={<Code code={starCode} />}>
          <Star score={0.4} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="star-rating" title="StarRating" codeText={starRatingCode} code={<Code code={starRatingCode} />}>
          <StarRating rating={3.4} maxStars={5} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<Code code={sizeCode} />}>
          <StarRating size={24} rating={3.4} maxStars={5} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-colors" title="custom colors" codeText={customColorsCode} code={<Code code={customColorsCode} />}>
          <StarRating defaultColor="gray" fillColor="red" rating={3.4} maxStars={5} />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
