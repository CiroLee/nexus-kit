import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CodeDrawer from '@/components/business/CodeDrawer';
import Empty from '@/components/ui/Empty';
import Image from 'next/image';
import { Table, TableHeader, TableHeaderCell, TableBody, TableRow } from '@/components/ui/Table';
import { defaultCode, indicatorCode, descriptionCode, inTableCode } from '@/codes/demos/code.empties';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'custom-indicator', label: 'custom indicator' },
  { anchorId: 'custom description', label: 'custom description' },
  { anchorId: 'use-in-table', label: 'use in table' },
];

export default async function EmptyPage() {
  const sourceCode = await getSourceCode('Empty/index.tsx');
  return (
    <div className="flex">
      <div className="main-container @container">
        <SectionIntro title="Empty" description="Empty is a component that displays an empty placeholder when no data is available." />
        <CodeDrawer code={sourceCode} />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <Empty className="h-40" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-indicator" title="custom indicator" codeText={indicatorCode} code={<CodeBox code={indicatorCode} />}>
          <Empty className="h-40" indicator={<Image src="/images/empty-taken.svg" width={256} height={265} alt="empty taken" className="size-24" />} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-description" title="custom description" codeText={descriptionCode} code={<CodeBox code={descriptionCode} />}>
          <Empty className="h-40" description={<p className="text-sm text-red-500">Ops! No data available</p>} />
        </PreviewAndCode>
        <PreviewAndCode center={false} anchorId="use-in-table" title="use in table" codeText={inTableCode} code={<CodeBox code={inTableCode} />}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Age</TableHeaderCell>
                <TableHeaderCell>Address</TableHeaderCell>
                <TableHeaderCell>Company</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <Empty inTable className="h-40" />
            </TableBody>
          </Table>
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
