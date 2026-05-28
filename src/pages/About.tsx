import React from 'react'
import { sources } from '../data/maramataka/sources'

const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">About Hina o Te Maramataka</h1>
      
      <section className="border-l-4 border-secondary-text pl-4 mb-8">
        <p className="font-bold text-lg mb-2">Important Note on Variations:</p>
        <p className="leading-relaxed">
          Maramataka varies significantly between different iwi and hapū depending on environmental 
          and geographical differences. This application provides a generalized view based on the 
          sources below. We encourage users to seek out the specific Maramataka traditions of their 
          own mana whenua.
        </p>
      </section>

      <h2 className="text-2xl font-bold mb-4">Sources</h2>
      <p className="text-secondary-text mb-4">This project is informed by the following primary sources:</p>

      <ul className="list-disc list-inside p-0 flex flex-col gap-3">
        {sources.map((source) => (
          <li key={source.id} className="text-base">
            {source.url ? (
              <a href={source.url} target="_blank" rel="noreferrer" className="text-accent-color font-bold hover:underline transition-all">
                {source.title}
              </a>
            ) : (
              <span className="font-bold text-text-color">{source.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default About
