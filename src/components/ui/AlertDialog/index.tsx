'use client';
import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '../Button';

const alertDialogContent = cva(
  `fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-(--popup) w-[90%] sm:max-w-[90%] bg-background py-3.5
  rounded-lg border border-line shadow-lg overflow-hidden data-[state=open]:animate-zoom-fade-in data-[state=closed]:animate-zoom-fade-out`,
  {
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
  },
);
export type AlertDialogContentVariants = VariantProps<typeof alertDialogContent>;
const alertDialogOverlay = cva('data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-(--popup)', {
  variants: {
    backdrop: {
      opaque: 'bg-black/45 dark:bg-black/55',
      blur: 'bg-black/45 dark:bg-black/55 backdrop-blur-sm',
      transparent: 'bg-transparent',
    },
  },
  defaultVariants: {
    backdrop: 'opaque',
  },
});
export type AlertDialogOverlayVariants = VariantProps<typeof alertDialogOverlay>;

interface AlertDialogProps extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root>, AlertDialogContentVariants, AlertDialogOverlayVariants {
  trigger?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}
export function AlertDialog({ trigger, size, className, title, description, footer, cancelText = 'Cancel', confirmText = 'Confirm', backdrop, children, ref, ...props }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      {trigger ? <AlertDialogPrimitive.Trigger asChild>{trigger}</AlertDialogPrimitive.Trigger> : null}
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className={alertDialogOverlay({ backdrop })} />
        <AlertDialogPrimitive.Content className={cn(alertDialogContent({ size }), className)} ref={ref}>
          <AlertDialogPrimitive.Title data-slot="alert-dialog-title" aria-label="alert dialog title" className={cn('px-3.5 text-xl font-semibold', { hidden: !title })}>
            {title}
          </AlertDialogPrimitive.Title>
          <AlertDialogPrimitive.Description
            asChild
            data-slot="alert-dialog-description"
            aria-label="alert dialog description"
            className={cn('text-foreground/60 mt-2 mb-3 px-3.5', { hidden: !description })}>
            <div>{description}</div>
          </AlertDialogPrimitive.Description>
          <div className="max-h-[65vh] overflow-auto px-3.5">{children}</div>
          {footer ? (
            <>{footer}</>
          ) : (
            <div aria-label="dialog footer" className="flex justify-end gap-2.5 px-3.5 pt-4">
              <AlertDialogCancel>
                <Button aria-label="cancel button" variant="light" colors="neutral">
                  {cancelText}
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction>
                <Button aria-label="confirm button">{confirmText}</Button>
              </AlertDialogAction>
            </div>
          )}
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}

export const AlertDialogCancel = ({ children }: { children: React.ReactNode }) => <AlertDialogPrimitive.Cancel asChild>{children}</AlertDialogPrimitive.Cancel>;
export const AlertDialogAction = ({ children }: { children: React.ReactNode }) => <AlertDialogPrimitive.Action asChild>{children}</AlertDialogPrimitive.Action>;
