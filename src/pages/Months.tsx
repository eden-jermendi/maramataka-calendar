import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { maramatakaService } from '../lib/maramatakaService'
import { MissingDataState } from '../components/ui/FallbackStates'

const Month: React.FC = () => {
  const [viewedDate, setViewedDate] = useState(new Date())
  
  const today = new Date()
  const overview = maramatakaService.getLunarMonthForDate(viewedDate)

  if (!overview) {
    return (
      <div className="MonthPage">
        <h2>Month Overview</h2>
        <MissingDataState message="No lunar month data found for this period. Seeding data for 2026-2027 may be required." />
        <button onClick={() => setViewedDate(new Date())} className="cta-link" style={{ border: 'none', cursor: 'pointer' }}>
          Back to Current Month
        </button>
      </div>
    )
  }

  const { month, days, gregorianSpan } = overview
  const currentDayInfo = maramatakaService.getLunarDayForDate(today)

  const handlePrev = () => {
    const prev = maramatakaService.getPreviousMonthAnchor(viewedDate)
    if (prev) setViewedDate(prev)
  }

  const handleNext = () => {
    const next = maramatakaService.getNextMonthAnchor(viewedDate)
    if (next) setViewedDate(next)
  }

  const energyClass: Record<string, string> = {
    High: 'energy-high',
    Medium: 'energy-medium',
    Low: 'energy-low',
  }

  return (
    <div className="MonthPage">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button 
          onClick={handlePrev} 
          disabled={!maramatakaService.getPreviousMonthAnchor(viewedDate)}
          style={{ background: 'none', border: '1px solid var(--accent-color)', color: 'var(--text-color)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', opacity: maramatakaService.getPreviousMonthAnchor(viewedDate) ? 1 : 0.3 }}
        >
          ← Prev
        </button>
        
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ margin: 0 }}>{month.nameTeReo}</h2>
          <p style={{ color: 'var(--secondary-text)', margin: '0 0 2px 0', fontSize: '0.95rem' }}>{month.nameEnglish}</p>
          <div style={{ fontSize: '0.8rem', color: 'var(--secondary-text)', opacity: 0.9 }}>{gregorianSpan}</div>
        </div>

        <button 
          onClick={handleNext}
          disabled={!maramatakaService.getNextMonthAnchor(viewedDate)}
          style={{ background: 'none', border: '1px solid var(--accent-color)', color: 'var(--text-color)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', opacity: maramatakaService.getNextMonthAnchor(viewedDate) ? 1 : 0.3 }}
        >
          Next →
        </button>
      </div>

      <div className="month-grid">
        {days.map(({ dayNumber, lunarDay, gregorianDateStr }) => {
          const isToday = lunarDay && currentDayInfo && lunarDay.id === currentDayInfo.id;
          
          return (
            <Link 
              key={dayNumber} 
              to={lunarDay ? `/day/${lunarDay.id}?date=${encodeURIComponent(gregorianDateStr)}` : '#'}
              className={`grid-day ${lunarDay ? 'has-data' : ''} ${isToday ? 'today' : ''}`}
              style={{ textDecoration: 'none', color: 'inherit', cursor: lunarDay ? 'pointer' : 'default', padding: '8px' }}
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
            </Link>
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
