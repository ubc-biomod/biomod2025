
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SponsorsPage from './pages/SponsorsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />

      </Routes>
    </Router>
  );
}

export default App;