export type LunarDay = {
  id: string
  nameEn: string
  nameTr: string
  energy: 'low' | 'medium' | 'high'
  activities: Array<'fishing' | 'gardening' | 'eeling' | 'crayfishing'>
  description: string

  // future proofing for About + citations
  sourceIds?: string[]
}
