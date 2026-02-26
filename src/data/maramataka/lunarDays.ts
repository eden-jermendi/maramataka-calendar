import type { LunarDay } from '../../domain/maramataka/types'

export const lunarDays: LunarDay[] = [
  {
    id: 'whiro',
    order: 1,
    nameTr: 'Whiro',
    nameEn: 'Reflection and rest',
    energy: 'low',
    activities: [],
    sourceIds: ['maramataka-core'],
    description:
      'A day for reflection, caution, and inward focus. Rest and plan your actions.',
  },
  {
    id: 'tirea',
    order: 2,
    nameTr: 'Tirea',
    nameEn: 'Rising energy tasks',
    energy: 'medium',
    activities: ['gardening', 'fishing'],
    sourceIds: ['maramataka-core'],
    description:
      'Energy rises. Good for practical outdoor tasks and steady progress.',
  },
  {
    id: 'ariroa',
    order: 3,
    nameTr: 'Ariroa',
    nameEn: 'Balanced routine work',
    energy: 'medium',
    activities: ['gardening'],
    sourceIds: ['maramataka-core'],
    description: 'Balanced energy. Ideal for tending gardens or routine work.',
  },
  {
    id: 'rakaumatohi',
    order: 4,
    nameTr: 'Rākaumatohi',
    nameEn: 'High energy action',
    energy: 'high',
    activities: ['fishing', 'crayfishing'],
    sourceIds: ['maramataka-core'],
    description:
      'High energy for active tasks and physical work. Great for achieving goals.',
  },
  {
    id: 'tangaroa-whakapau',
    order: 5,
    nameTr: 'Tangaroa-Whakapau',
    nameEn: 'Peak water gathering',
    energy: 'high',
    activities: ['fishing', 'crayfishing'],
    sourceIds: ['maramataka-core'],
    description:
      'Peak energy in water activities. Good for gathering food and physical effort.',
  },
  {
    id: 'hoata',
    order: 6,
    nameTr: 'Hoata',
    nameEn: 'Steady outdoor work',
    energy: 'medium',
    activities: ['gardening', 'eeling'],
    sourceIds: ['maramataka-core'],
    description: 'Steady energy for outdoor work and connecting with nature.',
  },
  {
    id: 'huna',
    order: 7,
    nameTr: 'Huna',
    nameEn: 'Quiet reflective rest',
    energy: 'low',
    activities: [],
    sourceIds: ['maramataka-core'],
    description:
      'Quiet, reflective day. Suitable for rest, contemplation, and meditation.',
  },
  {
    id: 'takirau',
    order: 8,
    nameTr: 'Takirau',
    nameEn: 'Preparation and learning',
    energy: 'medium',
    activities: ['gardening'],
    sourceIds: ['maramataka-core'],
    description:
      'Moderate energy. Good for preparation, learning, and steady tasks.',
  },
  {
    id: 'mawharu',
    order: 9,
    nameTr: 'Mawharu',
    nameEn: 'Routine outdoor focus',
    energy: 'medium',
    activities: ['fishing'],
    sourceIds: ['maramataka-core'],
    description:
      'Balanced energy. Focus on routine tasks and light outdoor work.',
  },
  {
    id: 'oike',
    order: 10,
    nameTr: 'Oike',
    nameEn: 'Plant tending planning',
    energy: 'medium',
    activities: ['gardening', 'eeling'],
    sourceIds: ['maramataka-core'],
    description:
      'Good day for tending plants, small-scale food gathering, and planning.',
  },
  {
    id: 'otane',
    order: 11,
    nameTr: 'Ōtane',
    nameEn: 'Active social tasks',
    energy: 'high',
    activities: ['gardening', 'fishing'],
    sourceIds: ['maramataka-core'],
    description:
      'High-energy day. Ideal for active tasks and social gatherings.',
  },
  {
    id: 'okoro',
    order: 12,
    nameTr: 'Ōkoro',
    nameEn: 'Steady tending work',
    energy: 'medium',
    activities: ['eeling', 'gardening'],
    sourceIds: ['maramataka-core'],
    description:
      'Moderate energy. Steady outdoor work and tending tasks favored.',
  },
  {
    id: 'ohua',
    order: 13,
    nameTr: 'Ōhūa',
    nameEn: 'Light garden prep',
    energy: 'medium',
    activities: ['gardening', 'fishing'],
    sourceIds: ['maramataka-core'],
    description:
      'Good for light outdoor work, tending gardens, or preparing food.',
  },
  {
    id: 'korekore',
    order: 14,
    nameTr: 'Korekore',
    nameEn: 'Inward self care',
    energy: 'low',
    activities: [],
    sourceIds: ['maramataka-core'],
    description: 'Reflective, quiet day. Focus on inward tasks and self-care.',
  },
  {
    id: 'tuatahi',
    order: 15,
    nameTr: 'Tuatahi',
    nameEn: 'Medium effort tasks',
    energy: 'medium',
    activities: ['gardening', 'eeling'],
    sourceIds: ['maramataka-core'],
    description:
      'Balanced energy for medium-effort tasks and steady outdoor work.',
  },
  {
    id: 'orongonui',
    order: 16,
    nameTr: 'Orongonui',
    nameEn: 'Active food gathering',
    energy: 'high',
    activities: ['fishing', 'crayfishing'],
    sourceIds: ['maramataka-core'],
    description: 'High-energy day. Ideal for active tasks and gathering food.',
  },
  {
    id: 'tamatea-aio',
    order: 17,
    nameTr: 'Tamatea-Āio',
    nameEn: 'Introspective rest planning',
    energy: 'low',
    activities: [],
    sourceIds: ['maramataka-core'],
    description: 'Quiet, introspective day. Rest, reflect, and plan.',
  },
  {
    id: 'atua',
    order: 18,
    nameTr: 'Atua',
    nameEn: 'Creative steady preparation',
    energy: 'medium',
    activities: ['gardening'],
    sourceIds: ['maramataka-core'],
    description:
      'Moderate energy. Good for creative, steady tasks and preparation.',
  },
  {
    id: 'whakahaehae',
    order: 19,
    nameTr: 'Whakahaehae',
    nameEn: 'Energetic productive work',
    energy: 'high',
    activities: ['fishing', 'crayfishing'],
    sourceIds: ['maramataka-core'],
    description: 'Energetic day. Excellent for active and productive work.',
  },
  {
    id: 'rawea',
    order: 20,
    nameTr: 'Rawea',
    nameEn: 'Garden light work',
    energy: 'medium',
    activities: ['gardening', 'eeling'],
    sourceIds: ['maramataka-core'],
    description:
      'Balanced day. Favorable for tending gardens and light outdoor work.',
  },
  {
    id: 'omutu',
    order: 21,
    nameTr: 'Ōmutu',
    nameEn: 'Practical preparation work',
    energy: 'medium',
    activities: ['gardening', 'fishing'],
    sourceIds: ['maramataka-core'],
    description: 'Steady day for practical work and preparation.',
  },
  {
    id: 'tamatea-a-ngana',
    order: 22,
    nameTr: 'Tamatea-ā-Ngana',
    nameEn: 'Learning and planning',
    energy: 'medium',
    activities: ['gardening'],
    sourceIds: ['maramataka-core'],
    description:
      'Moderate energy. Good for learning, planning, and steady work.',
  },
  {
    id: 'turu',
    order: 23,
    nameTr: 'Turu',
    nameEn: 'Calm inner rest',
    energy: 'low',
    activities: [],
    sourceIds: ['maramataka-core'],
    description: 'Reflective, calm day. Focus on rest and inner work.',
  },
  {
    id: 'whakapiri',
    order: 24,
    nameTr: 'Whakapiri',
    nameEn: 'Balanced outdoor tasks',
    energy: 'medium',
    activities: ['gardening', 'eeling'],
    sourceIds: ['maramataka-core'],
    description: 'Balanced energy for medium-effort tasks and outdoor work.',
  },
  {
    id: 'mutuwhenua',
    order: 25,
    nameTr: 'Mutuwhenua',
    nameEn: 'Preparation light activities',
    energy: 'medium',
    activities: ['gardening', 'fishing'],
    sourceIds: ['maramataka-core'],
    description:
      'Steady day. Good for preparation and light outdoor activities.',
  },
]

// ID slug validation only
const ID_SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function validateLunarDayIds(days: LunarDay[]) {
  const seen = new Set<string>()

  for (const day of days) {
    if (!ID_SLUG_RE.test(day.id)) {
      throw new Error(
        `Invalid lunar day id "${day.id}". Use lowercase ASCII slug format.`,
      )
    }

    if (seen.has(day.id)) {
      throw new Error(`Duplicate lunar day id "${day.id}". IDs must be unique.`)
    }

    seen.add(day.id)
  }
}

if (import.meta.env.DEV) {
  validateLunarDayIds(lunarDays)
}

// look up script
export const lunarDaysById: Record<string, LunarDay> = Object.fromEntries(
  lunarDays.map((day) => [day.id, day]),
)
