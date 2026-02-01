import React from 'react';
import { motion } from 'framer-motion';

export default function Resources() {
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
            Resources
          </h1>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.2rem',
            color: '#B0B0B0',
            lineHeight: 1.7,
            fontStyle: 'italic'
          }}>
            Organized by Body, Mind, and Spirit domains
          </p>
        </motion.div>
      </section>
      
      {/* Body Resources */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <SectionHeader 
          icon="💪"
          title="Body"
          subtitle="Physical safety, health, nervous system regulation"
          color="#B4D9C5"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {bodyResources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </section>
      
      {/* Mind Resources */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '4rem auto',
        background: '#0A0A0A',
        borderRadius: '12px'
      }}>
        <SectionHeader 
          icon="⚖️"
          title="Mind"
          subtitle="Mental health, education, information access"
          color="#C5B4E3"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {mindResources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </section>
      
      {/* Spirit Resources */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '4rem auto'
      }}>
        <SectionHeader 
          icon="🦁"
          title="Spirit"
          subtitle="Community, identity, healing practices"
          color="#E8B4D9"
        />
        
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {spiritResources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </section>
      
      {/* Additional Support */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '4rem auto',
        background: '#0A0A0A',
        borderRadius: '12px',
        border: '1px solid #303030',
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
            Additional Support
          </h2>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.05rem',
            color: '#C0C0C0',
            lineHeight: 1.8,
            textAlign: 'left',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: '#E8B4D9' }}>Financial Assistance:</strong> Many 
              organizations offer emergency funds, utility assistance, and mutual aid networks
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: '#C5B4E3' }}>Legal Support:</strong> Know your rights, 
              access free legal consultation, understand employment protections
            </p>
            <p>
              <strong style={{ color: '#B4D9C5' }}>Crisis Resources:</strong> If you're in 
              immediate danger, call 911. For mental health crises, call 988 Suicide & Crisis Lifeline
            </p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

const bodyResources = [
  {
    title: 'FindHelp.org',
    color: '#B4D9C5',
    description: 'Search for medical care, food assistance, housing support, and other physical safety resources in your area',
    url: 'findhelp.org'
  },
  {
    title: 'Ready.gov/Plan',
    color: '#B4D9C5',
    description: 'Emergency preparedness planning, disaster response guides, building resilience infrastructure',
    url: 'ready.gov/plan'
  },
  {
    title: 'Somatic Practices',
    color: '#B4D9C5',
    description: 'Yoga, tai chi, EMDR therapy, body-based trauma healing-nervous system regulation as resistance infrastructure',
    url: null
  }
];

const mindResources = [
  {
    title: 'CHPL.org',
    color: '#C5B4E3',
    description: 'Chicago Public Library - free education resources, digital access, research databases. Model for public library systems nationwide',
    url: 'chpl.org'
  },
  {
    title: 'Ground News',
    color: '#C5B4E3',
    description: 'Compare media coverage, spot bias, build media literacy. See how different outlets frame the same story',
    url: 'groundnews.com'
  },
  {
    title: 'Substack',
    color: '#C5B4E3',
    description: 'Independent journalism and expert analysis outside corporate media gatekeeping',
    url: 'substack.com'
  }
];

const spiritResources = [
  {
    title: 'Community Organizing',
    color: '#E8B4D9',
    description: 'Local mutual aid networks, grassroots resistance groups, solidarity organizations in your area',
    url: null
  },
  {
    title: 'Identity Development',
    color: '#E8B4D9',
    description: 'Resources for LGBTQ+, BIPOC, disabled, neurodivergent, and other marginalized communities building collective power',
    url: null
  },
  {
    title: 'Healing Circles',
    color: '#E8B4D9',
    description: 'Community-based healing practices, peer support, restorative justice frameworks',
    url: null
  }
];

function SectionHeader({ icon, title, subtitle, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', marginBottom: '2rem' }}
    >
      <div style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        filter: `drop-shadow(0 0 15px ${color})`
      }}>
        {icon}
      </div>
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
        letterSpacing: '0.05em',
        color
      }}>
        {title}
      </h2>
    </motion.div>
  );
}

function ResourceCard({ title, color, description, url }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const CardWrapper = url ? 'a' : 'div';
  const wrapperProps = url ? {
    href: `https://${url}`,
    target: '_blank',
    rel: 'noopener noreferrer',
    style: { textDecoration: 'none' }
  } : {};
  
  return (
    <CardWrapper {...wrapperProps}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          background: 'rgba(10, 10, 10, 0.5)',
          border: `2px solid ${isHovered ? color : '#303030'}`,
          borderRadius: '8px',
          padding: '2rem',
          height: '100%',
          transition: 'all 0.3s ease',
          boxShadow: isHovered ? `0 0 30px ${color}40` : 'none',
          cursor: url ? 'pointer' : 'default'
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
          {title}
        </h3>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.95rem',
          color: '#A0A0A0',
          lineHeight: 1.6,
          marginBottom: url ? '1rem' : '0'
        }}>
          {description}
        </p>
        {url && (
          <div style={{
            fontFamily: '"Cinzel", serif',
            fontSize: '0.85rem',
            color,
            letterSpacing: '0.1em'
          }}>
            {url} →
          </div>
        )}
      </motion.div>
    </CardWrapper>
  );
}
