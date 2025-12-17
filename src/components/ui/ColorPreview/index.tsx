import { cn } from '@/lib/utils';

interface ColorPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
}

const lattice = cn('after:absolute after:inset-0 after:-z-1 after:bg-position-[0_0,0_10px,10px_-10px,-10px_0] after:bg-size-[4px_4px] after:bg-lattice');
export default function ColorPreview({ color, className, ...props }: ColorPreviewProps) {
  return (
    <div className={cn('border-line inline-flex items-center gap-1 rounded border p-0.5 text-xs', className)} {...props}>
      <div className={cn('relative size-[1.2em] overflow-hidden rounded-xs', lattice)} style={{ backgroundColor: color }}></div>
      {color}
    </div>
  );
}
