export const defaultCode = `import NumberStepper from "@/components/ui/NumberStepper";

export default function Page() {
  return (
    <NumberStepper className="w-50" />
  )
}`;

export const sizeCode = `import NumberStepper from "@/components/ui/NumberStepper";

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <NumberStepper size="sm" />
      <NumberStepper size="md" />
      <NumberStepper size="lg" />
    </div>
  )
}`;

export const prefixCode = `import NumberStepper from "@/components/ui/NumberStepper";
import { IconTemperature } from '@tabler/icons-react';

export default function Page() {
  return (
    <div className="flex gap-4">
      <NumberStepper className="w-50" prefix="$" />
      <NumberStepper className="w-50" prefix={<IconTemperature className="ml-1.5" size={16} />} />
    </div>
  )
}`;

export const disabledCode = `import NumberStepper from "@/components/ui/NumberStepper";

export default function Page() {
  return (
    <NumberStepper disabled className="w-50" />
  )
}`;

export const minMaxCode = `import NumberStepper from "@/components/ui/NumberStepper";

export default function Page() {
  return (
    <NumberStepper className="w-50" defaultValue={1} min={1} max={10} />
  )
}`;

export const stepCode = `import NumberStepper from "@/components/ui/NumberStepper";

export default function Page() {
  return (
    <NumberStepper className="w-50" step={2} />
  )
}`;
