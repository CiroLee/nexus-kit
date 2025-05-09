export const defaultCode = `import Calendar from '@/components/ui/Calendar';

export default function Page() {
  return <Calendar />;
}
`;

export const startOnSunday = `import Calendar from '@/components/ui/Calendar';

export default function Page() {
  return <Calendar startWeekOnSunday />;
}
`;

export const centerMark = `import Calendar from '@/components/ui/Calendar';

export default function Page() {
  return <Calendar showCenterMark markType="month" />;
}
`;

export const defaultValueCode = `import Calendar from '@/components/ui/Calendar';

export default function Page() {
  return <Calendar showCenterMark defaultValue={new Date('2020-1-2')} />;
}
`;

export const controlledCode = `import { useState } from 'react';
import Calendar from '@/components/ui/Calendar';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';

const years = [
  { id: '2022', label: '2022', value: '2022' },
  { id: '2023', label: '2023', value: '2023' },
  { id: '2024', label: '2024', value: '2024' },
  { id: '2025', label: '2025', value: '2025' },
  { id: '2026', label: '2026', value: '2026' },
];

const months = [
  { id: '1', label: '1', value: '0' },
  { id: '2', label: '2', value: '1' },
  { id: '3', label: '3', value: '2' },
  { id: '4', label: '4', value: '3' },
  { id: '5', label: '5', value: '4' },
  { id: '6', label: '6', value: '5' },
  { id: '7', label: '7', value: '6' },
  { id: '8', label: '8', value: '7' },
  { id: '9', label: '9', value: '8' },
  { id: '10', label: '10', value: '9' },
  { id: '11', label: '11', value: '10' },
  { id: '12', label: '12', value: '11' },
];

export default function Page() {
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  });
  return (
    <div>
      <div className="mb-4 flex justify-end gap-2">
        <Select className="w-24" value={\`\${date.year}\`} items={years} onValueChange={(val) => setDate((pre) => ({ ...pre, year: Number(val) }))} />
        <Select className="w-24" value={\`\${date.month}\`} items={months} onValueChange={(val) => setDate((pre) => ({ ...pre, month: Number(val) }))} />
        <Button
          onClick={() => {
            setDate({
              year: new Date().getFullYear(),
              month: new Date().getMonth(),
              day: new Date().getDate(),
            });
          }}>
          Today
        </Button>
      </div>
      <Calendar
        showCenterMark
        startWeekOnSunday
        value={new Date(date.year, date.month, date.day)}
        onValueChange={(date) => {
          setDate({ year: date.getFullYear(), month: date.getMonth(), day: date.getDate() });
        }}
      />
    </div>
  );
}
`;

export const cellContentCode = `import Calendar from '@/components/ui/Calendar';

export default function Page() {
  return (
    <Calendar
      showCenterMark
      cellContent={(date) =>
        date.getDate() === 2 && date.getMonth() === 0 ? (
          <div className="space-y-1 pt-3 text-xs">
            <li className="flex w-full items-center gap-1">
              <span className="bg-secondary block size-2 shrink-0 rounded-full"></span>
              <span className="truncate">Meeting at 10:00 am</span>
            </li>
            <li className="flex w-full items-center gap-1">
              <span className="bg-primary block size-2 shrink-0 rounded-full"></span>
              <span className="truncate">Code Review</span>
            </li>
          </div>
        ) : null
      }
      defaultValue={new Date('2020-1-2')} 
    />
  );
}
`;
