import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Bookmark, 
  Sparkles, 
  TrendingUp, 
  Award,
  ChevronRight
} from 'lucide-react';

export default function DashboardView({
  student,
  opportunities,
  onNavigateTab,
  onSelectOpportunity,
  onToggleSaveOpportunity
}) {
  // Take top 3 recommended opportunities matching the user screenshot
  const recommendedOpps = opportunities.slice(0, 3);

  // Helper for company logo rendering
  const renderCompanyLogo = (opp) => {
    if (opp.company === 'Google') {
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
      );
    }
    if (opp.company === 'Microsoft') {
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect x="2" y="2" width="9" height="9" fill="#F25022"/>
          <rect x="13" y="2" width="9" height="9" fill="#7FBA00"/>
          <rect x="2" y="13" width="9" height="9" fill="#00A4EF"/>
          <rect x="13" y="13" width="9" height="9" fill="#FFB900"/>
        </svg>
      );
    }
    if (opp.company.includes('Tata') || opp.company === 'TCS') {
      return (
        <div style={{ color: '#0F52BA', fontWeight: 900, fontSize: '13px', letterSpacing: '-0.5px' }}>
          tcs
        </div>
      );
    }
    return <span style={{ fontWeight: 800, color: '#2563eb' }}>{opp.company.charAt(0)}</span>;
  };

  // Profile match circumference computation (r = 54, circumference = 2 * PI * 54 = ~339.29)
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const matchOffset = circumference - (student.overallReadiness / 100) * circumference;

  return (
    <div className="page-container">
      {/* Top Grid: Hero Banner + Profile Match Card */}
      <div className="dashboard-grid" style={{ marginBottom: '28px' }}>
        {/* Hero Banner Card */}
        <div className="hero-card">
          {/* Subtle Organic Background Wave Curves */}
          <svg className="hero-wave-bg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C160 80 180 200 400 180V0H50Z" fill="url(#heroGrad1)" opacity="0.35"/>
            <path d="M0 60C140 10 240 160 400 120V0H0V60Z" fill="url(#heroGrad2)" opacity="0.25"/>
            <circle cx="340" cy="90" r="6" fill="#3B82F6" opacity="0.8"/>
            <circle cx="280" cy="180" r="4" fill="#60A5FA" opacity="0.6"/>
            <circle cx="210" cy="50" r="5" fill="#2563EB" opacity="0.7"/>
            <defs>
              <linearGradient id="heroGrad1" x1="50" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#93C5FD"/>
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="heroGrad2" x1="0" y1="0" x2="400" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA"/>
                <stop offset="1" stopColor="#DBEAFE" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Left Text Content */}
          <div className="hero-content">
            <div className="hero-tag">Welcome to</div>
            <h1 className="hero-title">Skill Orbit</h1>
            <div className="hero-subtitle">Learn. Connect. Grow.</div>
            <p className="hero-desc">Bridging the gap between academia and industry.</p>

            <div className="hero-actions">
              <button 
                className="btn-primary"
                onClick={() => onNavigateTab('opportunities')}
              >
                <span>Find Opportunities</span>
                <ArrowRight size={16} />
              </button>
              <button 
                className="btn-secondary"
                onClick={() => onNavigateTab('assessment')}
              >
                <CheckCircle size={16} />
                <span>Take Skill Assessment</span>
              </button>
            </div>
          </div>

          {/* Right Floating Quote Pill */}
          <div className="hero-side-quote">
            <p>Skills today.</p>
            <p>A stronger</p>
            <p>tomorrow.</p>
            <div className="hero-quote-line"></div>
          </div>
        </div>

        {/* Your Profile Match Card */}
        <div className="app-card match-gauge-card">
          <div className="card-header" style={{ width: '100%', marginBottom: '12px' }}>
            <h2 className="card-title">Your Profile Match</h2>
          </div>

          <div className="gauge-wrapper">
            <svg className="gauge-svg" viewBox="0 0 130 130">
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
              <circle
                className="gauge-bg-circle"
                cx="65"
                cy="65"
                r={radius}
              />
              <circle
                className="gauge-progress-circle"
                cx="65"
                cy="65"
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={matchOffset}
              />
            </svg>
            <div className="gauge-center-text">
              <span className="gauge-number">{student.overallReadiness}%</span>
            </div>
          </div>

          <div className="gauge-status">Great Match!</div>
          <p className="gauge-desc">
            Your skills align with in-demand opportunities.
          </p>

          <button
            onClick={() => onNavigateTab('ai-mapping')}
            style={{
              marginTop: '12px',
              padding: '8px 14px',
              borderRadius: '8px',
              background: '#eff6ff',
              color: '#2563eb',
              border: '1px solid #bfdbfe',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              width: '100%',
              transition: 'all 0.2s'
            }}
          >
            <Sparkles size={14} />
            <span>spaCy & scikit-learn Breakdown</span>
          </button>
        </div>
      </div>

      {/* Bottom Grid: Recommended for You (3 columns) + Your Learning Path */}
      <div className="dashboard-grid">
        {/* Recommended for You Section */}
        <div className="app-card" style={{ padding: '24px' }}>
          <div className="card-header">
            <h2 className="card-title">Recommended for You</h2>
            <button 
              className="card-link"
              onClick={() => onNavigateTab('opportunities')}
            >
              <span>View All</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="opportunities-preview-grid">
            {recommendedOpps.map((opp) => {
              const isSaved = student.savedOpportunities?.includes(opp.id);
              return (
                <div key={opp.id} className="opp-mini-card">
                  <div>
                    {/* Top Company & Title Row */}
                    <div className="opp-card-top">
                      <div className="company-brand-row">
                        <div className="company-logo-box">
                          {renderCompanyLogo(opp)}
                        </div>
                        <div className="opp-title-box">
                          <h3>{opp.title}</h3>
                          <p>{opp.company}</p>
                        </div>
                      </div>
                      <button 
                        className={`bookmark-btn ${isSaved ? 'saved' : ''}`}
                        onClick={() => onToggleSaveOpportunity(opp.id)}
                        title={isSaved ? "Saved" : "Save opportunity"}
                      >
                        <Bookmark size={17} fill={isSaved ? "#2563EB" : "none"} />
                      </button>
                    </div>

                    {/* Skills Pills */}
                    <div className="skills-pill-group">
                      {opp.requiredSkills.map((skill, idx) => (
                        <span key={idx} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Location & Duration Metadata */}
                    <div className="opp-meta-row">
                      <div className="opp-meta-item">
                        <MapPin size={13} />
                        <span>{opp.location}</span>
                      </div>
                      <div className="opp-meta-item">
                        <Clock size={13} />
                        <span>{opp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    className="btn-card-action"
                    onClick={() => onSelectOpportunity(opp)}
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Your Learning Path Card */}
        <div className="app-card" style={{ padding: '24px' }}>
          <div className="card-header">
            <h2 className="card-title">Your Learning Path</h2>
            <button 
              className="card-link"
              onClick={() => onNavigateTab('learning-path')}
            >
              <span>View Path</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="learning-path-list">
            {/* Step 1 */}
            <div className="path-step-item">
              <div className="step-circle completed">1</div>
              <div className="step-content">
                <div className="step-title">Learn Core Skills</div>
                <div className="step-subtitle">Completed • 100%</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="path-step-item">
              <div className="step-circle in-progress">2</div>
              <div className="step-content">
                <div className="step-title">Build Real Projects</div>
                <div className="step-subtitle">In Progress • 60%</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="path-step-item">
              <div className="step-circle upcoming">3</div>
              <div className="step-content">
                <div className="step-title" style={{ color: '#64748b' }}>Gain Industry Exposure</div>
                <div className="step-subtitle">Not Started</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="path-step-item">
              <div className="step-circle upcoming">4</div>
              <div className="step-content">
                <div className="step-title" style={{ color: '#64748b' }}>Get Certified</div>
                <div className="step-subtitle">Not Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
