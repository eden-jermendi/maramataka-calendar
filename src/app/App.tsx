import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Today from '../pages/Today'
import Month from '../pages/Months'
import About from '../pages/About'
import DayView from '../pages/DayView'
import { maramatakaService } from '../lib/maramatakaService'
import { LoadingState } from '../components/ui/FallbackStates'
import '../styles/App.css'

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
      <div className="App">
        <header>
          <h1>Hina o te Maramataka</h1>
          <nav>
            <ul>
              <li><Link to="/">Today</Link></li>
              <li><Link to="/months">Months</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        <hr />

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
