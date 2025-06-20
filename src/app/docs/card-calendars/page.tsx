import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import CodeDrawer from '@/components/business/CodeDrawer';
import CodeBox from '@/components/business/CodeBox';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import CardCalendar from '@/components/ui/CardCalendar';
import { getSourceCode } from '@/app/api/github';
import { defaultCode, defaultValueCode, startOnSunday } from '@/codes/demos/code.card-calendars';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'start-week-on-sunday', label: 'startWeekOnSunday' },
  { anchorId: 'default-value', label: 'defaultValue' },
];

export default async function CardCalendarPage() {
  const source = await getSourceCode('CardCalendar/index.tsx');
  const core = await getSourceCode('shared/calendar.ts');
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="CardCalendar" description="CardCalendar is a calendar component that displays a calendar with cards form." />
        <CodeDrawer
          isClient
          codeTabs={[
            { id: 'index', label: 'index.tsx', content: source },
            { id: 'calendar', label: 'calendar.ts', content: core },
          ]}
        />
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
