
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SponsorsPage from './pages/SponsorsPage';
import ELSIPage from './pages/ELSIPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/elsi" element={<ELSIPage />} />
      </Routes>
    </Router>
  );
}

export default App;