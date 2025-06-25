'use client';
import { useRef, useState } from 'react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import ClientCode from '@/components/business/ClientCode';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import SignaturePanel, { type SignaturePanelMethod } from '@/components/ui/SignaturePanel';
import Button from '@/components/ui/Button';
import { defaultCode, clearAndSaveCode, customCode } from '@/codes/demos/code.signature-panel';
import CodeDrawer from '@/components/business/CodeDrawer';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'save-clear', label: 'save and clear' },
  { anchorId: 'custom', label: 'custom' },
];

export default function SignaturePanelMain({ sourceCode }: { sourceCode?: string }) {
  const [isEmptySignature, setIsEmptySignature] = useState(true);
  const signatureMethodRef = useRef<SignaturePanelMethod>(null);
  const handleClear = async () => {
    await signatureMethodRef.current?.clear();
    setIsEmptySignature(true);
  };
  const handleSave = async () => {
    const data = await signatureMethodRef.current?.save();
    if (data) {
      const a = document.createElement('a');
      a.href = data;
      a.download = 'signature.png';
      a.click();
    }
  };

  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="SignaturePanel" description="SignaturePanel is a component that allows users to draw signatures." />
        <CodeDrawer isClient code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<ClientCode code={defaultCode} />}>
          <SignaturePanel className="h-80 overflow-hidden rounded" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="save-clear" title="save and clear" codeText={clearAndSaveCode} code={<ClientCode code={clearAndSaveCode} />}>
          <SignaturePanel ref={signatureMethodRef} className="h-80 overflow-hidden rounded" onDrawEnd={() => setIsEmptySignature(false)} />
          <div className="mt-4 flex gap-2">
            <Button disabled={isEmptySignature} onClick={handleClear}>
              Clear
            </Button>
            <Button disabled={isEmptySignature} onClick={handleSave}>
              Save
            </Button>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom" title="custom" codeText={customCode} code={<ClientCode code={customCode} />}>
          <SignaturePanel panelColor="#d4ecfd" lineColor="red" lineWidth={4} className="h-80 overflow-hidden rounded" />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
