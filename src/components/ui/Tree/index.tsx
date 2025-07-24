'use client';
import { useMemo, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import Collapsible from '../Collapsible';
import React from 'react';
interface TreeProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}
export function Tree({ className, ...props }: TreeProps) {
  return <div className={cn('relative', className)} {...props} />;
}

const treeBranch = cva('relative pl-4 group/branch', {
  variants: {
    hideLine: {
      false: 'before:w-px before:h-full before:absolute before:left-3 before:bg-line',
    },
  },
  defaultVariants: {
    hideLine: false,
  },
});
type TreeBranchVariants = VariantProps<typeof treeBranch>;
interface TreeBranchProps extends Omit<React.ComponentProps<typeof Collapsible>, 'trigger'>, TreeBranchVariants {
  label?: React.ReactNode;
  indicator?: React.ReactNode | ((open: boolean) => React.ReactNode);
}
export function TreeBranch({ label, hideLine, children, className, indicator, onOpenChange, ...props }: TreeBranchProps) {
  const [open, setOpen] = useState(false);
  const handleOnOpenChange = (open: boolean) => {
    setOpen(open);
    onOpenChange?.(open);
  };

  const indicatorEl = useMemo(() => {
    return typeof indicator === 'function' ? indicator(open) : indicator;
  }, [indicator, open]);
  return (
    <Collapsible onOpenChange={handleOnOpenChange} className={cn(treeBranch({ hideLine, className }))} trigger={<TreeItem indicator={indicatorEl}>{label}</TreeItem>} {...props}>
      {children}
    </Collapsible>
  );
}

interface TreeItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  disabled?: boolean;
  indicator?: React.ReactNode;
}
const treeItem = cva(
  'outline-none w-full py-1 px-1.5 text-sm rounded-xs transition-colors data-disabled:cursor-not-allowed flex items-center gap-1 justify-start data-disabled:opacity-50 not-data-disabled:hover:bg-neutral/60',
);
export function TreeItem({ asChild, className, indicator, children, disabled, ...props }: TreeItemProps) {
  const Component = asChild ? Slot : 'button';
  return (
    <Component {...(disabled ? { 'data-disabled': '' } : {})} className={cn(treeItem({ className }))} disabled={disabled} {...props}>
      {indicator ? <>{indicator}</> : null}
      {children}
    </Component>
  );
}

interface TreeNodeItemBase {
  label?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export interface TreeNodeItem extends Omit<TreeBranchProps, 'children'> {
  children?: TreeNodeItem[];
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
