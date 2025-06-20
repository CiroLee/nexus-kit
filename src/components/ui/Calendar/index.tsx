'use client';
import { useEffect, useMemo, useState } from 'react';
import CalendarGenerator from '../shared/calendar';
import { isInCurrentMonth, isSameDate } from '../shared/dateUtils';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
const calendar = new CalendarGenerator();

const calendarItem = cva(
  `border-line transition-colors relative h-25 border-r border-b p-2 nth-[7n]:border-r-0 nth-last-[-n+7]:border-b-0
  hover:bg-line/20 dark:hover:bg-line/10 cursor-pointer overflow-hidden`,
  {
    variants: {
      isIncurrentMonth: {
        false: 'text-description/60',
      },
    },
  },
);

interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  defaultValue?: Date;
  value?: Date;
  cellContent?: (date: Date) => React.ReactNode;
  startWeekOnSunday?: boolean;
  showCenterMark?: boolean;
  markType?: 'year' | 'month' | 'both';
  onValueChange?: (value: Date) => void;
  ref?: React.Ref<HTMLDivElement>;
}
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar({ defaultValue, value, cellContent, startWeekOnSunday, showCenterMark, markType = 'month', onValueChange, className, ...props }: CalendarProps) {
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || new Date());

  const weekHeader = useMemo(() => {
    if (!startWeekOnSunday) {
      const weekCopied = [...weekdays];
      const first = weekCopied.shift() as string;
      return [...weekCopied, first];
    }
    return weekdays;
  }, [startWeekOnSunday]);

  const dateList = useMemo(() => {
    const { list } = calendar.generate({
      year: selectedValue.getFullYear(),
      month: selectedValue.getMonth() + 1,
      startWeekOnSunday,
    });
    return list;
  }, [selectedValue, startWeekOnSunday]);

  const markStr = useMemo(() => {
    switch (markType) {
      case 'year':
        return selectedValue.getFullYear();
      case 'month':
        return selectedValue.getMonth() + 1;
      case 'both':
        return `${selectedValue.getFullYear()}-${selectedValue.getMonth() + 1}`;
    }
  }, [markType, selectedValue]);

  const onValueChangeHandler = (date: Date) => {
    setSelectedValue(date);
    onValueChange?.(date);
  };

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);
  return (
    <div className={cn('border-line relative rounded border', className)} {...props}>
      <div data-slot="calendar-week-header" className="border-line grid h-9 grid-cols-7 border-b">
        {weekHeader.map((weekday, i) => (
          <div key={i} className="flex h-full items-center justify-center text-sm font-semibold">
            {weekday}
          </div>
        ))}
      </div>
      <ul className="grid grid-cols-7">
        {dateList.map((date) => (
          <div key={date.getTime()} className={calendarItem({ isIncurrentMonth: isInCurrentMonth(selectedValue, date) })} onClick={() => onValueChangeHandler(date)}>
            <p className="text-center text-sm">
              <span className={cn('inline-flex size-6 items-center justify-center rounded-full', { 'bg-primary text-white': isSameDate(selectedValue, date) })}>{date.getDate()}</span>
            </p>
            {cellContent ? <>{cellContent(date)}</> : null}
          </div>
        ))}
      </ul>
      {showCenterMark ? (
        <div date-node="center-mark" className="text-description/15 absolute top-1/2 left-1/2 -z-1 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold">
          {markStr}
        </div>
      ) : null}
    </div>
  );
}
