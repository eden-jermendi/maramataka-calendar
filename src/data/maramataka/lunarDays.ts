export type LunarDay = {
  id: string
  name: string // Te Reo name
  energy: 'low' | 'medium' | 'high'
  activities: Array<'fishing' | 'gardening' | 'eeling' | 'crayfishing'>
  description: string
}

export const lunarDays: LunarDay[] = [
  {
    id: 'whiro',
    name: 'Whiro',
    energy: 'low',
    activities: [],
    description:
      'A day for reflection, caution, and inward focus. Rest and plan your actions.',
  },
  {
    id: 'tirea',
    name: 'Tirea',
    energy: 'medium',
    activities: ['gardening', 'fishing'],
    description:
      'Energy rises. Good for practical outdoor tasks and steady progress.',
  },
  {
    id: 'ariroa',
    name: 'Ariroa',
    energy: 'medium',
    activities: ['gardening'],
    description: 'Balanced energy. Ideal for tending gardens or routine work.',
  },
  {
    id: 'rakaumatohi',
    name: 'Rākaumatohi',
    energy: 'high',
    activities: ['fishing', 'crayfishing'],
    description:
      'High energy for active tasks and physical work. Great for achieving goals.',
  },
  {
    id: 'tangaroa-whakapau',
    name: 'Tangaroa‑Whakapau',
    energy: 'high',
    activities: ['fishing', 'crayfishing'],
    description:
      'Peak energy in water activities. Good for gathering food and physical effort.',
  },
  {
    id: 'hoata',
    name: 'Hoata',
    energy: 'medium',
    activities: ['gardening', 'eeling'],
    description: 'Steady energy for outdoor work and connecting with nature.',
  },
  {
    id: 'huna',
    name: 'Huna',
    energy: 'low',
    activities: [],
    description:
      'Quiet, reflective day. Suitable for rest, contemplation, and meditation.',
  },
  {
    id: 'takirau',
    name: 'Takirau',
    energy: 'medium',
    activities: ['gardening'],
    description:
      'Moderate energy. Good for preparation, learning, and steady tasks.',
  },
  {
    id: 'mawharu',
    name: 'Mawharu',
    energy: 'medium',
    activities: ['fishing'],
    description:
      'Balanced energy. Focus on routine tasks and light outdoor work.',
  },
  {
    id: 'oike',
    name: 'Oike',
    energy: 'medium',
    activities: ['gardening', 'eeling'],
    description:
      'Good day for tending plants, small-scale food gathering, and planning.',
  },
  {
    id: 'otane',
    name: 'Ōtane',
    energy: 'high',
    activities: ['gardening', 'fishing'],
    description:
      'High-energy day. Ideal for active tasks and social gatherings.',
  },
  {
    id: 'okoro',
    name: 'Ōkoro',
    energy: 'medium',
    activities: ['eeling', 'gardening'],
    description:
      'Moderate energy. Steady outdoor work and tending tasks favored.',
  },
  {
    id: 'ohua',
    name: 'Ōhūa',
    energy: 'medium',
    activities: ['gardening', 'fishing'],
    description:
      'Good for light outdoor work, tending gardens, or preparing food.',
  },
  {
    id: 'korekore',
    name: 'Korekore',
    energy: 'low',
    activities: [],
    description: 'Reflective, quiet day. Focus on inward tasks and self-care.',
  },
  {
    id: 'tuatahi',
    name: 'Tuatahi',
    energy: 'medium',
    activities: ['gardening', 'eeling'],
    description:
      'Balanced energy for medium-effort tasks and steady outdoor work.',
  },
  {
    id: 'orongonui',
    name: 'Orongonui',
    energy: 'high',
    activities: ['fishing', 'crayfishing'],
    description: 'High-energy day. Ideal for active tasks and gathering food.',
  },
  {
    id: 'tamatea-aio',
    name: 'Tamatea‑Āio',
    energy: 'low',
    activities: [],
    description: 'Quiet, introspective day. Rest, reflect, and plan.',
  },
  {
    id: 'atua',
    name: 'Atua',
    energy: 'medium',
    activities: ['gardening'],
    description:
      'Moderate energy. Good for creative, steady tasks and preparation.',
  },
  {
    id: 'whakahaehae',
    name: 'Whakahaehae',
    energy: 'high',
    activities: ['fishing', 'crayfishing'],
    description: 'Energetic day. Excellent for active and productive work.',
  },
  {
    id: 'rawea',
    name: 'Rawea',
    energy: 'medium',
    activities: ['gardening', 'eeling'],
    description:
      'Balanced day. Favorable for tending gardens and light outdoor work.',
  },
  {
    id: 'omutu',
    name: 'Ōmutu',
    energy: 'medium',
    activities: ['gardening', 'fishing'],
    description: 'Steady day for practical work and preparation.',
  },
  {
    id: 'tamatea-a-ngana',
    name: 'Tamatea‑ā‑Ngana',
    energy: 'medium',
    activities: ['gardening'],
    description:
      'Moderate energy. Good for learning, planning, and steady work.',
  },
  {
    id: 'turu',
    name: 'Turu',
    energy: 'low',
    activities: [],
    description: 'Reflective, calm day. Focus on rest and inner work.',
  },
  {
    id: 'whakapiri',
    name: 'Whakapiri',
    energy: 'medium',
    activities: ['gardening', 'eeling'],
    description: 'Balanced energy for medium-effort tasks and outdoor work.',
  },
  {
    id: 'mutuwhenua',
    name: 'Mutuwhenua',
    energy: 'medium',
    activities: ['gardening', 'fishing'],
    description:
      'Steady day. Good for preparation and light outdoor activities.',
  },
]
