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
        verified: true
      },
      {
        id: "p-2",
        title: "E-Commerce Cohort Analysis Pipeline",
        description: "Analyzed 50k transaction records using Python & SQL to identify customer drop-off patterns.",
        skills: ["Python", "SQL", "Excel"],
        link: "github.com/demo/cohort-analysis",
        verified: true
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
        issuer: "University Consortium",
        date: "Mar 2026",
        verified: true,
        credentialId: "CERT-UC-44021"
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
