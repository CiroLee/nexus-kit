'use client';
import { useMemo, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Collapsible from '../Collapsible';
interface TreeProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}
/** Tree Root */
export function Tree({ className, ...props }: TreeProps) {
  return <div className={cn('relative', className)} {...props} />;
}

const treeBranch = cva('relative pl-2.5 group/branch', {
  variants: {
    hideLine: {
      false: 'before:w-px before:h-full before:absolute before:left-3 before:bg-line pl-4',
    },
  },
  defaultVariants: {
    hideLine: false,
  },
});
type TreeBranchVariants = VariantProps<typeof treeBranch>;
interface TreeBranchProps extends Omit<React.ComponentProps<typeof Collapsible>, 'trigger' | 'asChild'>, TreeBranchVariants {
  label?: React.ReactNode;
  indicatorAlign?: 'start' | 'end';
  indicator?: React.ReactNode | ((open: boolean) => React.ReactNode);
}
/** TreeBranch */
export function TreeBranch({ label, hideLine, children, className, indicator, indicatorAlign = 'start', onOpenChange, ...props }: TreeBranchProps) {
  const [open, setOpen] = useState(false);
  const handleOnOpenChange = (open: boolean) => {
    setOpen(open);
    onOpenChange?.(open);
  };

  const indicatorEl = useMemo(() => {
    return typeof indicator === 'function' ? indicator(open) : indicator;
  }, [indicator, open]);
  return (
    <Collapsible
      onOpenChange={handleOnOpenChange}
      className={cn(treeBranch({ hideLine, className }))}
      trigger={
        <TreeItem indicatorAlign={indicatorAlign} indicator={indicatorEl}>
          {label}
        </TreeItem>
      }
      {...props}>
      {children}
    </Collapsible>
  );
}

/** TreeItem */
const treeItem = cva(
  `outline-none w-full py-1 px-1.5 text-sm rounded-xs transition-colors data-disabled:cursor-not-allowed flex items-center gap-1 justify-start
  data-disabled:opacity-50 not-data-disabled:hover:bg-neutral/60`,
  {
    variants: {
      indicatorAlign: {
        start: '',
        end: 'flex-row-reverse justify-between',
      },
    },
    defaultVariants: {
      indicatorAlign: 'start',
    },
  },
);

type TreeItemVariants = VariantProps<typeof treeItem>;

interface TreeItemProps<T extends React.ElementType = 'button'> extends TreeItemVariants {
  as?: T;
  disabled?: boolean;
  indicator?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
/**
 * polymorphic type to support both button, anchor and other elements via as prop
 */
type PolymorphicTreeItem = <T extends React.ElementType = 'button'>(props: TreeItemProps<T> & Omit<React.ComponentProps<T>, keyof TreeItemProps<T>>) => React.ReactElement | null;

export const TreeItem: PolymorphicTreeItem = ({ as: Component = 'button', className, indicator, indicatorAlign, children, disabled, ...props }) => {
  return (
    <Component {...(disabled ? { 'data-disabled': '' } : {})} className={cn(treeItem({ className, indicatorAlign }))} disabled={disabled} {...props}>
      {indicator ? <>{indicator}</> : null}
      {children}
    </Component>
  );
};

/** TreeNode */
export interface TreeNodeItem extends Omit<TreeBranchProps, 'children'> {
  children?: TreeNodeItem[];
  [key: string]: unknown;
}

interface TreeNodeProps {
  nodes: TreeNodeItem[];
}
export function TreeNode({ nodes }: TreeNodeProps) {
  return (
    <>
      {nodes.map((node, index) => {
        const hasChildren = node.children?.length;
        if (hasChildren) {
          const { children, ...branchProps } = node;
          return (
            <TreeBranch key={index} {...branchProps}>
              <TreeNode nodes={children || []} />
            </TreeBranch>
          );
        } else {
          const { label, className, disabled, indicator, ...rest } = node as Omit<TreeItemProps, 'children'> & { label: React.ReactNode };
          return (
            <TreeItem key={index} className={className} disabled={disabled} indicator={indicator} {...rest}>
              {label}
            </TreeItem>
          );
        }
      })}
    </>
  );
}
