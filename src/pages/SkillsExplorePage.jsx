import React, { useState } from 'react';
import { Search, Compass, BookOpen, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { skillsCatalog, careerPaths } from '../data/mockData';

export default function SkillsExplorePage({ onNavigate }) {
  const [selectedPath, setSelectedPath] = useState(careerPaths[0]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div style={{ padding: '2.5rem 0 4rem 0', minHeight: '80vh' }}>
      <div className="max-width-wrapper">
        {/* Page Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="eyebrow">SKILLS INTELLIGENCE CATALOG</div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
            Explore Career Skills & Pathways
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Understand skill taxonomies, core competency requirements, and step-by-step learning pathways.
          </p>
        </div>

        {/* Career Pathways Selector Section */}
        <div className="card" style={{ padding: '1.75rem', marginBottom: '2.5rem', backgroundColor: '#FFFFFF' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
            Step-by-Step Career Pathways
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Select a target career role to view its structured skill development progression:
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', overflowX: 'auto' }}>
            {careerPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path)}
                style={{
                  background: selectedPath.id === path.id ? 'var(--accent-light)' : 'var(--bg-main)',
                  border: selectedPath.id === path.id ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  color: selectedPath.id === path.id ? 'var(--accent-primary)' : 'var(--text-main)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: selectedPath.id === path.id ? 700 : 500,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {path.role}
              </button>
            ))}
          </div>

          {/* Path Details */}
          <div style={{
            backgroundColor: 'var(--bg-main)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
              Target Role: {selectedPath.role}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
              {selectedPath.overview}
            </p>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true, marginBottom: '0.4rem' }}>
                CORE SKILLS REQUIRED:
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {selectedPath.coreSkills.map((sk, idx) => (
                  <span key={idx} className="badge badge-blue">{sk}</span>
                ))}
              </div>
            </div>

            {/* Progression Steps */}
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true, marginBottom: '0.75rem' }}>
              LEARNING PROGRESSION PATHWAY:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {selectedPath.steps.map((s, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{ fontWeight: 800, color: 'var(--accent-primary)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                    {s.step}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.25rem', textAlign: 'right' }}>
              <button onClick={() => onNavigate('/opportunities')} className="btn btn-primary btn-sm">
                View Related Opportunities
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Skills Taxonomy Catalog */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.25rem' }}>
          Skill Taxonomy by Domain
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {skillsCatalog.map((cat, idx) => (
            <div key={idx} className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                {cat.category}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.4 }}>
                {cat.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cat.skillsList.map((sk, sIdx) => (
                  <span key={sIdx} className="badge badge-gray">{sk}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
