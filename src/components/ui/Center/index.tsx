'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

const centerStyle = cva('', {
  variants: {
    display: {
      flex: 'flex',
      inline: 'inline-flex',
    },
    centerX: {
      true: 'justify-center',
    },
    centerY: {
      true: 'items-center',
    },
    center: {
      true: 'justify-center items-center',
    },
  },
  defaultVariants: {
    display: 'flex',
  },
});
type CenterVariants = VariantProps<typeof centerStyle>;
interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, CenterVariants {
  ref?: React.Ref<HTMLDivElement>;
  asChild?: boolean;
}

export default function Center({ className, display, center, centerX, centerY, asChild, ...props }: FlexProps) {
  const Component = asChild ? Slot : 'div';

  return <Component className={cn(centerStyle({ display, center, centerX, centerY, className }))} {...props} />;
}
