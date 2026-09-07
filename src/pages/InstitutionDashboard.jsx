import React, { useState } from 'react';
import { Building2, BarChart2, Briefcase, Award, CheckCircle2, AlertCircle, ArrowRight, Filter, Users, Search, UserCheck, GraduationCap, Download, FileText } from 'lucide-react';
import MobileBottomNav from '../components/MobileBottomNav';
import StudentReadinessSearchModal from '../components/StudentReadinessSearchModal';

export default function InstitutionDashboard({ institution, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, readiness, demand, outcomes, faculty
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
              { id: 'outcomes', label: 'Detailed Placement & Analytics', icon: Award },
              { id: 'collaboration', label: 'Industry-Academia Collaboration', icon: Users },
              { id: 'faculty', label: 'Faculty FDP & Sabbaticals', icon: GraduationCap },
              { id: 'policy', label: 'Policymaker Skill Intelligence', icon: ShieldCheck }
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

        {/* Tab 4: Outcomes & Detailed Analytics */}
        {activeTab === 'outcomes' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Placement & Skill Analytics Deep-Dive</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Granular department skill heatmaps, internship participation pipelines, stipend distributions, and employer satisfaction ratings.</p>
            </div>

            {/* Placement Trajectory Chart */}
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

            {/* Department Skill Mastery Heatmap Table */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Department-Wise Skill Mastery Heatmap (%)
                </h3>
                <span className="badge badge-teal">Real-Time Benchmark Analytics</span>
              </div>

              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>SQL Querying</th>
                      <th>Python</th>
                      <th>Cloud Infrastructure</th>
                      <th>Product Analytics</th>
                      <th>Communication</th>
                    </tr>
                  </thead>
                  <tbody>
                    {institution.departmentSkillHeatmap.map((row, rindex) => (
                      <tr key={rindex}>
                        <td style={{ fontWeight: 700 }}>{row.department}</td>
                        <td><span className={`badge ${row.sql >= 80 ? 'badge-teal' : row.sql >= 60 ? 'badge-blue' : 'badge-amber'}`}>{row.sql}%</span></td>
                        <td><span className={`badge ${row.python >= 80 ? 'badge-teal' : row.python >= 60 ? 'badge-blue' : 'badge-amber'}`}>{row.python}%</span></td>
                        <td><span className={`badge ${row.cloud >= 80 ? 'badge-teal' : row.cloud >= 60 ? 'badge-blue' : 'badge-amber'}`}>{row.cloud}%</span></td>
                        <td><span className={`badge ${row.analytics >= 80 ? 'badge-teal' : row.analytics >= 60 ? 'badge-blue' : 'badge-amber'}`}>{row.analytics}%</span></td>
                        <td><span className={`badge ${row.communication >= 80 ? 'badge-teal' : row.communication >= 60 ? 'badge-blue' : 'badge-amber'}`}>{row.communication}%</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Two-Column Grid: Internship Participation Pipeline & Stipend Analytics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {/* Internship Participation Funnel */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                  Internship Participation Funnel Analytics
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {institution.internshipPipeline.map((pipe, pidx) => (
                    <div key={pidx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                        <span>{pipe.stage}</span>
                        <span>{pipe.count} Students</span>
                      </div>
                      <div style={{ height: '8px', backgroundColor: 'var(--bg-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${(pipe.count / 320) * 100}%`, backgroundColor: pipe.color, height: '100%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stipend Distribution Analytics */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                  Internship Stipend Distribution
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.85rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Average Stipend</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{institution.stipendAnalytics.averageStipend}</div>
                  </div>
                  <div style={{ padding: '0.85rem', backgroundColor: '#F0FDF4', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Highest Stipend</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0D9488' }}>{institution.stipendAnalytics.highestStipend}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Top Bracket ({institution.stipendAnalytics.topBracket.range})</span>
                    <strong>{institution.stipendAnalytics.topBracket.count} Students ({institution.stipendAnalytics.topBracket.percentage})</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Mid Bracket ({institution.stipendAnalytics.midBracket.range})</span>
                    <strong>{institution.stipendAnalytics.midBracket.count} Students ({institution.stipendAnalytics.midBracket.percentage})</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Entry Bracket ({institution.stipendAnalytics.entryBracket.range})</span>
                    <strong>{institution.stipendAnalytics.entryBracket.count} Students ({institution.stipendAnalytics.entryBracket.percentage})</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Employer Satisfaction Index */}
            <div className="card" style={{ padding: '1.5rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Employer Satisfaction Index
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Based on evaluations from 14 verified industry partners</div>
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0D9488' }}>
                  {institution.employerSatisfaction.overallRating}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {institution.employerSatisfaction.feedback.map((fb, fidx) => (
                  <div key={fidx} style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                      <span>{fb.partner}</span>
                      <span style={{ color: '#0D9488' }}>{fb.rating}</span>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      "{fb.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Industry-Academia Collaboration Hub */}
        {activeTab === 'collaboration' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="eyebrow">5 PILLARS OF COLLABORATION</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  Industry–Academia Collaboration Hub
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Mentorship programs, hands-on workshops, keynote guest lectures, innovation challenges, and live enterprise projects.
                </p>
              </div>

              <button className="btn btn-primary btn-sm" onClick={() => alert("Launching Collaboration Program Publisher...")}>
                + Launch New Joint Program
              </button>
            </div>

            {/* 5 Collaboration Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {/* Mentorship Programs */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Pillar 1 · Mentorship Programs</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  1-on-1 Senior Industry Architect Mentorship
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Mentors: <strong>Dr. Vikram Seth (Meridian) & Priya Nair (Kite)</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                  Active Mentees: <strong>42 Students & Junior Faculty</strong>
                </div>
                <button className="btn btn-secondary btn-sm" style={{ width: '100%' }} onClick={() => alert("Viewing Mentorship Schedule & Feedback Logs...")}>
                  View Mentorship Schedule
                </button>
              </div>

              {/* Workshops & Bootcamps */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Pillar 2 · Technical Workshops</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Cloud Microservices & GenAI Workshops
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Instructors: <strong>Vertex Cloud Leads & AIIA Research Faculty</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                  Total Participants Registered: <strong>350 Students</strong>
                </div>
                <button className="btn btn-secondary btn-sm" style={{ width: '100%' }} onClick={() => alert("Viewing Workshop Materials & Attendance Logs...")}>
                  Manage Workshop Roster
                </button>
              </div>

              {/* Guest Lectures */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Pillar 3 · Guest Lectures</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Industry Keynote Series
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Keynote Speaker: <strong>Anand Prakash (VP Engg, Vertex Systems)</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                  Next Session: <strong>12 Sep 2026 (Live Interactive Stream)</strong>
                </div>
                <button className="btn btn-secondary btn-sm" style={{ width: '100%' }} onClick={() => alert("Accessing Guest Lecture Live Stream Link...")}>
                  Join Keynote Stream
                </button>
              </div>

              {/* Innovation Challenges */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>Pillar 4 · Innovation Challenges</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Real-World Industry Problem Statements
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Active Challenges: <strong>3 Live Problems (Meridian, Vertex, Kite)</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                  Submissions Evaluated: <strong>34 Verified Code Solutions</strong>
                </div>
                <button className="btn btn-secondary btn-sm" style={{ width: '100%' }} onClick={() => alert("Opening Innovation Challenge Submissions Review...")}>
                  Review Challenge Submissions
                </button>
              </div>

              {/* Live Industry Projects */}
              <div className="card" style={{ padding: '1.5rem' }}>
                <div className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Pillar 5 · Live Industry Projects</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Enterprise Capstone Sprint Projects
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Active Projects: <strong>Patient Telemetry Engine & Log Parser Daemon</strong>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                  Co-Mentors: <strong>Industry Engineers & University Leads</strong>
                </div>
                <button className="btn btn-secondary btn-sm" style={{ width: '100%' }} onClick={() => alert("Viewing Live Capstone Sprint Tracker...")}>
                  View Capstone Sprint Board
                </button>
              </div>
            </div>
          </div>
        )}
        {/* TAB 5: FACULTY FDP & SABBATICAL MANAGEMENT */}
        {activeTab === 'faculty' && (
          <div className="card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="eyebrow">FACULTY DEVELOPMENT & SABBATICAL OVERSIGHT</span>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  Institution Faculty FDP & Industrial Sabbatical Intelligence
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Monitor faculty upskilling, AICTE-ATAL FDP completions, industry mentor feedback, and co-host new FDP programs.
                </p>
              </div>

              <button className="btn btn-primary btn-sm" onClick={() => alert("Opening FDP Co-Hosting Proposal Form with Industry Partners...")}>
                + Co-Host FDP with Industry
              </button>
            </div>

            {/* Faculty List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-main)' }}>Dr. Radhakrishnan V</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Associate Professor · Dept of Ayush Tech Research</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span className="badge badge-teal">AICTE-ATAL FDP Certified</span>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.35rem' }}>Readiness Index: 91/100</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Active FDP Program</div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', marginTop: '0.15rem' }}>Machine Learning & Phytomedicine Analytics</div>
                    <div style={{ fontSize: '0.78rem', color: '#0D9488', marginTop: '0.1rem' }}>Attendance: 92% · Exam Score: 84%</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Industrial Sabbatical</div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', marginTop: '0.15rem' }}>Healthcare Analytics at Meridian Digital</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', marginTop: '0.1rem' }}>Mentor Rating: 5.0 / 5.0</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Verified Credentials</div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', marginTop: '0.15rem' }}>16 Scopus Papers · 3 Patents</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>Cert ID: AICTE-ATAL-FDP-9942</div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-main)' }}>Dr. Anitha S</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Assistant Professor · Dept of Computer Science</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span className="badge badge-blue">Enrolled in Cloud FDP</span>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.35rem' }}>Readiness Index: 86/100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* TAB 7: POLICYMAKER SKILL INTELLIGENCE */}
        {activeTab === 'policy' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="eyebrow">NATIONAL POLICYMAKER INTELLIGENCE ENGINE</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                  Macro Skill Readiness & NAAC / AICTE Accreditation Analytics
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Data-driven insights for educational authorities, accreditation councils, and industry policy planners.
                </p>
              </div>

              <button className="btn btn-primary btn-sm" onClick={() => alert("Generating National Skill Intelligence Policy Report PDF...")}>
                <Download size={14} /> Export Macro Policy Report PDF
              </button>
            </div>

            {/* Macro KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>NATIONAL READINESS INDEX</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0D9488', marginTop: '0.2rem' }}>78.4 / 100</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>240+ Participating Institutions</div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>AICTE-ATAL ALIGNMENT</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>94%</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Full Syllabus Mapping</div>
              </div>

              <div className="card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>NAAC CRITERION 3.5 MATCH</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '0.2rem' }}>Grade A++</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Industry Interaction Metric</div>
              </div>
            </div>

            {/* Regional Talent Distribution */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                Regional Student Skill Alignment Heatmap
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>South Region Zone</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0D9488', margin: '0.2rem 0' }}>82% Readiness</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Top Skills: SQL, Python, Ayush Tech</div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>West Region Zone</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-primary)', margin: '0.2rem 0' }}>76% Readiness</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Top Skills: Product Analytics, UX</div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>North Region Zone</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', margin: '0.2rem 0' }}>74% Readiness</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Top Skills: Cloud Infrastructure, Linux</div>
                </div>

                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>East Region Zone</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#D97706', margin: '0.2rem 0' }}>70% Readiness</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Top Skills: Data Science, Excel</div>
                </div>
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
