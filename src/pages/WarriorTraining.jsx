import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function WarriorTraining() {
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
            Warrior Training
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.2rem',
            color: '#B0B0B0',
            lineHeight: 1.7,
            fontStyle: 'italic'
          }}>
            Sibhaca - The warrior's dance of sharpening oneself for battle
          </p>
        </motion.div>
      </section>
      
      {/* Sibhaca Explanation */}
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
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            What is Sibhaca?
          </h2>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            marginBottom: '1.5rem'
          }}>
            Sibhaca is a Zulu warrior dance performed before battle-not to threaten 
            the enemy, but to sharpen oneself. High kicks, rhythmic footwork, shields 
            and spears moving in practiced patterns. The warrior demonstrates readiness, 
            builds courage, enters the focused state needed for what comes next.
          </p>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            fontStyle: 'italic'
          }}>
            This is the energy we bring to resistance work: disciplined preparation, 
            visible determination, collective courage-building. Not performance for 
            others-preparation of self.
          </p>
        </motion.div>
      </section>
      
      {/* Core Protocols */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '4rem auto'
      }}>
        <SectionHeader 
          title="Resistance Protocols"
          subtitle="Practical tools for speaking up early"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {protocols.map((protocol, index) => (
            <ProtocolCard key={index} number={index + 1} {...protocol} />
          ))}
        </div>
      </section>
      
      {/* Collective Power */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '4rem auto',
        background: '#0A0A0A',
        borderRadius: '12px',
        border: '1px solid #303030'
      }}>
        <SectionHeader 
          title="One Dissenter Collapses False Consensus"
          subtitle="Why speaking up early matters"
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
            Authoritarian systems require the appearance of unanimous consent. Everyone 
            agreeing, everyone complying, everyone silent about the obvious lie. But 
            that consensus is fragile-it only takes one person to name the truth.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            When you speak up, you're not trying to convince everyone. You're giving 
            permission. Permission for others to see what they already see. Permission 
            to doubt the manufactured consensus. Permission to trust their own judgment.
          </p>
          <p style={{ fontStyle: 'italic', color: '#E8B4D9' }}>
            The emperor has no clothes. Somebody has to say it first. Be that person.
          </p>
        </motion.div>
      </section>
      
      {/* Join the Resistance */}
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
            Ready to Practice?
          </h2>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
            color: '#A0A0A0',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            Learn the framework, recognize the patterns, build collective power
          </p>
          <Link to="/framework">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(232, 180, 217, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1.2rem 3rem',
                fontSize: '1rem',
                fontFamily: '"Cinzel", serif',
                fontWeight: 600,
                letterSpacing: '0.2em',
                background: 'linear-gradient(135deg, #E8B4D9, #C5B4E3)',
                color: '#0A0A0D',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              Learn the Framework
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}

const protocols = [
  {
    title: 'Speak Early, Speak Often',
    color: '#E8B4D9',
    description: 'Don\'t wait for perfect evidence or complete certainty. When something feels wrong, name it. "This doesn\'t feel right to me." The earlier you speak, the lower the stakes, the easier others can join you.',
    tactics: 'Use "I" statements. Share observations without accusations. Ask questions that surface contradictions. Document patterns over time.'
  },
  {
    title: 'Refuse Small Compliances',
    color: '#C5B4E3',
    description: 'Authoritarianism advances through millions of small compliances. Each time you\'re asked to compromise your principles "just this once," you\'re being tested. Practice saying no to small things.',
    tactics: '"I\'m not comfortable with that." "That violates our stated values." "I need to escalate this." No lengthy explanations required.'
  },
  {
    title: 'Document Everything',
    color: '#B4D9C5',
    description: 'Gaslighting requires you to doubt your memory. Written records make gaslighting impossible. Emails, meeting notes, dates, direct quotes. Create an external record of what\'s actually happening.',
    tactics: 'Send follow-up emails after verbal conversations. Keep personal copies outside company systems. Note dates and witnesses. Track pattern changes over time.'
  },
  {
    title: 'Build Coalitions Before Crisis',
    color: '#B4C5E3',
    description: 'Don\'t wait until you\'re isolated to seek allies. Build relationships across boundaries. Create networks of mutual support. Know who shares your values before pressure comes.',
    tactics: 'Regular check-ins with trusted colleagues. Share information across silos. Create private channels for honest communication. Support others who speak up.'
  },
  {
    title: 'Maintain External Validation',
    color: '#E8B4D9',
    description: 'Toxic systems try to become your entire reality. Maintain connections outside the system. Get perspective from people who aren\'t invested in the dysfunction. Trust outside assessment.',
    tactics: 'Professional networks, mentors, therapists, friends in different industries. Regularly reality-check your experiences. Share situations anonymously for feedback.'
  },
  {
    title: 'Know Your Exit Strategy',
    color: '#C5B4E3',
    description: 'You cannot resist effectively from a position of total vulnerability. Financial buffer, transferable skills, alternative options. The ability to leave gives you power to stay and resist.',
    tactics: 'Emergency fund. Updated resume. Professional network. Skills development. Always know what your alternatives are.'
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

function ProtocolCard({ number, title, color, description, tactics }) {
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
        background: '#0A0A0A',
        border: `2px solid ${isHovered ? color : '#303030'}`,
        borderRadius: '8px',
        padding: '2rem',
        transition: 'all 0.3s ease',
        borderLeft: `4px solid ${color}`
      }}
    >
      <div style={{
        fontFamily: '"Cinzel", serif',
        fontSize: '0.8rem',
        color: color,
        letterSpacing: '0.2em',
        marginBottom: '1rem',
        fontWeight: 600,
        textTransform: 'uppercase'
      }}>
        Protocol {number}
      </div>
      <h3 style={{
        fontFamily: '"Cinzel", serif',
        fontSize: '1.6rem',
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
          Tactics
        </div>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.95rem',
          color: '#A0A0A0',
          lineHeight: 1.6
        }}>
          {tactics}
        </p>
      </div>
    </motion.div>
  );
}
