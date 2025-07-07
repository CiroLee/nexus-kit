import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import { AlertDialog, AlertDialogAction, AlertDialogCancel } from '@/components/ui/AlertDialog';
import Button from '@/components/ui/Button';
import { defaultCode, backdropCode, sizeCode, customFooterCode } from '@/codes/demos/code.alertdialogs';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'backdrop', label: 'backdrop' },
  { anchorId: 'size', label: 'size' },
  { anchorId: 'custom-footer', label: 'custom footer' },
];

export default async function AlertDialogPage() {
  const sourceCode = await getSourceCode('AlertDialog/index.tsx');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Alert Dialog" description="Alert dialogs interrupt users with urgent information, details, or actions." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <AlertDialog trigger={<Button>delete item</Button>} title="Warning" description="Are you sure you want to delete this item?" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="backdrop" title="backdrop" codeText={backdropCode} code={<CodeBox code={backdropCode} />}>
          <div className="flex items-center gap-4">
            <AlertDialog backdrop="opaque" trigger={<Button>opaque</Button>} title="Warning" description="Are you sure you want to delete this item?" />
            <AlertDialog backdrop="blur" trigger={<Button>blur</Button>} title="Warning" description="Are you sure you want to delete this item?" />
            <AlertDialog backdrop="transparent" trigger={<Button>transparent</Button>} title="Warning" description="Are you sure you want to delete this item?" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="size" title="size" codeText={sizeCode} code={<CodeBox code={sizeCode} />}>
          <div className="flex items-center gap-4">
            <AlertDialog size="sm" trigger={<Button>small</Button>} title="Warning" description="Are you sure you want to delete this item?" />
            <AlertDialog size="md" trigger={<Button>medium</Button>} title="Warning" description="Are you sure you want to delete this item?" />
            <AlertDialog size="lg" trigger={<Button>large</Button>} title="Warning" description="Are you sure you want to delete this item?" />
          </div>
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-footer" title="custom footer" codeText={customFooterCode} code={<CodeBox code={customFooterCode} />}>
          <AlertDialog
            trigger={<Button>delete item</Button>}
            title="Warning"
            description="Are you sure you want to delete this item?"
            footer={
              <div className="flex gap-4 px-3.5 pt-6">
                <AlertDialogCancel>
                  <Button colors="danger" variant="light">
                    Quit
                  </Button>
                </AlertDialogCancel>
                <AlertDialogAction>
                  <Button>Submit</Button>
                </AlertDialogAction>
              </div>
            }
          />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
