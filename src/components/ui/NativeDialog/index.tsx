'use client';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const dialog = cva('bg-background border border-line fixed top-1/2 left-1/2 -translate-1/2 py-3.5 w-[90%] sm:max-w-[90%] rounded-lg shadow-lg overflow-hidden', {
  variants: {
    size: {
      sm: 'w-[76%] sm:w-100',
      md: 'w-[86%] sm:w-150',
      lg: 'w-[96%] sm:w-240',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type NativeDialogVariants = VariantProps<typeof dialog>;

interface NativeDialogProps extends Omit<React.HTMLAttributes<HTMLDialogElement>, 'title'>, NativeDialogVariants {
  title?: React.ReactNode;
  description?: React.ReactNode;
  open?: boolean;
}
export default function NativeDialog({ className, children, title, open, ...props }: NativeDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openAnimation = () => {
    dialogRef.current?.animate({ opacity: [0, 1] }, { duration: 200, fill: 'both', easing: 'ease-in' });
  };
  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
      openAnimation();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);
  return (
    <dialog ref={dialogRef} className={cn(dialog({ className }))} {...props}>
      {title && <div>{title}</div>}
      {children}
    </dialog>
  );
}
