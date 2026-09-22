import React from 'react';
import { ShieldCheck, Layers, Award, ArrowRight, Building2, User, Briefcase, BookOpen, CheckCircle2 } from 'lucide-react';

// For Students Public Landing
export function StudentsPublicPage({ onNavigate, onSelectRole }) {
  return (
    <div style={{ padding: '3.5rem 0', minHeight: '80vh' }}>
      <div className="max-width-wrapper" style={{ maxWidth: '800px' }}>
        <div className="eyebrow">FOR STUDENTS</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Understand where you stand. Know what to build next.
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
          ALIGN helps you assess your technical and professional competencies, discover exact skill gaps for your target career, and match opportunities based on what you actually know.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>Transparent Matching</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              See exactly why you match an opportunity — matched skills, developing skills, and missing gap items.
            </p>
          </div>
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>Digital Portfolio</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Build a verified digital profile backed by university lab projects and certification evidence.
            </p>
          </div>
        </div>

        <button onClick={() => onSelectRole('student')} className="btn btn-primary" style={{ padding: '0.8rem 1.75rem' }}>
          Enter Student Demo Dashboard
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// For Institutions Public Landing
export function InstitutionsPublicPage({ onNavigate, onSelectRole }) {
  return (
    <div style={{ padding: '3.5rem 0', minHeight: '80vh' }}>
      <div className="max-width-wrapper" style={{ maxWidth: '800px' }}>
        <div className="eyebrow">FOR INSTITUTIONS</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Measure student readiness. Drive targeted institutional outcomes.
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
          Equip university administrators, placement directors, and department heads with real-time analytics comparing student capabilities against live industry skill demand.
        </p>

        <button onClick={() => onSelectRole('institution')} className="btn btn-primary" style={{ padding: '0.8rem 1.75rem' }}>
          Explore Institution View
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// For Industry Public Landing
export function IndustryPublicPage({ onNavigate, onSelectRole }) {
  return (
    <div style={{ padding: '3.5rem 0', minHeight: '80vh' }}>
      <div className="max-width-wrapper" style={{ maxWidth: '800px' }}>
        <div className="eyebrow">FOR INDUSTRY PARTNERS</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Build an early-career talent pipeline based on verified skills.
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
          Publish internships, live capstone projects, and entry-level roles while discovering candidates with evidence of hands-on technical competence.
        </p>

        <button onClick={() => onSelectRole('industry')} className="btn btn-primary" style={{ padding: '0.8rem 1.75rem' }}>
          Enter Industry Portal
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// For Academicians Public Landing
export function AcademiciansPublicPage({ onNavigate }) {
  return (
    <div style={{ padding: '3.5rem 0', minHeight: '80vh' }}>
      <div className="max-width-wrapper" style={{ maxWidth: '850px' }}>
        <div className="eyebrow">FOR ACADEMICIANS & FACULTY</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Industry Engagement, FDPs & Sabbaticals for Faculty
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Connect with industry partners for Faculty Development Programs (FDP), industrial sabbaticals, research grants (DST/AICTE), micro-teaching labs, and AICTE-ATAL verified certifications.
        </p>

        <div style={{ marginBottom: '2.5rem' }}>
          <button className="btn btn-primary" onClick={() => onNavigate('/academician')}>
            Enter Academician Workspace & FDP Hub →
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          <div className="card" style={{ padding: '1.5rem' }}>
            <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>2 Weeks · Hybrid</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
              Faculty Development Program: Industrial Automation & AI
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Sponsored by Vertex Systems to upgrade lab curricula with modern industrial sensor specs.
            </p>
            <button className="btn btn-secondary btn-sm" style={{ width: '100%' }}>Register Interest</button>
          </div>

          <div className="card" style={{ padding: '1.5rem' }}>
            <span className="badge badge-teal" style={{ marginBottom: '0.5rem' }}>Consultancy</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
              Data Quality Pipeline Research Consultancy
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Northstar Technologies collaboration grant for university data science departments.
            </p>
            <button className="btn btn-secondary btn-sm" style={{ width: '100%' }}>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// About Page
export function AboutPage({ onNavigate }) {
  return (
    <div style={{ padding: '3.5rem 0', minHeight: '80vh' }}>
      <div className="max-width-wrapper" style={{ maxWidth: '800px' }}>
        <div className="eyebrow">ABOUT ALIGN</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Building a stronger connection between learning and work.
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          ALIGN brings students, educational institutions, and industry into one shared workflow around skills, learning, and real-world opportunities.
        </p>

        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.25rem' }}>
          Our Core Product Principles
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
          <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', shrink: 0 }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                1. Skills over keywords
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Evaluating candidates and opportunities based on actual technical and professional competency match rather than keyword-stuffed resume algorithms.
              </p>
            </div>
          </div>

          <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#F0FDF4', color: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center', shrink: 0 }}>
              <Layers size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                2. Evidence over claims
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Verifying student capabilities through lab projects, benchmark assessments, and university-issued certification evidence.
              </p>
            </div>
          </div>

          <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--warning-bg)', color: 'var(--warning-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', shrink: 0 }}>
              <Award size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                3. Readiness over resumes
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Focusing on actionable readiness development so students build the exact skills industry requires before applying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
