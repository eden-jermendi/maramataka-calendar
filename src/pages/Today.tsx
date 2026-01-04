import React from 'react' // ADDED: Required for JSX and React.FC
import { lunarDays } from '../data/maramataka/lunarDays'
import { getLunarDayForDate } from '../data/maramataka/maramatakaService' // FIXED: Destructured import
import type { LunarDay } from '../../domain/maramataka/types' // ADDED: Missing type import

const Today: React.FC = () => {
  // ADDED: Define currentDate and cycleStartDate
  const currentDate = new Date() // Get today's Gregorian date
  const cycleStartDate = new Date('2026-01-01T00:00:00Z') // Define your Maramataka cycle start date (adjust as needed)

  const currentLunarDay: LunarDay | undefined = getLunarDayForDate(
    currentDate,
    cycleStartDate,
    lunarDays
  )

  if (!currentLunarDay) {
    return (
      <div className="TodayPage">
        <h1>Loading Maramataka Day...</h1>
        <p>
          Could not determine the current lunar day. Please check the date and
          cycle configuration.
        </p>
      </div>
    )
  }

  return (
    <div className="TodayPage">
      <h2>Today's Maramataka Day:</h2>
      <h1>{currentLunarDay.name}</h1>
      <p>
        <strong>Energy:</strong>{' '}
        {currentLunarDay.energy.charAt(0).toUpperCase() +
          currentLunarDay.energy.slice(1)}
      </p>
      <p>
        <strong>Activities:</strong>{' '}
        {currentLunarDay.activities.length > 0
          ? currentLunarDay.activities
              .map(
                (activity) =>
                  activity.charAt(0).toUpperCase() + activity.slice(1)
              )
              .join(', ')
          : 'No specific activities recommended.'}
      </p>
      <p className="description">{currentLunarDay.description}</p>

      <p className="gregorian-date">
        Gregorian Date: {currentDate.toLocaleDateString('en-NZ')}
      </p>
    </div>
  )
}

export default Today
