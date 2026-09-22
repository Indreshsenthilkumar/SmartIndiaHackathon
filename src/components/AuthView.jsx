import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  School,
  Building2,
  Layers,
  Sparkles,
  Lock,
  Mail,
  User,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Zap,
  Globe,
  Briefcase,
  BookOpen,
  Award,
  AlertCircle
} from 'lucide-react';
import { supabaseService, supabase } from '../services/supabaseClient';

const PRELOADED_COLLEGES = [
  { id: 'inst-101', name: 'Anna University / College of Engineering, Guindy', code: 'AU-CHE-01', location: 'Chennai, Tamil Nadu' },
  { id: 'inst-102', name: 'Indian Institute of Technology Madras (IIT Madras)', code: 'IIT-M-02', location: 'Chennai, Tamil Nadu' },
  { id: 'inst-103', name: 'National Institute of Technology, Tiruchirappalli (NIT Trichy)', code: 'NIT-TRY-03', location: 'Tiruchirappalli, Tamil Nadu' },
  { id: 'inst-104', name: 'Birla Institute of Technology and Science (BITS Pilani)', code: 'BITS-PIL-04', location: 'Pilani, Rajasthan' },
  { id: 'inst-105', name: 'Vellore Institute of Technology (VIT Vellore)', code: 'VIT-VEL-05', location: 'Vellore, Tamil Nadu' }
];

export default function AuthView({ onLoginSuccess, addToast }) {
  const [authMode, setAuthMode] = useState('login'); // 'login', 'register', 'developer'
  const [selectedRole, setSelectedRole] = useState('student'); // 'student', 'institution', 'academician', 'industry'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Colleges List (Fetched from Supabase + Preloaded)
  const [colleges, setColleges] = useState(PRELOADED_COLLEGES);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Universal Registration Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Student Specific Fields
  const [selectedCollegeId, setSelectedCollegeId] = useState(PRELOADED_COLLEGES[0].id);
  const [rollNumber, setRollNumber] = useState('');
  const [degree, setDegree] = useState('B.Tech in Artificial Intelligence & Data Science');
  const [gradYear, setGradYear] = useState('2026');
  const [targetCareer, setTargetCareer] = useState('AI/ML Engineer & Intelligent Systems Specialist');

  // College / Institution Specific Fields
  const [collegeName, setCollegeName] = useState('');
  const [aicteCode, setAicteCode] = useState('');
  const [nirfRank, setNirfRank] = useState('Rank 12 (Engineering)');
  const [collegeLocation, setCollegeLocation] = useState('');
  const [naacGrade, setNaacGrade] = useState('A++ Grade (CGPA 3.85)');

  // Academician Specific Fields
  const [academicianDesignation, setAcademicianDesignation] = useState('Professor & Head of Department');
  const [department, setDepartment] = useState('Department of Artificial Intelligence & CSE');
  const [domainExpertise, setDomainExpertise] = useState('Machine Learning, Cognitive Systems & Data Engineering');

  // Industry Specific Fields
  const [companyName, setCompanyName] = useState('');
  const [industryRole, setIndustryRole] = useState('Lead University Recruiter & Talent Partner');
  const [industrySector, setIndustrySector] = useState('Artificial Intelligence & Cloud Computing');
  const [companyWebsite, setCompanyWebsite] = useState('');

  // Fetch real-time institutions from Supabase
  useEffect(() => {
    async function loadInstitutions() {
      if (!supabase) return;
      try {
        const { data, error } = await supabase.from('institutions').select('id, name, location');
        if (!error && data && data.length > 0) {
          // Merge preloaded with database institutions uniquely
          const merged = [...data];
          PRELOADED_COLLEGES.forEach(pc => {
            if (!merged.some(m => m.id === pc.id || m.name.toLowerCase() === pc.name.toLowerCase())) {
              merged.push(pc);
            }
          });
          setColleges(merged);
        }
      } catch (err) {
        console.warn('Could not fetch colleges from Supabase:', err);
      }
    }
    loadInstitutions();
  }, []);

  // Role details metadata
  const ROLES_INFO = [
    {
      id: 'student',
      label: 'Student',
      icon: GraduationCap,
      color: '#2563EB',
      bg: '#EFF6FF',
      desc: 'Access internships, AI skill mapping, and digital blockchain twins.'
    },
    {
      id: 'institution',
      label: 'College / Admin',
      icon: School,
      color: '#7C3AED',
      bg: '#F5F3FF',
      desc: 'Register institution, manage student cohorts & NIRF analytics.'
    },
    {
      id: 'academician',
      label: 'Faculty / HOD',
      icon: Layers,
      color: '#059669',
      bg: '#ECFDF5',
      desc: 'Supervise student batches, FDP fellowships & industry R&D.'
    },
    {
      id: 'industry',
      label: 'Industry Recruiter',
      icon: Building2,
      color: '#EA580C',
      bg: '#FFF7ED',
      desc: 'Post job vacancies, screen matched talent & launch hackathons.'
    }
  ];

  // Developer Fast Login Bypass Handler
  const handleDeveloperLogin = (roleId) => {
    setIsSubmitting(true);
    setTimeout(() => {
      let userData = null;
      if (roleId === 'student') {
        userData = {
          role: 'student',
          name: 'Angel K',
          email: 'angel.k@annauniv.edu',
          institution: 'Anna University / College of Engineering, Guindy',
          degree: 'B.Tech in Computer Science & AI',
          overallReadiness: 78
        };
      } else if (roleId === 'academician') {
        userData = {
          role: 'academician',
          name: 'Dr. Rajesh Raman',
          email: 'dr.rajesh.raman@annauniv.edu',
          institution: 'Anna University / College of Engineering, Guindy',
          designation: 'Professor & Head, AI & Data Systems'
        };
      } else if (roleId === 'industry') {
        userData = {
          role: 'industry',
          name: 'Priya Sharma',
          email: 'priya.sharma@google.com',
          company: 'Google University Relations',
          roleTitle: 'Lead Talent Acquisition'
        };
      } else if (roleId === 'institution') {
        userData = {
          role: 'institution',
          name: 'College of Engineering, Anna University',
          email: 'admin@annauniv.edu',
          nirfRank: 'Rank 8 (Engineering)',
          location: 'Chennai, Tamil Nadu'
        };
      }

      localStorage.setItem('skillorbit_auth_user', JSON.stringify(userData));
      setIsSubmitting(false);
      if (addToast) addToast('⚡ Developer Mode Active', `Logged in as ${userData.name} (${roleId.toUpperCase()})`, 'success');
      onLoginSuccess(userData);
    }, 300);
  };

  // Standard Login Handler
  const handleStandardLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!loginEmail.trim()) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Create user session object based on role
      const userData = {
        role: selectedRole,
        email: loginEmail,
        name: loginEmail.split('@')[0].replace('.', ' ').toUpperCase(),
        institution: colleges.find(c => c.id === selectedCollegeId)?.name || 'Anna University, Chennai'
      };

      localStorage.setItem('skillorbit_auth_user', JSON.stringify(userData));
      setIsSubmitting(false);
      if (addToast) addToast('Welcome Back! 👋', `Successfully signed in as ${userData.name}`, 'success');
      onLoginSuccess(userData);
    }, 400);
  };

  // Full Registration Handler
  const handleRegistration = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() && selectedRole !== 'institution') {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (selectedRole === 'institution' && !collegeName.trim()) {
      setErrorMessage('Please enter the College/Institution Name.');
      return;
    }
    if (!email.trim()) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    setIsSubmitting(true);

    try {
      let registeredUser = null;

      // 1. COLLEGE / INSTITUTION CREATION
      if (selectedRole === 'institution') {
        const newCollegeRecord = {
          id: `inst-${Date.now()}`,
          name: collegeName,
          location: collegeLocation || 'Chennai, Tamil Nadu',
          nirf_rank: nirfRank,
          naac_accreditation: naacGrade,
          total_students_enrolled: 3500,
          batch_readiness_score: 80,
          active_mous: 24
        };

        // Push to Supabase
        if (supabase) {
          await supabase.from('institutions').upsert(newCollegeRecord);
        }

        // Add to local state so student registration can map to it
        setColleges(prev => [newCollegeRecord, ...prev]);

        registeredUser = {
          role: 'institution',
          name: collegeName,
          email: email,
          location: collegeLocation,
          nirfRank: nirfRank
        };

        if (addToast) addToast('Institution Registered! 🏛️', `${collegeName} is now active. Students can now select this college.`, 'success');
      }

      // 2. STUDENT ONBOARDING (Mapped to Registered College)
      else if (selectedRole === 'student') {
        const selectedCollege = colleges.find(c => c.id === selectedCollegeId) || colleges[0];

        const newStudentRecord = {
          id: `student-${Date.now()}`,
          name: name,
          email: email,
          roll_number: rollNumber || '2026-REG-101',
          degree: degree,
          institution: selectedCollege.name,
          grad_year: gradYear,
          target_career: targetCareer,
          overall_readiness: 75,
          skills: [
            { name: 'Python', proficiency: 'Strong', score: 85, verified: true },
            { name: 'Machine Learning', proficiency: 'Developing', score: 70, verified: false },
            { name: 'Data Analytics', proficiency: 'Strong', score: 80, verified: true }
          ]
        };

        if (supabase) {
          await supabase.from('students').upsert(newStudentRecord);
        }

        registeredUser = {
          role: 'student',
          name: name,
          email: email,
          institution: selectedCollege.name,
          degree: degree,
          overallReadiness: 75
        };

        if (addToast) addToast('Account Created! 🎓', `Welcome ${name}! Linked to ${selectedCollege.name}.`, 'success');
      }

      // 3. ACADEMICIAN / FACULTY ONBOARDING
      else if (selectedRole === 'academician') {
        const selectedCollege = colleges.find(c => c.id === selectedCollegeId) || colleges[0];

        const newFacultyRecord = {
          id: `acad-${Date.now()}`,
          name: name,
          email: email,
          designation: academicianDesignation,
          institution: selectedCollege.name,
          domain: domainExpertise
        };

        if (supabase) {
          await supabase.from('academicians').upsert(newFacultyRecord);
        }

        registeredUser = {
          role: 'academician',
          name: name,
          email: email,
          institution: selectedCollege.name,
          designation: academicianDesignation
        };

        if (addToast) addToast('Faculty Registered! 👨‍🏫', `Welcome ${name} to ${selectedCollege.name}`, 'success');
      }

      // 4. INDUSTRY RECRUITER ONBOARDING
      else if (selectedRole === 'industry') {
        const newRecruiterRecord = {
          id: `rec-${Date.now()}`,
          name: name,
          email: email,
          role: industryRole,
          company: companyName,
          active_postings_count: 0
        };

        if (supabase) {
          await supabase.from('recruiters').upsert(newRecruiterRecord);
        }

        registeredUser = {
          role: 'industry',
          name: name,
          email: email,
          company: companyName,
          roleTitle: industryRole
        };

        if (addToast) addToast('Recruiter Account Live! 💼', `Welcome ${name} from ${companyName}`, 'success');
      }

      localStorage.setItem('skillorbit_auth_user', JSON.stringify(registeredUser));
      setIsSubmitting(false);
      onLoginSuccess(registeredUser);
    } catch (err) {
      console.error('Registration error:', err);
      setIsSubmitting(false);
      setErrorMessage(err.message || 'An error occurred during registration.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at 50% 10%, #1e3a8a 0%, #0f172a 60%, #020617 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 16px',
      color: '#f8fafc',
      fontFamily: 'inherit',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow Circles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div style={{
        width: '100%',
        maxWidth: '920px',
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '24px',
        padding: '36px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(37,99,235,0.2)',
            border: '1px solid rgba(59,130,246,0.3)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#60a5fa',
            marginBottom: '12px',
            letterSpacing: '0.5px'
          }}>
            <Sparkles size={14} /> SIXTH SENSE — SKILL ORBIT
          </div>

          <h1 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            Academia–Industry Collaboration Portal
          </h1>
          <p style={{ margin: 0, fontSize: '14px', color: '#94a3b8', maxWidth: '640px', marginInline: 'auto' }}>
            Unified ecosystem connecting Students, Higher Education Institutions, Faculty, and Industry Recruiters.
          </p>
        </div>

        {/* Mode Navigation Tabs (Login / Register / Developer Mode) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '8px',
          background: 'rgba(30, 41, 59, 0.6)',
          padding: '6px',
          borderRadius: '14px',
          marginBottom: '28px',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <button
            type="button"
            onClick={() => { setAuthMode('login'); setErrorMessage(''); }}
            style={{
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 700,
              background: authMode === 'login' ? '#2563eb' : 'transparent',
              color: authMode === 'login' ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Lock size={16} /> Sign In
          </button>

          <button
            type="button"
            onClick={() => { setAuthMode('register'); setErrorMessage(''); }}
            style={{
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 700,
              background: authMode === 'register' ? '#2563eb' : 'transparent',
              color: authMode === 'register' ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <User size={16} /> Register New Account
          </button>

          <button
            type="button"
            onClick={() => { setAuthMode('developer'); setErrorMessage(''); }}
            style={{
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 700,
              background: authMode === 'developer' ? 'linear-gradient(135deg, #7c3aed, #4f46e5)' : 'transparent',
              color: authMode === 'developer' ? '#ffffff' : '#c084fc',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Terminal size={16} /> 🚀 Developer Mode
          </button>
        </div>

        {/* Error Alert Message */}
        {errorMessage && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            padding: '12px 16px',
            borderRadius: '10px',
            color: '#fca5a5',
            fontSize: '13px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <AlertCircle size={18} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 1: DEVELOPER FAST LOGIN BYPASS                      */}
        {/* ======================================================== */}
        {authMode === 'developer' && (
          <div>
            <div style={{
              background: 'rgba(124, 58, 237, 0.12)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '14px',
              padding: '16px 20px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#e9d5ff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Zap size={18} color="#c084fc" /> Instant Persona Switcher
                </div>
                <div style={{ fontSize: '12px', color: '#c4b5fd', marginTop: '4px' }}>
                  Click any verified test role to immediately bypass authentication with fully hydrated portfolios and live ATS feeds.
                </div>
              </div>
              <span style={{ background: '#7c3aed', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '20px' }}>
                DEV BYPASS
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {/* Persona 1: Student */}
              <div
                onClick={() => handleDeveloperLogin('student')}
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  position: 'relative'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <GraduationCap size={22} color="#fff" />
                </div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Angel K</div>
                <div style={{ fontSize: '12px', color: '#60a5fa', fontWeight: 600, marginBottom: '6px' }}>Student Persona</div>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 14px 0', lineHeight: '1.4' }}>
                  B.Tech AI · Anna University · 78% Match Twin · 3 Active Applications
                </p>
                <button style={{ width: '100%', padding: '8px', background: '#2563eb', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
                  Login as Student &rarr;
                </button>
              </div>

              {/* Persona 2: Academician */}
              <div
                onClick={() => handleDeveloperLogin('academician')}
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Layers size={22} color="#fff" />
                </div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Dr. Rajesh Raman</div>
                <div style={{ fontSize: '12px', color: '#34d399', fontWeight: 600, marginBottom: '6px' }}>Faculty & HOD</div>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 14px 0', lineHeight: '1.4' }}>
                  HOD AI & CSE · 3 Batches · 48 Research Papers · ₹45.8L Grants
                </p>
                <button style={{ width: '100%', padding: '8px', background: '#059669', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
                  Login as Faculty &rarr;
                </button>
              </div>

              {/* Persona 3: Industry Recruiter */}
              <div
                onClick={() => handleDeveloperLogin('industry')}
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(249, 115, 22, 0.4)',
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Building2 size={22} color="#fff" />
                </div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Priya Sharma</div>
                <div style={{ fontSize: '12px', color: '#fb923c', fontWeight: 600, marginBottom: '6px' }}>Industry Recruiter</div>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 14px 0', lineHeight: '1.4' }}>
                  Google University Relations · 6 Active Postings · 34 Shortlisted
                </p>
                <button style={{ width: '100%', padding: '8px', background: '#ea580c', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
                  Login as Recruiter &rarr;
                </button>
              </div>

              {/* Persona 4: Institution Admin */}
              <div
                onClick={() => handleDeveloperLogin('institution')}
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <School size={22} color="#fff" />
                </div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Anna University</div>
                <div style={{ fontSize: '12px', color: '#c084fc', fontWeight: 600, marginBottom: '6px' }}>Institution Admin</div>
                <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 14px 0', lineHeight: '1.4' }}>
                  NIRF Rank 8 · NAAC A++ · 4,200 Students · 42 Active MOUs
                </p>
                <button style={{ width: '100%', padding: '8px', background: '#7c3aed', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>
                  Login as Admin &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 2 & 3: STANDARD LOGIN & FULL REGISTRATION           */}
        {/* ======================================================== */}
        {(authMode === 'login' || authMode === 'register') && (
          <div>
            {/* Step 1: Select Role */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#cbd5e1', marginBottom: '10px' }}>
                Select Your Access Role:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '10px' }}>
                {ROLES_INFO.map(r => {
                  const Icon = r.icon;
                  const isSelected = selectedRole === r.id;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedRole(r.id)}
                      style={{
                        background: isSelected ? r.bg : 'rgba(30, 41, 59, 0.4)',
                        border: '2px solid',
                        borderColor: isSelected ? r.color : 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        color: isSelected ? '#0f172a' : '#f8fafc'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <Icon size={18} color={isSelected ? r.color : '#94a3b8'} />
                        <span style={{ fontWeight: 800, fontSize: '14px' }}>{r.label}</span>
                      </div>
                      <div style={{ fontSize: '11px', color: isSelected ? '#334155' : '#94a3b8', lineHeight: '1.3' }}>
                        {r.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FORM CONTAINER */}
            <form onSubmit={authMode === 'login' ? handleStandardLogin : handleRegistration}>
              {/* -------------------- SIGN IN FORM -------------------- */}
              {authMode === 'login' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                      Official / Registered Email:
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        type="email"
                        required
                        placeholder={selectedRole === 'student' ? 'angel.k@annauniv.edu' : selectedRole === 'industry' ? 'recruiter@company.com' : 'admin@university.edu'}
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 12px 12px 38px',
                          borderRadius: '10px',
                          background: 'rgba(30, 41, 59, 0.7)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#fff',
                          fontSize: '14px',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '6px' }}>
                      Password:
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Lock size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        type="password"
                        required
                        placeholder="••••••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 12px 12px 38px',
                          borderRadius: '10px',
                          background: 'rgba(30, 41, 59, 0.7)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#fff',
                          fontSize: '14px',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* -------------------- FULL REGISTRATION FORM -------------------- */}
              {authMode === 'register' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* ROLE SPECIFIC FIELDS */}

                  {/* 1. INSTITUTION / COLLEGE CREATION FIELDS */}
                  {selectedRole === 'institution' && (
                    <div style={{ background: 'rgba(124, 58, 237, 0.08)', border: '1px solid rgba(124, 58, 237, 0.25)', padding: '16px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#c084fc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <School size={16} /> Institution Admin Setup (Enables Student Registration)
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>College / University Name:</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. SRM Institute of Science and Technology"
                            value={collegeName}
                            onChange={(e) => setCollegeName(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>AICTE / UGC Code:</label>
                          <input
                            type="text"
                            placeholder="e.g. AICTE-TN-4089"
                            value={aicteCode}
                            onChange={(e) => setAicteCode(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>State / City Location:</label>
                          <input
                            type="text"
                            placeholder="Chennai, Tamil Nadu"
                            value={collegeLocation}
                            onChange={(e) => setCollegeLocation(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>NIRF Rank / NAAC:</label>
                          <input
                            type="text"
                            value={nirfRank}
                            onChange={(e) => setNirfRank(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. STUDENT ONBOARDING FIELDS (Mapped to Registered Colleges) */}
                  {selectedRole === 'student' && (
                    <div style={{ background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.25)', padding: '16px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#60a5fa', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <GraduationCap size={16} /> Academic Institution Mapping & Degree
                      </div>

                      {/* College Selector (Mapping based) */}
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>
                          Select Registered College / Institution:
                        </label>
                        <select
                          value={selectedCollegeId}
                          onChange={(e) => setSelectedCollegeId(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '8px',
                            background: '#1e293b',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: '#fff',
                            fontSize: '13px',
                            boxSizing: 'border-box'
                          }}
                        >
                          {colleges.map(c => (
                            <option key={c.id} value={c.id}>
                              {c.name} ({c.location})
                            </option>
                          ))}
                        </select>
                        <span style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', display: 'block' }}>
                          ✓ Only verified colleges created by institution administrators can register students.
                        </span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Degree & Branch:</label>
                          <input
                            type="text"
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Roll / Reg Number:</label>
                          <input
                            type="text"
                            placeholder="e.g. 2026-CSE-408"
                            value={rollNumber}
                            onChange={(e) => setRollNumber(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Target Career Domain:</label>
                        <input
                          type="text"
                          value={targetCareer}
                          onChange={(e) => setTargetCareer(e.target.value)}
                          style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>
                  )}

                  {/* 3. ACADEMICIAN / FACULTY FIELDS */}
                  {selectedRole === 'academician' && (
                    <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '16px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#34d399', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Layers size={16} /> Faculty Academic Affiliation
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Affiliated Institution:</label>
                        <select
                          value={selectedCollegeId}
                          onChange={(e) => setSelectedCollegeId(e.target.value)}
                          style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#1e293b', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                        >
                          {colleges.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                          ))}
                        </select>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Designation:</label>
                          <input
                            type="text"
                            value={academicianDesignation}
                            onChange={(e) => setAcademicianDesignation(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Department:</label>
                          <input
                            type="text"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4. INDUSTRY RECRUITER FIELDS */}
                  {selectedRole === 'industry' && (
                    <div style={{ background: 'rgba(234, 88, 12, 0.08)', border: '1px solid rgba(234, 88, 12, 0.25)', padding: '16px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#fb923c', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Building2 size={16} /> Corporate Enterprise Profile
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Company / Enterprise Name:</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Google, Microsoft, TCS, Zoho"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Industry Sector:</label>
                          <input
                            type="text"
                            value={industrySector}
                            onChange={(e) => setIndustrySector(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Recruiter Designation:</label>
                        <input
                          type="text"
                          value={industryRole}
                          onChange={(e) => setIndustryRole(e.target.value)}
                          style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>
                  )}

                  {/* UNIVERSAL PROFILE CREDENTIALS */}
                  <div style={{ display: 'grid', gridTemplateColumns: selectedRole !== 'institution' ? '1.2fr 1fr' : '1fr', gap: '12px' }}>
                    {selectedRole !== 'institution' && (
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Full Name / Official Name:</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Angel K"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                        />
                      </div>
                    )}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Email Address:</label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.edu / you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#cbd5e1', marginBottom: '4px' }}>Create Password:</label>
                    <input
                      type="password"
                      required
                      placeholder="Minimum 6 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  marginTop: '24px',
                  padding: '14px',
                  borderRadius: '12px',
                  background: isSubmitting ? '#93c5fd' : 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.4)',
                  transition: 'all 0.2s'
                }}
              >
                {isSubmitting ? (
                  <span>Authenticating Real-Time...</span>
                ) : authMode === 'login' ? (
                  <>
                    <span>Sign In to Skill Orbit</span>
                    <ArrowRight size={18} />
                  </>
                ) : (
                  <>
                    <span>Complete Real-Time Registration</span>
                    <CheckCircle2 size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Footer Note */}
        <div style={{ marginTop: '24px', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px', fontSize: '12px', color: '#64748b' }}>
          🔒 Protected by Supabase PostgreSQL Database & Cryptographic Verification Badges
        </div>
      </div>
    </div>
  );
}
