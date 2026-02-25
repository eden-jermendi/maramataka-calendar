export type LunarDay = {
  id: string
  name: string
  nameTeReo: string
  energy: 'low' | 'medium' | 'high'
  activities: Array<'fishing' | 'gardening' | 'eeling' | 'crayfishing'>
  description: string

  // future proofing for About + citations
  sourceIds?: string[]
}
