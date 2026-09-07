import React from 'react';
import { ShieldCheck, Layers, Award } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid var(--border-subtle)',
      padding: '3.5rem 0 2rem 0',
      color: 'var(--text-muted)',
      width: '100%'
    }}>
      <div style={{ width: '100%', padding: '0 3.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Column 1: Official Logo & Principles */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <img 
                src="/ayush-logo.png" 
                alt="Ministry of Ayush - All India Institute of Ayurveda" 
                style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '440px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              A centralized skill intelligence and opportunity portal connecting students, educational institutions, and industry partners under the Ministry of Ayush & All India Institute of Ayurveda initiative.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-main)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={14} color="var(--accent-primary)" /> Skills over keywords
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Layers size={14} color="var(--accent-primary)" /> Evidence over claims
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Award size={14} color="var(--accent-primary)" /> Readiness over resumes
              </span>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Platform
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
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
            <div style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Stakeholders
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
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
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-light)'
        }}>
          <div>
            © 2026 Ministry of Ayush — All India Institute of Ayurveda. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-subtle)', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0D9488' }}></span>
            Demo Prototype Data Environment
          </div>
        </div>
      </div>
    </footer>
  );
}
