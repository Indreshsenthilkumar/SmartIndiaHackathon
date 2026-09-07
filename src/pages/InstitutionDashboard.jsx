import React, { useState } from 'react';
import { Building2, BarChart2, Briefcase, Award, CheckCircle2, AlertCircle, ArrowRight, Filter, Users, Search, UserCheck } from 'lucide-react';
import MobileBottomNav from '../components/MobileBottomNav';
import StudentReadinessSearchModal from '../components/StudentReadinessSearchModal';

export default function InstitutionDashboard({ institution, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, readiness, demand, outcomes
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchModalRollNo, setSearchModalRollNo] = useState(null);

  const handleOpenSearch = (rollNo = '2026-IT-101') => {
    setSearchModalRollNo(rollNo);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '90vh', paddingBottom: '4rem' }}>
      {/* Institution Banner Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '1.5rem 0'
      }}>
        <div className="max-width-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">INSTITUTION PORTAL</div>
              <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                {institution.name}
              </h1>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                University Skill Readiness & Industry Alignment Intelligence Workspace
              </div>
            </div>

            {/* Feature 3 Action Trigger */}
            <button onClick={() => handleOpenSearch('2026-IT-101')} className="btn btn-primary btn-sm">
              <Search size={15} /> Search Student ID / Roll No
            </button>
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
              { id: 'overview', label: 'Overview', icon: Building2 },
              { id: 'readiness', label: 'Student Readiness & Search', icon: BarChart2 },
              { id: 'demand', label: 'Industry Skill Demand', icon: Briefcase },
              { id: 'outcomes', label: 'Placement & Internship Outcomes', icon: Award }
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

      {/* Main Container */}
      <div className="max-width-wrapper" style={{ marginTop: '2rem' }}>
        {/* KPI Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2rem'
        }}>
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>STUDENTS ASSESSED</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
              {institution.studentsAssessed.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Across 4 Departments</div>
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>CAREER READY</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0D9488', marginTop: '0.2rem' }}>
              {institution.careerReady}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>38% Overall Batch</div>
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>ACTIVE INTERNSHIPS</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>
              {institution.activeInternships}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Enrolled in Partner Orgs</div>
          </div>

          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>PLACEMENT PROGRESS</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
              {institution.placementProgress}%
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Target: 76% by Q4</div>
          </div>
        </div>

        {/* Feature 3 Quick Search Banner */}
        <div className="card" style={{
          padding: '1.5rem',
          backgroundColor: 'var(--accent-light)',
          border: '1px solid var(--accent-border)',
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '0.35rem' }}>
              FEATURE 3 · INSTITUTION STUDENT READINESS SEARCH
            </span>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Search Any Student's Complete 360° Readiness Profile
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              Track assessment results, Competency Twin, GitHub projects, challenge badges, and recommended actions by Roll Number.
            </p>

            <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
              {['2026-IT-101', '2026-CSE-142', '2026-ECE-208', '2026-DS-305'].map((roll) => (
                <button
                  key={roll}
                  onClick={() => handleOpenSearch(roll)}
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.78rem', padding: '0.25rem 0.65rem' }}
                >
                  <Search size={12} /> {roll}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => handleOpenSearch('2026-IT-101')} className="btn btn-primary">
            Open Student ID Lookup
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Priority Insight Banner */}
            <div className="card" style={{
              padding: '1.5rem',
              backgroundColor: 'var(--warning-bg)',
              border: '1px solid var(--warning-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <span className="badge badge-amber" style={{ marginBottom: '0.4rem' }}>
                  PRIORITY ACTIONABLE INSIGHT
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  284 students have a SQL development gap while SQL appears across a large share of current sample opportunities.
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Recommended Action: Launch a 2-week SQL Intensive bridge lab prior to campus placement drives.
                </p>
              </div>

              <button onClick={() => setActiveTab('demand')} className="btn btn-primary btn-sm">
                Review Action Plan
              </button>
            </div>

            {/* Two-Column Grid: Readiness Distribution & Top Gaps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {/* Readiness Distribution */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                  Student Readiness Distribution
                </h3>

                <div style={{ display: 'flex', height: '24px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.25rem' }}>
                  {institution.readinessDistribution.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                        height: '100%',
                        transition: 'width 0.3s ease'
                      }}
                      title={`${item.category}: ${item.count} students (${item.percentage}%)`}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {institution.readinessDistribution.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.color }} />
                        <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{item.category}</span>
                      </div>
                      <span style={{ color: 'var(--text-muted)' }}>
                        <strong>{item.count} students</strong> ({item.percentage}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Skill Gaps Count */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                  Aggregate Skill Gaps Across Students
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {institution.topSkillGaps.map((gap, idx) => (
                    <div key={idx} style={{
                      backgroundColor: 'var(--bg-main)',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-main)' }}>{gap.skill}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Category: {gap.category}</div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span className="badge badge-amber">{gap.studentsCount} Students</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Student Readiness & Roll No Lookup */}
        {activeTab === 'readiness' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Student Readiness & Roll No Lookup</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Search individual student profiles by ID or inspect department-level readiness metrics.</p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button onClick={() => handleOpenSearch('2026-IT-101')} className="btn btn-primary btn-sm">
                  <Search size={14} /> Search Student ID / Roll No
                </button>

                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="form-select"
                  style={{ width: 'auto' }}
                >
                  <option value="All">All Departments</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electronics & Comm">Electronics & Comm</option>
                  <option value="Mechanical Engg">Mechanical Engg</option>
                </select>
              </div>
            </div>

            {/* Department Breakdown Table */}
            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>Enrolled</th>
                    <th>Assessed</th>
                    <th>Career-Ready</th>
                    <th>Active Interns</th>
                    <th>Readiness %</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {institution.outcomesData.departmentBreakdown
                    .filter(d => selectedDept === 'All' || d.department === selectedDept)
                    .map((dept, idx) => {
                      const percentage = Math.round((dept.ready / dept.assessed) * 100);
                      const sampleRollNo = 
                        dept.department.includes('IT') ? '2026-IT-101' :
                        dept.department.includes('Computer') ? '2026-CSE-142' :
                        dept.department.includes('Electronics') ? '2026-ECE-208' : '2026-DS-305';

                      return (
                        <tr key={idx}>
                          <td style={{ fontWeight: 700 }}>{dept.department}</td>
                          <td>{dept.enrolled}</td>
                          <td>{dept.assessed}</td>
                          <td><span className="badge badge-teal">{dept.ready}</span></td>
                          <td>{dept.activeInterns}</td>
                          <td style={{ fontWeight: 700, color: percentage >= 50 ? '#0D9488' : 'var(--warning-text)' }}>
                            {percentage}%
                          </td>
                          <td>
                            <button
                              onClick={() => handleOpenSearch(sampleRollNo)}
                              className="btn btn-secondary btn-sm"
                              style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem' }}
                            >
                              Inspect Student Dossier
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Industry Skill Demand Matrix */}
        {activeTab === 'demand' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Industry Skill Demand Matrix</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Decision-support matrix comparing live sample industry requirements against student readiness.</p>
            </div>

            {/* Matrix Table */}
            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Skill Domain</th>
                    <th>Industry Demand</th>
                    <th>Student Readiness</th>
                    <th>Gap Level</th>
                    <th>Platform Insight</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {institution.industryDemandMatrix.map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 700 }}>{row.skill}</td>
                      <td>
                        <span className={`badge ${row.industryDemand === 'High' ? 'badge-blue' : 'badge-gray'}`}>
                          {row.industryDemand}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${row.studentReadiness === 'High' ? 'badge-teal' : row.studentReadiness === 'Medium' ? 'badge-blue' : 'badge-amber'}`}>
                          {row.studentReadiness}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${row.gapLevel === 'Aligned' ? 'badge-teal' : 'badge-amber'}`}>
                          {row.gapLevel}
                        </span>
                      </td>
                      <td style={{ fontSize: '0.8rem', maxWidth: '280px', whiteSpace: 'normal', lineHeight: 1.4 }}>
                        {row.insight}
                      </td>
                      <td style={{ fontSize: '0.8rem', maxWidth: '260px', whiteSpace: 'normal', color: 'var(--accent-primary)', fontWeight: 600 }}>
                        {row.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Outcomes */}
        {activeTab === 'outcomes' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Placement & Internship Outcomes</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Historical trajectory and current batch outcome progress.</p>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                Year-on-Year Placement Rate Trajectory
              </h3>

              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2rem', height: '180px', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                {institution.outcomesData.placementTrend.map((item, idx) => (
                  <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                      {item.percentage}%
                    </div>
                    <div style={{
                      width: '100%',
                      maxWidth: '50px',
                      backgroundColor: item.year.includes('Target') ? 'var(--accent-light)' : 'var(--accent-primary)',
                      border: item.year.includes('Target') ? '2px dashed var(--accent-primary)' : 'none',
                      height: `${item.percentage * 1.8}px`,
                      borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0'
                    }} />
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                      {item.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Feature 3 Student Readiness Search Modal */}
      {searchModalRollNo && (
        <StudentReadinessSearchModal
          defaultRollNo={searchModalRollNo}
          onClose={() => setSearchModalRollNo(null)}
        />
      )}

      {/* Mobile Navigation */}
      <MobileBottomNav
        role="institution"
        activeTab={activeTab}
        onSelectTab={(tabId) => setActiveTab(tabId)}
        onNavigate={onNavigate}
      />
    </div>
  );
}
