import PreviewAndCode from '@/components/business/PreviewAndCode';
import { IconTimezone } from '@tabler/icons-react';
import SectionIntro from '@/components/business/SectionIntro';
import Code from '@/components/business/Code';
import { Alert, AlertTitle } from '@/components/ui/Alert';
import OnThisPage, { type AnchorItem } from '@/components/business/OnThisPage';
import { stateCode, showIconCode, variantCode, customIcon } from '@/codes/demos/code.alerts';
import CodeDrawer from '@/components/business/CodeDrawer';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  {
    anchorId: 'state',
    label: 'state',
  },
  {
    anchorId: 'variant',
    label: 'variant',
  },
  {
    anchorId: 'hidden-icon',
    label: 'hidden icon',
  },
  {
    anchorId: 'custom-icon',
    label: 'custom Icon',
  },
];

export default async function HeadingPage() {
  const sourceCode = await getSourceCode('Alert/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Alert" description="Alerts are used to display brief messages." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode codeText={stateCode} anchorId="state" title="state" className="space-y-3" code={<Code code={stateCode} />}>
          <div className="space-y-5">
            <Alert state="info">
              <AlertTitle>info - Alert Title</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="success">
              <AlertTitle>success - Alert Title</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="warning">
              <AlertTitle>warning - Alert Title</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="danger">
              <AlertTitle>danger - Alert Title</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="neutral">
              <AlertTitle>default - Alert Title</AlertTitle>
              your can add alert content here
            </Alert>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="variant" title="variant" codeText={variantCode} code={<Code code={variantCode} />}>
          <div className="space-y-5">
            <Alert state="info" variant="solid">
              <AlertTitle>solid - Alert Title</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="info" variant="bordered">
              <AlertTitle>bordered - Alert Title</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="info" variant="light">
              <AlertTitle>light - Alert Title</AlertTitle>
              your can add alert content here
            </Alert>
          </div>
        </PreviewAndCode>
        <PreviewAndCode codeText={showIconCode} anchorId="hidden-icon" title="hidden icon" code={<Code code={showIconCode} />}>
          <Alert hiddenIcon>
            <AlertTitle>Alert Title</AlertTitle>
            your can add alert content here
          </Alert>
        </PreviewAndCode>
        <PreviewAndCode codeText={customIcon} anchorId="custom-icon" title="custom Icon" code={<Code code={customIcon} />}>
          <Alert state="neutral" icon={<IconTimezone size={24} />}>
            <AlertTitle>Alert Title</AlertTitle>
            your can add alert content here
          </Alert>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
