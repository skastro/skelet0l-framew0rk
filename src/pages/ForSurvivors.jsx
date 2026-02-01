import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ForSurvivors() {
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
            For Survivors
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.2rem',
            color: '#B0B0B0',
            lineHeight: 1.7,
            fontStyle: 'italic'
          }}>
            Your tears were real. Your pain was real. That pain trained you.
          </p>
        </motion.div>
      </section>
      
      {/* Crocodile Tears */}
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
            borderLeft: '4px solid #E8B4D9'
          }}
        >
          <h2 style={{
            fontFamily: '"IM Fell English", serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '2rem',
            letterSpacing: '0.05em'
          }}>
            Crocodile Tears
          </h2>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Crocodile tears are a myth. Crocodiles don't actually cry false tears 
              when they eat their prey. It's a misunderstanding based on excess fluid 
              their eyes produce when eating-a physiological function, not deception.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              But the phrase persists as an accusation: "crocodile tears" means fake 
              emotion, manipulative crying, performed grief. It's what they call your 
              pain when they don't want to acknowledge causing it.
            </p>
            <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: '#E8B4D9' }}>
              Your tears were real. Your pain was real.
            </p>
            <p>
              The accusation of "crocodile tears" is itself a manipulation-a way to 
              gaslight you about your own emotional reality. They need you to doubt 
              yourself. They need you uncertain about what you felt, what you experienced, 
              whether your suffering was legitimate.
            </p>
          </div>
          <div style={{
            borderTop: '1px solid #303030',
            paddingTop: '2rem',
            marginTop: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              fontFamily: '"Cinzel", serif',
              fontSize: '0.9rem',
              color: '#808080',
              letterSpacing: '0.2em',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              Full Story Coming
            </div>
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1rem',
              color: '#A0A0A0',
              fontStyle: 'italic'
            }}>
              Building privately through October 2027, then publishing integrated stories
            </p>
          </div>
        </motion.div>
      </section>
      
      {/* Body/Mind/Spirit Framework */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '4rem auto'
      }}>
        <SectionHeader 
          title="Three Domains of Healing"
          subtitle="Body • Mind • Spirit"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <DomainCard
            title="Body"
            icon="💪"
            color="#B4D9C5"
            zodiac="Virgo"
            description="Physical safety, nervous system regulation, somatic healing, medical care, emergency preparedness"
          />
          <DomainCard
            title="Mind"
            icon="⚖️"
            color="#C5B4E3"
            zodiac="Libra"
            description="Mental health support, education access, information literacy, critical thinking, balanced perspective"
          />
          <DomainCard
            title="Spirit"
            icon="🦁"
            color="#E8B4D9"
            zodiac="Leo"
            description="Community connection, identity development, creative expression, moral principles, purpose"
          />
        </div>
      </section>
      
      {/* Your Training */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '4rem auto',
        textAlign: 'center',
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
            fontFamily: '"IM Fell English", serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            What You Already Know
          </h2>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            Surviving adverse childhood experiences gave you a specific set of skills:
          </p>
          <div style={{
            textAlign: 'left',
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'Georgia, serif',
            fontSize: '1.05rem',
            color: '#A0A0A0',
            lineHeight: 2
          }}>
            {[
              'Hypervigilance (constant threat assessment)',
              'Pattern recognition (predicting danger)',
              'Emotional regulation under pressure',
              'Reading power dynamics in any room',
              'Detecting authenticity vs. performance',
              'Navigating impossible double-binds',
              'Maintaining reality against gaslighting',
              'Surviving isolation and scapegoating'
            ].map((skill, i) => (
              <div key={i} style={{
                padding: '0.5rem 0',
                paddingLeft: '2rem',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#E8B4D9'
                }}>★</span>
                {skill}
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.15rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            marginTop: '2rem',
            fontStyle: 'italic'
          }}>
            These aren't deficits. These are resistance skills. You were trained in 
            authoritarian pattern recognition before you had language for it.
          </p>
        </motion.div>
      </section>
      
      {/* Next Steps */}
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
            Where to Go From Here
          </h2>
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            <Link to="/resources">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(180, 217, 197, 0.6)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '1.2rem 3rem',
                  fontSize: '1rem',
                  fontFamily: '"Cinzel", serif',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  background: 'linear-gradient(135deg, #B4D9C5, #B4C5E3)',
                  color: '#0A0A0D',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
              >
                Find Resources
              </motion.button>
            </Link>
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
                  background: 'transparent',
                  color: '#C5B4E3',
                  border: '2px solid #C5B4E3',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
              >
                Learn Patterns
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

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

function DomainCard({ title, icon, color, zodiac, description }) {
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
        textAlign: 'center',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? `0 0 30px ${color}40` : 'none'
      }}
    >
      <div style={{
        fontSize: '3.5rem',
        marginBottom: '1rem',
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
        marginBottom: '0.5rem',
        letterSpacing: '0.05em',
        transition: 'color 0.3s ease'
      }}>
        {title}
      </h3>
      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: '0.9rem',
        color: color,
        fontStyle: 'italic',
        marginBottom: '1.5rem'
      }}>
        {zodiac}
      </div>
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
