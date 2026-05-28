import React, { useState, useEffect } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { maramatakaService } from '../lib/maramatakaService'
import { reflectionService } from '../lib/reflectionService'
import type { Reflection } from '../domain/maramataka/types'
import ReflectionForm from '../components/maramataka/ReflectionForm'
import ReflectionList from '../components/maramataka/ReflectionList'

const DayView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [searchParams] = useSearchParams()
  const dateStr = searchParams.get('date')
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
    High: 'border-2 border-energy-high-border bg-transparent',
    Medium: 'bg-energy-medium-bg',
    Low: 'bg-energy-low-bg',
  }

  return (
    <div className="text-center">
      {dateStr && (
        <div className="text-secondary-text text-sm mb-4 font-bold tracking-wider">
          {dateStr.toUpperCase()}
        </div>
      )}

      {day.bracket && (
        <div className="text-secondary-text uppercase tracking-widest text-sm mb-2">{day.bracket}</div>
      )}
      
      <h2 className="text-xl font-medium mb-3 text-secondary-text">Lunar Day Details</h2>
      <h1 className="text-4xl font-bold mb-3">{day.nameTeReo}</h1>
      <p className="text-secondary-text mb-4">{day.nameEnglish}</p>
      
      <div className="flex items-center justify-center gap-2 my-4">
        <span className={`w-4 h-4 rounded-full inline-block ${energyClass[day.energyLevel]}`}></span>
        <span className="font-bold text-sm tracking-wide">{day.energyLevel.toUpperCase()} ENERGY</span>
      </div>

      <div className="text-3xl my-6 flex justify-center gap-4">
        {day.recommendedActivities.map(act => (
          <span key={act} title={act}>
            {activityEmoji[act] || '✨'}
          </span>
        ))}
      </div>

      <p className="italic text-text-color text-lg my-8">
        &quot;{day.whakatauki || 'No whakataukī available for this day.'}&quot;
      </p>

      <div className="text-left bg-white/5 p-6 rounded-lg mb-8">
        <p className="mb-2">
          <strong className="font-bold">Recommended:</strong>{' '}
          {day.recommendedActivities.join(', ')}
        </p>
        <p className="leading-relaxed">{day.meaningShort}</p>
      </div>

      <div className="my-8">
        <button 
          onClick={() => setShowReflections(!showReflections)}
          className="w-full bg-transparent border border-accent-color text-text-color py-3 px-6 rounded-lg cursor-pointer text-base font-bold transition-all hover:bg-white/5"
        >
          {showReflections ? '🙈 Hide My Reflections' : '👁️ Show My Reflections (Private)'}
        </button>

        {showReflections && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-left mb-2">New Reflection</h3>
            <p className="text-left text-secondary-text text-sm mb-4">
              Prompt: {day.meaningShort}
            </p>
            <ReflectionForm lunarDayId={day.id} onSave={refreshReflections} />
            <ReflectionList reflections={reflections} />
          </div>
        )}
      </div>

      <div className="flex gap-4 justify-center">
        <Link to="/months" className="inline-block mt-8 py-3 px-6 bg-accent-color text-white no-underline rounded-lg font-bold transition-colors hover:bg-[#556b8d]">
          Back to Months
        </Link>
        <Link to="/" className="inline-block mt-8 py-3 px-6 bg-transparent border border-accent-color text-text-color no-underline rounded-lg font-bold transition-colors hover:bg-white/5">
          Back to Today
        </Link>
      </div>
    </div>
  )
}

export default DayView
