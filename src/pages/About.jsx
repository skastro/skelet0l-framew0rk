import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
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
            About
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.2rem',
            color: '#B0B0B0',
            lineHeight: 1.7,
            fontStyle: 'italic'
          }}>
            Skeletal cartography as resistance infrastructure
          </p>
        </motion.div>
      </section>
      
      {/* Core Philosophy */}
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
            borderLeft: '4px solid #C5B4E3'
          }}
        >
          <h2 style={{
            fontFamily: '"IM Fell English", serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '2rem',
            letterSpacing: '0.05em'
          }}>
            As Above, So Below
          </h2>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
            color: '#C0C0C0',
            lineHeight: 1.8
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              The family is the first authoritarian structure most people encounter. 
              The dynamics that make families toxic-scapegoating, gaslighting, moving 
              goalposts, isolation, manufactured urgency, denial of reality-these same 
              patterns appear in workplaces, governments, and all systems of oppression.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              If you survived an adverse childhood, you developed a specific set of 
              skills: hypervigilance, pattern recognition, emotional regulation under 
              pressure, reading power dynamics, detecting deception, maintaining reality 
              against gaslighting. You learned to read micro-expressions to predict 
              violence. You learned to detect contradictions before they became crises.
            </p>
            <p style={{ fontStyle: 'italic', color: '#E8B4D9' }}>
              These aren't deficits. These are authoritarian pattern recognition skills. 
              Your scapegoat training is collective resistance training.
            </p>
          </div>
        </motion.div>
      </section>
      
      {/* Authority Sources */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '4rem auto'
      }}>
        <SectionHeader 
          title="Sources of Authority"
          subtitle="Why trust this framework?"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {authorities.map((auth, index) => (
            <AuthorityCard key={index} {...auth} />
          ))}
        </div>
      </section>
      
      {/* Framework Integration */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '4rem auto',
        background: '#0A0A0A',
        borderRadius: '12px',
        border: '1px solid #303030'
      }}>
        <SectionHeader 
          title="How It All Connects"
          subtitle="Skeletal cartography meets LOCUS"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            marginTop: '2rem',
            fontFamily: 'Georgia, serif',
            fontSize: '1.05rem',
            color: '#C0C0C0',
            lineHeight: 1.8
          }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: '#C5B4E3' }}>Skeletal Cartography:</strong> Mapping 
            consciousness with geometric precision. Exposing the essential structure 
            beneath performance and pretense. Your skeleton holds you upright-it's 
            strength through exposed structure.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: '#E8B4D9' }}>LOCUS System:</strong> Six domains of 
            life (Physical, Mental, Spiritual, Career, Financial, Social) processed 
            through four elements (Fire, Earth, Air, Water). A stable center maintaining 
            itself across all areas.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong style={{ color: '#B4D9C5' }}>Body/Mind/Spirit:</strong> Virgo 
            (physical regulation), Libra (balanced perspective), Leo (courageous 
            expression). Three domains of healing integrated with the six LOCUS domains.
          </p>
          <p style={{ fontStyle: 'italic', color: '#A0A0A0' }}>
            Together: A comprehensive framework for resistance that integrates personal 
            healing, pattern recognition, and collective action. Individual wellness and 
            social justice as inseparable practices.
          </p>
        </motion.div>
      </section>
      
      {/* Legal Boundaries */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '4rem auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(10, 10, 10, 0.5)',
            border: '2px solid #303030',
            borderRadius: '8px',
            padding: '2rem'
          }}
        >
          <h3 style={{
            fontFamily: '"Cinzel", serif',
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#808080',
            letterSpacing: '0.05em'
          }}>
            Important Legal Note
          </h3>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '0.95rem',
            color: '#A0A0A0',
            lineHeight: 1.7
          }}>
            This framework does not claim or imply sharing any US intelligence information. 
            There is no whistleblower-related content. All frameworks use open-source 
            analytical thinking, publicly available research (particularly Jenna Pacelli's 
            work on authoritarianism and ACEs), and lived experience synthesis. The 
            military intelligence background provided pattern recognition training-analytical 
            thinking methodology, not classified content.
          </p>
        </motion.div>
      </section>
      
      {/* Tagline */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '4rem auto 0',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#808080',
            letterSpacing: '0.3em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span>INDOMITABLE SPIRIT</span>
            <span style={{ color: '#C5B4E3', fontSize: '0.8rem', letterSpacing: '0.5em' }}>
              l o c u s
            </span>
            <span>INFINITESIMAL ESSENCE</span>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

const authorities = [
  {
    icon: '🎖️',
    title: 'Military Intelligence',
    color: '#C5B4E3',
    description: 'Arabic linguist and Signals Intelligence Analyst. Pattern recognition training at the smallest scale-intelligence methodology applied to organizational and social systems.'
  },
  {
    icon: '📊',
    title: 'Corporate Data Work',
    color: '#E8B4D9',
    description: 'Master data management and business intelligence. Transforming organizational complexity into actionable insights. Culture-building alongside technical excellence.'
  },
  {
    icon: '🛡️',
    title: 'ACEs Survivor',
    color: '#B4D9C5',
    description: 'Lived expertise navigating adverse childhood experiences. Firsthand knowledge of authoritarian family dynamics and the skills developed to survive them.'
  },
  {
    icon: '⭐',
    title: 'Astrological Framework',
    color: '#B4C5E3',
    description: 'North Node in Leo conjunct Mars-designed for speaking up early. Mercury in Scorpio conjunct Lilith for penetrating truth-telling. Moon in Leo in 12th house: reclusive performer.'
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

function AuthorityCard({ icon, title, color, description }) {
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
