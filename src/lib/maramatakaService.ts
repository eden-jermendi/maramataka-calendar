import { 
  mockLunarDays, 
  mockLunarMonths,
  mockGregorianAnchors
} from '../data/mockMaramatakaData';
import type {
  MockLunarDay,
  MockLunarMonth,
  MockGregorianAnchor
} from '../data/mockMaramatakaData';

export interface MonthOverview {
  month: MockLunarMonth;
  days: { dayNumber: number; lunarDay: MockLunarDay | null }[];
  year: number;
}

const API_BASE_URL = 'http://localhost:3001/api';

// Internal cached state populated from the DB, falling back to static mock data
let dbLunarDays: MockLunarDay[] = mockLunarDays;
let dbLunarMonths: MockLunarMonth[] = mockLunarMonths;
let dbGregorianAnchors: MockGregorianAnchor[] = mockGregorianAnchors;
let hasLoadedFromDb = false;

export const maramatakaService = {
  /**
   * Loads Maramataka datasets from the SQLite/Express backend.
   * Falls back to static mock data if backend is unreachable.
   */
  async loadData(): Promise<boolean> {
    if (hasLoadedFromDb) return true;

    try {
      console.log('Fetching Maramataka data from backend...');
      
      const [daysRes, monthsRes, anchorsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/lunar-days`),
        fetch(`${API_BASE_URL}/lunar-months`),
        fetch(`${API_BASE_URL}/gregorian-anchors`)
      ]);

      if (!daysRes.ok || !monthsRes.ok || !anchorsRes.ok) {
        throw new Error('Failed to fetch from backend API');
      }

      const daysData = await daysRes.json();
      const monthsData = await monthsRes.json();
      const anchorsData = await anchorsRes.json();

      // Map backend database format to frontend service types
      dbLunarDays = daysData.map((d: any) => ({
        id: d.id,
        nameTeReo: d.name_tr,
        nameEnglish: d.name_en,
        energyLevel: d.energy_level as 'High' | 'Medium' | 'Low',
        whakatauki: d.whakatauki,
        meaningShort: d.meaning_short,
        recommendedActivities: d.recommended || [],
        bracket: d.bracket || undefined
      }));

      dbLunarMonths = monthsData.map((m: any) => ({
        id: m.id,
        nameTeReo: m.name_tr,
        nameEnglish: m.name_en
      }));

      dbGregorianAnchors = anchorsData.map((a: any) => ({
        lunarMonthId: a.lunar_month_id,
        gregorianStartDate: a.gregorian_start_date,
        year: a.year
      }));

      // Dev-time data validation (Step 6)
      if (import.meta.env.DEV) {
        console.log('Running dev-time database payload validations...');
        const asciiRegex = /^[a-zA-Z0-9_-]+$/;
        
        // 1. Validate Lunar Day IDs uniqueness & ASCII safety
        const dayIds = new Set<string>();
        dbLunarDays.forEach(day => {
          if (dayIds.has(day.id)) {
            console.error(`[Dev Validation] Duplicate Lunar Day ID found: ${day.id}`);
          }
          if (!asciiRegex.test(day.id)) {
            console.error(`[Dev Validation] Lunar Day ID is not ASCII safe: ${day.id}`);
          }
          dayIds.add(day.id);
        });

        // 2. Validate Month IDs uniqueness & ASCII safety
        const monthIds = new Set<string>();
        dbLunarMonths.forEach(month => {
          if (monthIds.has(month.id)) {
            console.error(`[Dev Validation] Duplicate Month ID found: ${month.id}`);
          }
          if (!asciiRegex.test(month.id)) {
            console.error(`[Dev Validation] Month ID is not ASCII safe: ${month.id}`);
          }
          monthIds.add(month.id);
        });

        // 3. Validate Anchor associations
        dbGregorianAnchors.forEach(anchor => {
          if (!monthIds.has(anchor.lunarMonthId)) {
            console.error(`[Dev Validation] Anchor references non-existent Month ID: ${anchor.lunarMonthId}`);
          }
        });
        
        console.log('Database payload validation checks completed.');
      }

      hasLoadedFromDb = true;
      console.log('Successfully loaded Maramataka data from database backend.');
      return true;
    } catch (error) {
      console.warn('Backend API unreachable. Falling back to offline static data.', error);
      // We retain the default static mock data on error, so the app remains functional
      return false;
    }
  },

  /**
   * Check if data has been successfully fetched from backend.
   */
  isDataLoaded(): boolean {
    return hasLoadedFromDb;
  },

  /**
   * Retrieves the corresponding MockLunarDay for a given Gregorian Date.
   */
  getLunarDayForDate(date: Date): MockLunarDay | null {
    const { dayNumber, anchor } = this.getDayInfo(date);
    if (!anchor || dayNumber < 1) return null;

    // Direct mapping to cached days sequence
    return dbLunarDays[dayNumber - 1] || null;
  },

  /**
   * Retrieves an overview of the lunar month for a given Gregorian Date.
   */
  getLunarMonthForDate(date: Date): MonthOverview | null {
    const { anchor, nextAnchor } = this.getDayInfo(date);
    if (!anchor) return null;

    const month = dbLunarMonths.find(m => m.id === anchor.lunarMonthId);
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
      const lunarDay = dbLunarDays[i] || null;
      return { dayNumber, lunarDay };
    });

    return { month, days, year: anchor.year };
  },

  /**
   * Retrieves a MockLunarDay by its ID.
   */
  getLunarDayById(id: string): MockLunarDay | null {
    return dbLunarDays.find(d => d.id === id) || null;
  },

  /**
   * Finds the date of the previous month's anchor.
   */
  getPreviousMonthAnchor(date: Date): Date | null {
    const { anchor } = this.getDayInfo(date);
    if (!anchor) return null;

    const sortedAnchors = [...dbGregorianAnchors].sort((a, b) => 
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

    const sortedAnchors = [...dbGregorianAnchors].sort((a, b) => 
      new Date(a.gregorianStartDate).getTime() - new Date(b.gregorianStartDate).getTime()
    );

    const currentIndex = sortedAnchors.findIndex(a => a.gregorianStartDate === anchor.gregorianStartDate);
    if (currentIndex === -1 || currentIndex >= sortedAnchors.length - 1) return null;

    return new Date(sortedAnchors[currentIndex + 1].gregorianStartDate);
  },

  /**
   * Internal helper to find anchor, next anchor, and day number
   */
  getDayInfo(date: Date) {
    const normalizedRequestedDate = new Date(date);
    normalizedRequestedDate.setHours(0, 0, 0, 0);

    const sortedAnchors = [...dbGregorianAnchors].sort((a, b) => 
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
