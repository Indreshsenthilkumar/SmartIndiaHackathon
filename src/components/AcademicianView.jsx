import React, { useState } from 'react';
import { 
  School, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  TrendingUp,
  Sparkles,
  Search,
  PlusCircle,
  Calendar,
  Layers,
  Send,
  Download
} from 'lucide-react';
import { initialIndustryConnect } from '../data/mockData';

export default function AcademicianView({ academician, onNavigateTab, activeTab = 'dashboard' }) {
  const [currentTab, setCurrentTab] = useState(
    activeTab === 'cohort-monitoring' ? 'cohorts' :
    activeTab === 'faculty-fdp' ? 'fdp' :
    activeTab === 'joint-research' ? 'research' :
    activeTab === 'mentorship-sessions' ? 'mentorship' : 'overview'
  );

  // Sync state if activeTab prop changes
  React.useEffect(() => {
    if (activeTab === 'cohort-monitoring') setCurrentTab('cohorts');
    else if (activeTab === 'faculty-fdp') setCurrentTab('fdp');
    else if (activeTab === 'joint-research') setCurrentTab('research');
    else if (activeTab === 'mentorship-sessions') setCurrentTab('mentorship');
    else if (activeTab === 'dashboard') setCurrentTab('overview');
  }, [activeTab]);

  const [studentRoster, setStudentRoster] = useState([
    { id: 'st-1', name: 'Angel K', roll: '2026-CSE-408', readiness: 92, skills: 'PyTorch, LLMs, Computer Vision', status: 'Shortlisted @ Google', verified: true },
    { id: 'st-2', name: 'Rahul Sundaram', roll: '2026-CSE-412', readiness: 86, skills: 'React, Node, SQL, Docker', status: 'Applied @ Microsoft', verified: true },
    { id: 'st-3', name: 'Pooja Narayanan', roll: '2026-AI-104', readiness: 88, skills: 'Machine Learning, Power BI, Python', status: 'Interviewing @ TCS', verified: true },
    { id: 'st-4', name: 'Karthik Raja', roll: '2026-AI-118', readiness: 74, skills: 'Data Analytics, Tableau, Statistics', status: 'Seeking Internship', verified: false },
    { id: 'st-5', name: 'Deepika M', roll: '2026-CSE-440', readiness: 81, skills: 'Cloud Systems, AWS, Kubernetes', status: 'Offered @ Infosys', verified: true }
  ]);

  const [jointResearchList, setJointResearchList] = useState([
    {
      id: 'jr-1',
      title: 'Edge AI Computer Vision for Manufacturing Defect Localization',
      partner: 'Tata Consultancy Services (TCS Innovation Labs)',
      grantValue: '₹ 18,50,000',
      duration: '18 Months',
      status: 'Active · Milestone 2 in Progress',
      studentResearchInterns: 4
    },
    {
      id: 'jr-2',
      title: 'Autonomous Multi-Agent RAG Telemetry for Enterprise Compliance',
      partner: 'Google Research / Cloud AI',
      grantValue: '₹ 25,00,000',
      duration: '24 Months',
      status: 'Proposal Approved · Funding Released',
      studentResearchInterns: 6
    },
    {
      id: 'jr-3',
      title: 'Smart Grid SCADA Telemetry & Industrial Cybersecurity',
      partner: 'Larsen & Toubro (L&T Control Systems)',
      grantValue: '₹ 12,00,000',
      duration: '12 Months',
      status: 'Under Peer Review',
      studentResearchInterns: 2
    }
  ]);

  const [newProposalTitle, setNewProposalTitle] = useState('');
  const [showProposalModal, setShowProposalModal] = useState(false);

  const handleEndorseStudent = (stId) => {
    setStudentRoster(prev => prev.map(s => s.id === stId ? { ...s, verified: true, readiness: Math.min(99, s.readiness + 3) } : s));
    alert('Faculty endorsement signed and published to student blockchain portfolio!');
  };

  return (
    <div className="page-container">
      {/* Top Banner */}
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
            background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 800
          }}>
            DR
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A' }}>{academician.name}</h1>
              <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '2px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 800 }}>
                Faculty & HOD Portal
              </span>
            </div>
            <p style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 600 }}>
              {academician.designation} · {academician.institution}
            </p>
            <p style={{ fontSize: '12.5px', color: '#2563EB', fontWeight: 700, marginTop: '2px' }}>
              🔬 Domain: {academician.domain}
            </p>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 16px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#2563EB' }}>{academician.researchPapersCount}</div>
            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Publications</div>
          </div>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 16px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#16A34A' }}>{academician.consultancyGrants}</div>
            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>R&D Grants</div>
          </div>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 16px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>{academician.mentoredStudentsCount}</div>
            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Mentored</div>
          </div>
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
          { id: 'overview', label: 'Faculty Overview' },
          { id: 'cohorts', label: 'Student Cohorts & Endorsements' },
          { id: 'fdp', label: 'Faculty FDPs & Industrial Training' },
          { id: 'research', label: 'Joint Industry R&D Grants' },
          { id: 'mentorship', label: 'Office Hours & Mentorship' }
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

      {/* Tab: Overview */}
      {currentTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Cohorts summary */}
          <div className="app-card">
            <div className="card-header">
              <h2 className="card-title">Supervised Department Cohorts & Placement Readiness</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
              {academician.studentCohorts.map((cohort, idx) => (
                <div key={idx} style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '18px', background: '#F8FAFC' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>{cohort.batch}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#64748B', marginBottom: '6px' }}>
                    <span>Enrolled: <strong>{cohort.totalStudents}</strong></span>
                    <span>Assessed: <strong>{cohort.assessedPercent}%</strong></span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#64748B', marginBottom: '12px' }}>
                    <span>Placed / Interning: <strong>{cohort.placedOrInterning}</strong></span>
                    <span style={{ color: '#16A34A', fontWeight: 700 }}>Avg: <strong>{cohort.averageReadiness}%</strong></span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: `${cohort.averageReadiness}%`, height: '100%', background: '#2563EB', borderRadius: '9999px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Faculty Applications */}
          <div className="app-card">
            <div className="card-header">
              <h2 className="card-title">Enrolled Faculty Development Programs (FDPs)</h2>
            </div>
            {academician.facultyApplications.map((app) => (
              <div key={app.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderRadius: '12px', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                <div>
                  <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#166534' }}>{app.programTitle}</div>
                  <div style={{ fontSize: '12.5px', color: '#15803D' }}>Host: {app.host} · Scheduled: {app.dates}</div>
                </div>
                <div style={{ background: '#16A34A', color: 'white', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 800 }}>
                  {app.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Student Cohorts & Endorsements */}
      {currentTab === 'cohorts' && (
        <div className="app-card">
          <div className="card-header">
            <div>
              <h2 className="card-title">Department Student Roster & Faculty Skill Endorsements</h2>
              <p style={{ fontSize: '12.5px', color: '#64748B' }}>Faculty endorsements cryptographically sign student project competencies for recruiters.</p>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #E2E8F0', textAlign: 'left', color: '#475569' }}>
                  <th style={{ padding: '12px 14px' }}>Student Name & Roll</th>
                  <th style={{ padding: '12px 14px' }}>Verified Skills</th>
                  <th style={{ padding: '12px 14px' }}>Skill Readiness</th>
                  <th style={{ padding: '12px 14px' }}>Industry Status</th>
                  <th style={{ padding: '12px 14px', textAlign: 'right' }}>Faculty Action</th>
                </tr>
              </thead>
              <tbody>
                {studentRoster.map((st) => (
                  <tr key={st.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '14px' }}>
                      <div style={{ fontWeight: 800, color: '#0F172A' }}>{st.name}</div>
                      <div style={{ fontSize: '11.5px', color: '#64748B' }}>{st.roll}</div>
                    </td>
                    <td style={{ padding: '14px', color: '#2563EB', fontWeight: 600 }}>
                      {st.skills}
                    </td>
                    <td style={{ padding: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 800, color: st.readiness >= 85 ? '#16A34A' : '#2563EB' }}>{st.readiness}%</span>
                        <div style={{ width: '60px', height: '6px', background: '#E2E8F0', borderRadius: '9999px', overflow: 'hidden' }}>
                          <div style={{ width: `${st.readiness}%`, height: '100%', background: st.readiness >= 85 ? '#16A34A' : '#2563EB' }}></div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '14px' }}>
                      <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '3px 8px', borderRadius: '9999px', fontSize: '11.5px', fontWeight: 700 }}>
                        {st.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px', textAlign: 'right' }}>
                      {st.verified ? (
                        <span style={{ color: '#16A34A', fontWeight: 700, fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <CheckCircle2 size={14} /> Endorsed
                        </span>
                      ) : (
                        <button
                          onClick={() => handleEndorseStudent(st.id)}
                          style={{ background: '#2563EB', color: 'white', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 700 }}
                        >
                          Sign Endorsement
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Faculty FDPs */}
      {currentTab === 'fdp' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {initialIndustryConnect.facultyPrograms.map((prog) => (
            <div key={prog.id} className="app-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 800 }}>
                  Sponsored Industrial Fellowship
                </span>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#16A34A' }}>{prog.stipendGrant}</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>{prog.title}</h3>
              <p style={{ fontSize: '13px', color: '#2563EB', fontWeight: 700, marginBottom: '10px' }}>Host: {prog.host} · {prog.dates}</p>
              <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>{prog.curriculum}</p>
              <button
                onClick={() => alert(`Enrolled in ${prog.title}! Host invitation has been added to your calendar.`)}
                className="btn-primary"
              >
                <span>Register for Faculty Immersion</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Joint Research Grants */}
      {currentTab === 'research' && (
        <div className="app-card">
          <div className="card-header">
            <div>
              <h2 className="card-title">Joint Industry R&D Projects & Sponsored Grants</h2>
              <p style={{ fontSize: '12.5px', color: '#64748B' }}>Collaborate with enterprise research labs and fund student fellowship positions.</p>
            </div>
            <button
              onClick={() => {
                const title = prompt('Enter New Industry R&D Project Title:');
                if (title) {
                  setJointResearchList(prev => [...prev, {
                    id: `jr-${Date.now()}`,
                    title,
                    partner: 'Ministry of Education & SIH Industry Partner',
                    grantValue: '₹ 15,00,000',
                    duration: '12 Months',
                    status: 'Proposal Submitted',
                    studentResearchInterns: 3
                  }]);
                }
              }}
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '12.5px' }}
            >
              <PlusCircle size={14} />
              <span>Submit R&D Proposal</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {jointResearchList.map((res) => (
              <div key={res.id} style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '18px', background: '#F8FAFC' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>{res.title}</h3>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#16A34A' }}>{res.grantValue}</span>
                </div>
                <div style={{ fontSize: '13px', color: '#2563EB', fontWeight: 700, marginBottom: '6px' }}>Partner: {res.partner}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12.5px', color: '#64748B' }}>
                  <span>⏱ Duration: {res.duration}</span>
                  <span>👥 Funded Student Interns: <strong>{res.studentResearchInterns}</strong></span>
                  <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '2px 8px', borderRadius: '9999px', fontWeight: 700 }}>
                    {res.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Mentorship Hours */}
      {currentTab === 'mentorship' && (
        <div className="app-card">
          <div className="card-header">
            <h2 className="card-title">Academic & Career Mentorship Scheduler</h2>
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', marginBottom: '20px' }}>
            Available office hours for department students to seek guidance on research papers, capstone projects, and industry placement preparation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
            {['Monday (3:00 PM - 5:00 PM)', 'Wednesday (10:00 AM - 12:00 PM)', 'Friday (2:00 PM - 4:00 PM)'].map((slot, idx) => (
              <div key={idx} style={{ border: '1px solid #BFDBFE', background: '#EFF6FF', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#1E40AF', marginBottom: '4px' }}>📅 {slot}</div>
                <div style={{ fontSize: '12px', color: '#2563EB' }}>Max 6 Students · AI Lab Room 302</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
