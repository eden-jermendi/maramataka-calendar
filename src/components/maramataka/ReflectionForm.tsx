import React, { useState } from 'react'
import { reflectionService } from '../../lib/reflectionService'

interface ReflectionFormProps {
  lunarDayId: string
  onSave: () => void
}

const ReflectionForm: React.FC<ReflectionFormProps> = ({ lunarDayId, onSave }) => {
  const [teTaiao, setTeTaiao] = useState('')
  const [energy, setEnergy] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    reflectionService.saveReflection({
      lunarDayId,
      gregorianDateTime: new Date().toISOString(),
      observationTeTaiao: teTaiao,
      personalEnergyLevel: energy,
      reflectionText: text
    })

    setTeTaiao('')
    setEnergy('')
    setText('')
    onSave()
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Observations in Nature (Te Taiao):</label>
        <input 
          type="text" 
          value={teTaiao} 
          onChange={(e) => setTeTaiao(e.target.value)}
          placeholder="e.g. Birds singing, clear sky..."
          style={{ 
            width: '100%', 
            padding: '0.8rem', 
            borderRadius: '4px', 
            border: '1px solid var(--border-color)', 
            background: 'rgba(255,255,255,0.05)', 
            color: 'white',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Personal Energy Level:</label>
        <input 
          type="text" 
          value={energy} 
          onChange={(e) => setEnergy(e.target.value)}
          placeholder="How are you feeling today?"
          style={{ 
            width: '100%', 
            padding: '0.8rem', 
            borderRadius: '4px', 
            border: '1px solid var(--border-color)', 
            background: 'rgba(255,255,255,0.05)', 
            color: 'white',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Journal Entry:</label>
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your reflection here..."
          rows={4}
          style={{ 
            width: '100%', 
            padding: '0.8rem', 
            borderRadius: '4px', 
            border: '1px solid var(--border-color)', 
            background: 'rgba(255,255,255,0.05)', 
            color: 'white',
            boxSizing: 'border-box',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <button type="submit" className="cta-link" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>Save Reflection</button>
    </form>
  )
}

export default ReflectionForm
