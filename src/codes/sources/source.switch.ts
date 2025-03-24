const code = `import { Switch as SwitchPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const switchRoot = cva(
  \`peer rounded-full dark:bg-neutral-700 bg-neutral-200 p-1 transition-colors not-disabled:focus-visible:ring-3 focus-visible:ring-primary/50 
  data-[state=checked]:bg-primary outline-none not-disabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed\`,
  {
    variants: {
      size: {
        sm: 'h-6 w-10',
        md: 'h-7 w-12',
        lg: 'h-8 w-14',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const switchThumb = cva(
  'flex items-center justify-center rounded-full bg-white transition-transform will-change-transform shadow-md data-[disabled]:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'size-4 data-[state=checked]:translate-x-4',
        md: 'size-5 data-[state=checked]:translate-x-5',
        lg: 'size-6 data-[state=checked]:translate-x-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const labelStyle = cva('peer-not-disabled:cursor-pointer peer-disabled:cursor-not-allowed', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type SwitchVariants = VariantProps<typeof switchRoot>;
interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, SwitchVariants {
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

export default function Switch({ size, className, id, children, ref, ...props }: SwitchProps) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <SwitchPrimitive.Root ref={ref} id={id} className={cn(switchRoot({ className, size }))} {...props}>
        <SwitchPrimitive.Thumb className={switchThumb({ size })} />
      </SwitchPrimitive.Root>
      <label htmlFor={id} className={cn(labelStyle({ size }))}>
        {children}
      </label>
    </div>
  );
}
`;
export default code;
