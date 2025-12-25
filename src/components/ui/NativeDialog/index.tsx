'use client';
import { useEffect, useEffectEvent, useRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Button } from '../Button';
import { IconX } from '@tabler/icons-react';

const backdropAni = cn(
  `backdrop:bg-black/45 dark:backdrop:bg-black/55 backdrop:transition-all
  backdrop:opacity-0 starting:open:backdrop:opacity-0 open:backdrop:opacity-100 backdrop:transition-discrete`,
);
const dialog = cva(
  `bg-background border opacity-0 scale-[0.96] open:opacity-100 open:scale-100 starting:open:opacity-0 starting:open:scale-[0.96] border-line
  fixed top-1/2 left-1/2 -translate-1/2 py-3.5 w-[90%] sm:max-w-[90%] rounded-lg shadow-lg overflow-hidden transition-all transition-discrete`,
  {
    variants: {
      size: {
        sm: 'w-[76%] sm:w-100',
        md: 'w-[86%] sm:w-150',
        lg: 'w-[96%] sm:w-240',
      },
      backdrop: {
        opaque: backdropAni,
        blur: `backdrop:backdrop-blur-sm ${backdropAni}`,
        transparent: 'backdrop:bg-transparent',
      },
    },
    defaultVariants: {
      size: 'md',
      backdrop: 'opaque',
    },
  },
);

type NativeDialogVariants = VariantProps<typeof dialog>;

interface NativeDialogProps extends Omit<React.HTMLAttributes<HTMLDialogElement>, 'title'>, NativeDialogVariants {
  title?: React.ReactNode;
  description?: React.ReactNode;
  open?: boolean;
  footer?: React.ReactNode;
  hideFooter?: boolean;
  cancelText?: string;
  confirmText?: string;
  onClose: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}
export default function NativeDialog({
  className,
  children,
  title,
  open,
  size,
  backdrop,
  description,
  footer,
  hideFooter,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  onClose,
  onCancel,
  onConfirm,
  ...props
}: NativeDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openHandler = () => {
    dialogRef.current?.showModal();
    document.body.setAttribute('style', 'overflow: hidden');
  };
  const closeHandler = () => {
    dialogRef.current?.close();
    document.body.removeAttribute('style');
  };

  const onCancelHandler = () => {
    onClose();
    onCancel?.();
  };
  const onConfirmHandler = () => {
    onClose();
    onConfirm?.();
  };

  const overlayClick = (event: React.PointerEvent<HTMLDialogElement>) => {
    if (!dialogRef.current) return;
    const rect = dialogRef.current?.getBoundingClientRect();
    const isInDialog = rect.top <= event.clientY && event.clientY <= rect.bottom && rect.left <= event.clientX && event.clientX <= rect.right;
    if (!isInDialog) {
      onClose();
    }
  };
  useEffect(() => {
    if (open) {
      openHandler();
    } else {
      closeHandler();
    }
  }, [open]);

  const onCloseEvent = useEffectEvent(onCancelHandler);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onCloseEvent();
      }
    }

    // add listener when open
    if (open) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <dialog data-slot="native-dialog" ref={dialogRef} className={cn(dialog({ className, size, backdrop }))} onClick={overlayClick} {...props}>
      <Button asIcon colors="neutral" size="sm" variant="light" className="group absolute top-2.5 right-2.5 text-lg" onClick={onClose}>
        <IconX size={18} className="opacity-40 transition-colors group-hover:opacity-100" />
      </Button>
      {title ? (
        <h2 data-slot="native-dialog-title" aria-label="dialog title" className="px-3.5 text-xl font-semibold">
          {title}
        </h2>
      ) : null}
      {description ? (
        <div data-slot="dialog-description" aria-label="dialog description" className="text-foreground/60 mt-2 mb-3 px-3.5">
          {description}
        </div>
      ) : null}
      <div data-slot="dialog-children" className="max-h-[65vh] overflow-auto px-3.5">
        {children}
      </div>
      {!hideFooter ? (
        footer ? (
          <>{footer}</>
        ) : (
          <div aria-label="dialog footer" className="flex justify-end gap-2.5 px-3.5 pt-4">
            <Button aria-label="cancel button" variant="light" colors="neutral" onClick={onCancelHandler}>
              {cancelText}
            </Button>
            <Button aria-label="confirm button" onClick={onConfirmHandler}>
              {confirmText}
            </Button>
          </div>
        )
      ) : null}
    </dialog>
  );
}
