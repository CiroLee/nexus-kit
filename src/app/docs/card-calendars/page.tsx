import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CardCalendar from '@/components/ui/CardCalendar';
import { defaultCode, defaultValueCode, startOnSunday } from '@/codes/demos/code.card-calendars';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'start-week-on-sunday', label: 'startWeekOnSunday' },
  { anchorId: 'default-value', label: 'defaultValue' },
];

export default function CardCalendarPage() {
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="CardCalendar" description="CardCalendar is a calendar component that displays a calendar with cards form." />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<CodeBox code={defaultCode} />}>
          <CardCalendar />
        </PreviewAndCode>
        <PreviewAndCode anchorId="start-week-on-sunday" title="starWeekOnSunday" codeText={startOnSunday} code={<CodeBox code={startOnSunday} />}>
          <CardCalendar startWeekOnSunday />
        </PreviewAndCode>
        <PreviewAndCode anchorId="default-value" title="defaultValue" codeText={defaultValueCode} code={<CodeBox code={defaultValueCode} />}>
          <CardCalendar defaultValue={new Date('2020/1/2')} />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
