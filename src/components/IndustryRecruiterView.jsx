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
  ShieldCheck
} from 'lucide-react';

export default function IndustryRecruiterView({ 
  recruiter, 
  opportunities, 
  onAddOpportunity, 
  student,
  activeTab = 'dashboard'
}) {
  const [currentTab, setCurrentTab] = useState(
    activeTab === 'manage-postings' ? 'postings' :
    activeTab === 'candidate-matchmaker' ? 'candidates' :
    activeTab === 'post-opportunity' ? 'post' :
    activeTab === 'industry-challenges' ? 'challenges' : 'overview'
  );

  React.useEffect(() => {
    if (activeTab === 'manage-postings') setCurrentTab('postings');
    else if (activeTab === 'candidate-matchmaker') setCurrentTab('candidates');
    else if (activeTab === 'post-opportunity') setCurrentTab('post');
    else if (activeTab === 'industry-challenges') setCurrentTab('challenges');
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

        <button
          onClick={() => setShowPostModal(true)}
          className="btn-primary"
          style={{ padding: '10px 22px' }}
        >
          <PlusCircle size={16} />
          <span>Post New Opportunity</span>
        </button>
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
          { id: 'challenges', label: 'Hackathons & Live Challenges' }
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
          <div style={{ fontSize: '24px', fontWeight: 800, color: '#7C3AED' }}>{recruiter.offersExtended}</div>
          <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>Offers Extended</div>
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

      {/* Tab: Challenges */}
      {currentTab === 'challenges' && (
        <div className="app-card">
          <div className="card-header">
            <h2 className="card-title">Live Industry Innovation Challenges Hosted</h2>
            <button onClick={() => alert('Challenge builder launched! Enter problem statement and test datasets.')} className="btn-primary" style={{ padding: '8px 16px', fontSize: '12.5px' }}>
              <PlusCircle size={14} />
              <span>Launch Hackathon</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '18px', background: '#F8FAFC' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>Edge AI Surface Defect Detection Challenge</h3>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#B45309', background: '#FEF3C7', padding: '2px 8px', borderRadius: '9999px' }}>
                  ₹ 2,50,000 Prize Pool
                </span>
              </div>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '12px' }}>
                Active Submissions: <strong>412 Teams</strong> · Top accuracy benchmark: 97.4% mAP
              </p>
              <button onClick={() => alert('Viewing 412 submissions from Anna Univ, IITs and NITs...')} className="btn-secondary" style={{ fontSize: '12px', padding: '6px 14px' }}>
                Review Candidate Submissions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Post Modal */}
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
