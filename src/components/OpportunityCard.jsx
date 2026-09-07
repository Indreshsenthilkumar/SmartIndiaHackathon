import React from 'react';
import { MapPin, Clock, DollarSign, Sparkles, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';

export default function OpportunityCard({ opportunity, onSelect, onOpenMatchModal, isApplied, isSaved, onToggleSave }) {
  const matchClass = 
    opportunity.matchScore >= 80 ? 'badge-teal' :
    opportunity.matchScore >= 60 ? 'badge-blue' : 'badge-amber';

  return (
    <div className="card card-hover" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <div>
          <span className="badge badge-gray" style={{ marginBottom: '0.4rem' }}>
            {opportunity.type}
          </span>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.3 }}>
            {opportunity.title}
          </h3>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-primary)', marginTop: '0.15rem' }}>
            {opportunity.company}
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenMatchModal(opportunity);
          }}
          className={`badge ${matchClass}`}
          style={{ cursor: 'pointer', border: '1px solid transparent', padding: '0.35rem 0.65rem' }}
          title="Click to view transparent match analysis"
        >
          <Sparkles size={12} />
          {opportunity.matchLabel}
        </button>
      </div>

      {/* Meta Info Line */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.85rem',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        marginBottom: '1rem'
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <MapPin size={13} /> {opportunity.location} ({opportunity.workMode})
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Clock size={13} /> {opportunity.duration}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <DollarSign size={13} /> {opportunity.stipend}
        </span>
      </div>

      {/* Skills Required */}
      <div style={{ marginBottom: '1.25rem', flex: 1 }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
          Key Skills Required:
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {opportunity.requiredSkills.map((skill, idx) => {
            const isMatched = opportunity.matchedSkills.includes(skill);
            return (
              <span
                key={idx}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '6px',
                  backgroundColor: isMatched ? 'var(--accent-light)' : 'var(--bg-subtle)',
                  color: isMatched ? 'var(--accent-primary)' : 'var(--text-muted)',
                  border: isMatched ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)',
                  fontWeight: isMatched ? 600 : 500
                }}
              >
                {isMatched ? '✓ ' : ''}{skill}
              </span>
            );
          })}
        </div>
      </div>

      {/* Footer Actions */}
      <div style={{
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '0.85rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem'
      }}>
        <button
          onClick={() => onOpenMatchModal(opportunity)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-light)',
            fontSize: '0.78rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            cursor: 'pointer'
          }}
        >
          <HelpCircle size={13} />
          Why this match?
        </button>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            onClick={() => onSelect(opportunity)}
            className="btn btn-secondary btn-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
