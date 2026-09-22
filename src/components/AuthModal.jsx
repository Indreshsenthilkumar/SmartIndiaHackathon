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
  X,
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

export default function AuthModal({ isOpen, onClose, onLoginSuccess, addToast, initialMode = 'login', initialRole = 'student' }) {
  const [authMode, setAuthMode] = useState(initialMode); // 'login', 'register', 'developer'
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Colleges List (Fetched from Supabase + Preloaded)
  const [colleges, setColleges] = useState(PRELOADED_COLLEGES);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Registration Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Student Specific
  const [selectedCollegeId, setSelectedCollegeId] = useState(PRELOADED_COLLEGES[0].id);
  const [rollNumber, setRollNumber] = useState('');
  const [degree, setDegree] = useState('B.Tech in Artificial Intelligence & Data Science');
  const [gradYear, setGradYear] = useState('2026');
  const [targetCareer, setTargetCareer] = useState('AI/ML Engineer & Intelligent Systems Specialist');

  // Institution Specific
  const [collegeName, setCollegeName] = useState('');
  const [aicteCode, setAicteCode] = useState('');
  const [nirfRank, setNirfRank] = useState('Rank 12 (Engineering)');
  const [collegeLocation, setCollegeLocation] = useState('');
  const [naacGrade, setNaacGrade] = useState('A++ Grade (CGPA 3.85)');

  // Academician Specific
  const [academicianDesignation, setAcademicianDesignation] = useState('Professor & Head of Department');
  const [department, setDepartment] = useState('Department of Artificial Intelligence & CSE');
  const [domainExpertise, setDomainExpertise] = useState('Machine Learning, Cognitive Systems & Data Engineering');

  // Industry Specific
  const [companyName, setCompanyName] = useState('');
  const [industryRole, setIndustryRole] = useState('Lead University Recruiter & Talent Partner');
  const [industrySector, setIndustrySector] = useState('Artificial Intelligence & Cloud Computing');

  useEffect(() => {
    setAuthMode(initialMode);
    setSelectedRole(initialRole);
  }, [initialMode, initialRole, isOpen]);

  // Fetch real-time institutions from Supabase
  useEffect(() => {
    async function loadInstitutions() {
      if (!supabase) return;
      try {
        const { data, error } = await supabase.from('institutions').select('id, name, location');
        if (!error && data && data.length > 0) {
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

  if (!isOpen) return null;

  const ROLES_INFO = [
    { id: 'student', label: 'Student', icon: GraduationCap, color: '#2563eb', bg: '#eff6ff', desc: 'Internships, AI Skill Mapping & ATS' },
    { id: 'institution', label: 'College / Admin', icon: School, color: '#7c3aed', bg: '#f5f3ff', desc: 'Create College & View Cohorts' },
    { id: 'academician', label: 'Faculty / HOD', icon: Layers, color: '#059669', bg: '#ecfdf5', desc: 'Batch Readiness & FDP Grants' },
    { id: 'industry', label: 'Industry Recruiter', icon: Building2, color: '#ea580c', bg: '#fff7ed', desc: 'Post Vacancies & AI Screening' }
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
      onClose();
    }, 300);
  };

  // Standard Login
  const handleStandardLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!loginEmail.trim()) {
      setErrorMessage('Please enter your registered email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const userData = {
        role: selectedRole,
        email: loginEmail,
        name: loginEmail.split('@')[0].replace('.', ' ').toUpperCase(),
        institution: colleges.find(c => c.id === selectedCollegeId)?.name || 'Anna University, Chennai'
      };

      localStorage.setItem('skillorbit_auth_user', JSON.stringify(userData));
      setIsSubmitting(false);
      if (addToast) addToast('Welcome Back! 👋', `Signed in as ${userData.name}`, 'success');
      onLoginSuccess(userData);
      onClose();
    }, 300);
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

        if (supabase) {
          await supabase.from('institutions').upsert(newCollegeRecord);
        }

        setColleges(prev => [newCollegeRecord, ...prev]);

        registeredUser = {
          role: 'institution',
          name: collegeName,
          email: email,
          location: collegeLocation,
          nirfRank: nirfRank
        };

        if (addToast) addToast('Institution Registered! 🏛️', `${collegeName} is now registered. Students can select this college.`, 'success');
      } else if (selectedRole === 'student') {
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
      } else if (selectedRole === 'academician') {
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
      } else if (selectedRole === 'industry') {
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
      onClose();
    } catch (err) {
      console.error('Registration error:', err);
      setIsSubmitting(false);
      setErrorMessage(err.message || 'An error occurred during registration.');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      zIndex: 1000,
      overflowY: 'auto'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '820px',
        background: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.2)',
        border: '1px solid #e2e8f0',
        padding: '32px',
        position: 'relative',
        maxHeight: '92vh',
        overflowY: 'auto'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748b',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#eff6ff', color: '#2563eb', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 700, marginBottom: '8px' }}>
            <Sparkles size={14} /> SIXTH SENSE — Skill Orbit
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
            {authMode === 'developer' ? '🚀 Developer & Demo Fast Access' : authMode === 'register' ? 'Create Your Portal Account' : 'Welcome Back'}
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
            {authMode === 'developer' ? 'Instant 1-click test bypass into all 4 hydrated personas with live ATS pipelines.' : 'Connect to the centralized Academia–Industry platform.'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div style={{ display: 'flex', background: '#f1f5f9', padding: '4px', borderRadius: '12px', marginBottom: '20px', gap: '4px' }}>
          <button
            type="button"
            onClick={() => { setAuthMode('login'); setErrorMessage(''); }}
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              background: authMode === 'login' ? '#ffffff' : 'transparent',
              color: authMode === 'login' ? '#2563eb' : '#64748b',
              boxShadow: authMode === 'login' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none'
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setAuthMode('register'); setErrorMessage(''); }}
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              background: authMode === 'register' ? '#ffffff' : 'transparent',
              color: authMode === 'register' ? '#2563eb' : '#64748b',
              boxShadow: authMode === 'register' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none'
            }}
          >
            Register Account
          </button>
          <button
            type="button"
            onClick={() => { setAuthMode('developer'); setErrorMessage(''); }}
            style={{
              flex: 1,
              padding: '9px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              background: authMode === 'developer' ? '#7c3aed' : 'transparent',
              color: authMode === 'developer' ? '#ffffff' : '#7c3aed',
              boxShadow: authMode === 'developer' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            ⚡ Developer Mode
          </button>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '10px 14px', borderRadius: '8px', color: '#b91c1c', fontSize: '13px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 1: DEVELOPER MODE FAST ACCESS                        */}
        {/* ======================================================== */}
        {authMode === 'developer' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              {/* Student */}
              <div
                onClick={() => handleDeveloperLogin('student')}
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.background = '#eff6ff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f8fafc'; }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                  <GraduationCap size={20} color="#fff" />
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Angel K</div>
                <div style={{ fontSize: '11px', color: '#2563eb', fontWeight: 700 }}>Student Persona</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>B.Tech AI · 78% Match Twin</div>
              </div>

              {/* Academician */}
              <div
                onClick={() => handleDeveloperLogin('academician')}
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#059669'; e.currentTarget.style.background = '#ecfdf5'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f8fafc'; }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                  <Layers size={20} color="#fff" />
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Dr. Rajesh Raman</div>
                <div style={{ fontSize: '11px', color: '#059669', fontWeight: 700 }}>Faculty & HOD</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>HOD AI · 48 Research Papers</div>
              </div>

              {/* Recruiter */}
              <div
                onClick={() => handleDeveloperLogin('industry')}
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#ea580c'; e.currentTarget.style.background = '#fff7ed'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f8fafc'; }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                  <Building2 size={20} color="#fff" />
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Priya Sharma</div>
                <div style={{ fontSize: '11px', color: '#ea580c', fontWeight: 700 }}>Industry Recruiter</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Google Lead · 6 Live Postings</div>
              </div>

              {/* Institution */}
              <div
                onClick={() => handleDeveloperLogin('institution')}
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = '#f5f3ff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f8fafc'; }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                  <School size={20} color="#fff" />
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Anna University</div>
                <div style={{ fontSize: '11px', color: '#7c3aed', fontWeight: 700 }}>Institution Admin</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>NIRF Rank 8 · 4,200 Enrolled</div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2 & 3: STANDARD LOGIN & REGISTRATION                 */}
        {/* ======================================================== */}
        {(authMode === 'login' || authMode === 'register') && (
          <div>
            {/* Select Role */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                Select Role:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '8px' }}>
                {ROLES_INFO.map(r => {
                  const Icon = r.icon;
                  const isSelected = selectedRole === r.id;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedRole(r.id)}
                      style={{
                        background: isSelected ? r.bg : '#f8fafc',
                        border: '1.5px solid',
                        borderColor: isSelected ? r.color : '#e2e8f0',
                        borderRadius: '10px',
                        padding: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                        <Icon size={16} color={r.color} />
                        <span style={{ fontWeight: 700, fontSize: '13px', color: '#0f172a' }}>{r.label}</span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>{r.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={authMode === 'login' ? handleStandardLogin : handleRegistration}>
              {authMode === 'login' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>Email Address:</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. angel.k@annauniv.edu / recruiter@company.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>Password:</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Institution Creation */}
                  {selectedRole === 'institution' && (
                    <div style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', padding: '14px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#7c3aed' }}>🏛️ Create Verified College Record</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '10px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>College / University Name:</label>
                          <input type="text" required placeholder="e.g. SRM Institute of Science & Technology" value={collegeName} onChange={e => setCollegeName(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>AICTE / UGC Code:</label>
                          <input type="text" placeholder="e.g. AICTE-TN-4089" value={aicteCode} onChange={e => setAicteCode(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>City / State Location:</label>
                          <input type="text" placeholder="Chennai, Tamil Nadu" value={collegeLocation} onChange={e => setCollegeLocation(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>NIRF Rank:</label>
                          <input type="text" value={nirfRank} onChange={e => setNirfRank(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Student Registration */}
                  {selectedRole === 'student' && (
                    <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '14px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb' }}>🎓 College Mapping & Academic Degree</div>
                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>Select Registered College (Mapping Based):</label>
                        <select value={selectedCollegeId} onChange={e => setSelectedCollegeId(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '12px', boxSizing: 'border-box' }}>
                          {colleges.map(c => (
                            <option key={c.id} value={c.id}>{c.name} ({c.location})</option>
                          ))}
                        </select>
                        <span style={{ fontSize: '10.5px', color: '#64748b', marginTop: '2px', display: 'block' }}>✓ Students can only register under verified institutions created by administrators.</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '10px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>Degree & Branch:</label>
                          <input type="text" value={degree} onChange={e => setDegree(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>Roll Number:</label>
                          <input type="text" placeholder="2026-CSE-408" value={rollNumber} onChange={e => setRollNumber(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Academician Registration */}
                  {selectedRole === 'academician' && (
                    <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '14px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#059669' }}>👨‍🏫 Faculty Affiliation</div>
                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>Select College / Institution:</label>
                        <select value={selectedCollegeId} onChange={e => setSelectedCollegeId(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '12px', boxSizing: 'border-box' }}>
                          {colleges.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                          ))}
                        </select>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>Designation:</label>
                          <input type="text" value={academicianDesignation} onChange={e => setAcademicianDesignation(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>Department:</label>
                          <input type="text" value={department} onChange={e => setDepartment(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Industry Recruiter Registration */}
                  {selectedRole === 'industry' && (
                    <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', padding: '14px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#ea580c' }}>💼 Company & Sector Profile</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '10px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>Company Name:</label>
                          <input type="text" required placeholder="Google, Microsoft, TCS" value={companyName} onChange={e => setCompanyName(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#475569', marginBottom: '2px' }}>Sector:</label>
                          <input type="text" value={industrySector} onChange={e => setIndustrySector(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Universal Fields */}
                  <div style={{ display: 'grid', gridTemplateColumns: selectedRole !== 'institution' ? '1.2fr 1fr' : '1fr', gap: '10px' }}>
                    {selectedRole !== 'institution' && (
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '2px' }}>Full Name:</label>
                        <input type="text" required placeholder="Angel K" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                      </div>
                    )}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '2px' }}>Email Address:</label>
                      <input type="email" required placeholder="you@domain.edu" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '2px' }}>Create Password:</label>
                    <input type="password" required placeholder="Minimum 6 characters" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', boxSizing: 'border-box' }} />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  marginTop: '18px',
                  padding: '12px',
                  borderRadius: '10px',
                  background: isSubmitting ? '#93c5fd' : '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                {isSubmitting ? 'Authenticating...' : authMode === 'login' ? 'Sign In to Portal' : 'Complete Registration'}
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
