import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './features/Home';
import PrivacyPolicy from './features/PrivacyPolicy';
import BackToTop from './components/common/BackToTop';
import { ProjectModalProvider } from './context/ProjectModalContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleHamburgerClick = () => setSidebarOpen(true);
  const handleSidebarClose   = () => setSidebarOpen(false);

  return (
    <BrowserRouter>
      <ProjectModalProvider>
        <div className="App">
          <Header onHamburgerClick={handleHamburgerClick} />
          <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <BackToTop />
        </div>
      </ProjectModalProvider>
    </BrowserRouter>
  );
}

export default App;
