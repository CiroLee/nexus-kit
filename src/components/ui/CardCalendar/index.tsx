'use client';
import { useEffect, useMemo, useState } from 'react';
import { cva } from 'class-variance-authority';
import { IconChevronLeft } from '@tabler/icons-react';
import Button from '../Button';
import CalendarGenerator from '../shared/calendar';
import { cn } from '@/lib/utils';
import { isInCurrentMonth, isSameDate } from '../shared/dateUtils';

const calendar = new CalendarGenerator();

const calendarItem = cva(`flex size-8 items-center justify-center rounded text-sm select-none`, {
  variants: {
    isIncurrentMonth: {
      false: 'text-description/60',
    },
    isSelected: {
      true: 'bg-primary text-white',
      false: 'hover:bg-neutral/50',
    },
  },
});

interface CardCalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  defaultValue?: Date;
  value?: Date;
  startWeekOnSunday?: boolean;
  onValueChange?: (value: Date) => void;
  ref?: React.Ref<HTMLDivElement>;
}
const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export default function CardCalendar({ defaultValue, value, startWeekOnSunday, onValueChange, className, ...props }: CardCalendarProps) {
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

  const onValueChangeHandler = (date: Date) => {
    setSelectedValue(date);
    console.log('test:', date);
    onValueChange?.(date);
  };

  const changeMonth = (type: 'prev' | 'next') => {
    const clonedDate = new Date(selectedValue);
    if (type === 'prev') {
      clonedDate.setMonth(clonedDate.getMonth() - 1);
    } else {
      clonedDate.setMonth(clonedDate.getMonth() + 1);
    }

    setSelectedValue(clonedDate);
  };

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  return (
    <div className={cn('border-line bg-background w-70 rounded-md border p-2', className)} {...props}>
      <div data-slot="card-calendar-action-bar" className="flex items-center justify-between text-sm">
        <Button size="sm" asIcon variant="light" colors="neutral" onClick={() => changeMonth('prev')}>
          <IconChevronLeft size={18} />
        </Button>
        <span>
          {selectedValue.toLocaleString('en-US', { month: 'short' })} {selectedValue.getFullYear()}
        </span>
        <Button size="sm" asIcon variant="light" colors="neutral" onClick={() => changeMonth('next')}>
          <IconChevronLeft size={18} className="rotate-180" />
        </Button>
      </div>
      <div data-slot="card-calendar-week-header" className="grid h-11 grid-cols-7 items-center justify-items-center text-sm font-semibold">
        {weekHeader.map((weekday, i) => (
          <div key={i}>{weekday}</div>
        ))}
      </div>
      <ul className="grid grid-cols-7 gap-2">
        {dateList.map((date) => (
          <button
            key={date.getTime()}
            className={calendarItem({ isIncurrentMonth: isInCurrentMonth(selectedValue, date), isSelected: isSameDate(date, selectedValue) })}
            onClick={() => onValueChangeHandler(date)}>
            {date.getDate()}
          </button>
        ))}
      </ul>
    </div>
  );
}
