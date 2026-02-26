import type { LunarDay } from './types'
import { lunarDaysById } from '../../data/maramataka/lunarDays'
import { maramatakaMonthsById } from '../../data/maramataka/lunarMonths'

type LookupOk = { ok: true; lunarDay: LunarDay }
type LookupErr = {
  ok: false
  error:
    | 'INVALID_MONTH_ID'
    | 'INVALID_DAY_NUMBER'
    | 'MISSING_LUNAR_DAY_ID'
    | 'MISSING_LUNAR_DAY_DATA'
}
export type LunarDayLookupResult = LookupOk | LookupErr

export function getLunarDaySafe(
  monthId: string,
  dayNumber: number,
): LunarDayLookupResult {
  const month = maramatakaMonthsById[monthId]
  if (!month) return { ok: false, error: 'INVALID_MONTH_ID' }

  if (
    !Number.isInteger(dayNumber) ||
    dayNumber < 1 ||
    dayNumber > month.days.length
  ) {
    return { ok: false, error: 'INVALID_DAY_NUMBER' }
  }

  const lunarDayId = month.days[dayNumber - 1]

  if (!lunarDayId) {
    return { ok: false, error: 'MISSING_LUNAR_DAY_ID' }
  }

  const lunarDay = lunarDaysById[lunarDayId]
  if (!lunarDay) {
    return { ok: false, error: 'MISSING_LUNAR_DAY_DATA' }
  }

  return { ok: true, lunarDay }
}
