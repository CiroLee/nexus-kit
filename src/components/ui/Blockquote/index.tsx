import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
const blockquote = cva('relative w-fit flex-col gap-4 flex pl-4 border-l-4', {
  variants: {
    colors: {
      primary: 'border-primary/60',
      secondary: 'border-secondary/60',
      success: 'border-success/60',
      warning: 'border-warning/60',
      danger: 'border-danger/60',
      neutral: 'border-line',
    },
  },
  defaultVariants: {
    colors: 'neutral',
  },
});
type BlockquoteVariants = VariantProps<typeof blockquote>;
interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement>, BlockquoteVariants {
  cite?: string;
}
export default function Blockquote({ className, colors, children, cite, ...props }: BlockquoteProps) {
  return (
    <figure className={cn(blockquote({ colors, className }))}>
      <blockquote cite={cite} {...props}>
        {children}
      </blockquote>
      {cite ? <cite className="text-foreground/60 text-sm not-italic">{cite}</cite> : null}
    </figure>
  );
}
