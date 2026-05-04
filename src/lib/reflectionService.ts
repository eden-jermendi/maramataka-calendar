import { Reflection } from '../domain/maramataka/types'

const STORAGE_KEY = 'hina_reflections'

export const reflectionService = {
  /**
   * Saves a new reflection to localStorage.
   */
  saveReflection(reflection: Omit<Reflection, 'id'>): Reflection {
    const reflections = this.getAllReflections()
    const newReflection: Reflection = {
      ...reflection,
      id: crypto.randomUUID()
    }
    
    reflections.push(newReflection)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reflections))
    return newReflection
  },

  /**
   * Retrieves all reflections from localStorage.
   */
  getAllReflections(): Reflection[] {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    try {
      return JSON.parse(stored)
    } catch (e) {
      console.error('Failed to parse reflections from localStorage', e)
      return []
    }
  },

  /**
   * Retrieves reflections specifically for a given lunar day slug.
   * This supports cyclical pattern tracking.
   */
  getReflectionsForLunarDay(lunarDayId: string): Reflection[] {
    const all = this.getAllReflections()
    // Sort by date descending (newest first)
    return all
      .filter(r => r.lunarDayId === lunarDayId)
      .sort((a, b) => new Date(b.gregorianDateTime).getTime() - new Date(a.gregorianDateTime).getTime())
  }
}
