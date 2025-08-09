'use client';
import { createContext, useContext } from 'react';
import { Avatar as AvatarPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const AvatarGroupContext = createContext<AvatarVariants>({
  size: 'md',
  rounded: false,
  bordered: false,
});

interface AvatarGroupProps extends AvatarVariants {
  children?: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}
const avatarGroup = cva('flex data-[orientation=horizontal]:-space-x-2 data-[orientation=vertical]:-space-y-2', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    size: {
      sm: '',
      md: '',
      lg: 'data-[orientation=horizontal]:-space-x-3 data-[orientation=vertical]:-space-y-3',
      xl: 'data-[orientation=horizontal]:-space-x-4 data-[orientation=vertical]:-space-y-4',
    },
  },
});
export function AvatarGroup({ children, className, orientation = 'horizontal', size, ...props }: AvatarGroupProps) {
  return (
    <div data-orientation={orientation} className={cn(avatarGroup({ orientation, size, className, ...props }))}>
      <AvatarGroupContext.Provider value={{ size, ...props }}>{children}</AvatarGroupContext.Provider>
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
  const _props = {
    size: size ?? context?.size,
    bordered: bordered ?? context?.bordered,
    rounded: rounded ?? context?.rounded,
  };
  return (
    <AvatarPrimitive.Root className={cn(avatar({ ..._props, className }))} {...props}>
      <AvatarPrimitive.Image className="size-full rounded-[inherit]" alt={alt} width={width} height={height} src={src} />
      <AvatarPrimitive.Fallback className={cn(fallbackStyle({ className: fallbackClassName }))}>{fallback}</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
