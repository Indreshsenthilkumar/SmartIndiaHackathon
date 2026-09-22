import React from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, HelpCircle } from 'lucide-react';

export default function MatchModal({ opportunity, onClose, onApply, isApplied }) {
  if (!opportunity) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div>
            <span className={`badge ${
              opportunity.matchScore >= 80 ? 'badge-teal' :
              opportunity.matchScore >= 60 ? 'badge-blue' : 'badge-amber'
            }`} style={{ marginBottom: '0.5rem' }}>
              {opportunity.matchLabel} ({opportunity.matchScore}% Score)
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
              Why this match?
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {opportunity.title} at <strong>{opportunity.company}</strong>
            </p>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer', padding: '0.25rem' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Transparent Score Breakdown Box */}
        <div style={{
          backgroundColor: 'var(--accent-light)',
          border: '1px solid var(--accent-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          color: 'var(--text-main)',
          lineHeight: 1.5
        }}>
          <strong>Matching Logic Breakdown:</strong>
          <br />
          You meet <strong>{opportunity.matchedSkills.length}</strong> out of <strong>{opportunity.requiredSkills.length}</strong> core required skills for this role, with <strong>{opportunity.developingSkills.length}</strong> skill currently in active development.
        </div>

        {/* Detailed Skills Categorization */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
          {/* Matched Skills */}
          {opportunity.matchedSkills.length > 0 && (
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, uppercase: true, color: 'var(--success-text)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={15} /> Matched Skills ({opportunity.matchedSkills.length})
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {opportunity.matchedSkills.map((skill, idx) => (
                  <span key={idx} className="badge badge-teal">
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Developing Skills */}
          {opportunity.developingSkills.length > 0 && (
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, uppercase: true, color: 'var(--accent-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <HelpCircle size={15} /> Developing Skills ({opportunity.developingSkills.length})
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {opportunity.developingSkills.map((skill, idx) => (
                  <span key={idx} className="badge badge-blue">
                    • {skill} (In Progress)
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Missing Skill Gaps */}
          {opportunity.missingSkills && opportunity.missingSkills.length > 0 && (
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, uppercase: true, color: 'var(--warning-text)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <AlertCircle size={15} /> Skill Gap to Build ({opportunity.missingSkills.length})
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {opportunity.missingSkills.map((skill, idx) => (
                  <span key={idx} className="badge badge-amber">
                    ! {skill} (Recommended Action)
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close
          </button>
          <button 
            onClick={() => {
              onApply(opportunity);
              onClose();
            }} 
            className="btn btn-primary btn-sm"
            disabled={isApplied}
          >
            {isApplied ? 'Application Submitted' : 'Apply Now'}
            {!isApplied && <ArrowRight size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
}
