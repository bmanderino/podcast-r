import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Show from './pages/Show'
import Episode from './pages/Episode'

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/shows/:id/episodes/:episode" element={<Episode />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
