import React from 'react';
import { User, Building2, Briefcase, Eye } from 'lucide-react';

export default function RoleBanner({ currentRole, onSelectRole }) {
  return (
    <div style={{
      backgroundColor: '#0F172A',
      color: '#94A3B8',
      fontSize: '0.78rem',
      padding: '0.4rem 1rem',
      borderBottom: '1px solid #334155',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.5rem',
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{
          backgroundColor: '#1E293B',
          color: '#38BDF8',
          padding: '0.15rem 0.5rem',
          borderRadius: '4px',
          fontWeight: 700,
          fontSize: '0.7rem',
          letterSpacing: '0.05em'
        }}>
          DEMO ENVIRONMENT
        </span>
        <span style={{ color: '#E2E8F0', fontWeight: 500 }}>
          Switch Persona View:
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => onSelectRole('public')}
          style={{
            background: currentRole === 'public' ? '#2563EB' : '#1E293B',
            color: currentRole === 'public' ? '#FFFFFF' : '#94A3B8',
            border: 'none',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <Eye size={13} />
          Public Site
        </button>

        <button
          onClick={() => onSelectRole('student')}
          style={{
            background: currentRole === 'student' ? '#2563EB' : '#1E293B',
            color: currentRole === 'student' ? '#FFFFFF' : '#94A3B8',
            border: 'none',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <User size={13} />
          Student Portal
        </button>

        <button
          onClick={() => onSelectRole('institution')}
          style={{
            background: currentRole === 'institution' ? '#2563EB' : '#1E293B',
            color: currentRole === 'institution' ? '#FFFFFF' : '#94A3B8',
            border: 'none',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <Building2 size={13} />
          Institution Portal
        </button>

        <button
          onClick={() => onSelectRole('industry')}
          style={{
            background: currentRole === 'industry' ? '#2563EB' : '#1E293B',
            color: currentRole === 'industry' ? '#FFFFFF' : '#94A3B8',
            border: 'none',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <Briefcase size={13} />
          Industry Portal
        </button>
      </div>
    </div>
  );
}
