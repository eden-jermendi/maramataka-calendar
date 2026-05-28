import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { maramatakaService } from '../lib/maramatakaService'
import { reflectionService } from '../lib/reflectionService'
import type { Reflection } from '../domain/maramataka/types'
import ReflectionForm from '../components/maramataka/ReflectionForm'
import ReflectionList from '../components/maramataka/ReflectionList'
import { MissingDataState } from '../components/ui/FallbackStates'

const formatGregorianDate = (date: Date): string => {
  const day = date.getDate();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[date.getMonth()];
  
  // Add ordinal suffix (st, nd, rd, th)
  const suffix = (d: number): string => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };
  
  return `${day}${suffix(day)} ${month}`;
};

const Today: React.FC = () => {
  // Uses the actual system date (May 4, 2026 in this session)
  const today = new Date()
  const currentLunarDay = maramatakaService.getLunarDayForDate(today)

  const [showReflections, setShowReflections] = useState(false)
  const [reflections, setReflections] = useState<Reflection[]>([])

  useEffect(() => {
    if (currentLunarDay) {
      setReflections(reflectionService.getReflectionsForLunarDay(currentLunarDay.id))
    }
  }, [currentLunarDay])

  const refreshReflections = () => {
    if (currentLunarDay) {
      setReflections(reflectionService.getReflectionsForLunarDay(currentLunarDay.id))
    }
  }

  if (!currentLunarDay) {
    return (
      <div className="TodayPage">
        <h2>Today</h2>
        <MissingDataState message="No lunar day data found for today's Gregorian date. Anchors for 2026-2027 may need seeding." />
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
      <div className="text-secondary-text text-sm mb-4 font-bold tracking-wider">
        {formatGregorianDate(today).toUpperCase()}
      </div>

      {currentLunarDay.bracket && (
        <div className="text-secondary-text uppercase tracking-widest text-sm mb-2">{currentLunarDay.bracket}</div>
      )}
      
      <h2 className="text-xl font-medium mb-3 text-secondary-text">Today&apos;s Maramataka Day</h2>
      <h1 className="text-4xl font-bold mb-3">{currentLunarDay.nameTeReo}</h1>
      <p className="text-secondary-text mb-4">{currentLunarDay.nameEnglish}</p>
      
      <div className="flex items-center justify-center gap-2 my-4">
        <span className={`w-4 h-4 rounded-full inline-block ${energyClass[currentLunarDay.energyLevel]}`}></span>
        <span className="font-bold text-sm tracking-wide">{currentLunarDay.energyLevel.toUpperCase()} ENERGY</span>
      </div>

      <div className="text-3xl my-6 flex justify-center gap-4">
        {currentLunarDay.recommendedActivities.map(act => (
          <span key={act} title={act}>
            {activityEmoji[act] || '✨'}
          </span>
        ))}
      </div>

      <p className="italic text-text-color text-lg my-8">
        &quot;{currentLunarDay.whakatauki || 'No whakataukī available for today.'}&quot;
      </p>

      <div className="text-left bg-white/5 p-6 rounded-lg mb-8">
        <p className="mb-2">
          <strong className="font-bold">Recommended:</strong>{' '}
          {currentLunarDay.recommendedActivities.join(', ')}
        </p>
        <p className="leading-relaxed">{currentLunarDay.meaningShort}</p>
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
              Prompt: {currentLunarDay.meaningShort}
            </p>
            <ReflectionForm lunarDayId={currentLunarDay.id} onSave={refreshReflections} />
            <ReflectionList reflections={reflections} />
          </div>
        )}
      </div>

      <Link to="/months" className="inline-block mt-8 py-3 px-6 bg-accent-color text-white no-underline rounded-lg font-bold transition-colors hover:bg-[#556b8d]">
        View Month Overview
      </Link>
    </div>
  )
}

export default Today
