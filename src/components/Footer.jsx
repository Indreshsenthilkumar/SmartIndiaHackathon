import React from 'react';
import { ShieldCheck, Layers, Award } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid var(--border-subtle)',
      padding: '2rem 0 1.25rem 0',
      color: 'var(--text-muted)',
      width: '100%'
    }}>
      <div className="footer-wrapper">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.75rem',
          marginBottom: '1.5rem'
        }}>
          {/* Column 1: Official Logo & Principles */}
          <div className="footer-logo-col" style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <img 
                src="/ayush-logo.png" 
                alt="Ministry of Ayush - All India Institute of Ayurveda" 
                style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '440px', lineHeight: 1.5, marginBottom: '0.85rem' }}>
              A centralized skill intelligence and opportunity portal connecting students, educational institutions, and industry partners under the Ministry of Ayush & All India Institute of Ayurveda initiative.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <ShieldCheck size={13} color="var(--accent-primary)" /> Skills over keywords
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Layers size={13} color="var(--accent-primary)" /> Evidence over claims
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Award size={13} color="var(--accent-primary)" /> Readiness over resumes
              </span>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
              Platform
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.825rem' }}>
              <li>
                <button onClick={() => onNavigate('/opportunities')} style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer' }}>
                  Explore Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/challenges')} style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer' }}>
                  Industry Challenges
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/skills')} style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer' }}>
                  Skills & Pathways
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer' }}>
                  About Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Stakeholders */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
              Stakeholders
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.825rem' }}>
              <li>
                <button onClick={() => onNavigate('/students')} style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer' }}>
                  For Students
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/institutions')} style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer' }}>
                  For Institutions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/industry')} style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer' }}>
                  For Industry
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/academicians')} style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer' }}>
                  For Academicians
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontSize: '0.78rem',
          color: 'var(--text-light)'
        }}>
          <div>
            © 2026 Ministry of Ayush — All India Institute of Ayurveda. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--bg-subtle)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#0D9488' }}></span>
            Demo Prototype Data Environment
          </div>
        </div>
      </div>
    </footer>
  );
}
