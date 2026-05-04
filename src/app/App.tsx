import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Today from '../pages/Today'
import Month from '../pages/Months'
import About from '../pages/About'
import '../styles/App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Hina o Te Maramataka</h1>
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
          <Routes>
            <Route path="/" element={<Today />} />
            <Route path="/months" element={<Month />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
