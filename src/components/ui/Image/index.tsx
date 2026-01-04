'use client';
import { Avatar } from 'radix-ui';
import { SkeletonBlock } from '../Skeleton';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const image = cva('size-full', {
  variants: {
    fit: {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down',
    },
  },
  defaultVariants: {
    fit: 'cover',
  },
});
type ImageVariants = VariantProps<typeof image>;
interface ImageProps extends React.ComponentPropsWithRef<'img'>, ImageVariants {
  aspectRatio?: number;
}
export default function Image({ fit, aspectRatio, className, style, ...props }: ImageProps) {
  return (
    <Avatar.Root asChild className={cn('relative overflow-hidden', className)} style={{ aspectRatio, ...style }}>
      <div>
        <Avatar.Image className={cn(image({ fit }))} {...props} />
        <Avatar.Fallback asChild>
          <SkeletonBlock className="size-full rounded-[inherit]" />
        </Avatar.Fallback>
      </div>
    </Avatar.Root>
  );
}
