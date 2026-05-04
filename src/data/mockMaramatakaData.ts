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

// 1. Core Lunar Days Data (30 Days)
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
    id: 'day-tirea',
    nameTeReo: 'Tirea',
    nameEnglish: 'First Crescent',
    energyLevel: 'Low',
    whakatauki: 'Tirea te marama, he marama hihi.',
    meaningShort: 'A time for subtle growth and quiet preparation.',
    recommendedActivities: ['Planning', 'Mahi māra (Gardening/Planting)'],
    bracket: 'Whakaeke'
  },
  {
    id: 'day-hoata',
    nameTeReo: 'Hoata',
    nameEnglish: 'Crescent Moon',
    energyLevel: 'Medium',
    whakatauki: 'He marama hoata, he marama pai.',
    meaningShort: 'Energy begins to rise. Good for initiating small tasks.',
    recommendedActivities: ['Hī ika (Fishing)', 'Mahi māra (Gardening/Planting)'],
    bracket: 'Whakaeke'
  },
  {
    id: 'day-ouenuku',
    nameTeReo: 'Ōuenuku',
    nameEnglish: 'Waxing Crescent',
    energyLevel: 'Medium',
    whakatauki: 'Uenuku tū wae rua.',
    meaningShort: 'Exploring our hearts’ desires and establishing stability.',
    recommendedActivities: ['Hī ika (Fishing)', 'Toitoi'],
    bracket: 'Whakaeke'
  },
  {
    id: 'day-okoro',
    nameTeReo: 'Okoro',
    nameEnglish: 'Waxing Crescent',
    energyLevel: 'Medium',
    whakatauki: 'Okoro te marama, he marama taurikura.',
    meaningShort: 'A productive day for community and shared mahi.',
    recommendedActivities: ['Mahi māra (Gardening/Planting)', 'Toitoi'],
    bracket: 'Whakaeke'
  },
  {
    id: 'day-tamatea-ngana',
    nameTeReo: 'Tamatea-ngana',
    nameEnglish: 'First Quarter',
    energyLevel: 'High',
    whakatauki: 'Tamatea ngana, he marama tūpato.',
    meaningShort: 'High energy, but often accompanied by unpredictable weather.',
    recommendedActivities: ['Toitoi', 'Planning'],
    bracket: 'Whakaeke'
  },
  {
    id: 'day-tamatea-kai-ariki',
    nameTeReo: 'Tamatea-kai-ariki',
    nameEnglish: 'Waxing Gibbous',
    energyLevel: 'High',
    whakatauki: 'Tamatea kai ariki, he marama kaha.',
    meaningShort: 'Powerful energy. Focus on complex or demanding projects.',
    recommendedActivities: ['Hī ika (Fishing)', 'Toitoi'],
    bracket: 'Whakaeke'
  },
  {
    id: 'day-tamatea-whakapau',
    nameTeReo: 'Tamatea-whakapau',
    nameEnglish: 'Waxing Gibbous',
    energyLevel: 'Medium',
    whakatauki: 'Tamatea whakapau, he marama whakatau.',
    meaningShort: 'Time to conclude tasks and settle internal matters.',
    recommendedActivities: ['Planning', 'Harvesting'],
    bracket: 'Mōteatea'
  },
  {
    id: 'day-huna',
    nameTeReo: 'Huna',
    nameEnglish: 'Waxing Gibbous',
    energyLevel: 'Low',
    whakatauki: 'He rā huna, he rā pōkē.',
    meaningShort: 'Hidden day. Energy is low and things may be elusive.',
    recommendedActivities: ['Planning', 'Mahi māra (Gardening/Planting)'],
    bracket: 'Mōteatea'
  },
  {
    id: 'day-ari',
    nameTeReo: 'Ari',
    nameEnglish: 'Waxing Gibbous',
    energyLevel: 'Low',
    whakatauki: 'Ari te marama, he rā mokemoke.',
    meaningShort: 'Unfavorable for most outdoor activities. Focus inward.',
    recommendedActivities: ['Planning'],
    bracket: 'Mōteatea'
  },
  {
    id: 'day-hotoke',
    nameTeReo: 'Hotoke',
    nameEnglish: 'Waxing Gibbous',
    energyLevel: 'Low',
    whakatauki: 'Hotoke te marama, he rā mātao.',
    meaningShort: 'Quiet energy. Good for reflection and maintaining roots.',
    recommendedActivities: ['Planning', 'Mahi māra (Gardening/Planting)'],
    bracket: 'Mōteatea'
  },
  {
    id: 'day-mawharu',
    nameTeReo: 'Mawharu',
    nameEnglish: 'Waxing Gibbous',
    energyLevel: 'Medium',
    whakatauki: 'Mawharu te marama, he rā tupu.',
    meaningShort: 'Abundant day for planting root crops specifically.',
    recommendedActivities: ['Mahi māra (Gardening/Planting)', 'Harvesting'],
    bracket: 'Mōteatea'
  },
  {
    id: 'day-ohua',
    nameTeReo: 'Ohua',
    nameEnglish: 'Waxing Gibbous',
    energyLevel: 'High',
    whakatauki: 'Ohua te marama, he rā hua.',
    meaningShort: 'Very productive day. Everything planted today will flourish.',
    recommendedActivities: ['Mahi māra (Gardening/Planting)', 'Hī ika (Fishing)'],
    bracket: 'Poi'
  },
  {
    id: 'day-oturu',
    nameTeReo: 'Oturu',
    nameEnglish: 'Full Moon',
    energyLevel: 'High',
    whakatauki: 'Oturu te marama, he rā tōtara.',
    meaningShort: 'Peak energy. Excellent for fishing and harvesting.',
    recommendedActivities: ['Hī ika (Fishing)', 'Harvesting'],
    bracket: 'Poi'
  },
  {
    id: 'day-rakaunui',
    nameTeReo: 'Rakaunui',
    nameEnglish: 'Full Moon',
    energyLevel: 'High',
    whakatauki: 'Rakaunui te marama, he rā mānene.',
    meaningShort: 'The moon is at its brightest. High abundance on land and sea.',
    recommendedActivities: ['Hī ika (Fishing)', 'Harvesting'],
    bracket: 'Poi'
  },
  {
    id: 'day-rakaumatohi',
    nameTeReo: 'Rākaumatohi',
    nameEnglish: 'Waning Gibbous',
    energyLevel: 'High',
    whakatauki: 'Moea tō poi, moea tō taiaha.',
    meaningShort: 'An abundant and high-energy time where things come to fruition.',
    recommendedActivities: ['Hī ika (Fishing)', 'Harvesting'],
    bracket: 'Poi'
  },
  {
    id: 'day-takirau',
    nameTeReo: 'Takirau',
    nameEnglish: 'Waning Gibbous',
    energyLevel: 'Medium',
    whakatauki: 'Takirau te marama, he rā heke.',
    meaningShort: 'Energy starts to recede. Good for maintenance and balance.',
    recommendedActivities: ['Harvesting', 'Toitoi'],
    bracket: 'Poi'
  },
  {
    id: 'day-oike',
    nameTeReo: 'Oike',
    nameEnglish: 'Waning Gibbous',
    energyLevel: 'Medium',
    whakatauki: 'Oike te marama, he rā whakatā.',
    meaningShort: 'A day for light work and preparation for the coming phases.',
    recommendedActivities: ['Toitoi', 'Planning'],
    bracket: 'Haka'
  },
  {
    id: 'day-korekore-te-whiawhia',
    nameTeReo: 'Korekore-te-whiawhia',
    nameEnglish: 'Waning Gibbous',
    energyLevel: 'Low',
    whakatauki: 'Korekore te whiawhia, he rā kore.',
    meaningShort: 'Low energy day. Avoid major undertakings.',
    recommendedActivities: ['Planning'],
    bracket: 'Haka'
  },
  {
    id: 'day-korekore-te-rawea',
    nameTeReo: 'Korekore-te-rawea',
    nameEnglish: 'Last Quarter',
    energyLevel: 'Low',
    whakatauki: 'Korekore te rawea, he rā āio.',
    meaningShort: 'Quiet and still. Good for observation and study.',
    recommendedActivities: ['Planning'],
    bracket: 'Haka'
  },
  {
    id: 'day-korekore-piri-ki-te-tangaroa',
    nameTeReo: 'Korekore-piri-ki-te-tangaroa',
    nameEnglish: 'Waning Crescent',
    energyLevel: 'Low',
    whakatauki: 'Korekore piri ki te tangaroa, he rā piri.',
    meaningShort: 'A day that bridges into the productive Tangaroa phase.',
    recommendedActivities: ['Toitoi', 'Planning'],
    bracket: 'Haka'
  },
  {
    id: 'day-tangaroa-amua',
    nameTeReo: 'Tangaroa-amua',
    nameEnglish: 'Waning Crescent',
    energyLevel: 'High',
    whakatauki: 'Tangaroa amua, he rā hī.',
    meaningShort: 'Excellent for all sea-related activities.',
    recommendedActivities: ['Hī ika (Fishing)', 'Toitoi'],
    bracket: 'Haka'
  },
  {
    id: 'day-tangaroa-aroto',
    nameTeReo: 'Tangaroa-aroto',
    nameEnglish: 'Waning Crescent',
    energyLevel: 'High',
    whakatauki: 'Tangaroa aroto, he rā ika.',
    meaningShort: 'Peak fishing time. High success in all ventures.',
    recommendedActivities: ['Hī ika (Fishing)', 'Harvesting'],
    bracket: 'Haka'
  },
  {
    id: 'day-tangaroa-ki-te-oho',
    nameTeReo: 'Tangaroa-ki-te-oho',
    nameEnglish: 'Waning Crescent',
    energyLevel: 'High',
    whakatauki: 'Tangaroa ki te oho, he rā whakaoho.',
    meaningShort: 'Energy is dynamic and awakening. Great for sea harvesting.',
    recommendedActivities: ['Hī ika (Fishing)', 'Harvesting'],
    bracket: 'Whakawātea'
  },
  {
    id: 'day-otane',
    nameTeReo: 'Otane',
    nameEnglish: 'Waning Crescent',
    energyLevel: 'High',
    whakatauki: 'Otane te marama, he rā rākau.',
    meaningShort: 'Strong energy for forestry and land-based work.',
    recommendedActivities: ['Mahi māra (Gardening/Planting)', 'Harvesting'],
    bracket: 'Whakawātea'
  },
  {
    id: 'day-orongonui',
    nameTeReo: 'Orongonui',
    nameEnglish: 'Waning Crescent',
    energyLevel: 'High',
    whakatauki: 'Orongonui te marama, he rā tupu.',
    meaningShort: 'Everything planted today will have great size and flavor.',
    recommendedActivities: ['Mahi māra (Gardening/Planting)', 'Harvesting'],
    bracket: 'Whakawātea'
  },
  {
    id: 'day-mauri',
    nameTeReo: 'Mauri',
    nameEnglish: 'Waning Crescent',
    energyLevel: 'Medium',
    whakatauki: 'Mauri te marama, he rā ora.',
    meaningShort: 'Life force is steady. Good for closing the cycle.',
    recommendedActivities: ['Toitoi', 'Planning'],
    bracket: 'Whakawātea'
  },
  {
    id: 'day-omutu',
    nameTeReo: 'Omutu',
    nameEnglish: 'Waning Crescent',
    energyLevel: 'Low',
    whakatauki: 'Omutu te marama, he rā mutu.',
    meaningShort: 'Things come to an end. Prepare for the new moon.',
    recommendedActivities: ['Planning', 'Harvesting'],
    bracket: 'Whakawātea'
  },
  {
    id: 'day-mutuwhenua',
    nameTeReo: 'Mutuwhenua',
    nameEnglish: 'Dark Moon',
    energyLevel: 'Low',
    whakatauki: 'Mutuwhenua te marama, he pō tamatea.',
    meaningShort: 'The moon is hidden. A time for rest and total renewal.',
    recommendedActivities: ['Planning'],
    bracket: 'Whakawātea'
  },
  {
    id: 'day-spare-30',
    nameTeReo: 'Hine-te-iwaiwa',
    nameEnglish: 'Transition Phase',
    energyLevel: 'Low',
    whakatauki: 'He rā whakawātea.',
    meaningShort: 'A transitional day between cycles.',
    recommendedActivities: ['Planning', 'Toitoi'],
    bracket: 'Whakawātea'
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
    gregorianStartDate: '2026-05-20',
    year: 2026
  },
  {
    lunarMonthId: 'month-current',
    gregorianStartDate: '2026-04-18', // Start of the current cycle
    year: 2026
  }
];

// 4. Join Table (Complete 30-day mapping for the current month)
export const mockLunarMonthDays = [
  // Current Month: Haratua (April-May 2026)
  { lunarMonthId: 'month-current', dayNumber: 1, lunarDayId: 'day-whiro' },
  { lunarMonthId: 'month-current', dayNumber: 2, lunarDayId: 'day-tirea' },
  { lunarMonthId: 'month-current', dayNumber: 3, lunarDayId: 'day-hoata' },
  { lunarMonthId: 'month-current', dayNumber: 4, lunarDayId: 'day-ouenuku' },
  { lunarMonthId: 'month-current', dayNumber: 5, lunarDayId: 'day-okoro' },
  { lunarMonthId: 'month-current', dayNumber: 6, lunarDayId: 'day-tamatea-ngana' },
  { lunarMonthId: 'month-current', dayNumber: 7, lunarDayId: 'day-tamatea-kai-ariki' },
  { lunarMonthId: 'month-current', dayNumber: 8, lunarDayId: 'day-tamatea-whakapau' },
  { lunarMonthId: 'month-current', dayNumber: 9, lunarDayId: 'day-huna' },
  { lunarMonthId: 'month-current', dayNumber: 10, lunarDayId: 'day-ari' },
  { lunarMonthId: 'month-current', dayNumber: 11, lunarDayId: 'day-hotoke' },
  { lunarMonthId: 'month-current', dayNumber: 12, lunarDayId: 'day-mawharu' },
  { lunarMonthId: 'month-current', dayNumber: 13, lunarDayId: 'day-ohua' },
  { lunarMonthId: 'month-current', dayNumber: 14, lunarDayId: 'day-oturu' },
  { lunarMonthId: 'month-current', dayNumber: 15, lunarDayId: 'day-rakaunui' },
  { lunarMonthId: 'month-current', dayNumber: 16, lunarDayId: 'day-rakaumatohi' },
  { lunarMonthId: 'month-current', dayNumber: 17, lunarDayId: 'day-takirau' },
  { lunarMonthId: 'month-current', dayNumber: 18, lunarDayId: 'day-oike' },
  { lunarMonthId: 'month-current', dayNumber: 19, lunarDayId: 'day-korekore-te-whiawhia' },
  { lunarMonthId: 'month-current', dayNumber: 20, lunarDayId: 'day-korekore-te-rawea' },
  { lunarMonthId: 'month-current', dayNumber: 21, lunarDayId: 'day-korekore-piri-ki-te-tangaroa' },
  { lunarMonthId: 'month-current', dayNumber: 22, lunarDayId: 'day-tangaroa-amua' },
  { lunarMonthId: 'month-current', dayNumber: 23, lunarDayId: 'day-tangaroa-aroto' },
  { lunarMonthId: 'month-current', dayNumber: 24, lunarDayId: 'day-tangaroa-ki-te-oho' },
  { lunarMonthId: 'month-current', dayNumber: 25, lunarDayId: 'day-otane' },
  { lunarMonthId: 'month-current', dayNumber: 26, lunarDayId: 'day-orongonui' },
  { lunarMonthId: 'month-current', dayNumber: 27, lunarDayId: 'day-mauri' },
  { lunarMonthId: 'month-current', dayNumber: 28, lunarDayId: 'day-omutu' },
  { lunarMonthId: 'month-current', dayNumber: 29, lunarDayId: 'day-mutuwhenua' },
  { lunarMonthId: 'month-current', dayNumber: 30, lunarDayId: 'day-spare-30' },

  // Legacy mappings for month-kopu (partial)
  { lunarMonthId: 'month-kopu', dayNumber: 1, lunarDayId: 'day-whiro' },
  { lunarMonthId: 'month-kopu', dayNumber: 2, lunarDayId: 'day-ouenuku' },
  { lunarMonthId: 'month-kopu', dayNumber: 15, lunarDayId: 'day-rakaumatohi' }
];
