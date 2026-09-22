import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  Clock, 
  HelpCircle,
  TrendingUp,
  RefreshCw,
  BookOpen,
  ShieldCheck,
  Check,
  X,
  Bookmark,
  Flag,
  RotateCcw,
  Download,
  Code,
  FileText,
  PlusCircle,
  Eye,
  AlertCircle
} from 'lucide-react';
import { initialSkillAssessments } from '../data/mockData';

export default function SkillAssessmentView({
  student,
  onUpdateReadinessScore,
  onNavigateTab,
  assessments = initialSkillAssessments,
  onAddAssessment,
  currentRole = 'student'
}) {
  const [activeQuiz, setActiveQuiz] = useState(null); // When taking a quiz
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(900); // 15 mins
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [scoreResult, setScoreResult] = useState(null);

  // Assessment Creation Modal State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newQuizTitle, setNewQuizTitle] = useState('');
  const [newQuizCategory, setNewQuizCategory] = useState('Technical (AI & Data)');
  const [newQuizDuration, setNewQuizDuration] = useState('15 mins');
  const [newQuizDescription, setNewQuizDescription] = useState('');
  const [newQuestions, setNewQuestions] = useState([
    {
      id: `q-custom-1`,
      question: 'What is the primary role of gradient descent optimization in training supervised learning models?',
      codeSnippet: '# Example optimization step:\nloss = criterion(outputs, targets)\nloss.backward()\noptimizer.step()',
      options: [
        'Iteratively update model weights in the direction that minimizes the objective loss function',
        'Convert non-linear features into linear kernel projections',
        'Compress the input dimensionality to prevent GPU memory bottlenecks',
        'Randomly shuffle batch records during epoch evaluation'
      ],
      correctIndex: 0,
      explanation: 'Gradient descent computes the gradient of the loss function with respect to model parameters and steps in the negative gradient direction to find minimum error.'
    }
  ]);

  // Start Test
  const startQuiz = (quiz) => {
    setActiveQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setMarkedForReview({});
    setTimeLeftSeconds(quiz.questions.length * 180); // 3 mins per question
    setIsTimerRunning(true);
    setQuizFinished(false);
    setScoreResult(null);
  };

  // Timer Countdown Effect
  useEffect(() => {
    let timer;
    if (isTimerRunning && timeLeftSeconds > 0 && !quizFinished) {
      timer = setInterval(() => {
        setTimeLeftSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeftSeconds, quizFinished]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (qId, optionIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const toggleMarkForReview = (qId) => {
    setMarkedForReview(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const clearCurrentResponse = (qId) => {
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
  };

  const handleSubmitQuiz = () => {
    setIsTimerRunning(false);
    let correct = 0;
    const reviewDetails = activeQuiz.questions.map((q) => {
      const userAns = selectedAnswers[q.id];
      const isCorrect = userAns === q.correctIndex;
      if (isCorrect) correct++;
      return {
        ...q,
        userAns,
        isCorrect
      };
    });

    const percent = Math.round((correct / activeQuiz.questions.length) * 100);
    const passed = percent >= 70;
    const certId = `CERT-${activeQuiz.id.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const resultObj = {
      correct,
      total: activeQuiz.questions.length,
      percent,
      passed,
      certId,
      reviewDetails
    };

    setScoreResult(resultObj);
    setQuizFinished(true);

    if (passed) {
      onUpdateReadinessScore(Math.min(98, student.overallReadiness + 6));
    }
  };

  // Assessment Creation Handlers
  const handleAddQuestionField = () => {
    setNewQuestions(prev => [
      ...prev,
      {
        id: `q-custom-${prev.length + 1}`,
        question: '',
        codeSnippet: '',
        options: ['', '', '', ''],
        correctIndex: 0,
        explanation: ''
      }
    ]);
  };

  const handlePublishAssessment = (e) => {
    e.preventDefault();
    if (!newQuizTitle) return;

    const createdAssessment = {
      id: `quiz-${Date.now()}`,
      title: newQuizTitle,
      category: newQuizCategory,
      duration: newQuizDuration,
      questionsCount: newQuestions.length,
      description: newQuizDescription || `Official benchmark created by ${currentRole === 'industry' ? 'Google / Industry Hiring Partner' : 'Dept. of AI & CSE, Anna University'}.`,
      createdBy: currentRole === 'industry' ? 'Priya Sharma (Industry Recruiter @ Google)' : 'Dr. Rajesh Raman (Faculty & HOD)',
      questions: newQuestions
    };

    if (onAddAssessment) {
      onAddAssessment(createdAssessment);
    }
    setShowCreateModal(false);
    alert(`🎉 Assessment "${newQuizTitle}" published successfully! It is now live for all students to take.`);
  };

  return (
    <div className="page-container">
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2563EB', fontSize: '13px', fontWeight: 800, marginBottom: '4px' }}>
            <Award size={16} />
            <span>STANDARDIZED INDUSTRY BENCHMARK ENGINE</span>
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
            Industry Skill Assessments & Proctored Certifications
          </h1>
          <p style={{ fontSize: '13.5px', color: '#64748B', fontWeight: 500 }}>
            Curated by leading tech enterprises (Google, Microsoft, TCS) and academic faculties to validate real competency.
          </p>
        </div>

        {/* Creator Trigger restricted strictly to Recruiters and Faculty */}
        {currentRole === 'industry' || currentRole === 'academician' ? (
          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: '13px' }}
          >
            <PlusCircle size={16} />
            <span>Create New Assessment</span>
          </button>
        ) : (
          <div style={{
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            color: '#16A34A',
            padding: '8px 16px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <ShieldCheck size={16} />
            <span>Proctored Student Testing Center</span>
          </div>
        )}
      </div>

      {/* FULL-SCREEN REAL-TIME PROCTORED TEST MODE */}
      {activeQuiz ? (
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '20px',
          boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.1)',
          overflow: 'hidden'
        }}>
          {!quizFinished ? (
            <div>
              {/* Proctored Exam Header Bar */}
              <div style={{
                background: '#0F172A',
                color: 'white',
                padding: '16px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', background: '#2563EB', padding: '2px 8px', borderRadius: '9999px', fontWeight: 800 }}>
                      PROCTORED EXAM
                    </span>
                    <h2 style={{ fontSize: '16px', fontWeight: 800 }}>{activeQuiz.title}</h2>
                  </div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>
                    Candidate: <strong>{student.name}</strong> ({student.rollNumber}) · Camera & Tab Monitoring: <strong style={{ color: '#4ADE80' }}>ACTIVE</strong>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: timeLeftSeconds < 120 ? '#7F1D1D' : '#1E293B',
                  border: timeLeftSeconds < 120 ? '1px solid #EF4444' : '1px solid #334155',
                  padding: '8px 16px',
                  borderRadius: '12px'
                }}>
                  <Clock size={16} color={timeLeftSeconds < 120 ? '#F87171' : '#60A5FA'} />
                  <div>
                    <div style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Time Remaining</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'monospace', color: timeLeftSeconds < 120 ? '#FCA5A5' : 'white' }}>
                      {formatTime(timeLeftSeconds)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Exam Layout: Left Question Area + Right Question Palette */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', minHeight: '480px' }}>
                {/* Question Area */}
                <div style={{ padding: '32px', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {(() => {
                    const q = activeQuiz.questions[currentQuestionIndex];
                    const selectedOpt = selectedAnswers[q.id];
                    const isMarked = markedForReview[q.id];

                    return (
                      <div>
                        {/* Question Meta Row */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                          <span style={{ fontSize: '13px', fontWeight: 800, color: '#2563EB', background: '#EFF6FF', padding: '4px 12px', borderRadius: '9999px' }}>
                            Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}
                          </span>

                          <button
                            onClick={() => toggleMarkForReview(q.id)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '6px 12px',
                              borderRadius: '8px',
                              background: isMarked ? '#FEF3C7' : '#F8FAFC',
                              border: isMarked ? '1px solid #FDE68A' : '1px solid #E2E8F0',
                              color: isMarked ? '#B45309' : '#64748B',
                              fontSize: '12px',
                              fontWeight: 700
                            }}
                          >
                            <Flag size={14} fill={isMarked ? "#B45309" : "none"} />
                            <span>{isMarked ? 'Marked for Review' : 'Mark for Review'}</span>
                          </button>
                        </div>

                        {/* Question Text */}
                        <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: '#0F172A', lineHeight: 1.4, marginBottom: '16px' }}>
                          {q.question}
                        </h3>

                        {/* Optional Code Snippet Block */}
                        {q.codeSnippet && (
                          <div style={{
                            background: '#0F172A',
                            color: '#E2E8F0',
                            borderRadius: '10px',
                            padding: '14px 18px',
                            fontFamily: 'monospace',
                            fontSize: '13px',
                            marginBottom: '20px',
                            whiteSpace: 'pre-wrap',
                            border: '1px solid #334155'
                          }}>
                            {q.codeSnippet}
                          </div>
                        )}

                        {/* Options List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                          {q.options.map((opt, idx) => {
                            const isSelected = selectedOpt === idx;
                            return (
                              <div
                                key={idx}
                                onClick={() => handleSelectOption(q.id, idx)}
                                style={{
                                  padding: '14px 18px',
                                  borderRadius: '12px',
                                  border: isSelected ? '2px solid #2563EB' : '1px solid #E2E8F0',
                                  background: isSelected ? '#EFF6FF' : '#F8FAFC',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '14px',
                                  transition: 'all 0.15s ease'
                                }}
                              >
                                <div style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '9999px',
                                  border: isSelected ? '7px solid #2563EB' : '2px solid #CBD5E1',
                                  background: 'white',
                                  flexShrink: 0
                                }}></div>
                                <span style={{ fontSize: '14px', fontWeight: isSelected ? 700 : 500, color: isSelected ? '#1E40AF' : '#334155', lineHeight: 1.4 }}>
                                  {opt}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Navigation & Action Footer */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        disabled={currentQuestionIndex === 0}
                        onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                        style={{
                          padding: '10px 18px',
                          borderRadius: '10px',
                          border: '1px solid #E2E8F0',
                          fontSize: '13px',
                          fontWeight: 700,
                          color: currentQuestionIndex === 0 ? '#CBD5E1' : '#64748B',
                          cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer'
                        }}
                      >
                        Previous
                      </button>

                      <button
                        onClick={() => clearCurrentResponse(activeQuiz.questions[currentQuestionIndex].id)}
                        style={{
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: '1px solid #E2E8F0',
                          fontSize: '12.5px',
                          fontWeight: 600,
                          color: '#64748B'
                        }}
                      >
                        Clear Response
                      </button>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      {currentQuestionIndex < activeQuiz.questions.length - 1 ? (
                        <button
                          onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                          style={{
                            background: '#2563EB',
                            color: 'white',
                            padding: '10px 22px',
                            borderRadius: '10px',
                            fontSize: '13px',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <span>Next Question</span>
                          <ArrowRight size={14} />
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmitQuiz}
                          style={{
                            background: '#16A34A',
                            color: 'white',
                            padding: '10px 24px',
                            borderRadius: '10px',
                            fontSize: '13.5px',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            boxShadow: '0 4px 12px rgba(22,163,74,0.3)'
                          }}
                        >
                          <CheckCircle2 size={16} />
                          <span>Submit & Finalize Exam</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Question Palette Grid */}
                <div style={{ padding: '24px', background: '#F8FAFC', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Question Palette ({activeQuiz.questions.length})
                    </h4>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '24px' }}>
                      {activeQuiz.questions.map((q, idx) => {
                        const isAnswered = selectedAnswers[q.id] !== undefined;
                        const isMarked = markedForReview[q.id];
                        const isCurrent = currentQuestionIndex === idx;

                        let bg = '#FFFFFF';
                        let border = '#CBD5E1';
                        let textColor = '#475569';

                        if (isCurrent) {
                          border = '2px solid #2563EB';
                          bg = '#EFF6FF';
                          textColor = '#2563EB';
                        } else if (isMarked) {
                          bg = '#FEF3C7';
                          border = '1px solid #F59E0B';
                          textColor = '#B45309';
                        } else if (isAnswered) {
                          bg = '#2563EB';
                          border = '1px solid #1D4ED8';
                          textColor = 'white';
                        }

                        return (
                          <button
                            key={q.id}
                            onClick={() => setCurrentQuestionIndex(idx)}
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '10px',
                              background: bg,
                              border: border,
                              color: textColor,
                              fontSize: '13px',
                              fontWeight: 800,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>

                    {/* Legend */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11.5px', color: '#64748B' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', background: '#2563EB', borderRadius: '3px' }}></div>
                        <span>Answered ({Object.keys(selectedAnswers).length})</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', background: '#FEF3C7', border: '1px solid #F59E0B', borderRadius: '3px' }}></div>
                        <span>Marked for Review ({Object.keys(markedForReview).filter(k => markedForReview[k]).length})</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '3px' }}></div>
                        <span>Unanswered ({activeQuiz.questions.length - Object.keys(selectedAnswers).length})</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to end and submit your assessment now?')) {
                        handleSubmitQuiz();
                      }
                    }}
                    style={{
                      background: '#FFFFFF',
                      border: '1.5px solid #DC2626',
                      color: '#DC2626',
                      padding: '10px',
                      borderRadius: '10px',
                      fontSize: '13px',
                      fontWeight: 800,
                      marginTop: '20px'
                    }}
                  >
                    Finish Test Now
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* COMPREHENSIVE PERFORMANCE & CERTIFICATE REPORT */
            <div style={{ padding: '36px 32px' }}>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '9999px',
                  background: scoreResult.passed ? '#F0FDF4' : '#FEF2F2',
                  color: scoreResult.passed ? '#16A34A' : '#DC2626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: scoreResult.passed ? '0 4px 16px rgba(22,163,74,0.25)' : 'none'
                }}>
                  <Award size={36} />
                </div>

                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                  {scoreResult.passed ? 'Skill Assessment Passed & Verified! 🎉' : 'Assessment Completed'}
                </h2>
                <p style={{ fontSize: '14px', color: '#64748B' }}>
                  You scored <strong>{scoreResult.percent}%</strong> ({scoreResult.correct} of {scoreResult.total} questions answered correctly).
                </p>
              </div>

              {/* Official Credential Certificate Card (If Passed) */}
              {scoreResult.passed && (
                <div style={{
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  color: 'white',
                  marginBottom: '28px',
                  boxShadow: '0 10px 25px -5px rgba(37,99,235,0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ShieldCheck size={20} color="#93C5FD" />
                      <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
                        Verified Competency Certificate
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', fontFamily: 'monospace', background: 'rgba(255,255,255,0.2)', padding: '3px 8px', borderRadius: '6px' }}>
                      {scoreResult.certId}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '4px' }}>
                    {activeQuiz.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#DBEAFE', marginBottom: '16px' }}>
                    Issued to <strong>{student.name}</strong> · Stamped on Skill Orbit Cryptographic Registry
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '12px' }}>
                    <span style={{ fontSize: '12px', color: '#BFDBFE' }}>
                      ✨ Profile Match Score Boosted to <strong>{student.overallReadiness}%</strong>
                    </span>
                    <button
                      onClick={() => alert(`Downloading Official Verified Certificate PDF for ${scoreResult.certId}...`)}
                      style={{
                        background: 'white',
                        color: '#1E40AF',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Download size={13} />
                      <span>Download Certificate PDF</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Question-by-Question Deep Technical Explanations */}
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                  Detailed Question Analysis & Explanations
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {scoreResult.reviewDetails.map((q, idx) => (
                    <div
                      key={q.id}
                      style={{
                        border: q.isCorrect ? '1px solid #BBF7D0' : '1px solid #FECACA',
                        background: q.isCorrect ? '#F0FDF4' : '#FEF2F2',
                        borderRadius: '12px',
                        padding: '16px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '9999px',
                            background: q.isCorrect ? '#16A34A' : '#DC2626',
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: 800,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {q.isCorrect ? '✓' : '✕'}
                          </div>
                          <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                            Q{idx + 1}: {q.question}
                          </h4>
                        </div>
                      </div>

                      <div style={{ fontSize: '12.5px', color: '#334155', marginBottom: '6px' }}>
                        <strong>Your Answer:</strong> {q.userAns !== undefined ? q.options[q.userAns] : 'Not Answered'} {q.isCorrect ? '✅' : '❌'}
                      </div>
                      {!q.isCorrect && (
                        <div style={{ fontSize: '12.5px', color: '#166534', marginBottom: '8px' }}>
                          <strong>Correct Answer:</strong> {q.options[q.correctIndex]}
                        </div>
                      )}

                      <div style={{ background: '#FFFFFF', padding: '10px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '12px', color: '#475569' }}>
                        💡 <strong>Technical Rationale:</strong> {q.explanation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                <button
                  className="btn-primary"
                  onClick={() => setActiveQuiz(null)}
                >
                  Return to Skill Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* STANDARD ASSESSMENT HUB */
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px' }}>
          {/* Left Column: Available Assessments & Gap Analysis */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="app-card">
              <div className="card-header">
                <div>
                  <h2 className="card-title">Available Verified Skill Benchmarks</h2>
                  <p style={{ fontSize: '12.5px', color: '#64748B' }}>Timed proctored tests designed to certify your readiness for top placements.</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {assessments.map((quiz) => (
                  <div
                    key={quiz.id}
                    style={{
                      border: '1px solid #E2E8F0',
                      borderRadius: '16px',
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#F8FAFC',
                      flexWrap: 'wrap',
                      gap: '14px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#2563EB', background: '#EFF6FF', padding: '2px 8px', borderRadius: '9999px' }}>
                          {quiz.category}
                        </span>
                        <span style={{ fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} /> {quiz.duration} · {quiz.questionsCount || quiz.questions?.length} Questions
                        </span>
                      </div>
                      <h3 style={{ fontSize: '15.5px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                        {quiz.title}
                      </h3>
                      <p style={{ fontSize: '12.5px', color: '#475569', marginBottom: '4px' }}>
                        {quiz.description}
                      </p>
                      {quiz.createdBy && (
                        <div style={{ fontSize: '11px', color: '#2563EB', fontWeight: 700 }}>
                          🏢 Created By: {quiz.createdBy}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => startQuiz(quiz)}
                      className="btn-primary"
                      style={{ padding: '9px 18px', fontSize: '13px' }}
                    >
                      <span>Take Proctored Test</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Identified Industry Skill Gaps */}
            <div className="app-card">
              <div className="card-header">
                <h2 className="card-title">Identified Skill Gaps & Automated Action Plans</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {student.skillGaps.map((gap) => (
                  <div
                    key={gap.id}
                    style={{
                      border: '1px solid #FDE68A',
                      background: '#FFFBEB',
                      borderRadius: '14px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <AlertTriangle size={16} color="#D97706" />
                        <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#92400E' }}>
                          {gap.skill}
                        </h4>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#2563EB', background: '#EFF6FF', padding: '2px 8px', borderRadius: '9999px' }}>
                        {gap.matchImpact}
                      </span>
                    </div>

                    <p style={{ fontSize: '12.5px', color: '#78350F' }}>
                      {gap.whyItMatters}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#FFFFFF',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #FEF3C7',
                      marginTop: '4px'
                    }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#1E293B' }}>
                        💡 {gap.recommendedAction}
                      </span>
                      <button
                        onClick={() => onNavigateTab('learning-path')}
                        style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', whiteSpace: 'nowrap' }}
                      >
                        Enroll &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Competencies Matrix */}
          <div className="app-card">
            <div className="card-header">
              <h2 className="card-title">Verified Competency Matrix</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {student.skills.map((s) => (
                <div key={s.id} style={{ padding: '8px 0', borderBottom: '1px solid #F1F5F9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>{s.name}</span>
                      {s.verified && <CheckCircle2 size={13} color="#16A34A" />}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: s.score >= 80 ? '#2563EB' : '#D97706' }}>
                      {s.score}%
                    </span>
                  </div>

                  <div style={{ width: '100%', height: '6px', background: '#F1F5F9', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${s.score}%`,
                      height: '100%',
                      background: s.score >= 80 ? '#2563EB' : s.score >= 60 ? '#60A5FA' : '#F59E0B',
                      borderRadius: '9999px'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ASSESSMENT CREATION MODAL (FOR RECRUITERS & FACULTY) */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-card" style={{ maxWidth: '720px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>
                  Author & Publish Industry Skill Assessment
                </h3>
                <p style={{ fontSize: '12px', color: '#64748B' }}>
                  Created as: <strong>{currentRole === 'industry' ? 'Industry Recruiter' : currentRole === 'academician' ? 'Faculty Member' : 'System Author'}</strong>
                </p>
              </div>
              <button onClick={() => setShowCreateModal(false)} style={{ color: '#94A3B8' }}><X size={18} /></button>
            </div>

            <form onSubmit={handlePublishAssessment} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Assessment Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Distributed Systems & Docker Deployment Benchmark"
                    value={newQuizTitle}
                    onChange={(e) => setNewQuizTitle(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Domain Category</label>
                  <select
                    value={newQuizCategory}
                    onChange={(e) => setNewQuizCategory(e.target.value)}
                    style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px', background: 'white' }}
                  >
                    <option value="AI & Data">AI & Data</option>
                    <option value="Web & Cloud">Web & Cloud</option>
                    <option value="System Design">System Design</option>
                    <option value="Soft Skills">Soft Skills & Aptitude</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569' }}>Description</label>
                <textarea
                  rows={2}
                  placeholder="Target competencies tested in this assessment..."
                  value={newQuizDescription}
                  onChange={(e) => setNewQuizDescription(e.target.value)}
                  style={{ width: '100%', padding: '9px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '4px' }}
                />
              </div>

              {/* Questions Builder */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '12.5px', fontWeight: 800, color: '#0F172A' }}>
                    Exam Questions ({newQuestions.length})
                  </label>
                  <button
                    type="button"
                    onClick={handleAddQuestionField}
                    style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <PlusCircle size={13} />
                    <span>Add Another Question</span>
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '280px', overflowY: 'auto', paddingRight: '4px' }}>
                  {newQuestions.map((q, qIdx) => (
                    <div key={q.id} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '14px', borderRadius: '10px' }}>
                      <div style={{ fontWeight: 800, fontSize: '12px', color: '#2563EB', marginBottom: '4px' }}>
                        Question {qIdx + 1} Statement:
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Enter the scenario question or problem statement..."
                        value={q.question}
                        onChange={(e) => {
                          const copy = [...newQuestions];
                          copy[qIdx].question = e.target.value;
                          setNewQuestions(copy);
                        }}
                        style={{ width: '100%', padding: '8px 10px', borderRadius: '6px', border: '1px solid #CBD5E1', marginBottom: '8px' }}
                      />

                      <div style={{ fontWeight: 700, fontSize: '11.5px', color: '#475569', marginBottom: '4px' }}>
                        Answer Choices (Select the Radio for Correct Choice):
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                        {q.options.map((opt, oIdx) => (
                          <div key={oIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <input
                              type="radio"
                              name={`correct-${q.id}`}
                              checked={q.correctIndex === oIdx}
                              onChange={() => {
                                const copy = [...newQuestions];
                                copy[qIdx].correctIndex = oIdx;
                                setNewQuestions(copy);
                              }}
                            />
                            <input
                              type="text"
                              required
                              placeholder={`Option ${oIdx + 1}`}
                              value={opt}
                              onChange={(e) => {
                                const copy = [...newQuestions];
                                copy[qIdx].options[oIdx] = e.target.value;
                                setNewQuestions(copy);
                              }}
                              style={{ width: '100%', padding: '6px 8px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '12px' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '12px', borderTop: '1px solid #E2E8F0' }}>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  style={{ padding: '10px 18px', borderRadius: '8px', border: '1px solid #CBD5E1', fontWeight: 700, fontSize: '13px' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Publish to Student Assessment Network
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
