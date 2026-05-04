import { 
  mockLunarDays, 
  mockLunarMonths,
  mockGregorianAnchors, 
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
    if (!anchor || dayNumber < 1) return null;

    // Automation: Directly map dayNumber to the standard 30-day sequence
    // If the month is 29 days, Day 30 simply won't be requested or displayed.
    return mockLunarDays[dayNumber - 1] || null;
  },

  /**
   * Retrieves an overview of the lunar month for a given Gregorian Date.
   */
  getLunarMonthForDate(date: Date): MonthOverview | null {
    const { anchor, nextAnchor } = this.getDayInfo(date);
    if (!anchor) return null;

    const month = mockLunarMonths.find(m => m.id === anchor.lunarMonthId);
    if (!month) return null;

    // Calculate month length based on distance to next anchor
    let monthLength = 30;
    if (nextAnchor) {
      const start = new Date(anchor.gregorianStartDate);
      const end = new Date(nextAnchor.gregorianStartDate);
      start.setHours(0, 0, 0, 0);
      end.setHours(0, 0, 0, 0);
      monthLength = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    }

    // Safety: Maramataka months are 29 or 30 days.
    const finalLength = Math.min(Math.max(monthLength, 29), 30);

    const days = Array.from({ length: finalLength }, (_, i) => {
      const dayNumber = i + 1;
      const lunarDay = mockLunarDays[i] || null;
      return { dayNumber, lunarDay };
    });

    return { month, days };
  },

  /**
   * Retrieves a MockLunarDay by its ID.
   */
  getLunarDayById(id: string): MockLunarDay | null {
    return mockLunarDays.find(d => d.id === id) || null;
  },

  /**
   * Finds the date of the previous month's anchor.
   */
  getPreviousMonthAnchor(date: Date): Date | null {
    const { anchor } = this.getDayInfo(date);
    if (!anchor) return null;

    const sortedAnchors = [...mockGregorianAnchors].sort((a, b) => 
      new Date(a.gregorianStartDate).getTime() - new Date(b.gregorianStartDate).getTime()
    );

    const currentIndex = sortedAnchors.findIndex(a => a.gregorianStartDate === anchor.gregorianStartDate);
    if (currentIndex <= 0) return null;

    return new Date(sortedAnchors[currentIndex - 1].gregorianStartDate);
  },

  /**
   * Finds the date of the next month's anchor.
   */
  getNextMonthAnchor(date: Date): Date | null {
    const { anchor } = this.getDayInfo(date);
    if (!anchor) return null;

    const sortedAnchors = [...mockGregorianAnchors].sort((a, b) => 
      new Date(a.gregorianStartDate).getTime() - new Date(b.gregorianStartDate).getTime()
    );

    const currentIndex = sortedAnchors.findIndex(a => a.gregorianStartDate === anchor.gregorianStartDate);
    if (currentIndex === -1 || currentIndex >= sortedAnchors.length - 1) return null;

    return new Date(sortedAnchors[currentIndex + 1].gregorianStartDate);
  },

  /**
   * Internal helper to find anchor, next anchor, and day number
   */
  private getDayInfo(date: Date) {
    const normalizedRequestedDate = new Date(date);
    normalizedRequestedDate.setHours(0, 0, 0, 0);

    const sortedAnchors = [...mockGregorianAnchors].sort((a, b) => 
      new Date(a.gregorianStartDate).getTime() - new Date(b.gregorianStartDate).getTime()
    );

    // Find the latest anchor that is NOT in the future
    let anchorIndex = -1;
    for (let i = 0; i < sortedAnchors.length; i++) {
      const anchorDate = new Date(sortedAnchors[i].gregorianStartDate);
      anchorDate.setHours(0, 0, 0, 0);
      if (anchorDate <= normalizedRequestedDate) {
        anchorIndex = i;
      } else {
        break;
      }
    }

    if (anchorIndex === -1) return { dayNumber: -1, anchor: null, nextAnchor: null };

    const anchor = sortedAnchors[anchorIndex];
    const nextAnchor = sortedAnchors[anchorIndex + 1] || null;

    const startDate = new Date(anchor.gregorianStartDate);
    startDate.setHours(0, 0, 0, 0);
    
    const diffTime = normalizedRequestedDate.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    return { dayNumber: diffDays + 1, anchor, nextAnchor };
  }
};
