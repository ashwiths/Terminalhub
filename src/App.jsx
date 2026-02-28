import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CommandsPage from './pages/CommandsPage';
import EcosystemPage from './pages/EcosystemPage';
import FrameworksPage from './pages/FrameworksPage';
import StylingPage from './pages/StylingPage';
import BackendPage from './pages/BackendPage';
import PythonPage from './pages/PythonPage';
import JavaPage from './pages/JavaPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/commands" element={<CommandsPage />} />
          <Route path="/commands/:ecosystem" element={<EcosystemPage />} />
          <Route path="/frameworks" element={<FrameworksPage />} />
          <Route path="/styling" element={<StylingPage />} />
          <Route path="/backend" element={<BackendPage />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/java" element={<JavaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
