-- ==============================================================================
-- SIXTH SENSE (Skill Orbit) — Complete Supabase PostgreSQL Schema & Seed Script
-- Paste and Run in Supabase Dashboard -> SQL Editor -> Run
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. CLEAN RESET (Drops existing tables to prevent column mismatch)
DROP TABLE IF EXISTS public.applications CASCADE;
DROP TABLE IF EXISTS public.certifications CASCADE;
DROP TABLE IF EXISTS public.opportunities CASCADE;
DROP TABLE IF EXISTS public.students CASCADE;
DROP TABLE IF EXISTS public.skill_assessments CASCADE;
DROP TABLE IF EXISTS public.academicians CASCADE;
DROP TABLE IF EXISTS public.recruiters CASCADE;
DROP TABLE IF EXISTS public.institutions CASCADE;
DROP TABLE IF EXISTS public.mentors CASCADE;
DROP TABLE IF EXISTS public.challenges CASCADE;
DROP TABLE IF EXISTS public.faculty_fdps CASCADE;

-- 3. STUDENTS TABLE (Student Role - Angel K)
CREATE TABLE public.students (
    id VARCHAR(100) PRIMARY KEY DEFAULT 'student-101',
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    roll_number VARCHAR(100) DEFAULT '2026-CSE-408',
    degree VARCHAR(255) DEFAULT 'B.Tech in Computer Science & Artificial Intelligence',
    institution VARCHAR(255) DEFAULT 'Anna University / College of Engineering, Guindy',
    grad_year VARCHAR(50) DEFAULT '2026',
    target_career VARCHAR(255) DEFAULT 'AI/ML Engineer & Intelligent Systems Specialist',
    overall_readiness INT DEFAULT 78,
    competency_twin JSONB DEFAULT '{"overallScore": 78, "knowledgeScore": 84, "buildScore": 74, "analyzedReposCount": 4, "verifiedSkillsCount": 8}'::jsonb,
    skills JSONB,
    skill_gaps JSONB,
    analyzed_projects JSONB,
    github_handle VARCHAR(100) DEFAULT 'angel-k',
    linkedin_url TEXT DEFAULT 'https://linkedin.com/in/angel-k',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. OPPORTUNITIES TABLE (All 6 Vacancies)
CREATE TABLE public.opportunities (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    company_category VARCHAR(100) DEFAULT 'Product Tech Leader',
    badge VARCHAR(50) DEFAULT 'Top Match',
    location VARCHAR(255) NOT NULL,
    work_mode VARCHAR(50) DEFAULT 'Hybrid',
    stipend VARCHAR(100) NOT NULL,
    duration VARCHAR(100) DEFAULT '6 Months',
    type VARCHAR(50) DEFAULT 'Full-time Internship',
    match_score INT DEFAULT 85,
    match_label VARCHAR(50) DEFAULT 'Strong Match',
    posted_date VARCHAR(50) DEFAULT '2 days ago',
    applicants_count INT DEFAULT 42,
    skills TEXT[] NOT NULL,
    description TEXT NOT NULL,
    eligibility TEXT,
    responsibilities TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. APPLICATIONS TABLE (ATS Candidate Pipeline)
CREATE TABLE public.applications (
    id VARCHAR(100) PRIMARY KEY,
    opportunity_id VARCHAR(100) REFERENCES public.opportunities(id) ON DELETE CASCADE,
    role VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    duration VARCHAR(100),
    applied_date VARCHAR(100) DEFAULT 'Today (Real-time)',
    status VARCHAR(100) DEFAULT 'Submitted · In ATS Screening',
    match_score INT DEFAULT 80,
    match_label VARCHAR(50) DEFAULT 'Good Fit',
    submission_details JSONB,
    timeline JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. SKILL ASSESSMENTS TABLE
CREATE TABLE public.skill_assessments (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    duration VARCHAR(50) DEFAULT '15 mins',
    questions_count INT DEFAULT 5,
    description TEXT NOT NULL,
    questions JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. ACADEMICIANS TABLE (Faculty Role - Dr. Rajesh Raman)
CREATE TABLE public.academicians (
    id VARCHAR(100) PRIMARY KEY DEFAULT 'acad-101',
    name VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    domain VARCHAR(255) NOT NULL,
    research_papers_count INT DEFAULT 48,
    active_projects_count INT DEFAULT 5,
    patents_count INT DEFAULT 4,
    h_index INT DEFAULT 19,
    mentored_students_count INT DEFAULT 320,
    consultancy_grants VARCHAR(100) DEFAULT '₹ 45.8 Lakhs',
    student_cohorts JSONB,
    faculty_applications JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. RECRUITERS TABLE (Industry Role - Priya Sharma)
CREATE TABLE public.recruiters (
    id VARCHAR(100) PRIMARY KEY DEFAULT 'rec-101',
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    active_postings_count INT DEFAULT 6,
    shortlisted_candidates_count INT DEFAULT 34,
    interviews_scheduled_this_week INT DEFAULT 12,
    offers_extended INT DEFAULT 18,
    average_match_fit VARCHAR(50) DEFAULT '89%',
    top_institutions TEXT[] DEFAULT ARRAY['Anna University', 'IIT Madras', 'NIT Trichy', 'BITS Pilani'],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. INSTITUTIONS TABLE (Admin Leadership - Anna University)
CREATE TABLE public.institutions (
    id VARCHAR(100) PRIMARY KEY DEFAULT 'inst-101',
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    nirf_rank VARCHAR(100) DEFAULT 'Rank 8 (Engineering)',
    naac_accreditation VARCHAR(100) DEFAULT 'A++ Grade (CGPA 3.82)',
    total_students_enrolled INT DEFAULT 4200,
    active_assessments_completed INT DEFAULT 3840,
    batch_readiness_score INT DEFAULT 82,
    placed_count INT DEFAULT 890,
    active_internships_count INT DEFAULT 1240,
    total_industry_partners INT DEFAULT 165,
    active_mous INT DEFAULT 42,
    top_hiring_partners JSONB,
    department_readiness JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 10. MENTORS TABLE
CREATE TABLE public.mentors (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    experience VARCHAR(50),
    avatar TEXT,
    skills TEXT[],
    available_slots TEXT[],
    rating NUMERIC(3, 2) DEFAULT 4.9,
    sessions_completed INT DEFAULT 100,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 11. CHALLENGES TABLE
CREATE TABLE public.challenges (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    host VARCHAR(255) NOT NULL,
    prize_pool VARCHAR(100) NOT NULL,
    deadline VARCHAR(50) NOT NULL,
    participants INT DEFAULT 400,
    difficulty VARCHAR(50) DEFAULT 'Hard',
    tags TEXT[],
    summary TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 12. FACULTY FDP PROGRAMS TABLE
CREATE TABLE public.faculty_fdps (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    host VARCHAR(255) NOT NULL,
    duration VARCHAR(100) NOT NULL,
    dates VARCHAR(100) NOT NULL,
    stipend_grant VARCHAR(100) NOT NULL,
    seats VARCHAR(50) DEFAULT '40 Faculty Seats',
    eligibility TEXT NOT NULL,
    curriculum TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 13. ENABLE ROW LEVEL SECURITY & OPEN ACCESS POLICIES
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skill_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.academicians ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recruiters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faculty_fdps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow All Students" ON public.students FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow All Opportunities" ON public.opportunities FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow All Applications" ON public.applications FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow All Assessments" ON public.skill_assessments FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow All Academicians" ON public.academicians FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow All Recruiters" ON public.recruiters FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow All Institutions" ON public.institutions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow All Mentors" ON public.mentors FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow All Challenges" ON public.challenges FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow All FDPs" ON public.faculty_fdps FOR ALL USING (true) WITH CHECK (true);

-- 14. SEED OPPORTUNITIES DATA
INSERT INTO public.opportunities (id, title, company, company_category, badge, location, work_mode, stipend, duration, type, match_score, match_label, posted_date, applicants_count, skills, description, eligibility, responsibilities)
VALUES 
('opp-1', 'AI/ML Intern', 'Google', 'Product Tech Leader', 'Top Match', 'Remote', 'Remote', '₹ 85,000 / month', '3 months', 'Internship', 92, 'Top Match', '2 days ago', 142, ARRAY['Machine Learning', 'Python', 'LLMs'], 'Join Google Next-Gen AI Research Team to work on cutting-edge Large Language Models, prompt tuning pipelines, and multimodal inference pipelines.', 'Pre-final or Final year B.Tech/M.Tech in CS/IT/AI/ECE with min 7.5 CGPA.', ARRAY['Develop and benchmark fine-tuning pipelines for transformer architectures.', 'Collaborate with senior research scientists on multimodal dataset curation.', 'Implement reproducible evaluations using standardized benchmarks (MMLU).']),
('opp-2', 'Data Science Intern', 'Microsoft', 'Tier 1 Enterprise', 'Best Fit', 'Bangalore / Hybrid', 'Hybrid', '₹ 80,000 / month', '6 months', 'Internship', 86, 'Strong Match', '3 days ago', 198, ARRAY['Data Analytics', 'SQL', 'Power BI'], 'Work with Microsoft Azure Data Platform teams to build predictive models, business intelligence workflows, and automated analytics pipelines.', 'B.Tech/BE/MCA with strong foundation in Relational SQL and Applied Statistics.', ARRAY['Analyze cloud telemetry to uncover usage patterns and cost heuristics.', 'Build interactive executive Power BI dashboards with real-time streaming data.', 'Design A/B test frameworks and statistical significance checks.']),
('opp-3', 'AI Research Intern', 'Tata Consultancy Services', 'Global Systems Leader', 'Direct Route', 'Chennai, India', 'On-site', '₹ 45,000 / month', '6 months', 'Internship', 84, 'Great Match', '1 day ago', 94, ARRAY['Computer Vision', 'Deep Learning'], 'TCS Research & Innovation Labs is hiring AI Research Interns to investigate 3D Vision, autonomous robotics, and visual inspection algorithms.', 'Students with demonstrated project or research work in Computer Vision.', ARRAY['Implement vision transformer models for defect segmentation in smart manufacturing.', 'Publish joint research findings at leading conferences (CVPR, ECCV).', 'Benchmark edge inference latency on NVIDIA Jetson and NPU hardware.']),
('opp-4', 'Full-Stack Cloud Engineer Intern', 'Infosys', 'Global IT Leader', 'Good Match', 'Hyderabad / Pune', 'Hybrid', '₹ 35,000 / month', '6 months', 'Internship', 78, 'Good Match', '4 days ago', 220, ARRAY['React.js', 'Node.js', 'SQL & Databases'], 'Build scalable microservices and responsive cloud portals for Fortune 500 enterprise modernization initiatives.', 'UG/PG students graduating in 2026/2027.', ARRAY['Develop responsive UI components in React and integrate RESTful microservices.', 'Write automated unit tests and participate in CI/CD pipeline deployment cycles.', 'Optimize frontend page load times and core web vitals.']),
('opp-5', 'Software Development Engineer (Entry Level)', 'Amazon', 'Tech Giant', 'Placement Match', 'Hyderabad, India', 'On-site', '₹ 24 LPA - 32 LPA', 'Full-Time', 'Full-Time Placement', 82, 'Placement Match', '5 days ago', 310, ARRAY['Python', 'System Design', 'SQL & Databases'], 'Amazon is looking for exceptional upcoming graduates to solve planet-scale engineering challenges across AWS, Prime Video, and Alexa AI.', '2026 batch graduates with strong Data Structures & Algorithms proficiency.', ARRAY['Design fault-tolerant distributed services handling millions of TPS.', 'Participate in design reviews, operational excellence on-call rotations, and sprint planning.', 'Author clean, maintainable, and high-performance production code.']),
('opp-6', 'Faculty Industry Immersion & FDP Fellowship', 'Larsen & Toubro (L&T)', 'Industrial Leader', 'Faculty Match', 'Mumbai / Chennai', 'Hybrid', '₹ 60,000 Fellowship Grant', '4 weeks', 'Faculty Internship & FDP', 90, 'Faculty Match', '1 week ago', 28, ARRAY['IoT & Sensors', 'Industrial Automation', 'Applied Research'], 'Specially designed for university professors and academic researchers to gain direct hands-on exposure to industrial automation and SCADA.', 'Faculty members, Assistant/Associate Professors from AICTE/UGC approved technical universities.', ARRAY['Shadow lead automation engineers on live smart manufacturing projects.', 'Develop co-branded curriculum electives aligning academic courses with real-world workflows.', 'Formulate joint R&D grant proposals under SIH / DST / MeitY schemes.']);

-- 15. SEED STUDENT PERSONA (Angel K)
INSERT INTO public.students (id, name, email, roll_number, degree, institution, grad_year, target_career, overall_readiness, competency_twin, skills, skill_gaps, analyzed_projects, github_handle, linkedin_url)
VALUES (
  'student-101',
  'Angel K',
  'angel.k@annauniv.edu',
  '2026-CSE-408',
  'B.Tech in Computer Science & Artificial Intelligence',
  'Anna University / College of Engineering, Guindy',
  '2026',
  'AI/ML Engineer & Intelligent Systems Specialist',
  78,
  '{"overallScore": 78, "knowledgeScore": 84, "buildScore": 74, "analyzedReposCount": 4, "verifiedSkillsCount": 8}'::jsonb,
  '[
    {"name": "Machine Learning", "proficiency": "Strong", "score": 88, "verified": true},
    {"name": "Python", "proficiency": "Strong", "score": 92, "verified": true},
    {"name": "LLMs & GenAI", "proficiency": "Developing", "score": 68, "verified": false},
    {"name": "Data Analytics", "proficiency": "Strong", "score": 82, "verified": true},
    {"name": "SQL & Databases", "proficiency": "Strong", "score": 85, "verified": true},
    {"name": "React.js", "proficiency": "Developing", "score": 72, "verified": true},
    {"name": "Deep Learning (PyTorch)", "proficiency": "Developing", "score": 65, "verified": false}
  ]'::jsonb,
  '[
    {"skill": "LLMs & GenAI / Prompt Engineering", "current": "Developing (68%)", "target": "Proficient (85%+)", "priority": 1, "matchImpact": "+12% Match Score"},
    {"skill": "Cloud Deployment & Docker Containerization", "current": "Emerging (45%)", "target": "Intermediate (75%+)", "priority": 2, "matchImpact": "+8% Match Score"}
  ]'::jsonb,
  '[
    {"title": "Real-time Defect Detection using Edge Computer Vision", "repoUrl": "github.com/angel-k/edge-defect-detection", "complexityScore": 91, "status": "Verified by TCS Mentor"},
    {"title": "Intelligent Semantic Search with Vector Embeddings & RAG", "repoUrl": "github.com/angel-k/semantic-rag-engine", "complexityScore": 88, "status": "Verified by Google AI Sprint"}
  ]'::jsonb,
  'angel-k',
  'https://linkedin.com/in/angel-k'
);

-- 16. SEED ACADEMICIAN PERSONA (Dr. Rajesh Raman)
INSERT INTO public.academicians (id, name, designation, institution, email, domain, research_papers_count, active_projects_count, patents_count, h_index, mentored_students_count, consultancy_grants, student_cohorts, faculty_applications)
VALUES (
  'acad-101',
  'Dr. Rajesh Raman',
  'Professor & Head, Dept. of AI & Data Systems',
  'Anna University / College of Engineering, Guindy',
  'dr.rajesh.raman@annauniv.edu',
  'Artificial Intelligence, Cognitive Systems & Data Engineering',
  48,
  5,
  4,
  19,
  320,
  '₹ 45.8 Lakhs',
  '[
    {"batch": "Final Year B.Tech AI (2026)", "totalStudents": 68, "assessedPercent": 94, "placedOrInterning": 52, "averageReadiness": 81},
    {"batch": "Third Year B.Tech CSE (2027)", "totalStudents": 120, "assessedPercent": 88, "placedOrInterning": 45, "averageReadiness": 74},
    {"batch": "M.Tech Intelligent Systems (2026)", "totalStudents": 24, "assessedPercent": 100, "placedOrInterning": 22, "averageReadiness": 89}
  ]'::jsonb,
  '[
    {"id": "fa-1", "programTitle": "Faculty Industry Immersion: Advanced Generative AI & Cloud Systems", "host": "Microsoft & IIT Madras", "status": "Approved", "dates": "10 Nov - 24 Nov 2026"}
  ]'::jsonb
);

-- 17. SEED RECRUITER PERSONA (Priya Sharma)
INSERT INTO public.recruiters (id, name, role, company, email, active_postings_count, shortlisted_candidates_count, interviews_scheduled_this_week, offers_extended, average_match_fit, top_institutions)
VALUES (
  'rec-101',
  'Priya Sharma',
  'Lead Talent Acquisition & University Relations',
  'Google / Skill Orbit Partner Network',
  'priya.sharma@google.com',
  6,
  34,
  12,
  18,
  '89%',
  ARRAY['Anna University', 'IIT Madras', 'NIT Trichy', 'BITS Pilani']
);

-- 18. SEED INSTITUTION ADMIN PERSONA (Anna University)
INSERT INTO public.institutions (id, name, location, nirf_rank, naac_accreditation, total_students_enrolled, active_assessments_completed, batch_readiness_score, placed_count, active_internships_count, total_industry_partners, active_mous, top_hiring_partners, department_readiness)
VALUES (
  'inst-101',
  'College of Engineering, Anna University',
  'Chennai, Tamil Nadu',
  'Rank 8 (Engineering)',
  'A++ Grade (CGPA 3.82)',
  4200,
  3840,
  82,
  890,
  1240,
  165,
  42,
  '[
    {"company": "Google", "count": 28, "avgPackage": "₹ 28 LPA"},
    {"company": "Microsoft", "count": 34, "avgPackage": "₹ 26 LPA"},
    {"company": "TCS Research", "count": 110, "avgPackage": "₹ 11 LPA"},
    {"company": "Amazon", "count": 45, "avgPackage": "₹ 24 LPA"}
  ]'::jsonb,
  '[
    {"department": "Artificial Intelligence & Data Science", "readiness": 88, "students": 180, "placed": 142},
    {"department": "Computer Science & Engineering", "readiness": 85, "students": 240, "placed": 195},
    {"department": "Information Technology", "readiness": 81, "students": 210, "placed": 160},
    {"department": "Electronics & Communication", "readiness": 76, "students": 200, "placed": 135}
  ]'::jsonb
);

-- 19. SEED APPLICATIONS
INSERT INTO public.applications (id, opportunity_id, role, company, location, duration, applied_date, status, match_score, match_label, timeline)
VALUES
('app-101', 'opp-1', 'AI/ML Intern', 'Google', 'Remote · Full-time Internship', '3 months', '18 Sep 2026', 'Skill Assessment Scheduled', 92, 'Top 5% Fit', '[
  {"stage": "Submitted", "date": "18 Sep 2026", "completed": true},
  {"stage": "Profile & Skill Screen", "date": "19 Sep 2026", "completed": true},
  {"stage": "Technical Assessment", "date": "24 Sep 2026", "completed": false, "active": true},
  {"stage": "Interview Round", "date": "Pending", "completed": false},
  {"stage": "Final Offer", "date": "Pending", "completed": false}
]'::jsonb),
('app-102', 'opp-2', 'Data Science Intern', 'Microsoft', 'Hybrid (Bangalore) · Internship', '6 months', '15 Sep 2026', 'Shortlisted for Interview', 86, 'Strong Fit', '[
  {"stage": "Submitted", "date": "15 Sep 2026", "completed": true},
  {"stage": "Profile & Skill Screen", "date": "16 Sep 2026", "completed": true},
  {"stage": "Technical Assessment", "date": "17 Sep 2026", "completed": true},
  {"stage": "Interview Round", "date": "23 Sep 2026 (2:30 PM)", "completed": false, "active": true},
  {"stage": "Final Offer", "date": "Pending", "completed": false}
]'::jsonb),
('app-103', 'opp-3', 'AI Research Intern', 'Tata Consultancy Services', 'Chennai, India · On-site', '6 months', '10 Sep 2026', 'Under Review', 84, 'Good Fit', '[
  {"stage": "Submitted", "date": "10 Sep 2026", "completed": true},
  {"stage": "Profile & Skill Screen", "date": "12 Sep 2026", "completed": true},
  {"stage": "Technical Assessment", "date": "Pending", "completed": false},
  {"stage": "Interview Round", "date": "Pending", "completed": false},
  {"stage": "Final Offer", "date": "Pending", "completed": false}
]'::jsonb);

-- 20. SEED SKILL ASSESSMENTS WITH COMPLETE QUESTION BANKS
INSERT INTO public.skill_assessments (id, title, category, duration, questions_count, description, questions)
VALUES
('quiz-ai-ml', 'AI & Machine Learning Benchmark', 'Technical', '15 mins', 5, 'Evaluate your core understanding of Supervised Learning, Loss Functions, Model Overfitting, and Transformer Architectures.', '[
  {
    "id": "q-1",
    "question": "In training deep neural networks, which technique directly prevents overfitting by randomly zeroing out activations during forward propagation?",
    "options": ["Batch Normalization", "Dropout", "Gradient Clipping", "L1 Regularization"],
    "correctIndex": 1,
    "explanation": "Dropout randomly sets a fraction of input units to 0 at each update during training time, which helps prevent units from co-adapting."
  },
  {
    "id": "q-2",
    "question": "What is the primary computational bottleneck in standard Multi-Head Self-Attention in Transformer models regarding sequence length N?",
    "options": ["Linear O(N) memory complexity", "Quadratic O(N²) computational and memory complexity", "Logarithmic O(log N) lookup time", "Constant O(1) cache thrashing"],
    "correctIndex": 1,
    "explanation": "Standard self-attention computes dot-products between all queries and keys, leading to O(N²) complexity."
  },
  {
    "id": "q-3",
    "question": "When dealing with severely imbalanced classification datasets (e.g., fraud detection with 99.9% negative class), which metric is most reliable for evaluation?",
    "options": ["Accuracy", "Precision-Recall AUC (PR-AUC) or F1-Score", "Mean Squared Error (MSE)", "Silhouette Score"],
    "correctIndex": 1,
    "explanation": "Accuracy is misleading on imbalanced datasets. PR-AUC and F1-score evaluate minority class detection accurately."
  },
  {
    "id": "q-4",
    "question": "Which technique is commonly used to ground Generative AI LLMs with private, up-to-date institutional documentation without expensive re-training?",
    "options": ["Full Model Parameter Fine-Tuning", "Retrieval-Augmented Generation (RAG) with Vector Databases", "Quantization to 4-bit weights", "Knowledge Distillation"],
    "correctIndex": 1,
    "explanation": "RAG retrieves relevant domain documents from a vector index and injects them as factual context into the prompt."
  },
  {
    "id": "q-5",
    "question": "What is the role of the Softmax activation function when applied to the output logits of a multi-class neural network?",
    "options": ["Transforms arbitrary real-valued logits into a normalized probability distribution summing to 1", "Forces negative gradients to zero to speed up ReLU convergence", "Performs dimensionality reduction similar to PCA", "Calculates the L2 norm of the weight matrices"],
    "correctIndex": 0,
    "explanation": "Softmax exponentiates logits and divides by their sum, yielding a normalized probability distribution summing to 1.0."
  }
]'::jsonb),
('quiz-web-cloud', 'Full-Stack Web & Cloud Systems', 'Technical', '10 mins', 4, 'Assess React component lifecycle, asynchronous state handling, REST API design, and containerization principles.', '[
  {
    "id": "qc-1",
    "question": "In React, why should state updates that depend on the previous state value use the functional updater pattern setState(prev => ...)?",
    "options": ["Because state updates may be batched and asynchronous, guaranteeing access to the latest committed state", "It forces a synchronous DOM repaint immediately", "It prevents garbage collection memory leaks", "It automatically validates TypeScript types"],
    "correctIndex": 0,
    "explanation": "React batches state updates for performance. The functional updater guarantees you receive the freshest state value."
  },
  {
    "id": "qc-2",
    "question": "In Docker containerization, what is the key advantage of using Multi-Stage Builds in a Dockerfile?",
    "options": ["It allows running multiple operating systems concurrently in a single container", "It drastically reduces final image size by discarding build tools and intermediate artifacts", "It automatically encrypts the container storage volume", "It replaces Kubernetes orchestration"],
    "correctIndex": 1,
    "explanation": "Multi-stage builds compile code in a builder image and copy only the final minimal binary/assets into the production image."
  },
  {
    "id": "qc-3",
    "question": "Which HTTP status code should a REST API return when a client request lacks valid authentication credentials?",
    "options": ["400 Bad Request", "401 Unauthorized", "403 Forbidden", "404 Not Found"],
    "correctIndex": 1,
    "explanation": "401 Unauthorized indicates the request requires user authentication credentials."
  },
  {
    "id": "qc-4",
    "question": "What is the core benefit of database indexing on frequently queried columns in SQL?",
    "options": ["Converts linear O(N) table scans into logarithmic O(log N) B-Tree lookups", "Compresses database storage by 90%", "Prevents SQL injection vulnerabilities", "Automates cross-region database replication"],
    "correctIndex": 0,
    "explanation": "B-Tree indexes create balanced search structures that enable finding matching rows in O(log N) time."
  }
]'::jsonb),
('quiz-soft-skills', 'Industry Readiness & Collaborative Aptitude', 'Soft Skills', '10 mins', 3, 'Evaluate workplace communication, cross-functional agile teamwork, conflict resolution, and structured problem-solving.', '[
  {
    "id": "qs-1",
    "question": "During an Agile sprint, you realize a critical dependency from another team is delayed and will impact your deliverable. What is the most effective immediate action?",
    "options": ["Wait until the sprint retrospective at the end of the month to bring it up", "Proactively flag the blocker in daily standup and coordinate with team leads to adjust scope or find a fallback", "Silently skip the feature and focus on low-priority items without notifying anyone", "Blame the other team publicly in cross-org channels"],
    "correctIndex": 1,
    "explanation": "Transparent, early communication allows engineering managers to mitigate risks and reorganize priorities before deadlines fail."
  },
  {
    "id": "qs-2",
    "question": "When receiving critical code review feedback asking for architectural refactoring from a senior engineer, the best professional approach is:",
    "options": ["Take it personally and ignore the PR comments", "Understand the rationale, ask clarifying questions if needed, and incorporate improvements to elevate code quality", "Merge the code anyway without addressing comments", "Request to change the reviewer"],
    "correctIndex": 1,
    "explanation": "Constructive code reviews elevate code quality, security, and team maintainability."
  },
  {
    "id": "qs-3",
    "question": "What is the principle of Root Cause Analysis (e.g. 5 Whys technique) when an outage occurs in production?",
    "options": ["Finding which individual engineer made the mistake to penalize them", "Drilling down past surface symptoms to identify systemic process/technical failures and establish safeguards", "Deleting log files to restart servers faster", "Writing a quick temporary patch without documenting the problem"],
    "correctIndex": 1,
    "explanation": "Root Cause Analysis identifies systemic vulnerabilities and implements automated guardrails so bugs never repeat."
  }
]'::jsonb);

-- 21. SEED MENTORS
INSERT INTO public.mentors (id, name, role, company, experience, avatar, skills, available_slots, rating, sessions_completed)
VALUES
('m-1', 'Dr. Ananya Roy', 'Principal AI Research Scientist', 'Google Research', '12+ yrs', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', ARRAY['LLMs', 'Multimodal Systems', 'PyTorch'], ARRAY['Tomorrow, 4:00 PM', 'Thu, 6:30 PM', 'Sat, 11:00 AM'], 4.9, 140),
('m-2', 'Saurabh Varma', 'Engineering Director — Azure Cloud', 'Microsoft', '15+ yrs', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200', ARRAY['Distributed Systems', 'Cloud Architecture', 'System Design'], ARRAY['Wed, 5:00 PM', 'Fri, 3:00 PM'], 4.95, 210),
('m-3', 'Karthik Subramanian', 'Chief Architect — Robotics & Vision', 'Tata Consultancy Services', '10+ yrs', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', ARRAY['Edge AI', 'Computer Vision', 'ROS'], ARRAY['Thu, 4:00 PM', 'Sat, 2:00 PM'], 4.85, 95);

-- 22. SEED INNOVATION CHALLENGES
INSERT INTO public.challenges (id, title, host, prize_pool, deadline, participants, difficulty, tags, summary)
VALUES
('chal-1', 'Smart Manufacturing Edge AI Defect Detection Challenge', 'Tata Consultancy Services (TCS Innovation Labs)', '₹ 2,50,000 + Direct PPIs', '15 Oct 2026', 412, 'Hard', ARRAY['Computer Vision', 'Edge AI', 'PyTorch'], 'Develop a lightweight neural network achieving >95% precision in identifying sub-millimeter manufacturing surface anomalies with latency under 15ms.'),
('chal-2', 'Next-Gen Enterprise Semantic Intelligence & RAG Hackathon', 'Google Cloud & Skill Orbit', '₹ 5,00,000 + Google Mentorship', '28 Oct 2026', 680, 'Advanced', ARRAY['LLMs', 'Vector DBs', 'GenAI'], 'Build an autonomous multi-agent reasoning system capable of ingesting complex enterprise PDFs and resolving multi-step compliance queries.');

-- 23. SEED FACULTY FDP PROGRAMS
INSERT INTO public.faculty_fdps (id, title, host, duration, dates, stipend_grant, seats, eligibility, curriculum)
VALUES
('fdp-1', 'Faculty Industry Immersion: Advanced Generative AI & Cloud Systems', 'Microsoft & IIT Madras', '2 Weeks (Online + 3 Days On-campus)', '10 Nov - 24 Nov 2026', '₹ 25,000 Research Fellowship', '40 Faculty Seats', 'Professors / Lecturers in CSE, IT, ECE, AI', 'Co-designing industry-aligned curriculums, hands-on LLM model fine-tuning, cloud credit provisioning for academic labs.'),
('fdp-2', 'Industrial Automation, SCADA & Cyber-Physical Systems FDP', 'Larsen & Toubro (L&T)', '4 Weeks', '01 Dec - 28 Dec 2026', '₹ 40,000 Research Grant', '25 Faculty Seats', 'Mechanical, Electrical & Automation Faculty', 'Direct immersion in L&T manufacturing plants, joint DST research project formulation, and student internship pipeline creation.');

-- 24. ENABLE REALTIME BROADCASTING
ALTER PUBLICATION supabase_realtime ADD TABLE public.students;
ALTER PUBLICATION supabase_realtime ADD TABLE public.opportunities;
ALTER PUBLICATION supabase_realtime ADD TABLE public.applications;
ALTER PUBLICATION supabase_realtime ADD TABLE public.academicians;
ALTER PUBLICATION supabase_realtime ADD TABLE public.recruiters;
ALTER PUBLICATION supabase_realtime ADD TABLE public.institutions;
