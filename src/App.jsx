import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import DashboardView from './components/DashboardView';
import OpportunitiesView from './components/OpportunitiesView';
import SkillAssessmentView from './components/SkillAssessmentView';
import AiSkillMappingView from './components/AiSkillMappingView';
import LearningPathView from './components/LearningPathView';
import IndustryConnectView from './components/IndustryConnectView';
import ProfilePortfolioView from './components/ProfilePortfolioView';
import AcademicianView from './components/AcademicianView';
import IndustryRecruiterView from './components/IndustryRecruiterView';
import InstitutionAdminView from './components/InstitutionAdminView';
import OpportunityDetailModal from './components/OpportunityDetailModal';
import NotificationModal from './components/NotificationModal';
import Toast from './components/Toast';
import LandingPageView from './components/LandingPageView';

import {
  initialStudent,
  initialOpportunities,
  initialAcademician,
  initialRecruiter,
  institutionMetrics,
  initialSkillAssessments,
  initialIndustryConnect
} from './data/mockData';

import { supabaseService, isSupabaseConfigured } from './services/supabaseClient';

export default function App() {
  // Landing Page vs Dashboard View
  const [isLandingPage, setIsLandingPage] = useState(() => {
    return !localStorage.getItem('skillorbit_auth_user');
  });

  // Authentication & Session State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return Boolean(localStorage.getItem('skillorbit_auth_user'));
  });
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('skillorbit_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // Navigation & Role State
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [currentRole, setCurrentRole] = useState(() => {
    try {
      const saved = localStorage.getItem('skillorbit_auth_user');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.role) return parsed.role;
      }
    } catch (e) {}
    return 'student';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Domain Entity State
  const [student, setStudent] = useState(initialStudent);
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [academician, setAcademician] = useState(initialAcademician);
  const [recruiter, setRecruiter] = useState(initialRecruiter);
  const [institution, setInstitution] = useState(institutionMetrics);
  const [assessments, setAssessments] = useState(initialSkillAssessments);
  const [challenges, setChallenges] = useState(initialIndustryConnect.challenges);
  const [fdpPrograms, setFdpPrograms] = useState(initialIndustryConnect.facultyPrograms);

  // Modals State
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Toast System
  const [toasts, setToasts] = useState([]);

  const addToast = (title, message, type = 'success') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    if (userData.role) {
      setCurrentRole(userData.role);
    }
    if (userData.role === 'student') {
      setStudent(prev => ({
        ...prev,
        name: userData.name || prev.name,
        email: userData.email || prev.email,
        institution: userData.institution || prev.institution,
        degree: userData.degree || prev.degree
      }));
    } else if (userData.role === 'academician') {
      setAcademician(prev => ({
        ...prev,
        name: userData.name || prev.name,
        email: userData.email || prev.email,
        institution: userData.institution || prev.institution,
        designation: userData.designation || prev.designation
      }));
    } else if (userData.role === 'industry') {
      setRecruiter(prev => ({
        ...prev,
        name: userData.name || prev.name,
        email: userData.email || prev.email,
        company: userData.company || prev.company
      }));
    } else if (userData.role === 'institution') {
      setInstitution(prev => ({
        ...prev,
        name: userData.name || prev.name,
        location: userData.location || prev.location
      }));
    }
  };

  const handleEnterPortal = (role = 'student') => {
    setCurrentRole(role);
    setIsLandingPage(false);
    setIsAuthenticated(true);
    addToast('Welcome to Skill Orbit 🚀', `Exploring portal as ${role.toUpperCase()} (Live Demo Mode)`, 'info');
  };

  const handleSelectRoleAndEnter = (role, userData) => {
    setCurrentRole(role);
    setIsLandingPage(false);
    setIsAuthenticated(true);
    if (userData) {
      handleLoginSuccess(userData);
    } else {
      addToast('Role Activated', `Switched to ${role.toUpperCase()} dashboard`, 'info');
    }
  };

  const handleReturnToLanding = () => {
    setIsLandingPage(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('skillorbit_auth_user');
    setIsAuthenticated(false);
    setCurrentUser(null);
    setIsLandingPage(true);
    addToast('Signed Out', 'You have returned to the Showcase Landing Page.', 'info');
  };

  // ⚡ Two-Way Realtime Hydration & WebSocket Listeners with Supabase
  React.useEffect(() => {
    async function loadInitialDatabaseData() {
      if (!isSupabaseConfigured) return;

      try {
        // 1. Fetch live opportunities from Supabase
        const oppRes = await supabaseService.getOpportunities();
        if (oppRes.data && oppRes.data.length > 0) {
          setOpportunities(oppRes.data);
        }

        // 2. Fetch live applications from Supabase
        const appRes = await supabaseService.getApplications();
        if (appRes.data && appRes.data.length > 0) {
          setStudent(prev => ({
            ...prev,
            applications: appRes.data,
            applicationsCount: appRes.data.length
          }));
        }

        // 3. Fetch live assessments from Supabase
        const quizRes = await supabaseService.getAssessments();
        if (quizRes.data && quizRes.data.length > 0) {
          setAssessments(quizRes.data);
        }

        // 4. Fetch live innovation challenges & hackathons from Supabase
        const chalRes = await supabaseService.getChallenges();
        if (chalRes.data && chalRes.data.length > 0) {
          setChallenges(chalRes.data);
        }

        // 5. Fetch live Faculty FDPs from Supabase
        const fdpRes = await supabaseService.getFdpPrograms();
        if (fdpRes.data && fdpRes.data.length > 0) {
          setFdpPrograms(fdpRes.data);
        }
      } catch (err) {
        console.warn('Initial Supabase sync note:', err.message);
      }
    }

    loadInitialDatabaseData();

    // 🟢 Realtime WebSocket Subscriptions for live updates across all windows
    const unsubscribeOpportunities = supabaseService.subscribeToTable(
      'opportunities',
      (newOpp) => {
        const formatted = {
          id: newOpp.id,
          title: newOpp.title,
          company: newOpp.company,
          roleType: newOpp.type || 'Internship',
          workMode: newOpp.work_mode || 'Hybrid',
          location: newOpp.location,
          duration: newOpp.duration,
          stipend: newOpp.stipend,
          postedDate: 'Just now (Live)',
          matchScore: newOpp.match_score || 85,
          matchLabel: newOpp.match_label || 'Top Match',
          applicantsCount: newOpp.applicants_count || 0,
          description: newOpp.description,
          requiredSkills: newOpp.skills || [],
          eligibility: newOpp.eligibility || 'All eligible students',
          responsibilities: newOpp.responsibilities || []
        };
        setOpportunities(prev => {
          if (prev.some(o => o.id === formatted.id)) return prev;
          return [formatted, ...prev];
        });
        addToast('New Live Opportunity! 💼', `${newOpp.title} by ${newOpp.company} was just posted in real-time.`, 'info');
      }
    );

    const unsubscribeApplications = supabaseService.subscribeToTable(
      'applications',
      (newApp) => {
        const formatted = {
          id: newApp.id,
          opportunityId: newApp.opportunity_id,
          role: newApp.role,
          company: newApp.company,
          location: newApp.location,
          duration: newApp.duration,
          appliedDate: newApp.applied_date,
          status: newApp.status,
          matchScore: newApp.match_score,
          matchLabel: newApp.match_label || 'Strong Fit',
          submissionDetails: newApp.submission_details,
          timeline: newApp.timeline
        };
        setStudent(prev => {
          if (prev.applications?.some(a => a.id === formatted.id)) return prev;
          return {
            ...prev,
            applications: [formatted, ...(prev.applications || [])],
            applicationsCount: (prev.applicationsCount || 0) + 1
          };
        });
      },
      (updatedApp) => {
        // Handle ATS stage update in real-time
        setStudent(prev => ({
          ...prev,
          applications: prev.applications.map(a => a.id === updatedApp.id ? { ...a, status: updatedApp.status, timeline: updatedApp.timeline || a.timeline } : a)
        }));
        addToast('Application Update 🚀', `Your application for ${updatedApp.role} is now "${updatedApp.status}".`, 'success');
      }
    );

    const unsubscribeAssessments = supabaseService.subscribeToTable(
      'skill_assessments',
      (newQuiz) => {
        setAssessments(prev => {
          if (prev.some(q => q.id === newQuiz.id)) return prev;
          return [newQuiz, ...prev];
        });
        addToast('New Assessment Live! 🏆', `"${newQuiz.title}" has been published by an Industry Partner.`, 'info');
      }
    );

    const unsubscribeChallenges = supabaseService.subscribeToTable(
      'challenges',
      (newChal) => {
        const formatted = {
          id: newChal.id,
          title: newChal.title,
          host: newChal.host,
          prizePool: newChal.prize_pool || newChal.prizePool,
          deadline: newChal.deadline,
          participants: newChal.participants || 0,
          difficulty: newChal.difficulty || 'Hard',
          tags: newChal.tags || ['Innovation', 'Industry 4.0'],
          summary: newChal.summary
        };
        setChallenges(prev => {
          if (prev.some(c => c.id === formatted.id)) return prev;
          return [formatted, ...prev];
        });
        addToast('New Live Hackathon! 🏆', `${newChal.title} hosted by ${newChal.host} was just posted in real-time.`, 'info');
      }
    );

    const unsubscribeFdps = supabaseService.subscribeToTable(
      'faculty_fdps',
      (newFdp) => {
        const formatted = {
          id: newFdp.id,
          title: newFdp.title,
          host: newFdp.host,
          duration: newFdp.duration,
          dates: newFdp.dates,
          stipendGrant: newFdp.stipend_grant || newFdp.stipendGrant,
          seats: newFdp.seats,
          eligibility: newFdp.eligibility,
          curriculum: newFdp.curriculum
        };
        setFdpPrograms(prev => {
          if (prev.some(f => f.id === formatted.id)) return prev;
          return [formatted, ...prev];
        });
        addToast('New Faculty FDP Live! 🎓', `"${newFdp.title}" hosted by ${newFdp.host} is now open for faculty enrollments.`, 'info');
      }
    );

    return () => {
      if (unsubscribeOpportunities) unsubscribeOpportunities();
      if (unsubscribeApplications) unsubscribeApplications();
      if (unsubscribeAssessments) unsubscribeAssessments();
      if (unsubscribeChallenges) unsubscribeChallenges();
      if (unsubscribeFdps) unsubscribeFdps();
    };
  }, []);

  // Handlers
  const handleSelectRole = (role) => {
    setCurrentRole(role);
    setCurrentTab('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const roleNames = {
      student: 'Student (Angel K)',
      academician: 'Faculty & HOD (Dr. Rajesh Raman)',
      industry: 'Industry Recruiter (Priya Sharma)',
      institution: 'Institutional Leadership (Anna University)'
    };
    addToast('Role Switched', `Now viewing as ${roleNames[role]}`, 'info');
  };

  const handleNavigateTab = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyOpportunity = async (opp) => {
    const alreadyApplied = student.applications.some(a => a.opportunityId === opp.id);
    if (alreadyApplied) {
      addToast('Already Applied', `You have already applied for ${opp.title} at ${opp.company}.`, 'warning');
      return;
    }

    const newApplication = {
      id: opp.submissionDetails?.appId || `app-${Date.now()}`,
      opportunityId: opp.id,
      role: opp.title,
      company: opp.company,
      location: `${opp.location} · ${opp.workMode}`,
      duration: opp.duration,
      appliedDate: 'Today (Real-time)',
      status: 'Submitted · In ATS Screening',
      matchScore: opp.matchScore,
      matchLabel: opp.matchLabel,
      submissionDetails: opp.submissionDetails,
      timeline: [
        { stage: 'Submitted', date: 'Just now', completed: true },
        { stage: 'Profile Screen', date: 'In Progress', completed: false, active: true },
        { stage: 'Technical Assessment', date: 'Pending', completed: false },
        { stage: 'Interview Round', date: 'Pending', completed: false },
        { stage: 'Final Offer', date: 'Pending', completed: false }
      ]
    };

    // Optimistic UI state update
    setStudent(prev => ({
      ...prev,
      applications: [newApplication, ...prev.applications],
      applicationsCount: prev.applicationsCount + 1
    }));

    setOpportunities(prev => prev.map(o => o.id === opp.id ? { ...o, applicantsCount: (o.applicantsCount || 0) + 1 } : o));

    addToast('Application Submitted! 🎉', `Your application for ${opp.title} at ${opp.company} is now live in Supabase.`, 'success');

    // ⚡ Realtime Push to Supabase Database
    await supabaseService.submitApplication(newApplication);
  };

  const handleToggleSaveOpportunity = (oppId) => {
    const isSaved = student.savedOpportunities?.includes(oppId);
    setStudent(prev => {
      return {
        ...prev,
        savedOpportunities: isSaved
          ? prev.savedOpportunities.filter(id => id !== oppId)
          : [...(prev.savedOpportunities || []), oppId]
      };
    });

    if (isSaved) {
      addToast('Opportunity Removed', 'Removed from saved opportunities.', 'info');
    } else {
      addToast('Opportunity Saved', 'Added to your bookmarked opportunities.', 'success');
    }
  };

  const handleUpdateReadinessScore = async (newScore) => {
    const updatedStudent = {
      ...student,
      overallReadiness: newScore,
      competencyTwin: {
        ...student.competencyTwin,
        overallScore: newScore,
        knowledgeScore: Math.min(100, student.competencyTwin.knowledgeScore + 6)
      }
    };

    setStudent(updatedStudent);
    addToast('Profile Score Boosted! 🚀', `Your overall Profile Match is now ${newScore}%.`, 'success');

    // ⚡ Realtime Push to Supabase Database
    await supabaseService.updateStudentProfile(updatedStudent);
  };

  const handleAddOpportunity = async (newOpp) => {
    setOpportunities(prev => [newOpp, ...prev]);
    addToast('Opportunity Published! 💼', `${newOpp.title} by ${newOpp.company} is saved in Supabase and live across student feeds.`, 'success');

    // ⚡ Realtime Push to Supabase Database
    await supabaseService.postOpportunity(newOpp);
  };

  const handleAddAssessment = async (newAssessment) => {
    setAssessments(prev => [newAssessment, ...prev]);
    addToast('Assessment Published! 🏆', `"${newAssessment.title}" is saved in Supabase and available for all students.`, 'success');

    // ⚡ Realtime Push to Supabase Database
    await supabaseService.createAssessment(newAssessment);
  };

  const handleLaunchChallenge = async (newChallenge) => {
    setChallenges(prev => [newChallenge, ...prev]);
    addToast(
      'Hackathon Published Across Network! 🏆',
      `"${newChallenge.title}" is live for all registered Colleges and Students to participate.`,
      'success'
    );

    // ⚡ Realtime Push to Supabase Database
    await supabaseService.postChallenge(newChallenge);
  };

  const handleHostFdp = async (newFdp) => {
    setFdpPrograms(prev => [newFdp, ...prev]);
    addToast(
      'Faculty FDP Published! 🎓',
      `"${newFdp.title}" hosted by ${newFdp.host} is live for all Professors and Academicians.`,
      'success'
    );

    // ⚡ Realtime Push to Supabase Database
    await supabaseService.postFdpProgram(newFdp);
  };

  // Render main page content based on current tab and role
  const renderMainContent = () => {
    // Role-specific main content handlers
    if (currentRole === 'academician') {
      return (
        <AcademicianView 
          academician={academician} 
          challenges={challenges}
          fdpPrograms={fdpPrograms}
          onNavigateTab={handleNavigateTab} 
          activeTab={currentTab}
        />
      );
    }

    if (currentRole === 'industry') {
      return (
        <IndustryRecruiterView 
          recruiter={recruiter} 
          opportunities={opportunities} 
          onAddOpportunity={handleAddOpportunity} 
          challenges={challenges}
          onLaunchChallenge={handleLaunchChallenge}
          fdpPrograms={fdpPrograms}
          onHostFdp={handleHostFdp}
          student={student} 
          activeTab={currentTab}
        />
      );
    }

    if (currentRole === 'institution') {
      return (
        <InstitutionAdminView 
          institution={institution} 
          challenges={challenges}
          activeTab={currentTab}
        />
      );
    }

    // Default Student Persona Views
    switch (currentTab) {
      case 'opportunities':
        return (
          <OpportunitiesView
            opportunities={opportunities}
            student={student}
            searchQuery={searchQuery}
            onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
            onApplyOpportunity={handleApplyOpportunity}
            onToggleSaveOpportunity={handleToggleSaveOpportunity}
          />
        );
      case 'assessment':
        return (
          <SkillAssessmentView
            student={student}
            assessments={assessments}
            onAddAssessment={handleAddAssessment}
            currentRole={currentRole}
            onUpdateReadinessScore={handleUpdateReadinessScore}
            onNavigateTab={handleNavigateTab}
          />
        );
      case 'ai-mapping':
        return <AiSkillMappingView student={student} />;
      case 'learning-path':
        return <LearningPathView student={student} />;
      case 'industry-connect':
        return (
          <IndustryConnectView 
            currentRole={currentRole} 
            challenges={challenges}
            onApplyOpportunity={handleApplyOpportunity}
            addToast={addToast}
          />
        );
      case 'profile':
        return <ProfilePortfolioView student={student} />;
      case 'dashboard':
      default:
        return (
          <DashboardView
            student={student}
            opportunities={opportunities}
            onNavigateTab={handleNavigateTab}
            onSelectOpportunity={(opp) => setSelectedOpportunity(opp)}
            onToggleSaveOpportunity={handleToggleSaveOpportunity}
          />
        );
    }
  };

  // 1. Showcase Landing Page View (Default when not in portal session)
  if (isLandingPage) {
    return (
      <div style={{ position: 'relative' }}>
        <LandingPageView
          onEnterPortal={handleEnterPortal}
          onSelectRoleAndEnter={handleSelectRoleAndEnter}
          addToast={addToast}
        />
        <Toast toasts={toasts} onDismiss={removeToast} />
      </div>
    );
  }

  return (
    <div className="app-layout">
      {/* Sidebar matching the design with role-switch */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={handleNavigateTab}
        currentRole={currentRole}
        onSelectRole={handleSelectRole}
        student={student}
        academician={academician}
        recruiter={recruiter}
        institution={institution}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
        onLogout={handleLogout}
        onReturnToLanding={handleReturnToLanding}
      />

      {/* Main App Container */}
      <div className="main-wrapper">
        <TopHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          student={student}
          currentRole={currentRole}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onSelectRole={handleSelectRole}
          onLogout={handleLogout}
          onReturnToLanding={handleReturnToLanding}
        />

        {/* Dynamic Route Content */}
        {renderMainContent()}
      </div>

      {/* Opportunity Details Popup Modal */}
      {selectedOpportunity && (
        <OpportunityDetailModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
          onApply={handleApplyOpportunity}
          isApplied={student.applications?.some(a => a.opportunityId === selectedOpportunity.id)}
          isSaved={student.savedOpportunities?.includes(selectedOpportunity.id)}
          onToggleSave={handleToggleSaveOpportunity}
          student={student}
        />
      )}

      {/* Notifications Drawer */}
      <NotificationModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onNavigateTab={handleNavigateTab}
      />

      {/* Floating Real-Time Toast Notifications */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
