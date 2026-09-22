import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Bookmark, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Building,
  Briefcase,
  Layers,
  ChevronRight,
  Send
} from 'lucide-react';

export default function OpportunitiesView({
  opportunities,
  student,
  searchQuery,
  onSelectOpportunity,
  onApplyOpportunity,
  onToggleSaveOpportunity
}) {
  const [activeTab, setActiveTab] = useState('browse'); // 'browse' or 'applications'
  const [roleFilter, setRoleFilter] = useState('All');
  const [workModeFilter, setWorkModeFilter] = useState('All');
  const [localSearch, setLocalSearch] = useState('');

  const query = (searchQuery || localSearch).toLowerCase();

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesSearch = 
      opp.title.toLowerCase().includes(query) ||
      opp.company.toLowerCase().includes(query) ||
      opp.requiredSkills.some(s => s.toLowerCase().includes(query)) ||
      opp.domain.toLowerCase().includes(query);

    const matchesRole = roleFilter === 'All' || opp.roleType.toLowerCase().includes(roleFilter.toLowerCase());
    const matchesWorkMode = workModeFilter === 'All' || opp.workMode.toLowerCase() === workModeFilter.toLowerCase();

    return matchesSearch && matchesRole && matchesWorkMode;
  });

  return (
    <div className="page-container">
      {/* Top Banner & Tab Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
            Opportunities & Placements
          </h1>
          <p style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 500 }}>
            Curated industry internships, entry-level roles, live projects, and faculty fellowships.
          </p>
        </div>

        <div style={{
          display: 'flex',
          background: '#FFFFFF',
          padding: '4px',
          borderRadius: '9999px',
          border: '1px solid #E2E8F0',
          boxShadow: 'var(--shadow-xs)'
        }}>
          <button
            onClick={() => setActiveTab('browse')}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 700,
              background: activeTab === 'browse' ? '#2563EB' : 'transparent',
              color: activeTab === 'browse' ? 'white' : '#64748B',
              transition: 'all 0.15s ease'
            }}
          >
            Browse Listings ({filteredOpportunities.length})
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 700,
              background: activeTab === 'applications' ? '#2563EB' : 'transparent',
              color: activeTab === 'applications' ? 'white' : '#64748B',
              transition: 'all 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>My Applications</span>
            <span style={{
              background: activeTab === 'applications' ? '#1D4ED8' : '#EFF6FF',
              color: activeTab === 'applications' ? 'white' : '#2563EB',
              fontSize: '11px',
              padding: '2px 7px',
              borderRadius: '9999px'
            }}>
              {student.applications?.length || 0}
            </span>
          </button>
        </div>
      </div>

      {activeTab === 'browse' ? (
        <>
          {/* Filters Bar */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '16px 20px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            boxShadow: 'var(--shadow-xs)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748B', fontSize: '13px', fontWeight: 700 }}>
              <Filter size={15} />
              <span>Filters:</span>
            </div>

            {/* Role Type Filter */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['All', 'Internship', 'Full-Time', 'Faculty'].map((r) => (
                <button
                  key={r}
                  onClick={() => setRoleFilter(r)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: roleFilter === r ? '#EFF6FF' : '#F8FAFC',
                    color: roleFilter === r ? '#2563EB' : '#64748B',
                    border: roleFilter === r ? '1px solid #BFDBFE' : '1px solid #E2E8F0'
                  }}
                >
                  {r === 'All' ? 'All Types' : r}
                </button>
              ))}
            </div>

            <div style={{ width: '1px', height: '24px', background: '#E2E8F0' }}></div>

            {/* Work Mode Filter */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {['All', 'Remote', 'Hybrid', 'On-site'].map((m) => (
                <button
                  key={m}
                  onClick={() => setWorkModeFilter(m)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: workModeFilter === m ? '#EFF6FF' : '#F8FAFC',
                    color: workModeFilter === m ? '#2563EB' : '#64748B',
                    border: workModeFilter === m ? '1px solid #BFDBFE' : '1px solid #E2E8F0'
                  }}
                >
                  {m === 'All' ? 'All Modes' : m}
                </button>
              ))}
            </div>
          </div>

          {/* Opportunities List */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
            {filteredOpportunities.map((opp) => {
              const isApplied = student.applications?.some(a => a.opportunityId === opp.id);
              const isSaved = student.savedOpportunities?.includes(opp.id);

              return (
                <div 
                  key={opp.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '18px',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-card)',
                    position: 'relative',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    {/* Top Row: Company & Match Badge */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '18px',
                          color: '#2563EB'
                        }}>
                          {opp.company.charAt(0)}
                        </div>
                        <div>
                          <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                            {opp.title}
                          </h3>
                          <p style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                            {opp.company}
                          </p>
                        </div>
                      </div>

                      {/* Match Score Badge */}
                      <div style={{
                        background: opp.matchScore >= 85 ? '#F0FDF4' : '#EFF6FF',
                        border: opp.matchScore >= 85 ? '1px solid #BBF7D0' : '1px solid #BFDBFE',
                        color: opp.matchScore >= 85 ? '#16A34A' : '#2563EB',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        fontSize: '11.5px',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <Sparkles size={12} />
                        <span>{opp.matchScore}% Match</span>
                      </div>
                    </div>

                    <p style={{
                      fontSize: '13px',
                      color: '#475569',
                      lineHeight: 1.45,
                      marginBottom: '16px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {opp.description}
                    </p>

                    {/* Required Skills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {opp.requiredSkills.map((skill, idx) => {
                        const studentHas = student.skills.some(s => s.name.toLowerCase() === skill.toLowerCase());
                        return (
                          <span 
                            key={idx}
                            style={{
                              background: studentHas ? '#EFF6FF' : '#F8FAFC',
                              color: studentHas ? '#2563EB' : '#64748B',
                              border: studentHas ? '1px solid #BFDBFE' : '1px solid #E2E8F0',
                              fontSize: '11px',
                              fontWeight: 700,
                              padding: '3px 9px',
                              borderRadius: '9999px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            {studentHas ? '✓' : '•'} {skill}
                          </span>
                        );
                      })}
                    </div>

                    {/* Meta Row: Location, Duration, Stipend */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#64748B',
                      marginBottom: '18px',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={13} color="#94A3B8" /> {opp.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={13} color="#94A3B8" /> {opp.duration}
                      </span>
                      <span style={{ color: '#0F172A', fontWeight: 700 }}>
                        {opp.stipend}
                      </span>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={() => onSelectOpportunity(opp)}
                      style={{
                        flex: 1,
                        background: '#FFFFFF',
                        border: '1.5px solid #2563EB',
                        color: '#2563EB',
                        padding: '9px 14px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </button>

                    {isApplied ? (
                      <div style={{
                        background: '#F0FDF4',
                        color: '#16A34A',
                        border: '1px solid #BBF7D0',
                        padding: '9px 16px',
                        borderRadius: '10px',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <CheckCircle2 size={15} />
                        <span>Applied</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => onSelectOpportunity(opp)}
                        style={{
                          background: '#2563EB',
                          color: 'white',
                          padding: '9px 18px',
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(37,99,235,0.25)'
                        }}
                      >
                        <Send size={13} />
                        <span>Apply Now</span>
                      </button>
                    )}

                    <button
                      onClick={() => onToggleSaveOpportunity(opp.id)}
                      style={{
                        padding: '9px',
                        borderRadius: '10px',
                        border: '1px solid #E2E8F0',
                        color: isSaved ? '#2563EB' : '#94A3B8'
                      }}
                      title={isSaved ? "Saved" : "Save"}
                    >
                      <Bookmark size={16} fill={isSaved ? "#2563EB" : "none"} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        /* Applications Tracker Tab */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {student.applications.map((app) => (
            <div 
              key={app.id}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '18px',
                padding: '24px',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A' }}>{app.role}</h3>
                  <p style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 600 }}>
                    {app.company} · {app.location}
                  </p>
                </div>
                <div style={{
                  background: '#EFF6FF',
                  color: '#2563EB',
                  border: '1px solid #BFDBFE',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12.5px',
                  fontWeight: 700
                }}>
                  Current Status: {app.status}
                </div>
              </div>

              {/* Application Timeline Stepper */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${app.timeline.length}, 1fr)`,
                gap: '8px',
                background: '#F8FAFC',
                padding: '16px',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                marginBottom: app.submissionDetails ? '16px' : '0'
              }}>
                {app.timeline.map((step, idx) => (
                  <div key={idx} style={{ textAlign: 'center', position: 'relative' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '9999px',
                      background: step.completed ? '#2563EB' : step.active ? '#F59E0B' : '#E2E8F0',
                      color: step.completed || step.active ? 'white' : '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 6px',
                      fontSize: '12px',
                      fontWeight: 800
                    }}>
                      {step.completed ? '✓' : idx + 1}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>{step.stage}</div>
                    <div style={{ fontSize: '11px', color: '#64748B' }}>{step.date}</div>
                  </div>
                ))}
              </div>

              {/* Submitted Dossier Details */}
              {app.submissionDetails && (
                <div style={{
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px',
                  fontSize: '12px',
                  color: '#1E40AF'
                }}>
                  <div>
                    <strong>Application Ref:</strong> {app.submissionDetails.appId} · <strong>Resume:</strong> {app.submissionDetails.resumeFileName}
                  </div>
                  <div>
                    <strong>Available Start Date:</strong> {app.submissionDetails.startDate} · <strong>CGPA:</strong> {app.submissionDetails.cgpa}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
