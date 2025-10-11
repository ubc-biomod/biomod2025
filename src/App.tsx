
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SponsorsPage from './pages/SponsorsPage';
import ELSIPage from './pages/ELSIPage';
import SponsorsPageDemo from './pages/SponsorsPageDemo';
import Design from './pages/Design';
import Simulations from './pages/Simulations';
import Experiments from './pages/Experiments';
import Future from './pages/Future';
import ProjectPage from './pages/ProjectPage';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sponsors" element={<SponsorsPageDemo />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/design" element={<Design />}/>
        <Route path="/simulations" element={<Simulations />}/>
        <Route path="/experiments" element={<Experiments />}/>
        <Route path="/elsi" element={<ELSIPage />} />
        <Route path="/future" element={<Future />}/>
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;