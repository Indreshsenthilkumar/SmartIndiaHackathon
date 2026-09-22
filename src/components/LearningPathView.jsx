import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  PlayCircle, 
  Award, 
  Compass, 
  Lock, 
  Sparkles, 
  Clock, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { initialLearningPaths } from '../data/mockData';

export default function LearningPathView({ student }) {
  const [learningPath, setLearningPath] = useState(initialLearningPaths[0]);

  const toggleModule = (phaseIdx, moduleIdx) => {
    setLearningPath(prev => {
      const newPhases = [...prev.phases];
      const targetPhase = { ...newPhases[phaseIdx] };
      const newModules = [...targetPhase.modules];
      
      newModules[moduleIdx] = {
        ...newModules[moduleIdx],
        completed: !newModules[moduleIdx].completed
      };

      targetPhase.modules = newModules;
      const completedCount = newModules.filter(m => m.completed).length;
      targetPhase.percent = Math.round((completedCount / newModules.length) * 100);
      targetPhase.status = targetPhase.percent === 100 ? 'Completed' : targetPhase.percent > 0 ? 'In Progress' : 'Up Next';

      newPhases[phaseIdx] = targetPhase;
      return { ...prev, phases: newPhases };
    });
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563EB', fontSize: '13px', fontWeight: 800, marginBottom: '4px' }}>
          <Compass size={16} />
          <span>CAREER ACCELERATION ROADMAP</span>
        </div>
        <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
          {learningPath.title}
        </h1>
        <p style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 500 }}>
          Target Track: <strong style={{ color: '#0F172A' }}>{learningPath.roleTarget}</strong> · Total Estimated Effort: {learningPath.totalHours}
        </p>
      </div>

      {/* 4 Phases Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {learningPath.phases.map((phase, pIdx) => {
          const isLocked = phase.status === 'Locked';
          return (
            <div 
              key={phase.phaseNumber}
              style={{
                background: isLocked ? '#F8FAFC' : '#FFFFFF',
                border: phase.status === 'In Progress' ? '1.5px solid #3B82F6' : '1px solid #E2E8F0',
                borderRadius: '18px',
                padding: '24px',
                boxShadow: phase.status === 'In Progress' ? '0 8px 24px rgba(37,99,235,0.08)' : 'var(--shadow-card)',
                opacity: isLocked ? 0.7 : 1
              }}
            >
              {/* Phase Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '9999px',
                    background: phase.status === 'Completed' ? '#16A34A' : phase.status === 'In Progress' ? '#2563EB' : '#94A3B8',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '14px'
                  }}>
                    {phase.status === 'Completed' ? '✓' : phase.phaseNumber}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A' }}>
                      Phase {phase.phaseNumber}: {phase.title}
                    </h3>
                    <p style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>
                      Status: {phase.status} ({phase.percent}%)
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    background: '#EFF6FF',
                    color: '#2563EB',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Award size={13} />
                    <span>Badge: {phase.badge}</span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '9999px', overflow: 'hidden', marginBottom: '18px' }}>
                <div style={{
                  width: `${phase.percent}%`,
                  height: '100%',
                  background: phase.percent === 100 ? '#16A34A' : '#2563EB',
                  borderRadius: '9999px',
                  transition: 'width 0.3s ease'
                }}></div>
              </div>

              {/* Modules List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {phase.modules.map((mod, mIdx) => (
                  <div
                    key={mIdx}
                    onClick={() => !isLocked && toggleModule(pIdx, mIdx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: mod.completed ? '#F0FDF4' : '#F8FAFC',
                      border: mod.completed ? '1px solid #BBF7D0' : '1px solid #E2E8F0',
                      cursor: isLocked ? 'not-allowed' : 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {mod.completed ? (
                        <CheckCircle2 size={18} color="#16A34A" />
                      ) : isLocked ? (
                        <Lock size={16} color="#94A3B8" />
                      ) : (
                        <Circle size={18} color="#94A3B8" />
                      )}
                      <span style={{
                        fontSize: '13.5px',
                        fontWeight: mod.completed ? 700 : 600,
                        color: mod.completed ? '#166534' : '#1E293B',
                        textDecoration: mod.completed ? 'line-through' : 'none'
                      }}>
                        {mod.name}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {mod.duration}
                      </span>
                      {!mod.completed && !isLocked && (
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB' }}>
                          Start &rarr;
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
