export type LunarDay = {
  id: string
  nameEn: string
  nameTr: string
  order: number
  energy: 'low' | 'medium' | 'high'
  activities: Array<'fishing' | 'gardening' | 'eeling' | 'crayfishing'>
  description: string

  // future proofing for About + citations
  sourceIds?: string[]
}

export type Reflection = {
  id: string
  lunarDayId: string
  gregorianDateTime: string // ISO string
  observationTeTaiao: string
  personalEnergyLevel: string
  reflectionText: string
}
