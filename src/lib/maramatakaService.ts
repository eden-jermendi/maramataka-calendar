import { 
  mockLunarDays, 
  mockGregorianAnchors, 
  mockLunarMonthDays,
  MockLunarDay
} from '../data/mockMaramatakaData';

export const maramatakaService = {
  /**
   * Retrieves the corresponding MockLunarDay for a given Gregorian Date.
   * 
   * Logic:
   * 1. Finds the latest anchor that started on or before the input date.
   * 2. Calculates the day difference (1-indexed).
   * 3. Looks up the mapping in mockLunarMonthDays.
   * 4. Returns the full MockLunarDay object or null.
   */
  getLunarDayForDate(date: Date): MockLunarDay | null {
    // Normalize date to midnight to avoid hours/minutes affecting day calculation
    const normalizedRequestedDate = new Date(date);
    normalizedRequestedDate.setHours(0, 0, 0, 0);

    // 1. Find the applicable anchor
    const sortedAnchors = [...mockGregorianAnchors].sort((a, b) => 
      new Date(b.gregorianStartDate).getTime() - new Date(a.gregorianStartDate).getTime()
    );

    const anchor = sortedAnchors.find(a => {
      const anchorDate = new Date(a.gregorianStartDate);
      anchorDate.setHours(0, 0, 0, 0);
      return anchorDate <= normalizedRequestedDate;
    });

    if (!anchor) return null;

    // 2. Calculate day number (1-indexed)
    const startDate = new Date(anchor.gregorianStartDate);
    startDate.setHours(0, 0, 0, 0);
    
    const diffTime = normalizedRequestedDate.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const dayNumber = diffDays + 1;

    // 3. Find the Lunar Day ID from the join table
    const monthDay = mockLunarMonthDays.find(
      md => md.lunarMonthId === anchor.lunarMonthId && md.dayNumber === dayNumber
    );

    if (!monthDay) return null;

    // 4. Return the full Lunar Day object
    return mockLunarDays.find(d => d.id === monthDay.lunarDayId) || null;
  }
};
