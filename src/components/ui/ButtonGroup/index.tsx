import { cn } from '@/lib/utils';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

const groupCls = `[&>*:first-child]:!rounded-r-none [&>*:not(:last-child,:first-child)]:rounded-none [&>*:last-child]:!rounded-l-none 
[&>*:not(:last-child,:first-child)]:border-l-0 [&>*:not(:last-child,:first-child)]:border-r-0 [&>*:not(:last-child,:first-child)]:!rounded-none
[&>*:nth-child(2)]:!border-l-0`;
export default function ButtonGroup({ className, style, children, ref }: ButtonGroupProps) {
  return (
    <div ref={ref} className={cn('flex items-center', groupCls, className)} style={style}>
      {children}
    </div>
  );
}
