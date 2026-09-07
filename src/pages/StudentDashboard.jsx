import React, { useState } from 'react';
import { User, Award, CheckSquare, FileText, Compass, ArrowRight, CheckCircle2, Clock, Sparkles, PlusCircle, ExternalLink, ShieldCheck, PlayCircle, Code2, Cpu, Target } from 'lucide-react';
import OpportunityCard from '../components/OpportunityCard';
import MatchModal from '../components/MatchModal';
import MobileBottomNav from '../components/MobileBottomNav';
import ProjectVerificationModal from '../components/ProjectVerificationModal';
import ChallengeSubmissionModal from '../components/ChallengeSubmissionModal';

export default function StudentDashboard({ student, opportunities, challenges, assessmentQuestions, onUpdateStudent, onOpenMatchModal, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, profile, twin, gaps, applications, portfolio, challenges, assessment
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedChallengeForSub, setSelectedChallengeForSub] = useState(null);

  // Handle Assessment Answer Selection
  const handleSelectAnswer = (questionId, option) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleNextQuestion = () => {
    if (quizIndex < assessmentQuestions.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizCompleted(true);
      const updatedStudent = {
        ...student,
        overallReadiness: Math.min(100, student.overallReadiness + 4),
        competencyTwin: {
          ...student.competencyTwin,
          knowledgeScore: Math.min(100, student.competencyTwin.knowledgeScore + 4),
          overallScore: Math.round((student.competencyTwin.knowledgeScore + 4 + student.competencyTwin.buildScore) / 2)
        },
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

  // Handle Project Static Analysis Complete (Feature 1)
  const handleVerifyProjectComplete = (verifiedProject) => {
    const updatedProjects = [verifiedProject, ...(student.analyzedProjects || [])];
    const updatedStudent = {
      ...student,
      analyzedProjects: updatedProjects,
      competencyTwin: {
        ...student.competencyTwin,
        buildScore: Math.min(100, student.competencyTwin.buildScore + 3),
        overallScore: Math.round((student.competencyTwin.knowledgeScore + student.competencyTwin.buildScore + 3) / 2),
        analyzedReposCount: updatedProjects.length
      }
    };
    onUpdateStudent(updatedStudent);
  };

  // Handle Challenge Submission Complete (Feature 2)
  const handleChallengeSubmitted = (submission) => {
    const updatedSubmissions = [submission, ...(student.studentSubmissions || [])];
    const updatedStudent = {
      ...student,
      studentSubmissions: updatedSubmissions
    };
    onUpdateStudent(updatedStudent);
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
                Roll No: <strong>{student.rollNumber || '2026-IT-101'}</strong> · {student.degree} ({student.gradYear})
              </div>
            </div>

            {/* Feature 1: Competency Twin Header Gauge */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{
                backgroundColor: '#F0FDF4',
                border: '1px solid #99F6E4',
                padding: '0.65rem 1.1rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, uppercase: true, color: '#0D9488' }}>
                    COMPETENCY TWIN
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                    {student.competencyTwin ? student.competencyTwin.overallScore : 75}%
                  </div>
                </div>
                <Cpu size={28} color="#0D9488" />
              </div>

              <div style={{
                backgroundColor: 'var(--accent-light)',
                border: '1px solid var(--accent-border)',
                padding: '0.65rem 1.1rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, uppercase: true, color: 'var(--accent-primary)' }}>
                    OVERALL READINESS
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                    {student.overallReadiness}%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginTop: '1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            overflowX: 'auto'
          }}>
            {[
              { id: 'overview', label: 'Overview', icon: Compass },
              { id: 'twin', label: 'Competency Twin & GitHub', icon: Cpu },
              { id: 'profile', label: 'Skill Profile', icon: Award },
              { id: 'gaps', label: 'Skill Gaps', icon: CheckSquare },
              { id: 'challenges', label: 'Industry Challenges', icon: Target },
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
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>COMPETENCY TWIN SCORE</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0D9488', marginTop: '0.2rem' }}>
                  {student.competencyTwin ? student.competencyTwin.overallScore : 75}%
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                  Knowledge (72%) + Build (78%)
                </div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>ANALYZED REPOSITORIES</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                  {student.competencyTwin ? student.competencyTwin.analyzedReposCount : 2}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                  Code Complexity Verified
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

            {/* Feature 1 Callout Banner */}
            <div className="card" style={{
              padding: '1.5rem',
              backgroundColor: '#F0FDF4',
              border: '1px solid #99F6E4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <span className="badge badge-teal" style={{ marginBottom: '0.4rem' }}>
                  FEATURE 1 · PROJECT-BASED SKILL VERIFICATION
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  Build your Competency Twin by analyzing your GitHub projects & code repositories.
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Combines what you know with what you can actually build for accurate industry matching.
                </p>
              </div>

              <button
                onClick={() => setShowProjectModal(true)}
                className="btn btn-primary btn-sm"
              >
                + Analyze GitHub Project
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

        {/* Feature 1 Tab: Competency Twin & GitHub Analysis */}
        {activeTab === 'twin' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="eyebrow">NOVELTY FEATURE 1</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  Competency Twin & Project Verification
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Evaluates both what you know (benchmarks) and what you can build (static code analysis of your GitHub repositories).
                </p>
              </div>

              <button onClick={() => setShowProjectModal(true)} className="btn btn-primary btn-sm">
                + Analyze New GitHub Repo
              </button>
            </div>

            {/* Dual Gauge Box */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}>
              <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true }}>
                  1. WHAT YOU KNOW (KNOWLEDGE BENCHMARK)
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)', margin: '0.2rem 0' }}>
                  {student.competencyTwin ? student.competencyTwin.knowledgeScore : 72}%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Based on {student.assessedSkillsCount} assessed benchmark skill topics.
                </div>
              </div>

              <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #0D9488' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true }}>
                  2. WHAT YOU CAN BUILD (PRACTICAL CODE SCORE)
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0D9488', margin: '0.2rem 0' }}>
                  {student.competencyTwin ? student.competencyTwin.buildScore : 78}%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Based on {student.competencyTwin ? student.competencyTwin.analyzedReposCount : 2} verified GitHub repositories & code complexity metrics.
                </div>
              </div>
            </div>

            {/* Analyzed Projects List */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                Analyzed & Verified Repositories
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {(student.analyzedProjects || []).map((proj) => (
                  <div key={proj.id} style={{
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '1.15rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Code2 size={16} />
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>{proj.title}</h4>
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.15rem' }}>
                          Repo: <code style={{ color: 'var(--accent-primary)' }}>{proj.repoUrl}</code>
                        </div>
                      </div>

                      <span className="badge badge-teal">Verified ({proj.complexityScore}/100 Complexity)</span>
                    </div>

                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                      Composition: <strong>{proj.languageComposition}</strong> · Practical Contribution: <strong>{proj.practicalContribution}</strong>
                    </div>

                    <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                      {proj.verifiedSkills.map((sk, idx) => (
                        <span key={idx} className="badge badge-teal">✓ {sk}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Feature 2 Tab: Industry Challenges */}
        {activeTab === 'challenges' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div className="eyebrow">NOVELTY FEATURE 2</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Industry Challenge Engine</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Solve real-world problem statements published by industry partners to prove your skills.</p>
              </div>

              <button onClick={() => onNavigate('/challenges')} className="btn btn-secondary btn-sm">
                View All Public Challenges
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {challenges.map((chal) => {
                const isSubmitted = (student.studentSubmissions || []).some(s => s.challengeId === chal.id);

                return (
                  <div key={chal.id} className="card" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <span className="badge badge-blue">{chal.domain}</span>
                      <span className="badge badge-gray">{chal.difficulty}</span>
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: '0.35rem 0' }}>
                      {chal.title}
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                      Partner: {chal.industryPartner}
                    </div>

                    <div style={{ backgroundColor: 'var(--accent-light)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                      Reward: {chal.stipendOrReward}
                    </div>

                    <button
                      onClick={() => setSelectedChallengeForSub(chal)}
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%' }}
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? '✓ Solution Submitted' : 'Submit Challenge Solution'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab: Skill Profile */}
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
          </div>
        )}

        {/* Tab: Skill Gaps */}
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

        {/* Tab: Applications */}
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
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Portfolio */}
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
          </div>
        )}

        {/* Tab: Interactive Assessment */}
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
                  <div style={{ height: '100%', width: `${((quizIndex + 1) / assessmentQuestions.length) * 100}%`, backgroundColor: 'var(--accent-primary)', transition: 'width 0.3s ease' }} />
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
                  Your skill profile and Competency Twin score have been updated dynamically in local session state.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <button onClick={() => setActiveTab('twin')} className="btn btn-primary">
                    View Competency Twin
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

      {/* Feature 1 Project Analysis Modal */}
      {showProjectModal && (
        <ProjectVerificationModal
          onClose={() => setShowProjectModal(false)}
          onVerifyProject={handleVerifyProjectComplete}
        />
      )}

      {/* Feature 2 Challenge Submission Modal */}
      {selectedChallengeForSub && (
        <ChallengeSubmissionModal
          challenge={selectedChallengeForSub}
          onClose={() => setSelectedChallengeForSub(null)}
          onSubmitSolution={(sub) => {
            handleChallengeSubmitted(sub);
            setSelectedChallengeForSub(null);
          }}
        />
      )}

      {/* Mobile Navigation Bar */}
      <MobileBottomNav
        role="student"
        activeTab={activeTab}
        onSelectTab={(tabId) => setActiveTab(tabId)}
        onNavigate={onNavigate}
      />
    </div>
  );
}
