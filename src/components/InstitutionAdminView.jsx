import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Users, 
  ArrowRight,
  School,
  FileCheck,
  Download,
  BarChart3,
  Calendar,
  Layers,
  Trophy,
  Zap,
  Sparkles,
  Send
} from 'lucide-react';
import { initialIndustryConnect } from '../data/mockData';

export default function InstitutionAdminView({ institution, challenges = [], activeTab = 'dashboard' }) {
  const [currentTab, setCurrentTab] = useState(
    activeTab === 'dept-analytics' ? 'departments' :
    activeTab === 'industry-mous' ? 'mous' :
    activeTab === 'accreditation-reports' ? 'accreditation' : 'overview'
  );

  const [nominatedChallenges, setNominatedChallenges] = useState({});
  const [showNominateModal, setShowNominateModal] = useState(null);
  const [selectedCohort, setSelectedCohort] = useState('B.Tech CSE Final Year (60 Students)');

  React.useEffect(() => {
    if (activeTab === 'dept-analytics') setCurrentTab('departments');
    else if (activeTab === 'industry-mous') setCurrentTab('mous');
    else if (activeTab === 'accreditation-reports') setCurrentTab('accreditation');
    else if (activeTab === 'dashboard') setCurrentTab('overview');
  }, [activeTab]);

  const activeChallenges = challenges && challenges.length > 0 ? challenges : initialIndustryConnect.challenges;

  const mousList = [
    { id: 'mou-1', company: 'Google Cloud & AI Labs', dateSigned: 'Jan 2025', validTill: 'Dec 2028', focus: 'GenAI Curriculum & Cloud Credits', studentInternQuota: '50 Interns/Year' },
    { id: 'mou-2', company: 'Microsoft India R&D', dateSigned: 'Mar 2024', validTill: 'Mar 2027', focus: 'Azure Cloud COE & Faculty Immersion', studentInternQuota: '60 Interns/Year' },
    { id: 'mou-3', company: 'Tata Consultancy Services', dateSigned: 'Aug 2023', validTill: 'Aug 2028', focus: 'Industry 4.0 & Edge Robotics Center', studentInternQuota: '120 Interns/Year' },
    { id: 'mou-4', company: 'Larsen & Toubro', dateSigned: 'Jun 2024', validTill: 'Jun 2029', focus: 'Smart Grid Automation Labs', studentInternQuota: '40 Interns/Year' }
  ];

  const handleConfirmNomination = (challengeId) => {
    setNominatedChallenges(prev => ({
      ...prev,
      [challengeId]: selectedCohort
    }));
    setShowNominateModal(null);
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
            background: 'linear-gradient(135deg, #0F172A, #2563EB)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 800
          }}>
            AU
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A' }}>{institution.name}</h1>
              <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '2px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 800 }}>
                Institutional Leadership
              </span>
            </div>
            <p style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 600 }}>
              {institution.location} · {institution.nirfRank} · {institution.naacAccreditation}
            </p>
            <p style={{ fontSize: '12.5px', color: '#16A34A', fontWeight: 700, marginTop: '2px' }}>
              📊 Batch Skill Readiness Index: {institution.batchReadinessScore}%
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 16px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#2563EB' }}>{institution.activeMOUs}</div>
            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Active MOUs</div>
          </div>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 16px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#16A34A' }}>{institution.placedCount}</div>
            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Students Placed</div>
          </div>
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 16px', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#F59E0B' }}>{activeChallenges.length}</div>
            <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Live Challenges</div>
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
          { id: 'overview', label: 'Institutional Leadership Overview' },
          { id: 'departments', label: 'Department Analytics' },
          { id: 'mous', label: `Industry MOUs & Live Challenges (${activeChallenges.length})` },
          { id: 'accreditation', label: 'Accreditation Reports (NIRF / NAAC / NBA)' }
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

      {/* Tab: Overview / Departments */}
      {(currentTab === 'overview' || currentTab === 'departments') && (
        <>
          {/* Department Readiness Matrix */}
          <div className="app-card" style={{ marginBottom: '24px' }}>
            <div className="card-header">
              <h2 className="card-title">Department-wise Skill Readiness & Placement Index</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {institution.departmentReadiness.map((dept, idx) => (
                <div
                  key={idx}
                  style={{
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '16px 20px',
                    background: '#F8FAFC'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>{dept.department}</h3>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB' }}>
                      Readiness: {dept.readiness}%
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', color: '#64748B', marginBottom: '10px' }}>
                    <span>Total Students: <strong>{dept.students}</strong></span>
                    <span style={{ color: '#16A34A', fontWeight: 700 }}>Placed / Interning: <strong>{dept.placed}</strong> ({Math.round((dept.placed / dept.students) * 100)}%)</span>
                  </div>

                  <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: `${dept.readiness}%`, height: '100%', background: '#2563EB', borderRadius: '9999px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Hiring Partners */}
          <div className="app-card">
            <div className="card-header">
              <h2 className="card-title">Top Industry Hiring Partners</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px' }}>
              {institution.topHiringPartners.map((partner, idx) => (
                <div
                  key={idx}
                  style={{
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '16px',
                    background: '#FFFFFF',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>{partner.company}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#2563EB', margin: '4px 0' }}>{partner.count} Offers</div>
                  <div style={{ fontSize: '11.5px', color: '#64748B' }}>Avg: {partner.avgPackage}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Tab: MOUs & Live Industry Hackathons */}
      {currentTab === 'mous' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Live Industry Hackathons Section */}
          <div className="app-card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h2 className="card-title">Live Industry Hackathons & Innovation Challenges</h2>
                  <span style={{ background: '#DCFCE7', color: '#166534', padding: '2px 8px', borderRadius: '9999px', fontSize: '11px', fontWeight: 800 }}>
                    ⚡ Realtime Recruiter Network
                  </span>
                </div>
                <p style={{ fontSize: '12.5px', color: '#64748B' }}>
                  Industry challenges published by partner recruiters (Google, TCS, Microsoft) open for student cohort nominations.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '16px' }}>
              {activeChallenges.map((chal) => {
                const isNominated = nominatedChallenges[chal.id];
                const hostName = chal.host || chal.industryPartner || 'Industry Recruiter';
                const prize = chal.prizePool || chal.prize_pool || '₹ 2,00,000 Prize Pool';
                const tags = chal.tags || ['GenAI', 'Innovation'];

                return (
                  <div
                    key={chal.id}
                    style={{
                      border: isNominated ? '2px solid #22C55E' : '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '20px',
                      background: '#FFFFFF',
                      boxShadow: 'var(--shadow-xs)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{
                          background: '#FEF3C7',
                          color: '#B45309',
                          padding: '3px 8px',
                          borderRadius: '9999px',
                          fontSize: '11.5px',
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <Trophy size={12} /> {prize}
                        </span>
                        <span style={{ fontSize: '11.5px', color: '#64748B', fontWeight: 600 }}>
                          Deadline: {chal.deadline || 'Rolling'}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                        {chal.title}
                      </h3>
                      <div style={{ fontSize: '12.5px', color: '#2563EB', fontWeight: 700, marginBottom: '8px' }}>
                        🏢 Host: {hostName}
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: 1.45, marginBottom: '12px' }}>
                        {chal.summary || chal.description || 'Enterprise hackathon challenge for engineering students.'}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                        {tags.map((t, idx) => (
                          <span key={idx} className="skill-pill" style={{ fontSize: '11px', padding: '3px 8px' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      {isNominated ? (
                        <div style={{
                          background: '#F0FDF4',
                          color: '#16A34A',
                          border: '1px solid #BBF7D0',
                          padding: '10px',
                          borderRadius: '10px',
                          fontSize: '12px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}>
                          <CheckCircle2 size={15} />
                          <span>Nominated: {isNominated}</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowNominateModal(chal)}
                          className="btn-primary"
                          style={{ width: '100%', justifyContent: 'center', fontSize: '12.5px', padding: '9px 14px' }}
                        >
                          <Users size={14} />
                          <span>Nominate Student Cohort</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Institutional MOUs Card */}
          <div className="app-card">
            <div className="card-header">
              <div>
                <h2 className="card-title">Institutional Industry MOUs & Centers of Excellence (COEs)</h2>
                <p style={{ fontSize: '12.5px', color: '#64748B' }}>Active contractual commitments for curriculum co-design, faculty training, and hiring pipelines.</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {mousList.map((mou) => (
                <div key={mou.id} style={{ border: '1px solid #E2E8F0', borderRadius: '14px', padding: '18px', background: '#F8FAFC' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>{mou.company}</h3>
                    <span style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', padding: '2px 8px', borderRadius: '9999px', fontSize: '11.5px', fontWeight: 700 }}>
                      Active until {mou.validTill}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#2563EB', fontWeight: 600, marginBottom: '6px' }}>
                    🎯 Focus Area: {mou.focus}
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#64748B' }}>
                    Signed: {mou.dateSigned} · Annual Quota: <strong>{mou.studentInternQuota}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Accreditation Reports */}
      {currentTab === 'accreditation' && (
        <div className="app-card">
          <div className="card-header">
            <div>
              <h2 className="card-title">Automated Accreditation & Compliance Dossier (NIRF / NAAC / NBA)</h2>
              <p style={{ fontSize: '12.5px', color: '#64748B' }}>One-click export of verified skill gap telemetry, faculty industrial exposure, and placement statistics.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { name: 'NIRF Criterion 3: Placement, Higher Studies & Entrepreneurship (2025-26)', records: '1,240 Verified Placements & Internships' },
              { name: 'NAAC Criterion 2.5: Student Assessment & Industry Competency Alignment', records: '3,840 Automated Skill Benchmark Records' },
              { name: 'NBA Tier-1 Program Outcome (PO) & Course Outcome (CO) Mapping Dossier', records: '100% Departmental Skill Telemetry Mapped' }
            ].map((report, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div>
                  <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#0F172A' }}>{report.name}</div>
                  <div style={{ fontSize: '12.5px', color: '#64748B' }}>{report.records}</div>
                </div>
                <button
                  onClick={() => alert(`Downloading ${report.name} formatted for accreditation audit...`)}
                  className="btn-secondary"
                  style={{ fontSize: '12.5px', padding: '8px 16px' }}
                >
                  <Download size={14} />
                  <span>Download Audit PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Nominate Cohort Modal */}
      {showNominateModal && (
        <div className="modal-overlay" onClick={() => setShowNominateModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Nominate Student Cohort
            </h3>
            <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '18px' }}>
              Select an institutional department cohort to endorse for <strong>{showNominateModal.title}</strong> hosted by <strong>{showNominateModal.host || showNominateModal.industryPartner}</strong>.
            </p>

            <div className="form-group" style={{ marginBottom: '18px' }}>
              <label className="form-label" style={{ fontWeight: 700, color: '#1E293B', marginBottom: '6px', display: 'block' }}>
                Select Department Batch / Cohort:
              </label>
              <select
                value={selectedCohort}
                onChange={e => setSelectedCohort(e.target.value)}
                className="form-input"
                style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #CBD5E1', fontSize: '13.5px' }}
              >
                <option value="B.Tech Computer Science & Engg - Final Year (60 Students)">B.Tech CSE - Final Year (60 Students · Avg Readiness: 92%)</option>
                <option value="B.Tech AI & Data Science - 3rd & 4th Year (45 Students)">B.Tech AI & Data Science (45 Students · Avg Readiness: 89%)</option>
                <option value="B.E Electronics & Communication (50 Students)">B.E ECE - Edge & Embedded Cohort (50 Students · Avg Readiness: 84%)</option>
                <option value="All Eligible Campus Hackathon Teams (120 Students)">All Eligible Campus Hackathon Teams (120 Students)</option>
              </select>
            </div>

            <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '20px', fontSize: '12.5px', color: '#475569' }}>
              🛡️ <strong>Institutional Endorsement:</strong> Nominating this cohort directly shares verified skill telemetry with {showNominateModal.host || showNominateModal.industryPartner} hiring leads and notifies all nominated students via email & SMS.
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setShowNominateModal(null)}
                className="btn-secondary"
                style={{ padding: '8px 16px' }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleConfirmNomination(showNominateModal.id)}
                className="btn-primary"
                style={{ padding: '8px 18px' }}
              >
                <Send size={14} />
                <span>Confirm & Endorse Cohort</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

