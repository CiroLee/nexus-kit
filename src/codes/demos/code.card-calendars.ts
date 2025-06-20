export const defaultCode = `import CardCalendar from '@/components/ui/CardCalendar';

export default function Page() {
  return <CardCalendar />;
}`;

export const startOnSunday = `import CardCalendar from '@/components/ui/CardCalendar';

export default function Page() {
  return <CardCalendar startWeekOnSunday />;
}`;

export const defaultValueCode = `import CardCalendar from '@/components/ui/CardCalendar';

export default function Page() {
  return <CardCalendar defaultValue={new Date('2020/1/2')} />;
}`;
