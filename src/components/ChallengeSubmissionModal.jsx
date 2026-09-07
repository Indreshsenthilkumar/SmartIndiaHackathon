import React, { useState } from 'react';
import { X, Send, Code2, CheckCircle2, Award, FileText } from 'lucide-react';

export default function ChallengeSubmissionModal({ challenge, onClose, onSubmitSolution }) {
  if (!challenge) return null;

  const [solutionRepoUrl, setSolutionRepoUrl] = useState('github.com/indresh/cohort-pipeline-solution');
  const [methodology, setMethodology] = useState('Processed 100k event logs using SQL window functions with 420ms query latency.');
  const [prototypeUrl, setPrototypeUrl] = useState('https://demo.vercel.app/cohort-viz');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const submission = {
      challengeId: challenge.id,
      challengeTitle: challenge.title,
      industryPartner: challenge.industryPartner,
      submittedDate: 'Today (7 Sep 2026)',
      solutionRepoUrl,
      methodology,
      prototypeUrl,
      status: 'Submitted — Pending Mentor Review',
      skillsVerified: challenge.skillsVerified
    };

    onSubmitSolution(submission);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '0.4rem' }}>
              FEATURE 2 · INDUSTRY CHALLENGE ENGINE
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Submit Challenge Solution
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {challenge.title} by <strong>{challenge.industryPartner}</strong>
            </p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            {/* Challenge Info Box */}
            <div style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-subtle)',
              padding: '0.85rem 1rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1.25rem',
              fontSize: '0.85rem'
            }}>
              <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                Reward & Skill Verification:
              </div>
              <div style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                {challenge.stipendOrReward}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Solution GitHub Repository / Code URL *</label>
              <div style={{ position: 'relative' }}>
                <Code2 size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                <input
                  type="text"
                  required
                  value={solutionRepoUrl}
                  onChange={(e) => setSolutionRepoUrl(e.target.value)}
                  placeholder="github.com/username/challenge-solution"
                  className="form-input"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Live Prototype / Demo Link (Optional)</label>
              <input
                type="text"
                value={prototypeUrl}
                onChange={(e) => setPrototypeUrl(e.target.value)}
                placeholder="https://your-demo-app.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Technical Approach & Methodology *</label>
              <textarea
                rows="3"
                required
                value={methodology}
                onChange={(e) => setMethodology(e.target.value)}
                placeholder="Briefly describe query optimizations, architecture choices, or design decisions..."
                className="form-textarea"
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <button type="button" onClick={onClose} className="btn btn-secondary btn-sm">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm">
                Submit Solution to Mentors
                <Send size={14} />
              </button>
            </div>
          </form>
        ) : (
          /* Submission Confirmation */
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#F0FDF4',
              color: '#0D9488',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto'
            }}>
              <CheckCircle2 size={30} />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
              Solution Submitted Successfully!
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
              Your submission has been forwarded to industry mentors at <strong>{challenge.industryPartner}</strong>. Upon review, verified skill badges will be automatically awarded to your profile.
            </p>

            <button onClick={onClose} className="btn btn-primary btn-sm">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
