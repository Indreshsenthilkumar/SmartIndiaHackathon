import React, { useState } from 'react';
import { Award, Clock, ArrowRight, CheckCircle2, Building2, Send, Sparkles, Filter } from 'lucide-react';
import ChallengeSubmissionModal from '../components/ChallengeSubmissionModal';

export default function ChallengesPage({ challenges, onSubmitSolution, studentSubmissions = [] }) {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredChallenges = challenges.filter(c => activeFilter === 'All' || c.domain.includes(activeFilter));

  return (
    <div style={{ padding: '2.5rem 0 4rem 0', minHeight: '80vh' }}>
      <div className="max-width-wrapper">
        {/* Page Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="eyebrow">NOVELTY FEATURE 2 · INDUSTRY CHALLENGE ENGINE</div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
            Real-World Industry Problem Statements
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Solve actual challenges published by industry partners to validate your capabilities and earn verified skill badges before interview rounds.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', overflowX: 'auto' }}>
          {['All', 'Data Analytics', 'Product', 'Cloud'].map((filt) => (
            <button
              key={filt}
              onClick={() => setActiveFilter(filt)}
              style={{
                background: activeFilter === filt ? 'var(--accent-light)' : 'var(--bg-card)',
                border: activeFilter === filt ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)',
                color: activeFilter === filt ? 'var(--accent-primary)' : 'var(--text-muted)',
                padding: '0.4rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: activeFilter === filt ? 700 : 500,
                fontSize: '0.825rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {filt === 'All' ? 'All Industry Domains' : filt}
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredChallenges.map((chal) => {
            const hasSubmitted = studentSubmissions.some(s => s.challengeId === chal.id);

            return (
              <div key={chal.id} className="card card-hover" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <span className="badge badge-blue" style={{ marginBottom: '0.35rem' }}>
                      {chal.domain}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {chal.title}
                    </h3>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--accent-primary)', marginTop: '0.15rem' }}>
                      {chal.industryPartner}
                    </div>
                  </div>

                  <span className="badge badge-teal">
                    {chal.difficulty}
                  </span>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem', flex: 1 }}>
                  {chal.description}
                </p>

                {/* Reward Box */}
                <div style={{
                  backgroundColor: 'var(--accent-light)',
                  border: '1px solid var(--accent-border)',
                  padding: '0.75rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  color: 'var(--text-main)',
                  marginBottom: '1rem'
                }}>
                  <strong style={{ color: 'var(--accent-primary)' }}>Validation Reward:</strong> {chal.stipendOrReward}
                </div>

                {/* Problem Specs */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true, marginBottom: '0.35rem' }}>
                    Key Challenge Requirements:
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {chal.problemDetails.slice(0, 2).map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Footer Controls */}
                <div style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.85rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto'
                }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={13} /> Deadline: {chal.deadline}
                  </div>

                  <button
                    onClick={() => setSelectedChallenge(chal)}
                    className="btn btn-primary btn-sm"
                    disabled={hasSubmitted}
                  >
                    {hasSubmitted ? '✓ Solution Submitted' : 'Solve & Submit Solution'}
                    {!hasSubmitted && <ArrowRight size={14} />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Submission Modal */}
      {selectedChallenge && (
        <ChallengeSubmissionModal
          challenge={selectedChallenge}
          onClose={() => setSelectedChallenge(null)}
          onSubmitSolution={(sub) => {
            onSubmitSolution(sub);
            setSelectedChallenge(null);
          }}
        />
      )}
    </div>
  );
}
