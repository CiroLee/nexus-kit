import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { IconBoltFilled } from '@tabler/icons-react';
import { useMemo } from 'react';
const battery = cva('inline-flex items-center justify-center bg-neutral relative', {
  variants: {
    size: {
      sm: 'h-3.5 w-6 rounded-xs',
      md: 'h-4.5 w-8 rounded-sm',
      lg: 'h-5.5 w-10 rounded-md',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
const batteryDot = cva('after:absolute after:w-0.5 after:-right-0.5 after:rounded-tr-[1px] after:rounded-br-[1px] -z-1 after:h-1/2 after:bg-neutral', {
  variants: {
    fullCharged: {
      true: 'after:bg-green-500',
    },
  },
  defaultVariants: {
    fullCharged: false,
  },
});

const batteryText = cva('', {
  variants: {
    size: {
      sm: 'text-[10px]',
      md: 'text-xs',
      lg: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type BatteryVariant = VariantProps<typeof battery>;
interface BatteryProps extends React.HTMLAttributes<HTMLDivElement>, BatteryVariant {
  value: number;
  isCharing?: boolean;
  lowBatteryThreshold?: number;
}
export default function Battery({ className, size, value, isCharing, lowBatteryThreshold = 20, ...props }: BatteryProps) {
  const iconSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return 8;
      default:
      case 'md':
        return 12;
      case 'lg':
        return 14;
    }
  }, [size]);
  return (
    <div className={cn(battery({ size, className }), batteryDot({ fullCharged: value >= 100 }))} {...props}>
      <div className="absolute inset-0 overflow-hidden rounded-[inherit] text-white">
        <div data-slot="battery-text" className="absolute z-1 flex size-full items-center justify-center">
          <div className={batteryText({ size })}>{value}</div>
          {isCharing && value < 100 ? <IconBoltFilled size={iconSize} className="text-inherit" /> : null}
        </div>
        <div data-slot="battery-charge" className={cn('size-full bg-green-500', { 'bg-red-500': value <= lowBatteryThreshold })} style={{ transform: `translateX(-${100 - (value || 0)}%)` }}></div>
      </div>
    </div>
  );
}
