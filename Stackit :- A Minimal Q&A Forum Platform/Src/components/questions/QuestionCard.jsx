import React from 'react';

const QuestionCard = ({ question }) => (
  <div style={{
    background: 'var(--secondary-bg)',
    borderRadius: 14,
    boxShadow: 'var(--shadow)',
    marginBottom: 24,
    padding: '1.5rem 1rem',
    borderLeft: '4px solid var(--neon-purple)',
    transition: 'box-shadow 0.2s',
    cursor: 'pointer'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
      {question.tags.map(tag => (
        <span key={tag} style={{
          background: 'var(--neon-purple)',
          color: '#fff',
          borderRadius: 6,
          padding: '0.2rem 0.7rem',
          fontSize: 13,
          marginRight: 8
        }}>{tag}</span>
      ))}
    </div>
    <h2 style={{ color: 'var(--neon-blue)', margin: '0 0 0.5rem 0' }}>{question.title}</h2>
    <p style={{ color: 'var(--text-muted)', margin: 0 }}>{question.description}</p>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
      fontSize: 14
    }}>
      <span>Asked by <b>{question.user}</b> • {question.createdAt}</span>
      <span style={{ color: 'var(--neon-purple)' }}>
        {question.votes} votes • {question.answers} answers
      </span>
    </div>
  </div>
);

export default QuestionCard;
