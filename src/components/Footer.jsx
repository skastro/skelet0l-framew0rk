import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 10,
      background: '#0A0A0A',
      borderTop: '1px solid #303030',
      padding: '4rem 2rem 2rem',
      marginTop: '6rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* Site Name */}
        <div style={{
          fontFamily: '"IM Fell English", serif',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: '#FFFFFF',
          marginBottom: '1rem',
          letterSpacing: '0.08em'
        }}>
          Skeletal Resistance
        </div>
        
        {/* Tagline */}
        <div style={{
          fontSize: '0.85rem',
          color: '#808080',
          marginBottom: '2rem',
          letterSpacing: '0.3em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          fontFamily: '"Cinzel", serif'
        }}>
          <span>INDOMITABLE SPIRIT</span>
          <span style={{ color: '#C5B4E3', fontSize: '0.7rem', letterSpacing: '0.5em' }}>
            l o c u s
          </span>
          <span>INFINITESIMAL ESSENCE</span>
        </div>
        
        {/* Quick Links */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {[
            { path: '/framework', label: 'Framework', color: '#C5B4E3' },
            { path: '/pattern-recognition', label: 'Patterns', color: '#E8B4D9' },
            { path: '/for-survivors', label: 'Survivors', color: '#B4D9C5' },
            { path: '/for-leaders', label: 'Leaders', color: '#B4C5E3' },
            { path: '/resources', label: 'Resources', color: '#C5B4E3' },
            { path: '/about', label: 'About', color: '#E8B4D9' }
          ].map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color: '#808080',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
                fontFamily: '"Cinzel", serif',
                letterSpacing: '0.1em'
              }}
              onMouseEnter={e => e.target.style.color = link.color}
              onMouseLeave={e => e.target.style.color = '#808080'}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Philosophy Statement */}
        <div style={{
          fontSize: '0.9rem',
          color: '#606060',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem',
          lineHeight: '1.6'
        }}>
          "As Above, So Below" - Childhood oppression as training for adult resistance
        </div>
        
        {/* Copyright */}
        <div style={{
          fontSize: '0.8rem',
          color: '#505050',
          opacity: 0.7,
          fontFamily: '"Cinzel", serif',
          letterSpacing: '0.1em'
        }}>
          © 2026 Skeletal Resistance • Pattern Recognition as Civil Defense
        </div>
      </motion.div>
    </footer>
  );
}
