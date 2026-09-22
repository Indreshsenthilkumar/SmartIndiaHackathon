// SIXTH SENSE — Skill Orbit Platform Data Engine
// Bridging the Gap Between Academia and Industry

export const initialStudent = {
  id: "student-101",
  rollNumber: "2026-CSE-408",
  name: "Angel K",
  degree: "B.Tech in Computer Science & Artificial Intelligence",
  institution: "Anna University / College of Engineering, Guindy",
  gradYear: "2026",
  email: "angel.k@annauniv.edu",
  targetCareer: "AI/ML Engineer & Intelligent Systems Specialist",
  overallReadiness: 78,
  assessedSkillsCount: 14,
  strongMatchesCount: 9,
  applicationsCount: 3,

  // Competency Twin Metric (What You Know vs What You Can Build)
  competencyTwin: {
    overallScore: 78,
    knowledgeScore: 84, // Theoretical & Assessment benchmark score
    buildScore: 74,     // Verified practical GitHub/project implementations
    analyzedReposCount: 4,
    verifiedSkillsCount: 8
  },

  learningPathProgress: {
    phase1: { title: "Learn Core Skills", status: "Completed", percent: 100, completedModules: 6, totalModules: 6 },
    phase2: { title: "Build Real Projects", status: "In Progress", percent: 60, completedModules: 3, totalModules: 5 },
    phase3: { title: "Gain Industry Exposure", status: "Not Started", percent: 0, completedModules: 0, totalModules: 4 },
    phase4: { title: "Get Certified", status: "Not Started", percent: 0, completedModules: 0, totalModules: 3 }
  },

  skills: [
    { id: "s-1", name: "Machine Learning", category: "AI & Data", proficiency: "Strong", score: 88, verified: true, demand: "High" },
    { id: "s-2", name: "Python", category: "Programming", proficiency: "Strong", score: 92, verified: true, demand: "High" },
    { id: "s-3", name: "LLMs & GenAI", category: "AI & Data", proficiency: "Developing", score: 68, verified: false, demand: "High" },
    { id: "s-4", name: "Data Analytics", category: "AI & Data", proficiency: "Strong", score: 82, verified: true, demand: "High" },
    { id: "s-5", name: "SQL & Databases", category: "Backend", proficiency: "Strong", score: 85, verified: true, demand: "Medium" },
    { id: "s-6", name: "React.js", category: "Frontend", proficiency: "Developing", score: 72, verified: true, demand: "High" },
    { id: "s-7", name: "Deep Learning (PyTorch)", category: "AI & Data", proficiency: "Developing", score: 65, verified: false, demand: "High" },
    { id: "s-8", name: "Cloud & Docker", category: "DevOps", proficiency: "Emerging", score: 45, verified: false, demand: "High" },
    { id: "s-9", name: "Computer Vision", category: "AI & Data", proficiency: "Developing", score: 70, verified: false, demand: "Medium" },
    { id: "s-10", name: "System Design", category: "Architecture", proficiency: "Emerging", score: 40, verified: false, demand: "High" },
    { id: "s-11", name: "Critical Problem Solving", category: "Soft Skills", proficiency: "Strong", score: 90, verified: true, demand: "High" },
    { id: "s-12", name: "Industry Communication", category: "Soft Skills", proficiency: "Strong", score: 85, verified: true, demand: "High" }
  ],

  skillGaps: [
    {
      id: "gap-1",
      skill: "LLMs & GenAI / Prompt Engineering",
      current: "Developing (68%)",
      target: "Proficient (85%+)",
      whyItMatters: "Required in 84% of top AI/ML Internships at Google, Microsoft, and TCS.",
      recommendedAction: "Complete the 2-week 'Applied LLMs & RAG Architectures' Industry Sprint.",
      priority: 1,
      matchImpact: "+12% Match Score"
    },
    {
      id: "gap-2",
      skill: "Cloud Deployment & Docker Containerization",
      current: "Emerging (45%)",
      target: "Intermediate (75%+)",
      whyItMatters: "Essential for deploying scalable ML microservices in enterprise environments.",
      recommendedAction: "Enroll in 'Docker for ML Engineers' module in your Learning Path.",
      priority: 2,
      matchImpact: "+8% Match Score"
    },
    {
      id: "gap-3",
      skill: "Distributed System Design",
      current: "Emerging (40%)",
      target: "Intermediate (70%+)",
      whyItMatters: "High-frequency screening criteria in technical placement interviews.",
      recommendedAction: "Attend the upcoming Live Masterclass with Amazon Tech Leads.",
      priority: 3,
      matchImpact: "+6% Match Score"
    }
  ],

  analyzedProjects: [
    {
      id: "p-1",
      title: "Real-time Defect Detection using Edge Computer Vision",
      repoUrl: "github.com/angel-k/edge-defect-detection",
      techStack: "PyTorch (50%), OpenCV (30%), FastAPI (20%)",
      complexityScore: 91,
      practicalContribution: "96%",
      status: "Verified by TCS Mentor",
      verifiedSkills: ["Computer Vision", "PyTorch", "Model Optimization"],
      summary: "Trained an ultra-lightweight YOLOv8 model for industrial conveyor defect localization running at 62 FPS on edge hardware."
    },
    {
      id: "p-2",
      title: "Intelligent Semantic Search with Vector Embeddings & RAG",
      repoUrl: "github.com/angel-k/semantic-rag-engine",
      techStack: "Python (60%), ChromaDB (25%), React (15%)",
      complexityScore: 88,
      practicalContribution: "94%",
      status: "Verified by Google AI Sprint",
      verifiedSkills: ["Python", "LLMs & GenAI", "Vector DBs"],
      summary: "Constructed an end-to-end question-answering system indexing 50,000+ academic research papers with low-latency retrieval."
    }
  ],

  savedOpportunities: ["opp-1", "opp-3"],

  applications: [
    {
      id: "app-101",
      opportunityId: "opp-1",
      role: "AI/ML Intern",
      company: "Google",
      location: "Remote · Full-time Internship",
      duration: "3 months",
      appliedDate: "18 Sep 2026",
      status: "Skill Assessment Scheduled",
      matchScore: 92,
      matchLabel: "Top 5% Fit",
      timeline: [
        { stage: "Submitted", date: "18 Sep 2026", completed: true },
        { stage: "Profile & Skill Screen", date: "19 Sep 2026", completed: true },
        { stage: "Technical Assessment", date: "24 Sep 2026", completed: false, active: true },
        { stage: "Interview Round", date: "Pending", completed: false },
        { stage: "Final Offer", date: "Pending", completed: false }
      ]
    },
    {
      id: "app-102",
      opportunityId: "opp-2",
      role: "Data Science Intern",
      company: "Microsoft",
      location: "Hybrid (Bangalore) · Internship",
      duration: "6 months",
      appliedDate: "15 Sep 2026",
      status: "Shortlisted for Interview",
      matchScore: 86,
      matchLabel: "Strong Fit",
      timeline: [
        { stage: "Submitted", date: "15 Sep 2026", completed: true },
        { stage: "Profile & Skill Screen", date: "16 Sep 2026", completed: true },
        { stage: "Technical Assessment", date: "17 Sep 2026", completed: true },
        { stage: "Interview Round", date: "23 Sep 2026 (2:30 PM)", completed: false, active: true },
        { stage: "Final Offer", date: "Pending", completed: false }
      ]
    },
    {
      id: "app-103",
      opportunityId: "opp-3",
      role: "AI Research Intern",
      company: "Tata Consultancy Services",
      location: "Chennai, India · On-site",
      duration: "6 months",
      appliedDate: "10 Sep 2026",
      status: "Under Review",
      matchScore: 84,
      matchLabel: "Good Fit",
      timeline: [
        { stage: "Submitted", date: "10 Sep 2026", completed: true },
        { stage: "Profile & Skill Screen", date: "12 Sep 2026", completed: true },
        { stage: "Technical Assessment", date: "Pending", completed: false },
        { stage: "Interview Round", date: "Pending", completed: false },
        { stage: "Final Offer", date: "Pending", completed: false }
      ]
    }
  ],

  certifications: [
    { id: "c-1", title: "Professional Machine Learning Engineer", issuer: "Google Cloud / Skill Orbit", issueDate: "Aug 2026", credentialId: "SO-GCP-88491", verified: true },
    { id: "c-2", title: "Advanced Deep Learning & PyTorch Masterclass", issuer: "DeepLearning.AI & TCS iON", issueDate: "Jun 2026", credentialId: "TCS-DL-44120", verified: true },
    { id: "c-3", title: "Full-Stack React & Node Systems", issuer: "Meta Skill Network", issueDate: "Jan 2026", credentialId: "META-FS-90112", verified: true }
  ]
};

export const initialOpportunities = [
  {
    id: "opp-1",
    title: "AI/ML Intern",
    company: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyIcon: "google",
    roleType: "Internship",
    domain: "Artificial Intelligence",
    workMode: "Remote",
    location: "Remote",
    duration: "3 months",
    stipend: "₹ 85,000 / month",
    postedDate: "2 days ago",
    deadline: "30 Sep 2026",
    matchScore: 92,
    matchLabel: "Top Match",
    applicantsCount: 142,
    description: "Join Google's Next-Gen AI Research Team to work on cutting-edge Large Language Models, prompt tuning pipelines, and multimodal inference pipelines.",
    requiredSkills: ["Machine Learning", "Python", "LLMs"],
    goodToHaveSkills: ["PyTorch", "Vector DBs", "Docker"],
    responsibilities: [
      "Develop and benchmark fine-tuning pipelines for high-efficiency transformer architectures.",
      "Collaborate with senior research scientists on multimodal dataset curation and ablation studies.",
      "Implement reproducible evaluations using standardized industry benchmarks (MMLU, GSM8K)."
    ],
    eligibility: "Pre-final or Final year B.Tech/M.Tech/MS in Computer Science, Data Science, or allied branches with min 7.5 CGPA.",
    openings: 8,
    isFeatured: true
  },
  {
    id: "opp-2",
    title: "Data Science Intern",
    company: "Microsoft",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    companyIcon: "microsoft",
    roleType: "Internship",
    domain: "Data Science & Analytics",
    workMode: "Hybrid",
    location: "Bangalore / Hybrid",
    duration: "6 months",
    stipend: "₹ 80,000 / month",
    postedDate: "3 days ago",
    deadline: "05 Oct 2026",
    matchScore: 86,
    matchLabel: "Strong Match",
    applicantsCount: 198,
    description: "Work with Microsoft Azure Data Platform teams to build predictive models, business intelligence workflows, and high-throughput automated analytics pipelines.",
    requiredSkills: ["Data Analytics", "SQL", "Power BI"],
    goodToHaveSkills: ["Python", "Azure Synapse", "Statistics"],
    responsibilities: [
      "Analyze multi-terabyte cloud utilization telemetry to uncover usage patterns and cost optimization heuristics.",
      "Build interactive executive Power BI dashboards with real-time streaming data feeds.",
      "Collaborate with product teams to design A/B test frameworks and statistical significance checks."
    ],
    eligibility: "B.Tech/BE/MCA/M.Sc with strong foundation in Relational SQL, Data Wrangling, and Applied Statistics.",
    openings: 12,
    isFeatured: true
  },
  {
    id: "opp-3",
    title: "AI Research Intern",
    company: "Tata Consultancy Services",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    companyIcon: "tcs",
    roleType: "Internship",
    domain: "Computer Vision & Deep Learning",
    workMode: "On-site",
    location: "Chennai, India",
    duration: "6 months",
    stipend: "₹ 45,000 / month",
    postedDate: "1 day ago",
    deadline: "10 Oct 2026",
    matchScore: 84,
    matchLabel: "Great Match",
    applicantsCount: 94,
    description: "TCS Research & Innovation Labs is hiring AI Research Interns to investigate 3D Vision, autonomous robotics, and visual inspection algorithms for Industry 4.0 applications.",
    requiredSkills: ["Computer Vision", "Deep Learning"],
    goodToHaveSkills: ["OpenCV", "PyTorch", "C++"],
    responsibilities: [
      "Implement state-of-the-art vision transformer models for defect segmentation in smart manufacturing.",
      "Publish joint research findings at leading conferences (CVPR, ECCV, ICCV).",
      "Benchmark edge inference latency on NVIDIA Jetson and specialized NPU hardware."
    ],
    eligibility: "Students with demonstrated project or research work in Computer Vision and Neural Networks.",
    openings: 5,
    isFeatured: true
  },
  {
    id: "opp-4",
    title: "Full-Stack Cloud Engineer Intern",
    company: "Infosys",
    companyLogo: "",
    companyIcon: "infosys",
    roleType: "Internship",
    domain: "Web & Cloud Systems",
    workMode: "Hybrid",
    location: "Hyderabad / Pune",
    duration: "6 months",
    stipend: "₹ 35,000 / month",
    postedDate: "4 days ago",
    deadline: "15 Oct 2026",
    matchScore: 78,
    matchLabel: "Good Match",
    applicantsCount: 220,
    description: "Build scalable microservices and responsive cloud portals for Fortune 500 enterprise modernization initiatives.",
    requiredSkills: ["React.js", "Node.js", "SQL & Databases"],
    goodToHaveSkills: ["Docker", "AWS", "TypeScript"],
    responsibilities: [
      "Develop responsive UI components in React and integrate RESTful microservice endpoints.",
      "Write automated unit tests and participate in CI/CD pipeline deployment cycles.",
      "Optimize frontend page load times and core web vitals."
    ],
    eligibility: "UG/PG students graduating in 2026/2027.",
    openings: 25,
    isFeatured: false
  },
  {
    id: "opp-5",
    title: "Software Development Engineer (Entry Level)",
    company: "Amazon",
    companyLogo: "",
    companyIcon: "amazon",
    roleType: "Full-Time Placement",
    domain: "Distributed Systems & Cloud",
    workMode: "On-site",
    location: "Hyderabad, India",
    duration: "Full-Time",
    stipend: "₹ 24 LPA - 32 LPA",
    postedDate: "5 days ago",
    deadline: "20 Oct 2026",
    matchScore: 82,
    matchLabel: "Placement Match",
    applicantsCount: 310,
    description: "Amazon is looking for exceptional upcoming graduates to solve planet-scale engineering challenges across AWS, Prime Video, and Alexa AI.",
    requiredSkills: ["Python", "System Design", "SQL & Databases"],
    goodToHaveSkills: ["Java", "Distributed Systems", "AWS"],
    responsibilities: [
      "Design fault-tolerant distributed services handling millions of TPS.",
      "Participate in design reviews, operational excellence on-call rotations, and sprint planning.",
      "Author clean, maintainable, and high-performance production code."
    ],
    eligibility: "2026 batch graduates with strong Data Structures & Algorithms proficiency.",
    openings: 15,
    isFeatured: true
  },
  {
    id: "opp-6",
    title: "Faculty Industry Immersion & FDP Fellowship",
    company: "Larsen & Toubro (L&T)",
    companyLogo: "",
    companyIcon: "lt",
    roleType: "Faculty Internship & FDP",
    domain: "Embedded IoT & Smart Grid",
    workMode: "Hybrid",
    location: "Mumbai / Chennai",
    duration: "4 weeks (Summer / Winter)",
    stipend: "₹ 60,000 Fellowship Grant",
    postedDate: "1 week ago",
    deadline: "30 Oct 2026",
    matchScore: 90,
    matchLabel: "Faculty Match",
    applicantsCount: 28,
    description: "Specially designed for university professors and academic researchers to gain direct hands-on exposure to industrial automation, SCADA systems, and smart grid telemetry.",
    requiredSkills: ["IoT & Sensors", "Industrial Automation", "Applied Research"],
    goodToHaveSkills: ["PLC", "Edge Computing", "Curriculum Redesign"],
    responsibilities: [
      "Shadow lead automation engineers on live smart manufacturing projects.",
      "Develop co-branded curriculum electives aligning academic courses with real-world industry workflows.",
      "Formulate joint R&D grant proposals under SIH / DST / MeitY schemes."
    ],
    eligibility: "Faculty members, Assistant/Associate Professors from AICTE/UGC approved technical universities.",
    openings: 10,
    isFeatured: true
  }
];

export const initialSkillAssessments = [
  {
    id: "quiz-ai-ml",
    title: "AI & Machine Learning Benchmark",
    category: "Technical",
    duration: "15 mins",
    questionsCount: 5,
    description: "Evaluate your core understanding of Supervised Learning, Loss Functions, Model Overfitting, and Transformer Architectures.",
    questions: [
      {
        id: "q-1",
        question: "In training deep neural networks, which technique directly prevents overfitting by randomly zeroing out activations during forward propagation?",
        options: [
          "Batch Normalization",
          "Dropout",
          "Gradient Clipping",
          "L1 Regularization"
        ],
        correctIndex: 1,
        explanation: "Dropout randomly sets a fraction of input units to 0 at each update during training time, which helps prevent neural network units from co-adapting."
      },
      {
        id: "q-2",
        question: "What is the primary computational bottleneck in standard Multi-Head Self-Attention in Transformer models regarding sequence length N?",
        options: [
          "Linear O(N) memory complexity",
          "Quadratic O(N²) computational and memory complexity",
          "Logarithmic O(log N) lookup time",
          "Constant O(1) cache thrashing"
        ],
        correctIndex: 1,
        explanation: "Standard self-attention computes the dot-product between every query and key pair across sequence length N, yielding O(N²) time and space complexity."
      },
      {
        id: "q-3",
        question: "When dealing with severely imbalanced classification datasets (e.g., fraud detection with 99.9% negative class), which metric is most reliable for evaluation?",
        options: [
          "Accuracy",
          "Precision-Recall AUC (PR-AUC) or F1-Score",
          "Mean Squared Error (MSE)",
          "Silhouette Score"
        ],
        correctIndex: 1,
        explanation: "Accuracy is misleading for imbalanced data. PR-AUC and F1-score evaluate how well the model identifies the minority positive class without overwhelming false alarms."
      },
      {
        id: "q-4",
        question: "Which technique is commonly used to ground Generative AI LLMs with private, up-to-date institutional documentation without expensive re-training?",
        options: [
          "Full Model Parameter Fine-Tuning",
          "Retrieval-Augmented Generation (RAG) with Vector Databases",
          "Quantization to 4-bit weights",
          "Knowledge Distillation"
        ],
        correctIndex: 1,
        explanation: "RAG retrieves relevant domain documents from a vector index and passes them as factual context to the LLM prompt during generation."
      },
      {
        id: "q-5",
        question: "What is the role of the Softmax activation function when applied to the output logits of a multi-class neural network?",
        options: [
          "Transforms arbitrary real-valued logits into a normalized probability distribution summing to 1",
          "Forces negative gradients to zero to speed up ReLU convergence",
          "Performs dimensionality reduction similar to PCA",
          "Calculates the L2 norm of the weight matrices"
        ],
        correctIndex: 0,
        explanation: "Softmax exponentiates logits and divides by the sum of exponentials, producing probabilities between 0 and 1 that sum up to 1.0."
      }
    ]
  },
  {
    id: "quiz-web-cloud",
    title: "Full-Stack Web & Cloud Systems",
    category: "Technical",
    duration: "10 mins",
    questionsCount: 4,
    description: "Assess React component lifecycle, asynchronous state handling, REST API design, and containerization principles.",
    questions: [
      {
        id: "qc-1",
        question: "In React, why should state updates that depend on the previous state value use the functional updater pattern `setState(prev => ...)`?",
        options: [
          "Because state updates may be batched and asynchronous, guaranteeing access to the latest committed state",
          "It forces a synchronous DOM repaint immediately",
          "It prevents garbage collection memory leaks",
          "It automatically validates TypeScript types"
        ],
        correctIndex: 0,
        explanation: "React batches state updates for performance. The functional updater guarantees you receive the freshest state value regardless of batching."
      },
      {
        id: "qc-2",
        question: "In Docker containerization, what is the key advantage of using Multi-Stage Builds in a `Dockerfile`?",
        options: [
          "It allows running multiple operating systems concurrently in a single container",
          "It drastically reduces final image size by discarding build tools and intermediate artifacts",
          "It automatically encrypts the container storage volume",
          "It replaces Kubernetes orchestration"
        ],
        correctIndex: 1,
        explanation: "Multi-stage builds enable compiling source code in a heavy builder image and copying only the compiled production binary/assets into a minimal runtime image."
      },
      {
        id: "qc-3",
        question: "Which HTTP status code should a REST API return when a client request lacks valid authentication credentials?",
        options: [
          "400 Bad Request",
          "401 Unauthorized",
          "403 Forbidden",
          "404 Not Found"
        ],
        correctIndex: 1,
        explanation: "401 Unauthorized indicates that the request requires user authentication. 403 Forbidden means the server understands the identity but refuses authorization."
      },
      {
        id: "qc-4",
        question: "What is the core benefit of database indexing on frequently queried columns in SQL?",
        options: [
          "Converts linear O(N) table scans into logarithmic O(log N) B-Tree lookups",
          "Compresses database storage by 90%",
          "Prevents SQL injection vulnerabilities",
          "Automates cross-region database replication"
        ],
        correctIndex: 0,
        explanation: "B-Tree indexes create balanced search structures that allow finding rows in O(log N) time rather than scanning every record in the table."
      }
    ]
  },
  {
    id: "quiz-soft-skills",
    title: "Industry Readiness & Collaborative Aptitude",
    category: "Soft Skills",
    duration: "10 mins",
    questionsCount: 3,
    description: "Evaluate workplace communication, cross-functional agile teamwork, conflict resolution, and structured problem-solving.",
    questions: [
      {
        id: "qs-1",
        question: "During an Agile sprint, you realize a critical dependency from another team is delayed and will impact your deliverable. What is the most effective immediate action?",
        options: [
          "Wait until the sprint retrospective at the end of the month to bring it up",
          "Proactively flag the blocker in daily standup and coordinate with team leads to adjust scope or find a fallback",
          "Silently skip the feature and focus on low-priority items without notifying anyone",
          "Blame the other team publicly in cross-org channels"
        ],
        correctIndex: 1,
        explanation: "Transparent, early communication allows engineering managers and product owners to mitigate risks and reorganize sprint priorities before deadlines fail."
      },
      {
        id: "qs-2",
        question: "When receiving critical code review feedback asking for architectural refactoring from a senior engineer, the best professional approach is:",
        options: [
          "Take it personally and ignore the PR comments",
          "Understand the rationale, ask clarifying questions if needed, and incorporate improvements to elevate code quality",
          "Merge the code anyway without addressing comments",
          "Request to change the reviewer"
        ],
        correctIndex: 1,
        explanation: "Constructive code reviews are learning opportunities that safeguard system scalability, security, and team maintainability."
      },
      {
        id: "qs-3",
        question: "What is the principle of 'Root Cause Analysis' (e.g. 5 Whys technique) when an outage occurs in production?",
        options: [
          "Finding which individual engineer made the mistake to penalize them",
          "Drilling down past surface symptoms to identify systemic process/technical failures and establish safeguards",
          "Deleting log files to restart servers faster",
          "Writing a quick temporary patch without documenting the problem"
        ],
        correctIndex: 1,
        explanation: "Blameless post-mortems and Root Cause Analysis identify systemic vulnerabilities and implement automated guardrails so issues never repeat."
      }
    ]
  }
];

export const initialLearningPaths = [
  {
    id: "lp-ai-engineer",
    title: "AI & Machine Learning Industry Specialist Track",
    roleTarget: "AI/ML Engineer / GenAI Specialist",
    totalHours: "48 Hours",
    progress: 72,
    phases: [
      {
        phaseNumber: 1,
        title: "Learn Core Skills",
        status: "Completed",
        percent: 100,
        badge: "Core AI Certified",
        modules: [
          { name: "Advanced Python for Scientific Computing (NumPy, Pandas)", duration: "6 hrs", completed: true },
          { name: "Mathematics for ML: Linear Algebra & Multivariate Calculus", duration: "8 hrs", completed: true },
          { name: "Supervised & Unsupervised Machine Learning Algorithms", duration: "10 hrs", completed: true }
        ]
      },
      {
        phaseNumber: 2,
        title: "Build Real Projects",
        status: "In Progress",
        percent: 60,
        badge: "Project Builder",
        modules: [
          { name: "Deep Neural Networks with PyTorch from Scratch", duration: "8 hrs", completed: true },
          { name: "Computer Vision: Real-time Object Detection with YOLOv8", duration: "6 hrs", completed: true },
          { name: "Applied LLMs: Prompt Engineering & Vector RAG Architectures", duration: "8 hrs", completed: false, current: true },
          { name: "Deploying ML Microservices with Docker & FastAPI", duration: "6 hrs", completed: false }
        ]
      },
      {
        phaseNumber: 3,
        title: "Gain Industry Exposure",
        status: "Up Next",
        percent: 0,
        badge: "Industry Ready",
        modules: [
          { name: "Live Industry Hackathon: Edge AI Telemetry Challenge", duration: "12 hrs", completed: false },
          { name: "1-on-1 Mentorship Sprint with Google / TCS AI Leads", duration: "4 hrs", completed: false },
          { name: "Enterprise MLOps & CI/CD Pipeline Best Practices", duration: "6 hrs", completed: false }
        ]
      },
      {
        phaseNumber: 4,
        title: "Get Certified & Placed",
        status: "Locked",
        percent: 0,
        badge: "Placement Verified",
        modules: [
          { name: "Final Industry Capability Benchmark Assessment", duration: "2 hrs", completed: false },
          { name: "Digital Portfolio Verification & Cryptographic Skill Badging", duration: "1 hr", completed: false },
          { name: "Fast-track Recruiter Referral to Partner Enterprise Pipeline", duration: "Immediate", completed: false }
        ]
      }
    ]
  }
];

export const initialIndustryConnect = {
  mentors: [
    {
      id: "m-1",
      name: "Dr. Ananya Roy",
      role: "Principal AI Research Scientist",
      company: "Google Research",
      experience: "12+ yrs",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      skills: ["LLMs", "Multimodal Systems", "PyTorch"],
      availableSlots: ["Tomorrow, 4:00 PM", "Thu, 6:30 PM", "Sat, 11:00 AM"],
      rating: 4.9,
      sessionsCompleted: 140
    },
    {
      id: "m-2",
      name: "Saurabh Varma",
      role: "Engineering Director — Azure Cloud",
      company: "Microsoft",
      experience: "15+ yrs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      skills: ["Distributed Systems", "Cloud Architecture", "System Design"],
      availableSlots: ["Wed, 5:00 PM", "Fri, 3:00 PM"],
      rating: 4.95,
      sessionsCompleted: 210
    },
    {
      id: "m-3",
      name: "Karthik Subramanian",
      role: "Chief Architect — Robotics & Vision",
      company: "Tata Consultancy Services",
      experience: "10+ yrs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      skills: ["Edge AI", "Computer Vision", "ROS"],
      availableSlots: ["Thu, 4:00 PM", "Sat, 2:00 PM"],
      rating: 4.85,
      sessionsCompleted: 95
    }
  ],

  challenges: [
    {
      id: "chal-1",
      title: "Smart Manufacturing Edge AI Defect Detection Challenge",
      host: "Tata Consultancy Services (TCS Innovation Labs)",
      prizePool: "₹ 2,50,000 + Direct PPIs",
      deadline: "15 Oct 2026",
      participants: 412,
      difficulty: "Hard",
      tags: ["Computer Vision", "Edge AI", "PyTorch"],
      summary: "Develop a lightweight neural network achieving >95% precision in identifying sub-millimeter manufacturing surface anomalies with latency under 15ms."
    },
    {
      id: "chal-2",
      title: "Next-Gen Enterprise Semantic Intelligence & RAG Hackathon",
      host: "Google Cloud & Skill Orbit",
      prizePool: "₹ 5,00,000 + Google Mentorship",
      deadline: "28 Oct 2026",
      participants: 680,
      difficulty: "Advanced",
      tags: ["LLMs", "Vector DBs", "GenAI"],
      summary: "Build an autonomous multi-agent reasoning system capable of ingesting complex enterprise PDFs and resolving multi-step compliance queries."
    }
  ],

  facultyPrograms: [
    {
      id: "fdp-1",
      title: "Faculty Industry Immersion: Advanced Generative AI & Cloud Systems",
      host: "Microsoft & IIT Madras",
      duration: "2 Weeks (Online + 3 Days On-campus)",
      dates: "10 Nov - 24 Nov 2026",
      stipendGrant: "₹ 25,000 Research Fellowship",
      seats: "40 Faculty Seats",
      eligibility: "Professors / Lecturers in CSE, IT, ECE, AI",
      curriculum: "Co-designing industry-aligned curriculums, hands-on LLM model fine-tuning, cloud credit provisioning for academic labs."
    },
    {
      id: "fdp-2",
      title: "Industrial Automation, SCADA & Cyber-Physical Systems FDP",
      host: "Larsen & Toubro (L&T)",
      duration: "4 Weeks",
      dates: "01 Dec - 28 Dec 2026",
      stipendGrant: "₹ 40,000 Research Grant",
      seats: "25 Faculty Seats",
      eligibility: "Mechanical, Electrical & Automation Faculty",
      curriculum: "Direct immersion in L&T manufacturing plants, joint DST research project formulation, and student internship pipeline creation."
    }
  ]
};

export const initialAcademician = {
  id: "acad-101",
  name: "Dr. Rajesh Raman",
  designation: "Professor & Head, Dept. of AI & Data Systems",
  institution: "Anna University / College of Engineering, Guindy",
  email: "dr.rajesh.raman@annauniv.edu",
  domain: "Artificial Intelligence, Cognitive Systems & Data Engineering",
  researchPapersCount: 48,
  activeProjectsCount: 5,
  patentsCount: 4,
  hIndex: 19,
  mentoredStudentsCount: 320,
  verifiedFDPsCount: 12,
  consultancyGrants: "₹ 45.8 Lakhs",
  
  studentCohorts: [
    { batch: "Final Year B.Tech AI (2026)", totalStudents: 68, assessedPercent: 94, placedOrInterning: 52, averageReadiness: 81 },
    { batch: "Third Year B.Tech CSE (2027)", totalStudents: 120, assessedPercent: 88, placedOrInterning: 45, averageReadiness: 74 },
    { batch: "M.Tech Intelligent Systems (2026)", totalStudents: 24, assessedPercent: 100, placedOrInterning: 22, averageReadiness: 89 }
  ],

  facultyApplications: [
    {
      id: "fa-1",
      programTitle: "Faculty Industry Immersion: Advanced Generative AI & Cloud Systems",
      host: "Microsoft & IIT Madras",
      appliedDate: "12 Sep 2026",
      status: "Approved",
      dates: "10 Nov - 24 Nov 2026"
    }
  ]
};

export const initialRecruiter = {
  id: "rec-101",
  name: "Priya Sharma",
  role: "Lead Talent Acquisition & University Relations",
  company: "Google / Skill Orbit Partner Network",
  email: "priya.sharma@google.com",
  activePostingsCount: 6,
  shortlistedCandidatesCount: 34,
  interviewsScheduledThisWeek: 12,
  offersExtended: 18,
  averageMatchFit: "89%",
  topInstitutions: ["Anna University", "IIT Madras", "NIT Trichy", "BITS Pilani"]
};

export const institutionMetrics = {
  name: "College of Engineering, Anna University",
  location: "Chennai, Tamil Nadu",
  nirfRank: "Rank 8 (Engineering)",
  naacAccreditation: "A++ Grade (CGPA 3.82)",
  totalStudentsEnrolled: 4200,
  activeAssessmentsCompleted: 3840,
  batchReadinessScore: 82,
  placedCount: 890,
  activeInternshipsCount: 1240,
  totalIndustryPartners: 165,
  activeMOUs: 42,
  topHiringPartners: [
    { company: "Google", count: 28, avgPackage: "₹ 28 LPA" },
    { company: "Microsoft", count: 34, avgPackage: "₹ 26 LPA" },
    { company: "TCS Research", count: 110, avgPackage: "₹ 11 LPA" },
    { company: "Amazon", count: 45, avgPackage: "₹ 24 LPA" },
    { company: "L&T", count: 62, avgPackage: "₹ 10 LPA" }
  ],
  departmentReadiness: [
    { department: "Artificial Intelligence & Data Science", readiness: 88, students: 180, placed: 142 },
    { department: "Computer Science & Engineering", readiness: 85, students: 240, placed: 195 },
    { department: "Information Technology", readiness: 81, students: 210, placed: 160 },
    { department: "Electronics & Communication", readiness: 76, students: 200, placed: 135 },
    { department: "Mechanical & Automation", readiness: 72, students: 160, placed: 98 }
  ]
};
