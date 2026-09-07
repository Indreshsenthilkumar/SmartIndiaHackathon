import React, { useState } from 'react';
import { Compass, Menu, X, ArrowRight, Sparkles, ChevronDown, Target } from 'lucide-react';

export default function Navbar({ currentRoute, onNavigate, onOpenRoleModal, currentRole }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (route) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header style={{
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: '0 1px 3px 0 rgba(15, 23, 42, 0.03)',
      position: 'sticky',
      top: 0,
      zIndex: 900
    }}>
      <div className="max-width-wrapper" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => handleNav('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1.15rem',
            letterSpacing: '-0.03em',
            boxShadow: '0 2px 4px 0 rgba(37, 99, 235, 0.25)'
          }}>
            A
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em', color: 'var(--text-main)', lineHeight: 1 }}>
              ALIGN
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-primary)', letterSpacing: '0.06em', marginTop: '0.15rem' }}>
              ACADEMIA × INDUSTRY
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <button 
            onClick={() => handleNav('/opportunities')}
            className={`nav-link ${currentRoute === '/opportunities' ? 'active' : ''}`}
          >
            Opportunities
          </button>

          <button 
            onClick={() => handleNav('/challenges')}
            className={`nav-link ${currentRoute === '/challenges' ? 'active' : ''}`}
          >
            Industry Challenges
          </button>

          <button 
            onClick={() => handleNav('/skills')}
            className={`nav-link ${currentRoute === '/skills' ? 'active' : ''}`}
          >
            Skills Explorer
          </button>

          <button 
            onClick={() => handleNav('/students')}
            className={`nav-link ${currentRoute === '/students' ? 'active' : ''}`}
          >
            For Students
          </button>

          <button 
            onClick={() => handleNav('/institutions')}
            className={`nav-link ${currentRoute === '/institutions' ? 'active' : ''}`}
          >
            For Institutions
          </button>

          <button 
            onClick={() => handleNav('/industry')}
            className={`nav-link ${currentRoute === '/industry' ? 'active' : ''}`}
          >
            For Industry
          </button>

          <button 
            onClick={() => handleNav('/about')}
            className={`nav-link ${currentRoute === '/about' ? 'active' : ''}`}
          >
            About
          </button>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {currentRole !== 'public' ? (
            <button
              onClick={() => handleNav(
                currentRole === 'student' ? '/student' :
                currentRole === 'institution' ? '/institution' : '/industry-dashboard'
              )}
              className="btn btn-secondary btn-sm"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--accent-light)',
                borderColor: 'var(--accent-border)',
                color: 'var(--accent-primary)'
              }}
            >
              <Compass size={15} />
              {currentRole === 'student' ? 'Student Workspace' :
               currentRole === 'institution' ? 'Institution Analytics' : 'Industry Pipeline'}
            </button>
          ) : (
            <button
              onClick={onOpenRoleModal}
              className="btn btn-ghost btn-sm"
              style={{ fontWeight: 600, color: 'var(--text-main)', border: '1px solid var(--border-subtle)', padding: '0.45rem 0.9rem' }}
            >
              Sign In
            </button>
          )}

          <button
            onClick={onOpenRoleModal}
            className="btn btn-primary btn-sm"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.45rem 1rem', boxShadow: '0 2px 4px rgba(37,99,235,0.2)' }}
          >
            Get Started
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              display: 'none',
              padding: '0.4rem',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <button 
            onClick={() => handleNav('/')}
            className={`nav-link ${currentRoute === '/' ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('/opportunities')}
            className={`nav-link ${currentRoute === '/opportunities' ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
          >
            Explore Opportunities
          </button>
          <button 
            onClick={() => handleNav('/challenges')}
            className={`nav-link ${currentRoute === '/challenges' ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
          >
            Industry Challenges
          </button>
          <button 
            onClick={() => handleNav('/skills')}
            className={`nav-link ${currentRoute === '/skills' ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
          >
            Skills Explorer
          </button>
          <button 
            onClick={() => handleNav('/students')}
            className={`nav-link ${currentRoute === '/students' ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
          >
            For Students
          </button>
          <button 
            onClick={() => handleNav('/institutions')}
            className={`nav-link ${currentRoute === '/institutions' ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
          >
            For Institutions
          </button>
          <button 
            onClick={() => handleNav('/industry')}
            className={`nav-link ${currentRoute === '/industry' ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
          >
            For Industry
          </button>
          <button 
            onClick={() => handleNav('/about')}
            className={`nav-link ${currentRoute === '/about' ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
          >
            About ALIGN
          </button>
        </div>
      )}
    </header>
  );
}
