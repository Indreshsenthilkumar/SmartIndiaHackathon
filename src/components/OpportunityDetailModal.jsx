import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Building, 
  Bookmark,
  Users,
  Briefcase,
  FileText,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Check,
  UploadCloud,
  File,
  Paperclip,
  Calendar,
  Phone,
  Mail,
  GraduationCap,
  Award,
  Download,
  AlertCircle
} from 'lucide-react';

export default function OpportunityDetailModal({
  opportunity,
  onClose,
  onApply,
  isApplied,
  isSaved,
  onToggleSave,
  student = {}
}) {
  // Multi-step form state: 'overview' | 'step-personal' | 'step-skills' | 'step-docs' | 'step-questions' | 'submitting' | 'success'
  const [currentStep, setCurrentStep] = useState(isApplied ? 'success' : 'overview');

  // Form Fields
  const [formData, setFormData] = useState({
    // Step 1: Personal & Academic
    fullName: student?.name || 'Angel K',
    email: student?.email || 'angel.k@annauniv.edu',
    phone: '+91 98765 43210',
    institution: student?.institution || 'Anna University / College of Engineering, Guindy',
    degree: student?.degree || 'B.Tech in Computer Science & Artificial Intelligence',
    gradYear: '2026',
    cgpa: '8.84 / 10.0',
    rollNumber: student?.rollNumber || '2026-CSE-408',

    // Step 2: Skills & Links
    selectedSkills: opportunity?.requiredSkills || [],
    githubUrl: 'https://github.com/angel-k/edge-defect-detection',
    linkedinUrl: 'https://linkedin.com/in/angel-k-ai',
    portfolioUrl: 'https://sixth-sense.edu/portfolio/2026-CSE-408',
    projectSummary: 'Built an ultra-lightweight YOLOv8 model for industrial edge defect localization running at 62 FPS with 96% practical code accuracy.',
    priorExperienceMonths: '3 Months (Research Fellow at AI Labs)',

    // Step 3: Documents
    resumeFileName: 'Angel_K_Verified_Technical_Resume.pdf',
    resumeSize: '2.4 MB · Authenticated',
    transcriptFileName: 'Anna_University_Semester_6_Official_Transcript.pdf',
    includeBlockchainBadge: true,

    // Step 4: Questions & Availability
    startDate: '2026-10-01',
    preferredWorkMode: opportunity?.workMode || 'Remote',
    weeklyHours: '40 Hours / Full-Time',
    statementOfInterest: opportunity ? `I am deeply interested in joining ${opportunity.company}'s team for the ${opportunity.title} role. My hands-on background in ${(opportunity.requiredSkills || []).slice(0, 2).join(' and ')} combined with real-world edge AI deployments makes this role the perfect fit to deliver immediate value.` : '',
    acceptedTerms: true
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionProgress, setSubmissionProgress] = useState(0);
  const [submissionStatusText, setSubmissionStatusText] = useState('Verifying Skill Credentials...');
  const [generatedAppId, setGeneratedAppId] = useState('');

  if (!opportunity) return null;

  // Handle Input Changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleToggleSkill = (skill) => {
    setFormData(prev => {
      const exists = prev.selectedSkills.includes(skill);
      return {
        ...prev,
        selectedSkills: exists
          ? prev.selectedSkills.filter(s => s !== skill)
          : [...prev.selectedSkills, skill]
      };
    });
  };

  // Step Validation
  const validateStep = (stepName) => {
    const errors = {};
    if (stepName === 'step-personal') {
      if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
      if (!formData.email.trim()) errors.email = 'Valid email is required';
      if (!formData.phone.trim()) errors.phone = 'Phone number is required';
      if (!formData.cgpa.trim()) errors.cgpa = 'CGPA is required';
    }
    if (stepName === 'step-skills') {
      if (formData.selectedSkills.length === 0) errors.selectedSkills = 'Select at least one competency';
      if (!formData.githubUrl.trim()) errors.githubUrl = 'GitHub repository URL is required';
    }
    if (stepName === 'step-questions') {
      if (!formData.startDate) errors.startDate = 'Earliest start date is required';
      if (!formData.statementOfInterest.trim() || formData.statementOfInterest.length < 20) {
        errors.statementOfInterest = 'Please write a brief statement (min 20 chars)';
      }
      if (!formData.acceptedTerms) errors.acceptedTerms = 'You must declare information accuracy';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = (targetStep) => {
    if (validateStep(currentStep)) {
      setCurrentStep(targetStep);
    }
  };

  // Final Form Submission
  const handleFinalSubmit = (e) => {
    if (e) e.preventDefault();
    if (!validateStep('step-questions')) return;

    setCurrentStep('submitting');
    setSubmissionProgress(20);
    setSubmissionStatusText('Stamping Verified Skills & CGPA on Blockchain Ledger...');

    setTimeout(() => {
      setSubmissionProgress(55);
      setSubmissionStatusText(`Submitting candidate dossier to ${opportunity.company} University ATS...`);
    }, 800);

    setTimeout(() => {
      setSubmissionProgress(90);
      setSubmissionStatusText('Generating Application Receipt & Notifying Recruiter...');
    }, 1500);

    setTimeout(() => {
      setSubmissionProgress(100);
      const appId = `APP-${opportunity.id.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setGeneratedAppId(appId);

      // Call parent application handler with rich data payload
      onApply({
        ...opportunity,
        submissionDetails: {
          appId,
          ...formData,
          submittedAt: 'Just now'
        }
      });

      setCurrentStep('success');
    }, 2100);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: currentStep === 'overview' ? '680px' : '740px' }} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={{
          padding: '20px 28px',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FAFCFF'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              color: '#2563EB',
              fontSize: '20px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {opportunity.company.charAt(0)}
            </div>
            <div>
              <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A' }}>
                {opportunity.title}
              </h2>
              <p style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>
                {opportunity.company} · {opportunity.location} ({opportunity.workMode}) · {opportunity.stipend}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '6px',
              borderRadius: '9999px',
              color: '#94A3B8',
              backgroundColor: '#F8FAFC'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Multi-Step Wizard Indicator (When filling form) */}
        {currentStep !== 'overview' && currentStep !== 'submitting' && currentStep !== 'success' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 28px',
            background: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
            fontSize: '12px',
            fontWeight: 700
          }}>
            {[
              { id: 'step-personal', label: '1. Personal & Academic' },
              { id: 'step-skills', label: '2. Skills & Projects' },
              { id: 'step-docs', label: '3. Documents' },
              { id: 'step-questions', label: '4. Questions & Review' }
            ].map((st, idx) => {
              const isCurrent = currentStep === st.id;
              const isDone = 
                (st.id === 'step-personal' && currentStep !== 'step-personal') ||
                (st.id === 'step-skills' && (currentStep === 'step-docs' || currentStep === 'step-questions')) ||
                (st.id === 'step-docs' && currentStep === 'step-questions');

              return (
                <div key={st.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: isCurrent ? '#2563EB' : isDone ? '#16A34A' : '#94A3B8' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '9999px',
                    background: isCurrent ? '#2563EB' : isDone ? '#16A34A' : '#E2E8F0',
                    color: isCurrent || isDone ? 'white' : '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 800
                  }}>
                    {isDone ? '✓' : idx + 1}
                  </div>
                  <span style={{ display: 'none', minWidth: 0, '@media (minWidth: 540px)': { display: 'inline' } }}>
                    {st.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 1: Overview & Job Spec */}
        {currentStep === 'overview' && (
          <div style={{ padding: '24px 28px' }}>
            <div style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16A34A', fontWeight: 800, fontSize: '13.5px' }}>
                <Sparkles size={16} />
                <span>{opportunity.matchScore}% Skill Profile Match ({opportunity.matchLabel})</span>
              </div>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#15803D' }}>
                Duration: {opportunity.duration}
              </span>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>Role Overview</h4>
              <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5 }}>
                {opportunity.description}
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Required Competencies</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {opportunity.requiredSkills.map((sk, idx) => {
                  const hasSkill = student.skills.some(s => s.name.toLowerCase() === sk.toLowerCase());
                  return (
                    <span
                      key={idx}
                      style={{
                        background: hasSkill ? '#EFF6FF' : '#FFFBEB',
                        color: hasSkill ? '#2563EB' : '#D97706',
                        border: hasSkill ? '1px solid #BFDBFE' : '1px solid #FDE68A',
                        fontSize: '12px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {hasSkill ? '✓ Verified Match:' : '• Missing Gap:'} {sk}
                    </span>
                  );
                })}
              </div>
            </div>

            {opportunity.responsibilities && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Key Deliverables</h4>
                <ul style={{ paddingLeft: '18px', fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>
                  {opportunity.responsibilities.map((resp, idx) => (
                    <li key={idx} style={{ marginBottom: '6px' }}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748B' }}>ELIGIBILITY & CRITERIA:</div>
              <div style={{ fontSize: '13px', color: '#1E293B', fontWeight: 600, marginTop: '2px' }}>{opportunity.eligibility}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {isApplied ? (
                <div style={{
                  flex: 1,
                  background: '#F0FDF4',
                  color: '#16A34A',
                  border: '1px solid #BBF7D0',
                  padding: '12px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}>
                  <CheckCircle2 size={18} />
                  <span>Already Applied · Track in My Applications</span>
                </div>
              ) : (
                <button
                  onClick={() => setCurrentStep('step-personal')}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', padding: '12px 24px', fontSize: '14px' }}
                >
                  <Send size={16} />
                  <span>Start Application Form (Step-by-Step)</span>
                </button>
              )}

              <button
                onClick={() => onToggleSave(opportunity.id)}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  background: '#F8FAFC',
                  color: isSaved ? '#2563EB' : '#94A3B8'
                }}
                title={isSaved ? "Saved" : "Save"}
              >
                <Bookmark size={18} fill={isSaved ? "#2563EB" : "none"} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 1: Personal & Academic Details */}
        {currentStep === 'step-personal' && (
          <div style={{ padding: '24px 28px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Step 1: Candidate Personal & Academic Information
            </h3>
            <p style={{ fontSize: '12.5px', color: '#64748B', marginBottom: '20px' }}>
              Please review and confirm your academic information before recruiter submission.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: formErrors.fullName ? '1px solid #DC2626' : '1px solid #CBD5E1', fontSize: '13px' }}
                />
                {formErrors.fullName && <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '2px' }}>{formErrors.fullName}</div>}
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Student Email ID *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: formErrors.email ? '1px solid #DC2626' : '1px solid #CBD5E1', fontSize: '13px' }}
                />
                {formErrors.email && <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '2px' }}>{formErrors.email}</div>}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Contact Phone Number *
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: formErrors.phone ? '1px solid #DC2626' : '1px solid #CBD5E1', fontSize: '13px' }}
                />
                {formErrors.phone && <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '2px' }}>{formErrors.phone}</div>}
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  University Roll Number / PRN
                </label>
                <input
                  type="text"
                  value={formData.rollNumber}
                  onChange={(e) => handleInputChange('rollNumber', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                Institution / College Name *
              </label>
              <input
                type="text"
                value={formData.institution}
                onChange={(e) => handleInputChange('institution', e.target.value)}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '14px', marginBottom: '24px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Degree & Specialization *
                </label>
                <input
                  type="text"
                  value={formData.degree}
                  onChange={(e) => handleInputChange('degree', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Grad Year *
                </label>
                <select
                  value={formData.gradYear}
                  onChange={(e) => handleInputChange('gradYear', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', background: 'white' }}
                >
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Current CGPA *
                </label>
                <input
                  type="text"
                  value={formData.cgpa}
                  onChange={(e) => handleInputChange('cgpa', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: formErrors.cgpa ? '1px solid #DC2626' : '1px solid #CBD5E1', fontSize: '13px' }}
                />
                {formErrors.cgpa && <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '2px' }}>{formErrors.cgpa}</div>}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                type="button"
                onClick={() => setCurrentStep('overview')}
                style={{ padding: '10px 18px', borderRadius: '10px', border: '1px solid #E2E8F0', fontWeight: 700, fontSize: '13px', color: '#64748B' }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => nextStep('step-skills')}
                className="btn-primary"
                style={{ padding: '10px 22px', fontSize: '13px' }}
              >
                <span>Continue to Skills & Projects</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Skills & Project Repos */}
        {currentStep === 'step-skills' && (
          <div style={{ padding: '24px 28px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Step 2: Technical Competencies & Code Evidence
            </h3>
            <p style={{ fontSize: '12.5px', color: '#64748B', marginBottom: '18px' }}>
              Select your proven competencies and provide live repository evidence.
            </p>

            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '8px' }}>
                Select Applicable Competencies for this Role:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {student.skills.map((s) => {
                  const isSelected = formData.selectedSkills.includes(s.name);
                  return (
                    <div
                      key={s.id}
                      onClick={() => handleToggleSkill(s.name)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        border: isSelected ? '1.5px solid #2563EB' : '1px solid #CBD5E1',
                        background: isSelected ? '#EFF6FF' : '#FFFFFF',
                        color: isSelected ? '#2563EB' : '#475569',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <div style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '4px',
                        background: isSelected ? '#2563EB' : 'transparent',
                        border: isSelected ? 'none' : '1px solid #94A3B8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '10px'
                      }}>
                        {isSelected && '✓'}
                      </div>
                      <span>{s.name} ({s.score}%)</span>
                    </div>
                  );
                })}
              </div>
              {formErrors.selectedSkills && <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '4px' }}>{formErrors.selectedSkills}</div>}
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                Primary GitHub Repository Proof *
              </label>
              <input
                type="text"
                value={formData.githubUrl}
                onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: formErrors.githubUrl ? '1px solid #DC2626' : '1px solid #CBD5E1', fontSize: '13px' }}
              />
              {formErrors.githubUrl && <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '2px' }}>{formErrors.githubUrl}</div>}
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                Key Technical Contribution Summary
              </label>
              <textarea
                rows={2}
                value={formData.projectSummary}
                onChange={(e) => handleInputChange('projectSummary', e.target.value)}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  value={formData.linkedinUrl}
                  onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Prior Experience / Research
                </label>
                <input
                  type="text"
                  value={formData.priorExperienceMonths}
                  onChange={(e) => handleInputChange('priorExperienceMonths', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                type="button"
                onClick={() => setCurrentStep('step-personal')}
                style={{ padding: '10px 18px', borderRadius: '10px', border: '1px solid #E2E8F0', fontWeight: 700, fontSize: '13px', color: '#64748B' }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => nextStep('step-docs')}
                className="btn-primary"
                style={{ padding: '10px 22px', fontSize: '13px' }}
              >
                <span>Continue to Document Attachments</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Document Attachments */}
        {currentStep === 'step-docs' && (
          <div style={{ padding: '24px 28px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Step 3: Verified Resume & Academic Transcripts
            </h3>
            <p style={{ fontSize: '12.5px', color: '#64748B', marginBottom: '18px' }}>
              Attach your verified credentials and institutional records.
            </p>

            {/* Resume Upload Box */}
            <div style={{
              border: '2px dashed #BFDBFE',
              background: '#F8FAFC',
              borderRadius: '14px',
              padding: '18px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#0F172A' }}>{formData.resumeFileName}</div>
                  <div style={{ fontSize: '11.5px', color: '#16A34A', fontWeight: 700 }}>✓ Verified by Anna University Portal ({formData.resumeSize})</div>
                </div>
              </div>

              <label style={{
                background: '#FFFFFF',
                border: '1px solid #CBD5E1',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#2563EB',
                cursor: 'pointer'
              }}>
                Replace PDF
                <input
                  type="file"
                  accept=".pdf"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleInputChange('resumeFileName', e.target.files[0].name);
                      handleInputChange('resumeSize', `${(e.target.files[0].size / (1024 * 1024)).toFixed(1)} MB · Uploaded`);
                    }
                  }}
                />
              </label>
            </div>

            {/* Academic Transcript Box */}
            <div style={{
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              borderRadius: '14px',
              padding: '16px',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <GraduationCap size={20} color="#64748B" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>{formData.transcriptFileName}</div>
                  <div style={{ fontSize: '11.5px', color: '#64748B' }}>Official Grade Sheet · CGPA 8.84</div>
                </div>
              </div>
              <span style={{ fontSize: '11.5px', color: '#16A34A', fontWeight: 700, background: '#F0FDF4', padding: '3px 8px', borderRadius: '9999px' }}>
                Attached
              </span>
            </div>

            {/* Blockchain Credential Checkbox */}
            <div
              onClick={() => handleInputChange('includeBlockchainBadge', !formData.includeBlockchainBadge)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px',
                borderRadius: '12px',
                background: formData.includeBlockchainBadge ? '#EFF6FF' : '#F8FAFC',
                border: formData.includeBlockchainBadge ? '1px solid #BFDBFE' : '1px solid #E2E8F0',
                cursor: 'pointer',
                marginBottom: '24px'
              }}
            >
              <div style={{
                width: '18px',
                height: '18px',
                borderRadius: '4px',
                background: formData.includeBlockchainBadge ? '#2563EB' : 'transparent',
                border: formData.includeBlockchainBadge ? 'none' : '1px solid #94A3B8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '11px'
              }}>
                {formData.includeBlockchainBadge && '✓'}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>Include Cryptographic Skill Badge (#SO-GCP-88491)</div>
                <div style={{ fontSize: '11.5px', color: '#64748B' }}>Allows {opportunity.company} recruiters to verify practical test scores on-chain without extra assessments.</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                type="button"
                onClick={() => setCurrentStep('step-skills')}
                style={{ padding: '10px 18px', borderRadius: '10px', border: '1px solid #E2E8F0', fontWeight: 700, fontSize: '13px', color: '#64748B' }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => nextStep('step-questions')}
                className="btn-primary"
                style={{ padding: '10px 22px', fontSize: '13px' }}
              >
                <span>Continue to Questions & Review</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Questions, Availability & Review */}
        {currentStep === 'step-questions' && (
          <div style={{ padding: '24px 28px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Step 4: Availability & Statement to {opportunity.company}
            </h3>
            <p style={{ fontSize: '12.5px', color: '#64748B', marginBottom: '18px' }}>
              Final step before real-time dispatch to the hiring portal.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Earliest Available Joining Date *
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: formErrors.startDate ? '1px solid #DC2626' : '1px solid #CBD5E1', fontSize: '13px' }}
                />
                {formErrors.startDate && <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '2px' }}>{formErrors.startDate}</div>}
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                  Work Mode Preference
                </label>
                <select
                  value={formData.preferredWorkMode}
                  onChange={(e) => handleInputChange('preferredWorkMode', e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '13px', background: 'white' }}
                >
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="On-site">On-site</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '4px' }}>
                Why are you interested in joining {opportunity.company} for this {opportunity.title} role? *
              </label>
              <textarea
                rows={3}
                value={formData.statementOfInterest}
                onChange={(e) => handleInputChange('statementOfInterest', e.target.value)}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: formErrors.statementOfInterest ? '1px solid #DC2626' : '1px solid #CBD5E1', fontSize: '13px', resize: 'vertical' }}
              />
              {formErrors.statementOfInterest && <div style={{ fontSize: '11px', color: '#DC2626', marginTop: '2px' }}>{formErrors.statementOfInterest}</div>}
            </div>

            {/* Terms Declaration */}
            <div
              onClick={() => handleInputChange('acceptedTerms', !formData.acceptedTerms)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '10px',
                background: '#F8FAFC',
                border: formErrors.acceptedTerms ? '1px solid #DC2626' : '1px solid #E2E8F0',
                cursor: 'pointer',
                marginBottom: '24px'
              }}
            >
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '4px',
                background: formData.acceptedTerms ? '#2563EB' : 'transparent',
                border: formData.acceptedTerms ? 'none' : '1px solid #94A3B8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '10px',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                {formData.acceptedTerms && '✓'}
              </div>
              <div style={{ fontSize: '12px', color: '#334155', lineHeight: 1.4 }}>
                I hereby declare that all academic scores, GitHub project links, and skill assessments submitted are authentic and backed by institutional verification.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setCurrentStep('step-docs')}
                style={{ padding: '10px 18px', borderRadius: '10px', border: '1px solid #E2E8F0', fontWeight: 700, fontSize: '13px', color: '#64748B' }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleFinalSubmit}
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center', padding: '11px 24px', fontSize: '14px' }}
              >
                <Send size={16} />
                <span>Submit Final Application</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: Submitting Real-Time Animation */}
        {currentStep === 'submitting' && (
          <div style={{ padding: '54px 28px', textAlign: 'center' }}>
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '9999px',
              background: '#EFF6FF',
              color: '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 4px 14px rgba(37,99,235,0.25)'
            }}>
              <Loader2 size={36} className="animate-spin" style={{ animation: 'spin 1.2s linear infinite' }} />
            </div>

            <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Processing Application Dossier...
            </h3>
            <p style={{ fontSize: '13.5px', color: '#2563EB', fontWeight: 700, marginBottom: '28px' }}>
              {submissionStatusText}
            </p>

            <div style={{ width: '80%', height: '8px', background: '#F1F5F9', borderRadius: '9999px', margin: '0 auto', overflow: 'hidden' }}>
              <div style={{
                width: `${submissionProgress}%`,
                height: '100%',
                background: '#2563EB',
                borderRadius: '9999px',
                transition: 'width 0.4s ease'
              }}></div>
            </div>
          </div>
        )}

        {/* STEP 6: Success & Real-Time Receipt */}
        {currentStep === 'success' && (
          <div style={{ padding: '36px 28px', textAlign: 'center' }}>
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '9999px',
              background: '#F0FDF4',
              color: '#16A34A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px',
              boxShadow: '0 4px 14px rgba(22,163,74,0.25)'
            }}>
              <Check size={36} />
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
              Application Successfully Submitted! 🎉
            </h3>
            <p style={{ fontSize: '13.5px', color: '#64748B', maxWidth: '480px', margin: '0 auto 20px', lineHeight: 1.4 }}>
              Your end-to-end dossier for <strong>{opportunity.title}</strong> at <strong>{opportunity.company}</strong> has been received by the University Relations ATS.
            </p>

            {/* Dossier Summary Card */}
            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '14px',
              padding: '16px 20px',
              maxWidth: '520px',
              margin: '0 auto 24px',
              fontSize: '12.5px',
              color: '#334155',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px' }}>
                <span>Application Reference ID:</span>
                <strong style={{ color: '#2563EB' }}>{generatedAppId || `#APP-${opportunity.id.toUpperCase()}-2026`}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span>Applicant:</span>
                <strong>{formData.fullName} ({formData.degree.split(' ')[0]} - CGPA {formData.cgpa})</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span>Attached Resume:</span>
                <strong>{formData.resumeFileName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span>Assigned Recruiter:</span>
                <strong>Priya Sharma (Lead Talent Acquisition)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#16A34A', fontWeight: 700 }}>
                <span>Live Pipeline Stage:</span>
                <span>Stage 1: Profile & Skill Compatibility Screen (In Progress)</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <button
                onClick={() => alert(`Downloading official PDF Application Receipt for ${generatedAppId || 'APP-2026'}...`)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Download size={15} />
                <span>Download Receipt PDF</span>
              </button>

              <button
                onClick={onClose}
                className="btn-primary"
                style={{ padding: '10px 24px', fontSize: '13px' }}
              >
                <span>Track in My Applications</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
