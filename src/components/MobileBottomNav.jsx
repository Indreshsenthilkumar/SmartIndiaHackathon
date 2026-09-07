import React from 'react';
import { Home, Award, Briefcase, FileText, User, Building2, BarChart2, CheckSquare } from 'lucide-react';

export default function MobileBottomNav({ role, activeTab, onSelectTab, onNavigate }) {
  if (role === 'public') return null;

  const studentItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'profile', label: 'Skills', icon: Award },
    { id: 'gaps', label: 'Gaps', icon: CheckSquare },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: User }
  ];

  const institutionItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'readiness', label: 'Readiness', icon: BarChart2 },
    { id: 'demand', label: 'Skill Demand', icon: Briefcase },
    { id: 'outcomes', label: 'Outcomes', icon: Award }
  ];

  const industryItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'post', label: 'Post Opp', icon: Briefcase },
    { id: 'candidates', label: 'Candidates', icon: User },
    { id: 'collaborations', label: 'Collaborate', icon: Building2 }
  ];

  const items = 
    role === 'student' ? studentItems :
    role === 'institution' ? institutionItems : industryItems;

  return (
    <div className="mobile-bottom-nav">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSelectTab(item.id)}
            className={`mobile-nav-item ${isActive ? 'active' : ''}`}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
