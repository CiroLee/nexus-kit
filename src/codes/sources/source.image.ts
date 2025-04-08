const code = `'use client';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ComponentPropsWithRef<'img'> {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  aspectRatio?: number;
  w?: number;
  h?: number;
}
export default function Image({ fit, w, h, aspectRatio, className, style, ...props }: ImageProps) {
  return <img className={cn(className)} style={{ width: w, height: h, objectFit: fit, aspectRatio, ...style }} {...props} />;
}
`;
export default code;
