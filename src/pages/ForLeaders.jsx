import React from 'react';
import { motion } from 'framer-motion';

export default function ForLeaders() {
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
            For Leaders
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.2rem',
            color: '#B0B0B0',
            lineHeight: 1.7,
            fontStyle: 'italic'
          }}>
            Build anti-toxic cultures through data intelligence and pattern recognition
          </p>
        </motion.div>
      </section>
      
      {/* Value Proposition */}
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
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            My Approach
          </h2>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.15rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
            fontStyle: 'italic'
          }}>
            I help leaders make informed decisions by transforming complex data into 
            actionable intelligence, while fostering healthy, collaborative team cultures.
          </p>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.05rem',
            color: '#A0A0A0',
            lineHeight: 1.8
          }}>
            Military intelligence background (Arabic linguist, Signals Intelligence Analyst) 
            combined with corporate master data work gives me a unique perspective: I see 
            the patterns others miss, and I know how organizational toxicity undermines 
            even the best strategy.
          </p>
        </motion.div>
      </section>
      
      {/* Core Offerings */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '4rem auto'
      }}>
        <SectionHeader 
          title="What I Bring"
          subtitle="Technical Excellence + Cultural Intelligence"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {offerings.map((offering, index) => (
            <OfferingCard key={index} {...offering} />
          ))}
        </div>
      </section>
      
      {/* Why This Matters */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '4rem auto',
        background: '#0A0A0A',
        borderRadius: '12px',
        border: '1px solid #303030'
      }}>
        <SectionHeader 
          title="Why Cultural Intelligence Matters"
          subtitle="Toxic cultures destroy good strategy"
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
            You can have perfect data, brilliant strategy, and excellent technical 
            execution-and still fail if your culture is toxic. When people are afraid 
            to speak up, when scapegoating is normalized, when leadership operates 
            through gaslighting and moving goalposts, no amount of intelligence helps.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            I recognize authoritarian patterns in organizational systems because I was 
            trained to spot them at the smallest scale. The same dynamics that make 
            families dysfunctional make organizations dysfunctional. The difference is 
            that in families, you have no choice. In professional settings, you do.
          </p>
          <p style={{ fontStyle: 'italic', color: '#B0B0B0' }}>
            Building healthy cultures isn't soft skills work-it's essential infrastructure 
            for sustained success. I help you build that infrastructure while maintaining 
            technical excellence.
          </p>
        </motion.div>
      </section>
      
      {/* Contact/Work With Me */}
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
          <h2 style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            Work With Me
          </h2>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
            color: '#A0A0A0',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            Consulting, speaking, and workshops on data intelligence, 
            pattern recognition, and building anti-toxic cultures
          </p>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1rem',
            color: '#808080',
            fontStyle: 'italic'
          }}>
            Contact information coming soon
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

const offerings = [
  {
    icon: '📊',
    title: 'Data Intelligence',
    color: '#C5B4E3',
    description: 'Transform complex organizational data into clear, actionable insights. Master data management that actually serves decision-making.'
  },
  {
    icon: '🔍',
    title: 'Pattern Recognition',
    color: '#E8B4D9',
    description: 'Spot authoritarian dynamics before they become crises. Early warning systems for toxic behavior patterns in teams and leadership.'
  },
  {
    icon: '🛡️',
    title: 'Cultural Architecture',
    color: '#B4D9C5',
    description: 'Build systems that make healthy behavior the path of least resistance. Anti-toxic infrastructure that scales.'
  },
  {
    icon: '⚖️',
    title: 'Integrity Frameworks',
    color: '#B4C5E3',
    description: 'Navigate ethical complexity without losing professional effectiveness. Refuse complicity while maintaining impact.'
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

function OfferingCard({ icon, title, color, description }) {
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
