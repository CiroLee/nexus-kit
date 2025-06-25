'use client';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
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

const breadcrumbItem = cva('group gap-1 flex items-center text-neutral-500 last:text-black last:dark:text-white dark:text-neutral-400');
const breadcrumbLink = cva('flex items-center gap-1 transition-colors outline-none rounded', {
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'hover:text-neutral-700 hover:dark:text-neutral-100 focus-visible:ring-primary/50 focus-visible:ring-3',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
type BreadcrumbItemVariants = VariantProps<typeof breadcrumbItem>;
interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLElement>, BreadcrumbItemVariants {
  disabled?: boolean;
  asChild?: boolean;
  separator?: React.ReactNode;
  ref?: React.Ref<HTMLLIElement>;
}

export function BreadcrumbItem({ className, disabled, separator, asChild, children, onClick, ...props }: BreadcrumbItemProps) {
  const Component = asChild ? Slot : 'span';
  return (
    <li className={cn(breadcrumbItem({ className }))} {...props}>
      <Component
        {...(disabled ? { 'data-disabled': '' } : {})}
        className={breadcrumbLink({ disabled })}
        onClick={(e) => {
          // use this to adjust disabled status and mouse style
          if (disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          onClick?.(e);
        }}>
        {children}
      </Component>
      {separator ? <span className="text-[1em] group-last:hidden">{separator}</span> : <IconChevronRight size="1em" className="group-last:hidden" />}
    </li>
  );
}
