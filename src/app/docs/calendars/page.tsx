'use client';
import { useEffect, useState } from 'react';
import SectionIntro from '@/components/business/SectionIntro';
import PreviewAndCode from '@/components/business/PreviewAndCode';
import ClientCode from '@/components/business/ClientCode';
import CodeDrawer from '@/components/business/CodeDrawer';
import OnThisPage, { AnchorItem } from '@/components/business/OnThisPage';
import Calendar from '@/components/ui/Calendar';
import Select from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { defaultCode, startOnSunday, centerMark, defaultValueCode, controlledCode, cellContentCode } from '@/codes/demos/code.calendars';
import { getSourceCode } from '@/app/api/github';

const navList: AnchorItem[] = [
  { anchorId: 'default', label: 'default' },
  { anchorId: 'start-week-on-sunday', label: 'starWeekOnSunday' },
  { anchorId: 'show-center-mark', label: 'showCenterMark' },
  { anchorId: 'default-value', label: 'defaultValue' },
  { anchorId: 'controlled', label: 'controlled' },
  { anchorId: 'custom-cell-content', label: 'cellContent' },
];

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

export default function CalendarPage() {
  const [sourceCode, setSourceCode] = useState({ source: '', core: '' });
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  });

  const getCodes = async () => {
    const source = await getSourceCode('Calendar/index.tsx');
    const core = await getSourceCode('shared/calendar.ts');
    setSourceCode({ source, core });
  };

  useEffect(() => {
    getCodes();
  }, []);
  return (
    <div className="flex">
      <div className="main-container">
        <SectionIntro title="Calendar" description="Calendar is a component to display date in calendar form." />
        <CodeDrawer
          isClient
          codeTabs={[
            { id: 'index', label: 'index.tsx', content: sourceCode.source },
            { id: 'calendar', label: 'calendar.ts', content: sourceCode.core },
          ]}
        />
        <PreviewAndCode anchorId="default" title="default" codeText={defaultCode} code={<ClientCode code={defaultCode} />}>
          <Calendar />
        </PreviewAndCode>
        <PreviewAndCode anchorId="start-week-on-sunday" title="starWeekOnSunday" codeText={startOnSunday} code={<ClientCode code={startOnSunday} />}>
          <Calendar startWeekOnSunday />
        </PreviewAndCode>
        <PreviewAndCode anchorId="show-center-mark" title="showCenterMark" codeText={centerMark} code={<ClientCode code={centerMark} />}>
          <Calendar showCenterMark markType="month" />
        </PreviewAndCode>
        <PreviewAndCode anchorId="default-value" title="defaultValue" codeText={defaultValueCode} code={<ClientCode code={defaultValueCode} />}>
          <Calendar showCenterMark defaultValue={new Date('2020/1/2')} />
        </PreviewAndCode>
        <PreviewAndCode anchorId="controlled" title="controlled" codeText={controlledCode} code={<ClientCode code={controlledCode} />}>
          <div>
            <div className="mb-4 flex justify-end gap-2">
              <Select className="w-24" value={`${date.year}`} items={years} onValueChange={(val) => setDate((pre) => ({ ...pre, year: Number(val) }))} />
              <Select className="w-24" value={`${date.month}`} items={months} onValueChange={(val) => setDate((pre) => ({ ...pre, month: Number(val) }))} />
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
        </PreviewAndCode>
        <PreviewAndCode anchorId="custom-cell-content" title="cellContent" codeText={cellContentCode} code={<ClientCode code={cellContentCode} />}>
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
            defaultValue={new Date('2020/1/2')}
          />
        </PreviewAndCode>
      </div>
      <OnThisPage list={navList} />
    </div>
  );
}
