import React, { useState } from 'react';
import { X, Send, Code2, CheckCircle2, Award, FileText, Globe, Sparkles } from 'lucide-react';

export default function ChallengeSubmissionModal({ challenge, onClose, onSubmitSolution }) {
  const [solutionRepoUrl, setSolutionRepoUrl] = useState('https://github.com/indresh/edge-ai-defect-solution');
  const [methodology, setMethodology] = useState('Lightweight MobileNetV3 backbone fine-tuned on industrial surface dataset with 97.4% mAP and sub-15ms edge inference.');
  const [prototypeUrl, setPrototypeUrl] = useState('https://demo.vercel.app/edge-defect-detector');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!challenge) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const submission = {
      challengeId: challenge.id,
      challengeTitle: challenge.title,
      industryPartner: challenge.industryPartner || challenge.host,
      submittedDate: 'Today (Live)',
      solutionRepoUrl,
      methodology,
      prototypeUrl,
      status: 'Submitted — Pending Mentor Review',
      skillsVerified: challenge.skillsVerified || challenge.tags || ['Innovation']
    };

    onSubmitSolution(submission);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ 
          maxWidth: '580px',
          background: '#FFFFFF',
          borderRadius: '20px',
          padding: '28px',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
          border: '1px solid #E2E8F0',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: '#EFF6FF',
              color: '#2563EB',
              border: '1px solid #BFDBFE',
              padding: '3px 10px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 800,
              marginBottom: '6px'
            }}>
              <Sparkles size={12} />
              <span>INDUSTRY CHALLENGE SUBMISSION</span>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>
              Submit Challenge Solution
            </h3>
            <p style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>
              {challenge.title} · <strong style={{ color: '#2563EB' }}>{challenge.industryPartner || challenge.host}</strong>
            </p>
          </div>
          <button 
            onClick={onClose} 
            style={{ 
              background: '#F1F5F9', 
              border: 'none', 
              color: '#64748B', 
              cursor: 'pointer',
              width: '32px',
              height: '32px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Challenge Info Box */}
            <div style={{
              backgroundColor: '#FEF3C7',
              border: '1px solid #FDE68A',
              padding: '12px 16px',
              borderRadius: '12px',
              fontSize: '13px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: 800, color: '#B45309' }}>
                  Reward & Verification Badge:
                </div>
                <div style={{ color: '#92400E', fontWeight: 600, fontSize: '12.5px' }}>
                  {challenge.stipendOrReward || challenge.prizePool || '₹ 2,50,000 + Direct Interview PPIs'}
                </div>
              </div>
              <span style={{ fontSize: '11.5px', fontWeight: 800, background: '#FDE68A', color: '#92400E', padding: '3px 8px', borderRadius: '6px' }}>
                Verified by Recruiter
              </span>
            </div>

            {/* Repo URL */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                Solution GitHub Repository / Code URL *
              </label>
              <div style={{ position: 'relative' }}>
                <Code2 size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
                <input
                  type="text"
                  required
                  value={solutionRepoUrl}
                  onChange={(e) => setSolutionRepoUrl(e.target.value)}
                  placeholder="https://github.com/username/challenge-solution"
                  className="form-input"
                  style={{ paddingLeft: '38px' }}
                />
              </div>
            </div>

            {/* Prototype Link */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                Live Prototype / Demo Link (Optional)
              </label>
              <div style={{ position: 'relative' }}>
                <Globe size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
                <input
                  type="text"
                  value={prototypeUrl}
                  onChange={(e) => setPrototypeUrl(e.target.value)}
                  placeholder="https://your-demo-app.vercel.app"
                  className="form-input"
                  style={{ paddingLeft: '38px' }}
                />
              </div>
            </div>

            {/* Methodology */}
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" style={{ fontSize: '13px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                Technical Approach & Architecture Methodology *
              </label>
              <textarea
                rows="3"
                required
                value={methodology}
                onChange={(e) => setMethodology(e.target.value)}
                placeholder="Briefly describe your algorithm optimizations, model choices, or architectural decisions..."
                className="form-textarea"
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Footer Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '8px', borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
              <button 
                type="button" 
                onClick={onClose} 
                className="btn-secondary"
                style={{ padding: '9px 18px', fontSize: '13px' }}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn-primary"
                style={{ padding: '9px 20px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Submit Solution to Mentors</span>
                <Send size={14} />
              </button>
            </div>
          </form>
        ) : (
          /* Submission Confirmation */
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '9999px',
              backgroundColor: '#DCFCE7',
              color: '#16A34A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              border: '2px solid #BBF7D0'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
              Solution Submitted Successfully!
            </h3>
            <p style={{ fontSize: '13.5px', color: '#64748B', maxWidth: '440px', margin: '0 auto 20px auto', lineHeight: 1.5 }}>
              Your solution repository has been forwarded directly to hiring mentors at <strong>{challenge.industryPartner || challenge.host}</strong>. Upon review, verified competency badges and interview shortlists will appear in your profile.
            </p>

            <button 
              onClick={onClose} 
              className="btn-primary"
              style={{ padding: '10px 24px', fontSize: '13.5px', margin: '0 auto' }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

