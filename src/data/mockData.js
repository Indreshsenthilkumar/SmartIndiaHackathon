// ALIGN — Academia–Industry Skill & Opportunity Network
// Domain-Authentic AYUSH Systems Demo Data Engine
// (Ayurveda, Yoga & Naturopathy, Unani, Siddha, Homeopathy)

export const initialStudent = {
  id: "student-101",
  rollNumber: "2026-AYUSH-101",
  name: "Indresh S",
  degree: "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
  institution: "All India Institute of Ayurveda (AIIA), New Delhi",
  gradYear: "2026",
  email: "indresh.s@aiia.gov.in",
  targetCareer: "Clinical Phytomedicine Research & Ayush Product Analytics",
  overallReadiness: 78,
  assessedSkillsCount: 12,
  strongMatchesCount: 8,
  applicationsCount: 3,

  // Feature 1: Competency Twin Metric (What You Know vs What You Can Build/Standardize)
  competencyTwin: {
    overallScore: 80,
    knowledgeScore: 78, // Based on benchmark assessments & clinical theory
    buildScore: 82,     // Based on verified chromatographic assays, formulation project & lab analysis
    analyzedReposCount: 2,
    verifiedSkillsCount: 6
  },

  analyzedProjects: [
    {
      id: "p-1",
      title: "Herbal Formulation Quality Telemetry & HPLC Standardization",
      repoUrl: "github.com/indresh/ayush-hplc-standardization",
      languageComposition: "HPLC Fingerprinting (60%), Bio-Statistics (25%), Spectroscopic Assay (15%)",
      complexityScore: 86,
      practicalContribution: "94%",
      status: "Verified",
      verifiedSkills: ["Herbal Standardization (HPLC)", "Clinical Phytomedicine Analytics", "Ayush Pharmacovigilance"],
      summary: "Standardized 15 polyherbal extract batches using HPLC fingerprinting, identified active marker peaks, and established HPTLC Rf benchmark curves."
    },
    {
      id: "p-2",
      title: "Ayush Clinical Trial Cohort & Patient Outcome Telemetry",
      repoUrl: "github.com/indresh/ayush-clinical-trials",
      languageComposition: "Python Bio-Stats (70%), Ayush EHR Schemas (30%)",
      complexityScore: 88,
      practicalContribution: "95%",
      status: "Verified",
      verifiedSkills: ["Bio-statistical Clinical Trial Analysis", "Ayush EHR & Digital Records", "Botanical Authentication"],
      summary: "Evaluated clinical outcomes across 200 patient records in herbal formulation trials for metabolic disorders using GCP-compliant bio-statistical models."
    }
  ],

  submittedChallenges: ["chal-1"],

  // Qualitative proficiencies for AYUSH skills
  skills: [
    { id: "s-1", name: "Herbal Standardization (HPLC)", category: "Ayurveda & Phytomedicine", proficiency: "Developing", demand: "High", evidence: "HPLC Assay Report & Lab Fingerprinting (Verified)" },
    { id: "s-2", name: "Clinical Phytomedicine Analytics", category: "Ayurveda & Phytomedicine", proficiency: "Strong", demand: "High", evidence: "Phytomedicine Research Fellowship Certificate" },
    { id: "s-3", name: "Bio-statistical Clinical Trial Analysis", category: "Research & Analytics", proficiency: "Developing", demand: "High", evidence: "Ayush GCP Trial Dataset Pipeline Script" },
    { id: "s-4", name: "Ayush EHR & Digital Records", category: "Digital Health", proficiency: "Developing", demand: "High", evidence: "Ayush EHR Data Telemetry Specification Document" },
    { id: "s-5", name: "Yoga Autonomic Bio-Telemetry", category: "Yoga & Naturopathy", proficiency: "Strong", demand: "Medium", evidence: "Autonomic ANS Stress Telemetry Protocol" },
    { id: "s-6", name: "Homeopathic Repertorization", category: "Homeopathy", proficiency: "Emerging", demand: "Medium", evidence: "Digital Repertory Symptom Matrix Module" },
    { id: "s-7", name: "Inter-disciplinary Ayush Collaboration", category: "Professional", proficiency: "Strong", demand: "High", evidence: "National Ayush Conclave Lead & Student Presenter" },
    { id: "s-8", name: "Critical Clinical Reasoning", category: "Professional", proficiency: "Strong", demand: "High", evidence: "Ayush Clinical Case Study Competition Winner" },
    { id: "s-9", name: "Ayush Pharmacovigilance (GCP/GMP)", category: "Regulatory", proficiency: "Strong", demand: "High", evidence: "ADR Monitoring Workshop Certification" },
    { id: "s-10", name: "Classical Rasa Shastra & Dravyaguna", category: "Ayurveda & Phytomedicine", proficiency: "Strong", demand: "High", evidence: "AIIA Pharmacognosy Lab Distinction" },
    { id: "s-11", name: "Unani Ilmul Advia Drug Standardization", category: "Unani & Siddha", proficiency: "Emerging", demand: "Medium", evidence: "Cross-system Herbology Elective" },
    { id: "s-12", name: "Siddha Gunapadam & Varmam Diagnostics", category: "Unani & Siddha", proficiency: "Emerging", demand: "Medium", evidence: "Introductory Siddha Therapeutics Overview" }
  ],

  skillGaps: [
    {
      id: "gap-1",
      skill: "Clinical Phytomedicine Analytics",
      current: "Developing",
      target: "Proficient",
      whyItMatters: "Required in 85% of active Herbal R&D and Clinical Ayush Research internship listings.",
      recommendedAction: "Complete the 4-week Phytomedicine Chromatographic Assay Project.",
      priority: 1
    },
    {
      id: "gap-2",
      skill: "Herbal Standardization (HPLC & Spectroscopy)",
      current: "Developing",
      target: "Proficient",
      whyItMatters: "Most requested core technical skill across Himalaya Wellness, Dabur, and AIIA R&D postings.",
      recommendedAction: "Complete advanced HPLC marker assay lab & benchmark assessment.",
      priority: 2
    },
    {
      id: "gap-3",
      skill: "Ayush Pharmacovigilance & GCP Compliance",
      current: "Emerging",
      target: "Developing",
      whyItMatters: "Key differentiator for Ayush clinical trial coordinators during R&D interviews.",
      recommendedAction: "Review Ayush GCP clinical trial protocol guidelines module.",
      priority: 3
    }
  ],

  nextBestAction: {
    title: "Complete Phytomedicine HPLC Assay Project",
    type: "Lab & Project Action",
    timeEstimate: "3-4 hours",
    impact: "+8% Target Readiness",
    description: "Standardize polyherbal markers using chromatographic dataset files to bridge your top gap for Ayush Research Analyst roles."
  },

  applications: [
    {
      id: "app-1",
      opportunityId: "opp-1",
      role: "Phytomedicine Research Analyst Intern",
      company: "Himalaya Wellness R&D",
      location: "Bengaluru · Hybrid",
      duration: "3 months",
      appliedDate: "12 Aug 2026",
      status: "Under review",
      matchScore: 88,
      matchLabel: "Strong match",
      timeline: [
        { stage: "Submitted", date: "12 Aug 2026", completed: true },
        { stage: "Under Review", date: "16 Aug 2026", completed: true },
        { stage: "Lab Skill Assessment", date: "Pending", completed: false },
        { stage: "Technical Interview", date: "Pending", completed: false },
        { stage: "Outcome", date: "Pending", completed: false }
      ]
    },
    {
      id: "app-2",
      opportunityId: "opp-2",
      role: "Clinical Siddha & Gunapadam Quality Analyst",
      company: "SKM Siddha Formulations",
      location: "Chennai · Hybrid",
      duration: "6 months",
      appliedDate: "05 Aug 2026",
      status: "Interview",
      matchScore: 90,
      matchLabel: "Strong match",
      timeline: [
        { stage: "Submitted", date: "05 Aug 2026", completed: true },
        { stage: "Under Review", date: "08 Aug 2026", completed: true },
        { stage: "Lab Assessment", date: "12 Aug 2026", completed: true },
        { stage: "Interview", date: "20 Aug 2026 (Scheduled)", completed: true },
        { stage: "Outcome", date: "Pending", completed: false }
      ]
    }
  ],

  savedOpportunities: ["opp-2", "opp-4"],

  portfolio: {
    about: "Final-year BAMS student focused on Ayurvedic phytomedicine, herbal HPLC standardization, clinical bio-statistics, and evidence-based Ayush formulation science.",
    projects: [
      {
        id: "p-1",
        title: "Herbal Formulation Quality Telemetry & HPLC Standardization",
        description: "Standardized 15 polyherbal extract batches using HPLC fingerprinting, identified active marker peaks, and established Rf benchmarks.",
        skills: ["HPLC Assay", "Phytomedicine Analytics", "Ayush Pharmacovigilance"],
        link: "github.com/demo/ayush-hplc-standardization",
        verified: true,
        complexityScore: 86
      },
      {
        id: "p-2",
        title: "Ayush Clinical Trial Cohort & Patient Outcome Telemetry",
        description: "Analyzed 200 patient records in herbal formulation trials using GCP-compliant bio-statistical models.",
        skills: ["Bio-statistics", "Ayush EHR", "Botanical Spectroscopy"],
        link: "github.com/demo/ayush-clinical-trials",
        verified: true,
        complexityScore: 88
      }
    ],
    certifications: [
      {
        id: "c-1",
        name: "Certificate in Chromatographic Assay & Herbal Standardization (HPLC/HPTLC)",
        issuer: "NIPER / AIIA Research Division",
        date: "May 2026",
        verified: true,
        credentialId: "CERT-AYUSH-HPLC-88329"
      },
      {
        id: "c-2",
        name: "Good Clinical Practice (GCP) in Ayush Clinical Trials",
        issuer: "Central Council for Research in Ayurvedic Sciences (CCRAS)",
        date: "Mar 2026",
        verified: true,
        credentialId: "CERT-CCRAS-GCP-44021"
      },
      {
        id: "c-3",
        name: "AICTE-ATAL Machine Learning & Phytomedicine Analytics",
        issuer: "AICTE-ATAL / AIIA",
        date: "Aug 2026",
        verified: true,
        credentialId: "CERT-ATAL-2026-AYUSH-99"
      }
    ],
    experiences: [
      {
        id: "e-1",
        role: "Junior Phytomedicine Research Fellow",
        organization: "AIIA Pharmacognosy & Clinical Research Lab",
        period: "Jan 2026 – May 2026",
        details: "Evaluated phytochemical assay profiles for 40+ medicinal plant extracts under senior R&D scientists."
      }
    ],
    achievements: [
      { title: "National Ayush Research Innovation Hackathon 2026 — Top 5% Finalist", date: "Jul 2026", verified: true },
      { title: "Competency Twin High Assay Score Badge (86/100)", date: "Aug 2026", verified: true },
      { title: "Published Open-Source Herbal Standardization Case Study", date: "May 2026", verified: true }
    ],

    // Secure Document Management Vault
    documents: [
      { id: "doc-1", title: "Indresh_S_BAMS_Ayush_Research_Resume_2026.pdf", category: "Resume", size: "245 KB", uploadDate: "01 Sep 2026", status: "Verified & Encrypted", icon: "FileText" },
      { id: "doc-2", title: "CCRAS_GCP_Ayush_Trial_Certification.pdf", category: "Certification", size: "512 KB", uploadDate: "15 May 2026", status: "Issuer Verified", icon: "Award" },
      { id: "doc-3", title: "AIIA_Phytomedicine_Internship_Completion_Report.pdf", category: "Internship Report", size: "1.2 MB", uploadDate: "05 Jun 2026", status: "Industry Signed", icon: "Briefcase" },
      { id: "doc-4", title: "BAMS_Semester_1_to_8_Official_Academic_Transcripts.pdf", category: "Academic Transcript", size: "2.4 MB", uploadDate: "10 Aug 2026", status: "Digilocker Verified", icon: "ShieldCheck" }
    ],

    // Platform & Institutional Integrations
    integrations: [
      { provider: "CCRAS Digital Portal", category: "Research Repository", status: "Active Sync", lastSync: "2 hours ago", logo: "Coursera" },
      { provider: "NPTEL Ayush Herbology", category: "Learning Platform", status: "Active Sync", lastSync: "Yesterday", logo: "NPTEL" },
      { provider: "AYUSH National Repository", category: "Certification Provider", status: "Verified Feed", lastSync: "Connected", logo: "Google" },
      { provider: "AIIA Central Laboratory ERP", category: "Institutional Database", status: "Active Student Sync", lastSync: "Real-Time", logo: "University" },
      { provider: "Digilocker National Repository", category: "Institutional Database", status: "Official API Verified", lastSync: "Connected", logo: "Digilocker" }
    ]
  }
};

// Feature 2: Industry Challenge Engine Dataset (AYUSH Systems)
export const initialChallenges = [
  {
    id: "chal-1",
    title: "Automated HPLC Spectroscopic Assay & Botanical Standardization",
    industryPartner: "Himalaya Wellness R&D",
    domain: "Ayurveda & Phytochemistry",
    difficulty: "Intermediate",
    deadline: "15 Sep 2026",
    stipendOrReward: "Verified HPLC Assay Badge + Fast-track Research Shortlist",
    skillsVerified: ["Herbal Standardization (HPLC)", "Clinical Phytomedicine Analytics", "Botanical Spectroscopy"],
    description: "Develop a standardized chromatographic marker assay pipeline processing raw UV-spectroscopy data for polyherbal Ayurvedic extracts.",
    problemDetails: [
      "Process raw multi-wavelength UV-spectroscopy data files of botanical extracts.",
      "Identify active marker retention times (Rf values) and calculate peak areas.",
      "Validate batch-to-batch consistency under 2% variance.",
      "Deliver a clean documentation report detailing chromatographic assay benchmarks."
    ],
    submissionsCount: 16,
    status: "Active"
  },
  {
    id: "chal-2",
    title: "Digital Repertory Search & Symptom Matching System",
    industryPartner: "Willmar Schwabe India R&D",
    domain: "Homeopathy & Repertorization Analytics",
    difficulty: "Intermediate",
    deadline: "20 Sep 2026",
    stipendOrReward: "Verified Homeopathic Repertory Badge + ₹15,000 Award",
    skillsVerified: ["Homeopathic Repertorization", "Symptom Correlation Analytics", "Ayush EHR & Digital Records"],
    description: "Design a clinical decision-support symptom correlation engine based on Kent & Boericke repertory structures for constitutional remedies.",
    problemDetails: [
      "Categorize 50+ constitutional and acute symptom rubrics.",
      "Formulate mathematical weighting scores for symptom intensity and modalities.",
      "Develop a clean digital interface prototype for remedy ranking."
    ],
    submissionsCount: 11,
    status: "Active"
  },
  {
    id: "chal-3",
    title: "Therapeutic Yoga Autonomic Nervous System Bio-Telemetry",
    industryPartner: "National Institute of Naturopathy & Dabur R&D",
    domain: "Yoga & Naturopathy Sciences",
    difficulty: "Advanced",
    deadline: "25 Sep 2026",
    stipendOrReward: "Verified Bio-Telemetry Badge + ₹20,000 Prize Pool",
    skillsVerified: ["Yoga Autonomic Bio-Telemetry", "Physiological Stress Monitoring", "Bio-statistical Clinical Trial Analysis"],
    description: "Build a bio-telemetry analysis framework processing Heart Rate Variability (HRV) and Galvanic Skin Response (GSR) data during Pranayama protocols.",
    problemDetails: [
      "Process real-time HRV time-domain (SDNN, RMSSD) and frequency-domain (LF/HF ratio) data.",
      "Evaluate parasympathetic activation changes across 3 distinct Pranayama durations.",
      "Expose clean summary reporting metrics for clinical Naturopathy trials."
    ],
    submissionsCount: 14,
    status: "Active"
  },
  {
    id: "chal-4",
    title: "Unani Ilmul Advia & Siddha Gunapadam Extraction Yield Optimization",
    industryPartner: "Hamdard Laboratories & SKM Siddha R&D",
    domain: "Unani & Siddha Pharmacology",
    difficulty: "Advanced",
    deadline: "30 Sep 2026",
    stipendOrReward: "Verified Pharmacology Badge + Research Fellowship Interview",
    skillsVerified: ["Unani Ilmul Advia Pharmacology", "Siddha Gunapadam Formulations", "Herbal Standardization (HPLC)"],
    description: "Optimize hydro-alcoholic extraction yields and phytochemical marker retention for classical Unani and Siddha botanical drugs.",
    problemDetails: [
      "Compare Soxhlet, supercritical fluid, and ultrasonic extraction parameters.",
      "Quantify active alkaloid/glycoside concentrations via spectrophotometry.",
      "Publish standardized SOP for industrial-scale classical drug preparation."
    ],
    submissionsCount: 9,
    status: "Active"
  }
];

// Feature 3: Searchable Student Registry for Institutions (AYUSH Students)
export const searchableStudents = {
  "2026-AYUSH-101": {
    rollNumber: "2026-AYUSH-101",
    name: "Indresh S",
    degree: "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
    department: "Ayurveda & Phytomedicine",
    gradYear: "2026",
    cgpa: "8.85 / 10",
    overallReadiness: 78,
    competencyTwin: {
      overallScore: 80,
      knowledgeScore: 78,
      buildScore: 82,
      analyzedReposCount: 2
    },
    topSkills: [
      { name: "Herbal Standardization (HPLC)", level: "Developing", evidence: "HPLC Assay Report (Verified)" },
      { name: "Clinical Phytomedicine Analytics", level: "Strong", evidence: "AIIA Lab Fellowship Cert" },
      { name: "Inter-disciplinary Ayush Collaboration", level: "Strong", evidence: "Conclave Student Lead" },
      { name: "Ayush Pharmacovigilance (GCP)", level: "Strong", evidence: "ADR Monitoring Workshop" }
    ],
    skillGaps: [
      { skill: "Clinical Phytomedicine Analytics", current: "Developing", target: "Proficient", action: "Complete 4-week Phytomedicine Project" },
      { skill: "Herbal Standardization (HPLC)", current: "Developing", target: "Proficient", action: "Enroll in HPLC Bridge Lab" },
      { skill: "Ayush GCP Compliance", current: "Emerging", target: "Developing", action: "Review Trial Guidelines Module" }
    ],
    githubProjects: [
      { title: "Herbal Formulation Quality Telemetry & HPLC", repoUrl: "github.com/indresh/ayush-hplc", complexity: "86/100", lang: "HPLC Assay, Bio-Stats" },
      { title: "Ayush Clinical Trial Cohort Pipeline", repoUrl: "github.com/indresh/ayush-clinical-trials", complexity: "88/100", lang: "Python, Ayush EHR" }
    ],
    certifications: [
      "Chromatographic Assay & Herbal Standardization (Verified)",
      "Good Clinical Practice (GCP) in Ayush Trials (Verified)"
    ],
    completedChallenges: [
      { title: "Automated HPLC Spectroscopic Assay & Standardization", partner: "Himalaya Wellness R&D", status: "Verified & Badge Awarded" }
    ],
    activeInternship: "Junior Phytomedicine Fellow at AIIA Central Research Lab",
    recommendedActions: [
      "Assign HPLC Standardization Bridge Program (Final BAMS batch)",
      "Schedule Phytomedicine Lab Mentorship"
    ]
  },

  "2026-BSMS-142": {
    rollNumber: "2026-BSMS-142",
    name: "Meera Krishnan",
    degree: "BSMS (Bachelor of Siddha Medicine & Surgery)",
    department: "Siddha Medicine & Gunapadam",
    gradYear: "2026",
    cgpa: "9.25 / 10",
    overallReadiness: 86,
    competencyTwin: {
      overallScore: 88,
      knowledgeScore: 86,
      buildScore: 90,
      analyzedReposCount: 3
    },
    topSkills: [
      { name: "Siddha Gunapadam Formulations", level: "Proficient", evidence: "Herbal Formulation Lab Repo" },
      { name: "Varmam Diagnostics", level: "Strong", evidence: "Clinical Varmam Assessment" },
      { name: "Herbal Standardization (HPLC)", level: "Proficient", evidence: "SKM Siddha Assay Certificate" }
    ],
    skillGaps: [
      { skill: "Ayush Pharmacovigilance (GCP)", current: "Developing", target: "Proficient", action: "Enroll in Pharmacovigilance Drive" }
    ],
    githubProjects: [
      { title: "Gunapadam Herbal Marker Identification", repoUrl: "github.com/meera/gunapadam-markers", complexity: "92/100", lang: "Spectroscopy" },
      { title: "Varmam Point Telemetry Mapping", repoUrl: "github.com/meera/varmam-telemetry", complexity: "89/100", lang: "Bio-Telemetry" }
    ],
    certifications: [
      "Advanced Siddha Gunapadam Pharmacology (Verified)",
      "Varmam Therapy & Diagnostic Protocol (Verified)"
    ],
    completedChallenges: [
      { title: "Unani Ilmul Advia & Siddha Gunapadam Optimization", partner: "SKM Siddha R&D", status: "Verified & Badge Awarded" }
    ],
    activeInternship: "Gunapadam Quality Research Intern at SKM Siddha Formulations",
    recommendedActions: [
      "Recommend for Direct R&D Placement Shortlist"
    ]
  },

  "2026-BUMS-208": {
    rollNumber: "2026-BUMS-208",
    name: "Rohan Varma",
    degree: "BUMS (Bachelor of Unani Medicine & Surgery)",
    department: "Unani Medicine & Ilmul Advia",
    gradYear: "2026",
    cgpa: "8.30 / 10",
    overallReadiness: 78,
    competencyTwin: {
      overallScore: 80,
      knowledgeScore: 78,
      buildScore: 82,
      analyzedReposCount: 2
    },
    topSkills: [
      { name: "Unani Ilmul Advia Pharmacology", level: "Proficient", evidence: "Hamdard Drug Lab Standardization" },
      { name: "Botanical Authentication", level: "Proficient", evidence: "Herbal Pharmacognosy Assay" }
    ],
    skillGaps: [
      { skill: "Herbal Standardization (HPLC)", current: "Emerging", target: "Developing", action: "Assign HPLC Bridge Program" },
      { skill: "Bio-statistical Analysis", current: "Emerging", target: "Developing", action: "Bio-Stats Workshop Assignment" }
    ],
    githubProjects: [
      { title: "Unani Herb Extraction Quality Monitor", repoUrl: "github.com/rohan/unani-extraction", complexity: "84/100", lang: "Assay Data" }
    ],
    certifications: [
      "Ilmul Advia Herbal Standardization Specialization"
    ],
    completedChallenges: [
      { title: "Unani Ilmul Advia & Siddha Gunapadam Optimization", partner: "Hamdard Laboratories", status: "Verified & Badge Awarded" }
    ],
    activeInternship: "Unani Pharmacology Trainee at Hamdard Labs R&D",
    recommendedActions: [
      "Assign HPLC Standardization Bridge Program for BUMS batch"
    ]
  },

  "2026-BHMS-305": {
    rollNumber: "2026-BHMS-305",
    name: "Ananya Rao",
    degree: "BHMS (Bachelor of Homeopathic Medicine & Surgery)",
    department: "Homeopathy & Repertorization",
    gradYear: "2025",
    cgpa: "9.50 / 10",
    overallReadiness: 94,
    competencyTwin: {
      overallScore: 96,
      knowledgeScore: 94,
      buildScore: 98,
      analyzedReposCount: 4
    },
    topSkills: [
      { name: "Homeopathic Repertorization", level: "Strong", evidence: "Kent Digital Rubric Matrix Repo" },
      { name: "Symptom Correlation Analytics", level: "Strong", evidence: "Published Clinical Remedy Case Study" },
      { name: "Ayush EHR & Digital Records", level: "Strong", evidence: "Homeopathic Patient Telemetry" }
    ],
    skillGaps: [
      { skill: "Ayush Pharmacovigilance (GCP)", current: "Developing", target: "Proficient", action: "Advanced GCP Research Fellowship" }
    ],
    githubProjects: [
      { title: "Digital Homeopathic Repertory Engine", repoUrl: "github.com/ananya/homeo-repertory", complexity: "96/100", lang: "Repertory Analytics" }
    ],
    certifications: [
      "Certified Repertory Analytics Specialist (Verified)",
      "Organon & Homeopathic Posology Masterclass (Verified)"
    ],
    completedChallenges: [
      { title: "Digital Repertory Search & Symptom Matching System", partner: "Willmar Schwabe India", status: "Verified & Top Performer" }
    ],
    activeInternship: "Clinical Homeopathy Research Trainee at Schwabe India R&D",
    recommendedActions: [
      "Fast-track to Senior Ayush Clinical R&D Placement"
    ]
  },

  "2026-BNYS-412": {
    rollNumber: "2026-BNYS-412",
    name: "Kavya Nair",
    degree: "BNYS (Bachelor of Naturopathy & Yogic Sciences)",
    department: "Yoga & Naturopathy Sciences",
    gradYear: "2026",
    cgpa: "8.90 / 10",
    overallReadiness: 84,
    competencyTwin: {
      overallScore: 86,
      knowledgeScore: 84,
      buildScore: 88,
      analyzedReposCount: 2
    },
    topSkills: [
      { name: "Yoga Autonomic Bio-Telemetry", level: "Proficient", evidence: "Pranayama HRV Protocol Repo" },
      { name: "Physiological Stress Monitoring", level: "Strong", evidence: "Autonomic Nervous System Data Lab" },
      { name: "Clinical Naturopathy Protocols", level: "Strong", evidence: "Hydrotherapy & Clinical Dietetics Cert" }
    ],
    skillGaps: [
      { skill: "Herbal Standardization (HPLC)", current: "Emerging", target: "Developing", action: "Phytochemistry Lab Elective" }
    ],
    githubProjects: [
      { title: "Pranayama Autonomic Bio-Telemetry Pipeline", repoUrl: "github.com/kavya/yoga-telemetry", complexity: "87/100", lang: "Bio-Telemetry, Python" }
    ],
    certifications: [
      "Therapeutic Yoga & HRV Telemetry Specialist (Verified)",
      "Clinical Naturopathy & Clinical Dietetics (Verified)"
    ],
    completedChallenges: [
      { title: "Therapeutic Yoga Autonomic Nervous System Bio-Telemetry", partner: "NIN Pune", status: "Verified & Badge Awarded" }
    ],
    activeInternship: "Clinical Yoga Telemetry Fellow at National Institute of Naturopathy",
    recommendedActions: [
      "Schedule Clinical Naturopathy Research Mentorship"
    ]
  }
};

export const initialOpportunities = [
  {
    id: "opp-1",
    title: "Phytomedicine Research Analyst Intern",
    company: "Himalaya Wellness R&D",
    location: "Bengaluru",
    workMode: "Hybrid",
    type: "Internship",
    duration: "3 months",
    stipend: "₹25,000 / mo",
    experienceLevel: "Entry-Level / Student",
    requiredSkills: ["Herbal Standardization (HPLC)", "Clinical Phytomedicine Analytics", "Ayush Pharmacovigilance", "Botanical Spectroscopy"],
    matchedSkills: ["Herbal Standardization (HPLC)", "Clinical Phytomedicine Analytics", "Botanical Spectroscopy"],
    developingSkills: ["Ayush Pharmacovigilance"],
    missingSkills: ["Bio-statistical Clinical Trial Analysis"],
    matchScore: 88,
    matchLabel: "Strong match",
    eligibility: "BAMS / MD Ayurveda / M.Sc Phytochemistry (2025–2026 batch)",
    description: "Work directly with our phytomedicine research team to evaluate herbal active markers, perform HPLC chromatographic assays, and present standardization metrics to senior R&D leads.",
    responsibilities: [
      "Perform HPLC fingerprinting and spectroscopic assays on polyherbal extract batches.",
      "Build batch consistency reports and chromatographic Rf benchmark curves.",
      "Collaborate with clinical trial coordinators to refine formulation specs.",
      "Present weekly chromatographic summaries to R&D leadership."
    ],
    postedDate: "2 days ago",
    applicantsCount: 46
  },
  {
    id: "opp-2",
    title: "Clinical Siddha & Gunapadam Quality Analyst",
    company: "SKM Siddha Formulations",
    location: "Chennai",
    workMode: "Hybrid",
    type: "Internship",
    duration: "6 months",
    stipend: "₹30,000 / mo",
    experienceLevel: "Entry-Level / Student",
    requiredSkills: ["Siddha Gunapadam Formulations", "Herbal Standardization (HPLC)", "Ayush EHR & Digital Records"],
    matchedSkills: ["Siddha Gunapadam Formulations", "Herbal Standardization (HPLC)"],
    developingSkills: ["Ayush EHR & Digital Records"],
    missingSkills: [],
    matchScore: 90,
    matchLabel: "Strong match",
    eligibility: "BSMS / MD Siddha (2025–2026 batch)",
    description: "Join SKM Siddha's core formulations quality squad assisting with classical Gunapadam drug standardization, raw material botanical verification, and laboratory quality reporting.",
    responsibilities: [
      "Standardize traditional Gunapadam mineral and botanical extract batches.",
      "Design automated quality certification reports for export compliance.",
      "Conduct diagnostic quality checks on herbal raw materials."
    ],
    postedDate: "1 day ago",
    applicantsCount: 38
  },
  {
    id: "opp-3",
    title: "Homeopathic Repertory & Digital Health Intern",
    company: "Willmar Schwabe India R&D",
    location: "Noida",
    workMode: "On-site",
    type: "Internship",
    duration: "6 months",
    stipend: "₹28,000 / mo",
    experienceLevel: "Entry-Level / Student",
    requiredSkills: ["Homeopathic Repertorization", "Symptom Correlation Analytics", "Ayush EHR & Digital Records"],
    matchedSkills: ["Homeopathic Repertorization", "Symptom Correlation Analytics"],
    developingSkills: ["Ayush EHR & Digital Records"],
    missingSkills: [],
    matchScore: 85,
    matchLabel: "Strong match",
    eligibility: "BHMS / MD Homeopathy (2026 batch)",
    description: "Assist R&D clinical teams with digital repertory symptom mapping, constitutional remedy correlation models, and clinical documentation verification.",
    responsibilities: [
      "Map patient symptom rubrics to digital repertory database schemas.",
      "Execute comparative potency and clinical response statistical analysis.",
      "Document clinical trial outcome summaries for regulatory filings."
    ],
    postedDate: "4 days ago",
    applicantsCount: 32
  },
  {
    id: "opp-4",
    title: "Ayush Pharmacovigilance & Clinical Trial Fellow",
    company: "CCRAS & AIIA Research Division",
    location: "New Delhi",
    workMode: "Remote",
    type: "Jobs",
    duration: "Full-time",
    stipend: "₹6.5 LPA",
    experienceLevel: "Graduating Students",
    requiredSkills: ["Ayush Pharmacovigilance (GCP)", "Clinical Phytomedicine Analytics", "Bio-statistical Clinical Trial Analysis", "Inter-disciplinary Ayush Collaboration"],
    matchedSkills: ["Ayush Pharmacovigilance (GCP)", "Clinical Phytomedicine Analytics", "Inter-disciplinary Ayush Collaboration"],
    developingSkills: ["Bio-statistical Clinical Trial Analysis"],
    missingSkills: [],
    matchScore: 88,
    matchLabel: "Strong match",
    eligibility: "Graduating BAMS / BNYS / BUMS / BSMS / BHMS (2025/2026 batch)",
    description: "Work with national research scientists to monitor adverse drug reactions (ADR), audit Ayush GCP clinical trial documentation, and publish evidence-based trial summaries.",
    responsibilities: [
      "Gather clinical adverse event reports from participating Ayush hospitals.",
      "Perform bio-statistical analysis on multi-center clinical trial outcomes.",
      "Facilitate weekly regulatory compliance walkthrough sessions."
    ],
    postedDate: "3 days ago",
    applicantsCount: 82
  },
  {
    id: "opp-5",
    title: "Therapeutic Yoga & Bio-Telemetry Project",
    company: "National Institute of Naturopathy",
    location: "Pune",
    workMode: "Remote",
    type: "Projects",
    duration: "4 weeks",
    stipend: "₹18,000 fixed",
    experienceLevel: "Student Project",
    requiredSkills: ["Yoga Autonomic Bio-Telemetry", "Physiological Stress Monitoring", "Bio-statistical Clinical Trial Analysis"],
    matchedSkills: ["Yoga Autonomic Bio-Telemetry", "Physiological Stress Monitoring"],
    developingSkills: ["Bio-statistical Clinical Trial Analysis"],
    missingSkills: [],
    matchScore: 82,
    matchLabel: "Good match",
    eligibility: "Open to all registered BNYS & Ayush medical students",
    description: "Short-term hands-on industry research project to evaluate autonomic nervous system HRV telemetry changes during structured Pranayama and Naturopathy protocols.",
    responsibilities: [
      "Process HRV and Galvanic Skin Response telemetry dataset files.",
      "Create parasympathetic response time charts and statistical summaries.",
      "Deliver an interactive research presentation to senior Naturopathy leads."
    ],
    postedDate: "5 days ago",
    applicantsCount: 29
  },
  {
    id: "opp-6",
    title: "Unani Ilmul Advia Standardization Intensive",
    company: "Hamdard Laboratories R&D",
    location: "New Delhi",
    workMode: "Virtual",
    type: "Learning",
    duration: "6 weeks",
    stipend: "Sponsored Program",
    experienceLevel: "All Skill Levels",
    requiredSkills: ["Unani Ilmul Advia Pharmacology", "Botanical Authentication", "Herbal Standardization (HPLC)"],
    matchedSkills: ["Unani Ilmul Advia Pharmacology", "Botanical Authentication"],
    developingSkills: ["Herbal Standardization (HPLC)"],
    missingSkills: [],
    matchScore: 78,
    matchLabel: "Good match",
    eligibility: "All BUMS & Unani Pharmacology Students",
    description: "Industry-mentored intensive learning program focusing on traditional Unani herb extraction techniques, chromatographic assay verification, and quality standards.",
    responsibilities: [
      "Complete 6 weekly hands-on laboratory exercise modules.",
      "Build a sample botanical drug standardization report.",
      "Participate in live Q&A sessions with senior Unani pharmacologists."
    ],
    postedDate: "1 week ago",
    applicantsCount: 94
  }
];

export const institutionMetrics = {
  name: "All India Institute of Ayurveda & Ayush Consortium",
  studentsAssessed: 1420,
  careerReady: 540,
  activeInternships: 112,
  placementProgress: 74,
  
  readinessDistribution: [
    { category: "Ready", percentage: 38, count: 540, color: "#0D9488" },
    { category: "Developing", percentage: 44, count: 625, color: "#2563EB" },
    { category: "Needs Support", percentage: 18, count: 255, color: "#D97706" }
  ],

  topSkillGaps: [
    { skill: "Herbal Standardization (HPLC & Spectroscopy)", studentsCount: 312, category: "Ayurveda & Phytomedicine", priority: "High" },
    { skill: "Clinical Phytomedicine & Trial Analytics", studentsCount: 268, category: "Ayurveda & Phytomedicine", priority: "High" },
    { skill: "Yoga Autonomic Bio-Telemetry Protocols", studentsCount: 215, category: "Yoga & Naturopathy", priority: "Medium" },
    { skill: "Ilmul Advia & Gunapadam Extraction Standards", studentsCount: 184, category: "Unani & Siddha", priority: "Medium" },
    { skill: "Homeopathic Repertorization & Posology", studentsCount: 162, category: "Homeopathy", priority: "Medium" }
  ],

  industryDemandMatrix: [
    {
      skill: "Herbal Standardization (HPLC)",
      industryDemand: "High",
      studentReadiness: "Medium",
      gapLevel: "Priority Gap",
      insight: "Requested in 72% of sample postings, but 312 students exhibit a laboratory assay gap.",
      action: "Host a 2-week HPLC & HPTLC chromatographic bridge program for BAMS & BSMS pre-final batch."
    },
    {
      skill: "Clinical Phytomedicine Analytics",
      industryDemand: "High",
      studentReadiness: "High",
      gapLevel: "Aligned",
      insight: "Student capability strongly matches baseline clinical phytomedicine requirements.",
      action: "Maintain current laboratory syllabus; introduce advanced clinical trial electives."
    },
    {
      skill: "Yoga Bio-Telemetry",
      industryDemand: "Medium",
      studentReadiness: "Low",
      gapLevel: "Priority Gap",
      insight: "215 students exhibit low hands-on bio-telemetry HRV data collection experience.",
      action: "Partner with National Institute of Naturopathy for campus bio-telemetry certification drive."
    },
    {
      skill: "Ilmul Advia & Gunapadam Standards",
      industryDemand: "Medium",
      studentReadiness: "Low",
      gapLevel: "Priority Gap",
      insight: "184 students lack hands-on drug standardization laboratory exposure.",
      action: "Incorporate extraction optimization module into final-year Unani & Siddha curriculum."
    },
    {
      skill: "Ayush Pharmacovigilance (GCP)",
      industryDemand: "High",
      studentReadiness: "Medium",
      gapLevel: "Developing",
      insight: "162 students need improved clinical trial ADR documentation practice.",
      action: "Expand weekly CCRAS clinical trial mock auditing labs."
    }
  ],

  recommendedActions: [
    {
      id: "act-1",
      title: "HPLC Standardization Bridge Program",
      targetGroup: "312 Pre-final BAMS & BSMS Students",
      expectedImpact: "Increase HPLC assay readiness from 52% to 86% prior to campus hiring drive.",
      duration: "2 Weeks · 18 Hours Lab"
    },
    {
      id: "act-2",
      title: "Yoga Bio-Telemetry Workshop",
      targetGroup: "215 BNYS & Naturopathy Aspirants",
      expectedImpact: "Add practical HRV autonomic telemetry projects to student portfolios.",
      duration: "3 Days · Weekend Lab"
    },
    {
      id: "act-3",
      title: "Ayush GCP Pharmacovigilance Drive",
      targetGroup: "162 Clinical Trial & R&D Interested Students",
      expectedImpact: "Achieve GCP certification for 120+ Ayush students.",
      duration: "4 Weeks · Self-Paced + AIIA Mentor Support"
    }
  ],

  outcomesData: {
    placementTrend: [
      { year: "2023", percentage: 60 },
      { year: "2024", percentage: 65 },
      { year: "2025", percentage: 70 },
      { year: "2026 Target", percentage: 82 }
    ],
    departmentBreakdown: [
      { department: "Ayurveda (BAMS / MD)", enrolled: 240, assessed: 235, ready: 112, activeInterns: 62 },
      { department: "Yoga & Naturopathy (BNYS)", enrolled: 180, assessed: 172, ready: 78, activeInterns: 48 },
      { department: "Unani Medicine (BUMS)", enrolled: 160, assessed: 148, ready: 54, activeInterns: 28 },
      { department: "Siddha Medicine (BSMS)", enrolled: 140, assessed: 132, ready: 48, activeInterns: 22 },
      { department: "Homeopathy (BHMS)", enrolled: 170, assessed: 162, ready: 64, activeInterns: 34 }
    ]
  },

  // Detailed Skill Mastery Heatmap Analytics across AYUSH Departments
  departmentSkillHeatmap: [
    { department: "Ayurveda (BAMS)", sql: 88, python: 94, cloud: 76, analytics: 68, communication: 82 },
    { department: "Yoga & Naturopathy (BNYS)", sql: 92, python: 90, cloud: 84, analytics: 88, communication: 86 },
    { department: "Unani Medicine (BUMS)", sql: 84, python: 82, cloud: 78, analytics: 72, communication: 80 },
    { department: "Siddha Medicine (BSMS)", sql: 86, python: 88, cloud: 82, analytics: 78, communication: 82 },
    { department: "Homeopathy (BHMS)", sql: 94, python: 90, cloud: 86, analytics: 88, communication: 84 }
  ],

  // Detailed Internship Participation Pipeline Metrics
  internshipPipeline: [
    { stage: "Applied & Profile Sent", count: 340, color: "#64748B" },
    { stage: "Shortlisted for Lab Assessment", count: 195, color: "#2563EB" },
    { stage: "Technical Interviewing", count: 125, color: "#D97706" },
    { stage: "Active Industry Interns", count: 112, color: "#0D9488" },
    { stage: "PPO Offered / Completed", count: 155, color: "#16A34A" }
  ],

  // Detailed Stipend Distribution Analytics
  stipendAnalytics: {
    topBracket: { range: "> ₹30,000 / mo", count: 32, percentage: "28%" },
    midBracket: { range: "₹18,000 – ₹30,000 / mo", count: 64, percentage: "57%" },
    entryBracket: { range: "< ₹18,000 / mo", count: 16, percentage: "15%" },
    averageStipend: "₹26,500 / mo",
    highestStipend: "₹65,000 / mo (Himalaya Wellness R&D)"
  },

  // Industry Employer Satisfaction Index
  employerSatisfaction: {
    overallRating: "4.90 / 5.0",
    partnerCount: 16,
    feedback: [
      { partner: "Himalaya Wellness R&D", rating: "5.0 / 5.0", comment: "BAMS students demonstrate strong HPLC herbal standardization and phytomedicine research readiness." },
      { partner: "Willmar Schwabe India", rating: "4.9 / 5.0", comment: "High capability in digital homeopathic repertorization and clinical symptom correlation analytics." },
      { partner: "SKM Siddha Formulations", rating: "4.8 / 5.0", comment: "Siddha student interns met enterprise laboratory standards in Gunapadam drug standardization." }
    ]
  },

  // 5 Pillars of Industry-Academia Collaboration Programs
  collaborationPrograms: {
    mentorships: [
      { id: "m-1", title: "1-on-1 Senior Phytomedicine R&D Mentorship", mentor: "Dr. Vikram Seth (Himalaya Wellness R&D)", menteesCount: 26, focus: "Herbal HPLC & Phytomedicine" },
      { id: "m-2", title: "Therapeutic Yoga Bio-Telemetry Mentorship", mentor: "Dr. Priya Nair (NIN Pune)", menteesCount: 20, focus: "HRV Autonomic Monitoring" }
    ],
    workshops: [
      { id: "w-1", title: "HPLC Chromatographic Fingerprinting & Spectroscopic Lab", instructor: "AIIA Pharmacognosy Faculty", date: "18 Sep 2026", participants: 150 },
      { id: "w-2", title: "Hands-on Clinical Trial GCP Protocols in Ayush Research", instructor: "CCRAS Senior Fellows", date: "25 Sep 2026", participants: 230 }
    ],
    guestLectures: [
      { id: "gl-1", title: "Keynote: Transitioning Traditional Ayush Formulations into Global Phytomedicine Markets", speaker: "Dr. Anand Prakash (VP R&D, Himalaya Wellness)", date: "12 Sep 2026", status: "Upcoming Stream" },
      { id: "gl-2", title: "Keynote: Scopus Ethnopharmacology Research & DST Grant Writing", speaker: "Dr. A. Sharma (AICTE-AYUSH Senior Fellow)", date: "20 Sep 2026", status: "Upcoming Stream" }
    ],
    innovationChallenges: [
      { id: "ic-1", title: "Automated HPLC Spectroscopic Assay & Botanical Standardization", partner: "Himalaya Wellness R&D", reward: "₹25,000 Prize + Fast-Track Shortlist", status: "Active Submissions" },
      { id: "ic-2", title: "Digital Repertory Search & Symptom Matching System", partner: "Willmar Schwabe India", reward: "Verified Repertory Badge + ₹15,000 Award", status: "Active Submissions" }
    ],
    liveProjects: [
      { id: "lp-1", title: "Polyherbal Phytochemical Synergy Telemetry Engine", company: "Himalaya Wellness R&D", studentTeamSize: 4, leadFaculty: "Dr. Radhakrishnan V", milestone: "Sprint 3: HPLC Validation" },
      { id: "lp-2", title: "Pranayama HRV Bio-Telemetry Clinical Dataset", company: "National Institute of Naturopathy", studentTeamSize: 3, leadFaculty: "Dr. Anitha S", milestone: "Sprint 2: ANS Telemetry" }
    ]
  }
};

export const industryData = {
  activeOpportunitiesCount: 14,
  matchingCandidatePool: 210,
  institutionPartners: 10,

  matchingCandidates: [
    {
      id: "cand-1",
      name: "Indresh S",
      degree: "BAMS (Ayurveda 2026)",
      readinessScore: 88,
      matchLabel: "Strong match",
      skills: ["Herbal Standardization (HPLC)", "Clinical Phytomedicine Analytics", "Ayush Pharmacovigilance", "Inter-disciplinary Collaboration"],
      evidence: "Built Herbal Formulation Quality Telemetry & HPLC Standardization Project (Verified)",
      topStrength: "HPLC Chromatographic Fingerprinting & Phytomedicine"
    },
    {
      id: "cand-2",
      name: "Meera Krishnan",
      degree: "BSMS (Siddha 2026)",
      readinessScore: 86,
      matchLabel: "Strong match",
      skills: ["Siddha Gunapadam Formulations", "Varmam Diagnostics", "Herbal Standardization (HPLC)", "Ayush EHR Records"],
      evidence: "Gunapadam Herbal Marker Identification Research Fellow",
      topStrength: "Siddha Gunapadam Drug Standardization & Varmam"
    },
    {
      id: "cand-3",
      name: "Rohan Varma",
      degree: "BUMS (Unani 2026)",
      readinessScore: 78,
      matchLabel: "Good match",
      skills: ["Unani Ilmul Advia Pharmacology", "Botanical Authentication", "Ayush Pharmacovigilance"],
      evidence: "Hamdard Unani Herb Extraction Quality Monitor",
      topStrength: "Unani Ilmul Advia Extraction Optimization"
    },
    {
      id: "cand-4",
      name: "Ananya Rao",
      degree: "BHMS (Homeopathy 2025)",
      readinessScore: 94,
      matchLabel: "Strong match",
      skills: ["Homeopathic Repertorization", "Symptom Correlation Analytics", "Ayush EHR Records"],
      evidence: "Published Open-Source Digital Homeopathic Repertory Engine",
      topStrength: "Digital Repertory Analytics & Symptom Correlation"
    },
    {
      id: "cand-5",
      name: "Kavya Nair",
      degree: "BNYS (Yoga & Naturopathy 2026)",
      readinessScore: 84,
      matchLabel: "Strong match",
      skills: ["Yoga Autonomic Bio-Telemetry", "Physiological Stress Monitoring", "Clinical Naturopathy Protocols"],
      evidence: "Pranayama Autonomic Bio-Telemetry Pipeline Project",
      topStrength: "Therapeutic Yoga HRV Autonomic Telemetry"
    }
  ],

  collaborations: [
    {
      id: "col-1",
      title: "Faculty Development Program: Phytomedicine & Chromatographic HPLC Standardization",
      type: "Faculty Training",
      duration: "2 weeks",
      mode: "Hybrid",
      provider: "Himalaya Wellness R&D",
      interestedCount: 18,
      status: "Open for Registrations",
      description: "Equip university faculty with modern HPLC chromatographic fingerprinting, spectroscopic assay verification, and Ayush GCP clinical trial standards."
    },
    {
      id: "col-2",
      title: "Guest Lecture Series: Clinical Homeopathic Repertorization & Digital Health",
      type: "Guest Lecture",
      duration: "3 Virtual Sessions",
      mode: "Virtual",
      provider: "Willmar Schwabe India",
      interestedCount: 26,
      status: "Scheduled",
      description: "Senior homeopathic research leaders share real-world digital repertory symptom correlation models, organon principles, and clinical trial documentation."
    },
    {
      id: "col-3",
      title: "Capstone Industry Live Project: Unani & Siddha Formulation Quality Assurance",
      type: "Live Project",
      duration: "8 weeks",
      mode: "Hybrid",
      provider: "Hamdard & SKM Siddha R&D",
      interestedCount: 22,
      status: "Accepting Student Batches",
      description: "Student teams build drug extraction quality checks and botanical standardization SOPs under guidance from senior pharmacologists."
    }
  ]
};

export const skillsCatalog = [
  {
    category: "Ayurveda & Phytomedicine",
    description: "Core technical and laboratory skills for botanical marker identification, chromatographic assays, and classical Ayurvedic formulation science.",
    skillsList: ["Herbal Standardization (HPLC)", "Clinical Phytomedicine Analytics", "Classical Rasa Shastra Formulations", "Dravyaguna Herbology", "Botanical Spectroscopy", "Ayurvedic Pharmacovigilance"]
  },
  {
    category: "Yoga & Naturopathy Sciences",
    description: "Competencies focused on autonomic nervous system telemetry, HRV physiological stress monitoring, and clinical Naturopathy therapies.",
    skillsList: ["Yoga Autonomic Bio-Telemetry", "Physiological Stress Monitoring", "Clinical Naturopathy Protocols", "Hydrotherapy & Clinical Dietetics", "Kriyas & Mind-Body Telemetry"]
  },
  {
    category: "Unani & Siddha Systems",
    description: "Pharmacology, drug standardization, and therapeutic diagnostic techniques in classical Unani and Siddha medicine.",
    skillsList: ["Unani Ilmul Advia Pharmacology", "Siddha Gunapadam Formulations", "Varmam Therapy Diagnostics", "Moalajat Clinical Protocol", "Herbal Extraction Optimization"]
  },
  {
    category: "Homeopathy & Repertorization",
    description: "Digital repertory rubric analytics, constitutional remedy correlation, and Organon posology standards.",
    skillsList: ["Homeopathic Repertorization", "Symptom Correlation Analytics", "Organon & Posology Principles", "Homeopathic Pharmacy Quality", "Constitutional Potency Analysis"]
  },
  {
    category: "Ayush Research & Regulatory Compliance",
    description: "Essential clinical research, digital health records, and regulatory standards for global Ayush evidence-based medicine.",
    skillsList: ["Ayush EHR & Digital Records", "Bio-statistical Clinical Trial Analysis", "Ayush GCP/GMP Regulatory Compliance", "Ayush Research Grant Proposal Writing", "Scopus Ethnopharmacology Writing"]
  }
];

export const careerPaths = [
  {
    id: "path-phytomedicine-analyst",
    role: "Phytomedicine & Herbal Quality Analyst",
    overview: "Standardizes botanical plant extracts, conducts chromatographic HPLC assays, and validates batch-to-batch consistency for Ayurvedic formulations.",
    coreSkills: ["Herbal Standardization (HPLC)", "Clinical Phytomedicine Analytics", "Botanical Spectroscopy", "Ayurvedic Pharmacovigilance"],
    steps: [
      { step: "01 — Botanical & Assay Foundation", detail: "Master herbology taxonomies, extraction methods, and UV-spectroscopy fundamentals." },
      { step: "02 — Chromatographic Core", detail: "Perform HPLC fingerprinting, identify marker retention times (Rf values), and compute peak areas." },
      { step: "03 — Clinical Standardization", detail: "Validate raw material quality according to Ayurvedic Pharmacopoeia of India (API) standards." },
      { step: "04 — Lab Portfolio Evidence", detail: "Execute a polyherbal extract standardization project and document assay benchmarks." },
      { step: "05 — Opportunity Readiness", detail: "Apply for Phytomedicine R&D Internships matching your HPLC & formulation proficiency." }
    ]
  },
  {
    id: "path-repertory-data-specialist",
    role: "Clinical Ayush Data Researcher & Repertory Specialist",
    overview: "Evaluates patient clinical trial outcomes, digital homeopathic repertory rubrics, and Ayush EHR patient records.",
    coreSkills: ["Homeopathic Repertorization", "Symptom Correlation Analytics", "Ayush EHR & Digital Records", "Bio-statistical Clinical Trial Analysis"],
    steps: [
      { step: "01 — Clinical Repertory Core", detail: "Understand Kent, Boericke, and Synthetic repertory rubric structures." },
      { step: "02 — Telemetry & EHR Schemas", detail: "Structure patient symptom records into standardized Ayush digital schemas." },
      { step: "03 — Symptom Matrix Correlation", detail: "Develop mathematical weighting algorithms for remedy ranking." },
      { step: "04 — Clinical Trial GCP", detail: "Learn Ayush GCP guidelines and adverse event documentation." },
      { step: "05 — Portfolio & Match", detail: "Create a clinical repertory case study and match with Ayush Research Fellowships." }
    ]
  },
  {
    id: "path-yoga-telemetry-specialist",
    role: "Therapeutic Yoga & Bio-Telemetry Specialist",
    overview: "Monitors autonomic nervous system responses, HRV stress indicators, and physiological outcomes during Naturopathy and Yoga therapies.",
    coreSkills: ["Yoga Autonomic Bio-Telemetry", "Physiological Stress Monitoring", "Clinical Naturopathy Protocols", "Bio-statistical Clinical Trial Analysis"],
    steps: [
      { step: "01 — Autonomic Physiology", detail: "Master HRV time-domain (SDNN, RMSSD) and frequency-domain parasympathetic indicators." },
      { step: "02 — Telemetry Sensors", detail: "Collect real-time HRV and GSR data during Pranayama and Meditation protocols." },
      { step: "03 — Clinical Outcome Analysis", detail: "Map physiological changes to therapeutic Naturopathy treatment durations." },
      { step: "04 — Portfolio Verification", detail: "Publish an open-source Yoga telemetry case study with clinical statistics." },
      { step: "05 — Industry Placement", detail: "Match with research positions at NIN, AIIA, or Ayush health-tech centers." }
    ]
  }
];

export const assessmentQuestions = [
  {
    id: 1,
    skill: "Herbal Standardization (HPLC)",
    question: "How comfortable are you performing HPLC chromatographic assays and botanical marker standardization for Ayurvedic/herbal formulations?",
    options: [
      { label: "Beginner", description: "I understand TLC concepts, but struggle with HPLC column operation.", level: "Emerging" },
      { label: "Familiar", description: "I can run HPLC assays with guidance or reference SOPs.", level: "Developing" },
      { label: "Comfortable", description: "I perform HPLC fingerprinting and peak area calculations independently.", level: "Proficient" },
      { label: "Advanced", description: "I develop HPLC method validations, marker isolation, and API compliance SOPs.", level: "Strong" }
    ]
  },
  {
    id: 2,
    skill: "Clinical Phytomedicine Analytics",
    question: "When evaluating clinical trial data for herbal formulations, how do you structure statistical efficacy analysis?",
    options: [
      { label: "Uncertain", description: "I am not familiar with clinical trial data metrics.", level: "Emerging" },
      { label: "Basic Awareness", description: "I understand basic patient outcome tables, but haven't used bio-statistics.", level: "Developing" },
      { label: "Trial Cohort Analysis", description: "I evaluate GCP trial datasets and compute statistical confidence intervals.", level: "Proficient" },
      { label: "Research Principal Lead", description: "I design clinical trial protocols, hypothesis testing, and Scopus publication reports.", level: "Strong" }
    ]
  },
  {
    id: 3,
    skill: "Yoga Autonomic Bio-Telemetry",
    question: "How confident are you analyzing autonomic nervous system HRV (Heart Rate Variability) telemetry during therapeutic Yoga sessions?",
    options: [
      { label: "Needs Practice", description: "I prefer qualitative patient observations over bio-telemetry sensors.", level: "Emerging" },
      { label: "Developing", description: "I can record basic pulse rate changes if provided with sensor software.", level: "Developing" },
      { label: "Confident", description: "I analyze SDNN, RMSSD, and LF/HF ratios during Pranayama independently.", level: "Proficient" },
      { label: "Strong Lead", description: "I design autonomic telemetry clinical protocols and present physiological findings.", level: "Strong" }
    ]
  },
  {
    id: 4,
    skill: "Homeopathic Repertorization",
    question: "What is your proficiency level in using digital repertory tools for complex constitutional symptom correlation?",
    options: [
      { label: "No Experience", description: "I only use paper repertory books.", level: "Emerging" },
      { label: "Basic Overview", description: "I can look up basic rubrics in digital software.", level: "Developing" },
      { label: "Hands-on Repertorization", description: "I build multi-rubric symptom matrices and calculate remedy scores.", level: "Proficient" },
      { label: "Advanced Clinical Logic", description: "I optimize repertory weighting algorithms and clinical decision systems.", level: "Strong" }
    ]
  },
  {
    id: 5,
    skill: "Ayush Pharmacovigilance & GCP",
    question: "When evaluating adverse drug reactions (ADR) in herbal medicine clinical trials, what is your standard protocol?",
    options: [
      { label: "Seek Assistance", description: "I report observations directly to senior physicians.", level: "Emerging" },
      { label: "Basic Inspection", description: "I record ADR reports on standard WHO-CCRAS reporting forms.", level: "Developing" },
      { label: "Structured Causality Assessment", description: "I apply Naranjo / WHO-UMC causality scales to evaluate herbal ADRs.", level: "Proficient" },
      { label: "National Audit Lead", description: "I audit multi-center trial pharmacovigilance files and file regulatory safety reports.", level: "Strong" }
    ]
  }
];

// Academician / Faculty Persona Dataset (AYUSH Systems)
export const initialAcademician = {
  id: "prof-201",
  name: "Dr. Radhakrishnan V",
  title: "Dr. Radhakrishnan V",
  designation: "Associate Professor & Head of Ayush Phytomedicine Research",
  department: "Ayurvedic Medicine & Phytomedicine Research",
  institution: "All India Institute of Ayurveda (AIIA), New Delhi",
  email: "radhakrishnan.v@aiia.gov.in",
  specialization: "Phytomedicine Analytics, Ayush Clinical Trial Design, Scopus Ethnopharmacology, OBE Curriculum Design",
  experienceYears: "14 Years",
  readinessIndex: 94,

  // Competency Twin for Faculty
  facultyTwin: {
    researchOutputScore: 92,
    industryImmersionScore: 94,
    pedagogyObeScore: 96,
    scopusPublicationsCount: 18,
    patentsFiledCount: 4,
    grantFundingRaised: "₹55,00,000"
  },

  // Active FDP (Faculty Development Program)
  activeFdp: {
    id: "fdp-101",
    title: "AICTE-ATAL Advanced FDP: Modern Bio-analytical Methods, Phytomedicine & Ayush Clinical Trial Protocols",
    organizer: "All India Institute of Ayurveda & Himalaya Wellness R&D",
    startDate: "01 Sep 2026",
    endDate: "14 Sep 2026",
    status: "In Progress (Week 2)",
    attendancePercentage: 94,
    currentPhase: "Research & Grant Proposal Drafting",
    quizScoreAverage: 90,
    finalExamStatus: "Eligible (Score: 88%)",
    certificateStatus: "Verified & Issued (AICTE-ATAL Aligned)",
    
    // Pillar 1: Daily Activities & Learning Sessions
    dailyActivities: [
      { day: "Day 1", topic: "Expert Lecture: Modern Phytomedicine & Machine Learning Trends in Ayush Medicine", status: "Completed", speaker: "Dr. A. Sharma (AICTE-AYUSH Senior Fellow)" },
      { day: "Day 2", topic: "Hands-On Lab Work: HPLC Chromatographic Assay & Botanical Fingerprinting Toolkit", status: "Completed", mentor: "Himalaya Wellness R&D Team" },
      { day: "Day 3", topic: "Case Study Discussion: Clinical Efficacy & Pharmacovigilance in Herbal Formulations", status: "Completed", lead: "CCRAS Senior Clinical Director" },
      { day: "Day 4", topic: "Micro-Teaching Session: Peer-reviewed 15-min sample lesson on Bio-statistical Analysis & Ayush EHR Data", status: "Verified & Evaluated (Score: 94/100)", feedback: "Exceptional clarity in explaining chromatographic data structures to BAMS medical students." }
    ],

    // Pillar 2: Upgrading Teaching Methods (Pedagogical Training)
    pedagogicalTraining: [
      { module: "Digital Ayush Virtual Labs & Phytochemistry Simulators", tool: "AIIA Virtual Pharmacognosy Lab & Bio-Simulators", status: "Completed", score: "Pass" },
      { module: "Outcome-Based Education (OBE) & Bloom's Taxonomy in AYUSH Medical Curricula", framework: "Designing Student-Centric Ayush Exam Question Papers & Mapping CO-PO Attainment", status: "Completed", score: "Verified (Strong)" }
    ],

    // Pillar 3: Research and Academic Writing
    researchAndWriting: [
      { title: "Scopus & Web of Science Paper Drafting", paperTopic: "Machine Learning Models for Predicting Phytochemical Synergy in Ayurvedic Polyherbal Formulations", status: "Draft Submitted", journal: "Journal of Ethnopharmacology & Tech" },
      { title: "Government Grant Proposal Drafting", agency: "DST & AYUSH Research Promotion Scheme (RPS)", status: "Approved by Industry Mentor", grantAmount: "₹25,00,000" },
      { title: "IPR & Patent Filing", patentName: "Automated Spectroscopic Assay Analysis Algorithm for Ayurvedic Formulations", status: "Provisional Patent Drafted" }
    ],

    // Pillar 4: Evaluation and Certification
    evaluationAndCertification: {
      quizzes: [
        { title: "Quiz 1: Phytomedicine & HPLC Chromatographic Assays", score: 92, total: 100, date: "03 Sep 2026", status: "Passed" },
        { title: "Quiz 2: OBE & Ayush Outcome Question Paper Design", score: 88, total: 100, date: "07 Sep 2026", status: "Passed" },
        { title: "Quiz 3: Scopus Ethnopharmacology Methodology & Grant Standards", score: 90, total: 100, date: "10 Sep 2026", status: "Passed" }
      ],
      finalExamScore: 88,
      minPassingThreshold: 60,
      attendanceRecord: "94% (11 of 12 sessions attended)",
      certificateIssued: true,
      certificateId: "AICTE-ATAL-FDP-2026-AYUSH-9942",
      issuedBy: "All India Institute of Ayurveda & Himalaya Wellness"
    }
  },

  // Sabbaticals & Industrial Training Records
  sabbaticalsAndInternships: [
    {
      id: "sab-1",
      title: "Industrial Sabbatical: Phytomedicine R&D & Clinical Standardization",
      company: "Himalaya Wellness R&D Labs",
      location: "Bengaluru · Hybrid",
      duration: "6 Months",
      period: "Jan 2026 – Jun 2026",
      status: "Completed & Verified",
      mentor: "Dr. Vikram Seth (Chief Phytomedicine Scientist, Himalaya)",
      mentorFeedback: "Dr. Radhakrishnan demonstrated outstanding technical leadership during his sabbatical. He co-developed our HPLC marker standardization algorithms and designed a bridge elective for undergraduate BAMS students.",
      rating: "5.0 / 5.0",
      outcomes: [
        "Co-authored 2 Scopus-indexed research papers in Ethnopharmacology",
        "Designed 1 Joint Industry-Academia Phytomedicine Elective Course",
        "Trained 50 Junior Faculty Members across partner Ayush institutions"
      ]
    },
    {
      id: "sab-2",
      title: "Faculty Industrial Training: Homeopathic Repertory & Digital Health Systems",
      company: "Willmar Schwabe India R&D",
      location: "Noida · On-site",
      duration: "4 Weeks",
      period: "May 2025",
      status: "Completed & Verified",
      mentor: "Dr. Anand Prakash (Principal Repertory Scientist)",
      mentorFeedback: "Strong engagement with digital repertory symptom correlation and Ayush EHR integration frameworks.",
      rating: "4.9 / 5.0",
      outcomes: [
        "Upgraded Institution Clinical Repertory Lab syllabus",
        "Published 1 Technical Whitepaper on Digital Ayush Pharmacovigilance"
      ]
    }
  ]
};

// Opportunities List for Academicians (AYUSH Systems)
export const initialAcademicianOpportunities = [
  {
    id: "opp-acad-1",
    title: "AICTE-ATAL Advanced FDP on Modern Bio-analytical Methods, Phytomedicine & Ayush Clinical Trials",
    provider: "All India Institute of Ayurveda & Himalaya Wellness R&D",
    type: "FDP Program",
    duration: "2 Weeks (Online + Hands-on Lab)",
    stipendOrGrant: "AICTE-AYUSH Sponsored & Certified",
    eligibility: "BAMS, BNYS, BUMS, BSMS, BHMS & Pharmacy Faculty Members",
    deadline: "15 Sep 2026",
    description: "Intensive 2-week Faculty Development Program covering expert lectures, HPLC lab work, micro-teaching feedback, Scopus paper writing, DST grant proposal drafting, and AICTE-ATAL certification.",
    tags: ["FDP", "Phytomedicine", "HPLC Standardization", "OBE Framework", "Scopus Paper"]
  },
  {
    id: "opp-acad-2",
    title: "6-Month Industrial Research Sabbatical in Phytomedicine & Ayush Drug R&D",
    provider: "Himalaya Wellness R&D Division",
    type: "Industrial Sabbatical",
    duration: "6 Months (Full-Time or Hybrid)",
    stipendOrGrant: "₹65,00,000 Grant / Research Fellowship",
    eligibility: "Associate Professors & Professors with 5+ years experience in Ayush systems",
    deadline: "30 Sep 2026",
    description: "Work side-by-side with Himalaya R&D leads on real-world herbal marker standardization datasets, co-file patents, and bring industry best practices back to academic curricula.",
    tags: ["Sabbatical", "Industry Immersion", "Patents", "R&D"]
  },
  {
    id: "opp-acad-3",
    title: "Faculty Industrial Training: Digital Homeopathic Repertory & Clinical Analytics",
    provider: "Willmar Schwabe India R&D Labs",
    type: "Industrial Training",
    duration: "4 Weeks (Summer Break)",
    stipendOrGrant: "Fully Sponsored + Honorarium",
    eligibility: "BHMS, BSMS & BAMS Faculty Members",
    deadline: "20 Oct 2026",
    description: "Hands-on industrial immersion on digital repertory rubric algorithms, symptom correlation analytics, and enterprise Ayush EHR documentation practices.",
    tags: ["Industrial Training", "Repertory Analytics", "Digital Health"]
  }
];
