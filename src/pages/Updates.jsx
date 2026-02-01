import React from 'react';
import { motion } from 'framer-motion';

export default function Updates() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'relative',
        zIndex: 10,
        paddingTop: '8rem',
        paddingBottom: '4rem'
      }}
    >
      {/* Hero */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontFamily: '"IM Fell English", serif',
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            Updates
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.2rem',
            color: '#B0B0B0',
            lineHeight: 1.7,
            fontStyle: 'italic'
          }}>
            Pattern analysis, current events, and resistance intelligence
          </p>
        </motion.div>
      </section>
      
      {/* Coming Soon */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: '#0A0A0A',
            border: '2px solid #303030',
            borderRadius: '12px',
            padding: '3rem',
            textAlign: 'center'
          }}
        >
          <div style={{
            fontSize: '3rem',
            marginBottom: '2rem',
            opacity: 0.6
          }}>
            📝
          </div>
          <h2 style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            Content In Development
          </h2>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            This section will feature regular pattern analysis, current event 
            interpretation through the framework, and actionable resistance intelligence.
          </p>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1rem',
            color: '#808080',
            fontStyle: 'italic'
          }}>
            Publishing begins Fall 2027 after comprehensive research and private development
          </p>
        </motion.div>
      </section>
      
      {/* What to Expect */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '4rem auto'
      }}>
        <SectionHeader 
          title="What to Expect"
          subtitle="When updates begin"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {contentTypes.map((type, index) => (
            <ContentCard key={index} {...type} />
          ))}
        </div>
      </section>
      
      {/* Tone & Approach */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '4rem auto',
        background: '#0A0A0A',
        borderRadius: '12px',
        border: '1px solid #303030'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em',
            textAlign: 'center'
          }}>
            Respectful Analysis, Not Rage
          </h2>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.05rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            marginBottom: '1.5rem'
          }}>
            Pattern recognition is most effective when it's calm, methodical, and 
            well-documented. Anger is valid, but analysis requires clarity. Updates 
            will maintain a tone of measured assessment, not inflammatory rhetoric.
          </p>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.05rem',
            color: '#A0A0A0',
            lineHeight: 1.8,
            fontStyle: 'italic'
          }}>
            The goal is to help people see patterns they might otherwise miss-not 
            to perform outrage or tribal signaling. Education as civil defense infrastructure.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}

const contentTypes = [
  {
    icon: '🔍',
    title: 'Pattern Analysis',
    color: '#C5B4E3',
    description: 'Breaking down current events through the six skeletal principles, identifying authoritarian dynamics as they emerge'
  },
  {
    icon: '📚',
    title: 'Case Studies',
    color: '#E8B4D9',
    description: 'Historical and contemporary examples of resistance successes and failures, lessons learned from each'
  },
  {
    icon: '🛠️',
    title: 'Practical Tools',
    color: '#B4D9C5',
    description: 'Downloadable guides, templates, and protocols for implementing resistance strategies in your context'
  },
  {
    icon: '🌐',
    title: 'Signal Amplification',
    color: '#B4C5E3',
    description: 'Highlighting work by others doing pattern recognition and resistance organizing, building collective intelligence'
  }
];

function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', marginBottom: '2rem' }}
    >
      <div style={{
        fontSize: '0.85rem',
        color: '#808080',
        letterSpacing: '0.3em',
        marginBottom: '0.5rem',
        fontFamily: '"Cinzel", serif',
        textTransform: 'uppercase'
      }}>
        {subtitle}
      </div>
      <h2 style={{
        fontFamily: '"Cinzel", serif',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 600,
        letterSpacing: '0.05em'
      }}>
        {title}
      </h2>
    </motion.div>
  );
}

function ContentCard({ icon, title, color, description }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: '#0A0A0A',
        border: `2px solid ${isHovered ? color : '#303030'}`,
        borderRadius: '8px',
        padding: '2rem',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? `0 0 30px ${color}40` : 'none'
      }}
    >
      <div style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        filter: isHovered ? `drop-shadow(0 0 10px ${color})` : 'none',
        transition: 'filter 0.3s ease'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: '"Cinzel", serif',
        fontSize: '1.5rem',
        fontWeight: 600,
        color: isHovered ? color : '#FFFFFF',
        marginBottom: '1rem',
        letterSpacing: '0.05em',
        transition: 'color 0.3s ease'
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: '0.95rem',
        color: '#A0A0A0',
        lineHeight: 1.6
      }}>
        {description}
      </p>
    </motion.div>
  );
}
