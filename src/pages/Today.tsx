import React from 'react'
import { maramatakaService } from '../lib/maramatakaService'

const Today: React.FC = () => {
  // Uses the actual system date (May 4, 2026 in this session)
  const today = new Date()
  const currentLunarDay = maramatakaService.getLunarDayForDate(today)

  if (!currentLunarDay) {
    return (
      <div className="TodayPage">
        <h1>Today</h1>
        <p>No lunar day data found for this date.</p>
      </div>
    )
  }

  const energyColors: Record<string, string> = {
    High: '#d4edda',
    Medium: '#fff3cd',
    Low: '#f8d7da',
  }

  return (
    <div className="TodayPage">
      <h2>Today&apos;s Maramataka Day:</h2>
      <h1>{currentLunarDay.nameTeReo} ({currentLunarDay.nameEnglish})</h1>
      
      <div style={{ 
        display: 'inline-block', 
        padding: '4px 12px', 
        borderRadius: '16px', 
        backgroundColor: energyColors[currentLunarDay.energyLevel] || '#eee',
        marginBottom: '1rem',
        fontWeight: 'bold',
        border: '1px solid rgba(0,0,0,0.1)'
      }}>
        {currentLunarDay.energyLevel} Energy
      </div>

      <p style={{ fontStyle: 'italic', color: '#555', fontSize: '1.1rem' }}>
        &quot;{currentLunarDay.whakatauki || 'No whakataukī available for today.'}&quot;
      </p>

      <p>
        <strong>Recommended Activities:</strong>{' '}
        {currentLunarDay.recommendedActivities.length > 0
          ? currentLunarDay.recommendedActivities.join(', ')
          : 'No specific activities recommended.'}
      </p>
      <p className="description" style={{ lineHeight: '1.6' }}>{currentLunarDay.meaningShort}</p>
    </div>
  )
}

export default Today
