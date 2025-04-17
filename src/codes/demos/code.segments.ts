export const defaultCode = `import Segment, { type Option } from '@/components/ui/Segment';

const option: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];

export default function Page() {
  return (
     <Segment option={option} />
  )
}
`;

export const sizeCode = `import Segment, { type Option } from '@/components/ui/Segment';

const option: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];

export default function Page() {
  return (
     <div className="flex items-center gap-4">
        <Segment size="sm" option={option} />
        <Segment size="md" option={option} />
        <Segment size="lg" option={option} />
      </div>
  )
}
`;

export const equaledWidthCode = `import Segment, { type Option } from '@/components/ui/Segment';

const option: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
];

export default function Page() {
  return (
     <Segment equaledWidth option={option} />
  )
}
`;

export const disabledCode = `import Segment, { type Option } from '@/components/ui/Segment';

const option: Option[] = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue', disabled: true },
  { label: 'Angular', value: 'angular' },
];

export default function Page() {
  return (
     <Segment defaultValue="react" option={option} />
  )
}
`;

export const widthIconCode = `import Segment, { type Option } from '@/components/ui/Segment';
import { IconBrandReact, IconBrandVue, IconBrandAngular } from '@tabler/icons-react';

const option: Option[] = [
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
     <Segment option={option} />
  )
}
`;
