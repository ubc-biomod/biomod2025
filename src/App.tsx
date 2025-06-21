
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SponsorsPage from './pages/SponsorsPage';
import ELSIPage from './pages/ELSIPage';
import SponsorsPageDemo from './pages/SponsorsPageDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/elsi" element={<ELSIPage />} />
        <Route path="sponsors2" element={<SponsorsPageDemo />} />
      </Routes>
    </Router>
  );
}

export default App;