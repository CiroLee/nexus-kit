'use client';
import { useState } from 'react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import ClientCode from '@/components/business/ClientCode';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeDrawer from '@/components/business/CodeDrawer';
import { Button } from '@/components/ui/Button';
import NativeDialog from '@/components/ui/NativeDialog';
import { defaultCode, sizeCode, backdropCode, hideDescCode, scrollContentCode, hideFooterCode, customFooterCode } from '@/codes/demos/code.native-dialogs';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'backdrop', label: 'backdrop' },
  { anchorId: 'hide-title-description', label: 'hide title or description' },
  { anchorId: 'content-scroll', label: 'content scroll' },
  { anchorId: 'hide-footer', label: 'hide footer' },
  { anchorId: 'custom-footer', label: 'custom footer' },
];
export default function NativeDialogPage({ sourceCode }: { sourceCode?: string }) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [backdrop, setBackdrop] = useState<'opaque' | 'blur' | 'transparent'>('opaque');
  const [hideFooter, setHideFooter] = useState(false);

  const reset = () => {
    setSize('md');
    setBackdrop('opaque');
    setHideFooter(false);
  };
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Native Dialog" description="NativeDialog uses native dialog to build a dialog component." />
        <CodeDrawer isClient code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<ClientCode code={defaultCode} />}>
          <Button
            onClick={() => {
              reset();
              setOpen1(true);
            }}>
            open dialog
          </Button>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<ClientCode code={sizeCode} />}>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                reset();
                setSize('sm');
                setOpen1(true);
              }}>
              Small
            </Button>
            <Button
              onClick={() => {
                reset();
                setSize('md');
                setOpen1(true);
              }}>
              Medium
            </Button>
            <Button
              onClick={() => {
                reset();
                setSize('lg');
                setOpen1(true);
              }}>
              Large
            </Button>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="backdrop" title="backdrop" codeText={backdropCode} code={<ClientCode code={backdropCode} />}>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                reset();
                setBackdrop('opaque');
                setOpen1(true);
              }}>
              Opaque
            </Button>
            <Button
              onClick={() => {
                reset();
                setBackdrop('blur');
                setOpen1(true);
              }}>
              Blur
            </Button>
            <Button
              onClick={() => {
                reset();
                setBackdrop('transparent');
                setOpen1(true);
              }}>
              Transparent
            </Button>
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="hide-title-description" title="hide title or description" codeText={hideDescCode} code={<ClientCode code={hideDescCode} />}>
          <Button onClick={() => setOpen2(true)}>open dialog</Button>
        </PreviewAndCode>
        <PreviewAndCode anchorId="content-scroll" title="content scroll" codeText={scrollContentCode} code={<ClientCode code={scrollContentCode} />}>
          <Button onClick={() => setOpen3(true)}>open dialog</Button>
        </PreviewAndCode>
        <PreviewAndCode anchorId="hide-footer" title="hide footer" codeText={hideFooterCode} code={<ClientCode code={hideFooterCode} />}>
          <Button
            onClick={() => {
              reset();
              setHideFooter(true);
              setOpen1(true);
            }}>
            hide footer
          </Button>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-footer" title="custom footer" codeText={customFooterCode} code={<ClientCode code={customFooterCode} />}>
          <Button onClick={() => setOpen4(true)}>open dialog</Button>
        </PreviewAndCode>
        <NativeDialog
          open={open1}
          size={size}
          backdrop={backdrop}
          hideFooter={hideFooter}
          onClose={() => setOpen1(false)}
          title="Title"
          description="This is a description..."
          onCancel={() => {
            console.log('NativeDialog: you trigger cancel');
          }}
          onConfirm={() => {
            console.log('nativeDialog: you trigger confirm');
          }}>
          content...
        </NativeDialog>
        <NativeDialog open={open2} title="Title" onClose={() => setOpen2(false)}>
          omitting title/description will not render
        </NativeDialog>
        <NativeDialog open={open3} title="Title" onClose={() => setOpen3(false)}>
          {new Array(30).fill(0).map((_, index) => (
            <p key={index}>this is text {index} ...</p>
          ))}
        </NativeDialog>
        <NativeDialog
          open={open4}
          title="Title"
          description="this is description..."
          onClose={() => setOpen4(false)}
          footer={
            <div className="flex gap-4 px-3.5 pt-6">
              <Button colors="danger" variant="light" onClick={() => setOpen4(false)}>
                Quit
              </Button>
              <Button onClick={() => setOpen4(false)}>Submit</Button>
            </div>
          }>
          content...
        </NativeDialog>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
