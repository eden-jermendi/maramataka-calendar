import React from 'react'
import { sources } from '../data/maramataka/sources'

const About: React.FC = () => {
  return (
    <div className="AboutPage">
      <h1>About Hina o Te Maramataka</h1>
      
      <section style={{ marginBottom: '2rem', borderLeft: '4px solid #ccc', paddingLeft: '1rem' }}>
        <p style={{ fontWeight: 'bold' }}>Important Note on Variations:</p>
        <p>
          Maramataka varies significantly between different iwi and hapū depending on environmental 
          and geographical differences. This application provides a generalized view based on the 
          sources below. We encourage users to seek out the specific Maramataka traditions of their 
          own mana whenua.
        </p>
      </section>

      <h2>Sources</h2>
      <p>This project is informed by the following primary sources:</p>

      <ul>
        {sources.map((source) => (
          <li key={source.id} style={{ marginBottom: '0.5rem' }}>
            {source.url ? (
              <a href={source.url} target="_blank" rel="noreferrer" style={{ fontWeight: 'bold' }}>
                {source.title}
              </a>
            ) : (
              <span style={{ fontWeight: 'bold' }}>{source.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default About
