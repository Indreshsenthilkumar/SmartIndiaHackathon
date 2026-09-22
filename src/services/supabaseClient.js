/**
 * SIXTH SENSE — Two-Way Realtime Supabase Client Service
 * Bridges React frontend state with Supabase PostgreSQL in Realtime.
 */

import { createClient } from '@supabase/supabase-js';
import { initialOpportunities, initialStudent, initialSkillAssessments } from '../data/mockData';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      realtime: {
        params: {
          eventsPerSecond: 10
        }
      }
    })
  : null;

export const supabaseService = {
  /**
   * 1. OPPORTUNITIES (Fetch & Post)
   */
  async getOpportunities() {
    if (!supabase) return { data: initialOpportunities, source: 'local' };
    try {
      const { data, error } = await supabase
        .from('opportunities')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data && data.length > 0) {
        // Map database columns to app schema
        const mapped = data.map(o => ({
          id: o.id,
          title: o.title,
          company: o.company,
          roleType: o.type || 'Internship',
          workMode: o.work_mode,
          location: o.location,
          duration: o.duration,
          stipend: o.stipend,
          postedDate: o.posted_date || 'Recently',
          matchScore: o.match_score || 85,
          matchLabel: o.match_label || 'Strong Match',
          applicantsCount: o.applicants_count || 0,
          description: o.description,
          requiredSkills: o.skills || [],
          eligibility: o.eligibility || 'Eligible for all B.Tech / M.Tech batches',
          responsibilities: o.responsibilities || []
        }));
        return { data: mapped, source: 'supabase' };
      }
    } catch (err) {
      console.warn('Supabase opportunities fetch error:', err.message);
    }
    return { data: initialOpportunities, source: 'local-fallback' };
  },

  async postOpportunity(opp) {
    if (!supabase) return { success: true, data: opp, source: 'local' };
    try {
      const record = {
        id: opp.id || `opp-${Date.now()}`,
        title: opp.title,
        company: opp.company,
        company_category: opp.roleType || 'Product Tech Leader',
        badge: opp.matchLabel || 'Top Match',
        location: opp.location || 'Remote',
        work_mode: opp.workMode || 'Hybrid',
        stipend: opp.stipend || '₹ 50,000 / month',
        duration: opp.duration || '6 Months',
        type: opp.roleType || 'Internship',
        match_score: opp.matchScore || 85,
        match_label: opp.matchLabel || 'Good Match',
        posted_date: 'Just now',
        applicants_count: 0,
        skills: opp.requiredSkills || [],
        description: opp.description || '',
        eligibility: opp.eligibility || '',
        responsibilities: opp.responsibilities || []
      };

      const { data, error } = await supabase.from('opportunities').upsert(record).select();
      if (error) throw error;
      console.log('⚡ [Supabase Realtime] Opportunity inserted to DB:', record.title);
      return { success: true, data: record, source: 'supabase' };
    } catch (err) {
      console.error('Failed to post opportunity to Supabase:', err.message);
      return { success: true, data: opp, source: 'local-fallback' };
    }
  },

  /**
   * 2. CANDIDATE APPLICATIONS (Fetch & Realtime Submit)
   */
  async getApplications() {
    if (!supabase) return { data: initialStudent.applications, source: 'local' };
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data && data.length > 0) {
        const mapped = data.map(a => ({
          id: a.id,
          opportunityId: a.opportunity_id,
          role: a.role,
          company: a.company,
          location: a.location,
          duration: a.duration,
          appliedDate: a.applied_date,
          status: a.status,
          matchScore: a.match_score,
          matchLabel: a.match_label || 'Strong Fit',
          submissionDetails: a.submission_details,
          timeline: a.timeline || [
            { stage: 'Submitted', date: a.applied_date, completed: true },
            { stage: 'Profile Screen', date: 'In Progress', completed: false, active: true },
            { stage: 'Technical Assessment', date: 'Pending', completed: false },
            { stage: 'Interview Round', date: 'Pending', completed: false },
            { stage: 'Final Offer', date: 'Pending', completed: false }
          ]
        }));
        return { data: mapped, source: 'supabase' };
      }
    } catch (err) {
      console.warn('Supabase applications fetch error:', err.message);
    }
    return { data: initialStudent.applications, source: 'local-fallback' };
  },

  async submitApplication(appData) {
    if (!supabase) return { success: true, data: appData, source: 'local' };
    try {
      const record = {
        id: appData.id || `app-${Date.now()}`,
        opportunity_id: appData.opportunityId,
        role: appData.role,
        company: appData.company,
        location: appData.location,
        duration: appData.duration,
        applied_date: 'Today (Real-time)',
        status: appData.status || 'Submitted · In ATS Screening',
        match_score: appData.matchScore || 80,
        match_label: appData.matchLabel || 'Good Fit',
        submission_details: appData.submissionDetails || {},
        timeline: appData.timeline || []
      };

      const { data, error } = await supabase.from('applications').upsert(record).select();
      if (error) throw error;
      console.log('⚡ [Supabase Realtime] Application saved to DB:', record.id);
      return { success: true, data: record, source: 'supabase' };
    } catch (err) {
      console.warn('Supabase application submission error:', err.message);
      return { success: true, data: appData, source: 'local-fallback' };
    }
  },

  /**
   * 3. SKILL ASSESSMENTS (Fetch & Create)
   */
  async getAssessments() {
    if (!supabase) return { data: initialSkillAssessments, source: 'local' };
    try {
      const { data, error } = await supabase.from('skill_assessments').select('*');
      if (error) throw error;
      if (data && data.length > 0) {
        return { data, source: 'supabase' };
      }
    } catch (err) {
      console.warn('Supabase assessments fetch error:', err.message);
    }
    return { data: initialSkillAssessments, source: 'local-fallback' };
  },

  async createAssessment(quiz) {
    if (!supabase) return { success: true, data: quiz, source: 'local' };
    try {
      const record = {
        id: quiz.id || `quiz-${Date.now()}`,
        title: quiz.title,
        category: quiz.category || 'Technical',
        duration: quiz.duration || '15 mins',
        questions_count: quiz.questions?.length || 5,
        description: quiz.description || '',
        questions: quiz.questions || []
      };

      const { data, error } = await supabase.from('skill_assessments').upsert(record).select();
      if (error) throw error;
      console.log('⚡ [Supabase Realtime] Assessment created in DB:', record.title);
      return { success: true, data: record, source: 'supabase' };
    } catch (err) {
      console.warn('Supabase assessment creation error:', err.message);
      return { success: true, data: quiz, source: 'local-fallback' };
    }
  },

  /**
   * 4. STUDENT PROFILE UPDATE
   */
  async updateStudentProfile(student) {
    if (!supabase) return { success: true, data: student, source: 'local' };
    try {
      const record = {
        id: student.id || 'student-101',
        name: student.name,
        email: student.email,
        overall_readiness: student.overallReadiness,
        competency_twin: student.competencyTwin,
        skills: student.skills,
        github_handle: student.githubHandle || 'angel-k',
        linkedin_url: student.linkedinUrl || 'https://linkedin.com/in/angel-k'
      };

      const { data, error } = await supabase.from('students').upsert(record).select();
      if (error) throw error;
      console.log('⚡ [Supabase Realtime] Student profile synced to DB');
      return { success: true, data: record, source: 'supabase' };
    } catch (err) {
      console.warn('Supabase student update error:', err.message);
      return { success: true, data: student, source: 'local-fallback' };
    }
  },

  /**
   * 5. REALTIME WEBSOCKET SUBSCRIPTION CHANNELS (Both-way live updates)
   */
  subscribeToTable(tableName, onInsert, onUpdate, onDelete) {
    if (!supabase) return () => {};

    const channel = supabase
      .channel(`realtime:${tableName}:${Date.now()}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: tableName },
        (payload) => {
          console.log(`🔔 [Supabase Live INSERT on ${tableName}]:`, payload.new);
          if (onInsert) onInsert(payload.new);
        }
      )
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: tableName },
        (payload) => {
          console.log(`🔔 [Supabase Live UPDATE on ${tableName}]:`, payload.new);
          if (onUpdate) onUpdate(payload.new);
        }
      )
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: tableName },
        (payload) => {
          console.log(`🔔 [Supabase Live DELETE on ${tableName}]:`, payload.old);
          if (onDelete) onDelete(payload.old);
        }
      )
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log(`🟢 [Supabase Realtime Channel Connected] Listening to table: "${tableName}"`);
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }
};
