import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Today from '../pages/Today'
import Month from '../pages/Months'
import About from '../pages/About'
import DayView from '../pages/DayView'
import { maramatakaService } from '../lib/maramatakaService'
import { LoadingState } from '../components/ui/FallbackStates'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialise dataset from local SQLite/Express backend
    maramatakaService.loadData()
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Failed to load data', error)
        setIsLoading(false)
      })
  }, [])

  return (
    <Router>
      <div className="max-w-[800px] mx-auto p-8">
        <header>
          <h1 className="text-3xl font-bold mb-4">Hina o te Maramataka</h1>
          <nav>
            <ul className="list-none flex gap-6 p-0 mb-8">
              <li>
                <Link to="/" className="text-secondary-text no-underline font-medium transition-colors duration-200 hover:text-text-color">
                  Today
                </Link>
              </li>
              <li>
                <Link to="/months" className="text-secondary-text no-underline font-medium transition-colors duration-200 hover:text-text-color">
                  Months
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-text no-underline font-medium transition-colors duration-200 hover:text-text-color">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <hr className="border-0 border-t border-border-color my-8" />

        <main>
          {isLoading ? (
            <LoadingState />
          ) : (
            <Routes>
              <Route path="/" element={<Today />} />
              <Route path="/months" element={<Month />} />
              <Route path="/about" element={<About />} />
              <Route path="/day/:id" element={<DayView />} />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  )
}

export default App
