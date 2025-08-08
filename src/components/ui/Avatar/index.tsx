'use client';
import { createContext, useContext } from 'react';
import { Avatar as AvatarPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const AvatarGroupContext = createContext<{ size: AvatarVariants['size'] }>({
  size: 'md',
});
export function AvatarGroup({ children, className, size, orientation = 'horizontal' }: AvatarGroupProps) {
  return (
    <div className={cn('flex flex-row -space-x-2', { 'flex-col -space-y-2 space-x-0': orientation === 'vertical' }, className)}>
      <AvatarGroupContext.Provider value={{ size }}>{children}</AvatarGroupContext.Provider>
    </div>
  );
}

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

export type AvatarVariants = VariantProps<typeof avatar>;
interface AvatarProps extends React.ComponentPropsWithRef<typeof AvatarPrimitive.Root>, AvatarVariants {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  fallback?: React.ReactNode;
  fallbackClassName?: string;
}
export function Avatar({ src, alt, bordered, rounded, fallback, width, height, size, className, fallbackClassName, ...props }: AvatarProps) {
  const context = useContext(AvatarGroupContext);
  const _size = size ?? context.size;
  return (
    <AvatarPrimitive.Root className={cn(avatar({ size: _size, bordered, rounded, className }))} {...props}>
      <AvatarPrimitive.Image className="size-full rounded-[inherit]" alt={alt} width={width} height={height} src={src} />
      <AvatarPrimitive.Fallback className={cn(fallbackStyle({ className: fallbackClassName }))}>{fallback}</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

interface AvatarGroupProps {
  size?: AvatarVariants['size'];
  children?: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}
