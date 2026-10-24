import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candle" element={<LandingPage />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </div>
  );
}

export default App;