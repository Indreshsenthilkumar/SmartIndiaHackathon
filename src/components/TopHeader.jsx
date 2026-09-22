import React from 'react';
import { Search, Bell, Sparkles, Menu, X, CheckCircle2 } from 'lucide-react';

export default function TopHeader({ 
  searchQuery, 
  onSearchChange, 
  onOpenNotifications, 
  student, 
  currentRole,
  onToggleMobileMenu,
  onSelectRole,
  onLogout,
  onReturnToLanding
}) {
  const roleLabels = {
    student: 'Student · Anna University',
    academician: 'Faculty & HOD · AI Systems',
    industry: 'Lead Recruiter · Google & TCS',
    institution: 'University Admin · NIRF Rank 8'
  };

  return (
    <header className="top-header">
      {/* Mobile Hamburger Menu Toggle */}
      <button 
        className="mobile-menu-btn"
        onClick={onToggleMobileMenu}
        style={{
          display: 'none',
          padding: '8px',
          borderRadius: '8px',
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          marginRight: '12px',
          color: '#1E293B'
        }}
      >
        <Menu size={20} />
      </button>

      {/* Global Search Bar */}
      <div className="search-container">
        <Search className="search-icon" size={17} />
        <input
          type="text"
          placeholder="Search internships, projects, skills, or companies..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#94A3B8'
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Header Actions */}
      <div className="header-actions">
        {/* Showcase Landing Page Button */}
        {onReturnToLanding && (
          <button
            onClick={onReturnToLanding}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              color: '#334155',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>🌐 Showcase Page</span>
          </button>
        )}

        {/* Active Role Indicator Pill */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: '#EFF6FF',
          border: '1px solid #DBEAFE',
          padding: '6px 14px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 700,
          color: '#2563EB',
          whiteSpace: 'nowrap'
        }}>
          <Sparkles size={13} />
          <span>{roleLabels[currentRole] || 'Portal Active'}</span>
        </div>

        {/* Notifications Icon Button */}
        <button 
          className="icon-btn" 
          onClick={onOpenNotifications}
          title="Notifications & Updates"
        >
          <Bell size={18} />
          <span className="notification-badge-dot"></span>
        </button>

        {/* User Initials Avatar with Click to Switch / Logout */}
        <div 
          className="header-user-avatar" 
          title={`Logged in as ${currentRole}. Click to Switch or Log Out`}
          onClick={onLogout}
          style={{ cursor: 'pointer' }}
        >
          {currentRole === 'academician' ? 'DR' : currentRole === 'industry' ? 'PS' : currentRole === 'institution' ? 'AU' : 'AK'}
        </div>

        {/* Log Out Button */}
        <button
          onClick={onLogout}
          title="Sign Out / Return to Landing Page"
          style={{
            padding: '6px 10px',
            borderRadius: '8px',
            background: '#F1F5F9',
            border: '1px solid #CBD5E1',
            color: '#475569',
            fontSize: '12px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
