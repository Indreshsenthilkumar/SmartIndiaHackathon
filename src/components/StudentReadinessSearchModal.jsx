import React, { useState } from 'react';
import { X, Search, ShieldCheck, Code2, Award, CheckCircle2, AlertCircle, ArrowRight, UserCheck, BookOpen } from 'lucide-react';
import { searchableStudents } from '../data/mockData';

export default function StudentReadinessSearchModal({ onClose, defaultRollNo = '2026-IT-101' }) {
  const [searchTerm, setSearchTerm] = useState(defaultRollNo);
  const [activeStudent, setActiveStudent] = useState(searchableStudents[defaultRollNo] || searchableStudents['2026-IT-101']);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchTerm.trim();
    if (searchableStudents[query]) {
      setActiveStudent(searchableStudents[query]);
    } else {
      // Find fuzzy match
      const matchedKey = Object.keys(searchableStudents).find(k => k.toLowerCase().includes(query.toLowerCase()) || searchableStudents[k].name.toLowerCase().includes(query.toLowerCase()));
      if (matchedKey) {
        setActiveStudent(searchableStudents[matchedKey]);
      }
    }
  };

  const handleSelectSample = (rollNo) => {
    setSearchTerm(rollNo);
    setActiveStudent(searchableStudents[rollNo]);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px', maxHeight: '92vh' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <span className="badge badge-amber" style={{ marginBottom: '0.35rem' }}>
              FEATURE 3 · INSTITUTION STUDENT READINESS SEARCH
            </span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Student 360° Readiness Dossier Lookup
            </h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Search Bar & Quick Sample Suggestions */}
        <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--bg-subtle)', marginBottom: '1.25rem' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter Student ID / Roll Number (e.g. 2026-IT-101)..."
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-sm">
              Search Dossier
            </button>
          </form>

          {/* Quick Demo Roll No Suggestions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.78rem' }}>
            <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Quick Demo Profiles:</span>
            {Object.keys(searchableStudents).map((roll) => (
              <button
                key={roll}
                onClick={() => handleSelectSample(roll)}
                style={{
                  background: activeStudent.rollNumber === roll ? 'var(--accent-primary)' : '#FFFFFF',
                  color: activeStudent.rollNumber === roll ? '#FFFFFF' : 'var(--text-main)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {roll} ({searchableStudents[roll].name})
              </button>
            ))}
          </div>
        </div>

        {/* Student 360° Readiness Dossier Content */}
        {activeStudent ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Top Identity Banner */}
            <div className="card" style={{ padding: '1.25rem', backgroundColor: '#FFFFFF', borderLeft: '4px solid var(--accent-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <span className="badge badge-gray" style={{ marginBottom: '0.35rem' }}>
                    Roll No: {activeStudent.rollNumber}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {activeStudent.name}
                  </h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    {activeStudent.degree} · CGPA: <strong>{activeStudent.cgpa}</strong> ({activeStudent.gradYear})
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{
                    backgroundColor: 'var(--accent-light)',
                    border: '1px solid var(--accent-border)',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent-primary)' }}>READINESS</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>{activeStudent.overallReadiness}%</div>
                  </div>

                  <div style={{
                    backgroundColor: '#F0FDF4',
                    border: '1px solid #99F6E4',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#0D9488' }}>COMPETENCY TWIN</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0D9488' }}>{activeStudent.competencyTwin.overallScore}%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Two-Column Detail Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {/* Left Column: Skills & GitHub Code Evidence */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Verified Skills */}
                <div className="card" style={{ padding: '1.15rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    Top Assessed Skills & Evidence
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {activeStudent.topSkills.map((sk, idx) => (
                      <div key={idx} style={{
                        backgroundColor: 'var(--bg-subtle)',
                        padding: '0.6rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.825rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{sk.name}</div>
                          <div style={{ fontSize: '0.73rem', color: 'var(--text-light)' }}>Evidence: {sk.evidence}</div>
                        </div>
                        <span className="badge badge-teal">{sk.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified GitHub Projects */}
                <div className="card" style={{ padding: '1.15rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    Verified GitHub Projects & Code Analysis
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {activeStudent.githubProjects.map((p, idx) => (
                      <div key={idx} style={{
                        backgroundColor: 'var(--bg-subtle)',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.825rem'
                      }}>
                        <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{p.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.15rem' }}>
                          Repo: <code style={{ color: 'var(--accent-primary)' }}>{p.repoUrl}</code> · Code Complexity: <strong>{p.complexity}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Skill Gaps, Challenges & Institutional Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Priority Skill Gaps */}
                <div className="card" style={{ padding: '1.15rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    Identified Skill Gaps
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {activeStudent.skillGaps.map((gap, idx) => (
                      <div key={idx} style={{
                        backgroundColor: 'var(--warning-bg)',
                        border: '1px solid var(--warning-border)',
                        padding: '0.6rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.825rem'
                      }}>
                        <div style={{ fontWeight: 700, color: 'var(--warning-text)' }}>{gap.skill}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                          Current: {gap.current} → Target: {gap.target}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Completed Industry Challenges */}
                <div className="card" style={{ padding: '1.15rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    Validated Industry Challenges
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {activeStudent.completedChallenges.map((ch, idx) => (
                      <div key={idx} style={{
                        backgroundColor: 'var(--accent-light)',
                        border: '1px solid var(--accent-border)',
                        padding: '0.6rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.825rem'
                      }}>
                        <div style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{ch.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          Partner: <strong>{ch.partner}</strong> · {ch.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Institutional Action */}
                <div className="card" style={{ padding: '1.15rem', backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent-border)' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, uppercase: true, color: 'var(--accent-primary)', marginBottom: '0.35rem' }}>
                    RECOMMENDED INSTITUTIONAL ACTIONS
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', fontSize: '0.825rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {activeStudent.recommendedActions.map((act, idx) => (
                      <li key={idx} style={{ fontWeight: 600 }}>{act}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No student found matching Roll Number <strong>{searchTerm}</strong>.
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
}
