export const defaultCode = `import Empty from "@/components/ui/Empty";

export default function Page() {
  return (
    <>
      <Empty className="h-40" />
    </>
  )
}`;

export const indicatorCode = `import Empty from "@/components/ui/Empty";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Empty className="h-40" indicator={<Image src="/images/empty-taken.svg" width={256} height={265} alt="empty taken" className="size-24" />} />
    </>
  )
}`;

export const descriptionCode = `import Empty from "@/components/ui/Empty";

export default function Page() {
  return (
    <>
       <Empty className="h-40" description={<p className="text-sm text-red-500">Ops! No data available</p>} />
    </>
  )
}`;

export const inTableCode = `import Empty from "@/components/ui/Empty";
import { Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell } from '@/components/ui/Table';

export default function Page() {
  return (
    <>
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
          <TableBody className="relative h-40">
            <Empty inTable />
          </TableBody>
        </Table>
    </>
  )
}`;
