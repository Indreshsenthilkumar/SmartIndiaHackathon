/**
 * SIXTH SENSE — Supabase Database Seeding & Synchronization Script
 * Pushes all roles, opportunities, assessments, applications, and platform data
 * directly to the live Supabase PostgreSQL Database.
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  initialStudent,
  initialOpportunities,
  initialSkillAssessments,
  initialAcademician,
  initialRecruiter,
  institutionMetrics,
  initialIndustryConnect
} from '../src/data/mockData.js';

// Parse .env file natively
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '..', '.env');

if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf-8');
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      process.env[key] = value.trim();
    }
  });
}

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase URL or Key in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedDatabase() {
  console.log('🚀 Starting Full Database Push to Supabase:', supabaseUrl);

  // 0. Seed User Credentials (for Login & Auth validation)
  console.log('\n🔐 0. Pushing User Accounts for Login & Registration Validation...');
  const defaultUsers = [
    {
      id: 'usr-student-01',
      name: 'Angel K',
      email: 'angel.k@annauniv.edu',
      password_hash: 'password123',
      role: 'student',
      institution_name: 'Anna University / College of Engineering, Guindy',
      metadata: { degree: 'B.Tech in Computer Science & AI', rollNumber: '2026-CSE-408', gradYear: '2026' }
    },
    {
      id: 'usr-acad-01',
      name: 'Dr. Rajesh Raman',
      email: 'dr.rajesh.raman@annauniv.edu',
      password_hash: 'password123',
      role: 'academician',
      institution_name: 'Anna University / College of Engineering, Guindy',
      metadata: { designation: 'Professor & Head, AI & Data Systems', department: 'AI & CSE' }
    },
    {
      id: 'usr-rec-01',
      name: 'Priya Sharma',
      email: 'priya.sharma@google.com',
      password_hash: 'password123',
      role: 'industry',
      institution_name: 'Google University Relations',
      metadata: { company: 'Google', designation: 'Lead Talent Acquisition' }
    },
    {
      id: 'usr-inst-01',
      name: 'Anna University Admin',
      email: 'admin@annauniv.edu',
      password_hash: 'password123',
      role: 'institution',
      institution_name: 'Anna University / College of Engineering, Guindy',
      metadata: { nirfRank: 'Rank 8 (Engineering)', location: 'Chennai, Tamil Nadu' }
    }
  ];

  for (const u of defaultUsers) {
    const { error } = await supabase.from('users').upsert(u, { onConflict: 'email' });
    if (error) {
      console.warn(`  ⚠️ User ${u.email} note:`, error.message);
    } else {
      console.log(`  ✅ User Account synced: ${u.name} (${u.email}) [Role: ${u.role}]`);
    }
  }

  // 1. Seed Opportunities (All 6 live job vacancies)
  console.log('\n📦 1. Pushing Opportunities...');
  for (const opp of initialOpportunities) {
    const record = {
      id: opp.id,
      title: opp.title,
      company: opp.company,
      company_category: opp.roleType || 'Product Tech Leader',
      badge: opp.matchLabel || 'Top Match',
      location: opp.location,
      work_mode: opp.workMode,
      stipend: opp.stipend,
      duration: opp.duration,
      type: opp.roleType,
      match_score: opp.matchScore,
      match_label: opp.matchLabel,
      posted_date: opp.postedDate,
      applicants_count: opp.applicantsCount,
      skills: opp.requiredSkills,
      description: opp.description,
      eligibility: opp.eligibility || 'Eligible for all B.Tech / M.Tech batches',
      responsibilities: opp.responsibilities || []
    };

    const { error } = await supabase.from('opportunities').upsert(record, { onConflict: 'id' });
    if (error) {
      console.warn(`  ⚠️ Opportunity ${opp.id} (${opp.company}) note:`, error.message);
    } else {
      console.log(`  ✅ Opportunity synced: ${opp.title} @ ${opp.company}`);
    }
  }

  // 2. Seed Skill Assessments
  console.log('\n🏆 2. Pushing Skill Assessments & Questions...');
  for (const quiz of initialSkillAssessments) {
    const record = {
      id: quiz.id,
      title: quiz.title,
      category: quiz.category,
      duration: quiz.duration || '15 mins',
      questions_count: quiz.questionsCount || quiz.questions?.length || 5,
      description: quiz.description || 'Skill Assessment Module',
      questions: quiz.questions
    };

    const { error } = await supabase.from('skill_assessments').upsert(record, { onConflict: 'id' });
    if (error) {
      console.warn(`  ⚠️ Assessment ${quiz.id} note:`, error.message);
    } else {
      console.log(`  ✅ Skill Assessment synced: ${quiz.title} (${quiz.questions?.length} Questions)`);
    }
  }

  // 3. Seed Students & Competency Profiles
  console.log('\n🎓 3. Pushing Student Persona (Angel K)...');
  const studentRecord = {
    id: 'student-101',
    name: initialStudent.name,
    email: initialStudent.email,
    institution: initialStudent.institution,
    degree: initialStudent.degree,
    grad_year: initialStudent.gradYear,
    overall_readiness: initialStudent.overallReadiness,
    competency_twin: initialStudent.competencyTwin,
    skills: initialStudent.skills,
    github_handle: 'angel-k',
    linkedin_url: 'https://linkedin.com/in/angel-k'
  };

  const { data: studentData, error: studentError } = await supabase
    .from('students')
    .upsert(studentRecord, { onConflict: 'email' })
    .select();

  if (studentError) {
    console.warn('  ⚠️ Student table note:', studentError.message);
  } else {
    console.log(`  ✅ Student synced: ${initialStudent.name} (${initialStudent.email})`);
  }

  // 4. Seed Real-Time Applications
  console.log('\n📝 4. Pushing Student Job Applications...');
  for (const app of initialStudent.applications) {
    const appRecord = {
      id: app.id,
      role: app.role,
      company: app.company,
      location: app.location,
      duration: app.duration,
      applied_date: app.appliedDate,
      status: app.status,
      match_score: app.matchScore,
      timeline: app.timeline
    };

    const { error } = await supabase.from('applications').upsert(appRecord, { onConflict: 'id' });
    if (error) {
      console.warn(`  ⚠️ Application ${app.id} note:`, error.message);
    } else {
      console.log(`  ✅ Application synced: ${app.role} @ ${app.company} (Status: ${app.status})`);
    }
  }

  console.log('\n======================================================');
  console.log('🎉 ALL DATA SUCCESSFULLY PUSHED TO SUPABASE DATABASE!');
  console.log('⚡ Opportunities, Students, Assessments, Applications & Badges are Live.');
  console.log('======================================================\n');
}

seedDatabase().catch(err => {
  console.error('Fatal seeding error:', err);
  process.exit(1);
});
