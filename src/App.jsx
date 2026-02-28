import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CommandsPage from './pages/CommandsPage';
import EcosystemPage from './pages/EcosystemPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/commands" element={<CommandsPage />} />
          <Route path="/commands/:ecosystem" element={<EcosystemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
