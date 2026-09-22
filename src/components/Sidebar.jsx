import React, { useState } from 'react';
import { 
  Home, 
  Briefcase, 
  Award, 
  Compass, 
  Users, 
  User, 
  ChevronDown, 
  Sparkles, 
  GraduationCap, 
  Building2, 
  School,
  Layers,
  BarChart3,
  FileCheck,
  PlusCircle,
  Search,
  BookOpen,
  Calendar,
  X
} from 'lucide-react';

export default function Sidebar({ 
  currentTab, 
  onSelectTab, 
  currentRole, 
  onSelectRole,
  student,
  academician,
  recruiter,
  institution,
  isMobileOpen,
  onCloseMobile,
  onLogout,
  onReturnToLanding
}) {
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  // Role-specific navigation menus
  const getNavItems = () => {
    switch (currentRole) {
      case 'academician':
        return [
          { id: 'dashboard', label: 'Faculty Overview', icon: Home },
          { id: 'cohort-monitoring', label: 'Cohort Readiness', icon: Users, badge: '3 Batches' },
          { id: 'faculty-fdp', label: 'Faculty FDPs', icon: GraduationCap, badge: '2 Active' },
          { id: 'joint-research', label: 'Joint R&D Grants', icon: Award },
          { id: 'mentorship-sessions', label: 'Mentorship Hours', icon: Calendar }
        ];
      case 'industry':
        return [
          { id: 'dashboard', label: 'Recruiter Hub', icon: Home },
          { id: 'manage-postings', label: 'Active Postings', icon: Briefcase, badge: '6 Live' },
          { id: 'candidate-matchmaker', label: 'Candidate Matchmaker', icon: Search, badge: '92% Top' },
          { id: 'post-opportunity', label: 'Post Opportunity', icon: PlusCircle },
          { id: 'industry-challenges', label: 'Hackathons & Tasks', icon: Award }
        ];
      case 'institution':
        return [
          { id: 'dashboard', label: 'Leadership Overview', icon: Home },
          { id: 'dept-analytics', label: 'Department Analytics', icon: BarChart3, badge: '5 Depts' },
          { id: 'industry-mous', label: 'Industry MOUs', icon: Building2, badge: '42 Active' },
          { id: 'accreditation-reports', label: 'NIRF / NAAC Reports', icon: FileCheck }
        ];
      default: // student
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'opportunities', label: 'Opportunities', icon: Briefcase, badge: '6 New' },
          { id: 'assessment', label: 'Skill Assessment', icon: Award },
          { id: 'ai-mapping', label: 'AI Skill & Taxonomy', icon: Sparkles, badge: 'spaCy AI' },
          { id: 'learning-path', label: 'Learning Path', icon: Compass },
          { id: 'industry-connect', label: 'Industry Connect', icon: Users },
          { id: 'profile', label: 'Profile', icon: User }
        ];
    }
  };

  const navItems = getNavItems();

  const roles = [
    { id: 'student', label: 'Student', name: student.name, subtext: 'B.Tech AI & CSE · Anna Univ', icon: GraduationCap },
    { id: 'academician', label: 'Academician / Faculty', name: academician.name, subtext: 'Professor & Head', icon: School },
    { id: 'industry', label: 'Industry Recruiter', name: recruiter.name, subtext: 'Google University Lead', icon: Building2 },
    { id: 'institution', label: 'Institution Admin', name: institution.name, subtext: 'NIRF Rank 8 Analytics', icon: Layers }
  ];

  const activeRoleData = roles.find(r => r.id === currentRole) || roles[0];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={onCloseMobile} 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(2px)',
            zIndex: 35
          }}
        />
      )}

      <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
        {/* Brand Header */}
        <div className="sidebar-brand" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="brand-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor" opacity="0.2"/>
                <path d="M9.5 7.5C9.5 6.12 10.62 5 12 5C13.38 5 14.5 6.12 14.5 7.5C14.5 8.88 13.38 10 12 10C10.62 10 9.5 8.88 9.5 7.5ZM12 12C8.69 12 6 14.69 6 18H18C18 14.69 15.31 12 12 12Z" fill="white"/>
                <circle cx="12" cy="7.5" r="2.5" fill="#93C5FD"/>
                <path d="M12 3V5M12 19V21M3 12H5M19 12H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="brand-text">
              <h1>SIXTH SENSE</h1>
              <p>Intelligent Connections</p>
            </div>
          </div>

          {onCloseMobile && (
            <button 
              onClick={onCloseMobile} 
              style={{ display: 'none', color: '#94a3b8' }}
              className="mobile-close-btn"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Category Pill Tag: Skill Orbit */}
        <div className="sidebar-category-pill">
          <Layers size={16} />
          <span>Skill Orbit</span>
        </div>

        {/* Main Navigation */}
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  if (onCloseMobile) onCloseMobile();
                }}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
                {item.badge && <span className="nav-item-badge">{item.badge}</span>}
              </button>
            );
          })}
        </nav>

        {/* User Role Card & Switcher */}
        <div className="sidebar-user">
          {isRoleDropdownOpen && (
            <div className="role-dropdown">
              <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 800, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                ✦ Switch Active Role
              </div>
              {roles.map((r) => {
                const RoleIcon = r.icon;
                return (
                  <button
                    key={r.id}
                    onClick={() => {
                      onSelectRole(r.id);
                      setIsRoleDropdownOpen(false);
                    }}
                    className={`role-option ${currentRole === r.id ? 'active' : ''}`}
                  >
                    <RoleIcon size={16} />
                    <div>
                      <div style={{ fontSize: '12.5px', fontWeight: 700 }}>{r.name.split(' ')[0]} ({r.label.split(' ')[0]})</div>
                      <div style={{ fontSize: '10.5px', color: '#64748b' }}>{r.subtext}</div>
                    </div>
                  </button>
                );
              })}

              {onReturnToLanding && (
                <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '6px', paddingTop: '6px' }}>
                  <button
                    onClick={() => {
                      setIsRoleDropdownOpen(false);
                      onReturnToLanding();
                    }}
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      background: '#f1f5f9',
                      color: '#334155',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textAlign: 'left'
                    }}
                  >
                    <span>🌐 Showcase Landing Page</span>
                  </button>
                </div>
              )}

              {onLogout && (
                <div style={{ marginTop: '4px' }}>
                  <button
                    onClick={() => {
                      setIsRoleDropdownOpen(false);
                      onLogout();
                    }}
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      background: '#fee2e2',
                      color: '#b91c1c',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      textAlign: 'left'
                    }}
                  >
                    <span>🔒 Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          )}

          <button 
            className="user-pill-btn"
            onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
          >
            <div className="user-avatar">
              {activeRoleData.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div className="user-info">
              <div className="user-name">{activeRoleData.name}</div>
              <div className="user-role-tag">{activeRoleData.label}</div>
            </div>
            <ChevronDown size={16} color="#64748b" />
          </button>
        </div>
      </aside>
    </>
  );
}
