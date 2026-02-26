import React from 'react'
import { getLunarDaySafe } from '../domain/maramataka/selectors'

const Today: React.FC = () => {
  const monthId = 'kohitatea'
  const dayNumber = 1

  const result = getLunarDaySafe(monthId, dayNumber)

  if (!result.ok) {
    return (
      <div className="TodayPage">
        <h1>Today</h1>
        <p>Unable to load lunar day: {result.error}</p>
      </div>
    )
  }

  const currentLunarDay = result.lunarDay

  return (
    <div className="TodayPage">
      <h2>Today&apos;s Maramataka Day:</h2>
      <h1>{currentLunarDay.nameTr}</h1>
      <p>
        <strong>Energy:</strong> {currentLunarDay.energy}
      </p>
      <p>
        <strong>Activities:</strong>{' '}
        {currentLunarDay.activities.length > 0
          ? currentLunarDay.activities.join(', ')
          : 'No specific activities recommended.'}
      </p>
      <p className="description">{currentLunarDay.description}</p>
    </div>
  )
}

export default Today
