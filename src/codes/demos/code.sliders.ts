export const defaultCode = `import Slider from '@/components/ui/Slider';

export default function Page() {
  return (
    <Slider defaultValue={[40]} className="max-w-100" />
  )
}
`;

export const disabledCode = `import Slider from '@/components/ui/Slider';

export default function Page() {
  return (
    <Slider defaultValue={[40]} disabled className="max-w-100" />
  )
}
`;

export const stepCode = `import Slider from '@/components/ui/Slider';

export default function Page() {
  return (
    <Slider defaultValue={[40]} step={20} className="max-w-100" />
  )
}
`;

export const colorsCode = `import Slider from '@/components/ui/Slider';

export default function Page() {
  return (
   <div className="space-y-6">
      <Slider defaultValue={[40]} colors="primary" className="max-w-100" />
      <Slider defaultValue={[40]} colors="secondary" className="max-w-100" />
      <Slider defaultValue={[40]} colors="warning" className="max-w-100" />
      <Slider defaultValue={[40]} colors="danger" className="max-w-100" />
      <Slider defaultValue={[40]} colors="neutral" className="max-w-100" />
    </div>
  )
}
`;

export const sizeCode = `import Slider from '@/components/ui/Slider';

export default function Page() {
  return (
    <div className="space-y-6">
      <Slider defaultValue={[40]} size="sm" className="max-w-100" />
      <Slider defaultValue={[40]} size="md" className="max-w-100" />
      <Slider defaultValue={[40]} size="lg" className="max-w-100" />
    </div>
  )
}
`;
export const verticalCode = `import Slider from '@/components/ui/Slider';

export default function Page() {
  return (
    <Slider defaultValue={[40]} orientation="vertical" className="h-60" />
  )
}
`;

export const rangeCode = `import Slider from '@/components/ui/Slider';

export default function Page() {
  return (
    <Slider defaultValue={[40, 80]} className="max-w-100" />
  )
}
`;
