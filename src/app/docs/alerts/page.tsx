import PreviewAndCode from '@/components/business/PreviewAndCode';
import { IconTimezone } from '@tabler/icons-react';
import SectionIntro from '@/components/business/SectionIntro';
import Code from '@/components/business/Code';
import { Alert, AlertTitle } from '@/components/ui/Alert';
import OnThisPage, { type AnchorItem } from '@/components/business/OnThisPage';
import { stateCode, showIconCode, customIcon } from '@/codes/demos/code.alerts';
import sourceCode from '@/codes/sources/source.alert';
import CodeDrawer from '@/components/business/CodeDrawer';

const navList: AnchorItem[] = [
  {
    anchorId: 'state',
    label: 'state',
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

export default function HeadingPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Alert" description="Alerts are used to display brief messages" />
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
            <Alert state="default">
              <AlertTitle>default - Alert Title</AlertTitle>
              your can add alert content here
            </Alert>
          </div>
        </PreviewAndCode>
        <PreviewAndCode codeText={showIconCode} anchorId="hidden-icon" title="hidden icon" code={<Code code={showIconCode} />}>
          <Alert showIcon={false}>
            <AlertTitle>Alert Title</AlertTitle>
            your can add alert content here
          </Alert>
        </PreviewAndCode>
        <PreviewAndCode codeText={customIcon} anchorId="custom-icon" title="custom Icon" code={<Code code={customIcon} />}>
          <Alert state="default" icon={<IconTimezone size={24} />}>
            <AlertTitle>Alert Title</AlertTitle>
            your can add alert content here
          </Alert>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
