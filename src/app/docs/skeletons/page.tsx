import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { SkeletonCircle, SkeletonBlock, SkeletonText } from '@/components/ui/Skeleton';
import CodeDrawer from '@/components/business/CodeDrawer';
import { defaultCode, variantCode, combineCode } from '@/codes/demos/code.skeletons';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'variant', label: 'variant' },
  { anchorId: 'skeleton-combine', label: 'combination' },
];

export default async function SkeletonPage() {
  const sourceCode = await getSourceCode('Skeleton/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Skeleton" description="Skeleton is a placeholder component that is used to display a loading state." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <SkeletonText className="max-w-100" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="variant" title="variant" codeText={variantCode} code={<CodeBox code={variantCode} />}>
          <SkeletonText variant="shimmer" className="max-w-100" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="skeleton-combine" title="combination" codeText={combineCode} code={<CodeBox code={combineCode} />}>
          <div className="flex gap-4">
            <SkeletonCircle />
            <div className="w-100 space-y-3">
              <SkeletonText />
              <SkeletonText className="w-[80%]" />
              <SkeletonBlock />
            </div>
          </div>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
