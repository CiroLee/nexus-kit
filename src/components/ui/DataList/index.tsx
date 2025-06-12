'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface DataListProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  ref?: React.Ref<HTMLDivElement>;
}
export function DataList({ className, orientation = 'horizontal', ...props }: DataListProps) {
  return <div data-orientation={orientation} className={cn('group/root flex flex-col gap-5', className)} {...props} />;
}

const dataListItem = cva('flex text-sm group-data-[orientation=vertical]/root:flex-col gap-2');
export function DataListItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="datalist-item" className={cn(dataListItem({ className }))} {...props} />;
}

export function DataListLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <dt data-slot="datalist-label" className={cn('text-description min-w-24', className)} {...props} />;
}

export function DataListValue({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <dd data-slot="datalist-value" className={className} {...props} />;
}
