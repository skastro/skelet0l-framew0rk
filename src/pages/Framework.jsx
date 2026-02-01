import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Framework() {
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
            The Framework
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.2rem',
            color: '#B0B0B0',
            lineHeight: 1.7,
            fontStyle: 'italic'
          }}>
            Skeletal Cartography meets the LOCUS System: organizing resistance across 
            six domains using four-element methodology
          </p>
        </motion.div>
      </section>
      
      {/* LOCUS System */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <SectionHeader 
          title="The LOCUS System"
          subtitle="Six Domains of Life"
        />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {locusDomains.map((domain, index) => (
            <DomainCard key={index} {...domain} />
          ))}
        </div>
      </section>
      
      {/* The 6 Principles */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '4rem auto',
        background: '#0A0A0A',
        borderRadius: '12px',
        border: '1px solid #303030'
      }}>
        <SectionHeader 
          title="The 6 Skeletal Principles"
          subtitle="Pattern Recognition as Civil Defense"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {principles.map((principle, index) => (
            <PrincipleCard key={index} number={index + 1} {...principle} />
          ))}
        </div>
      </section>
      
      {/* Four-Element Process */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <SectionHeader 
          title="The Four-Element Process"
          subtitle="Fire • Earth • Air • Water"
        />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {elements.map((element, index) => (
            <ElementCard key={index} {...element} />
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '4rem auto 0'
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
            letterSpacing: '0.05em'
          }}>
            Ready to Apply This Framework?
          </h2>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
            color: '#A0A0A0',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            Learn the specific patterns to recognize and the protocols for speaking up
          </p>
          <Link to="/pattern-recognition">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(197, 180, 227, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1.2rem 3rem',
                fontSize: '1rem',
                fontFamily: '"Cinzel", serif',
                fontWeight: 600,
                letterSpacing: '0.2em',
                background: 'linear-gradient(135deg, #C5B4E3, #E8B4D9)',
                color: '#0A0A0D',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              Learn Pattern Recognition
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}

// Data
const locusDomains = [
  {
    icon: '💪',
    title: 'Physical',
    color: '#B4D9C5',
    description: 'Body regulation, health, movement, nervous system safety'
  },
  {
    icon: '🧠',
    title: 'Mental',
    color: '#C5B4E3',
    description: 'Knowledge, education, critical thinking, information literacy'
  },
  {
    icon: '✨',
    title: 'Spiritual',
    color: '#E8B4D9',
    description: 'Values, meaning, community, moral principles'
  },
  {
    icon: '💼',
    title: 'Career',
    color: '#B4C5E3',
    description: 'Work, professional integrity, refusing complicity'
  },
  {
    icon: '💰',
    title: 'Financial',
    color: '#B4D9C5',
    description: 'Economic power, mutual aid, collective resources'
  },
  {
    icon: '👥',
    title: 'Social',
    color: '#C5B4E3',
    description: 'Relationships, networks, truth-telling, solidarity'
  }
];

const principles = [
  {
    domain: 'Physical',
    icon: '💪',
    color: '#B4D9C5',
    title: 'Fortify Your Foundation',
    subtitle: 'Nervous system regulation as resistance infrastructure',
    description: 'You cannot sustain resistance from a dysregulated nervous system. Physical safety, somatic practices, and body autonomy create the foundation for all other work. Your body knows danger before your mind does-trust that wisdom.'
  },
  {
    domain: 'Mental',
    icon: '🧠',
    color: '#C5B4E3',
    title: 'Master Pattern Recognition',
    subtitle: 'Develop immunity to propaganda',
    description: 'Authoritarian systems rely on confusion, contradiction, and exhaustion. Learn to spot the patterns: scapegoating, false binaries, manufactured urgency, gaslighting. Your childhood trained you for this-now systematize that knowledge.'
  },
  {
    domain: 'Spiritual',
    icon: '✨',
    color: '#E8B4D9',
    title: 'Defend Human Dignity',
    subtitle: 'Principle-based morality over tribal loyalty',
    description: 'Oppression requires dehumanization. Refuse to participate in systems that require you to see some humans as less than human. Your principles are the skeleton that holds you upright when pressure comes to compromise.'
  },
  {
    domain: 'Career',
    icon: '💼',
    color: '#B4C5E3',
    title: 'Refuse Small Compliances',
    subtitle: 'Professional integrity as political action',
    description: 'Authoritarianism depends on millions of small compliances from ordinary people doing their jobs. Every time you refuse to "just follow orders," you collapse the system\'s power. Speak up early. Document everything. Build alternative paths.'
  },
  {
    domain: 'Financial',
    icon: '💰',
    color: '#B4D9C5',
    title: 'Build Collective Power',
    subtitle: 'Mutual aid and economic resilience',
    description: 'Vulnerable people are easier to control. Build financial buffers, practice mutual aid, create safety nets outside institutional systems. Your resources shared strategically multiply collective resistance capacity.'
  },
  {
    domain: 'Social',
    icon: '👥',
    color: '#C5B4E3',
    title: 'Expose the Structure Early',
    subtitle: 'Truth-telling before consensus crystallizes',
    description: 'One dissenter collapses false consensus. Speak the truth about what you see-not to convince everyone, but to give others permission to see it too. The emperor has no clothes, but someone has to say it first. Be that person.'
  }
];

const elements = [
  {
    name: 'Fire',
    icon: '🔥',
    color: '#E8B4D9',
    phase: 'Initiation',
    description: 'Start the work, ignite change, take the first step'
  },
  {
    name: 'Earth',
    icon: '🌱',
    color: '#B4D9C5',
    phase: 'Sustaining',
    description: 'Maintain practice, build habits, create stability'
  },
  {
    name: 'Air',
    icon: '💨',
    color: '#C5B4E3',
    phase: 'Reevaluation',
    description: 'Analyze obstacles, gain perspective, adapt approach'
  },
  {
    name: 'Water',
    icon: '💧',
    color: '#B4C5E3',
    phase: 'Expression',
    description: 'Share insights, flow into action, integrate lessons'
  }
];

// Components
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

function DomainCard({ icon, title, color, description }) {
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
        marginBottom: '0.75rem',
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

function PrincipleCard({ number, domain, icon, color, title, subtitle, description }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: number * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: 'rgba(10, 10, 10, 0.5)',
        border: `2px solid ${isHovered ? color : '#202020'}`,
        borderRadius: '8px',
        padding: '2rem',
        transition: 'all 0.3s ease',
        borderLeft: `4px solid ${color}`
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
        <div style={{
          fontSize: '3rem',
          flexShrink: 0,
          filter: isHovered ? `drop-shadow(0 0 10px ${color})` : 'none',
          transition: 'filter 0.3s ease'
        }}>
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: '"Cinzel", serif',
            fontSize: '0.8rem',
            color: color,
            letterSpacing: '0.2em',
            marginBottom: '0.5rem',
            fontWeight: 600,
            textTransform: 'uppercase'
          }}>
            {domain} Domain • Principle {number}
          </div>
          <h3 style={{
            fontFamily: '"Cinzel", serif',
            fontSize: '1.6rem',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '0.5rem',
            letterSpacing: '0.05em'
          }}>
            {title}
          </h3>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1rem',
            color: '#B0B0B0',
            fontStyle: 'italic',
            marginBottom: '1rem'
          }}>
            {subtitle}
          </p>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '0.95rem',
            color: '#A0A0A0',
            lineHeight: 1.7
          }}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ElementCard({ name, icon, color, phase, description }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: '#0A0A0A',
        border: `2px solid ${isHovered ? color : '#303030'}`,
        borderRadius: '8px',
        padding: '1.5rem',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? `0 0 30px ${color}40` : 'none'
      }}
    >
      <div style={{
        fontSize: '2.5rem',
        marginBottom: '1rem',
        filter: isHovered ? `drop-shadow(0 0 10px ${color})` : 'none'
      }}>
        {icon}
      </div>
      <div style={{
        fontFamily: '"Cinzel", serif',
        fontSize: '1.3rem',
        fontWeight: 600,
        color: isHovered ? color : '#FFFFFF',
        marginBottom: '0.5rem',
        letterSpacing: '0.05em',
        transition: 'color 0.3s ease'
      }}>
        {name}
      </div>
      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: '0.85rem',
        color: color,
        fontStyle: 'italic',
        marginBottom: '0.75rem'
      }}>
        {phase}
      </div>
      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: '0.9rem',
        color: '#A0A0A0',
        lineHeight: 1.5
      }}>
        {description}
      </p>
    </motion.div>
  );
}
