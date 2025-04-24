const code = `import { Avatar } from 'radix-ui';
import { SkeletonBlock } from '../Skeleton';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const image = cva('size-full rounded-[inherit]', {
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
export default function Image({ ref, fit, aspectRatio, className, style, ...props }: ImageProps) {
  return (
    <Avatar.Root asChild ref={ref} className={cn('relative', className)} style={{ aspectRatio, ...style }}>
      <div>
        <Avatar.Image className={cn(image({ fit }))} {...props} />
        <Avatar.Fallback className="relative size-full">
          <SkeletonBlock className="size-full rounded-[inherit]" />
        </Avatar.Fallback>
      </div>
    </Avatar.Root>
  );
}
`;
export default code;
