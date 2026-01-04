import type { LunarDay } from '../../domain/maramataka/types'

export const getLunarDayForDate = (
  targetDate: Date,
  cycleStartDate: Date,
  allLunarDays: LunarDay[]
): LunarDay | undefined => {
  const timeDiff = targetDate.getTime() - cycleStartDate.getTime()
  const daysSinceCycleStart = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

  if (daysSinceCycleStart < 0) {
    const cycleLength = allLunarDays.length
    const offset = daysSinceCycleStart % cycleLength
    const lunarDayIndex = (offset + cycleLength) % cycleLength // Ensures positive index
    return allLunarDays[lunarDayIndex]
  }

  const lunarDayIndex = daysSinceCycleStart % allLunarDays.length

  return allLunarDays[lunarDayIndex]
}
