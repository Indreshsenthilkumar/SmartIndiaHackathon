import React, { useState } from 'react';
import { X, Code2, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function ProjectVerificationModal({ onClose, onVerifyProject }) {
  const [repoUrl, setRepoUrl] = useState('github.com/indresh/telemetry-analytics');
  const [projectTitle, setProjectTitle] = useState('User Event Telemetry Pipeline');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleRunAnalysis = (e) => {
    e.preventDefault();
    if (!repoUrl) return;

    setIsAnalyzing(true);
    setAnalysisStep(1);

    // Simulate multi-stage repository static analysis
    setTimeout(() => {
      setAnalysisStep(2);
    }, 900);

    setTimeout(() => {
      setAnalysisStep(3);
    }, 1800);

    setTimeout(() => {
      setIsAnalyzing(false);
      const result = {
        id: `p-${Date.now()}`,
        title: projectTitle || 'Analyzed Project Repository',
        repoUrl: repoUrl,
        languageComposition: 'SQL (62%), Python (28%), JavaScript (10%)',
        complexityScore: 88,
        practicalContribution: '94%',
        status: 'Verified',
        verifiedSkills: ['SQL', 'Python Fundamentals', 'Product Analytics'],
        summary: 'Analyzed 14 source files. Found complex multi-table SQL JOINs, cohort aggregations, and data validation scripts.'
      };
      setAnalysisResult(result);
    }, 2500);
  };

  const handleApplyToTwin = () => {
    if (analysisResult) {
      onVerifyProject(analysisResult);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div>
            <span className="badge badge-teal" style={{ marginBottom: '0.4rem' }}>
              FEATURE 1 · PROJECT-BASED SKILL VERIFICATION
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Analyze Project Repository
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Combine what you know (assessments) with what you can actually build (code evidence) to update your Competency Twin.
            </p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {!analysisResult ? (
          <form onSubmit={handleRunAnalysis}>
            <div className="form-group">
              <label className="form-label">Project Title</label>
              <input
                type="text"
                required
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="e.g. Telemetry Cohort Analysis Pipeline"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">GitHub Repository or Work Sample URL *</label>
              <div style={{ position: 'relative' }}>
                <Code2 size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                <input
                  type="text"
                  required
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="github.com/username/repository"
                  className="form-input"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>
                The engine inspects source code architecture, commit history, language composition, and algorithm complexity.
              </div>
            </div>

            {/* Analysis Progress Screen */}
            {isAnalyzing && (
              <div style={{
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                margin: '1.25rem 0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <Cpu className="spin-icon" size={20} color="var(--accent-primary)" />
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    {analysisStep === 1 && 'Step 1/3: Scanning GitHub repository architecture & commit logs...'}
                    {analysisStep === 2 && 'Step 2/3: Evaluating language composition & query complexity...'}
                    {analysisStep === 3 && 'Step 3/3: Synthesizing Practical Build Capability & Competency Twin...'}
                  </div>
                </div>

                <div style={{ height: '6px', backgroundColor: 'var(--border-subtle)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${analysisStep * 33.3}%`,
                    backgroundColor: 'var(--accent-primary)',
                    transition: 'width 0.4s ease'
                  }} />
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <button type="button" onClick={onClose} className="btn btn-secondary btn-sm" disabled={isAnalyzing}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm" disabled={isAnalyzing}>
                {isAnalyzing ? 'Analyzing Repository...' : 'Run Static Code Analysis'}
              </button>
            </div>
          </form>
        ) : (
          /* Analysis Result Screen */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              backgroundColor: '#F0FDF4',
              border: '1px solid #99F6E4',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <CheckCircle2 size={22} color="#0D9488" style={{ marginTop: '0.1rem' }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0D9488' }}>
                  Static Code Analysis Verified!
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                  {analysisResult.summary}
                </div>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
              gap: '0.75rem',
              textAlign: 'center'
            }}>
              <div className="card" style={{ padding: '0.85rem 0.5rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-light)' }}>COMPLEXITY SCORE</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                  {analysisResult.complexityScore}/100
                </div>
              </div>

              <div className="card" style={{ padding: '0.85rem 0.5rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-light)' }}>PRACTICAL CONTRIBUTION</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0D9488' }}>
                  {analysisResult.practicalContribution}
                </div>
              </div>

              <div className="card" style={{ padding: '0.85rem 0.5rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-light)' }}>STATUS</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0D9488', marginTop: '0.2rem' }}>
                  Verified
                </div>
              </div>
            </div>

            {/* Verified Skills Signal */}
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true, marginBottom: '0.4rem' }}>
                DEMONSTRATED PRACTICAL SKILLS:
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {analysisResult.verifiedSkills.map((sk, idx) => (
                  <span key={idx} className="badge badge-teal">
                    ✓ {sk} (Code Verified)
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <button onClick={onClose} className="btn btn-secondary btn-sm">
                Close
              </button>
              <button onClick={handleApplyToTwin} className="btn btn-primary btn-sm">
                Apply to Competency Twin
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
