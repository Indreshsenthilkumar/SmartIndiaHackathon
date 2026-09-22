import React from 'react';
import { X, Bell, CheckCircle2, Calendar, Sparkles, ArrowRight } from 'lucide-react';

export default function NotificationModal({ isOpen, onClose, onNavigateTab }) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 'notif-1',
      title: 'Interview Scheduled with Microsoft',
      desc: 'Technical discussion on Azure Data Engineering scheduled for 23 Sep 2026, 2:30 PM IST.',
      time: '2 hours ago',
      type: 'interview',
      tab: 'opportunities'
    },
    {
      id: 'notif-2',
      title: 'Google AI/ML Assessment Invite',
      desc: 'Your profile cleared Phase 1 screening. Click to complete the 15-minute skill assessment.',
      time: '5 hours ago',
      type: 'assessment',
      tab: 'assessment'
    },
    {
      id: 'notif-3',
      title: 'New Innovation Challenge Live',
      desc: 'TCS Innovation Labs launched Edge AI Defect Detection Challenge with ₹2.5L prize pool.',
      time: '1 day ago',
      type: 'challenge',
      tab: 'industry-connect'
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '480px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bell size={18} color="#2563EB" />
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>Notifications & Alerts</h3>
          </div>
          <button onClick={onClose} style={{ padding: '4px', color: '#94A3B8' }}>
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => {
                onNavigateTab(n.tab);
                onClose();
              }}
              style={{
                padding: '14px',
                borderRadius: '12px',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: '#0F172A' }}>{n.title}</h4>
                <span style={{ fontSize: '11px', color: '#94A3B8' }}>{n.time}</span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: 1.4, marginBottom: '8px' }}>
                {n.desc}
              </p>
              <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#2563EB', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>View Details</span>
                <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
