export const defaultCode = `import Segment, { type Option } from '@/components/ui/Segment';

const options: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];

export default function Page() {
  return (
     <Segment options={options} />
  )
}`;

export const sizeCode = `import Segment, { type Option } from '@/components/ui/Segment';

const options: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];

export default function Page() {
  return (
     <div className="flex items-center gap-4">
        <Segment size="sm" options={options} />
        <Segment size="md" options={options} />
        <Segment size="lg" options={options} />
      </div>
  )
}`;

export const equaledWidthCode = `import Segment, { type Option } from '@/components/ui/Segment';

const options: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];

export default function Page() {
  return (
     <Segment equaledWidth options={options} />
  )
}`;

export const disabledCode = `import Segment, { type Option } from '@/components/ui/Segment';

const options: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue', disabled: true },
  { label: 'Angular', value: 'angular' },
];

export default function Page() {
  return (
     <Segment defaultValue="react" options={options} />
  )
}`;

export const widthIconCode = `import Segment, { type Option } from '@/components/ui/Segment';
import { IconBrandReact, IconBrandVue, IconBrandAngular } from '@tabler/icons-react';

const options: Option[] = [
  {
    label: (
      <>
        <IconBrandReact size={16} />
        React
      </>
    ),
    value: 'react',
  },
  {
    label: (
      <>
        <IconBrandVue size={16} />
        Vue
      </>
    ),
    value: 'vue',
  },
  {
    label: (
      <>
        <IconBrandAngular size={16} />
        Angular
      </>
    ),
    value: 'angular',
  },
];

export default function Page() {
  return (
     <Segment options={options} />
  )
}`;
