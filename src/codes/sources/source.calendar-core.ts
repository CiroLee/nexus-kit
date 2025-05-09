const code = `interface CalendarOption {
  month: number;
  year: number;
  startWeekOnSunday?: boolean;
}

interface CalendarResult {
  list: Date[];
  total: number;
  weeks: number;
  firstDayOffset: number;
  lastDayOffset: number;
}

export default class CalendarGenerator {
  generate(option: CalendarOption): CalendarResult {
    const { month, year, startWeekOnSunday } = option;

    const firstDayOfMonth = this.getFirstDayOfMonth(month, year);
    const daysInMonth = this.getDaysInMonth(month, year);
    const lastDayOfMonth = new Date(year, month - 1, daysInMonth);

    const firstDayOffset = startWeekOnSunday ? firstDayOfMonth.getDay() : (firstDayOfMonth.getDay() + 6) % 7;
    const lastDayOffset = startWeekOnSunday ? 6 - lastDayOfMonth.getDay() : (7 - lastDayOfMonth.getDay() - 1) % 7;

    // calculate total days and weeks for the grid data
    const totalDays = firstDayOffset + daysInMonth + lastDayOffset;
    const weeks = Math.ceil(totalDays / 7);
    const gridSize = weeks * 7;

    const dates: Date[] = [];
    for (let i = 0; i < gridSize; i++) {
      dates.push(new Date(year, month - 1, 1 + (i - firstDayOffset)));
    }

    return {
      list: dates,
      total: daysInMonth,
      weeks,
      firstDayOffset,
      lastDayOffset,
    };
  }

  private getFirstDayOfMonth(month: number, year: number) {
    // cause month in Date starts from 0
    return new Date(year, month - 1, 1);
  }

  private getDaysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }
}
`;

export default code;
