import React, { useState } from 'react';
import { 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Download, 
  QrCode, 
  Award, 
  Mail, 
  GraduationCap, 
  Share2,
  FileText
} from 'lucide-react';

export default function ProfilePortfolioView({ student }) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyShareableLink = () => {
    navigator.clipboard?.writeText(`https://sixth-sense.edu/portfolio/${student.rollNumber}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="page-container">
      {/* Top Banner Card */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: 'var(--shadow-card)',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            width: '74px',
            height: '74px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #2563EB, #60A5FA)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '26px',
            fontWeight: 800,
            boxShadow: '0 4px 14px rgba(37,99,235,0.35)'
          }}>
            AK
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A' }}>{student.name}</h1>
              <div style={{
                background: '#F0FDF4',
                color: '#16A34A',
                border: '1px solid #BBF7D0',
                padding: '2px 8px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '3px'
              }}>
                <ShieldCheck size={12} />
                <span>Verified Talent</span>
              </div>
            </div>
            <p style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 600 }}>
              {student.degree} · {student.institution}
            </p>
            <p style={{ fontSize: '12.5px', color: '#2563EB', fontWeight: 700, marginTop: '2px' }}>
              🎯 Target: {student.targetCareer}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={handleCopyShareableLink}
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              padding: '9px 16px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#1E293B',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Share2 size={14} />
            <span>{copiedLink ? 'Copied!' : 'Share Portfolio'}</span>
          </button>
          <button
            onClick={() => alert('Generating Verified Digital Portfolio PDF...')}
            className="btn-primary"
            style={{ fontSize: '13px', padding: '9px 18px' }}
          >
            <Download size={14} />
            <span>Export Verified PDF</span>
          </button>
        </div>
      </div>

      {/* Grid: Competency Twin & Verified Projects */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        {/* Left Column: Verified Practical Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="app-card">
            <div className="card-header">
              <h2 className="card-title">Verified Industrial Projects & Code Evidence</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {student.analyzedProjects.map((p) => (
                <div
                  key={p.id}
                  style={{
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    padding: '18px',
                    background: '#F8FAFC'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>
                      {p.title}
                    </h3>
                    <span style={{
                      background: '#F0FDF4',
                      color: '#16A34A',
                      border: '1px solid #BBF7D0',
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '9999px'
                    }}>
                      {p.status}
                    </span>
                  </div>

                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.45, marginBottom: '12px' }}>
                    {p.summary}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                    {p.verifiedSkills.map((sk, idx) => (
                      <span key={idx} className="skill-pill">
                        ✓ {sk}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#64748B' }}>
                    <span>Tech: {p.techStack}</span>
                    <span style={{ fontWeight: 700, color: '#2563EB' }}>Contrib: {p.practicalContribution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="app-card">
            <div className="card-header">
              <h2 className="card-title">Verified Certifications & Credentials</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {student.certifications.map((cert) => (
                <div
                  key={cert.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px',
                    borderRadius: '12px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: '#EFF6FF',
                      color: '#2563EB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Award size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#0F172A' }}>{cert.title}</div>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>
                        {cert.issuer} · Issued {cert.issueDate}
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#2563EB', background: '#EFF6FF', padding: '3px 8px', borderRadius: '6px' }}>
                    {cert.credentialId}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Competency Twin Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="app-card">
            <div className="card-header">
              <h2 className="card-title">Competency Twin Metric</h2>
            </div>

            <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>
              Dual-vector evaluation separating theoretical knowledge assessments from practical code & lab implementation.
            </p>

            {/* Knowledge Score */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Knowledge Score (Theory & MCQs)</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB' }}>{student.competencyTwin.knowledgeScore}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: `${student.competencyTwin.knowledgeScore}%`, height: '100%', background: '#2563EB', borderRadius: '9999px' }}></div>
              </div>
            </div>

            {/* Build Score */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Build Score (Practical Repos)</span>
                <span style={{ fontSize: '13px', fontWeight: 800, color: '#16A34A' }}>{student.competencyTwin.buildScore}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: `${student.competencyTwin.buildScore}%`, height: '100%', background: '#16A34A', borderRadius: '9999px' }}></div>
              </div>
            </div>

            {/* Verification QR Mock */}
            <div style={{
              background: '#F8FAFC',
              border: '1px dashed #CBD5E1',
              borderRadius: '14px',
              padding: '16px',
              textAlign: 'center'
            }}>
              <QrCode size={48} color="#2563EB" style={{ margin: '0 auto 8px' }} />
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>Verifiable Cryptographic Proof</div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>Scan to authenticate student skills directly on Skill Orbit Blockchain Ledger</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
