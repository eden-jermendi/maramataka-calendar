export type Source = {
  id: string
  title: string
  url?: string
}

export const sources: Source[] = [
  { id: 'maramataka-core', title: 'Maramataka Core Notes' },
  {
    id: 'teara-maramataka',
    title: 'Te Ara: Maramataka',
    url: 'https://teara.govt.nz/en/maramataka-the-lunar-calendar',
  },
  {
    id: 'matariki-twoa',
    title: 'Nā Hina Maramataka',
    url: 'https://matariki.twoa.ac.nz/wp-content/uploads/2025/05/Maramataka_2025_Digital-Final.pdf',
  },
]

export const sourcesById: Record<string, Source> = Object.fromEntries(
  sources.map((source) => [source.id, source]),
)
