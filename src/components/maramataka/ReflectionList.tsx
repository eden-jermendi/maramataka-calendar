import React from 'react'
import type { Reflection } from '../../domain/maramataka/types'

interface ReflectionListProps {
  reflections: Reflection[]
}

const ReflectionList: React.FC<ReflectionListProps> = ({ reflections }) => {
  if (reflections.length === 0) {
    return (
      <p style={{ fontStyle: 'italic', color: 'var(--secondary-text)', marginTop: '2rem' }}>
        No reflections recorded for this phase yet.
      </p>
    )
  }

  return (
    <div style={{ marginTop: '2rem', textAlign: 'left' }}>
      <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        Past Reflections for this Phase
      </h3>
      {reflections.map((r) => (
        <div 
          key={r.id} 
          style={{ 
            marginBottom: '1.5rem', 
            padding: '1rem', 
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '8px', 
            borderLeft: '4px solid var(--accent-color)' 
          }}
        >
          <div style={{ fontSize: '0.8rem', color: 'var(--secondary-text)', marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>{new Date(r.gregorianDateTime).toLocaleDateString()}</span>
            <span>{new Date(r.gregorianDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
          
          {r.observationTeTaiao && (
            <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--secondary-text)' }}>Te Taiao:</span> {r.observationTeTaiao}
            </div>
          )}
          
          {r.personalEnergyLevel && (
            <div style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--secondary-text)' }}>Energy:</span> {r.personalEnergyLevel}
            </div>
          )}
          
          <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
            {r.reflectionText}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ReflectionList
