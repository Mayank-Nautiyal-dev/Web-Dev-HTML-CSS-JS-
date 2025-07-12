import React from 'react';

const LoginBlock = () => (
  <div style={{
    width: '100%',
    background: 'linear-gradient(135deg, #a259ff44 0%, #00f0ff33 100%)',
    borderRadius: 18,
    boxShadow: 'var(--shadow)',
    padding: '2rem 1rem',
    textAlign: 'center'
  }}>
    <h2 style={{ color: 'var(--neon-purple)' }}>Welcome to StackIt!</h2>
    <p style={{ color: 'var(--text-muted)' }}>Login or create an account to ask and answer questions.</p>
    <button style={{
      background: 'var(--neon-purple)',
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      padding: '0.7rem 1.5rem',
      fontSize: 16,
      margin: '1rem 0 0 0',
      cursor: 'pointer',
      boxShadow: '0 0 8px #a259ff88'
    }}>Login</button>
    <br />
    <button style={{
      background: 'var(--neon-blue)',
      color: '#1a0025',
      border: 'none',
      borderRadius: 8,
      padding: '0.7rem 1.5rem',
      fontSize: 16,
      margin: '1rem 0 0 0',
      cursor: 'pointer',
      boxShadow: '0 0 8px #00f0ff88'
    }}>Create Account</button>
  </div>
);

export default LoginBlock;
