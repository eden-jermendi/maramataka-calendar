import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { maramatakaService } from '../lib/maramatakaService'
import { reflectionService } from '../lib/reflectionService'
import type { Reflection } from '../domain/maramataka/types'
import ReflectionForm from '../components/maramataka/ReflectionForm'
import ReflectionList from '../components/maramataka/ReflectionList'

const DayView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const day = id ? maramatakaService.getLunarDayById(id) : null
  
  const [showReflections, setShowReflections] = useState(false)
  const [reflections, setReflections] = useState<Reflection[]>([])

  useEffect(() => {
    if (day) {
      setReflections(reflectionService.getReflectionsForLunarDay(day.id))
    }
  }, [day])

  const refreshReflections = () => {
    if (day) {
      setReflections(reflectionService.getReflectionsForLunarDay(day.id))
    }
  }

  if (!day) {
    return (
      <div className="DayPage">
        <h1>Not Found</h1>
        <p>Could not find details for this lunar day.</p>
        <Link to="/months" className="cta-link">Back to Month Overview</Link>
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
      {day.bracket && (
        <div className="bracket-tag">{day.bracket}</div>
      )}
      
      <h2>Lunar Day Details</h2>
      <h1>{day.nameTeReo}</h1>
      <p style={{ color: 'var(--secondary-text)', marginTop: '-1rem' }}>{day.nameEnglish}</p>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '1rem 0' }}>
        <span className={`energy-indicator ${energyClass[day.energyLevel]}`}></span>
        <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{day.energyLevel.toUpperCase()} ENERGY</span>
      </div>

      <div className="activity-icons">
        {day.recommendedActivities.map(act => (
          <span key={act} title={act}>
            {activityEmoji[act] || '✨'}
          </span>
        ))}
      </div>

      <p style={{ fontStyle: 'italic', color: 'var(--text-color)', fontSize: '1.2rem', margin: '2rem 0' }}>
        &quot;{day.whakatauki || 'No whakataukī available for this day.'}&quot;
      </p>

      <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <p>
          <strong>Recommended:</strong>{' '}
          {day.recommendedActivities.join(', ')}
        </p>
        <p className="description" style={{ lineHeight: '1.6' }}>{day.meaningShort}</p>
      </div>

      <div style={{ margin: '2rem 0' }}>
        <button 
          onClick={() => setShowReflections(!showReflections)}
          style={{ 
            background: 'none', 
            border: '1px solid var(--accent-color)', 
            color: 'var(--text-color)', 
            padding: '0.8rem 1.5rem', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            width: '100%'
          }}
        >
          {showReflections ? '🙈 Hide My Reflections' : '👁️ Show My Reflections (Private)'}
        </button>

        {showReflections && (
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ textAlign: 'left' }}>New Reflection</h3>
            <p style={{ textAlign: 'left', color: 'var(--secondary-text)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Prompt: {day.meaningShort}
            </p>
            <ReflectionForm lunarDayId={day.id} onSave={refreshReflections} />
            <ReflectionList reflections={reflections} />
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/months" className="cta-link">Back to Month</Link>
        <Link to="/" className="cta-link" style={{ background: 'transparent', border: '1px solid var(--accent-color)' }}>
          Back to Today
        </Link>
      </div>
    </div>
  )
}

export default DayView
