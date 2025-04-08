const code = `'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const link = cva('inline-flex items-center gap-0.5 text-primary transition-colors outline-none', {
  variants: {
    underline: {
      true: 'shadow-[0_1px_0_0] shadow-primary',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'hover:opacity-80',
    },
  },
  defaultVariants: {
    underline: false,
    disabled: false,
  },
});

type LinkVariants = VariantProps<typeof link>;
interface LinkProps extends React.ComponentPropsWithRef<'a'>, LinkVariants {}
export default function Link({ className, underline, disabled, target, onClick, ...props }: LinkProps) {
  return (
    <a
      role="link"
      aria-disabled={!!disabled}
      className={cn(link({ underline, disabled, className }))}
      target={target}
      {...(target === '_blank' && !disabled ? { rel: 'noopener noreferrer' } : {})}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        onClick?.(e);
      }}
      {...props}
    />
  );
}
`;

export default code;
