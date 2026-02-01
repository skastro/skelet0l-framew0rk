import React from 'react';
import { motion } from 'framer-motion';

export default function PatternRecognition() {
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
            Pattern Recognition
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.2rem',
            color: '#B0B0B0',
            lineHeight: 1.7,
            fontStyle: 'italic'
          }}>
            Develop immunity to propaganda through systematic pattern analysis
          </p>
        </motion.div>
      </section>
      
      {/* Core Patterns */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <SectionHeader 
          title="Authoritarian Patterns to Recognize"
          subtitle="These appear at every scale-family, workplace, government"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {patterns.map((pattern, index) => (
            <PatternCard key={index} {...pattern} />
          ))}
        </div>
      </section>
      
      {/* Trusted Sources */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '4rem auto',
        background: '#0A0A0A',
        borderRadius: '12px',
        border: '1px solid #303030'
      }}>
        <SectionHeader 
          title="Build Information Literacy"
          subtitle="Trusted sources for pattern analysis"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {sources.map((source, index) => (
            <SourceCard key={index} {...source} />
          ))}
        </div>
      </section>
      
      {/* Your Advantage */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '4rem auto',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{
            fontFamily: '"IM Fell English", serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            You Already Have This Skill
          </h2>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.15rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            marginBottom: '1.5rem'
          }}>
            If you survived a toxic family system, you already know how to:
          </p>
          <ul style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.05rem',
            color: '#A0A0A0',
            lineHeight: 2,
            textAlign: 'left',
            maxWidth: '600px',
            margin: '0 auto',
            listStyle: 'none',
            padding: 0
          }}>
            {[
              'Read micro-expressions to predict violence',
              'Detect contradictions in what people say vs. do',
              'Notice when reality is being redefined around you',
              'Track changing rules and moving goalposts',
              'Identify scapegoating patterns before they escalate',
              'Trust your gut when something feels wrong',
              'Maintain your sense of reality against gaslighting'
            ].map((skill, i) => (
              <li key={i} style={{
                padding: '0.5rem 0',
                paddingLeft: '2rem',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#C5B4E3'
                }}>✓</span>
                {skill}
              </li>
            ))}
          </ul>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.15rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            marginTop: '2rem',
            fontStyle: 'italic'
          }}>
            This isn't new knowledge you need to acquire. This is systematizing 
            the wisdom you gained through survival.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}

const patterns = [
  {
    name: 'Scapegoating',
    color: '#E8B4D9',
    description: 'Blaming one person or group for systemic problems. Creating an "enemy" to unite against. Requires dehumanization to function.',
    whatToDo: 'Refuse to participate in othering. Defend the targeted. Name the pattern publicly.'
  },
  {
    name: 'Gaslighting',
    color: '#C5B4E3',
    description: 'Denying observable reality. "That didn\'t happen." "You\'re too sensitive." Rewriting history. Making you doubt your own perception.',
    whatToDo: 'Document everything. Trust your memory. Find witnesses. Refuse to accept their version of reality.'
  },
  {
    name: 'Moving Goalposts',
    color: '#B4D9C5',
    description: 'Changing rules retroactively. "Good" performance is never good enough. Requirements that shift whenever you meet them.',
    whatToDo: 'Get everything in writing. Point out the contradiction. Refuse to accept impossible standards.'
  },
  {
    name: 'False Binaries',
    color: '#B4C5E3',
    description: 'Forcing choice between two bad options. "You\'re either with us or against us." Eliminating nuance and complexity.',
    whatToDo: 'Name the false choice. Offer third options. Refuse binary thinking.'
  },
  {
    name: 'Manufactured Urgency',
    color: '#E8B4D9',
    description: 'Creating artificial time pressure to prevent careful analysis. "We must act NOW." Weaponizing crisis to bypass normal process.',
    whatToDo: 'Slow down. Ask questions. Demand time to consult others. Emergency rhetoric is manipulation.'
  },
  {
    name: 'Isolation Tactics',
    color: '#C5B4E3',
    description: 'Cutting people off from support systems. Discrediting outside perspectives. "Only we understand you." Creating dependency.',
    whatToDo: 'Maintain external connections. Seek diverse perspectives. Share information widely.'
  }
];

const sources = [
  {
    name: 'Ground News',
    color: '#C5B4E3',
    description: 'Compare how different outlets cover the same story. Spot bias and blind spots.',
    url: 'groundnews.com'
  },
  {
    name: 'Substack',
    color: '#E8B4D9',
    description: 'Independent journalism and expert analysis outside corporate media gatekeeping.',
    url: 'substack.com'
  },
  {
    name: 'BlueSky',
    color: '#B4C5E3',
    description: 'Decentralized social media with better information hygiene than traditional platforms.',
    url: 'bsky.app'
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

function PatternCard({ name, color, description, whatToDo }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
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
        borderLeft: `4px solid ${color}`
      }}
    >
      <h3 style={{
        fontFamily: '"Cinzel", serif',
        fontSize: '1.5rem',
        fontWeight: 600,
        color: isHovered ? color : '#FFFFFF',
        marginBottom: '1rem',
        letterSpacing: '0.05em',
        transition: 'color 0.3s ease'
      }}>
        {name}
      </h3>
      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1rem',
        color: '#B0B0B0',
        lineHeight: 1.7,
        marginBottom: '1.5rem'
      }}>
        {description}
      </p>
      <div style={{
        borderTop: '1px solid #303030',
        paddingTop: '1rem'
      }}>
        <div style={{
          fontFamily: '"Cinzel", serif',
          fontSize: '0.8rem',
          color: color,
          letterSpacing: '0.2em',
          marginBottom: '0.5rem',
          fontWeight: 600,
          textTransform: 'uppercase'
        }}>
          What To Do
        </div>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.95rem',
          color: '#A0A0A0',
          lineHeight: 1.6
        }}>
          {whatToDo}
        </p>
      </div>
    </motion.div>
  );
}

function SourceCard({ name, color, description, url }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.a
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: 'rgba(10, 10, 10, 0.5)',
        border: `2px solid ${isHovered ? color : '#202020'}`,
        borderRadius: '8px',
        padding: '1.5rem',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? `0 0 30px ${color}40` : 'none',
        cursor: 'pointer'
      }}
    >
      <h3 style={{
        fontFamily: '"Cinzel", serif',
        fontSize: '1.3rem',
        fontWeight: 600,
        color: isHovered ? color : '#FFFFFF',
        marginBottom: '0.75rem',
        letterSpacing: '0.05em',
        transition: 'color 0.3s ease'
      }}>
        {name}
      </h3>
      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: '0.95rem',
        color: '#A0A0A0',
        lineHeight: 1.6,
        marginBottom: '1rem'
      }}>
        {description}
      </p>
      <div style={{
        fontFamily: '"Cinzel", serif',
        fontSize: '0.85rem',
        color: color,
        letterSpacing: '0.1em'
      }}>
        {url} →
      </div>
    </motion.a>
  );
}
