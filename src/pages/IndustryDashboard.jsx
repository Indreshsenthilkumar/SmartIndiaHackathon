import React, { useState } from 'react';
import { Briefcase, Users, Building2, PlusCircle, CheckCircle2, ArrowRight, MapPin, DollarSign, Search, ShieldCheck } from 'lucide-react';
import MobileBottomNav from '../components/MobileBottomNav';

export default function IndustryDashboard({ industry, opportunities, onAddOpportunity, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, post, candidates, collaborations
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Form State for Create Opportunity
  const [formData, setFormData] = useState({
    title: '',
    company: 'Vertex Digital Solutions',
    type: 'Internship',
    workMode: 'Hybrid',
    location: 'Bengaluru',
    duration: '3 months',
    stipend: '₹25,000 / mo',
    eligibility: 'B.Tech / B.E (2025-2026 Batch)',
    description: '',
    requiredSkillsStr: 'SQL, Python Fundamentals, Communication'
  });

  const handlePublishSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;

    const skillsArray = formData.requiredSkillsStr.split(',').map(s => s.trim()).filter(Boolean);

    const newOpp = {
      id: `opp-${Date.now()}`,
      title: formData.title,
      company: formData.company,
      location: formData.location,
      workMode: formData.workMode,
      type: formData.type,
      duration: formData.duration,
      stipend: formData.stipend,
      experienceLevel: 'Student / Entry-Level',
      requiredSkills: skillsArray,
      matchedSkills: skillsArray.slice(0, 2),
      developingSkills: skillsArray.slice(2),
      missingSkills: [],
      matchScore: 88,
      matchLabel: 'Strong match',
      eligibility: formData.eligibility,
      description: formData.description || 'Published via ALIGN Industry Portal demo state.',
      responsibilities: [
        'Collaborate with cross-functional software & data leads.',
        'Execute weekly project sprint milestones.',
        'Present project deliverables to engineering mentors.'
      ],
      postedDate: 'Just now',
      applicantsCount: 0
    };

    onAddOpportunity(newOpp);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);

    // Reset Form
    setFormData({
      title: '',
      company: 'Vertex Digital Solutions',
      type: 'Internship',
      workMode: 'Hybrid',
      location: 'Bengaluru',
      duration: '3 months',
      stipend: '₹25,000 / mo',
      eligibility: 'B.Tech / B.E (2025-2026 Batch)',
      description: '',
      requiredSkillsStr: 'SQL, Python Fundamentals, Communication'
    });

    setActiveTab('overview');
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '90vh', paddingBottom: '4rem' }}>
      {/* Toast Notification */}
      {showSuccessToast && (
        <div style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          backgroundColor: '#F0FDF4',
          border: '1px solid #99F6E4',
          color: '#0D9488',
          padding: '0.85rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 1000,
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <CheckCircle2 size={18} /> Opportunity Published & Added to Local State!
        </div>
      )}

      {/* Industry Banner Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '1.5rem 0'
      }}>
        <div className="max-width-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">INDUSTRY PORTAL</div>
              <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                Build your early-career talent pipeline
              </h1>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Define the skills you need, discover relevant candidates, and create meaningful industry-academia collaborations.
              </div>
            </div>

            <button onClick={() => setActiveTab('post')} className="btn btn-primary btn-sm">
              <PlusCircle size={15} /> Publish New Opportunity
            </button>
          </div>

          {/* Nav Tabs */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginTop: '1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            overflowX: 'auto'
          }}>
            {[
              { id: 'overview', label: 'Overview', icon: Briefcase },
              { id: 'post', label: 'Create Opportunity', icon: PlusCircle },
              { id: 'candidates', label: 'Candidate Discovery', icon: Users },
              { id: 'collaborations', label: 'Institutional Collaborations', icon: Building2 }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    borderBottom: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                    padding: '0.65rem 1rem',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-width-wrapper" style={{ marginTop: '2rem' }}>
        {/* KPI Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2rem'
        }}>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>ACTIVE OPPORTUNITIES</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
              {opportunities.length}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Published Listings</div>
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>MATCHING CANDIDATES</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0D9488', marginTop: '0.2rem' }}>
              {industry.matchingCandidatePool}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Assessed Skill Baseline</div>
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>INSTITUTION PARTNERS</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
              {industry.institutionPartners}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Consortium Universities</div>
          </div>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Action Banner */}
            <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent-border)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Find candidates based on verified skills rather than resume keywords alone.
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem', marginBottom: '1rem' }}>
                ALIGN maps required role skills directly against university student self-assessments and lab evidence.
              </p>
              <button onClick={() => setActiveTab('candidates')} className="btn btn-primary btn-sm">
                Explore Matching Candidates Pool
              </button>
            </div>

            {/* Active Listings Grid */}
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1rem' }}>
                Your Published Opportunities ({opportunities.length})
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
                {opportunities.map((opp) => (
                  <div key={opp.id} className="card" style={{ padding: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span className="badge badge-gray">{opp.type}</span>
                      <span className="badge badge-teal">{opp.applicantsCount || 42} Applicants</span>
                    </div>

                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.5rem' }}>
                      {opp.title}
                    </h4>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                      {opp.location} ({opp.workMode}) · {opp.stipend}
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', marginTop: '0.85rem' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true, marginBottom: '0.35rem' }}>
                        Required Skills:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {opp.requiredSkills.map((sk, idx) => (
                          <span key={idx} className="badge badge-blue">{sk}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Create Opportunity Form */}
        {activeTab === 'post' && (
          <div className="card" style={{ padding: '2rem', maxWidth: '750px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="eyebrow">PUBLISH OPPORTUNITY</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Define Required Skills & Role
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Specify role parameters and required skills to match candidate profiles transparently.
              </p>
            </div>

            <form onSubmit={handlePublishSubmit}>
              <div className="form-group">
                <label className="form-label">Role Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Data & Product Operations Intern"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Opportunity Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="form-select"
                  >
                    <option value="Internship">Internship</option>
                    <option value="Jobs">Entry-Level Role</option>
                    <option value="Projects">Live Project</option>
                    <option value="Learning">Learning Program</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Work Mode</label>
                  <select
                    value={formData.workMode}
                    onChange={(e) => setFormData({ ...formData, workMode: e.target.value })}
                    className="form-select"
                  >
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru / Chennai"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 3 months / Full-time"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Stipend / Compensation</label>
                <input
                  type="text"
                  placeholder="e.g. ₹25,000 / mo"
                  value={formData.stipend}
                  onChange={(e) => setFormData({ ...formData, stipend: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Required Skills (Comma separated) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SQL, Excel & Data Modeling, Python Fundamentals, Communication"
                  value={formData.requiredSkillsStr}
                  onChange={(e) => setFormData({ ...formData, requiredSkillsStr: e.target.value })}
                  className="form-input"
                />
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>
                  Candidate match scores will be calculated directly against these listed skills.
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Short Role Description</label>
                <textarea
                  rows="3"
                  placeholder="Describe key responsibilities and expectations..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Publish Opportunity to Network
              </button>
            </form>
          </div>
        )}

        {/* Tab 3: Candidate Discovery */}
        {activeTab === 'candidates' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Matching Candidates Pool</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Candidates with evidence-backed skill profiles matching active role requirements.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {industry.matchingCandidates.map((cand) => (
                <div key={cand.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>{cand.name}</h3>
                      <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{cand.degree}</div>
                    </div>
                    <span className="badge badge-teal">{cand.matchLabel} ({cand.readinessScore}%)</span>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                    <strong>Evidence:</strong> {cand.evidence}
                  </div>

                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true, marginBottom: '0.35rem' }}>
                    Assessed Skills:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                    {cand.skills.map((s, idx) => (
                      <span key={idx} className="badge badge-blue">✓ {s}</span>
                    ))}
                  </div>

                  <button className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
                    View Full Profile & Evidence
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Institutional Collaborations */}
        {activeTab === 'collaborations' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Institutional Collaborations</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Industry-sponsored faculty development, guest lectures, and live capstone projects.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {industry.collaborations.map((col) => (
                <div key={col.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <span className="badge badge-blue">{col.type}</span>
                    <span className="badge badge-gray">{col.duration}</span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: '0.35rem 0' }}>
                    {col.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {col.description}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>
                      <strong>{col.interestedCount}</strong> Faculty/Institutions Registered
                    </span>
                    <button className="btn btn-primary btn-sm">
                      Explore Partnership
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <MobileBottomNav
        role="industry"
        activeTab={activeTab}
        onSelectTab={(tabId) => setActiveTab(tabId)}
        onNavigate={onNavigate}
      />
    </div>
  );
}
