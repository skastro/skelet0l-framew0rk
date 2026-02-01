import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import pages
import Home from './pages/Home';
import Framework from './pages/Framework';
import PatternRecognition from './pages/PatternRecognition';
import ForSurvivors from './pages/ForSurvivors';
import ForLeaders from './pages/ForLeaders';
import WarriorTraining from './pages/WarriorTraining';
import Updates from './pages/Updates';
import Resources from './pages/Resources';
import About from './pages/About';

// Import shared components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HybridParticles from './components/HybridParticles';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/pattern-recognition" element={<PatternRecognition />} />
        <Route path="/for-survivors" element={<ForSurvivors />} />
        <Route path="/for-leaders" element={<ForLeaders />} />
        <Route path="/warrior-training" element={<WarriorTraining />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        background: '#0A0A0D',
        color: '#FFFFFF',
        position: 'relative'
      }}>
        <HybridParticles />
        <Navigation />
        <AnimatedRoutes />
        <Footer />
        
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English&family=Cinzel:wght@400;600;700;900&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            overflow-x: hidden;
            background: #0A0A0D;
          }
          
          ::selection {
            background: rgba(197, 180, 227, 0.3);
            color: #F0F4FF;
          }
          
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: #0A0A0D;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #C5B4E3, #E8B4D9);
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #E8B4D9, #C5B4E3);
          }
        `}</style>
      </div>
    </Router>
  );
}
