import React from 'react';

const FilterSidebar = () => (
  <div>
    <h3 style={{ color: 'var(--neon-purple)', marginBottom: 18 }}>Filter</h3>
    <div>
      <label style={{ color: 'var(--text-muted)' }}>
        <input type="checkbox" style={{ accentColor: 'var(--neon-purple)' }} /> Unanswered
      </label>
    </div>
    <div>
      <label style={{ color: 'var(--text-muted)' }}>
        <input type="checkbox" style={{ accentColor: 'var(--neon-purple)' }} /> Most Voted
      </label>
    </div>
    <div>
      <label style={{ color: 'var(--text-muted)' }}>
        <input type="checkbox" style={{ accentColor: 'var(--neon-purple)' }} /> Recent
      </label>
    </div>
    <div style={{ marginTop: 20 }}>
      <label style={{ color: 'var(--text-muted)' }}>Tags</label>
      <input
        type="text"
        placeholder="e.g. React"
        style={{
          width: '90%',
          marginTop: 6,
          borderRadius: 6,
          border: '1px solid var(--neon-purple)',
          background: 'var(--primary-bg)',
          color: 'var(--text-main)',
          padding: '0.4rem'
        }}
      />
    </div>
  </div>
);

export default FilterSidebar;
