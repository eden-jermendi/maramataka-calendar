export type MaramatakaMonth = {
  id: string
  nameTr: string
  days: string[] // lunarDay ids
}

export const maramatakaMonths: MaramatakaMonth[] = [
  {
    id: 'kohitatea',
    nameTr: 'Kohi-tātea',
    days: [
      'whiro',
      'tirea',
      'ariroa',
      'rakaumatohi',
      'tangaroa-whakapau',
      'hoata',
      'huna',
    ],
  },
]

export const maramatakaMonthsById: Record<string, MaramatakaMonth> =
  Object.fromEntries(maramatakaMonths.map((month) => [month.id, month]))
