'use client';
import { useState } from 'react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import ClientCode from '@/components/business/ClientCode';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeDrawer from '@/components/business/CodeDrawer';
import { Button } from '@/components/ui/Button';
import CodeBox from '@/components/business/CodeBox';
import NativeDialog from '@/components/ui/NativeDialog';

const navList: AnchorItem[] = [{ anchorId: 'default', label: 'default' }];
export default function NativeDialogPage({ sourceCode }: { sourceCode?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Native Dialog" description="NativeDialog uses native dialog tag to build a dialog." />
        <CodeDrawer isClient code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText="" code={<ClientCode code="" />}>
          <Button onClick={() => setOpen(true)}>Open</Button>
          <NativeDialog open={open}>123</NativeDialog>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
