import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, BarChart2, Shield, Compass, BookOpen, Building2 } from 'lucide-react';
import OpportunityCard from '../components/OpportunityCard';

export default function LandingPage({ opportunities, onNavigate, onOpenMatchModal, onSelectRole }) {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        padding: '4.5rem 0 3.5rem 0',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
      }}>
        <div className="max-width-wrapper">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            {/* Hero Left Text */}
            <div>
              <div className="eyebrow">ACADEMIA × INDUSTRY</div>
              <h1 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}>
                Turn skills into opportunities.
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '540px'
              }}>
                ALIGN helps students understand their industry readiness, helps institutions identify skill gaps, and helps employers find talent based on skills rather than resumes alone.
              </p>
              
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => onNavigate('/opportunities')} 
                  className="btn btn-primary"
                  style={{ padding: '0.8rem 1.5rem', fontSize: '0.95rem' }}
                >
                  Explore Opportunities
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('how-it-works');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="btn btn-secondary"
                  style={{ padding: '0.8rem 1.5rem', fontSize: '0.95rem' }}
                >
                  See how ALIGN works
                </button>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '2rem',
                fontSize: '0.82rem',
                color: 'var(--text-light)',
                fontWeight: 600
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Shield size={15} color="var(--accent-primary)" /> Verified Skills
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <BarChart2 size={15} color="var(--accent-primary)" /> Institutional Analytics
                </span>
              </div>
            </div>

            {/* Hero Right Enterprise Product Preview */}
            <div className="card" style={{
              padding: '1.5rem',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-subtle)',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '0.85rem',
                marginBottom: '1rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0D9488' }}></div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, uppercase: true, color: 'var(--text-muted)' }}>
                    ALIGN Skill Engine Preview
                  </span>
                </div>
                <span className="badge badge-teal">85% Match</span>
              </div>

              {/* Step 1: Student Skill Profile */}
              <div style={{
                backgroundColor: 'var(--bg-subtle)',
                padding: '0.85rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '0.75rem'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-light)' }}>
                  STUDENT SKILL PROFILE
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', marginTop: '0.1rem' }}>
                  Indresh S · B.Tech IT 2026
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-teal">✓ SQL (Developing)</span>
                  <span className="badge badge-teal">✓ Excel (Strong)</span>
                  <span className="badge badge-blue">✓ Communication</span>
                </div>
              </div>

              {/* Arrow Indicator */}
              <div style={{ textAlign: 'center', color: 'var(--text-light)', margin: '0.2rem 0' }}>
                ↓ Gap & Recommendation Analysis
              </div>

              {/* Step 2: Identified Gap */}
              <div style={{
                backgroundColor: 'var(--warning-bg)',
                border: '1px solid var(--warning-border)',
                padding: '0.85rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '0.75rem'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--warning-text)' }}>
                  PRIORITY SKILL GAP
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  Product Analytics Telemetry
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Action: Complete 4-week product cohort case study lab.
                </div>
              </div>

              {/* Step 3: Recommended Match */}
              <div style={{
                backgroundColor: 'var(--accent-light)',
                border: '1px solid var(--accent-border)',
                padding: '0.85rem',
                borderRadius: 'var(--radius-sm)'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                  RECOMMENDED MATCH
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  Product Analyst Intern · Meridian Digital
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Chennai · Hybrid · ₹25,000 / mo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: The Problem */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-subtle)', backgroundColor: '#FFFFFF' }}>
        <div className="max-width-wrapper">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
            <div className="eyebrow">THE CORE GAP</div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              Learning and hiring still speak different languages.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'var(--accent-light)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <BookOpen size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                Students
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Know what to learn next and find opportunities aligned with their skills, rather than guessing requirements from generic job descriptions.
              </p>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: '#F0FDF4',
                color: '#0D9488',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Building2 size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                Institutions
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                See where students are ready, where gaps exist across departments, and what industry is currently asking for to take targeted action.
              </p>
            </div>

            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'var(--warning-bg)',
                color: 'var(--warning-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <Sparkles size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                Industry
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Define skills for opportunities and discover candidate profiles with evidence of capability rather than keyword-stuffed resumes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: How ALIGN Works (4-Step Flow) */}
      <section id="how-it-works" style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="max-width-wrapper">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
            <div className="eyebrow">THE OPERATIONAL LOOP</div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              How ALIGN Works
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}>
            {[
              { num: '01', title: 'Assess', desc: 'Understand technical and professional competencies through realistic benchmark assessments.' },
              { num: '02', title: 'Identify Gaps', desc: 'Compare current skills with target role requirements and industry demand matrices.' },
              { num: '03', title: 'Take Action', desc: 'Execute relevant learning modules, projects, and institutional bridge programs.' },
              { num: '04', title: 'Apply & Grow', desc: 'Discover matched opportunities, track applications transparently, and build verified experience.' }
            ].map((step, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem', position: 'relative' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Skill Intelligence */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-subtle)', backgroundColor: '#FFFFFF' }}>
        <div className="max-width-wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow">PLATFORM DEMO DATA</div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                See what industry needs.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                ALIGN aggregates skill requirements across published opportunity listings and maps them against student readiness data from participating consortium institutions.
              </p>

              <div style={{
                backgroundColor: 'var(--accent-light)',
                borderLeft: '4px solid var(--accent-primary)',
                padding: '1rem',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                fontSize: '0.875rem',
                color: 'var(--text-main)'
              }}>
                <strong>Platform Insight:</strong>
                <p style={{ marginTop: '0.25rem', color: 'var(--text-muted)' }}>
                  SQL is currently one of the most requested skills across sample opportunities, while student readiness remains moderate across pre-final engineering cohorts.
                </p>
              </div>
            </div>

            {/* Demand vs Readiness Visualization */}
            <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-main)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', uppercase: true, marginBottom: '1rem' }}>
                INDUSTRY DEMAND VS STUDENT READINESS (SAMPLE DATA)
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  { skill: 'SQL Querying', demand: 'High', readiness: 'Medium', gap: 'Priority' },
                  { skill: 'Python Fundamentals', demand: 'High', readiness: 'High', gap: 'Aligned' },
                  { skill: 'Cloud Fundamentals', demand: 'Medium', readiness: 'Low', gap: 'Priority' },
                  { skill: 'Power BI / Viz', demand: 'Medium', readiness: 'Low', gap: 'Priority' },
                  { skill: 'Communication', demand: 'High', readiness: 'Medium', gap: 'Developing' }
                ].map((row, idx) => (
                  <div key={idx} style={{
                    backgroundColor: '#FFFFFF',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    fontSize: '0.85rem'
                  }}>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{row.skill}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Demand: <strong>{row.demand}</strong> · Readiness: <strong>{row.readiness}</strong>
                      </div>
                    </div>
                    <span className={`badge ${
                      row.gap === 'Aligned' ? 'badge-teal' :
                      row.gap === 'Priority' ? 'badge-amber' : 'badge-blue'
                    }`}>
                      {row.gap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Featured Opportunities */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="max-width-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">OPPORTUNITIES NETWORK</div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                Matched by skills, not keywords.
              </h2>
            </div>

            <button onClick={() => onNavigate('/opportunities')} className="btn btn-secondary btn-sm">
              View All Opportunities ({opportunities.length})
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem'
          }}>
            {opportunities.slice(0, 3).map((opp) => (
              <OpportunityCard 
                key={opp.id} 
                opportunity={opp} 
                onSelect={() => onNavigate('/opportunities')} 
                onOpenMatchModal={onOpenMatchModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section: For Institutions */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-subtle)', backgroundColor: '#FFFFFF' }}>
        <div className="max-width-wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            {/* Institution Analytics Preview */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-light)', marginBottom: '1rem' }}>
                INSTITUTION STUDENT READINESS METRICS
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{ backgroundColor: '#F0FDF4', padding: '0.85rem 0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid #99F6E4' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0D9488' }}>38%</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0F766E' }}>Career Ready</div>
                </div>
                <div style={{ backgroundColor: 'var(--accent-light)', padding: '0.85rem 0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-border)' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-primary)' }}>44%</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-primary)' }}>Developing</div>
                </div>
                <div style={{ backgroundColor: 'var(--warning-bg)', padding: '0.85rem 0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--warning-border)' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--warning-text)' }}>18%</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--warning-text)' }}>Needs Support</div>
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Top Student Skill Gaps:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                  <span>SQL Querying & Joins</span>
                  <strong>284 students</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                  <span>Data Analytics & Viz</span>
                  <strong>241 students</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                  <span>Cloud Fundamentals</span>
                  <strong>193 students</strong>
                </div>
              </div>
            </div>

            <div>
              <div className="eyebrow">INSTITUTIONAL INTELLIGENCE</div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                Measure readiness, identify gaps, drive outcomes.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                University leaders and placement directors gain real-time visibility into student skill readiness and industry demand to organize targeted bridge programs and improve placement success.
              </p>

              <div style={{
                backgroundColor: 'var(--warning-bg)',
                border: '1px solid var(--warning-border)',
                padding: '0.85rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '1.5rem',
                fontSize: '0.875rem'
              }}>
                <strong>Actionable Insight:</strong> 284 students have a SQL development gap while SQL appears across a large share of current sample opportunities.
              </div>

              <button 
                onClick={() => onSelectRole('institution')} 
                className="btn btn-primary"
              >
                Explore Institution View
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Final CTA */}
      <section style={{ padding: '4.5rem 0', textAlign: 'center', backgroundColor: 'var(--bg-main)' }}>
        <div className="max-width-wrapper" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Build readiness before the opportunity arrives.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
            ALIGN connects the skills students are building with the opportunities industry needs.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('/opportunities')} className="btn btn-primary" style={{ padding: '0.8rem 1.75rem', fontSize: '0.95rem' }}>
              Explore Opportunities
            </button>
            <button onClick={() => onSelectRole('institution')} className="btn btn-secondary" style={{ padding: '0.8rem 1.75rem', fontSize: '0.95rem' }}>
              For Institutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
