import { Dialog as DialogPrimitive } from 'radix-ui';
import Button from '../Button';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconX } from '@tabler/icons-react';

const dialogContent = cva(
  `fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-(--popup) w-[90%] sm:max-w-[90%] bg-background py-3.5
  rounded-lg border border-line shadow-lg overflow-hidden data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out`,
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
type DialogContentVariants = VariantProps<typeof dialogContent>;
const dialogOverlay = cva('data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-(--popup)', {
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
export type DialogOverlayVariants = VariantProps<typeof dialogOverlay>;

interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, DialogOverlayVariants, DialogContentVariants {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  hideFooter?: boolean;
  footer?: React.ReactNode;
  className?: string;
  cancelText?: string;
  confirmText?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const DialogClose = ({ children }: { children: React.ReactNode }) => <DialogPrimitive.Close asChild>{children}</DialogPrimitive.Close>;

export function Dialog({ trigger, size, className, title, description, footer, hideFooter, cancelText = 'Cancel', confirmText = 'Confirm', backdrop, children, ref, ...props }: DialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      {trigger ? <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger> : null}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={dialogOverlay({ backdrop })} />
        <DialogPrimitive.Content ref={ref} className={cn(dialogContent({ size, className }))}>
          <DialogPrimitive.Close asChild className="absolute top-1.5 right-1.5">
            <Button asIcon colors="neutral" size="sm" pill variant="light" className="group text-lg">
              <IconX size={18} className="opacity-40 transition-colors group-hover:opacity-100" />
            </Button>
          </DialogPrimitive.Close>
          <DialogPrimitive.Title data-slot="dialog-title" aria-label="dialog title" className={cn('px-3.5 text-xl font-semibold', { hidden: !title })}>
            {title}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description data-slot="dialog-description" aria-label="dialog description" className={cn('text-foreground/60 mt-2 mb-3 px-3.5', { hidden: !description })}>
            {description}
          </DialogPrimitive.Description>
          <div className="max-h-[65vh] overflow-auto px-3.5">{children}</div>
          {!hideFooter ? (
            footer ? (
              <>{footer}</>
            ) : (
              <div aria-label="dialog footer" className="flex justify-end gap-2.5 px-3.5 pt-4">
                <DialogPrimitive.Close asChild>
                  <Button aria-label="cancel button" variant="light" colors="neutral">
                    {cancelText}
                  </Button>
                </DialogPrimitive.Close>
                <DialogPrimitive.Close asChild>
                  <Button aria-label="confirm button">{confirmText}</Button>
                </DialogPrimitive.Close>
              </div>
            )
          ) : null}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
