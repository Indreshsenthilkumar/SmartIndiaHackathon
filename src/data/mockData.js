// ALIGN — Academia–Industry Skill & Opportunity Network
// Realistic Centralized Demo Data Engine

export const initialStudent = {
  id: "student-101",
  rollNumber: "2026-IT-101",
  name: "Indresh S",
  degree: "B.Tech Information Technology",
  institution: "National Institute of Technology Consortium",
  gradYear: "2026",
  email: "indresh.s@university.edu",
  targetCareer: "Product Management / Data Analytics",
  overallReadiness: 72,
  assessedSkillsCount: 12,
  strongMatchesCount: 8,
  applicationsCount: 3,

  // Feature 1: Competency Twin Metric (What You Know vs What You Can Build)
  competencyTwin: {
    overallScore: 75,
    knowledgeScore: 72, // Based on benchmark assessments
    buildScore: 78,     // Based on verified project & code complexity analysis
    analyzedReposCount: 2,
    verifiedSkillsCount: 6
  },

  analyzedProjects: [
    {
      id: "p-1",
      title: "User Engagement Telemetry Dashboard",
      repoUrl: "github.com/indresh/engagement-dash",
      languageComposition: "SQL (60%), JavaScript (25%), CSS (15%)",
      complexityScore: 84,
      practicalContribution: "92%",
      status: "Verified",
      verifiedSkills: ["SQL", "Product Analytics", "Figma & Wireframing"],
      summary: "Evaluated 10k user telemetry logs, identified 3 retention drop-off bottlenecks, and built interactive funnels."
    },
    {
      id: "p-2",
      title: "E-Commerce Cohort Analysis Pipeline",
      repoUrl: "github.com/indresh/cohort-pipeline",
      languageComposition: "Python (70%), SQL (30%)",
      complexityScore: 88,
      practicalContribution: "95%",
      status: "Verified",
      verifiedSkills: ["Python Fundamentals", "SQL", "Excel & Data Modeling"],
      summary: "Cleaned and processed 50k transaction records to compute 30-day user cohort survival curves."
    }
  ],

  submittedChallenges: ["chal-1"],

  // Qualitative proficiencies instead of fake decimals
  skills: [
    { id: "s-1", name: "SQL", category: "Data", proficiency: "Developing", demand: "High", evidence: "Analytics Case Study (GitHub verified)" },
    { id: "s-2", name: "Excel & Data Modeling", category: "Data", proficiency: "Strong", demand: "High", evidence: "Financial Modeling Workshop Certificate" },
    { id: "s-3", name: "Python Fundamentals", category: "Tech", proficiency: "Developing", demand: "High", evidence: "Data Cleaning Automation Script" },
    { id: "s-4", name: "Product Analytics", category: "Product", proficiency: "Developing", demand: "High", evidence: "Product Telemetry Spec Document" },
    { id: "s-5", name: "Figma & Wireframing", category: "Design", proficiency: "Strong", demand: "Medium", evidence: "Campus Portal Mobile UI Prototype" },
    { id: "s-6", name: "Power BI", category: "Data", proficiency: "Emerging", demand: "Medium", evidence: "Self-assessed introductory module" },
    { id: "s-7", name: "Communication", category: "Professional", proficiency: "Strong", demand: "High", evidence: "University Debate Lead & Seminar Speaker" },
    { id: "s-8", name: "Critical Thinking", category: "Professional", proficiency: "Strong", demand: "High", evidence: "Case Study Competition Finalist" },
    { id: "s-9", name: "Collaboration", category: "Professional", proficiency: "Strong", demand: "High", evidence: "Hackathon Team Captain" },
    { id: "s-10", name: "Problem Solving", category: "Professional", proficiency: "Strong", demand: "High", evidence: "Algorithmic Logic Lab Completion" },
    { id: "s-11", name: "Cloud Fundamentals", category: "Cloud", proficiency: "Emerging", demand: "Medium", evidence: "Self-assessed intro overview" },
    { id: "s-12", name: "A/B Testing Concepts", category: "Product", proficiency: "Emerging", demand: "Medium", evidence: "Self-assessed intro overview" }
  ],

  skillGaps: [
    {
      id: "gap-1",
      skill: "Product Analytics",
      current: "Developing",
      target: "Proficient",
      whyItMatters: "Required in 80% of target Product & Business Analyst internship listings.",
      recommendedAction: "Complete the 4-week Product Analytics Case Study Project.",
      priority: 1
    },
    {
      id: "gap-2",
      skill: "SQL Querying & Joins",
      current: "Developing",
      target: "Proficient",
      whyItMatters: "Most requested core technical skill across active sample industry listings.",
      recommendedAction: "Complete advanced SQL join lab & benchmark assessment.",
      priority: 2
    },
    {
      id: "gap-3",
      skill: "Product Experimentation (A/B Testing)",
      current: "Emerging",
      target: "Developing",
      whyItMatters: "Key differentiator for product analyst candidates during technical interviews.",
      recommendedAction: "Review A/B testing statistical fundamentals module.",
      priority: 3
    }
  ],

  nextBestAction: {
    title: "Complete Product Analytics Case Study",
    type: "Project Action",
    timeEstimate: "3-4 hours",
    impact: "+8% Target Readiness",
    description: "Build a product retention spec using sample telemetry data to bridge your top gap for Product Analyst roles."
  },

  applications: [
    {
      id: "app-1",
      opportunityId: "opp-1",
      role: "Product Analyst Intern",
      company: "Meridian Digital",
      location: "Chennai · Hybrid",
      duration: "3 months",
      appliedDate: "12 Aug 2026",
      status: "Under review",
      matchScore: 85,
      matchLabel: "Strong match",
      timeline: [
        { stage: "Submitted", date: "12 Aug 2026", completed: true },
        { stage: "Under Review", date: "16 Aug 2026", completed: true },
        { stage: "Skill Assessment", date: "Pending", completed: false },
        { stage: "Interview", date: "Pending", completed: false },
        { stage: "Outcome", date: "Pending", completed: false }
      ]
    },
    {
      id: "app-2",
      opportunityId: "opp-2",
      role: "Data Analyst Intern",
      company: "Northstar Technologies",
      location: "Bengaluru · Hybrid",
      duration: "6 months",
      appliedDate: "05 Aug 2026",
      status: "Interview",
      matchScore: 90,
      matchLabel: "Strong match",
      timeline: [
        { stage: "Submitted", date: "05 Aug 2026", completed: true },
        { stage: "Under Review", date: "08 Aug 2026", completed: true },
        { stage: "Skill Assessment", date: "12 Aug 2026", completed: true },
        { stage: "Interview", date: "20 Aug 2026 (Scheduled)", completed: true },
        { stage: "Outcome", date: "Pending", completed: false }
      ]
    }
  ],

  savedOpportunities: ["opp-2", "opp-4"],

  portfolio: {
    about: "Final-year IT student focused on product analytics, data-driven decision making, and bridging user experience with technical execution.",
    projects: [
      {
        id: "p-1",
        title: "User Engagement Telemetry Dashboard",
        description: "Built an interactive product telemetry mock dashboard evaluating user retention funnels.",
        skills: ["SQL", "Figma", "Excel"],
        link: "github.com/demo/engagement-dash",
        verified: true,
        complexityScore: 84
      },
      {
        id: "p-2",
        title: "E-Commerce Cohort Analysis Pipeline",
        description: "Analyzed 50k transaction records using Python & SQL to identify customer drop-off patterns.",
        skills: ["Python", "SQL", "Excel"],
        link: "github.com/demo/cohort-analysis",
        verified: true,
        complexityScore: 88
      }
    ],
    certifications: [
      {
        id: "c-1",
        name: "Google Data Analytics Professional Certificate",
        issuer: "Coursera / Google",
        date: "May 2026",
        verified: true,
        credentialId: "CERT-GA-88329"
      },
      {
        id: "c-2",
        name: "SQL for Data Science & Business Intelligence",
        issuer: "University Consortium / NPTEL",
        date: "Mar 2026",
        verified: true,
        credentialId: "CERT-UC-44021"
      },
      {
        id: "c-3",
        name: "AICTE-ATAL Machine Learning & Data Telemetry",
        issuer: "AICTE-ATAL / AIIA",
        date: "Aug 2026",
        verified: true,
        credentialId: "CERT-ATAL-2026-99"
      }
    ],
    experiences: [
      {
        id: "e-1",
        role: "Junior Product Researcher",
        organization: "Campus Innovation Lab",
        period: "Jan 2026 – May 2026",
        details: "Synthesized feedback from 400+ students to iterate campus mobile portal navigation specs."
      }
    ],
    achievements: [
      { title: "National Ayush Tech Hackathon 2026 — Top 5% Finalist", date: "Jul 2026", verified: true },
      { title: "Competency Twin High Build Score Badge (88/100)", date: "Aug 2026", verified: true },
      { title: "Published Open-Source Cohort Analysis Case Study", date: "May 2026", verified: true }
    ],

    // Secure Document Management Vault
    documents: [
      { id: "doc-1", title: "Indresh_S_Product_Analytics_Resume_2026.pdf", category: "Resume", size: "245 KB", uploadDate: "01 Sep 2026", status: "Verified & Encrypted", icon: "FileText" },
      { id: "doc-2", title: "Google_Data_Analytics_Credential_Cert.pdf", category: "Certification", size: "512 KB", uploadDate: "15 May 2026", status: "Issuer Verified", icon: "Award" },
      { id: "doc-3", title: "Campus_Innovation_Lab_Internship_Completion_Report.pdf", category: "Internship Report", size: "1.2 MB", uploadDate: "05 Jun 2026", status: "Industry Signed", icon: "Briefcase" },
      { id: "doc-4", title: "BTech_IT_Semester_1_to_6_Official_Transcripts.pdf", category: "Academic Transcript", size: "2.4 MB", uploadDate: "10 Aug 2026", status: "Digilocker Verified", icon: "ShieldCheck" }
    ],

    // Platform & Institutional Integrations
    integrations: [
      { provider: "Coursera", category: "Learning Platform", status: "Active Sync", lastSync: "2 hours ago", logo: "Coursera" },
      { provider: "NPTEL / Swayam", category: "Learning Platform", status: "Active Sync", lastSync: "Yesterday", logo: "NPTEL" },
      { provider: "Google Career Certificates", category: "Certification Provider", status: "Verified Feed", lastSync: "Connected", logo: "Google" },
      { provider: "AWS Academy", category: "Certification Provider", status: "Verified Feed", lastSync: "Connected", logo: "AWS" },
      { provider: "Digilocker National Repository", category: "Institutional Database", status: "Official API Verified", lastSync: "Connected", logo: "Digilocker" },
      { provider: "University ERP System", category: "Institutional Database", status: "Active Student Sync", lastSync: "Real-Time", logo: "University" }
    ]
  }
};

// Feature 2: Industry Challenge Engine Dataset
export const initialChallenges = [
  {
    id: "chal-1",
    title: "Enterprise Cohort Retention Data Pipeline",
    industryPartner: "Meridian Digital",
    domain: "Data Analytics & SQL",
    difficulty: "Intermediate",
    deadline: "15 Sep 2026",
    stipendOrReward: "Verified SQL & Pipeline Badge + Fast-track Interview Shortlist",
    skillsVerified: ["SQL", "Product Analytics", "Data Modeling"],
    description: "Build an automated cohort retention calculation query that processes 100k simulated user event logs and produces weekly user drop-off metrics.",
    problemDetails: [
      "Process raw multi-table user event logs with timestamps.",
      "Calculate 7-day and 30-day user cohort retention percentages.",
      "Optimize SQL query execution time under 500ms.",
      "Deliver a clean Markdown documentation report with query benchmarks."
    ],
    submissionsCount: 14,
    status: "Active"
  },
  {
    id: "chal-2",
    title: "Campus Mobile Portal UX Teardown & Wireframes",
    industryPartner: "Kite Studios",
    domain: "Product & UI/UX Design",
    difficulty: "Beginner",
    deadline: "20 Sep 2026",
    stipendOrReward: "Verified Wireframing & UX Spec Badge",
    skillsVerified: ["Figma & Wireframing", "User Research", "Product Analytics"],
    description: "Conduct a heuristic evaluation of higher-education student mobile onboarding flows and prototype an interactive 5-step student registration screen.",
    problemDetails: [
      "Identify top 3 user friction points in traditional registration forms.",
      "Draft clickable high-fidelity Figma mobile wireframe prototypes.",
      "Submit a 5-page product specification document detailing UX decisions."
    ],
    submissionsCount: 8,
    status: "Active"
  },
  {
    id: "chal-3",
    title: "Microservices Container Log Parser Daemon",
    industryPartner: "Vertex Systems",
    domain: "Cloud & Systems Scripting",
    difficulty: "Advanced",
    deadline: "25 Sep 2026",
    stipendOrReward: "Verified Python & Cloud Badge + ₹10,000 Prize Pool",
    skillsVerified: ["Python Fundamentals", "Linux", "Cloud Fundamentals"],
    description: "Write a lightweight Python automation script that collects Docker container logs, parses exception tracebacks, and exports structured JSON metrics.",
    problemDetails: [
      "Stream log files asynchronously without blocking main process.",
      "Extract error patterns using regex and group frequency counters.",
      "Expose clean JSON summary endpoints for health checks."
    ],
    submissionsCount: 12,
    status: "Active"
  }
];

// Feature 3: Searchable Student Registry for Institutions (Roll No / Student ID Lookup)
export const searchableStudents = {
  "2026-IT-101": {
    rollNumber: "2026-IT-101",
    name: "Indresh S",
    degree: "B.Tech Information Technology",
    department: "Information Technology",
    gradYear: "2026",
    cgpa: "8.75 / 10",
    overallReadiness: 72,
    competencyTwin: {
      overallScore: 75,
      knowledgeScore: 72,
      buildScore: 78,
      analyzedReposCount: 2
    },
    topSkills: [
      { name: "SQL", level: "Developing", evidence: "User Engagement Dashboard (GitHub Verified)" },
      { name: "Excel & Data Modeling", level: "Strong", evidence: "Financial Workshop Cert" },
      { name: "Communication", level: "Strong", evidence: "Debate Team Lead" },
      { name: "Figma & Wireframing", level: "Strong", evidence: "Mobile Portal UX Spec" }
    ],
    skillGaps: [
      { skill: "Product Analytics", current: "Developing", target: "Proficient", action: "Complete 4-week Analytics Case Study" },
      { skill: "SQL Querying & Joins", current: "Developing", target: "Proficient", action: "Enroll in SQL Bridge Lab" },
      { skill: "A/B Testing Concepts", current: "Emerging", target: "Developing", action: "Review Statistical Fundamentals" }
    ],
    githubProjects: [
      { title: "User Engagement Telemetry Dashboard", repoUrl: "github.com/indresh/engagement-dash", complexity: "84/100", lang: "SQL, JS" },
      { title: "E-Commerce Cohort Analysis Pipeline", repoUrl: "github.com/indresh/cohort-pipeline", complexity: "88/100", lang: "Python, SQL" }
    ],
    certifications: [
      "Google Data Analytics Professional Certificate (Verified)",
      "SQL for Data Science & BI (Verified)"
    ],
    completedChallenges: [
      { title: "Enterprise Cohort Retention Data Pipeline", partner: "Meridian Digital", status: "Verified & Badge Awarded" }
    ],
    activeInternship: "Junior Product Researcher at Campus Innovation Lab",
    recommendedActions: [
      "Assign SQL Bridge Program (Pre-final batch)",
      "Schedule Product Analytics Lab Mentorship"
    ]
  },

  "2026-CSE-142": {
    rollNumber: "2026-CSE-142",
    name: "Meera Krishnan",
    degree: "B.Tech Computer Science",
    department: "Computer Science",
    gradYear: "2026",
    cgpa: "9.20 / 10",
    overallReadiness: 84,
    competencyTwin: {
      overallScore: 86,
      knowledgeScore: 84,
      buildScore: 88,
      analyzedReposCount: 3
    },
    topSkills: [
      { name: "SQL", level: "Proficient", evidence: "Open-Source Query Optimization Repo" },
      { name: "Python Fundamentals", level: "Strong", evidence: "Machine Learning Pipeline" },
      { name: "Product Analytics", level: "Proficient", evidence: "Campus Portal Telemetry" }
    ],
    skillGaps: [
      { skill: "Cloud Fundamentals", current: "Developing", target: "Proficient", action: "Enroll in Cloud Certification Drive" }
    ],
    githubProjects: [
      { title: "ML Customer Attrition Engine", repoUrl: "github.com/meera/attrition-engine", complexity: "92/100", lang: "Python" },
      { title: "Distributed Task Queue", repoUrl: "github.com/meera/task-queue", complexity: "89/100", lang: "C++, Python" }
    ],
    certifications: [
      "AWS Certified Cloud Practitioner (Verified)",
      "Advanced Python & Algorithms (Verified)"
    ],
    completedChallenges: [
      { title: "Campus Mobile Portal UX Teardown", partner: "Kite Studios", status: "Verified & Badge Awarded" },
      { title: "Microservices Container Log Parser", partner: "Vertex Systems", status: "Verified & Badge Awarded" }
    ],
    activeInternship: "Backend Engineering Intern at Northstar Tech",
    recommendedActions: [
      "Recommend for Direct Industry Placement Shortlist"
    ]
  },

  "2026-ECE-208": {
    rollNumber: "2026-ECE-208",
    name: "Rohan Varma",
    degree: "B.Tech Electronics & Comm",
    department: "Electronics & Comm",
    gradYear: "2026",
    cgpa: "8.10 / 10",
    overallReadiness: 76,
    competencyTwin: {
      overallScore: 78,
      knowledgeScore: 76,
      buildScore: 80,
      analyzedReposCount: 2
    },
    topSkills: [
      { name: "Python Fundamentals", level: "Proficient", evidence: "IoT Sensor Logger" },
      { name: "Linux System Admin", level: "Proficient", evidence: "Raspberry Pi Automation Script" }
    ],
    skillGaps: [
      { skill: "SQL Querying", current: "Emerging", target: "Developing", action: "Assign SQL Bridge Program" },
      { skill: "Power BI", current: "Emerging", target: "Developing", action: "BI Workshop Assignment" }
    ],
    githubProjects: [
      { title: "IoT Environment Monitor", repoUrl: "github.com/rohan/iot-monitor", complexity: "82/100", lang: "Python, C++" }
    ],
    certifications: [
      "Embedded Systems & IoT Specialization"
    ],
    completedChallenges: [
      { title: "Microservices Container Log Parser", partner: "Vertex Systems", status: "Verified & Badge Awarded" }
    ],
    activeInternship: "Embedded Systems Intern at Vertex Systems",
    recommendedActions: [
      "Assign SQL Bridge Program for ECE batch"
    ]
  },

  "2026-DS-305": {
    rollNumber: "2026-DS-305",
    name: "Ananya Rao",
    degree: "B.Sc Data Science",
    department: "Information Technology",
    gradYear: "2025",
    cgpa: "9.45 / 10",
    overallReadiness: 92,
    competencyTwin: {
      overallScore: 94,
      knowledgeScore: 92,
      buildScore: 96,
      analyzedReposCount: 4
    },
    topSkills: [
      { name: "SQL", level: "Strong", evidence: "Complex Window Function Benchmarks" },
      { name: "Power BI", level: "Strong", evidence: "Published Financial Dashboard" },
      { name: "Python Fundamentals", level: "Strong", evidence: "Pandas Data Wrangling" }
    ],
    skillGaps: [
      { skill: "A/B Testing Concepts", current: "Developing", target: "Proficient", action: "Advanced Statistical Fellowship" }
    ],
    githubProjects: [
      { title: "Global Economic Data Dashboard", repoUrl: "github.com/ananya/econ-dash", complexity: "95/100", lang: "Python, Power BI" }
    ],
    certifications: [
      "Microsoft Certified: Power BI Data Analyst Associate (Verified)",
      "Google Data Analytics Professional Certificate (Verified)"
    ],
    completedChallenges: [
      { title: "Enterprise Cohort Retention Data Pipeline", partner: "Meridian Digital", status: "Verified & Top Performer" }
    ],
    activeInternship: "Data Science Trainee at Apex Analytics",
    recommendedActions: [
      "Fast-track to High-Value Industry Placement"
    ]
  }
};

export const initialOpportunities = [
  {
    id: "opp-1",
    title: "Product Analyst Intern",
    company: "Meridian Digital",
    location: "Chennai",
    workMode: "Hybrid",
    type: "Internship",
    duration: "3 months",
    stipend: "₹25,000 / mo",
    experienceLevel: "Entry-Level / Student",
    requiredSkills: ["SQL", "Product Analytics", "Excel", "Communication"],
    matchedSkills: ["SQL", "Excel", "Communication"],
    developingSkills: ["Product Analytics"],
    missingSkills: ["A/B Testing Concepts"],
    matchScore: 85,
    matchLabel: "Strong match",
    eligibility: "B.Tech / B.E / M.Sc (2025–2026 batch)",
    description: "Work directly with our product analytics team to evaluate feature engagement, write SQL queries for user cohorts, and present metrics to cross-functional leads.",
    responsibilities: [
      "Query relational databases to extract daily active user cohort metrics.",
      "Build retention funnel reports in Excel and analytics dashboards.",
      "Collaborate with engineering and product design to refine feature specs.",
      "Present weekly metric summaries to product managers."
    ],
    postedDate: "2 days ago",
    applicantsCount: 42
  },
  {
    id: "opp-2",
    title: "Data Analyst Intern",
    company: "Northstar Technologies",
    location: "Bengaluru",
    workMode: "Hybrid",
    type: "Internship",
    duration: "6 months",
    stipend: "₹30,000 / mo",
    experienceLevel: "Entry-Level / Student",
    requiredSkills: ["SQL", "Excel", "Python Fundamentals", "Power BI"],
    matchedSkills: ["SQL", "Excel", "Python Fundamentals"],
    developingSkills: ["Power BI"],
    missingSkills: [],
    matchScore: 90,
    matchLabel: "Strong match",
    eligibility: "B.Tech / B.Sc / BCA (2025–2026 batch)",
    description: "Join Northstar's core analytics squad assisting enterprise clients with data pipeline validation, SQL query tuning, and automated dashboard reporting.",
    responsibilities: [
      "Clean and transform structured dataset pipelines.",
      "Design automated summary charts for leadership reviews.",
      "Conduct ad-hoc diagnostic analysis on customer churn data."
    ],
    postedDate: "1 day ago",
    applicantsCount: 58
  },
  {
    id: "opp-3",
    title: "Cloud Engineering Intern",
    company: "Vertex Systems",
    location: "Hyderabad",
    workMode: "On-site",
    type: "Internship",
    duration: "6 months",
    stipend: "₹28,000 / mo",
    experienceLevel: "Entry-Level / Student",
    requiredSkills: ["Linux", "Cloud Fundamentals", "Networking", "Python Fundamentals"],
    matchedSkills: ["Python Fundamentals"],
    developingSkills: ["Cloud Fundamentals"],
    missingSkills: ["Linux", "Networking"],
    matchScore: 48,
    matchLabel: "Developing match",
    eligibility: "B.Tech CS / IT / ECE (2026 batch)",
    description: "Assist cloud infrastructure engineers with environment deployment scripts, container health checks, and security access policy audits.",
    responsibilities: [
      "Support cloud IAM and VPC configuration audits.",
      "Write Python automation scripts for log file aggregation.",
      "Document cloud infrastructure operational runbooks."
    ],
    postedDate: "4 days ago",
    applicantsCount: 31
  },
  {
    id: "opp-4",
    title: "Associate Business Analyst",
    company: "Apex Analytics",
    location: "Remote",
    workMode: "Remote",
    type: "Jobs",
    duration: "Full-time",
    stipend: "₹6.5 LPA",
    experienceLevel: "Graduating Students",
    requiredSkills: ["SQL", "Excel & Data Modeling", "Communication", "Problem Solving", "Power BI"],
    matchedSkills: ["SQL", "Excel & Data Modeling", "Communication", "Problem Solving"],
    developingSkills: ["Power BI"],
    missingSkills: [],
    matchScore: 88,
    matchLabel: "Strong match",
    eligibility: "Graduating batch 2025/2026 (All streams)",
    description: "Work with global client stakeholders to translate business requirements into functional data specifications and business intelligence reporting dashboards.",
    responsibilities: [
      "Gather business requirements from domain operations leads.",
      "Map source enterprise databases into unified reporting models.",
      "Facilitate weekly stakeholder walkthrough sessions."
    ],
    postedDate: "3 days ago",
    applicantsCount: 76
  },
  {
    id: "opp-5",
    title: "UX & Product Mobile Redesign",
    company: "Kite Studios",
    location: "Remote",
    workMode: "Remote",
    type: "Projects",
    duration: "4 weeks",
    stipend: "₹15,000 fixed",
    experienceLevel: "Student Project",
    requiredSkills: ["Figma & Wireframing", "User Research", "Communication"],
    matchedSkills: ["Figma & Wireframing", "Communication"],
    developingSkills: ["User Research"],
    missingSkills: [],
    matchScore: 78,
    matchLabel: "Good match",
    eligibility: "Open to all registered university students",
    description: "Short-term hands-on industry project to conduct student interviews and prototype a mobile onboarding flow for higher education applications.",
    responsibilities: [
      "Conduct 5 user interview sessions with current students.",
      "Create high-fidelity Figma mobile wireframe prototypes.",
      "Deliver interactive presentation slides to design leads."
    ],
    postedDate: "5 days ago",
    applicantsCount: 24
  },
  {
    id: "opp-6",
    title: "Cloud & Microservices Intensive",
    company: "CloudScale Labs",
    location: "Virtual",
    workMode: "Remote",
    type: "Learning",
    duration: "6 weeks",
    stipend: "Sponsored Program",
    experienceLevel: "All Skill Levels",
    requiredSkills: ["Linux", "Cloud Fundamentals", "Python Fundamentals"],
    matchedSkills: ["Python Fundamentals"],
    developingSkills: ["Cloud Fundamentals"],
    missingSkills: ["Linux"],
    matchScore: 55,
    matchLabel: "Moderate match",
    eligibility: "All Engineering & Science Students",
    description: "Industry-mentored intensive learning program focusing on containerization, cloud deployment pipelines, and hands-on lab environments.",
    responsibilities: [
      "Complete 6 weekly hands-on cloud lab exercises.",
      "Build a sample microservices container deployment project.",
      "Participate in live Q&A with cloud architects."
    ],
    postedDate: "1 week ago",
    applicantsCount: 110
  }
];

export const institutionMetrics = {
  name: "National Institute of Technology Consortium",
  studentsAssessed: 1248,
  careerReady: 474,
  activeInternships: 86,
  placementProgress: 68,
  
  readinessDistribution: [
    { category: "Ready", percentage: 38, count: 474, color: "#0D9488" },
    { category: "Developing", percentage: 44, count: 549, color: "#2563EB" },
    { category: "Needs Support", percentage: 18, count: 225, color: "#D97706" }
  ],

  topSkillGaps: [
    { skill: "SQL Querying & Joins", studentsCount: 284, category: "Data", priority: "High" },
    { skill: "Data Analytics & Viz", studentsCount: 241, category: "Data", priority: "High" },
    { skill: "Cloud Fundamentals (AWS/Azure)", studentsCount: 193, category: "Cloud", priority: "Medium" },
    { skill: "Business Communication", studentsCount: 176, category: "Professional", priority: "Medium" },
    { skill: "Power BI / Tableau", studentsCount: 154, category: "Data", priority: "Medium" }
  ],

  industryDemandMatrix: [
    {
      skill: "SQL Querying",
      industryDemand: "High",
      studentReadiness: "Medium",
      gapLevel: "Priority Gap",
      insight: "Requested in 64% of sample postings, but 284 students exhibit a development gap.",
      action: "Host a 2-week SQL intensive bridge program for IT & CS pre-final batch."
    },
    {
      skill: "Python Fundamentals",
      industryDemand: "High",
      studentReadiness: "High",
      gapLevel: "Aligned",
      insight: "Student capability strongly matches industry requirement baseline.",
      action: "Maintain current lab syllabus; introduce advanced domain electives."
    },
    {
      skill: "Cloud Fundamentals",
      industryDemand: "Medium",
      studentReadiness: "Low",
      gapLevel: "Priority Gap",
      insight: "193 students exhibit low cloud hands-on experience.",
      action: "Partner with CloudScale Labs for campus Cloud certification drive."
    },
    {
      skill: "Power BI / Viz",
      industryDemand: "Medium",
      studentReadiness: "Low",
      gapLevel: "Priority Gap",
      insight: "154 students lack hands-on BI tool project exposure.",
      action: "Incorporate BI tool module into final-year Data Engineering curriculum."
    },
    {
      skill: "Business Communication",
      industryDemand: "High",
      studentReadiness: "Medium",
      gapLevel: "Developing",
      insight: "176 students need improved stakeholder presentation practice.",
      action: "Expand weekly industry mock interview & case presentation labs."
    }
  ],

  recommendedActions: [
    {
      id: "act-1",
      title: "SQL Bridge Program",
      targetGroup: "284 Pre-final IT/CSE Students",
      expectedImpact: "Increase SQL readiness from 52% to 84% prior to campus hiring drive.",
      duration: "2 Weeks · 15 Hours"
    },
    {
      id: "act-2",
      title: "Business Intelligence Workshop",
      targetGroup: "154 Data & Business Analyst Aspirants",
      expectedImpact: "Add practical Power BI dashboard projects to student portfolios.",
      duration: "3 Days · Weekend Lab"
    },
    {
      id: "act-3",
      title: "Cloud Certification Drive",
      targetGroup: "193 Cloud & DevOps Interested Students",
      expectedImpact: "Achieve foundation certification for 100+ students.",
      duration: "4 Weeks · Self-Paced + Mentor Support"
    }
  ],

  outcomesData: {
    placementTrend: [
      { year: "2023", percentage: 58 },
      { year: "2024", percentage: 62 },
      { year: "2025", percentage: 66 },
      { year: "2026 Target", percentage: 76 }
    ],
    departmentBreakdown: [
      { department: "Information Technology", enrolled: 180, assessed: 172, ready: 78, activeInterns: 48 },
      { department: "Computer Science", enrolled: 240, assessed: 235, ready: 112, activeInterns: 62 },
      { department: "Electronics & Comm", enrolled: 160, assessed: 148, ready: 54, activeInterns: 28 },
      { department: "Mechanical Engg", enrolled: 120, assessed: 120, ready: 32, activeInterns: 14 }
    ]
  },

  // Detailed Skill Mastery Heatmap Analytics across Departments
  departmentSkillHeatmap: [
    { department: "Information Technology", sql: 78, python: 82, cloud: 62, analytics: 74, communication: 86 },
    { department: "Computer Science", sql: 88, python: 94, cloud: 76, analytics: 68, communication: 82 },
    { department: "Electronics & Comm", sql: 54, python: 72, cloud: 58, analytics: 48, communication: 78 },
    { department: "Data Science & AI", sql: 92, python: 96, cloud: 70, analytics: 90, communication: 84 }
  ],

  // Detailed Internship Participation Pipeline Metrics
  internshipPipeline: [
    { stage: "Applied & Profile Sent", count: 320, color: "#64748B" },
    { stage: "Shortlisted for Test", count: 180, color: "#2563EB" },
    { stage: "Technical Interviewing", count: 110, color: "#D97706" },
    { stage: "Active Industry Interns", count: 86, color: "#0D9488" },
    { stage: "PPO Offered / Completed", count: 140, color: "#16A34A" }
  ],

  // Detailed Stipend Distribution Analytics
  stipendAnalytics: {
    topBracket: { range: "> ₹30,000 / mo", count: 28, percentage: "24%" },
    midBracket: { range: "₹15,000 – ₹30,000 / mo", count: 68, percentage: "58%" },
    entryBracket: { range: "< ₹15,000 / mo", count: 21, percentage: "18%" },
    averageStipend: "₹24,500 / mo",
    highestStipend: "₹65,000 / mo (Meridian Biotech)"
  },

  // Industry Employer Satisfaction Index
  employerSatisfaction: {
    overallRating: "4.85 / 5.0",
    partnerCount: 14,
    feedback: [
      { partner: "Meridian Digital", rating: "5.0 / 5.0", comment: "Students demonstrate strong SQL and problem-solving readiness with minimal onboarding delay." },
      { partner: "Vertex Systems", rating: "4.8 / 5.0", comment: "High capability in microservices and container log debugging." },
      { partner: "Kite Studios", rating: "4.7 / 5.0", comment: "Product design specs delivered by student interns met enterprise Figma wireframe standards." }
    ]
  },

  // 5 Pillars of Industry-Academia Collaboration Programs
  collaborationPrograms: {
    mentorships: [
      { id: "m-1", title: "1-on-1 Senior Industry Architect Mentorship", mentor: "Dr. Vikram Seth (Meridian Digital)", menteesCount: 24, focus: "Data Engineering & Analytics" },
      { id: "m-2", title: "Product Analytics & UX Strategy Mentorship", mentor: "Priya Nair (Kite Studios)", menteesCount: 18, focus: "Wireframing & Telemetry" }
    ],
    workshops: [
      { id: "w-1", title: "Cloud Microservices & Docker Container Lab", instructor: "Vertex Cloud Engineering Team", date: "18 Sep 2026", participants: 140 },
      { id: "w-2", title: "Hands-on GenAI in Healthcare & Ayush Tech", instructor: "AIIA & Meridian AI Leads", date: "25 Sep 2026", participants: 210 }
    ],
    guestLectures: [
      { id: "gl-1", title: "Keynote: Transitioning Academic Code into Production Microservices", speaker: "Anand Prakash (VP Engg, Vertex Systems)", date: "12 Sep 2026", status: "Upcoming Stream" },
      { id: "gl-2", title: "Keynote: Phytomedicine Data Science & Scopus Grant Writing", speaker: "Dr. A. Sharma (AICTE Fellow)", date: "20 Sep 2026", status: "Upcoming Stream" }
    ],
    innovationChallenges: [
      { id: "ic-1", title: "Enterprise Cohort Retention Data Pipeline", partner: "Meridian Digital", reward: "₹25,000 Prize + Fast-Track Shortlist", status: "Active Submissions" },
      { id: "ic-2", title: "Campus Mobile Portal UX Teardown", partner: "Kite Studios", reward: "Verified UX Badge + Internship Shortlist", status: "Active Submissions" }
    ],
    liveProjects: [
      { id: "lp-1", title: "Patient Telemetry Anomaly Detection Engine", company: "Meridian Digital R&D", studentTeamSize: 4, leadFaculty: "Dr. Radhakrishnan V", milestone: "Sprint 3: Model Tuning" },
      { id: "lp-2", title: "Container Log Parsing Daemon for Kubernetes", company: "Vertex Systems", studentTeamSize: 3, leadFaculty: "Dr. Anitha S", milestone: "Sprint 2: Async Pipeline" }
    ]
  }
};

export const industryData = {
  activeOpportunitiesCount: 12,
  matchingCandidatePool: 184,
  institutionPartners: 8,

  matchingCandidates: [
    {
      id: "cand-1",
      name: "Aarav Menon",
      degree: "B.Tech IT (2026)",
      readinessScore: 88,
      matchLabel: "Strong match",
      skills: ["SQL", "Python Fundamentals", "Excel & Data Modeling", "Communication"],
      evidence: "Built E-Commerce Cohort Pipeline project (GitHub verified)",
      topStrength: "Advanced SQL & Data Pipelines"
    },
    {
      id: "cand-2",
      name: "Meera Krishnan",
      degree: "B.Tech CSE (2026)",
      readinessScore: 84,
      matchLabel: "Strong match",
      skills: ["SQL", "Excel & Data Modeling", "Product Analytics", "Figma & Wireframing"],
      evidence: "Campus Innovation Lab Research Fellow",
      topStrength: "Product Specification & UX Analytics"
    },
    {
      id: "cand-3",
      name: "Rohan Varma",
      degree: "B.Tech ECE (2026)",
      readinessScore: 76,
      matchLabel: "Good match",
      skills: ["Python Fundamentals", "Linux", "Cloud Fundamentals", "Problem Solving"],
      evidence: "AWS Certified Cloud Practitioner",
      topStrength: "Cloud & Infrastructure Scripting"
    },
    {
      id: "cand-4",
      name: "Ananya Rao",
      degree: "B.Sc Data Science (2025)",
      readinessScore: 92,
      matchLabel: "Strong match",
      skills: ["SQL", "Power BI", "Python Fundamentals", "Communication"],
      evidence: "Published Open-Source Financial Dashboard",
      topStrength: "BI Dashboarding & Data Storytelling"
    }
  ],

  collaborations: [
    {
      id: "col-1",
      title: "Faculty Development Program: Industrial Cloud Architecture",
      type: "Faculty Training",
      duration: "2 weeks",
      mode: "Hybrid",
      provider: "Vertex Systems",
      interestedCount: 14,
      status: "Open for Registrations",
      description: "Equip university faculty with modern cloud deployment, microservices monitoring, and enterprise security practices."
    },
    {
      id: "col-2",
      title: "Guest Lecture Series: Product Telemetry & Metrics in Production",
      type: "Guest Lecture",
      duration: "3 Virtual Sessions",
      mode: "Virtual",
      provider: "Meridian Digital",
      interestedCount: 22,
      status: "Scheduled",
      description: "Senior product leaders share real-world cohort retention metrics, A/B testing frameworks, and product telemetry tools."
    },
    {
      id: "col-3",
      title: "Capstone Industry Live Project: Data Quality Automation",
      type: "Live Project",
      duration: "8 weeks",
      mode: "Hybrid",
      provider: "Northstar Technologies",
      interestedCount: 18,
      status: "Accepting Student Batches",
      description: "Student teams build data quality pipeline checks with guidance from senior data engineers."
    }
  ]
};

export const skillsCatalog = [
  {
    category: "Data & Analytics",
    description: "Core technical skills for extracting insights, database querying, and business reporting.",
    skillsList: ["SQL Querying", "Excel & Financial Modeling", "Python for Data", "Power BI / Tableau", "Data Visualization", "Statistical Analysis"]
  },
  {
    category: "Product & Business",
    description: "Competencies focused on product telemetry, specification drafting, and stakeholder alignment.",
    skillsList: ["Product Analytics", "A/B Testing Concepts", "User Research", "Wireframing & Figma", "Business Requirements Analysis", "Product Strategy"]
  },
  {
    category: "Cloud & Systems",
    description: "Infrastructure, operating systems, and deployment fundamentals for modern software teams.",
    skillsList: ["Cloud Fundamentals (AWS/Azure)", "Linux System Administration", "Networking Basics", "Docker Containers", "DevOps Concepts"]
  },
  {
    category: "Professional Competencies",
    description: "Essential workplace skills evaluated across all technical roles and leadership tracks.",
    skillsList: ["Business Communication", "Critical Thinking", "Cross-functional Collaboration", "Structured Problem Solving", "Adaptability"]
  }
];

export const careerPaths = [
  {
    id: "path-data-analyst",
    role: "Data Analyst",
    overview: "Transforms raw database records into clear visual summaries, trend reports, and strategic recommendations.",
    coreSkills: ["SQL Querying", "Excel & Data Modeling", "Power BI / Tableau", "Communication"],
    steps: [
      { step: "01 — Foundation", detail: "Master Excel data cleaning, pivot tables, and statistical formulas." },
      { step: "02 — Database Core", detail: "Learn SQL SELECT, multi-table JOINs, GROUP BY aggregations, and window functions." },
      { step: "03 — Business Intelligence", detail: "Build interactive visual reports in Power BI or Tableau." },
      { step: "04 — Portfolio Evidence", detail: "Execute an end-to-end dataset project and publish on GitHub with documentation." },
      { step: "05 — Opportunity Readiness", detail: "Apply for Data Analyst Internships matching your SQL & Excel proficiency." }
    ]
  },
  {
    id: "path-product-analyst",
    role: "Product Analyst",
    overview: "Evaluates feature usage, retention funnels, and user behaviors to guide product roadmap decisions.",
    coreSkills: ["SQL Querying", "Product Analytics", "Figma & Wireframing", "A/B Testing Concepts"],
    steps: [
      { step: "01 — Product Fundamentals", detail: "Understand active user metrics, churn rates, and retention cohorts." },
      { step: "02 — Telemetry & SQL", detail: "Query user event logs and build retention funnels." },
      { step: "03 — Wireframing & Specs", detail: "Draft feature specifications and wireframes in Figma." },
      { step: "04 — Experimentation", detail: "Learn hypothesis formulation and A/B test result evaluation." },
      { step: "05 — Portfolio & Match", detail: "Create a product teardown spec and match with Product Analyst listings." }
    ]
  }
];

export const assessmentQuestions = [
  {
    id: 1,
    skill: "SQL",
    question: "How comfortable are you writing multi-table SQL JOIN queries with aggregated GROUP BY conditions?",
    options: [
      { label: "Beginner", description: "I know simple SELECT * queries, but struggle with JOINs.", level: "Emerging" },
      { label: "Familiar", description: "I can write basic INNER JOINs with help or reference documentation.", level: "Developing" },
      { label: "Comfortable", description: "I write INNER/LEFT JOINs and aggregate queries independently.", level: "Proficient" },
      { label: "Advanced", description: "I write complex window functions, subqueries, and query optimizations.", level: "Strong" }
    ]
  },
  {
    id: 2,
    skill: "Product Analytics",
    question: "When evaluating how a new software feature performs, how do you approach data analysis?",
    options: [
      { label: "Uncertain", description: "I am not familiar with tracking user engagement metrics.", level: "Emerging" },
      { label: "Basic Awareness", description: "I understand total clicks or pageviews, but haven't tracked cohorts.", level: "Developing" },
      { label: "Cohort & Funnel Tracking", description: "I can define retention funnels and analyze drop-off rates.", level: "Proficient" },
      { label: "Experimentation Lead", description: "I formulate hypotheses, define metrics, and structure A/B testing plans.", level: "Strong" }
    ]
  },
  {
    id: 3,
    skill: "Communication",
    question: "How confident are you presenting a technical recommendation to business stakeholders?",
    options: [
      { label: "Needs Practice", description: "I prefer writing code or reports rather than presenting.", level: "Emerging" },
      { label: "Developing", description: "I can present slides if provided with a script and preparation time.", level: "Developing" },
      { label: "Confident", description: "I explain technical insights clearly using simple non-jargon language.", level: "Proficient" },
      { label: "Strong Lead", description: "I handle tough Q&A, align stakeholders, and drive consensus.", level: "Strong" }
    ]
  },
  {
    id: 4,
    skill: "Cloud Fundamentals",
    question: "What is your level of experience with cloud services (AWS, Azure, GCP) or server hosting?",
    options: [
      { label: "No Experience", description: "I have only run applications on my local computer.", level: "Emerging" },
      { label: "Basic Overview", description: "I know cloud terms (EC2, S3, Virtual Machines) conceptually.", level: "Developing" },
      { label: "Hands-on Deployments", description: "I have launched cloud instances and deployed web applications.", level: "Proficient" },
      { label: "Infrastructure Automation", description: "I write cloud scripts, IAM security rules, and container setups.", level: "Strong" }
    ]
  },
  {
    id: 5,
    skill: "Problem Solving",
    question: "When faced with an unfamiliar technical bug or data discrepancy, what is your initial action?",
    options: [
      { label: "Seek Assistance Immediately", description: "I ask a teammate or professor before debugging.", level: "Emerging" },
      { label: "Basic Inspection", description: "I search error messages online and try sample solutions.", level: "Developing" },
      { label: "Structured Isolation", description: "I systematically isolate variables, check logs, and reproduce steps.", level: "Proficient" },
      { label: "Root Cause Analysis", description: "I map data flows, trace systemic causes, and document prevention fixes.", level: "Strong" }
    ]
  }
];

// Academician / Faculty Persona Dataset
export const initialAcademician = {
  id: "prof-201",
  name: "Dr. Radhakrishnan V",
  title: "Dr. Radhakrishnan V",
  designation: "Associate Professor & Head of Ayush Tech Research",
  department: "Ayurvedic Computer Sciences & Healthcare Tech",
  institution: "All India Institute of Ayurveda (AIIA)",
  email: "radhakrishnan.v@aiia.gov.in",
  specialization: "AI in Health Tech, Phytomedicine Analytics, OBE Curriculum Design",
  experienceYears: "14 Years",
  readinessIndex: 91,

  // Competency Twin for Faculty
  facultyTwin: {
    researchOutputScore: 89,
    industryImmersionScore: 92,
    pedagogyObeScore: 94,
    scopusPublicationsCount: 16,
    patentsFiledCount: 3,
    grantFundingRaised: "₹45,00,000"
  },

  // Active FDP (Faculty Development Program)
  activeFdp: {
    id: "fdp-101",
    title: "AICTE-ATAL Advanced FDP: Machine Learning & Phytomedicine Analytics",
    organizer: "All India Institute of Ayurveda & Meridian Biotech R&D",
    startDate: "01 Sep 2026",
    endDate: "14 Sep 2026",
    status: "In Progress (Week 2)",
    attendancePercentage: 92,
    currentPhase: "Research & Grant Proposal Drafting",
    quizScoreAverage: 88,
    finalExamStatus: "Eligible (Score: 84%)",
    certificateStatus: "Verified & Issued (AICTE-ATAL Aligned)",
    
    // Pillar 1: Daily Activities & Learning Sessions
    dailyActivities: [
      { day: "Day 1", topic: "Expert Lecture: Modern AI & Machine Learning Trends in Ayush Medicine", status: "Completed", speaker: "Dr. A. Sharma (AICTE Senior Fellow)" },
      { day: "Day 2", topic: "Hands-On Lab Work: Python & Bio-informatics Toolkit for Phytomedicine", status: "Completed", mentor: "Meridian R&D Team" },
      { day: "Day 3", topic: "Case Study Discussion: Clinical Efficacy & Telemetry Funnels in Herbal Formulations", status: "Completed", lead: "Clinical Industry Expert" },
      { day: "Day 4", topic: "Micro-Teaching Session: Peer-reviewed 15-min sample lesson on Bio-SQL & AI Data Analytics", status: "Verified & Evaluated (Score: 92/100)", feedback: "Exceptional clarity in explaining algorithmic data structures to undergraduate students." }
    ],

    // Pillar 2: Upgrading Teaching Methods (Pedagogical Training)
    pedagogicalTraining: [
      { module: "Digital LMS & Virtual Labs", tool: "Moodle, Google Classroom & Virtual Bio-Simulators", status: "Completed", score: "Pass" },
      { module: "Outcome-Based Education (OBE) & Bloom's Taxonomy", framework: "Designing Student-Centric Exam Question Papers & Mapping CO-PO Attainment", status: "Completed", score: "Verified (Strong)" }
    ],

    // Pillar 3: Research and Academic Writing
    researchAndWriting: [
      { title: "Scopus & Web of Science Paper Drafting", paperTopic: "Machine Learning Models for Predicting Phytochemical Synergy in Herbal Formulations", status: "Draft Submitted", journal: "Journal of Ethnopharmacology & Tech" },
      { title: "Government Grant Proposal Drafting", agency: "DST & AICTE Research Promotion Scheme (RPS)", status: "Approved by Industry Mentor", grantAmount: "₹25,00,000" },
      { title: "IPR & Patent Filing", patentName: "Automated Spectroscopic Assay Analysis Algorithm", status: "Provisional Patent Drafted" }
    ],

    // Pillar 4: Evaluation and Certification
    evaluationAndCertification: {
      quizzes: [
        { title: "Quiz 1: Phytomedicine & AI Data Structures", score: 90, total: 100, date: "03 Sep 2026", status: "Passed" },
        { title: "Quiz 2: OBE & Outcome Question Paper Design", score: 85, total: 100, date: "07 Sep 2026", status: "Passed" },
        { title: "Quiz 3: Scopus Paper Methodology & Grant Standards", score: 90, total: 100, date: "10 Sep 2026", status: "Passed" }
      ],
      finalExamScore: 84,
      minPassingThreshold: 60,
      attendanceRecord: "92% (11 of 12 sessions attended)",
      certificateIssued: true,
      certificateId: "AICTE-ATAL-FDP-2026-AYUSH-9942",
      issuedBy: "All India Institute of Ayurveda & Meridian Digital"
    }
  },

  // Sabbaticals & Industrial Training Records
  sabbaticalsAndInternships: [
    {
      id: "sab-1",
      title: "Industrial Sabbatical: Healthcare Data Science & Clinical Analytics",
      company: "Meridian Digital Labs",
      location: "Chennai · Hybrid",
      duration: "6 Months",
      period: "Jan 2026 – Jun 2026",
      status: "Completed & Verified",
      mentor: "Dr. Vikram Seth (Chief Data Scientist, Meridian)",
      mentorFeedback: "Dr. Radhakrishnan demonstrated outstanding technical leadership during his sabbatical. He co-developed our clinical trial telemetry algorithms and designed a bridge elective for undergraduate IT students.",
      rating: "5.0 / 5.0",
      outcomes: [
        "Co-authored 2 Scopus-indexed research papers",
        "Designed 1 Joint Industry-Academia Elective Course",
        "Trained 45 Junior Faculty Members across partner institutions"
      ]
    },
    {
      id: "sab-2",
      title: "Faculty Industrial Training: Cloud Systems & Linux Security",
      company: "Vertex Systems R&D",
      location: "Hyderabad · On-site",
      duration: "4 Weeks",
      period: "May 2025",
      status: "Completed & Verified",
      mentor: "Anand Prakash (Principal Architect)",
      mentorFeedback: "Strong engagement with microservices log telemetry and container orchestration frameworks.",
      rating: "4.9 / 5.0",
      outcomes: [
        "Upgraded Institution Cloud Computing Lab syllabus",
        "Published 1 Technical Whitepaper on Container Security"
      ]
    }
  ]
};

// Opportunities List for Academicians
export const initialAcademicianOpportunities = [
  {
    id: "opp-acad-1",
    title: "AICTE-ATAL Advanced FDP on Machine Learning & Digital Health Technologies",
    provider: "All India Institute of Ayurveda & Meridian Biotech",
    type: "FDP Program",
    duration: "2 Weeks (Online + Hands-on)",
    stipendOrGrant: "AICTE Sponsored & Certified",
    eligibility: "Engineering, Pharmacy & Ayush Faculty Members",
    deadline: "15 Sep 2026",
    description: "Intensive 2-week Faculty Development Program covering expert lectures, micro-teaching feedback, Scopus paper writing, DST grant proposal drafting, and AICTE-ATAL certification.",
    tags: ["FDP", "Machine Learning", "OBE Framework", "Scopus Paper"]
  },
  {
    id: "opp-acad-2",
    title: "6-Month Industrial Research Sabbatical in Healthcare Analytics",
    provider: "Meridian Digital R&D Division",
    type: "Industrial Sabbatical",
    duration: "6 Months (Full-Time or Hybrid)",
    stipendOrGrant: "₹65,00,00 Grant / Research Fellowship",
    eligibility: "Associate Professors & Professors with 5+ years experience",
    deadline: "30 Sep 2026",
    description: "Work side-by-side with Meridian R&D leads on real-world patient telemetry datasets, co-file patents, and bring industry best practices back to academic curricula.",
    tags: ["Sabbatical", "Industry Immersion", "Patents", "R&D"]
  },
  {
    id: "opp-acad-3",
    title: "Faculty Industrial Training: Cloud & Microservices Infrastructure",
    provider: "Vertex Systems Infrastructure Lab",
    type: "Industrial Training",
    duration: "4 Weeks (Summer Break)",
    stipendOrGrant: "Fully Sponsored + Honorarium",
    eligibility: "CS, IT & Electronics Faculty",
    deadline: "20 Oct 2026",
    description: "Hands-on industrial immersion on Linux kernel debugging, Docker container log parsing, and enterprise cloud DevOps practices.",
    tags: ["Industrial Training", "Cloud & Linux", "Hands-on Lab"]
  }
];

