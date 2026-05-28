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
  {
    id: 'wawata-elder',
    title: 'Wawata: Life lessons from the Māori lunar calendar - Dr Hinemoa Elder',
  },
  {
    id: 'tewaioratanga',
    title: 'Living by the Moon Te Maramataka A Te Whānau-a-Apanui by Wiremu Tawhai, (2013), Huia Publishers (Adapted via TEWAIORATANGA.NZ)',
    url: 'https://tewaioratanga.nz'
  }
]

export const sourcesById: Record<string, Source> = Object.fromEntries(
  sources.map((source) => [source.id, source]),
)
