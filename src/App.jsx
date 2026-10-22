import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/candle" element={<LandingPage/>} />
      </Routes>
    </div> 
  )
}

export default App
