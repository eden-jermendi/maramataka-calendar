import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Today from '../pages/Today'
import Month from '../pages/Months'
import About from '../pages/About'

function App() {
  return (
    <Router>
      <div>
        <h1>Hina o Te Maramataka</h1>
        
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', padding: 0 }}>
            <li><Link to="/">Today</Link></li>
            <li><Link to="/months">Months</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/months" element={<Month />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
