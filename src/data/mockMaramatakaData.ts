// src/data/mockMaramatakaData.ts

export interface MockLunarDay {
  id: string;
  nameTeReo: string;
  nameEnglish: string;
  energyLevel: 'High' | 'Medium' | 'Low';
  whakatauki: string | null;
  meaningShort: string;
  recommendedActivities: string[];
  bracket?: 'Whakaeke' | 'Mōteatea' | 'Waiata ā-ringa' | 'Poi' | 'Haka' | 'Whakawātea';
}

export interface MockLunarMonth {
  id: string;
  nameTeReo: string;
  nameEnglish: string;
}

export interface MockGregorianAnchor {
  lunarMonthId: string;
  gregorianStartDate: string; // ISO date string (YYYY-MM-DD)
  year: number;
}

// 1. Core Lunar Days Data
export const mockLunarDays: MockLunarDay[] = [
  {
    id: 'day-whiro',
    nameTeReo: 'Whiro',
    nameEnglish: 'New Moon',
    energyLevel: 'Low',
    whakatauki: 'He pō kino, he pō kōkōmuka.',
    meaningShort: 'A time of renewal, introspection, and planting ideas.',
    recommendedActivities: ['Mahi māra (Gardening/Planting)', 'Planning'],
    bracket: 'Whakaeke'
  },
  {
    id: 'day-ouenuku',
    nameTeReo: 'Ōuenuku',
    nameEnglish: 'Crescent Moon',
    energyLevel: 'Medium',
    whakatauki: 'Uenuku tū wae rua.',
    meaningShort: 'Exploring our hearts’ desires and establishing stability.',
    recommendedActivities: ['Hī ika (Fishing)', 'Toitoi'],
    bracket: 'Whakaeke'
  },
  {
    id: 'day-rakaumatohi',
    nameTeReo: 'Rākaumatohi',
    nameEnglish: 'Full Moon phase',
    energyLevel: 'High',
    whakatauki: 'Moea tō poi, moea tō taiaha.',
    meaningShort: 'An abundant and high-energy time where things come to fruition.',
    recommendedActivities: ['Hī ika (Fishing)', 'Harvesting'],
    bracket: 'Poi'
  }
];

// 2. Core Lunar Months Data
export const mockLunarMonths: MockLunarMonth[] = [
  { id: 'month-kopu', nameTeReo: 'Te Rima o Kōpū', nameEnglish: 'Nov-Dec cycle' },
  { id: 'month-hakihea', nameTeReo: 'Hakihea', nameEnglish: 'Dec-Jan cycle' },
  { id: 'month-current', nameTeReo: 'Haratua', nameEnglish: 'April-May cycle' }
];

// 3. The Date Anchor (Maps real-world dates to when the lunar month begins)
export const mockGregorianAnchors: MockGregorianAnchor[] = [
  {
    lunarMonthId: 'month-kopu',
    gregorianStartDate: '2026-05-20', // Example start date
    year: 2026
  },
  {
    lunarMonthId: 'month-current',
    gregorianStartDate: '2026-04-18', // Start of the current cycle
    year: 2026
  }
];

// 4. Join Table (Maps the order of days inside a specific month)
export const mockLunarMonthDays = [
  { lunarMonthId: 'month-kopu', dayNumber: 1, lunarDayId: 'day-whiro' },
  { lunarMonthId: 'month-kopu', dayNumber: 2, lunarDayId: 'day-ouenuku' },
  { lunarMonthId: 'month-kopu', dayNumber: 15, lunarDayId: 'day-rakaumatohi' },
  { lunarMonthId: 'month-current', dayNumber: 17, lunarDayId: 'day-rakaumatohi' }
];
