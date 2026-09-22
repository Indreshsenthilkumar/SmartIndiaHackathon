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
      <div className="header-wrapper" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px',
        width: '100%'
      }}>
        {/* Ministry of Ayush & AIIA Official Logo */}
        <div 
          onClick={() => handleNav('/')}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
        >
          <img 
            src="/ayush-logo.png" 
            alt="Ministry of Ayush - All India Institute of Ayurveda" 
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
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
            onClick={() => handleNav('/academicians')}
            className={`nav-link ${currentRoute === '/academicians' ? 'active' : ''}`}
          >
            For Academicians
          </button>

          <button 
            onClick={() => handleNav('/about')}
            className={`nav-link ${currentRoute === '/about' ? 'active' : ''}`}
          >
            About
          </button>
        </nav>

        {/* Desktop Right Actions */}
        <div className="desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {currentRole !== 'public' ? (
            <button
              onClick={() => handleNav(
                currentRole === 'student' ? '/student' :
                currentRole === 'institution' ? '/institution' :
                currentRole === 'academician' ? '/academician' : '/industry-dashboard'
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
               currentRole === 'institution' ? 'Institution Analytics' :
               currentRole === 'academician' ? 'Academician Workspace' : 'Industry Pipeline'}
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
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            padding: '0.5rem',
            cursor: 'pointer'
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          boxShadow: 'var(--shadow-lg)',
          maxHeight: 'calc(100vh - 75px)',
          overflowY: 'auto'
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
            onClick={() => handleNav('/academicians')}
            className={`nav-link ${currentRoute === '/academicians' ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
          >
            For Academicians
          </button>
          <button 
            onClick={() => handleNav('/about')}
            className={`nav-link ${currentRoute === '/about' ? 'active' : ''}`}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.65rem 0.85rem' }}
          >
            About Portal
          </button>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {currentRole !== 'public' && (
              <button
                onClick={() => handleNav(
                  currentRole === 'student' ? '/student' :
                  currentRole === 'institution' ? '/institution' :
                  currentRole === 'academician' ? '/academician' : '/industry-dashboard'
                )}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Compass size={16} />
                {currentRole === 'student' ? 'Student Workspace' :
                 currentRole === 'institution' ? 'Institution Analytics' :
                 currentRole === 'academician' ? 'Academician Workspace' : 'Industry Pipeline'}
              </button>
            )}
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenRoleModal(); }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Select Stakeholder Role
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
