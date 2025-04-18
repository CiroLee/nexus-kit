'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconAlertSquareRoundedFilled, IconInfoSquareRoundedFilled, IconSquareRoundedCheckFilled, IconCircleXFilled, IconNotification } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const alert = cva('rounded-lg p-4 flex border bg-background', {
  variants: {
    state: {
      info: 'border-primary/70 [&_svg]:text-primary',
      success: 'border-secondary/70 [&_svg]:text-secondary',
      warning: 'border-warning/70 [&_svg]:text-warning',
      danger: 'border-danger/70 [&_svg]:text-danger',
      default: 'border-line',
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

type AlertVariants = VariantProps<typeof alert>;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, AlertVariants {
  showIcon?: boolean;
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

const defaultIconsMap = {
  info: <IconInfoSquareRoundedFilled size={26} />,
  success: <IconSquareRoundedCheckFilled size={26} />,
  warning: <IconAlertSquareRoundedFilled size={26} />,
  danger: <IconCircleXFilled size={26} />,
  default: <IconNotification size={26} />,
};
export function Alert({ className, state = 'info', showIcon = true, icon, children, ref, ...props }: AlertProps) {
  return (
    <div ref={ref} role="alert" className={cn(alert({ state, className }))} {...props}>
      {showIcon ? <div className="pr-4">{icon ? <>{icon}</> : <>{defaultIconsMap[state as keyof typeof defaultIconsMap]}</>}</div> : null}
      <div className="flex-1">{children}</div>
    </div>
  );
}

export function AlertTitle({ children, className }: { className?: string; children?: React.ReactNode }) {
  return <p className={cn('text-lg font-semibold', className)}>{children}</p>;
}
