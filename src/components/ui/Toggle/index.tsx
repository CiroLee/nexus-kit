import { Toggle as TogglePrimitive } from 'radix-ui';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const toggle = cva(
  `inline-flex items-center gap-1 justify-center focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-neutral/50
   data-[state=on]:text-foreground data-[state=on]:bg-neutral/60 transition-colors`,
  {
    variants: {
      size: {
        sm: 'h-7 min-w-7 px-1.5 text-xs rounded',
        md: 'h-8.5 min-w-8.5 px-2 text-sm rounded-md',
        lg: 'h-10 min-w-10 px-2.5 rounded-lg',
      },
      variant: {
        light: '',
        bordered: 'border border-line',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: 'hover:bg-neutral/30 hover:text-foreground/50',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'light',
      disabled: false,
    },
  },
);

type ToggleVariants = Omit<VariantProps<typeof toggle>, 'disabled'>;
interface ToggleProps extends React.ComponentPropsWithRef<typeof TogglePrimitive.Root>, ToggleVariants {}
export default function Toggle({ size, disabled, variant, ...props }: ToggleProps) {
  return <TogglePrimitive.Root disabled={disabled} className={cn(toggle({ size, variant, disabled }))} {...props} />;
}
