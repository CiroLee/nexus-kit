const code = `import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconChevronRight } from '@tabler/icons-react';

const breadcrumb = cva('flex items-center gap-1', {
  variants: {
    variant: {
      plain: '',
      underline: '[&>*:not(:last-child)]:underline',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'plain',
  },
});
type BreadcrumbVariants = VariantProps<typeof breadcrumb>;
interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement>, BreadcrumbVariants {}
export function Breadcrumb({ size, variant, children, className, ...props }: BreadcrumbProps) {
  return (
    <nav className={cn(breadcrumb({ size, variant, className }))} {...props}>
      {children}
    </nav>
  );
}

const breadcrumbItem = cva(
  \`group gap-1 flex items-center transition-colors text-neutral-500 not-last:hover:text-neutral-700 last:text-black 
  last:dark:text-white dark:text-neutral-400 not-last:hover:dark:text-neutral-100\`,
);
const separatorStyle = cva('text-[1em] group-last:hidden nth-2:text-neutral-500 nth-2:dark:text-neutral-400');
type BreadcrumbItemVariants = VariantProps<typeof breadcrumbItem>;
interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement>, BreadcrumbItemVariants {
  href?: string;
  asCurrent?: boolean;
  separator?: React.ReactNode;
}

export function BreadcrumbItem({ className, separator, href, asCurrent, children, ...props }: BreadcrumbItemProps) {
  return (
    <li className={cn(breadcrumbItem({ className }))} {...props}>
      {href && !asCurrent ? (
        <a href={href} className="flex items-center gap-1">
          {children}
        </a>
      ) : (
        <span className="flex items-center gap-1">{children}</span>
      )}
      {separator ? <span className={cn(separatorStyle())}>{separator}</span> : <IconChevronRight size="1em" className={cn(separatorStyle())} />}
    </li>
  );
}
`;
export default code;
