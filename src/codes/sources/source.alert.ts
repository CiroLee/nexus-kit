const code = `'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconAlertSquareRoundedFilled, IconInfoSquareRoundedFilled, IconSquareRoundedCheckFilled, IconCircleXFilled, IconNotification } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const alert = cva('rounded-lg p-4 flex bg-background', {
  variants: {
    state: {
      info: 'border-primary/70 [&_svg]:text-primary',
      success: 'border-secondary/70 [&_svg]:text-secondary',
      warning: 'border-warning/70 [&_svg]:text-warning',
      danger: 'border-danger/70 [&_svg]:text-danger',
      neutral: 'border-line',
    },
    variant: {
      bordered: 'border',
      solid: '[&_svg]:text-[color:inherit] text-white',
      light: '',
    },
  },
  compoundVariants: [
    {
      state: 'info',
      variant: 'solid',
      className: 'bg-primary',
    },
    {
      state: 'success',
      variant: 'solid',
      className: 'bg-secondary',
    },
    {
      state: 'warning',
      variant: 'solid',
      className: 'bg-warning',
    },
    {
      state: 'danger',
      variant: 'solid',
      className: 'bg-danger',
    },
    {
      state: 'neutral',
      variant: 'solid',
      className: 'text-foreground bg-neutral-300 dark:bg-line',
    },
    {
      state: 'info',
      variant: 'light',
      className: 'bg-primary/30',
    },
    {
      state: 'success',
      variant: 'light',
      className: 'bg-secondary/30',
    },
    {
      state: 'warning',
      variant: 'light',
      className: 'bg-warning/30',
    },
    {
      state: 'danger',
      variant: 'light',
      className: 'bg-danger/30',
    },
    {
      state: 'neutral',
      variant: 'light',
      className: 'bg-neutral-300/60 dark:bg-line/30',
    },
  ],
  defaultVariants: {
    state: 'info',
    variant: 'solid',
  },
});

type AlertVariants = VariantProps<typeof alert>;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, AlertVariants {
  hiddenIcon?: boolean;
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

const defaultIconsMap = {
  info: <IconInfoSquareRoundedFilled size={26} />,
  success: <IconSquareRoundedCheckFilled size={26} />,
  warning: <IconAlertSquareRoundedFilled size={26} />,
  danger: <IconCircleXFilled size={26} />,
  neutral: <IconNotification size={26} />,
};
export function Alert({ className, state = 'info', variant, hiddenIcon, icon, children, ref, ...props }: AlertProps) {
  return (
    <div ref={ref} role="alert" className={cn(alert({ state, variant, className }))} {...props}>
      {hiddenIcon ? null : <div className="pr-4">{icon ? <>{icon}</> : <>{defaultIconsMap[state as keyof typeof defaultIconsMap]}</>}</div>}
      <div className="flex-1">{children}</div>
    </div>
  );
}

export function AlertTitle({ children, className }: { className?: string; children?: React.ReactNode }) {
  return <p className={cn('text-lg font-semibold', className)}>{children}</p>;
}
`;

export default code;
