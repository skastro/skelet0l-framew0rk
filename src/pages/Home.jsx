import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'relative',
        zIndex: 10,
        paddingTop: '5rem'
      }}
    >
      {/* Hero Section */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px' }}>
          {/* Four Corner Dots (Elements) */}
          <div style={{ position: 'relative', marginBottom: '3rem' }}>
            {[
              { color: '#C5B4E3', position: { top: '-50px', left: '-50px' } }, // Air
              { color: '#E8B4D9', position: { top: '-50px', right: '-50px' } }, // Fire
              { color: '#B4D9C5', position: { bottom: '-50px', left: '-50px' } }, // Earth
              { color: '#B4C5E3', position: { bottom: '-50px', right: '-50px' } }  // Water
            ].map((dot, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: dot.color,
                  boxShadow: `0 0 20px ${dot.color}`,
                  ...dot.position
                }}
              />
            ))}
          </div>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontFamily: '"Cinzel", serif',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              color: '#808080',
              letterSpacing: '0.3em',
              marginBottom: '1.5rem',
              textTransform: 'uppercase'
            }}
          >
            The Skeletal Principles of
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontFamily: '"IM Fell English", serif',
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              fontWeight: 400,
              letterSpacing: '0.08em',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #C5B4E3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Resistance
          </motion.h1>
          
          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#C0C0C0',
              marginBottom: '3rem',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto 3rem'
            }}
          >
            Exposed structure is strength. Your survival of childhood adversity trained you 
            to recognize authoritarian patterns everywhere. This is skeletal cartography-mapping 
            oppression with geometric precision, building collective power through pattern recognition.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/framework">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 40px rgba(197, 180, 227, 0.6)' 
                }}
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
                  textTransform: 'uppercase',
                  boxShadow: '0 0 30px rgba(197, 180, 227, 0.4)',
                  transition: 'all 0.3s ease'
                }}
              >
                Learn The Framework
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Three Pathways Section */}
      <section style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            Choose Your Path
          </h2>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
            color: '#A0A0A0',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Three entry points into the framework of resistance
          </p>
        </motion.div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {/* For Survivors */}
          <PathwayCard
            title="For Survivors"
            icon="🛡️"
            color="#B4D9C5"
            description="If childhood taught you to recognize danger, this framework turns survival skills into collective resistance."
            link="/for-survivors"
          >
            Your crocodile tears were real. Your pain was real. That pain trained you 
            to see patterns others miss. Learn to trust what you already know.
          </PathwayCard>
          
          {/* For Leaders */}
          <PathwayCard
            title="For Leaders"
            icon="⚖️"
            color="#C5B4E3"
            description="Build anti-toxic cultures through data intelligence and pattern recognition. Lead with dignity intact."
            link="/for-leaders"
          >
            Transform organizational complexity into actionable intelligence. Foster 
            healthy collaboration while maintaining professional integrity.
          </PathwayCard>
          
          {/* For Warriors */}
          <PathwayCard
            title="For Warriors"
            icon="⚔️"
            color="#E8B4D9"
            description="Sibhaca-the warrior's dance. Training in speaking up early, refusing small compliances, collective action."
            link="/warrior-training"
          >
            One dissenter collapses false consensus. Learn the protocols for speaking 
            truth, building power, and defending human dignity.
          </PathwayCard>
        </div>
      </section>
      
      {/* Bridge Statement */}
      <section style={{
        padding: '6rem 2rem',
        background: '#0A0A0A',
        borderTop: '1px solid #303030',
        borderBottom: '1px solid #303030'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
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
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.15rem',
            lineHeight: 1.8,
            color: '#C0C0C0',
            marginBottom: '1.5rem'
          }}>
            The family is the first authoritarian structure. What you learned surviving 
            childhood oppression-reading micro-expressions, detecting inconsistencies, 
            predicting violence-these are the exact skills needed to recognize and resist 
            authoritarian systems at every scale.
          </p>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.15rem',
            lineHeight: 1.8,
            color: '#C0C0C0',
            fontStyle: 'italic'
          }}>
            Your scapegoat training is collective resistance training. The personal is political. 
            The skeletal structure you exposed to survive is the framework we all need now.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}

// Pathway Card Component
function PathwayCard({ title, icon, color, description, link, children }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
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
          borderRadius: '12px',
          padding: '2.5rem',
          height: '100%',
          cursor: 'pointer',
          transition: 'all 0.4s ease',
          boxShadow: isHovered ? `0 0 40px ${color}40` : 'none'
        }}
      >
        <div style={{
          fontSize: '3.5rem',
          marginBottom: '1.5rem',
          filter: isHovered ? `drop-shadow(0 0 15px ${color})` : 'none',
          transition: 'filter 0.3s ease'
        }}>
          {icon}
        </div>
        
        <h3 style={{
          fontFamily: '"Cinzel", serif',
          fontSize: '1.8rem',
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
          color: '#B0B0B0',
          fontStyle: 'italic',
          marginBottom: '1.5rem',
          lineHeight: 1.6
        }}>
          {description}
        </p>
        
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.95rem',
          color: '#A0A0A0',
          lineHeight: 1.7
        }}>
          {children}
        </p>
        
        <motion.div
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: '2rem',
            fontFamily: '"Cinzel", serif',
            fontSize: '0.9rem',
            color: color,
            letterSpacing: '0.15em',
            fontWeight: 600
          }}
        >
          EXPLORE →
        </motion.div>
      </motion.div>
    </Link>
  );
}
