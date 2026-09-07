import React, { useState } from 'react';
import { User, Award, CheckSquare, FileText, Compass, ArrowRight, CheckCircle2, Clock, Sparkles, PlusCircle, ExternalLink, ShieldCheck, PlayCircle } from 'lucide-react';
import OpportunityCard from '../components/OpportunityCard';
import MatchModal from '../components/MatchModal';
import MobileBottomNav from '../components/MobileBottomNav';

export default function StudentDashboard({ student, opportunities, assessmentQuestions, onUpdateStudent, onOpenMatchModal, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, profile, gaps, applications, portfolio, assessment
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [appFilter, setAppFilter] = useState('All');

  // Handle Assessment Answer Selection
  const handleSelectAnswer = (questionId, option) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleNextQuestion = () => {
    if (quizIndex < assessmentQuestions.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      // Calculate assessment result
      setQuizCompleted(true);
      // Simulate profile update
      const updatedStudent = {
        ...student,
        overallReadiness: Math.min(100, student.overallReadiness + 4),
        assessedSkillsCount: student.assessedSkillsCount + 1
      };
      onUpdateStudent(updatedStudent);
    }
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setQuizAnswers({});
    setQuizCompleted(false);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '90vh', paddingBottom: '4rem' }}>
      {/* Top Student Banner Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '1.5rem 0'
      }}>
        <div className="max-width-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">STUDENT PORTAL</div>
              <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                Good morning, {student.name}
              </h1>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {student.degree} ({student.gradYear}) · Target Career: <strong>{student.targetCareer}</strong>
              </div>
            </div>

            {/* Overall Readiness Gauge */}
            <div style={{
              backgroundColor: 'var(--accent-light)',
              border: '1px solid var(--accent-border)',
              padding: '0.75rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, uppercase: true, color: 'var(--accent-primary)' }}>
                  OVERALL READINESS
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                  {student.overallReadiness}%
                </div>
              </div>
              <div style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                background: `conic-gradient(#2563EB ${student.overallReadiness * 3.6}deg, #CBD5E1 0deg)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px'
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#FFFFFF' }}></div>
              </div>
            </div>
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
              { id: 'overview', label: 'Overview', icon: Compass },
              { id: 'profile', label: 'Skill Profile', icon: Award },
              { id: 'gaps', label: 'Skill Gaps', icon: CheckSquare },
              { id: 'applications', label: `Applications (${student.applications.length})`, icon: FileText },
              { id: 'portfolio', label: 'Digital Portfolio', icon: User },
              { id: 'assessment', label: 'Take Assessment', icon: PlayCircle }
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

      {/* Main Tab Views Content */}
      <div className="max-width-wrapper" style={{ marginTop: '2rem' }}>
        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Quick Metrics Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem'
            }}>
              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>CAREER READINESS</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                  {student.overallReadiness}%
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                  Target: Product Analyst
                </div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>SKILLS ASSESSED</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  {student.assessedSkillsCount}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                  Across Tech & Soft Skills
                </div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>STRONG MATCHES</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0D9488', marginTop: '0.2rem' }}>
                  {student.strongMatchesCount}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                  Matching Skill Baseline
                </div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>ACTIVE APPLICATIONS</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  {student.applications.length}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                  Tracked Applications
                </div>
              </div>
            </div>

            {/* Next Best Action Banner */}
            <div className="card" style={{
              padding: '1.5rem',
              backgroundColor: 'var(--accent-light)',
              border: '1px solid var(--accent-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <span className="badge badge-blue" style={{ marginBottom: '0.4rem' }}>
                  RECOMMENDED NEXT ACTION
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {student.nextBestAction.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  {student.nextBestAction.description}
                </p>
              </div>

              <button
                onClick={() => setActiveTab('gaps')}
                className="btn btn-primary btn-sm"
              >
                Execute Action
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Recommended Opportunities */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  Recommended For You
                </h3>
                <button onClick={() => onNavigate('/opportunities')} className="btn btn-ghost btn-sm">
                  View All Opportunities
                </button>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.25rem'
              }}>
                {opportunities.slice(0, 2).map((opp) => (
                  <OpportunityCard
                    key={opp.id}
                    opportunity={opp}
                    onSelect={() => onNavigate('/opportunities')}
                    onOpenMatchModal={onOpenMatchModal}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Skill Profile */}
        {activeTab === 'profile' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Your Skill Profile</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Qualitative proficiency indicators based on self-assessments and verified project evidence.</p>
              </div>

              <button onClick={() => setActiveTab('assessment')} className="btn btn-secondary btn-sm">
                + Update Assessment
              </button>
            </div>

            {/* Technical Skills Section */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>
                Technical & Domain Skills
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {student.skills.filter(s => s.category !== 'Professional').map((s) => (
                  <div key={s.id} style={{
                    backgroundColor: 'var(--bg-main)',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.9rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.1rem' }}>
                        Evidence: {s.evidence}
                      </div>
                    </div>
                    <span className={`badge ${
                      s.proficiency === 'Strong' ? 'badge-teal' :
                      s.proficiency === 'Proficient' ? 'badge-blue' :
                      s.proficiency === 'Developing' ? 'badge-amber' : 'badge-gray'
                    }`}>
                      {s.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Competencies */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>
                Professional Competencies
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                {student.skills.filter(s => s.category === 'Professional').map((s) => (
                  <div key={s.id} style={{
                    backgroundColor: 'var(--bg-main)',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.9rem' }}>{s.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.1rem' }}>
                        Evidence: {s.evidence}
                      </div>
                    </div>
                    <span className="badge badge-teal">
                      {s.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Skill Gaps */}
        {activeTab === 'gaps' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>What should you build next?</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Prioritized skill gap recommendations derived from your target role expectations.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {student.skillGaps.map((gap, idx) => (
                <div key={gap.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                        0{idx + 1}
                      </span>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {gap.skill}
                      </h3>
                    </div>

                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Current: <strong>{gap.current}</strong> → Target: <strong>{gap.target}</strong>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                    <strong>Why it matters:</strong> {gap.whyItMatters}
                  </div>

                  <div style={{
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      Action: {gap.recommendedAction}
                    </div>
                    <button className="btn btn-primary btn-sm">
                      Start Action
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Applications Tracker */}
        {activeTab === 'applications' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Applications Tracker</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Real-time status transparency across submitted opportunity applications.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {student.applications.map((app) => (
                <div key={app.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div>
                      <span className="badge badge-teal" style={{ marginBottom: '0.35rem' }}>
                        {app.matchLabel}
                      </span>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {app.role}
                      </h3>
                      <div style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                        {app.company} · {app.location}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span className={`badge ${
                        app.status === 'Interview' ? 'badge-teal' : 'badge-blue'
                      }`}>
                        Status: {app.status}
                      </span>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>
                        Applied: {app.appliedDate}
                      </div>
                    </div>
                  </div>

                  {/* Stage Timeline */}
                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true, marginBottom: '0.75rem' }}>
                      SELECTION TIMELINE PROGRESSION
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {app.timeline.map((stage, idx) => (
                        <div key={idx} style={{
                          flex: 1,
                          minWidth: '100px',
                          backgroundColor: stage.completed ? 'var(--accent-light)' : 'var(--bg-subtle)',
                          border: stage.completed ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)',
                          padding: '0.5rem 0.65rem',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.75rem'
                        }}>
                          <div style={{ fontWeight: 700, color: stage.completed ? 'var(--accent-primary)' : 'var(--text-light)' }}>
                            {stage.completed ? '✓ ' : '• '}{stage.stage}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                            {stage.date}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Portfolio */}
        {activeTab === 'portfolio' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{student.name}</h2>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{student.degree} · {student.institution} ({student.gradYear})</div>
                </div>
                <span className="badge badge-teal" style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}>
                  <ShieldCheck size={16} /> University Verified Profile
                </span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {student.portfolio.about}
              </p>
            </div>

            {/* Evidence-Backed Projects */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>
                Evidence-Backed Projects
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {student.portfolio.projects.map((p) => (
                  <div key={p.id} style={{
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>{p.title}</h4>
                      <span className="badge badge-teal">Verified Evidence</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0.35rem 0' }}>{p.description}</p>
                    <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                      {p.skills.map((sk, idx) => (
                        <span key={idx} className="badge badge-gray">{sk}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Certifications */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>
                Certifications
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {student.portfolio.certifications.map((c) => (
                  <div key={c.id} style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-subtle)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.925rem' }}>{c.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      Issuer: <strong>{c.issuer}</strong> · Issued {c.date}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.5rem' }}>
                      <span className="badge badge-teal">Verified</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{c.credentialId}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Interactive Skill Assessment Quiz */}
        {activeTab === 'assessment' && (
          <div className="card" style={{ padding: '2rem', maxWidth: '750px', margin: '0 auto' }}>
            {!quizCompleted ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div>
                    <div className="eyebrow">BENCHMARK SKILL ASSESSMENT</div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      Build your skill profile
                    </h2>
                  </div>
                  <span className="badge badge-blue">
                    Question {quizIndex + 1} of {assessmentQuestions.length}
                  </span>
                </div>

                {/* Progress bar */}
                <div style={{ height: '6px', backgroundColor: 'var(--bg-subtle)', borderRadius: '3px', marginBottom: '2rem', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${((quizIndex + 1) / assessmentQuestions.length) * 100}%`, backgroundColor: 'var(--accent-primary)', transition: 'width 0.3s ease' }}></div>
                </div>

                {/* Question */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <span className="badge badge-gray" style={{ marginBottom: '0.5rem' }}>
                    Skill: {assessmentQuestions[quizIndex].skill}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '0.35rem' }}>
                    {assessmentQuestions[quizIndex].question}
                  </h3>
                </div>

                {/* Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {assessmentQuestions[quizIndex].options.map((opt, idx) => {
                    const isSelected = quizAnswers[assessmentQuestions[quizIndex].id]?.label === opt.label;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleSelectAnswer(assessmentQuestions[quizIndex].id, opt)}
                        style={{
                          backgroundColor: isSelected ? 'var(--accent-light)' : 'var(--bg-main)',
                          border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                          padding: '1rem',
                          borderRadius: 'var(--radius-sm)',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ fontWeight: 700, color: isSelected ? 'var(--accent-primary)' : 'var(--text-main)', fontSize: '0.95rem' }}>
                          {opt.label}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                          {opt.description}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer Controls */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    onClick={() => setQuizIndex(Math.max(0, quizIndex - 1))}
                    className="btn btn-secondary btn-sm"
                    disabled={quizIndex === 0}
                  >
                    Previous
                  </button>

                  <button
                    onClick={handleNextQuestion}
                    className="btn btn-primary"
                    disabled={!quizAnswers[assessmentQuestions[quizIndex].id]}
                  >
                    {quizIndex === assessmentQuestions.length - 1 ? 'Complete Assessment' : 'Next Question'}
                  </button>
                </div>
              </div>
            ) : (
              /* Quiz Completion Screen */
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#F0FDF4',
                  color: '#0D9488',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <CheckCircle2 size={32} />
                </div>

                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Assessment Complete!
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '450px', margin: '0 auto 1.5rem auto' }}>
                  Your skill profile has been dynamically updated in local React state. Your readiness score increased to <strong>{student.overallReadiness}%</strong>.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <button onClick={() => setActiveTab('profile')} className="btn btn-primary">
                    View Updated Profile
                  </button>
                  <button onClick={handleResetQuiz} className="btn btn-secondary">
                    Retake Assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Navigation Bar for Authenticated Student */}
      <MobileBottomNav
        role="student"
        activeTab={activeTab}
        onSelectTab={(tabId) => setActiveTab(tabId)}
        onNavigate={onNavigate}
      />
    </div>
  );
}
