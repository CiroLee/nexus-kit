import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const heading = cva('font-semibold', {
  variants: {
    as: {
      h1: 'text-[2.25rem] leading-[1.22]',
      h2: 'text-[2rem] leading-[1.24]',
      h3: 'text-[1.75rem] leading-[1.28]',
      h4: 'text-[1.5rem] leading-[1.34]',
      h5: 'text-[1.25rem] leading-[1.4]',
      h6: 'text-[1rem] leading-[1.5]',
    },
  },
});

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export default function Heading({ as: Tag, className, style, children }: HeadingProps) {
  return (
    <Tag className={cn(heading({ as: Tag, className }))} style={style}>
      {children}
    </Tag>
  );
}
