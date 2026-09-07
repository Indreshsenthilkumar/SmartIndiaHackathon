import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, DollarSign, Briefcase, CheckCircle2, AlertCircle, Bookmark, Send, HelpCircle } from 'lucide-react';

export default function OpportunityDetailPage({ opportunity, onBack, onApply, isApplied, isSaved, onToggleSave, onOpenMatchModal }) {
  if (!opportunity) return null;

  const [appliedState, setAppliedState] = useState(isApplied);

  const handleApplyClick = () => {
    setAppliedState(true);
    onApply(opportunity);
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem 0', minHeight: '80vh' }}>
      <div className="max-width-wrapper" style={{ maxWidth: '960px' }}>
        {/* Back link */}
        <button
          onClick={onBack}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={16} /> Back to Opportunities
        </button>

        {/* Opportunity Header Card */}
        <div className="card" style={{ padding: '1.75rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="badge badge-blue">{opportunity.type}</span>
                <span className="badge badge-gray">{opportunity.experienceLevel}</span>
              </div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                {opportunity.title}
              </h1>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-primary)', marginTop: '0.25rem' }}>
                {opportunity.company}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
              <button
                onClick={() => onOpenMatchModal(opportunity)}
                className={`badge ${opportunity.matchScore >= 80 ? 'badge-teal' : 'badge-blue'}`}
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                {opportunity.matchLabel} ({opportunity.matchScore}%)
              </button>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                Posted {opportunity.postedDate}
              </span>
            </div>
          </div>

          {/* Quick Meta Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            backgroundColor: 'var(--bg-subtle)',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.875rem'
          }}>
            <div>
              <div style={{ color: 'var(--text-light)', fontSize: '0.75rem', fontWeight: 600 }}>LOCATION & MODE</div>
              <div style={{ fontWeight: 700, color: 'var(--text-main)', marginTop: '0.15rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} color="var(--accent-primary)" /> {opportunity.location} ({opportunity.workMode})
              </div>
            </div>
            <div>
              <div style={{ color: 'var(--text-light)', fontSize: '0.75rem', fontWeight: 600 }}>DURATION</div>
              <div style={{ fontWeight: 700, color: 'var(--text-main)', marginTop: '0.15rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={14} color="var(--accent-primary)" /> {opportunity.duration}
              </div>
            </div>
            <div>
              <div style={{ color: 'var(--text-light)', fontSize: '0.75rem', fontWeight: 600 }}>COMPENSATION / STIPEND</div>
              <div style={{ fontWeight: 700, color: 'var(--text-main)', marginTop: '0.15rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <DollarSign size={14} color="var(--accent-primary)" /> {opportunity.stipend}
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={handleApplyClick}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.925rem' }}
              disabled={appliedState}
            >
              {appliedState ? '✓ Application Submitted' : 'Apply Now'}
              {!appliedState && <Send size={15} />}
            </button>

            <button
              onClick={() => onToggleSave(opportunity.id)}
              className="btn btn-secondary"
            >
              <Bookmark size={15} fill={isSaved ? 'var(--text-main)' : 'none'} />
              {isSaved ? 'Saved' : 'Save Opportunity'}
            </button>

            <button
              onClick={() => onOpenMatchModal(opportunity)}
              className="btn btn-ghost"
              style={{ color: 'var(--accent-primary)', fontWeight: 600 }}
            >
              <HelpCircle size={15} /> Why am I seeing this match?
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Left Column: Description & Responsibilities */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                About the Opportunity
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {opportunity.description}
              </p>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.85rem' }}>
                What You'll Work On
              </h3>
              <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {opportunity.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                Eligibility Criteria
              </h3>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <strong>Education:</strong> {opportunity.eligibility}
              </div>
            </div>
          </div>

          {/* Right Column: Skill Match Breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Match Box */}
            <div className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', border: '1px solid var(--accent-border)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, uppercase: true, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                YOUR SKILL MATCH ANALYTICS
              </div>

              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                {opportunity.matchLabel} ({opportunity.matchScore}%)
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.4 }}>
                You already meet most of the recommended skills for this role.
              </p>

              {/* Matched list */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0D9488', marginBottom: '0.35rem' }}>
                  MATCHED ({opportunity.matchedSkills.length})
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {opportunity.matchedSkills.map((s, idx) => (
                    <span key={idx} className="badge badge-teal">✓ {s}</span>
                  ))}
                </div>
              </div>

              {/* Developing */}
              {opportunity.developingSkills.length > 0 && (
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.35rem' }}>
                    DEVELOPING ({opportunity.developingSkills.length})
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {opportunity.developingSkills.map((s, idx) => (
                      <span key={idx} className="badge badge-blue">• {s}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Missing Gaps */}
              {opportunity.missingSkills && opportunity.missingSkills.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--warning-text)', marginBottom: '0.35rem' }}>
                    SKILL GAP ({opportunity.missingSkills.length})
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {opportunity.missingSkills.map((s, idx) => (
                      <span key={idx} className="badge badge-amber">! {s}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Next Best Action Card */}
            <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--warning-bg)', border: '1px solid var(--warning-border)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, uppercase: true, color: 'var(--warning-text)', marginBottom: '0.5rem' }}>
                WHAT TO DO NEXT
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                Complete Product Analytics Lab
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '0.85rem' }}>
                Completing this lab will turn your developing skill into a verified portfolio project, increasing match confidence.
              </p>
              <button 
                onClick={onBack}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%' }}
              >
                View Recommended Learning Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
