import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to="/months" className="cta-link">View Month Overview</Link>
      </div>
    )
  }

  const activityEmoji: Record<string, string> = {
    'Hī ika (Fishing)': '🎣',
    'Mahi māra (Gardening/Planting)': '🌱',
    'Toitoi': '♾️',
    'Harvesting': '🧺',
    'Planning': '📝'
  }

  const energyClass: Record<string, string> = {
    High: 'energy-high',
    Medium: 'energy-medium',
    Low: 'energy-low',
  }

  return (
    <div className="TodayPage">
      {currentLunarDay.bracket && (
        <div className="bracket-tag">{currentLunarDay.bracket}</div>
      )}
      
      <h2>Today&apos;s Maramataka Day</h2>
      <h1>{currentLunarDay.nameTeReo}</h1>
      <p style={{ color: 'var(--secondary-text)', marginTop: '-1rem' }}>{currentLunarDay.nameEnglish}</p>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '1rem 0' }}>
        <span className={`energy-indicator ${energyClass[currentLunarDay.energyLevel]}`}></span>
        <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{currentLunarDay.energyLevel.toUpperCase()} ENERGY</span>
      </div>

      <div className="activity-icons">
        {currentLunarDay.recommendedActivities.map(act => (
          <span key={act} title={act}>
            {activityEmoji[act] || '✨'}
          </span>
        ))}
      </div>

      <p style={{ fontStyle: 'italic', color: 'var(--text-color)', fontSize: '1.2rem', margin: '2rem 0' }}>
        &quot;{currentLunarDay.whakatauki || 'No whakataukī available for today.'}&quot;
      </p>

      <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px' }}>
        <p>
          <strong>Recommended:</strong>{' '}
          {currentLunarDay.recommendedActivities.join(', ')}
        </p>
        <p className="description" style={{ lineHeight: '1.6' }}>{currentLunarDay.meaningShort}</p>
      </div>

      <Link to="/months" className="cta-link">View Month Overview</Link>
    </div>
  )
}

export default Today
