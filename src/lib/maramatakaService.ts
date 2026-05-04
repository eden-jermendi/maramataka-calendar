import { 
  mockLunarDays, 
  mockLunarMonths,
  mockGregorianAnchors, 
  mockLunarMonthDays,
  MockLunarDay,
  MockLunarMonth
} from '../data/mockMaramatakaData';

export interface MonthOverview {
  month: MockLunarMonth;
  days: { dayNumber: number; lunarDay: MockLunarDay | null }[];
}

export const maramatakaService = {
  /**
   * Retrieves the corresponding MockLunarDay for a given Gregorian Date.
   */
  getLunarDayForDate(date: Date): MockLunarDay | null {
    const { dayNumber, anchor } = this.getDayInfo(date);
    if (!anchor) return null;

    const monthDay = mockLunarMonthDays.find(
      md => md.lunarMonthId === anchor.lunarMonthId && md.dayNumber === dayNumber
    );

    if (!monthDay) return null;
    return mockLunarDays.find(d => d.id === monthDay.lunarDayId) || null;
  },

  /**
   * Retrieves an overview of the lunar month for a given Gregorian Date.
   */
  getLunarMonthForDate(date: Date): MonthOverview | null {
    const { anchor } = this.getDayInfo(date);
    if (!anchor) return null;

    const month = mockLunarMonths.find(m => m.id === anchor.lunarMonthId);
    if (!month) return null;

    // Generate 30 days for the overview
    const days = Array.from({ length: 30 }, (_, i) => {
      const dayNumber = i + 1;
      const mapping = mockLunarMonthDays.find(
        md => md.lunarMonthId === anchor.lunarMonthId && md.dayNumber === dayNumber
      );
      const lunarDay = mapping ? (mockLunarDays.find(d => d.id === mapping.lunarDayId) || null) : null;
      
      return { dayNumber, lunarDay };
    });

    return { month, days };
  },

  /**
   * Internal helper to find anchor and day number
   */
  private getDayInfo(date: Date) {
    const normalizedRequestedDate = new Date(date);
    normalizedRequestedDate.setHours(0, 0, 0, 0);

    const sortedAnchors = [...mockGregorianAnchors].sort((a, b) => 
      new Date(b.gregorianStartDate).getTime() - new Date(a.gregorianStartDate).getTime()
    );

    const anchor = sortedAnchors.find(a => {
      const anchorDate = new Date(a.gregorianStartDate);
      anchorDate.setHours(0, 0, 0, 0);
      return anchorDate <= normalizedRequestedDate;
    });

    if (!anchor) return { dayNumber: -1, anchor: null };

    const startDate = new Date(anchor.gregorianStartDate);
    startDate.setHours(0, 0, 0, 0);
    
    const diffTime = normalizedRequestedDate.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    return { dayNumber: diffDays + 1, anchor };
  }
};
