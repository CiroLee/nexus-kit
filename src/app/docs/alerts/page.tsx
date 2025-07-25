import PreviewAndCode from '@/components/business/PreviewAndCode';
import { IconTimezone } from '@tabler/icons-react';
import SectionIntro from '@/components/business/SectionIntro';
import CodeBox from '@/components/business/CodeBox';
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
        <PreviewAndCode codeText={stateCode} anchorId="state" title="state" className="space-y-3" code={<CodeBox code={stateCode} />}>
          <div className="space-y-5">
            <Alert state="info">
              <AlertTitle>Alert Title - info</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="success">
              <AlertTitle>Alert Title - success</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="warning">
              <AlertTitle>Alert Title - warning</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="danger">
              <AlertTitle>Alert Title - danger</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="neutral">
              <AlertTitle>Alert Title - default</AlertTitle>
              your can add alert content here
            </Alert>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="variant" title="variant" codeText={variantCode} code={<CodeBox code={variantCode} />}>
          <div className="space-y-5">
            <Alert state="info" variant="solid">
              <AlertTitle>Alert Title - solid</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="info" variant="bordered">
              <AlertTitle>Alert Title - bordered</AlertTitle>
              your can add alert content here
            </Alert>
            <Alert state="info" variant="light">
              <AlertTitle>Alert Title - light</AlertTitle>
              your can add alert content here
            </Alert>
          </div>
        </PreviewAndCode>
        <PreviewAndCode codeText={showIconCode} anchorId="hidden-icon" title="hidden icon" code={<CodeBox code={showIconCode} />}>
          <Alert hiddenIcon>
            <AlertTitle>Alert Title</AlertTitle>
            your can add alert content here
          </Alert>
        </PreviewAndCode>
        <PreviewAndCode codeText={customIcon} anchorId="custom-icon" title="custom Icon" code={<CodeBox code={customIcon} />}>
          <Alert state="neutral" icon={<IconTimezone size={20} className="mt-0.5" />}>
            <AlertTitle>Alert Title</AlertTitle>
            your can add alert content here
          </Alert>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
