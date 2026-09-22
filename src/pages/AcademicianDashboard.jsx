import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Download, 
  Sparkles, 
  GraduationCap, 
  Video, 
  Users, 
  ShieldCheck, 
  Cpu, 
  Building2, 
  ExternalLink,
  ChevronRight,
  HelpCircle,
  BarChart3,
  Lightbulb
} from 'lucide-react';

export default function AcademicianDashboard({ academician, academicianOpportunities, onNavigate }) {
  const [activeTab, setActiveTab] = useState('fdp-hub');
  const [enrolledOpportunities, setEnrolledOpportunities] = useState(['opp-acad-1']);
  const [activePillar, setActivePillar] = useState('pillar-1');
  const [selectedOpp, setSelectedOpp] = useState(null);

  const handleEnroll = (oppId) => {
    if (!enrolledOpportunities.includes(oppId)) {
      setEnrolledOpportunities([...enrolledOpportunities, oppId]);
    }
  };

  const activeFdp = academician?.activeFdp;

  return (
    <div style={{ padding: '2.5rem 0 4rem 0', minHeight: '80vh', backgroundColor: 'var(--bg-main)' }}>
      <div className="max-width-wrapper">
        
        {/* Header Profile Banner */}
        <div className="card" style={{ padding: '1.75rem', marginBottom: '2rem', background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)', borderColor: 'var(--accent-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--accent-light)', 
                color: 'var(--accent-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '2px solid var(--accent-border)',
                fontWeight: 800,
                fontSize: '1.5rem'
              }}>
                <GraduationCap size={32} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {academician.name}
                  </h1>
                  <span className="badge badge-teal">Verified Academician</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {academician.designation} · {academician.institution}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <span>Specialization: {academician.specialization}</span>
                  <span>Experience: {academician.experienceYears}</span>
                </div>
              </div>
            </div>

            {/* Quick Action / Status */}
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
              <div className="badge badge-blue" style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}>
                <Sparkles size={14} /> AICTE-ATAL Active FDP Participant
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Synched with Institution & Industry Portals
              </div>
            </div>

          </div>

          {/* Faculty Competency Twin Overview Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1rem', 
            marginTop: '1.5rem', 
            paddingTop: '1.25rem', 
            borderTop: '1px solid var(--border-subtle)' 
          }}>
            <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Faculty Readiness Index</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                {academician.readinessIndex} / 100
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Scopus Publications</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                {academician.facultyTwin.scopusPublicationsCount} Papers
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Patents & IPR</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0D9488', marginTop: '0.2rem' }}>
                {academician.facultyTwin.patentsFiledCount} Filed
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Grant Funding</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                {academician.facultyTwin.grantFundingRaised}
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', overflowX: 'auto' }}>
          <button
            onClick={() => setActiveTab('fdp-hub')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: activeTab === 'fdp-hub' ? 'var(--accent-primary)' : 'transparent',
              color: activeTab === 'fdp-hub' ? '#FFFFFF' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <BookOpen size={16} /> Active FDP Program Hub
          </button>

          <button
            onClick={() => setActiveTab('opportunities')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: activeTab === 'opportunities' ? 'var(--accent-primary)' : 'transparent',
              color: activeTab === 'opportunities' ? '#FFFFFF' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Briefcase size={16} /> FDPs, Sabbaticals & Training
          </button>

          <button
            onClick={() => setActiveTab('sabbaticals')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: activeTab === 'sabbaticals' ? 'var(--accent-primary)' : 'transparent',
              color: activeTab === 'sabbaticals' ? '#FFFFFF' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Award size={16} /> Mentor Feedback & Progress
          </button>
        </div>

        {/* TAB 1: ACTIVE FDP PROGRAM HUB */}
        {activeTab === 'fdp-hub' && (
          <div>
            {/* Active FDP Overview Banner */}
            <div className="card" style={{ padding: '1.5rem', marginBottom: '1.75rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span className="eyebrow">FACULTY DEVELOPMENT PROGRAMME (FDP) WORKSPACE</span>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                    {activeFdp.title}
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Organized by: <strong>{activeFdp.organizer}</strong> · Schedule: <strong>{activeFdp.startDate} – {activeFdp.endDate}</strong>
                  </p>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div className="badge badge-teal" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
                    <CheckCircle2 size={14} /> Status: {activeFdp.status}
                  </div>
                </div>
              </div>

              {/* Progress Summary Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', backgroundColor: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Attendance Logger</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0D9488' }}>{activeFdp.attendancePercentage}% Logged</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Quiz Average</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{activeFdp.quizScoreAverage}%</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Final Exam Eligibility</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>{activeFdp.finalExamStatus}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Certification</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0D9488' }}>{activeFdp.certificateStatus}</div>
                </div>
              </div>
            </div>

            {/* 4 Core FDP Pillars Sub-Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', overflowX: 'auto' }}>
              <button
                onClick={() => setActivePillar('pillar-1')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: activePillar === 'pillar-1' ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)',
                  background: activePillar === 'pillar-1' ? 'var(--accent-light)' : 'var(--bg-card)',
                  color: activePillar === 'pillar-1' ? 'var(--accent-primary)' : 'var(--text-muted)',
                  fontWeight: activePillar === 'pillar-1' ? 700 : 500,
                  fontSize: '0.825rem'
                }}
              >
                1. Daily Activities & Micro-Teaching
              </button>

              <button
                onClick={() => setActivePillar('pillar-2')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: activePillar === 'pillar-2' ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)',
                  background: activePillar === 'pillar-2' ? 'var(--accent-light)' : 'var(--bg-card)',
                  color: activePillar === 'pillar-2' ? 'var(--accent-primary)' : 'var(--text-muted)',
                  fontWeight: activePillar === 'pillar-2' ? 700 : 500,
                  fontSize: '0.825rem'
                }}
              >
                2. Pedagogical Training & OBE
              </button>

              <button
                onClick={() => setActivePillar('pillar-3')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: activePillar === 'pillar-3' ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)',
                  background: activePillar === 'pillar-3' ? 'var(--accent-light)' : 'var(--bg-card)',
                  color: activePillar === 'pillar-3' ? 'var(--accent-primary)' : 'var(--text-muted)',
                  fontWeight: activePillar === 'pillar-3' ? 700 : 500,
                  fontSize: '0.825rem'
                }}
              >
                3. Research, Grants & Scopus Papers
              </button>

              <button
                onClick={() => setActivePillar('pillar-4')}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: activePillar === 'pillar-4' ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)',
                  background: activePillar === 'pillar-4' ? 'var(--accent-light)' : 'var(--bg-card)',
                  color: activePillar === 'pillar-4' ? 'var(--accent-primary)' : 'var(--text-muted)',
                  fontWeight: activePillar === 'pillar-4' ? 700 : 500,
                  fontSize: '0.825rem'
                }}
              >
                4. Evaluation & AICTE-ATAL Certificate
              </button>
            </div>

            {/* PILLAR 1 CONTENT: Daily Activities & Learning Sessions */}
            {activePillar === 'pillar-1' && (
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Pillar 1: Daily Activities & Learning Sessions
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  Keynote lectures, hands-on lab work, case study discussions, and peer-reviewed micro-teaching sessions.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {activeFdp.dailyActivities.map((act, index) => (
                    <div key={index} style={{ padding: '1rem', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-card)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <span className="badge badge-blue">{act.day}</span>
                        <span className="badge badge-teal"><CheckCircle2 size={12} /> {act.status}</span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                        {act.topic}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                        Lead / Speaker: {act.speaker || act.mentor || act.lead}
                      </div>
                      {act.feedback && (
                        <div style={{ marginTop: '0.5rem', padding: '0.65rem', backgroundColor: 'var(--accent-light)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--accent-hover)' }}>
                          <strong>Peer & Mentor Feedback:</strong> "{act.feedback}"
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PILLAR 2 CONTENT: Upgrading Teaching Methods (Pedagogical Training) */}
            {activePillar === 'pillar-2' && (
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Pillar 2: Upgrading Teaching Methods (Pedagogical Training)
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  Training on digital LMS tools, AI assistance, Virtual Labs, Outcome-Based Education (OBE), and effective exam question paper design.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  {activeFdp.pedagogicalTraining.map((ped, idx) => (
                    <div key={idx} style={{ padding: '1.25rem', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-card)' }}>
                      <div className="eyebrow" style={{ marginBottom: '0.35rem' }}>MODULE {idx + 1}</div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                        {ped.module}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                        {ped.tool || ped.framework}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.8rem' }}>
                        <span>Status: <strong>{ped.status}</strong></span>
                        <span className="badge badge-teal">{ped.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PILLAR 3 CONTENT: Research and Academic Writing */}
            {activePillar === 'pillar-3' && (
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Pillar 3: Research and Academic Writing
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  Scopus/Web of Science indexed paper drafting, research proposal writing for government grants (DST, ISRO, AICTE), and patent filing workflows.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {activeFdp.researchAndWriting.map((res, idx) => (
                    <div key={idx} style={{ padding: '1.25rem', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-card)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                            {res.title}
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                            {res.paperTopic || res.agency || res.patentName}
                          </div>
                        </div>
                        <span className="badge badge-blue">{res.status}</span>
                      </div>

                      {res.grantAmount && (
                        <div style={{ marginTop: '0.65rem', fontSize: '0.825rem', color: '#0D9488', fontWeight: 700 }}>
                          Target Funding Amount: {res.grantAmount}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PILLAR 4 CONTENT: Evaluation and Certification */}
            {activePillar === 'pillar-4' && (
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Pillar 4: Evaluation and AICTE-ATAL Aligned Certification
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  Mandated daily quizzes, final exam (minimum 60% score required), attendance verification, and downloadable credential.
                </p>

                {/* Quizzes Grid */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    Daily Quizzes & Assignment Scores
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
                    {activeFdp.evaluationAndCertification.quizzes.map((quiz, qidx) => (
                      <div key={qidx} style={{ padding: '0.85rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--bg-subtle)' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)' }}>{quiz.title}</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
                          {quiz.score} / {quiz.total}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.15rem' }}>Completed on {quiz.date}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Certificate Card */}
                <div style={{ padding: '1.5rem', backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F766E', fontWeight: 800, fontSize: '1.05rem' }}>
                      <Award size={20} /> AICTE-ATAL Verified FDP Completion Certificate
                    </div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      Certificate ID: <strong>{activeFdp.evaluationAndCertification.certificateId}</strong> · Final Score: <strong>{activeFdp.evaluationAndCertification.finalExamScore}% (Pass Threshold: {activeFdp.evaluationAndCertification.minPassingThreshold}%)</strong>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>
                      Attendance Record: {activeFdp.evaluationAndCertification.attendanceRecord}
                    </div>
                  </div>

                  <button className="btn btn-primary" onClick={() => alert("Downloading official AICTE-ATAL Aligned FDP Certificate PDF...")}>
                    <Download size={16} /> Download Verified Certificate
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: FDPs, SABBATICALS & INDUSTRIAL TRAINING OPPORTUNITIES */}
        {activeTab === 'opportunities' && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Academician Opportunities & FDP Programs
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Explore industrial sabbaticals, faculty development programs, and industrial training schemes matched to your specialization.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {academicianOpportunities.map((opp) => {
                const isEnrolled = enrolledOpportunities.includes(opp.id);

                return (
                  <div key={opp.id} className="card card-hover" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <span className="badge badge-blue">{opp.type}</span>
                        {isEnrolled && <span className="badge badge-teal"><CheckCircle2 size={12} /> Enrolled / Active</span>}
                      </div>

                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                        {opp.title}
                      </h3>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>
                        {opp.provider}
                      </div>

                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                        {opp.description}
                      </p>

                      <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem' }}>
                        <div>Duration: <strong>{opp.duration}</strong></div>
                        <div>Grant / Stipend: <strong>{opp.stipendOrGrant}</strong></div>
                        <div>Eligibility: <strong>{opp.eligibility}</strong></div>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleEnroll(opp.id)}
                      className={`btn ${isEnrolled ? 'btn-secondary' : 'btn-primary'}`}
                      style={{ width: '100%' }}
                    >
                      {isEnrolled ? 'Currently Enrolled' : 'Apply / Register for FDP'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: SABBATICAL & MENTOR FEEDBACK */}
        {activeTab === 'sabbaticals' && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Industrial Sabbatical & Mentor Feedback Log
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Verified records of completed industrial immersions, mentor ratings, and institutional syllabus outcomes.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {academician.sabbaticalsAndInternships.map((sab) => (
                <div key={sab.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <span className="badge badge-teal">{sab.status}</span>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.35rem' }}>
                        {sab.title}
                      </h3>
                      <div style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '0.2rem' }}>
                        {sab.company} · {sab.location}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0D9488' }}>
                        Rating: {sab.rating}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Period: {sab.period}</div>
                    </div>
                  </div>

                  {/* Mentor Feedback Box */}
                  <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', borderLeft: '4px solid var(--accent-primary)' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                      Industry Mentor Feedback ({sab.mentor}):
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', italic: 'true', lineHeight: 1.5 }}>
                      "{sab.mentorFeedback}"
                    </p>
                  </div>

                  {/* Verified Outcomes */}
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                      Key Institutional & Research Outcomes:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {sab.outcomes.map((out, oidx) => (
                        <li key={oidx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <CheckCircle2 size={14} color="#0D9488" /> {out}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
