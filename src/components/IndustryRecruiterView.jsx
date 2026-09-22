import React, { useState } from 'react';
import { 
  Building2, 
  PlusCircle, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  Filter, 
  ArrowRight,
  Send,
  Search,
  Briefcase,
  Trophy,
  Calendar,
  X,
  ExternalLink,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Award
} from 'lucide-react';
import { initialIndustryConnect } from '../data/mockData';

export default function IndustryRecruiterView({ 
  recruiter, 
  opportunities, 
  onAddOpportunity, 
  challenges = [],
  onLaunchChallenge,
  fdpPrograms = [],
  onHostFdp,
  student,
  activeTab = 'dashboard'
}) {
  const [currentTab, setCurrentTab] = useState(
    activeTab === 'manage-postings' ? 'postings' :
    activeTab === 'candidate-matchmaker' ? 'candidates' :
    activeTab === 'post-opportunity' ? 'post' :
    activeTab === 'industry-challenges' ? 'challenges' :
    activeTab === 'faculty-fdps' ? 'fdps' : 'overview'
  );

  React.useEffect(() => {
    if (activeTab === 'manage-postings') setCurrentTab('postings');
    else if (activeTab === 'candidate-matchmaker') setCurrentTab('candidates');
    else if (activeTab === 'post-opportunity') setCurrentTab('post');
    else if (activeTab === 'industry-challenges') setCurrentTab('challenges');
    else if (activeTab === 'faculty-fdps') setCurrentTab('fdps');
    else if (activeTab === 'dashboard') setCurrentTab('overview');
  }, [activeTab]);

  const [showPostModal, setShowPostModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState(recruiter.company.split(' ')[0]);
  const [newRoleType, setNewRoleType] = useState('Internship');
  const [newDomain, setNewDomain] = useState('Artificial Intelligence');
  const [newStipend, setNewStipend] = useState('₹ 75,000 / month');
  const [newLocation, setNewLocation] = useState('Remote / Hybrid');
  const [newSkills, setNewSkills] = useState('Python, PyTorch, LLMs');

  // Hackathon / Challenge Launch State
  const [showHackathonModal, setShowHackathonModal] = useState(false);
  const [hTitle, setHTitle] = useState('');
  const [hHost, setHHost] = useState(recruiter.company || 'Google Cloud & AI Labs');
  const [hPrize, setHPrize] = useState('₹ 3,50,000 + Direct PPIs');
  const [hDeadline, setHDeadline] = useState('30 Nov 2026');
  const [hDifficulty, setHDifficulty] = useState('Hard');
  const [hTags, setHTags] = useState('GenAI, Transformers, Vector DBs, React');
  const [hSummary, setHSummary] = useState('Build an enterprise-grade multimodal AI workflow that automates unstructured document extraction and reasoning.');
  const [hColleges, setHColleges] = useState('Open to all AICTE & NIRF Accredited Colleges (Anna University, IITs, NITs, BITS)');

  // Faculty FDP Hosting State
  const [showFdpModal, setShowFdpModal] = useState(false);
  const [fdpTitle, setFdpTitle] = useState('');
  const [fdpHost, setFdpHost] = useState(recruiter.company || 'Google Cloud & Partner Labs');
  const [fdpDuration, setFdpDuration] = useState('2 Weeks (Online + 3 Days On-campus)');
  const [fdpDates, setFdpDates] = useState('15 Dec - 30 Dec 2026');
  const [fdpStipend, setFdpStipend] = useState('₹ 50,000 Research Fellowship + Cloud Credits');
  const [fdpSeats, setFdpSeats] = useState('35 Faculty Seats');
  const [fdpEligibility, setFdpEligibility] = useState('Professors / Assistant Professors in CSE, IT, ECE, AI');
  const [fdpCurriculum, setFdpCurriculum] = useState('Hands-on industrial immersion into generative AI pipelines, LLM evaluation, and joint curriculum co-development for college labs.');

  const activeFdps = fdpPrograms && fdpPrograms.length > 0 ? fdpPrograms : initialIndustryConnect.facultyPrograms;

  const [candidatePool, setCandidatePool] = useState([
    {
      id: 'c-1',
      name: 'Angel K',
      degree: 'B.Tech AI & CSE',
      institution: 'Anna University',
      matchScore: 92,
      skills: ['PyTorch', 'Python', 'LLMs', 'Computer Vision'],
      repoEvidence: 'github.com/angel-k/edge-defect-detection (96% Practical Score)',
      status: 'Shortlisted'
    },
    {
      id: 'c-2',
      name: 'Pooja Narayanan',
      degree: 'B.Tech AI & Data',
      institution: 'Anna University',
      matchScore: 88,
      skills: ['Machine Learning', 'Power BI', 'SQL', 'Data Analytics'],
      repoEvidence: 'github.com/pooja/smart-analytics-pipeline',
      status: 'Applied'
    },
    {
      id: 'c-3',
      name: 'Vikramaditya S',
      degree: 'M.Tech Intelligent Systems',
      institution: 'IIT Madras',
      matchScore: 86,
      skills: ['Distributed Systems', 'Go', 'Docker', 'Kubernetes'],
      repoEvidence: 'github.com/vikram/high-throughput-rpc',
      status: 'Interview Scheduled'
    },
    {
      id: 'c-4',
      name: 'Siddharth Menon',
      degree: 'B.Tech CSE',
      institution: 'NIT Trichy',
      matchScore: 84,
      skills: ['React', 'Node.js', 'System Design', 'PostgreSQL'],
      repoEvidence: 'github.com/sid/enterprise-microservices',
      status: 'Applied'
    }
  ]);

  const [candidateSearch, setCandidateSearch] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newTitle) return;

    const newOpp = {
      id: `opp-${Date.now()}`,
      title: newTitle,
      company: newCompany,
      roleType: newRoleType,
      domain: newDomain,
      workMode: 'Hybrid',
      location: newLocation,
      duration: '6 months',
      stipend: newStipend,
      postedDate: 'Just now',
      deadline: '30 Nov 2026',
      matchScore: 88,
      matchLabel: 'High Fit',
      applicantsCount: 0,
      description: `New industry opening posted directly by ${recruiter.name} from ${newCompany}. Looking for talented graduates with hands-on project experience.`,
      requiredSkills: newSkills.split(',').map(s => s.trim()),
      openings: 5,
      isFeatured: true
    };

    onAddOpportunity(newOpp);
    setShowPostModal(false);
    setNewTitle('');
    alert('🎉 New opportunity posted successfully to the Skill Orbit Network!');
  };

  const handleFastTrack = (cId, cName) => {
    setCandidatePool(prev => prev.map(c => c.id === cId ? { ...c, status: 'Fast-Track Interview Scheduled' } : c));
    alert(`⚡ Fast-track technical interview invitation sent to ${cName}!`);
  };

  const handleHackathonSubmit = (e) => {
    e.preventDefault();
    if (!hTitle.trim()) return;

    const newChallenge = {
      id: `chal-${Date.now()}`,
      title: hTitle,
      host: hHost || recruiter.company,
      prizePool: hPrize || '₹ 3,50,000 + Direct PPIs',
      deadline: hDeadline || '30 Nov 2026',
      participants: 0,
      difficulty: hDifficulty || 'Hard',
      tags: hTags.split(',').map(t => t.trim()).filter(Boolean),
      summary: hSummary,
      eligibleColleges: hColleges || 'Open to all Engineering Colleges'
    };

    if (onLaunchChallenge) {
      onLaunchChallenge(newChallenge);
    }
    setShowHackathonModal(false);
    setHTitle('');
  };

  const handleFdpSubmit = (e) => {
    e.preventDefault();
    if (!fdpTitle.trim()) return;

    const newFdp = {
      id: `fdp-${Date.now()}`,
      title: fdpTitle,
      host: fdpHost || recruiter.company,
      duration: fdpDuration || '2 Weeks',
      dates: fdpDates || '15 Dec - 30 Dec 2026',
      stipendGrant: fdpStipend || '₹ 50,000 Research Fellowship',
      seats: fdpSeats || '35 Faculty Seats',
      eligibility: fdpEligibility || 'Engineering Faculty',
      curriculum: fdpCurriculum
    };

    if (onHostFdp) {
      onHostFdp(newFdp);
    }
    setShowFdpModal(false);
    setFdpTitle('');
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: 'var(--shadow-card)',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            width: '74px',
            height: '74px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #0F172A, #2563EB)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 800
          }}>
            PS
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A' }}>{recruiter.name}</h1>
              <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '2px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 800 }}>
                Recruiter Portal
              </span>
            </div>
            <p style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 600 }}>
              {recruiter.role} · {recruiter.company}
            </p>
            <p style={{ fontSize: '12.5px', color: '#16A34A', fontWeight: 700, marginTop: '2px' }}>
              ✨ Candidate Talent Matchmaker Engine Active
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setShowFdpModal(true)}
            className="btn-secondary"
            style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <GraduationCap size={16} />
            <span>Host Faculty FDP</span>
          </button>
          <button
            onClick={() => setShowPostModal(true)}
            className="btn-primary"
            style={{ padding: '10px 22px' }}
          >
            <PlusCircle size={16} />
            <span>Post New Opportunity</span>
          </button>
        </div>
      </div>

      {/* Internal Tab Navigation */}
      <div style={{
        display: 'flex',
        gap: '8px',
        borderBottom: '1px solid #E2E8F0',
        paddingBottom: '12px',
        marginBottom: '24px',
        overflowX: 'auto'
      }}>
        {[
          { id: 'overview', label: 'Recruiter Dashboard' },
          { id: 'postings', label: `Active Postings (${opportunities.length})` },
          { id: 'candidates', label: 'Candidate Matchmaker' },
          { id: 'challenges', label: 'Hackathons & Live Challenges' },
          { id: 'fdps', label: `Faculty FDPs & R&D (${activeFdps.length})` }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setCurrentTab(t.id)}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 700,
              background: currentTab === t.id ? '#2563EB' : '#FFFFFF',
              color: currentTab === t.id ? 'white' : '#64748B',
              border: currentTab === t.id ? '1px solid #2563EB' : '1px solid #E2E8F0',
              whiteSpace: 'nowrap'
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px' }}>
        <div className="app-card" style={{ textAlign: 'center', padding: '18px' }}>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#2563EB' }}>{opportunities.length}</div>
          <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Active Postings</div>
        </div>
        <div className="app-card" style={{ textAlign: 'center', padding: '18px' }}>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#16A34A' }}>{candidatePool.length}</div>
          <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Top Matched Candidates</div>
        </div>
        <div className="app-card" style={{ textAlign: 'center', padding: '18px' }}>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#D97706' }}>{recruiter.interviewsScheduledThisWeek}</div>
          <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Interviews Scheduled</div>
        </div>
        <div className="app-card" style={{ textAlign: 'center', padding: '18px' }}>
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#7C3AED' }}>{activeFdps.length}</div>
          <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Faculty FDPs Hosted</div>
        </div>
      </div>

      {/* Tab: Overview / Candidates */}
      {(currentTab === 'overview' || currentTab === 'candidates') && (
        <div className="app-card" style={{ marginBottom: '24px' }}>
          <div className="card-header">
            <div>
              <h2 className="card-title">Talent Matchmaker — Verified Student Candidates</h2>
              <p style={{ fontSize: '12.5px', color: '#64748B' }}>Ranked by AI compatibility against required competencies and code proof.</p>
            </div>
            <div style={{ position: 'relative', width: '260px' }}>
              <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
              <input
                type="text"
                placeholder="Search skills, names..."
                value={candidateSearch}
                onChange={(e) => setCandidateSearch(e.target.value)}
                style={{ width: '100%', padding: '7px 12px 7px 34px', borderRadius: '9999px', border: '1px solid #CBD5E1', fontSize: '12px' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {candidatePool
              .filter(c => c.name.toLowerCase().includes(candidateSearch.toLowerCase()) || c.skills.some(s => s.toLowerCase().includes(candidateSearch.toLowerCase())))
              .map((c) => (
                <div
                  key={c.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px',
                    borderRadius: '14px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    flexWrap: 'wrap',
                    gap: '14px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, #2563EB, #60A5FA)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '15px'
                    }}>
                      {c.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>{c.name}</h3>
                        <span style={{
                          background: c.matchScore >= 90 ? '#F0FDF4' : '#EFF6FF',
                          color: c.matchScore >= 90 ? '#16A34A' : '#2563EB',
                          border: c.matchScore >= 90 ? '1px solid #BBF7D0' : '1px solid #BFDBFE',
                          padding: '2px 8px',
                          borderRadius: '9999px',
                          fontSize: '11px',
                          fontWeight: 800
                        }}>
                          {c.matchScore}% Match
                        </span>
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#64748B' }}>
                        {c.degree} · {c.institution}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '6px' }}>
                        {c.skills.map((s, sIdx) => (
                          <span key={sIdx} className="skill-pill" style={{ fontSize: '10.5px' }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      background: '#FFFFFF',
                      border: '1px solid #CBD5E1',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#475569'
                    }}>
                      Status: {c.status}
                    </span>

                    <button
                      onClick={() => handleFastTrack(c.id, c.name)}
                      className="btn-primary"
                      style={{ padding: '8px 16px', fontSize: '12.5px' }}
                    >
                      <Send size={13} />
                      <span>Fast-track Interview</span>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Tab: Postings */}
      {currentTab === 'postings' && (
        <div className="app-card">
          <div className="card-header">
            <h2 className="card-title">Live Company Job & Internship Postings</h2>
            <button onClick={() => setShowPostModal(true)} className="btn-primary" style={{ padding: '8px 16px', fontSize: '12.5px' }}>
              <PlusCircle size={14} />
              <span>Add New Role</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {opportunities.map((opp) => (
              <div key={opp.id} style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '18px', background: '#F8FAFC' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#2563EB', background: '#EFF6FF', padding: '2px 8px', borderRadius: '9999px' }}>
                    {opp.roleType}
                  </span>
                  <span style={{ fontSize: '12px', color: '#16A34A', fontWeight: 700 }}>{opp.stipend}</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>{opp.title}</h3>
                <p style={{ fontSize: '12.5px', color: '#64748B', marginBottom: '10px' }}>{opp.company} · {opp.location}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#475569', paddingTop: '10px', borderTop: '1px solid #E2E8F0' }}>
                  <span>Applicants: <strong>{opp.applicantsCount || 0}</strong></span>
                  <span style={{ color: '#2563EB', fontWeight: 700 }}>Openings: {opp.openings || 5}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Challenges & Hackathons */}
      {currentTab === 'challenges' && (
        <div className="app-card">
          <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h2 className="card-title" style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>
                Live Industry Innovation Challenges & Hackathons Hosted
              </h2>
              <p style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>
                Active problem statements published across partnered Engineering Colleges, Academicians, and Student Portals.
              </p>
            </div>
            <button 
              onClick={() => setShowHackathonModal(true)} 
              className="btn-primary" 
              style={{ padding: '9px 18px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <PlusCircle size={15} />
              <span>Launch Hackathon</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {challenges.map((chal) => (
              <div 
                key={chal.id}
                style={{ 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '16px', 
                  padding: '22px', 
                  background: '#FFFFFF',
                  boxShadow: 'var(--shadow-xs)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '10px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ 
                        fontSize: '11px', 
                        fontWeight: 800, 
                        color: '#2563EB', 
                        background: '#EFF6FF', 
                        border: '1px solid #DBEAFE',
                        padding: '2px 8px', 
                        borderRadius: '6px',
                        textTransform: 'uppercase'
                      }}>
                        {chal.host || recruiter.company}
                      </span>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        color: chal.difficulty === 'Advanced' ? '#DC2626' : '#D97706',
                        background: chal.difficulty === 'Advanced' ? '#FEE2E2' : '#FEF3C7',
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}>
                        {chal.difficulty || 'Hard'}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A' }}>{chal.title}</h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ 
                      fontSize: '13px', 
                      fontWeight: 800, 
                      color: '#B45309', 
                      background: '#FEF3C7', 
                      border: '1px solid #FDE68A',
                      padding: '4px 12px', 
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Trophy size={14} />
                      {chal.prizePool || '₹ 2,50,000 Prize Pool'}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5, marginBottom: '14px' }}>
                  {chal.summary}
                </p>

                {/* Target Skills / Tags */}
                {chal.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                    {chal.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        style={{ 
                          fontSize: '11.5px', 
                          fontWeight: 700, 
                          color: '#334155', 
                          background: '#F1F5F9', 
                          padding: '3px 8px', 
                          borderRadius: '6px' 
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                  <div style={{ fontSize: '12.5px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span>👥 Active Submissions: <strong>{chal.participants || 0} College Teams</strong></span>
                    <span>⏳ Deadline: <strong>{chal.deadline}</strong></span>
                  </div>

                  <button 
                    onClick={() => alert(`Reviewing submissions for "${chal.title}". Anna University, IIT Madras, and NIT Trichy cohorts enrolled.`)} 
                    className="btn-secondary" 
                    style={{ fontSize: '12.5px', padding: '7px 16px', borderRadius: '8px' }}
                  >
                    Review Candidate Submissions ({chal.participants || 0})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Faculty FDPs & Fellowships Hosted */}
      {currentTab === 'fdps' && (
        <div className="app-card">
          <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h2 className="card-title" style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>
                  Sponsored Faculty Development Programs (FDPs) & Immersion Grants
                </h2>
                <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '2px 8px', borderRadius: '9999px', fontSize: '11px', fontWeight: 800 }}>
                  Academics & Research Focus
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>
                Upskill university professors and formulate co-branded curriculums and joint research projects.
              </p>
            </div>
            <button 
              onClick={() => setShowFdpModal(true)} 
              className="btn-primary" 
              style={{ padding: '9px 18px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <PlusCircle size={15} />
              <span>Host Faculty FDP</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {activeFdps.map((prog) => (
              <div 
                key={prog.id}
                style={{ 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '16px', 
                  padding: '22px', 
                  background: '#FFFFFF',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                  <div>
                    <span style={{ 
                      fontSize: '11px', 
                      fontWeight: 800, 
                      color: '#2563EB', 
                      background: '#EFF6FF', 
                      border: '1px solid #BFDBFE',
                      padding: '2px 8px', 
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                      display: 'inline-block'
                    }}>
                      {prog.host}
                    </span>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A' }}>{prog.title}</h3>
                  </div>

                  <span style={{ 
                    fontSize: '13px', 
                    fontWeight: 800, 
                    color: '#16A34A', 
                    background: '#F0FDF4', 
                    border: '1px solid #BBF7D0',
                    padding: '4px 12px', 
                    borderRadius: '9999px' 
                  }}>
                    {prog.stipendGrant}
                  </span>
                </div>

                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5, marginBottom: '14px' }}>
                  <strong>Curriculum Focus:</strong> {prog.curriculum}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', paddingTop: '12px', borderTop: '1px solid #F1F5F9' }}>
                  <div style={{ fontSize: '12.5px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>📅 Dates: <strong>{prog.dates || prog.duration}</strong></span>
                    <span>🎓 Target: <strong>{prog.eligibility}</strong></span>
                    <span>🪑 Capacity: <strong>{prog.seats}</strong></span>
                  </div>

                  <button 
                    onClick={() => alert(`Opening Faculty Application Review for "${prog.title}". 18 Professor nominations received from Anna University and IIT Madras.`)} 
                    className="btn-secondary" 
                    style={{ fontSize: '12.5px', padding: '7px 16px', borderRadius: '8px' }}
                  >
                    View Faculty Applications (18 Enrolled)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🚀 Launch Innovation Challenge / Hackathon Modal */}
      {showHackathonModal && (
        <div className="modal-overlay" onClick={() => setShowHackathonModal(false)}>
          <div className="modal-card" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '24px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#EFF6FF',
                  color: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Trophy size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>Launch Innovation Hackathon / Challenge</h3>
                  <p style={{ fontSize: '12px', color: '#64748B' }}>Publish directly to partnered Colleges, Faculty Mentors, and Students</p>
                </div>
              </div>
              <button onClick={() => setShowHackathonModal(false)} style={{ color: '#94A3B8', border: 'none', background: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleHackathonSubmit} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '75vh', overflowY: 'auto' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Hackathon / Challenge Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next-Gen Multimodal AI & Industrial Edge Copilot Hackathon"
                  value={hTitle}
                  onChange={(e) => setHTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Host Enterprise / Lab *</label>
                  <input
                    type="text"
                    required
                    value={hHost}
                    onChange={(e) => setHHost(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Prize Pool & Perks *</label>
                  <input
                    type="text"
                    required
                    value={hPrize}
                    onChange={(e) => setHPrize(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Submission Deadline *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 30 Nov 2026"
                    value={hDeadline}
                    onChange={(e) => setHDeadline(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Difficulty Level</label>
                  <select
                    value={hDifficulty}
                    onChange={(e) => setHDifficulty(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px', background: 'white' }}
                  >
                    <option value="Intermediate">Intermediate (UG Students)</option>
                    <option value="Hard">Hard (Final Year & M.Tech)</option>
                    <option value="Advanced">Advanced (Research Labs & Hackers)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Target Skills / Tags (comma-separated)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Computer Vision, PyTorch, Edge AI, React"
                  value={hTags}
                  onChange={(e) => setHTags(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Problem Statement & Summary *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe the challenge statement, technical benchmarks (e.g. >95% accuracy, <20ms latency), and deliverables expected from student teams."
                  value={hSummary}
                  onChange={(e) => setHSummary(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Eligible Colleges & Targeting</label>
                <input
                  type="text"
                  value={hColleges}
                  onChange={(e) => setHColleges(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '14px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                <button
                  type="button"
                  onClick={() => setShowHackathonModal(false)}
                  style={{ padding: '10px 18px', borderRadius: '8px', border: '1px solid #E2E8F0', fontWeight: 700, background: '#F8FAFC', color: '#475569', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '10px 22px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Trophy size={16} />
                  <span>Publish Hackathon Live</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 🎓 Host Faculty FDP Modal */}
      {showFdpModal && (
        <div className="modal-overlay" onClick={() => setShowFdpModal(false)}>
          <div className="modal-card" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '24px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#EFF6FF',
                  color: '#2563EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>Host Faculty Development Program (FDP)</h3>
                  <p style={{ fontSize: '12px', color: '#64748B' }}>Publish funded immersion programs and research fellowships directly to university faculty</p>
                </div>
              </div>
              <button onClick={() => setShowFdpModal(false)} style={{ color: '#94A3B8', border: 'none', background: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleFdpSubmit} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '75vh', overflowY: 'auto' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>FDP Program Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Faculty Immersion: Generative AI, Cloud Infrastructure & Lab Modernization"
                  value={fdpTitle}
                  onChange={(e) => setFdpTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Host Enterprise / Lab *</label>
                  <input
                    type="text"
                    required
                    value={fdpHost}
                    onChange={(e) => setFdpHost(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Stipend / Research Fellowship Grant *</label>
                  <input
                    type="text"
                    required
                    value={fdpStipend}
                    onChange={(e) => setFdpStipend(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Duration & Format *</label>
                  <input
                    type="text"
                    required
                    value={fdpDuration}
                    onChange={(e) => setFdpDuration(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Scheduled Dates *</label>
                  <input
                    type="text"
                    required
                    value={fdpDates}
                    onChange={(e) => setFdpDates(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Faculty Eligibility</label>
                  <input
                    type="text"
                    required
                    value={fdpEligibility}
                    onChange={(e) => setFdpEligibility(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Available Faculty Seats</label>
                  <input
                    type="text"
                    required
                    value={fdpSeats}
                    onChange={(e) => setFdpSeats(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Curriculum & Research Focus Areas *</label>
                <textarea
                  required
                  rows={3}
                  value={fdpCurriculum}
                  onChange={(e) => setFdpCurriculum(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', fontSize: '13px', fontFamily: 'inherit', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '14px', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                <button
                  type="button"
                  onClick={() => setShowFdpModal(false)}
                  style={{ padding: '10px 18px', borderRadius: '8px', border: '1px solid #E2E8F0', fontWeight: 700, background: '#F8FAFC', color: '#475569', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '10px 22px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <GraduationCap size={16} />
                  <span>Publish Faculty FDP Live</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Post Opportunity Modal */}
      {showPostModal && (
        <div className="modal-overlay" onClick={() => setShowPostModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '24px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>Publish New Industry Opening</h3>
              <button onClick={() => setShowPostModal(false)} style={{ color: '#94A3B8' }}><X size={18} /></button>
            </div>
            <form onSubmit={handlePostSubmit} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Job / Internship Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Generative AI Engineer Intern"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Required Skills (comma separated)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Python, PyTorch, LLMs"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Monthly Stipend / Package</label>
                  <input
                    type="text"
                    value={newStipend}
                    onChange={(e) => setNewStipend(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Location & Mode</label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={() => setShowPostModal(false)}
                  style={{ padding: '10px 18px', borderRadius: '8px', border: '1px solid #E2E8F0', fontWeight: 700 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Publish Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
