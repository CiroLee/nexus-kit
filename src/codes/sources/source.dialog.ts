const code = `import { Dialog as DialogPrimitive } from 'radix-ui';
import Button from '../Button';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
const dialogContent = cva(
  \`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] sm:max-w-[90%] bg-background py-3.5 rounded-lg 
  border border-line shadow-lg overflow-hidden data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out\`,
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
const dialogOverlay = cva('data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-50', {
  variants: {
    backdrop: {
      opaque: 'bg-black/30',
      blur: 'bg-black/30 backdrop-blur',
      transparent: 'bg-transparent',
    },
  },
  defaultVariants: {
    backdrop: 'opaque',
  },
});
export type DialogOverlayVariants = VariantProps<typeof dialogOverlay>;

interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, DialogOverlayVariants, DialogContentVariants {
  trigger: React.ReactNode;
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
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={dialogOverlay({ backdrop })} />
        <DialogPrimitive.Content ref={ref} className={cn(dialogContent({ size, className }))}>
          <DialogPrimitive.Close asChild className="absolute top-1.5 right-1.5">
            <Button icon colors="neutral" size="sm" rounded variant="light" className="group text-lg">
              <CloseIcon className="opacity-40 transition-colors group-hover:opacity-100" />
            </Button>
          </DialogPrimitive.Close>
          <DialogPrimitive.Title aria-label="dialog title" className={cn('dialog-title px-3.5 text-xl font-semibold', { hidden: !title })}>
            {title}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description aria-label="dialog description" className={cn('text-foreground/60 mt-2 mb-3 px-3.5', { hidden: !description })}>
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

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
`;
export default code;
