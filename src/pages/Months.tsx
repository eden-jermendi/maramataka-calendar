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
    High: 'border-2 border-energy-high-border bg-transparent',
    Medium: 'bg-energy-medium-bg',
    Low: 'bg-energy-low-bg',
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={handlePrev} 
          disabled={!maramatakaService.getPreviousMonthAnchor(viewedDate)}
          style={{ background: 'none', border: '1px solid var(--accent-color)', color: 'var(--text-color)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', opacity: maramatakaService.getPreviousMonthAnchor(viewedDate) ? 1 : 0.3 }}
        >
          ← Prev
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold m-0">{month.nameTeReo}</h2>
          <p className="text-secondary-text m-0 mb-[2px] text-[0.95rem]">{month.nameEnglish}</p>
          <div className="text-xs text-secondary-text opacity-90">{gregorianSpan}</div>
        </div>

        <button 
          onClick={handleNext}
          disabled={!maramatakaService.getNextMonthAnchor(viewedDate)}
          style={{ background: 'none', border: '1px solid var(--accent-color)', color: 'var(--text-color)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', opacity: maramatakaService.getNextMonthAnchor(viewedDate) ? 1 : 0.3 }}
        >
          Next →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2.5 mt-8">
        {days.map(({ dayNumber, lunarDay, gregorianDateStr }) => {
          const isToday = lunarDay && currentDayInfo && lunarDay.id === currentDayInfo.id;
          const dayHasDataClass = lunarDay ? 'border-accent-color cursor-pointer' : 'border-transparent cursor-default';
          const dayTodayClass = isToday ? 'outline-2 outline-energy-medium-bg outline' : '';
          
          return (
            <Link 
              key={dayNumber} 
              to={lunarDay ? `/day/${lunarDay.id}?date=${encodeURIComponent(gregorianDateStr)}` : '#'}
              className={`bg-border-color rounded h-[95px] relative flex flex-col items-center justify-center p-2 text-[0.8rem] border ${dayHasDataClass} ${dayTodayClass} no-underline text-inherit`}
            >
              <span className="absolute top-1.5 left-2 text-secondary-text text-[0.7rem] font-bold leading-none">{dayNumber}</span>
              {lunarDay && (
                <div className="flex flex-col items-center gap-2 mt-4 w-full px-0.5">
                  <span className={`w-3.5 h-3.5 rounded-full inline-block shrink-0 ${energyClass[lunarDay.energyLevel]}`}></span>
                  <span className="text-[0.62rem] font-bold text-center leading-tight line-clamp-2">
                    {lunarDay.nameTeReo}
                  </span>
                </div>
              )}
            </Link>
          )
        })}
      </div>

      <section className="mt-6 p-6 bg-border-color rounded-lg text-sm">
        <h3 className="text-lg font-semibold mb-4">Legend</h3>
        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-4 h-4 rounded-full inline-block border-2 border-energy-high-border bg-transparent"></span>
          <span><strong className="font-bold">High Energy:</strong> Abundant, productive time.</span>
        </div>
        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-4 h-4 rounded-full inline-block bg-energy-medium-bg"></span>
          <span><strong className="font-bold">Medium Energy:</strong> Stability, moderate activity.</span>
        </div>
        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-4 h-4 rounded-full inline-block bg-energy-low-bg"></span>
          <span><strong className="font-bold">Low Energy:</strong> Introspection, renewal, planting.</span>
        </div>
        <div className="mt-4 text-xs text-secondary-text">
          * High energy is indicated by an outlined circle, Medium by purple, and Low by solid white.
        </div>
      </section>
    </div>
  )
}

export default Month
