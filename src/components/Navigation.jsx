import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/framework', label: 'The Framework' },
    { path: '/pattern-recognition', label: 'Pattern Recognition' },
    { path: '/for-survivors', label: 'For Survivors' },
    { path: '/for-leaders', label: 'For Leaders' },
    { path: '/warrior-training', label: 'Warrior Training' },
    { path: '/updates', label: 'Updates' },
    { path: '/resources', label: 'Resources' },
    { path: '/about', label: 'About' }
  ];
  
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(10, 10, 13, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid #303030'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              fontFamily: '"IM Fell English", serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#FFFFFF',
              letterSpacing: '0.08em'
            }}
          >
            Skeletal Resistance
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <div style={{
          display: 'none',
          gap: '2rem',
          alignItems: 'center'
        }}
        className="desktop-nav"
        >
          {navLinks.slice(1).map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: '"Cinzel", serif',
                fontSize: '0.85rem',
                color: location.pathname === link.path ? '#C5B4E3' : '#C0C0C0',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                transition: 'color 0.3s ease',
                fontWeight: location.pathname === link.path ? 600 : 400
              }}
              onMouseEnter={e => e.target.style.color = '#E8B4D9'}
              onMouseLeave={e => e.target.style.color = location.pathname === link.path ? '#C5B4E3' : '#C0C0C0'}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'transparent',
            border: '2px solid #303030',
            borderRadius: '8px',
            padding: '0.5rem 1rem',
            color: '#FFFFFF',
            fontSize: '1rem',
            cursor: 'pointer',
            fontFamily: '"Cinzel", serif',
            letterSpacing: '0.1em'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            background: 'rgba(10, 10, 13, 0.98)',
            borderTop: '1px solid #303030',
            padding: '1rem 0'
          }}
          className="mobile-menu"
        >
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '1rem 2rem',
                fontFamily: '"Cinzel", serif',
                fontSize: '0.9rem',
                color: location.pathname === link.path ? '#C5B4E3' : '#C0C0C0',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
                borderLeft: location.pathname === link.path ? '3px solid #C5B4E3' : '3px solid transparent'
              }}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
      
      <style jsx>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
