import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MatchModal from './components/MatchModal';

// Pages
import LandingPage from './pages/LandingPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import OpportunityDetailPage from './pages/OpportunityDetailPage';
import StudentDashboard from './pages/StudentDashboard';
import InstitutionDashboard from './pages/InstitutionDashboard';
import IndustryDashboard from './pages/IndustryDashboard';
import AcademicianDashboard from './pages/AcademicianDashboard';
import SkillsExplorePage from './pages/SkillsExplorePage';
import ChallengesPage from './pages/ChallengesPage';
import { StudentsPublicPage, InstitutionsPublicPage, IndustryPublicPage, AcademiciansPublicPage, AboutPage } from './pages/PublicPersonaPages';

// Mock Data
import { initialStudent, initialOpportunities, initialChallenges, institutionMetrics, industryData, assessmentQuestions, initialAcademician, initialAcademicianOpportunities } from './data/mockData';

export default function App() {
  // State Management
  const [currentRole, setCurrentRole] = useState('public'); // 'public', 'student', 'institution', 'industry'
  const [currentRoute, setCurrentRoute] = useState('/');
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  
  // Modals
  const [matchModalOpportunity, setMatchModalOpportunity] = useState(null);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  // App Data State
  const [student, setStudent] = useState(initialStudent);
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [challenges, setChallenges] = useState(initialChallenges);
  const [institution, setInstitution] = useState(institutionMetrics);
  const [industry, setIndustry] = useState(industryData);
  const [academician, setAcademician] = useState(initialAcademician);
  const [academicianOpportunities, setAcademicianOpportunities] = useState(initialAcademicianOpportunities);

  // Role Switcher Handler
  const handleSelectRole = (role) => {
    setCurrentRole(role);
    setIsRoleModalOpen(false);
    
    if (role === 'student') {
      setCurrentRoute('/student');
    } else if (role === 'institution') {
      setCurrentRoute('/institution');
    } else if (role === 'industry') {
      setCurrentRoute('/industry-dashboard');
    } else if (role === 'academician') {
      setCurrentRoute('/academician');
    } else {
      setCurrentRoute('/');
    }
  };

  // Route Navigation Handler
  const handleNavigate = (route) => {
    setCurrentRoute(route);
    setSelectedOpportunity(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Apply Handler
  const handleApplyToOpportunity = (opp) => {
    const alreadyApplied = student.applications.some(a => a.opportunityId === opp.id);
    if (alreadyApplied) return;

    const newApp = {
      id: `app-${Date.now()}`,
      opportunityId: opp.id,
      role: opp.title,
      company: opp.company,
      location: `${opp.location} · ${opp.workMode}`,
      duration: opp.duration,
      appliedDate: 'Today (7 Sep 2026)',
      status: 'Under review',
      matchScore: opp.matchScore,
      matchLabel: opp.matchLabel,
      timeline: [
        { stage: 'Submitted', date: 'Today', completed: true },
        { stage: 'Under Review', date: 'In Progress', completed: true },
        { stage: 'Skill Assessment', date: 'Pending', completed: false },
        { stage: 'Interview', date: 'Pending', completed: false },
        { stage: 'Outcome', date: 'Pending', completed: false }
      ]
    };

    setStudent(prev => ({
      ...prev,
      applications: [newApp, ...prev.applications]
    }));

    setOpportunities(prev => prev.map(o => o.id === opp.id ? { ...o, applicantsCount: (o.applicantsCount || 0) + 1, applied: true } : o));
  };

  // Toggle Save Opportunity
  const handleToggleSaveOpportunity = (oppId) => {
    setStudent(prev => {
      const isSaved = prev.savedOpportunities.includes(oppId);
      return {
        ...prev,
        savedOpportunities: isSaved
          ? prev.savedOpportunities.filter(id => id !== oppId)
          : [...prev.savedOpportunities, oppId]
      };
    });
  };

  // Add Opportunity from Industry Portal
  const handleAddOpportunity = (newOpp) => {
    setOpportunities(prev => [newOpp, ...prev]);
  };

  // Feature 2: Add Challenge from Industry Portal
  const handleAddChallenge = (newChal) => {
    setChallenges(prev => [newChal, ...prev]);
  };

  // Feature 2: Submit Solution to Challenge
  const handleChallengeSubmission = (submission) => {
    setStudent(prev => ({
      ...prev,
      studentSubmissions: [submission, ...(prev.studentSubmissions || [])]
    }));
  };

  // Render View Router
  const renderCurrentView = () => {
    if (selectedOpportunity) {
      const isApplied = student.applications.some(a => a.opportunityId === selectedOpportunity.id);
      const isSaved = student.savedOpportunities.includes(selectedOpportunity.id);
      return (
        <OpportunityDetailPage
          opportunity={selectedOpportunity}
          onBack={() => setSelectedOpportunity(null)}
          onApply={handleApplyToOpportunity}
          isApplied={isApplied}
          isSaved={isSaved}
          onToggleSave={handleToggleSaveOpportunity}
          onOpenMatchModal={(opp) => setMatchModalOpportunity(opp)}
        />
      );
    }

    switch (currentRoute) {
      case '/':
        return (
          <LandingPage
            opportunities={opportunities}
            onNavigate={handleNavigate}
            onOpenMatchModal={(opp) => setMatchModalOpportunity(opp)}
            onSelectRole={handleSelectRole}
          />
        );
      case '/opportunities':
        return (
          <OpportunitiesPage
            opportunities={opportunities}
            onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
            onOpenMatchModal={(opp) => setMatchModalOpportunity(opp)}
          />
        );
      case '/challenges':
        return (
          <ChallengesPage
            challenges={challenges}
            onSubmitSolution={handleChallengeSubmission}
            studentSubmissions={student.studentSubmissions || []}
          />
        );
      case '/skills':
        return <SkillsExplorePage onNavigate={handleNavigate} />;
      case '/students':
      case '/student':
        return (
          <StudentDashboard
            student={student}
            opportunities={opportunities}
            challenges={challenges}
            assessmentQuestions={assessmentQuestions}
            onUpdateStudent={(updated) => setStudent(updated)}
            onOpenMatchModal={(opp) => setMatchModalOpportunity(opp)}
            onNavigate={handleNavigate}
          />
        );
      case '/institutions':
      case '/institution':
        return <InstitutionDashboard institution={institution} onNavigate={handleNavigate} />;
      case '/industry':
      case '/industry-dashboard':
        return (
          <IndustryDashboard
            industry={industry}
            opportunities={opportunities}
            challenges={challenges}
            onAddOpportunity={handleAddOpportunity}
            onAddChallenge={handleAddChallenge}
            onNavigate={handleNavigate}
          />
        );
      case '/academicians':
      case '/academician':
        return (
          <AcademicianDashboard
            academician={academician}
            academicianOpportunities={academicianOpportunities}
            onNavigate={handleNavigate}
          />
        );
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      default:
        return (
          <LandingPage
            opportunities={opportunities}
            onNavigate={handleNavigate}
            onOpenMatchModal={(opp) => setMatchModalOpportunity(opp)}
            onSelectRole={handleSelectRole}
          />
        );
    }
  };

  return (
    <div className="app-container">
      {/* Primary Header */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenRoleModal={() => setIsRoleModalOpen(true)}
        currentRole={currentRole}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {renderCurrentView()}
      </main>

      {/* Enterprise Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Transparent Match Modal */}
      {matchModalOpportunity && (
        <MatchModal
          opportunity={matchModalOpportunity}
          onClose={() => setMatchModalOpportunity(null)}
          onApply={(opp) => handleApplyToOpportunity(opp)}
          isApplied={student.applications.some(a => a.opportunityId === matchModalOpportunity.id)}
        />
      )}

      {/* Role Switcher Demo Modal */}
      {isRoleModalOpen && (
        <div className="modal-overlay" onClick={() => setIsRoleModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '460px', textAlign: 'center' }}>
            <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>DEMO PERSONA SELECTION</span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
              Continue as
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Select a stakeholder persona to experience ALIGN's workflows:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <button
                onClick={() => handleSelectRole('student')}
                className="btn btn-secondary"
                style={{ justifyContent: 'flex-start', padding: '1rem', textAlign: 'left' }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Student Persona</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Competency Twin, GitHub analysis, challenges & portfolio</div>
                </div>
              </button>

              <button
                onClick={() => handleSelectRole('institution')}
                className="btn btn-secondary"
                style={{ justifyContent: 'flex-start', padding: '1rem', textAlign: 'left' }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Institution Persona</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Roll No lookup, student readiness search & demand matrix</div>
                </div>
              </button>

              <button
                onClick={() => handleSelectRole('industry')}
                className="btn btn-secondary"
                style={{ justifyContent: 'flex-start', padding: '1rem', textAlign: 'left' }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Industry Persona</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Publish challenges & opportunities, evaluate candidate code</div>
                </div>
              </button>

              <button
                onClick={() => handleSelectRole('academician')}
                className="btn btn-secondary"
                style={{ justifyContent: 'flex-start', padding: '1rem', textAlign: 'left' }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Academician Persona</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>FDP Programs, sabbaticals, micro-teaching & AICTE certificates</div>
                </div>
              </button>
            </div>

            <button onClick={() => setIsRoleModalOpen(false)} className="btn btn-ghost btn-sm">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
