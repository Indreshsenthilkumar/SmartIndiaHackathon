"""
SIXTH SENSE — AI & NLP Skill Mapping and Taxonomy Engine
Built with Python, spaCy, scikit-learn (TF-IDF & Cosine Similarity), and Hierarchical Taxonomy Graphs.
"""

import sys
import json
import re
from typing import List, Dict, Any, Tuple

# Try importing scikit-learn & spacy, with graceful fallback algorithms if compiling
try:
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.metrics.pairwise import cosine_similarity
    SKLEARN_AVAILABLE = True
except ImportError:
    SKLEARN_AVAILABLE = False

try:
    import spacy
    from spacy.matcher import PhraseMatcher
    SPACY_AVAILABLE = True
    try:
        nlp = spacy.load("en_core_web_sm")
    except Exception:
        nlp = spacy.blank("en")
except ImportError:
    SPACY_AVAILABLE = False
    nlp = None

# Comprehensive Hierarchical Industry Skill Taxonomy
SKILL_TAXONOMY = {
    "AI & Machine Learning": {
        "Deep Learning": [
            "PyTorch", "TensorFlow", "Neural Networks", "CNNs", "RNNs", "Backpropagation", "Loss Functions"
        ],
        "NLP & Generative AI": [
            "LLMs", "Transformers", "spaCy", "Hugging Face", "BERT", "GPT", "RAG", "Prompt Engineering", "Vector DBs", "LangChain"
        ],
        "Computer Vision": [
            "OpenCV", "YOLOv8", "Object Detection", "Image Segmentation", "3D Vision", "Vision Transformers"
        ],
        "MLOps & Deployment": [
            "Model Optimization", "ONNX", "FastAPI", "Docker", "Edge AI", "TensorRT", "MLflow"
        ]
    },
    "Data Science & Analytics": {
        "Data Engineering": [
            "SQL", "PostgreSQL", "Data Pipelines", "ETL", "Spark", "Pandas", "NumPy"
        ],
        "Analytics & BI": [
            "Data Analytics", "Power BI", "Tableau", "Statistical Modeling", "A/B Testing", "Feature Engineering"
        ]
    },
    "Web & Cloud Systems": {
        "Frontend Architecture": [
            "React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Next.js", "State Management"
        ],
        "Backend & Microservices": [
            "Node.js", "Python", "REST APIs", "GraphQL", "Express.js", "Microservices", "System Design"
        ],
        "Cloud & DevOps": [
            "AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Linux", "Serverless"
        ]
    },
    "Core Engineering & IoT": {
        "Embedded Systems": [
            "IoT & Sensors", "Edge Computing", "ROS", "Robotics", "C++", "Microcontrollers", "Industrial Automation"
        ]
    },
    "Soft Skills & Collaborative Aptitude": {
        "Professional Competencies": [
            "Critical Problem Solving", "Industry Communication", "Cross-functional Teamwork", "Agile & Scrum", "Root Cause Analysis"
        ]
    }
}

# Flattened list of all taxonomy skills for NER Matching
ALL_TAXONOMY_SKILLS = []
for domain, subdomains in SKILL_TAXONOMY.items():
    for sub, skills in subdomains.items():
        ALL_TAXONOMY_SKILLS.extend(skills)
ALL_TAXONOMY_SKILLS = list(set(ALL_TAXONOMY_SKILLS))


class SkillMappingEngine:
    """
    NLP & ML Skill Extraction, Taxonomy Classification & Cosine Match Scoring Engine.
    """

    def __init__(self):
        self.taxonomy = SKILL_TAXONOMY
        self.all_skills = ALL_TAXONOMY_SKILLS
        self._init_spacy_matcher()

    def _init_spacy_matcher(self):
        """Initializes spaCy phrase patterns for skill entity extraction."""
        if SPACY_AVAILABLE and nlp:
            self.matcher = PhraseMatcher(nlp.vocab, attr="LOWER")
            patterns = [nlp.make_doc(skill) for skill in self.all_skills]
            self.matcher.add("SKILL_PATTERN", patterns)
        else:
            self.matcher = None

    def extract_skills_spacy(self, text: str) -> List[str]:
        """
        Extracts verified skills from free-form text using spaCy NER / PhraseMatcher with regex fallback.
        """
        if not text:
            return []

        extracted = set()

        # Method 1: spaCy PhraseMatcher
        if SPACY_AVAILABLE and nlp and self.matcher:
            doc = nlp(text)
            matches = self.matcher(doc)
            for match_id, start, end in matches:
                span = doc[start:end]
                extracted.add(span.text)

        # Method 2: Case-insensitive boundary keyword matching (robust fallback)
        for skill in self.all_skills:
            pattern = r'\b' + re.escape(skill) + r'\b'
            if re.search(pattern, text, re.IGNORECASE):
                extracted.add(skill)

        return sorted(list(extracted))

    def map_skills_to_taxonomy(self, skills: List[str]) -> Dict[str, Any]:
        """
        Maps a list of extracted skills to the hierarchical taxonomy tree.
        """
        mapped_domains = {}
        for skill in skills:
            found = False
            for domain, subdomains in self.taxonomy.items():
                for sub, skill_list in subdomains.items():
                    if any(s.lower() == skill.lower() for s in skill_list):
                        if domain not in mapped_domains:
                            mapped_domains[domain] = {}
                        if sub not in mapped_domains[domain]:
                            mapped_domains[domain][sub] = []
                        mapped_domains[domain][sub].append(skill)
                        found = True
                        break
                if found:
                    break

        return mapped_domains

    def compute_sklearn_match(self, student_skills: List[str], student_projects_text: str, job_description: str, required_skills: List[str]) -> Dict[str, Any]:
        """
        Computes the TF-IDF Vector representation & Cosine Similarity Match Score using scikit-learn.
        """
        # Formulate rich text documents for candidate and job
        student_corpus = " ".join(student_skills) + " " + student_projects_text
        job_corpus = job_description + " " + " ".join(required_skills)

        # 1. Scikit-learn TF-IDF Vectorization & Cosine Similarity
        if SKLEARN_AVAILABLE:
            vectorizer = TfidfVectorizer(ngram_range=(1, 2), stop_words='english')
            tfidf_matrix = vectorizer.fit_transform([student_corpus, job_corpus])
            similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
            raw_score = float(similarity)
        else:
            # Mathematical TF-IDF / Jaccard Fallback
            student_tokens = set(student_corpus.lower().split())
            job_tokens = set(job_corpus.lower().split())
            intersection = student_tokens.intersection(job_tokens)
            union = student_tokens.union(job_tokens)
            raw_score = len(intersection) / len(union) if union else 0.5

        # 2. Skill Overlap & Gap Analysis
        extracted_student_skills = set([s.lower() for s in student_skills])
        matched_skills = []
        missing_gaps = []

        for req in required_skills:
            if req.lower() in extracted_student_skills or any(req.lower() in s.lower() for s in student_skills):
                matched_skills.append(req)
            else:
                missing_gaps.append(req)

        # 3. Blended Placement Fit Score (50% Exact Skill Overlap + 50% TF-IDF Cosine Vector)
        overlap_ratio = len(matched_skills) / len(required_skills) if required_skills else 1.0
        blended_score = round((overlap_ratio * 0.65 + raw_score * 0.35) * 100)
        final_score = max(45, min(96, blended_score))

        # 4. Generate AI Gap Recommendations
        gap_recommendations = []
        for gap in missing_gaps:
            gap_recommendations.append({
                "skill": gap,
                "urgency": "High" if gap in ["Python", "PyTorch", "LLMs", "React.js", "Docker"] else "Medium",
                "recommendedModule": f"Complete 2-week Industry Sprint in {gap}",
                "matchGain": "+8% Match Score"
            })

        return {
            "matchScore": final_score,
            "cosineSimilarity": round(raw_score, 4),
            "matchedSkills": matched_skills,
            "missingGaps": missing_gaps,
            "gapRecommendations": gap_recommendations,
            "nlpEngine": "spaCy + scikit-learn (TF-IDF & Cosine Similarity)",
            "taxonomyMapping": self.map_skills_to_taxonomy(matched_skills)
        }


# CLI / API Execution
if __name__ == "__main__":
    engine = SkillMappingEngine()

    input_data = {}
    if len(sys.argv) > 1 and sys.argv[1].strip():
        try:
            input_data = json.loads(sys.argv[1])
        except Exception:
            input_data = {}
    elif not sys.stdin.isatty():
        try:
            raw = sys.stdin.read()
            if raw.strip():
                input_data = json.loads(raw)
        except Exception:
            input_data = {}

    student_skills = input_data.get("studentSkills", ["Python", "Machine Learning", "Data Analytics", "SQL", "React.js"])
    student_projects = input_data.get("studentProjectsText", "Trained deep vision YOLOv8 defect detection and built semantic search vector RAG with ChromaDB.")
    jd = input_data.get("jobDescription", "Google AI Research team is hiring AI/ML Interns with strong Python, Machine Learning, and LLMs experience.")
    required_skills = input_data.get("requiredSkills", ["Machine Learning", "Python", "LLMs"])

    result = engine.compute_sklearn_match(
        student_skills=student_skills,
        student_projects_text=student_projects,
        job_description=jd,
        required_skills=required_skills
    )

    print(json.dumps(result))

