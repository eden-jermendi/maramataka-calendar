import React from 'react'
import { maramatakaMonthsById } from '../data/maramataka/lunarMonths'
import { lunarDaysById } from '../data/maramataka/lunarDays'

const Month: React.FC = () => {
  const selectedMonthId = 'kohitatea'
  const month = maramatakaMonthsById[selectedMonthId]

  if (!month) {
    return (
      <div className="MonthPage">
        <h1>Month</h1>
        <p>Month not found: {selectedMonthId}</p>
      </div>
    )
  }

  const legendDays = month.days
    .map((id) => lunarDaysById[id])
    .filter((day): day is NonNullable<typeof day> => Boolean(day))
    .sort((a, b) => a.order - b.order)

  return (
    <div className="MonthPage">
      <h1>{month.nameTr}</h1>

      <ul>
        {month.days.map((lunarDayId, index) => {
          const lunarDay = lunarDaysById[lunarDayId]

          if (!lunarDay) {
            return (
              <li key={`${lunarDayId}-${index}`}>
                Day {index + 1}: Missing lunar day ({lunarDayId})
              </li>
            )
          }

          return (
            <li key={lunarDay.id}>
              Day {index + 1}: {lunarDay.nameTr}
            </li>
          )
        })}
      </ul>

      <h2>Legend</h2>
      <ol>
        {legendDays.map((day) => (
          <li key={day.id}>{day.nameTr}</li>
        ))}
      </ol>
    </div>
  )
}

export default Month
