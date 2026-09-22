import React from 'react';
import { CheckCircle2, AlertCircle, Info, X, Sparkles } from 'lucide-react';

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '380px',
      width: '100%',
      pointerEvents: 'none'
    }}>
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success' || !toast.type;
        const isWarning = toast.type === 'warning';
        const isInfo = toast.type === 'info';

        return (
          <div
            key={toast.id}
            style={{
              pointerEvents: 'auto',
              background: '#FFFFFF',
              border: isSuccess ? '1px solid #BBF7D0' : isWarning ? '1px solid #FDE68A' : '1px solid #BFDBFE',
              borderRadius: '14px',
              padding: '14px 16px',
              boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.15), 0 8px 10px -6px rgba(15, 23, 42, 0.1)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              animation: 'toastSlideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              borderLeft: isSuccess ? '5px solid #16A34A' : isWarning ? '5px solid #D97706' : '5px solid #2563EB'
            }}
          >
            <div style={{
              color: isSuccess ? '#16A34A' : isWarning ? '#D97706' : '#2563EB',
              flexShrink: 0,
              marginTop: '1px'
            }}>
              {isSuccess ? <CheckCircle2 size={18} /> : isWarning ? <AlertCircle size={18} /> : <Sparkles size={18} />}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              {toast.title && (
                <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>
                  {toast.title}
                </div>
              )}
              <div style={{ fontSize: '12.5px', color: '#475569', lineHeight: 1.4 }}>
                {toast.message}
              </div>
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              style={{
                color: '#94A3B8',
                padding: '2px',
                borderRadius: '6px',
                flexShrink: 0
              }}
            >
              <X size={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
