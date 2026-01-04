import type { LunarDay } from '../../domain/maramataka/types'

export const getLunarDayForDate = (
  targetDate: Date,
  cycleStartDate: Date,
  allLunarDays: LunarDay[]
): LunarDay | undefined => {
  return allLunarDays[0]
}
