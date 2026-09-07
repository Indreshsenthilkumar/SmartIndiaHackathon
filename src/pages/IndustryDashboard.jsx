import React, { useState } from 'react';
import { Briefcase, Users, Building2, PlusCircle, CheckCircle2, ArrowRight, MapPin, DollarSign, Search, ShieldCheck, Target, Award, Code2, GraduationCap, FileText, Download } from 'lucide-react';
import MobileBottomNav from '../components/MobileBottomNav';

export default function IndustryDashboard({ industry, opportunities, challenges, onAddOpportunity, onAddChallenge, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, post, challenges, candidates, collaborations, academicians
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Form State for Create Opportunity
  const [formData, setFormData] = useState({
    title: '',
    company: 'Himalaya Wellness R&D',
    type: 'Internship',
    workMode: 'Hybrid',
    location: 'Bengaluru',
    duration: '3 months',
    stipend: '₹25,000 / mo',
    eligibility: 'BAMS / BNYS / BUMS / BSMS / BHMS (2025-2026 Batch)',
    description: '',
    requiredSkillsStr: 'Herbal Standardization (HPLC), Clinical Phytomedicine Analytics, Ayush Pharmacovigilance'
  });

  // Form State for Create Challenge (Feature 2)
  const [chalFormData, setChalFormData] = useState({
    title: '',
    industryPartner: 'Himalaya Wellness R&D',
    domain: 'Ayurveda & Phytochemistry',
    difficulty: 'Intermediate',
    deadline: '30 Sep 2026',
    stipendOrReward: 'Verified HPLC Assay Badge + Interview Fast-track',
    skillsVerifiedStr: 'Herbal Standardization (HPLC), Clinical Phytomedicine Analytics, Botanical Spectroscopy',
    description: '',
    detail1: 'Process raw UV-spectroscopy data files.',
    detail2: 'Identify active marker retention times.'
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
    setToastMessage('Opportunity Published to Network!');
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);

    setFormData({
      title: '',
      company: 'Himalaya Wellness R&D',
      type: 'Internship',
      workMode: 'Hybrid',
      location: 'Bengaluru',
      duration: '3 months',
      stipend: '₹25,000 / mo',
      eligibility: 'BAMS / BNYS / BUMS / BSMS / BHMS (2025-2026 Batch)',
      description: '',
      requiredSkillsStr: 'Herbal Standardization (HPLC), Clinical Phytomedicine Analytics, Ayush Pharmacovigilance'
    });

    setActiveTab('overview');
  };

  const handlePublishChallenge = (e) => {
    e.preventDefault();
    if (!chalFormData.title) return;

    const skillsArr = chalFormData.skillsVerifiedStr.split(',').map(s => s.trim()).filter(Boolean);

    const newChal = {
      id: `chal-${Date.now()}`,
      title: chalFormData.title,
      industryPartner: chalFormData.industryPartner,
      domain: chalFormData.domain,
      difficulty: chalFormData.difficulty,
      deadline: chalFormData.deadline,
      stipendOrReward: chalFormData.stipendOrReward,
      skillsVerified: skillsArr,
      description: chalFormData.description || 'Published via ALIGN Industry Challenge Engine.',
      problemDetails: [chalFormData.detail1, chalFormData.detail2].filter(Boolean),
      submissionsCount: 0,
      status: 'Active'
    };

    onAddChallenge(newChal);
    setToastMessage('Industry Challenge Problem Statement Published!');
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);

    setChalFormData({
      title: '',
      industryPartner: 'Vertex Digital Solutions',
      domain: 'Data Analytics & SQL',
      difficulty: 'Intermediate',
      deadline: '30 Sep 2026',
      stipendOrReward: 'Verified SQL Badge + Interview Fast-track',
      skillsVerifiedStr: 'SQL, Product Analytics, Data Modeling',
      description: '',
      detail1: 'Process multi-table event log records.',
      detail2: 'Calculate retention metrics.'
    });

    setActiveTab('challenges');
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
          <CheckCircle2 size={18} /> {toastMessage}
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
                Define required skills, publish problem statements, and evaluate candidate build capabilities.
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
              { id: 'challenges', label: 'Industry Challenge Manager', icon: Target },
              { id: 'post', label: 'Create Opportunity', icon: PlusCircle },
              { id: 'candidates', label: 'Candidate Discovery', icon: Users },
              { id: 'collaborations', label: 'Institutional Collaborations', icon: Building2 },
              { id: 'academicians', label: 'Faculty Sabbaticals & FDP Co-Host', icon: GraduationCap }
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
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>INDUSTRY CHALLENGES</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
              {challenges.length}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Active Problem Statements</div>
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>MATCHING CANDIDATES</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0D9488', marginTop: '0.2rem' }}>
              {industry.matchingCandidatePool}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Assessed Skill Baseline</div>
          </div>
        </div>

        {/* Feature 2: Industry Challenge Manager Tab */}
        {activeTab === 'challenges' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', maxWidth: '750px', margin: '0 auto', width: '100%' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="badge badge-blue" style={{ marginBottom: '0.35rem' }}>
                  FEATURE 2 · INDUSTRY CHALLENGE ENGINE
                </span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  Publish Real-World Problem Statement
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Allow students to solve actual industry challenges and prove practical capabilities before interviews.
                </p>
              </div>

              <form onSubmit={handlePublishChallenge}>
                <div className="form-group">
                  <label className="form-label">Challenge Title / Problem Statement *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Real-Time Telemetry Event Log Optimizer"
                    value={chalFormData.title}
                    onChange={(e) => setChalFormData({ ...chalFormData, title: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Domain Area</label>
                    <select
                      value={chalFormData.domain}
                      onChange={(e) => setChalFormData({ ...chalFormData, domain: e.target.value })}
                      className="form-select"
                    >
                      <option value="Data Analytics & SQL">Data Analytics & SQL</option>
                      <option value="Product & UI/UX Design">Product & UI/UX Design</option>
                      <option value="Cloud & Systems Scripting">Cloud & Systems Scripting</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Difficulty Level</label>
                    <select
                      value={chalFormData.difficulty}
                      onChange={(e) => setChalFormData({ ...chalFormData, difficulty: e.target.value })}
                      className="form-select"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Submission Deadline</label>
                    <input
                      type="text"
                      placeholder="e.g. 30 Sep 2026"
                      value={chalFormData.deadline}
                      onChange={(e) => setChalFormData({ ...chalFormData, deadline: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Stipend / Verified Skill Reward</label>
                    <input
                      type="text"
                      placeholder="e.g. Verified SQL Badge + Fast-track Interview"
                      value={chalFormData.stipendOrReward}
                      onChange={(e) => setChalFormData({ ...chalFormData, stipendOrReward: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Skills to Verify (Comma separated) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SQL, Product Analytics, Data Modeling"
                    value={chalFormData.skillsVerifiedStr}
                    onChange={(e) => setChalFormData({ ...chalFormData, skillsVerifiedStr: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Problem Statement Overview</label>
                  <textarea
                    rows="3"
                    placeholder="Describe the challenge background and goals..."
                    value={chalFormData.description}
                    onChange={(e) => setChalFormData({ ...chalFormData, description: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Publish Industry Challenge to Students
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent-border)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Find candidates based on verified skills rather than resume keywords alone.
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem', marginBottom: '1rem' }}>
                ALIGN maps required role skills directly against university student self-assessments, GitHub static code analysis, and real-world industry challenge submissions.
              </p>
              <button onClick={() => setActiveTab('candidates')} className="btn btn-primary btn-sm">
                Explore Matching Candidates Pool
              </button>
            </div>
          </div>
        )}

        {/* Tab: Create Opportunity */}
        {activeTab === 'post' && (
          <div className="card" style={{ padding: '2rem', maxWidth: '750px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="eyebrow">PUBLISH OPPORTUNITY</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Define Required Skills & Role
              </h2>
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
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Publish Opportunity to Network
              </button>
            </form>
          </div>
        )}

        {/* Tab: Candidate Discovery */}
        {activeTab === 'candidates' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Matching Candidates Pool</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Candidates with evidence-backed skill profiles matching active role requirements.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
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

        {/* Tab: Collaborations */}
        {activeTab === 'collaborations' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Institutional Collaborations</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Industry-sponsored faculty development, guest lectures, and live capstone projects.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {industry.collaborations.map((col) => (
                <div key={col.id} className="card" style={{ padding: '1.5rem' }}>
                  <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>{col.type}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: '0.35rem 0' }}>
                    {col.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {col.description}
                  </p>

                  <button className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                    Explore Partnership
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Tab: Faculty Sabbaticals & FDP Co-Host */}
        {activeTab === 'academicians' && (
          <div className="card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="eyebrow">FACULTY SABBATICALS & JOINT FDP MANAGEMENT</span>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  Industry Academician Sabbaticals & FDP Co-Management
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Mentor visiting faculty, review micro-teaching submissions, co-publish research grants, and issue AICTE-ATAL verified certificates.
                </p>
              </div>

              <button className="btn btn-primary btn-sm" onClick={() => alert("Launching Joint FDP Program Publisher...")}>
                + Publish Joint FDP Call
              </button>
            </div>

            {/* Sabbatical Researcher Card */}
            <div style={{ padding: '1.25rem', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-card)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-main)' }}>Dr. Radhakrishnan V</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Visiting Research Faculty · All India Institute of Ayurveda</div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span className="badge badge-teal">Industrial Sabbatical Complete</span>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.35rem' }}>Industry Mentor: Dr. Vikram Seth</div>
                </div>
              </div>

              <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                  Logged Industry Mentor Review (5.0 / 5.0 Rating):
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  "Dr. Radhakrishnan co-developed our clinical telemetry data algorithms, authored 2 Scopus papers, and integrated our R&D workflow into the university's 3rd year engineering elective syllabus."
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <button className="btn btn-secondary btn-sm" onClick={() => alert("Reviewing Micro-Teaching Video & Lesson Feedback Log...")}>
                  <FileText size={14} /> Review Micro-Teaching Log
                </button>
                <button className="btn btn-secondary btn-sm" onClick={() => alert("Reviewing DST/AICTE Research Grant Proposal Draft...")}>
                  <ShieldCheck size={14} /> Review DST Grant Draft
                </button>
                <button className="btn btn-primary btn-sm" onClick={() => alert("Re-issuing Verified AICTE-ATAL Certificate PDF...")}>
                  <Download size={14} /> View Issued Certificate
                </button>
              </div>
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
