import React from 'react'
import { maramatakaService } from '../lib/maramatakaService'

const Month: React.FC = () => {
  const today = new Date()
  const overview = maramatakaService.getLunarMonthForDate(today)

  if (!overview) {
    return (
      <div className="MonthPage">
        <h2>Month Overview</h2>
        <p>No lunar month data found for this period.</p>
      </div>
    )
  }

  const { month, days } = overview

  return (
    <div className="MonthPage">
      <h2>{month.nameTeReo} ({month.nameEnglish})</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {days.map(({ dayNumber, lunarDay }) => {
          if (!lunarDay) {
            return (
              <li key={dayNumber} style={{ marginBottom: '0.5rem', color: '#666' }}>
                Day {dayNumber}: Data not available
              </li>
            )
          }

          const energyColors: Record<string, string> = {
            High: '#d4edda',
            Medium: '#fff3cd',
            Low: '#f8d7da',
          }

          return (
            <li key={dayNumber} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <strong>Day {dayNumber}: {lunarDay.nameTeReo}</strong>
                <span style={{ 
                  fontSize: '0.8rem', 
                  padding: '2px 8px', 
                  borderRadius: '12px', 
                  backgroundColor: energyColors[lunarDay.energyLevel] || '#eee',
                  border: '1px solid rgba(0,0,0,0.1)'
                }}>
                  {lunarDay.energyLevel} Energy
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Month
