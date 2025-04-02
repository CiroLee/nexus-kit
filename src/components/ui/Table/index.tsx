import { cn } from '@/lib/utils';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  ref?: React.Ref<HTMLTableElement>;
  fixedHeader?: boolean;
}
export function Table({ fixedHeader, className, ...props }: TableProps) {
  return (
    <div
      className={cn(
        'border-line relative box-border max-h-100 overflow-auto rounded-md border [&_tr:last-child]:border-none',
        {
          '[&_thead]:sticky [&_thead]:top-0': fixedHeader,
        },
        className,
      )}>
      <table className="w-full table-auto border-collapse border-spacing-0" {...props} />
    </div>
  );
}

export function TableHeader({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.Ref<HTMLTableSectionElement> }) {
  return <thead className={cn('w-full bg-neutral-100 text-sm shadow-[0_1px_0_0_rgb(229,229,229)] dark:bg-[#2e2e2e] dark:shadow-[0_1px_0_0_rgb(64,64,64)]', className)} {...props} />;
}
interface TableHeaderCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  ref?: React.Ref<HTMLTableCellElement>;
}
export function TableHeaderCell({ className, ...props }: TableHeaderCellProps) {
  return (
    <th
      className={cn(
        `relative p-3 text-start after:absolute after:top-1/2 after:right-0 after:h-[40%] after:w-px after:-translate-y-1/2 after:bg-neutral-300 last:after:content-none dark:after:bg-neutral-700`,
        className,
      )}
      {...props}
    />
  );
}

export function TableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement> & { ref?: React.Ref<HTMLTableRowElement> }) {
  return <tr className={cn('borer-b border-line border-b transition-colors group-data-striped:even:bg-neutral-50 dark:group-data-striped:even:bg-neutral-700/30', className)} {...props} />;
}

export function TableCell({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement> & { ref?: React.Ref<HTMLTableCellElement> }) {
  return <td className={cn('p-3 text-sm', className)} {...props} />;
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  ref?: React.Ref<HTMLTableSectionElement>;
  striped?: boolean;
}
export function TableBody({ striped, className, ...props }: TableBodyProps) {
  return <tbody {...(striped ? { 'data-striped': '' } : {})} className={cn('group', className)} {...props} />;
}
