import React from 'react'
import { maramatakaService } from '../lib/maramatakaService'

const Today: React.FC = () => {
  // Using May 20, 2026 to match our mock anchor data for testing
  const testDate = new Date('2026-05-20')
  const currentLunarDay = maramatakaService.getLunarDayForDate(testDate)

  if (!currentLunarDay) {
    return (
      <div className="TodayPage">
        <h1>Today</h1>
        <p>No lunar day data found for this date.</p>
      </div>
    )
  }

  return (
    <div className="TodayPage">
      <h2>Today&apos;s Maramataka Day:</h2>
      <h1>{currentLunarDay.nameTeReo} ({currentLunarDay.nameEnglish})</h1>
      <p>
        <strong>Energy:</strong> {currentLunarDay.energyLevel}
      </p>
      <p>
        <strong>Whakataukī:</strong> <em>{currentLunarDay.whakatauki || 'None'}</em>
      </p>
      <p>
        <strong>Activities:</strong>{' '}
        {currentLunarDay.recommendedActivities.length > 0
          ? currentLunarDay.recommendedActivities.join(', ')
          : 'No specific activities recommended.'}
      </p>
      <p className="description">{currentLunarDay.meaningShort}</p>
    </div>
  )
}

export default Today
