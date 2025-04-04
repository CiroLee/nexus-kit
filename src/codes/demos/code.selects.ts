export const defaultCode = `import Select, { type SelectItem } from "@/components/ui/Select";

const selectItems: SelectItem[] = [
  {
    id: '1',
    label: 'Apple',
    value: 'apple',
  },
  {
    id: '2',
    label: 'Orange',
    value: 'orange',
  },
  {
    id: '3',
    label: 'Banana',
    value: 'banana',
  },
  {
    id: '4',
    label: 'Pineapple',
    value: 'pineapple',
  },
];

export default function Page() {
  return (
    <Select className="w-60" placeholder="select sth..." items={selectItems} />
  )
}
`;

export const sizeCode = `import Select, { type SelectItem } from "@/components/ui/Select";

const selectItems: SelectItem[] = [
  {
    id: '1',
    label: 'Apple',
    value: 'apple',
  },
  {
    id: '2',
    label: 'Orange',
    value: 'orange',
  },
  {
    id: '3',
    label: 'Banana',
    value: 'banana',
  },
  {
    id: '4',
    label: 'Pineapple',
    value: 'pineapple',
  },
];

export default function Page() {
  return (
    <div className="grid items-center gap-4 md:grid-cols-3">
      <Select size="sm" placeholder="small size..." items={selectItems} />
      <Select size="md" placeholder="medium size..." items={selectItems} />
      <Select size="lg" placeholder="large size..." items={selectItems} />
    </div>
  )
}
`;

export const disabledCode = `import Select, { type SelectItem } from "@/components/ui/Select";

const selectItems: SelectItem[] = [
  {
    id: '1',
    label: 'Apple',
    value: 'apple',
  },
  {
    id: '2',
    label: 'Orange',
    value: 'orange',
  },
  {
    id: '3',
    label: 'Banana',
    value: 'banana',
  },
  {
    id: '4',
    label: 'Pineapple',
    value: 'pineapple',
  },
];

const selectItems2: SelectItem[] = [
  {
    id: 'apple',
    label: 'apple',
    value: 'apple',
  },
  {
    id: 'orange',
    label: 'orange',
    value: 'orange',
    disabled: true,
  },
  {
    id: 'banana',
    label: 'banana',
    value: 'banana',
  },
];

export default function Page() {
  return (
    <div className="grid items-center gap-4 md:grid-cols-2">
      <Select disabled placeholder="whole select disabled" items={selectItems} />
      <Select placeholder="item disabled" items={selectItems2} />
    </div>
  )
}
`;

export const groupCode = `import Select, { type SelectItem } from "@/components/ui/Select";

const groupedItems: SelectItem[] = [
  {
    id: 'fruits',
    title: 'Fruits',
    options: selectItems,
  },
  {
    id: 'deserts',
    title: 'Deserts',
    options: [
      {
        id: 'tiramisu',
        label: 'Tiramisu',
        value: 'tiramisu',
      },
      {
        id: 'cheesecake',
        label: 'Cheesecake',
        value: 'cheesecake',
      },
      {
        id: 'macaron',
        label: 'Macaron',
        value: 'macaron',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    options: [
      {
        id: 'bubble tea',
        label: 'Bubble Tea',
        value: 'bubble-tea',
      },
      {
        id: 'lemonade',
        label: 'Lemonade',
        value: 'lemonade',
      },
      {
        id: 'iced-americano',
        label: 'Iced Americano',
        value: 'iced-americano',
      },
    ],
  },
];

export default function Page() {
  return (
    <Select className="min-w-70" placeholder="select you what like" items={groupedItems} />
  )
}
`;
