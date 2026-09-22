import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  Calendar, 
  Trophy, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  Star, 
  CheckCircle2,
  Video,
  Clock,
  BookOpen,
  Award,
  Zap,
  Globe
} from 'lucide-react';
import { initialIndustryConnect } from '../data/mockData';
import ChallengeSubmissionModal from './ChallengeSubmissionModal';

export default function IndustryConnectView({ currentRole, challenges = [], onApplyOpportunity, addToast }) {
  const isStudent = currentRole === 'student';
  const [activeSubTab, setActiveSubTab] = useState(currentRole === 'academician' ? 'faculty' : 'mentors');
  const [bookedSessions, setBookedSessions] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedChallengeForSubmission, setSelectedChallengeForSubmission] = useState(null);
  const [submittedChallengeIds, setSubmittedChallengeIds] = useState([]);

  // Ensure student cannot get stuck on faculty subtab
  React.useEffect(() => {
    if (isStudent && activeSubTab === 'faculty') {
      setActiveSubTab('mentors');
    }
  }, [isStudent, activeSubTab]);

  // Merge dynamic challenges with mock challenges
  const activeChallenges = challenges && challenges.length > 0 ? challenges : initialIndustryConnect.challenges;

  const handleBookMentor = (mentor, slot) => {
    setBookedSessions(prev => [...prev, { mentorId: mentor.id, mentorName: mentor.name, slot, company: mentor.company }]);
    setBookingSuccess(true);
    setTimeout(() => {
      setSelectedMentor(null);
      setBookingSuccess(false);
    }, 2000);
  };

  const handleSolutionSubmit = (submission) => {
    setSubmittedChallengeIds(prev => [...prev, submission.challengeId]);
    if (addToast) {
      addToast('Solution Submitted! 🚀', `Your repository has been submitted for ${submission.challengeTitle}.`, 'success');
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A' }}>
              Industry–Academia Connect & Collaboration Hub
            </h1>
            <span style={{
              background: '#DCFCE7',
              color: '#16A34A',
              border: '1px solid #BBF7D0',
              padding: '3px 10px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 800
            }}>
              ● Realtime Sync Active
            </span>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 500 }}>
            {isStudent
              ? 'Bridge real-world industry practices with 1:1 expert mentorships and live innovation hackathons.'
              : 'Bridge real-world industry practices with 1:1 mentorships, recruiter-hosted hackathons, and faculty immersion programs.'}
          </p>
        </div>

        {/* Sub-tab pills */}
        <div style={{
          display: 'flex',
          background: '#FFFFFF',
          padding: '4px',
          borderRadius: '9999px',
          border: '1px solid #E2E8F0',
          boxShadow: 'var(--shadow-xs)'
        }}>
          <button
            onClick={() => setActiveSubTab('mentors')}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 700,
              background: activeSubTab === 'mentors' ? '#2563EB' : 'transparent',
              color: activeSubTab === 'mentors' ? 'white' : '#64748B',
              transition: 'all 0.15s ease'
            }}
          >
            1:1 Mentorship
          </button>
          <button
            onClick={() => setActiveSubTab('challenges')}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 700,
              background: activeSubTab === 'challenges' ? '#2563EB' : 'transparent',
              color: activeSubTab === 'challenges' ? 'white' : '#64748B',
              transition: 'all 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Innovation Challenges</span>
            <span style={{
              background: activeSubTab === 'challenges' ? '#FFFFFF' : '#EFF6FF',
              color: '#2563EB',
              padding: '1px 7px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 800
            }}>
              {activeChallenges.length}
            </span>
          </button>

          {!isStudent && (
            <button
              onClick={() => setActiveSubTab('faculty')}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 700,
                background: activeSubTab === 'faculty' ? '#2563EB' : 'transparent',
                color: activeSubTab === 'faculty' ? 'white' : '#64748B',
                transition: 'all 0.15s ease'
              }}
            >
              Faculty FDP & Research
            </button>
          )}
        </div>
      </div>

      {/* Content based on SubTab */}
      {activeSubTab === 'mentors' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
          {initialIndustryConnect.mentors.map((mentor) => {
            const isBooked = bookedSessions.some(b => b.mentorId === mentor.id);

            return (
              <div 
                key={mentor.id}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '18px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <img 
                      src={mentor.avatar} 
                      alt={mentor.name} 
                      style={{ width: '52px', height: '52px', borderRadius: '9999px', objectFit: 'cover', border: '2px solid #BFDBFE' }} 
                    />
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>{mentor.name}</h3>
                      <p style={{ fontSize: '12.5px', color: '#2563EB', fontWeight: 700 }}>{mentor.company}</p>
                      <p style={{ fontSize: '12px', color: '#64748B' }}>{mentor.role} · {mentor.experience}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '12.5px', color: '#475569' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#D97706', fontWeight: 700 }}>
                      <Star size={14} fill="#D97706" /> {mentor.rating}
                    </span>
                    <span>• {mentor.sessionsCompleted} sessions completed</span>
                  </div>

                  {/* Skills tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                    {mentor.skills.map((s, idx) => (
                      <span key={idx} className="skill-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Trigger */}
                <div>
                  {isBooked ? (
                    <div style={{
                      background: '#F0FDF4',
                      color: '#16A34A',
                      border: '1px solid #BBF7D0',
                      padding: '10px',
                      borderRadius: '10px',
                      textAlign: 'center',
                      fontSize: '13px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}>
                      <CheckCircle2 size={16} />
                      <span>Session Booked on Calendar</span>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}>Next Available Slot:</div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {mentor.availableSlots.slice(0, 2).map((slot, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleBookMentor(mentor, slot)}
                            style={{
                              flex: 1,
                              background: '#F8FAFC',
                              border: '1px solid #E2E8F0',
                              color: '#1E293B',
                              padding: '7px 10px',
                              borderRadius: '8px',
                              fontSize: '11.5px',
                              fontWeight: 700,
                              textAlign: 'center',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            📅 {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Challenges SubTab */}
      {activeSubTab === 'challenges' && (
        <div>
          {/* Header Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
            borderRadius: '18px',
            padding: '24px 28px',
            color: 'white',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{
                  background: 'rgba(234, 179, 8, 0.2)',
                  color: '#FACC15',
                  border: '1px solid rgba(234, 179, 8, 0.4)',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Zap size={13} /> LIVE INDUSTRY PROBLEM STATEMENTS
                </span>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>
                  Open for College Students & Teams
                </span>
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                Solve Real Industry Challenges & Earn Fast-Track Interviews
              </h2>
              <p style={{ fontSize: '13px', color: '#94A3B8', maxWidth: '650px' }}>
                Directly submitted code & models are reviewed by recruiter hiring managers at Google, TCS, Microsoft & Partner Networks.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 18px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#FACC15' }}>{activeChallenges.length}</div>
                <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>Active Challenges</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 18px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#38BDF8' }}>100%</div>
                <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>Direct Review</div>
              </div>
            </div>
          </div>

          {/* Challenge Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '20px' }}>
            {activeChallenges.map((chal) => {
              const isSubmitted = submittedChallengeIds.includes(chal.id);
              const prize = chal.prizePool || chal.prize_pool || '₹ 2,00,000 Prize Pool';
              const hostName = chal.host || chal.industryPartner || 'Skill Orbit Industry Partner';
              const tags = chal.tags || ['Innovation', 'Industry 4.0'];

              return (
                <div
                  key={chal.id}
                  style={{
                    background: '#FFFFFF',
                    border: isSubmitted ? '2px solid #22C55E' : '1px solid #E2E8F0',
                    borderRadius: '18px',
                    padding: '24px',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  {isSubmitted && (
                    <div style={{
                      position: 'absolute',
                      top: '14px',
                      right: '16px',
                      background: '#DCFCE7',
                      color: '#166534',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      fontSize: '11px',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <CheckCircle2 size={13} /> Solution Submitted
                    </div>
                  )}

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{
                        background: '#FEF3C7',
                        color: '#B45309',
                        border: '1px solid #FDE68A',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        fontSize: '11.5px',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <Trophy size={13} />
                        <span>{prize}</span>
                      </div>
                      <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>
                        ⏳ Deadline: {chal.deadline || 'Rolling'}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                      {chal.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#2563EB', fontWeight: 700, marginBottom: '10px' }}>
                      🏢 Hosted by: {hostName}
                    </p>
                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                      {chal.summary || chal.description || 'Develop and submit prototype models or architectural implementations targeting live industry test cases.'}
                    </p>

                    {chal.eligibleColleges && (
                      <div style={{ fontSize: '12px', color: '#059669', fontWeight: 600, marginBottom: '12px', background: '#ECFDF5', padding: '6px 10px', borderRadius: '8px' }}>
                        🎓 Target Colleges: <strong>{chal.eligibleColleges}</strong>
                      </div>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                      {tags.map((t, idx) => (
                        <span key={idx} className="skill-pill">
                          {t}
                        </span>
                      ))}
                      {chal.difficulty && (
                        <span style={{
                          background: '#EFF6FF',
                          color: '#2563EB',
                          padding: '3px 9px',
                          borderRadius: '9999px',
                          fontSize: '11.5px',
                          fontWeight: 700
                        }}>
                          ⚡ {chal.difficulty}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    {isSubmitted ? (
                      <div style={{
                        background: '#F0FDF4',
                        color: '#16A34A',
                        border: '1px solid #BBF7D0',
                        padding: '10px',
                        borderRadius: '10px',
                        textAlign: 'center',
                        fontSize: '13px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}>
                        <CheckCircle2 size={16} />
                        <span>Solution in Review with {hostName} Mentors</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => setSelectedChallengeForSubmission({
                          id: chal.id,
                          title: chal.title,
                          industryPartner: hostName,
                          stipendOrReward: prize,
                          skillsVerified: tags
                        })}
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <span>Participate & Submit Solution</span>
                        <ArrowRight size={15} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeSubTab === 'faculty' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {initialIndustryConnect.facultyPrograms.map((prog) => (
            <div
              key={prog.id}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '18px',
                padding: '24px',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{
                  background: '#EFF6FF',
                  color: '#2563EB',
                  border: '1px solid #BFDBFE',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <GraduationCap size={14} />
                  <span>Faculty Development Program (FDP)</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#16A34A' }}>
                  {prog.stipendGrant}
                </div>
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                {prog.title}
              </h3>
              <p style={{ fontSize: '13.5px', color: '#2563EB', fontWeight: 700, marginBottom: '12px' }}>
                Organized by: {prog.host} · Duration: {prog.duration} ({prog.dates})
              </p>

              <p style={{ fontSize: '13.5px', color: '#475569', marginBottom: '16px', lineHeight: 1.5 }}>
                <strong>Curriculum & Industrial Focus:</strong> {prog.curriculum}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>
                  Eligibility: {prog.eligibility} · Available Seats: {prog.seats}
                </span>

                <button
                  onClick={() => alert(`Application submitted for ${prog.title}! Host committee will review your research profile.`)}
                  className="btn-primary"
                >
                  <span>Apply for Faculty Fellowship</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Challenge Submission Modal */}
      {selectedChallengeForSubmission && (
        <ChallengeSubmissionModal
          challenge={selectedChallengeForSubmission}
          onClose={() => setSelectedChallengeForSubmission(null)}
          onSubmitSolution={(sub) => {
            handleSolutionSubmit(sub);
            setSelectedChallengeForSubmission(null);
          }}
        />
      )}
    </div>
  );
}

