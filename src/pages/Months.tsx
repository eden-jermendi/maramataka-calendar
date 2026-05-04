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
  const currentDayInfo = maramatakaService.getLunarDayForDate(today)

  const energyClass: Record<string, string> = {
    High: 'energy-high',
    Medium: 'energy-medium',
    Low: 'energy-low',
  }

  return (
    <div className="MonthPage">
      <h2>{month.nameTeReo}</h2>
      <p style={{ color: 'var(--secondary-text)', marginTop: '-1rem' }}>{month.nameEnglish}</p>

      <div className="month-grid">
        {days.map(({ dayNumber, lunarDay }) => {
          const isToday = lunarDay && currentDayInfo && lunarDay.id === currentDayInfo.id;
          
          return (
            <div 
              key={dayNumber} 
              className={`grid-day ${lunarDay ? 'has-data' : ''} ${isToday ? 'today' : ''}`}
            >
              <span className="day-number">{dayNumber}</span>
              {lunarDay && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <span className={`energy-indicator ${energyClass[lunarDay.energyLevel]}`}></span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 'bold', textAlign: 'center' }}>
                    {lunarDay.nameTeReo}
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <section className="legend">
        <h3>Legend</h3>
        <div className="legend-item">
          <span className="energy-indicator energy-high"></span>
          <span><strong>High Energy:</strong> Abundant, productive time.</span>
        </div>
        <div className="legend-item">
          <span className="energy-indicator energy-medium"></span>
          <span><strong>Medium Energy:</strong> Stability, moderate activity.</span>
        </div>
        <div className="legend-item">
          <span className="energy-indicator energy-low"></span>
          <span><strong>Low Energy:</strong> Introspection, renewal, planting.</span>
        </div>
        <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--secondary-text)' }}>
          * High energy is indicated by an outlined circle, Medium by purple, and Low by solid white.
        </div>
      </section>
    </div>
  )
}

export default Month
