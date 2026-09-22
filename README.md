# 🌐 SIXTH SENSE — Skill Orbit
### Centralized Academia–Industry Collaboration & AI Skill Taxonomy Platform

![Platform Theme](https://img.shields.io/badge/Platform-SIXTH%20SENSE%20Skill%20Orbit-2563eb)
![React](https://img.shields.io/badge/Frontend-React%2019%20%7C%20Vite%208-61dafb)
![Node.js](https://img.shields.io/badge/Backend-Node.js%20REST%20APIs-339933)
![Python NLP](https://img.shields.io/badge/AI%20Engine-spaCy%20%7C%20scikit--learn-3776ab)
![Database](https://img.shields.io/badge/Database-Supabase%20%7C%20PostgreSQL-3ecf8e)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Overview

**SIXTH SENSE Skill Orbit** is an enterprise-grade ecosystem bridging Students, Academicians, Industry Recruiters, and Higher Educational Institutions. It pairs real-time opportunity discovery and ATS application tracking with an **advanced Python NLP machine learning engine** using **spaCy** and **scikit-learn** to compute mathematical TF-IDF & Cosine Similarity match percentages across a 5-domain skill taxonomy.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies Used | Key Responsibilities |
| :--- | :--- | :--- |
| **Frontend** | **React 19, Vite 8, Lucide React, Vanilla CSS** | Responsive single-page application, custom design system (`#f8fafc` slate & glassmorphic cards), 4 persona dashboards. |
| **Backend REST API** | **Node.js, Express, Child Process IPC** | REST endpoints (`/api/ai/match-skills`, `/api/ai/extract-entities`, `/api/health`), orchestration of AI workers. |
| **AI / Machine Learning** | **Python 3, spaCy (`en_core_web_sm`), scikit-learn (`TfidfVectorizer`, `cosine_similarity`)** | Unstructured resume entity extraction, skill mapping against 5-domain hierarchical taxonomy, deterministic fit scoring (0–100%). |
| **Database & Realtime** | **Supabase (PostgreSQL 15+), Realtime WebSockets** | Relational schemas (`institutions`, `students`, `academicians`, `recruiters`, `opportunities`, `applications`), real-time sync. |
| **Deployment** | **Vercel (Frontend), Render / Railway (Backend)** | Edge CDN distribution, automated CI/CD pipeline. |

---

## 👥 4 Integrated Personas

1. **🎓 Student Portal**: Skill readiness tracker, gap analysis, 1-click verified application workflow, and adaptive quizzes.
2. **🏛️ Academician Hub**: Industry-aligned curriculum co-design, Faculty Development Programs (FDP), and research grants.
3. **💼 Industry Recruiter**: Post live opportunities & challenges, review applicants with AI match breakdowns, and manage ATS stages.
4. **🏫 Institution Admin**: NIRF & NAAC compliance analytics, department-wise placement metrics, and college verification governance.

---

## ⚡ Quickstart & Local Setup

### 1. Prerequisites
- **Node.js**: `v18+` or `v20+`
- **Python**: `3.9+` or `3.10+` with `pip`

### 2. Clone & Install Dependencies
```bash
git clone https://github.com/Indreshsenthilkumar/SmartIndiaHackathon.git
cd SmartIndiaHackathon

# Install Node dependencies
npm install

# Install Python AI NLP dependencies
pip install -r requirements.txt
python -m spacy download en_core_web_sm
```

### 3. Environment Configuration
Create a `.env` file in the root directory (or copy from `.env.example`):
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
PORT=5001
```

### 4. Database Initialization (Supabase SQL)
1. Open your **Supabase Dashboard** $\rightarrow$ **SQL Editor**.
2. Run the script located in [`supabase/schema.sql`](supabase/schema.sql).
3. (Optional) Run initial data seeder:
   ```bash
   npm run seed:supabase
   ```

### 5. Run Development Servers
In two separate terminal windows (or background processes):

**Terminal 1 — Frontend:**
```bash
npm run dev
# Frontend runs at: http://localhost:5173
```

**Terminal 2 — Backend & AI Engine:**
```bash
npm run server
# Backend runs at: http://localhost:5001
```

---

## ☁️ How to Host the Backend (Production Guide)

To host the Node.js + Python AI Engine online for free or low cost, use **Render** or **Railway**:

### Option A: Deploying on Render (Recommended)
1. Push your repository to GitHub (`https://github.com/Indreshsenthilkumar/SmartIndiaHackathon`).
2. Go to [render.com](https://render.com) and create a **New Web Service**.
3. Select your repository.
4. Configure the settings:
   - **Environment**: `Node`
   - **Build Command**:
     ```bash
     npm install && pip install -r requirements.txt && python -m spacy download en_core_web_sm
     ```
   - **Start Command**:
     ```bash
     node server/server.js
     ```
5. In **Environment Variables**, add:
   - `PORT` = `10000` (or leave default)
   - `SUPABASE_URL` = your Supabase Project URL
   - `SUPABASE_ANON_KEY` = your Supabase Anon Public Key
6. Click **Deploy Web Service**. Render will provision your Node.js + Python server with a live HTTPS URL (e.g. `https://smart-india-hackathon-backend.onrender.com`).

---

### Option B: Deploying on Railway
1. Go to [railway.app](https://railway.app) and click **New Project** $\rightarrow$ **Deploy from GitHub repo**.
2. Railway detects both Node.js and Python (`requirements.txt`).
3. Set the start command: `node server/server.js`.
4. Add the environment variables (`SUPABASE_URL`, `SUPABASE_ANON_KEY`).
5. Generate a public domain under service **Settings** $\rightarrow$ **Networking**.

---

## 🌐 How to Host the Frontend (Vercel)
1. Go to [vercel.com](https://vercel.com) $\rightarrow$ **Add New Project** $\rightarrow$ Select `SmartIndiaHackathon`.
2. Framework Preset: **Vite**.
3. In **Environment Variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Click **Deploy**.

---

## 📜 License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
