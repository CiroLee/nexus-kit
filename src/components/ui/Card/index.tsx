import { cn } from '@/lib/utils';
interface CardGlobalProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}
export function Card({ className, children, ref, ...props }: CardGlobalProps) {
  return (
    <div aria-label="card" ref={ref} className={cn('border-line rounded-md border', className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ref, ...props }: CardGlobalProps) {
  return (
    <div ref={ref} className={cn('flex h-12 items-center justify-between px-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ref, ...props }: CardGlobalProps) {
  return (
    <div ref={ref} className={cn('font-semibold', className)} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ children, className, ref, ...props }: CardGlobalProps) {
  return (
    <div ref={ref} className={cn('p-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ref, ...props }: CardGlobalProps) {
  return (
    <div ref={ref} className={cn('flex items-center px-4', className)} {...props}>
      {children}
    </div>
  );
}
