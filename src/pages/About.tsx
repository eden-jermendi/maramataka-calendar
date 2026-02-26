import React from 'react'
import { lunarDays } from '../data/maramataka/lunarDays'
import { sources } from '../data/maramataka/sources'

const About: React.FC = () => {
  const referencedSourceIds = Array.from(
    new Set(lunarDays.flatMap((day) => day.sourceIds ?? [])),
  )

  return (
    <div className="AboutPage">
      <h1>About</h1>
      <h2>Sources</h2>

      {referencedSourceIds.length === 0 ? (
        <p>No sources linked yet.</p>
      ) : (
        <ul>
          {sources.map((source) => (
            <li key={source.id}>
              {source.url ? (
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.title}
                </a>
              ) : (
                source.title
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default About
