export const defaultCode = `import Toggle from "@/components/ui/Toggle";

export default function Page() {
  return (
    <Toggle>B</Toggle>
  )
}`;

export const withIconCode = `import Toggle from "@/components/ui/Toggle";
import { IconItalic } from '@tabler/icons-react';
export default function Page() {
  return (
    <Toggle>
      <IconItalic size={18} />
      Italic
    </Toggle>
  )
}`;

export const sizeCode = `import Toggle from "@/components/ui/Toggle";

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <Toggle size="sm">B</Toggle>
      <Toggle size="md">B</Toggle>
      <Toggle size="lg">B</Toggle>
    </div>
  )
}`;

export const variantCode = `import Toggle from "@/components/ui/Toggle";

export default function Page() {
  return (
    <div className="flex items-center gap-4">
      <Toggle variant="light">light</Toggle>
      <Toggle variant="bordered">bordered</Toggle>
    </div>
  )
}`;

export const disabledCode = `import Toggle from "@/components/ui/Toggle";

export default function Page() {
  return (
    <Toggle disabled>disabled</Toggle>
  )
}`;
