import React, { useState, useMemo } from 'react';
import { Search, Filter, RefreshCw, X, Sparkles } from 'lucide-react';
import OpportunityCard from '../components/OpportunityCard';

export default function OpportunitiesPage({ opportunities, onSelectOpportunity, onOpenMatchModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [workModeFilter, setWorkModeFilter] = useState('All');
  const [skillFilter, setSkillFilter] = useState('All');

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      // Tab filter
      if (activeTab !== 'All' && opp.type !== activeTab) {
        return false;
      }
      // Work mode filter
      if (workModeFilter !== 'All' && opp.workMode !== workModeFilter) {
        return false;
      }
      // Skill filter
      if (skillFilter !== 'All' && !opp.requiredSkills.includes(skillFilter)) {
        return false;
      }
      // Search term
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesTitle = opp.title.toLowerCase().includes(query);
        const matchesCompany = opp.company.toLowerCase().includes(query);
        const matchesSkills = opp.requiredSkills.some(s => s.toLowerCase().includes(query));
        const matchesLoc = opp.location.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCompany && !matchesSkills && !matchesLoc) {
          return false;
        }
      }
      return true;
    });
  }, [opportunities, activeTab, workModeFilter, skillFilter, searchTerm]);

  const resetFilters = () => {
    setSearchTerm('');
    setActiveTab('All');
    setWorkModeFilter('All');
    setSkillFilter('All');
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem 0', minHeight: '80vh' }}>
      <div className="max-width-wrapper">
        {/* Page Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
            Opportunities
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Internships, entry-level roles, projects and industry learning programs matched to skills.
          </p>
        </div>

        {/* Search Bar & Primary Filters */}
        <div className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Search Input */}
            <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input
                type="text"
                placeholder="Search roles, skills or organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{ position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Work Mode Filter */}
            <div style={{ minWidth: '150px' }}>
              <select
                value={workModeFilter}
                onChange={(e) => setWorkModeFilter(e.target.value)}
                className="form-select"
              >
                <option value="All">All Work Modes</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

            {/* Skill Filter */}
            <div style={{ minWidth: '160px' }}>
              <select
                value={skillFilter}
                onChange={(e) => setSkillFilter(e.target.value)}
                className="form-select"
              >
                <option value="All">All Skills</option>
                <option value="SQL">SQL</option>
                <option value="Product Analytics">Product Analytics</option>
                <option value="Excel">Excel</option>
                <option value="Python Fundamentals">Python</option>
                <option value="Figma & Wireframing">Figma</option>
                <option value="Cloud Fundamentals">Cloud</option>
              </select>
            </div>

            {(searchTerm || activeTab !== 'All' || workModeFilter !== 'All' || skillFilter !== 'All') && (
              <button onClick={resetFilters} className="btn btn-ghost btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <RefreshCw size={14} /> Reset
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            borderTop: '1px solid var(--border-subtle)',
            marginTop: '1rem',
            paddingTop: '0.85rem',
            overflowX: 'auto'
          }}>
            {['All', 'Internship', 'Jobs', 'Projects', 'Learning'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab ? 'var(--accent-light)' : 'transparent',
                  color: activeTab === tab ? 'var(--accent-primary)' : 'var(--text-muted)',
                  border: activeTab === tab ? '1px solid var(--accent-border)' : '1px solid transparent',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.825rem',
                  fontWeight: activeTab === tab ? 700 : 500,
                  whiteSpace: 'nowrap'
                }}
              >
                {tab === 'All' ? 'All Opportunities' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter & Transparency Note */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            Showing {filteredOpportunities.length} opportunities matched to student skill profiles
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={13} color="var(--accent-primary)" /> Match strength calculated dynamically from assessed skills
          </div>
        </div>

        {/* Opportunities Grid */}
        {filteredOpportunities.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem'
          }}>
            {filteredOpportunities.map((opp) => (
              <OpportunityCard
                key={opp.id}
                opportunity={opp}
                onSelect={onSelectOpportunity}
                onOpenMatchModal={onOpenMatchModal}
              />
            ))}
          </div>
        ) : (
          <div className="card" style={{ padding: '3.5rem 1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              No opportunities found
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
              No sample opportunities match your current filter selections. Try searching for different skills or reset filters.
            </p>
            <button onClick={resetFilters} className="btn btn-secondary btn-sm">
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
