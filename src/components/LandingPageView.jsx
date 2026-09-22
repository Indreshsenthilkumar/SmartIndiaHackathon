import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  School,
  Building2,
  Layers,
  Brain,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  Users,
  User,
  Compass,
  Code,
  Zap,
  Lock,
  ChevronRight,
  ExternalLink,
  Award,
  Globe
} from 'lucide-react';
import AuthModal from './AuthModal';

export default function LandingPageView({ onEnterPortal, onSelectRoleAndEnter, addToast }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');
  const [authModalRole, setAuthModalRole] = useState('student');

  const handleOpenAuth = (mode = 'login', role = 'student') => {
    setAuthModalMode(mode);
    setAuthModalRole(role);
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (userData) => {
    onSelectRoleAndEnter(userData.role, userData);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', fontFamily: 'inherit' }}>
      {/* 1. TOP NAVIGATION HEADER */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0',
        padding: '0 32px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(37,99,235,0.25)'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor" opacity="0.2"/>
              <path d="M9.5 7.5C9.5 6.12 10.62 5 12 5C13.38 5 14.5 6.12 14.5 7.5C14.5 8.88 13.38 10 12 10C10.62 10 9.5 8.88 9.5 7.5ZM12 12C8.69 12 6 14.69 6 18H18C18 14.69 15.31 12 12 12Z" fill="white"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>SIXTH SENSE</div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Skill Orbit Platform</div>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="#features" style={{ fontSize: '14px', fontWeight: 600, color: '#475569', textDecoration: 'none' }}>Core Features</a>
          <a href="#personas" style={{ fontSize: '14px', fontWeight: 600, color: '#475569', textDecoration: 'none' }}>Role Ecosystem</a>
          <a href="#tech-stack" style={{ fontSize: '14px', fontWeight: 600, color: '#475569', textDecoration: 'none' }}>AI Architecture</a>
          <a href="#opportunities" style={{ fontSize: '14px', fontWeight: 600, color: '#475569', textDecoration: 'none' }}>Live Vacancies</a>
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => handleOpenAuth('login')}
            style={{
              padding: '9px 18px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#334155',
              background: '#f1f5f9',
              border: '1px solid #cbd5e1',
              cursor: 'pointer'
            }}
          >
            Sign In
          </button>

          <button
            onClick={() => onEnterPortal('student')}
            style={{
              padding: '9px 20px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(37,99,235,0.25)'
            }}
          >
            <span>Enter Portal (Live Demo)</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '60px 24px 40px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 700,
          color: '#2563eb',
          marginBottom: '20px'
        }}>
          <Sparkles size={16} /> Smart India Hackathon 2026 · AI Collaboration Portal
        </div>

        <h1 style={{
          fontSize: '48px',
          fontWeight: 850,
          color: '#0f172a',
          letterSpacing: '-1.5px',
          lineHeight: '1.15',
          margin: '0 0 20px 0',
          maxWidth: '960px',
          marginInline: 'auto'
        }}>
          Bridging the Gap Between <br />
          <span style={{ color: '#2563eb' }}>Academic Learning</span> and <span style={{ color: '#0f172a' }}>Industry Competency</span>
        </h1>

        <p style={{
          fontSize: '17px',
          color: '#475569',
          maxWidth: '780px',
          margin: '0 auto 32px',
          lineHeight: '1.6'
        }}>
          A unified, real-time collaboration ecosystem connecting <strong>Students</strong>, <strong>Colleges</strong>, <strong>Faculty</strong>, and <strong>Industry Recruiters</strong> with verified Competency Twins, spaCy NLP Skill Extraction, and live ATS pipelines.
        </p>

        {/* Primary Action Row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <button
            onClick={() => onEnterPortal('student')}
            style={{
              padding: '14px 28px',
              borderRadius: '12px',
              background: '#2563eb',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 10px 25px -5px rgba(37,99,235,0.3)',
              cursor: 'pointer'
            }}
          >
            <span>Explore Student Dashboard</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => handleOpenAuth('register')}
            style={{
              padding: '14px 24px',
              borderRadius: '12px',
              background: '#ffffff',
              color: '#1e293b',
              border: '1px solid #cbd5e1',
              fontSize: '15px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              cursor: 'pointer'
            }}
          >
            <User size={18} />
            <span>Create New Account</span>
          </button>

          <button
            onClick={() => handleOpenAuth('developer')}
            style={{
              padding: '14px 24px',
              borderRadius: '12px',
              background: '#f5f3ff',
              color: '#7c3aed',
              border: '1px solid #ddd6fe',
              fontSize: '15px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <Zap size={18} />
            <span>⚡ Developer 1-Click Login</span>
          </button>
        </div>

        {/* Live Metrics Ribbon */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 16px -2px rgba(0,0,0,0.05)',
          maxWidth: '1080px',
          margin: '0 auto'
        }}>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 850, color: '#2563eb' }}>4,200+</div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Assessed Students</div>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 850, color: '#059669' }}>165+</div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Industry Partners</div>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 850, color: '#7c3aed' }}>94%</div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Placement Batch Readiness</div>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 850, color: '#ea580c' }}>₹ 85,000</div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748b' }}>Top Monthly Stipend</div>
          </div>
        </div>
      </section>

      {/* 3. 4-ROLE ECOSYSTEM SECTION */}
      <section id="personas" style={{ maxWidth: '1240px', margin: '60px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
            Multi-Stakeholder Framework
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 850, color: '#0f172a', margin: 0 }}>
            Designed for Every Stakeholder in Higher Education
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '20px' }}>
          {/* Persona 1: Student */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <GraduationCap size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px 0' }}>For Students</h3>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                Discover internships matching your verified Competency Twin, take technical benchmark assessments, and track job applications in real-time.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#2563eb" /> 78% Profile Match Twin
                </div>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#2563eb" /> 4-Phase Learning Path
                </div>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#2563eb" /> Real-time 5-Stage ATS
                </div>
              </div>
            </div>
            <button
              onClick={() => onSelectRoleAndEnter('student')}
              style={{ padding: '10px', borderRadius: '10px', background: '#2563eb', color: '#fff', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            >
              Launch Student Portal &rarr;
            </button>
          </div>

          {/* Persona 2: Academician / Faculty */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Layers size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px 0' }}>For Academicians & Faculty</h3>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                Monitor department batch readiness, supervise student projects, apply for Industry FDP Fellowships, and formulate joint R&D grants.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#059669" /> 3 Cohort Batches Monitored
                </div>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#059669" /> Industry FDP Fellowships
                </div>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#059669" /> ₹ 45.8L Consultancy Grants
                </div>
              </div>
            </div>
            <button
              onClick={() => onSelectRoleAndEnter('academician')}
              style={{ padding: '10px', borderRadius: '10px', background: '#059669', color: '#fff', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            >
              Launch Faculty Portal &rarr;
            </button>
          </div>

          {/* Persona 3: Industry Recruiter */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#fff7ed', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Building2 size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px 0' }}>For Industry Recruiters</h3>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                Publish vacancies, leverage scikit-learn cosine matchmaker for talent screening, and launch innovation hackathons.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#ea580c" /> 89% Average Match Fit
                </div>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#ea580c" /> 1-Click Job Postings
                </div>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#ea580c" /> Innovation Hackathons
                </div>
              </div>
            </div>
            <button
              onClick={() => onSelectRoleAndEnter('industry')}
              style={{ padding: '10px', borderRadius: '10px', background: '#ea580c', color: '#fff', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            >
              Launch Recruiter Hub &rarr;
            </button>
          </div>

          {/* Persona 4: Institution Admin */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <School size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px 0' }}>For College Leadership</h3>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                Register verified institutions, track NIRF & NAAC accreditation readiness, oversee 42+ active MOUs, and view department benchmarks.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#7c3aed" /> NIRF Rank 8 Analytics
                </div>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#7c3aed" /> NAAC A++ (CGPA 3.82)
                </div>
                <div style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#7c3aed" /> 42 Active Industry MOUs
                </div>
              </div>
            </div>
            <button
              onClick={() => onSelectRoleAndEnter('institution')}
              style={{ padding: '10px', borderRadius: '10px', background: '#7c3aed', color: '#fff', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            >
              Launch Admin Portal &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 4. TECH STACK & AI NLP ARCHITECTURE */}
      <section id="tech-stack" style={{ maxWidth: '1240px', margin: '60px auto', padding: '0 24px' }}>
        <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '36px', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563eb', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>
            <Brain size={16} /> Standardized Technology Stack
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 850, color: '#0f172a', margin: '0 0 20px 0' }}>
            Production-Grade AI & Web Architecture
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '12px', color: '#2563eb', fontWeight: 700, marginBottom: '4px' }}>FRONTEND</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>React.js (Vite)</div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0 0' }}>Modular reactive UI with persona switching and interactive tests.</p>
            </div>

            <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '12px', color: '#059669', fontWeight: 700, marginBottom: '4px' }}>BACKEND</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>Node.js (REST APIs)</div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0 0' }}>RESTful services executing background Python processes.</p>
            </div>

            <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '12px', color: '#7c3aed', fontWeight: 700, marginBottom: '4px' }}>DATABASE</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>Supabase PostgreSQL</div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0 0' }}>Two-way real-time table sync and candidate applications.</p>
            </div>

            <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '12px', color: '#ea580c', fontWeight: 700, marginBottom: '4px' }}>AI / NLP ENGINE</div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>spaCy + scikit-learn</div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0 0' }}>TF-IDF Vectorizer, Cosine Similarity & 5-domain taxonomy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer style={{
        background: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        padding: '32px 24px',
        textAlign: 'center',
        fontSize: '13px',
        color: '#64748b'
      }}>
        <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
          SIXTH SENSE — Skill Orbit Platform · Smart India Hackathon 2026
        </div>
        <div>
          React.js · Node.js · Supabase · Python (spaCy + scikit-learn) · Vercel
        </div>
      </footer>

      {/* Light-Themed Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleAuthSuccess}
        addToast={addToast}
        initialMode={authModalMode}
        initialRole={authModalRole}
      />
    </div>
  );
}
