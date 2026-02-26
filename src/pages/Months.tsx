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
    </div>
  )
}

export default Month
