export const defaultCode = `import NumberInput from "@/components/ui/NumberInput";

export default function Page() {
  return (
    <NumberInput className="max-w-80" />
  )
}
`;

export const sizeCode = `import NumberInput from "@/components/ui/NumberInput";

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <NumberInput size="sm" />
      <NumberInput size="md" />
      <NumberInput size="lg" />
    </div>
  )
}
`;

export const minMaxCode = `import NumberInput from "@/components/ui/NumberInput";

export default function Page() {
  return (
    <NumberInput min={2} max={20} className="max-w-80" />
  )
}
`;

export const stepCode = `import NumberInput from "@/components/ui/NumberInput";

export default function Page() {
  return (
    <NumberInput step={2} className="max-w-80" />
  )
}
`;

export const disabledCode = `import NumberInput from "@/components/ui/NumberInput";

export default function Page() {
  return (
    <NumberInput disabled className="max-w-80" />
  )
}
`;

export const prefixCode = `import NumberInput from "@/components/ui/NumberInput";
import { IconCurrencyDollar } from '@tabler/icons-react';

export default function Page() {
  return (
     <NumberInput className="max-w-80" prefix={<IconCurrencyDollar size={20} />} />
  )
}
`;
