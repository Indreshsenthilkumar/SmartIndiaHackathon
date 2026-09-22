import React, { useState, useEffect } from 'react';
import {
  Brain,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Database,
  Server,
  Layers,
  Search,
  Code,
  Compass,
  TrendingUp,
  Share2,
  RefreshCw,
  FileText
} from 'lucide-react';
import { aiApiService } from '../services/apiService';

// Default Taxonomy Tree Definition
const DEFAULT_TAXONOMY = {
  "AI & Machine Learning": {
    "Deep Learning": ["PyTorch", "TensorFlow", "Neural Networks", "CNNs", "RNNs", "Backpropagation", "Loss Functions"],
    "NLP & Generative AI": ["LLMs", "Transformers", "spaCy", "Hugging Face", "BERT", "GPT", "RAG", "Prompt Engineering", "Vector DBs", "LangChain"],
    "Computer Vision": ["OpenCV", "YOLOv8", "Object Detection", "Image Segmentation", "3D Vision", "Vision Transformers"],
    "MLOps & Deployment": ["Model Optimization", "ONNX", "FastAPI", "Docker", "Edge AI", "TensorRT", "MLflow"]
  },
  "Data Science & Analytics": {
    "Data Engineering": ["SQL", "PostgreSQL", "Data Pipelines", "ETL", "Spark", "Pandas", "NumPy"],
    "Analytics & BI": ["Data Analytics", "Power BI", "Tableau", "Statistical Modeling", "A/B Testing", "Feature Engineering"]
  },
  "Web & Cloud Systems": {
    "Frontend Architecture": ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Next.js", "State Management"],
    "Backend & Microservices": ["Node.js", "Python", "REST APIs", "GraphQL", "Express.js", "Microservices", "System Design"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Linux", "Serverless"]
  },
  "Core Engineering & IoT": {
    "Embedded Systems": ["IoT & Sensors", "Edge Computing", "ROS", "Robotics", "C++", "Microcontrollers", "Industrial Automation"]
  },
  "Soft Skills & Collaborative Aptitude": {
    "Professional Competencies": ["Critical Problem Solving", "Industry Communication", "Cross-functional Teamwork", "Agile & Scrum", "Root Cause Analysis"]
  }
};

const PRESETS = [
  {
    id: 'angel-ai',
    name: 'Angel K (AI/ML & Vision)',
    skills: ['Python', 'Machine Learning', 'Data Analytics', 'SQL', 'React.js', 'PyTorch', 'OpenCV'],
    projects: 'Built end-to-end Computer Vision YOLOv8 crack detection pipeline with PyTorch and integrated FastAPI inference with React.js dashboard.',
    targetJob: 'Google - AI / ML Research Intern',
    targetCompany: 'Google',
    targetSkills: ['Python', 'Machine Learning', 'LLMs', 'PyTorch', 'Transformers']
  },
  {
    id: 'cloud-fullstack',
    name: 'Full Stack Cloud Engineer',
    skills: ['React.js', 'Node.js', 'JavaScript', 'TypeScript', 'REST APIs', 'PostgreSQL', 'Docker'],
    projects: 'Architected microservices with Node.js Express, Supabase PostgreSQL, and automated CI/CD pipeline on AWS Docker clusters.',
    targetJob: 'Microsoft - Cloud Solutions & Azure Associate',
    targetCompany: 'Microsoft',
    targetSkills: ['Cloud & DevOps', 'Node.js', 'React.js', 'Docker', 'Kubernetes']
  },
  {
    id: 'iot-robotics',
    name: 'Embedded IoT & Robotics',
    skills: ['C++', 'Python', 'IoT & Sensors', 'Edge Computing', 'ROS', 'Robotics'],
    projects: 'Programmed autonomous AMR navigation with ROS 2 and ESP32 IoT sensor telemetry transmission using MQTT.',
    targetJob: 'TCS - Industrial IoT & Embedded Engineer',
    targetCompany: 'Tata Consultancy Services',
    targetSkills: ['IoT & Sensors', 'C++', 'Edge Computing', 'Python', 'Industrial Automation']
  }
];

export default function AiSkillMappingView({ student }) {
  const [activeTab, setActiveTab] = useState('engine'); // 'engine', 'taxonomy', 'architecture'
  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
  const [studentText, setStudentText] = useState(PRESETS[0].projects);
  const [studentSkills, setStudentSkills] = useState(PRESETS[0].skills);
  const [targetSkills, setTargetSkills] = useState(PRESETS[0].targetSkills);
  const [jobTitle, setJobTitle] = useState(PRESETS[0].targetJob);

  const [isLoading, setIsLoading] = useState(false);
  const [taxonomyData, setTaxonomyData] = useState(DEFAULT_TAXONOMY);
  const [activeDomain, setActiveDomain] = useState('AI & Machine Learning');
  const [taxonomyFilter, setTaxonomyFilter] = useState('');

  const [matchResult, setMatchResult] = useState({
    matchScore: 84,
    cosineSimilarity: 0.824,
    matchedSkills: ['Python', 'Machine Learning', 'PyTorch'],
    missingGaps: ['LLMs', 'Transformers'],
    gapRecommendations: [
      {
        skill: 'LLMs & Transformers',
        urgency: 'High',
        recommendedModule: 'Complete 2-week Industry Sprint in Hugging Face Transformers',
        matchGain: '+9% Match Score'
      },
      {
        skill: 'Docker Containerization',
        urgency: 'Medium',
        recommendedModule: 'Hands-on Microservices Deployment Lab',
        matchGain: '+5% Match Score'
      }
    ],
    nlpEngine: 'Python spaCy + scikit-learn (TF-IDF & Cosine Similarity)',
    taxonomyMapping: {
      'AI & Machine Learning': {
        'Deep Learning': ['PyTorch'],
        'NLP & Generative AI': ['Python', 'Machine Learning']
      }
    }
  });

  // Handle Preset Switching
  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setStudentText(preset.projects);
    setStudentSkills(preset.skills);
    setTargetSkills(preset.targetSkills);
    setJobTitle(preset.targetJob);
  };

  // Run Real AI Engine Calculation
  const handleRunAiMatch = async () => {
    setIsLoading(true);
    try {
      const result = await aiApiService.runSkillMatch({
        studentSkills: studentSkills,
        studentProjectsText: studentText,
        jobDescription: `${jobTitle} requires strong mastery in ${targetSkills.join(', ')}.`,
        requiredSkills: targetSkills
      });

      setMatchResult(result);
    } catch (err) {
      console.error('Error computing AI skill match:', err);
    } finally {
      setTimeout(() => setIsLoading(false), 400);
    }
  };

  return (
    <div className="content-container" style={{ paddingBottom: '60px' }}>
      {/* Top Banner: Tech Stack Overview */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)',
        borderRadius: '16px',
        padding: '24px 28px',
        color: '#ffffff',
        marginBottom: '28px',
        boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Brain size={14} /> AI & NLP Competency Architecture
            </span>
            <span style={{
              background: '#10b981',
              color: '#ffffff',
              padding: '3px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '700'
            }}>
              Active v2.4
            </span>
          </div>

          <h1 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>
            Python spaCy & scikit-learn Skill Mapping & Taxonomy
          </h1>
          <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255,255,255,0.9)', maxWidth: '820px', lineHeight: '1.5' }}>
            Powered by a dual-engine architecture combining <strong>spaCy Named Entity Recognition</strong> for skill extraction, <strong>scikit-learn TF-IDF & Cosine Similarity</strong> vector alignment, and a <strong>Hierarchical 5-Domain Skill Taxonomy Graph</strong>.
          </p>

          {/* Tech Stack Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Code size={14} /> <strong>Frontend:</strong> React.js
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Server size={14} /> <strong>Backend:</strong> Node.js (REST APIs)
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Database size={14} /> <strong>Database:</strong> Supabase
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Cpu size={14} /> <strong>AI / NLP:</strong> Python (spaCy, scikit-learn)
            </div>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={14} /> <strong>Deployment:</strong> Vercel
            </div>
          </div>
        </div>
      </div>

      {/* Subnavigation Tabs */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
        <button
          onClick={() => setActiveTab('engine')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            background: activeTab === 'engine' ? '#2563eb' : '#f1f5f9',
            color: activeTab === 'engine' ? '#ffffff' : '#475569',
            transition: 'all 0.2s'
          }}
        >
          <Sparkles size={16} /> Live AI Skill Match Simulator
        </button>

        <button
          onClick={() => setActiveTab('taxonomy')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            background: activeTab === 'taxonomy' ? '#2563eb' : '#f1f5f9',
            color: activeTab === 'taxonomy' ? '#ffffff' : '#475569',
            transition: 'all 0.2s'
          }}
        >
          <Compass size={16} /> Hierarchical Skill Taxonomy Explorer
        </button>

        <button
          onClick={() => setActiveTab('architecture')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            background: activeTab === 'architecture' ? '#2563eb' : '#f1f5f9',
            color: activeTab === 'architecture' ? '#ffffff' : '#475569',
            transition: 'all 0.2s'
          }}
        >
          <Layers size={16} /> System Architecture & Mathematical Formulation
        </button>
      </div>

      {/* Tab 1: Live Simulator */}
      {activeTab === 'engine' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
          {/* Left Column: Interactive Inputs */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Code size={18} color="#2563eb" /> Candidate & Role Input Stream
              </h3>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Select Preset or Edit Live</span>
            </div>

            {/* Presets */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '4px' }}>
              {PRESETS.map(p => (
                <button
                  key={p.id}
                  onClick={() => handleSelectPreset(p)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: selectedPreset.id === p.id ? '#2563eb' : '#e2e8f0',
                    background: selectedPreset.id === p.id ? '#eff6ff' : '#ffffff',
                    color: selectedPreset.id === p.id ? '#2563eb' : '#475569',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Candidate Project Experience Bio */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                Candidate Verified Project Summary (spaCy Entity Ingestion):
              </label>
              <textarea
                value={studentText}
                onChange={(e) => setStudentText(e.target.value)}
                rows={3}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Candidate Skills Array */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                Student Skill Badges:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '10px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                {studentSkills.map((skill, idx) => (
                  <span key={idx} style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Job & Requirements */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                Target Industry Job Role & Required Skills:
              </label>
              <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontWeight: '700', fontSize: '14px', color: '#0f172a', marginBottom: '6px' }}>{jobTitle}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {targetSkills.map((req, idx) => (
                    <span key={idx} style={{ background: '#e2e8f0', color: '#334155', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '500' }}>
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleRunAiMatch}
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                background: isLoading ? '#93c5fd' : 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#ffffff',
                border: 'none',
                fontWeight: '700',
                fontSize: '15px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
                transition: 'all 0.2s'
              }}
            >
              <RefreshCw size={18} className={isLoading ? 'animate-spin' : ''} />
              {isLoading ? 'Running spaCy & scikit-learn Engine...' : 'Compute TF-IDF & Cosine Similarity Match'}
            </button>
          </div>

          {/* Right Column: AI Output Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Fit Score & Cosine Similarity Gauge */}
            <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Dual-Engine Match Engine
                  </span>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: '4px 0 0 0' }}>
                    {matchResult.matchScore}% Placement Fit
                  </h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Cosine Similarity</div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#10b981' }}>
                    {matchResult.cosineSimilarity}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ height: '10px', background: '#e2e8f0', borderRadius: '5px', overflow: 'hidden', marginBottom: '16px' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${matchResult.matchScore}%`,
                    background: matchResult.matchScore > 80 ? 'linear-gradient(90deg, #10b981, #059669)' : 'linear-gradient(90deg, #3b82f6, #2563eb)',
                    transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>

              {/* Matched vs Gaps Chips */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#15803d', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={14} /> Matched Skills ({matchResult.matchedSkills.length})
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {matchResult.matchedSkills.map((s, idx) => (
                      <span key={idx} style={{ background: '#dcfce7', color: '#166534', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#fffbeb', padding: '12px', borderRadius: '10px', border: '1px solid #fde68a' }}>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#b45309', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertTriangle size={14} /> Identified Gaps ({matchResult.missingGaps.length})
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {matchResult.missingGaps.map((s, idx) => (
                      <span key={idx} style={{ background: '#fef3c7', color: '#92400e', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Gap Action Plan */}
            <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <TrendingUp size={16} color="#2563eb" /> AI Recommended Sprints for 100% Match
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {matchResult.gapRecommendations.map((rec, idx) => (
                  <div key={idx} style={{ padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #3b82f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b' }}>{rec.skill}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{rec.recommendedModule}</div>
                    </div>
                    <span style={{ background: '#eff6ff', color: '#2563eb', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>
                      {rec.matchGain}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Hierarchical Skill Taxonomy Explorer */}
      {activeTab === 'taxonomy' && (
        <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '28px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px 0' }}>
                Hierarchical Industry Skill Taxonomy Graph
              </h3>
              <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                Standardized competency ontology covering 5 domains, 12 subdisciplines, and 60+ industry skills.
              </p>
            </div>

            {/* Domain Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {Object.keys(taxonomyData).map(domain => (
                <button
                  key={domain}
                  onClick={() => setActiveDomain(domain)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '10px',
                    border: '1px solid',
                    borderColor: activeDomain === domain ? '#2563eb' : '#e2e8f0',
                    background: activeDomain === domain ? '#eff6ff' : '#ffffff',
                    color: activeDomain === domain ? '#2563eb' : '#475569',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* Active Domain Tree */}
          <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '16px', fontWeight: '800', color: '#1e3a8a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={18} /> Domain: {activeDomain}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {Object.entries(taxonomyData[activeDomain] || {}).map(([subdomain, skills]) => (
                <div key={subdomain} style={{ background: '#ffffff', borderRadius: '10px', padding: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }} />
                    {subdomain} ({skills.length})
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {skills.map(skill => (
                      <span
                        key={skill}
                        style={{
                          background: '#f1f5f9',
                          color: '#334155',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '500',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: System Architecture & Math */}
      {activeTab === 'architecture' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Tech Stack Spec */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Server size={18} color="#2563eb" /> Full-Stack Architecture Specification
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '10px', borderLeft: '4px solid #2563eb' }}>
                <div style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b' }}>1. Frontend Layer: React.js</div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>
                  Modular reactive dashboard with responsive persona switching, live ATS application tracker, and interactive assessment sandbox.
                </p>
              </div>

              <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '10px', borderLeft: '4px solid #10b981' }}>
                <div style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b' }}>2. Backend Layer: Node.js (REST APIs)</div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>
                  Express REST endpoints dispatching requests, handling authentication, and orchestrating child Python worker processes.
                </p>
              </div>

              <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '10px', borderLeft: '4px solid #38bdf8' }}>
                <div style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b' }}>3. Database Layer: Supabase</div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>
                  PostgreSQL relational data store for candidate profiles, role vacancies, submissions, and taxonomy nodes.
                </p>
              </div>

              <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '10px', borderLeft: '4px solid #f59e0b' }}>
                <div style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b' }}>4. AI / NLP Layer: Python (spaCy + scikit-learn)</div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>
                  Extracts verified entities from free text with spaCy PhraseMatcher; computes high-dimensional TF-IDF vectors and Cosine Similarity in scikit-learn.
                </p>
              </div>

              <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '10px', borderLeft: '4px solid #6366f1' }}>
                <div style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b' }}>5. Cloud Deployment: Vercel</div>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>
                  Edge-optimized static asset distribution with continuous serverless build hooks.
                </p>
              </div>
            </div>
          </div>

          {/* Mathematical Formulation */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Cpu size={18} color="#10b981" /> Mathematical Model Formulation
            </h3>

            <div style={{ background: '#0f172a', color: '#f8fafc', padding: '16px', borderRadius: '10px', fontFamily: 'monospace', fontSize: '13px', lineHeight: '1.6', marginBottom: '16px' }}>
              <div style={{ color: '#38bdf8' }}>// 1. TF-IDF Term Weighting:</div>
              <div>TFIDF(t, d, D) = TF(t, d) × ln((1 + |D|) / (1 + DF(t)))</div>
              <br />
              <div style={{ color: '#38bdf8' }}>// 2. Cosine Similarity Vector Alignment:</div>
              <div>Sim(u, v) = (u · v) / (||u|| × ||v||)</div>
              <br />
              <div style={{ color: '#38bdf8' }}>// 3. Blended Placement Readiness:</div>
              <div>FitScore = 0.65 × (ExactSkillOverlap) + 0.35 × (Sim(u, v) × 100)</div>
            </div>

            <div style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>
              The blended formulation guarantees that candidates with matching core taxonomy prerequisites are prioritized while rewarding contextual semantic mastery detected in unstructured project repositories.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
