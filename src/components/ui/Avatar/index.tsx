import { Avatar as AvatarPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const avatar = cva('relative block', {
  variants: {
    size: {
      sm: 'size-8 text-base',
      md: 'size-10 text-lg',
      lg: 'size-12 text-xl',
      xl: 'size-14 text-xl',
    },
    bordered: {
      true: 'ring-2 ring-offset-2 ring-offset-background ring-neutral-300 dark:ring-neutral-700',
    },
    rounded: {
      true: 'rounded-lg',
      false: 'rounded-full',
    },
  },
  defaultVariants: {
    size: 'md',
    rounded: false,
  },
});

const fallbackStyle = cva('text-foreground relative flex size-full items-center justify-center rounded-[inherit] bg-neutral-300 dark:bg-neutral-700');

type AvatarVariants = VariantProps<typeof avatar>;
interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, AvatarVariants {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  fallback?: React.ReactNode;
  fallbackClassName?: string;
  ref?: React.Ref<HTMLDivElement>;
}
export function Avatar({ ref, src, alt, bordered, rounded, fallback, width, height, size, className, fallbackClassName, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root ref={ref} className={cn(avatar({ size, bordered, rounded, className }))} {...props}>
      <AvatarPrimitive.Image className="size-full rounded-[inherit]" alt={alt} width={width} height={height} src={src} />
      <AvatarPrimitive.Fallback className={cn(fallbackStyle({ className: fallbackClassName }))}>{fallback}</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

interface AvatarGroupProps {
  children?: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function AvatarGroup({ children, className, orientation = 'horizontal' }: AvatarGroupProps) {
  return <div className={cn('flex flex-row -space-x-2', { 'flex-col -space-y-2 space-x-0': orientation === 'vertical' }, className)}>{children}</div>;
}
