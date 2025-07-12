import React from 'react';

const SearchBar = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    background: 'var(--secondary-bg)',
    borderRadius: 12,
    boxShadow: 'var(--shadow)',
    padding: '0.5rem 1rem',
    border: '2px solid var(--neon-purple)'
  }}>
    <input
      type="text"
      placeholder="Search questions, tags, users..."
      style={{
        flex: 1,
        background: 'transparent',
        border: 'none',
        color: 'var(--text-main)',
        fontSize: 18,
        outline: 'none'
      }}
    />
    <span style={{
      color: 'var(--neon-blue)',
      fontSize: 22,
      marginLeft: 8,
      cursor: 'pointer'
    }}>🔍</span>
  </div>
);

export default SearchBar;
