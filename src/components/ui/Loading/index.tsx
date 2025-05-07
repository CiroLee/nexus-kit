'use client';
import { useEffect, useRef, useState } from 'react';
import { IconLoader2 } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const loading = cva('absolute inset-0 z-(--loading) flex items-center justify-center', {
  variants: {
    backdrop: {
      opaque: 'bg-black/45 dark:bg-black/55',
      blur: 'bg-black/45 dark:bg-black/55 backdrop-blur-sm',
      transparent: 'bg-transparent',
    },
    isFullscreen: {
      true: 'fixed',
    },
  },
  defaultVariants: {
    backdrop: 'opaque',
  },
});
interface LoadingProps extends VariantProps<typeof loading> {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  children?: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
  isFullscreen?: boolean;
  indicator?: React.ReactNode;
}
export default function Loading({ className, open, backdrop, indicator, isFullscreen, children, ...props }: LoadingProps) {
  const [visible, setVisible] = useState(false);
  const loadingRef = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation>(null);
  useEffect(() => {
    if (open) {
      setVisible(true);
      document.body.setAttribute('style', 'overflow: hidden');
      if (loadingRef.current) {
        animation.current = loadingRef.current.animate(
          { opacity: [0, 1] },
          {
            duration: 200,
            fill: 'both',
            easing: 'linear',
          },
        );
      }
    } else if (loadingRef.current && animation.current) {
      animation.current.reverse();
      animation.current.onfinish = () => {
        setVisible(false);
        document.body.removeAttribute('style');
      };
    }
  }, [open]);
  return (
    <div className="relative">
      {children}
      {visible || open ? (
        <div ref={loadingRef} className={cn(loading({ backdrop, isFullscreen, className }))} {...props}>
          <div data-node="loading-indicator" className="z-2">
            {indicator ? <>{indicator}</> : <IconLoader2 className="text-primary animate-spin" size={36} />}
          </div>
        </div>
      ) : null}
    </div>
  );
}
