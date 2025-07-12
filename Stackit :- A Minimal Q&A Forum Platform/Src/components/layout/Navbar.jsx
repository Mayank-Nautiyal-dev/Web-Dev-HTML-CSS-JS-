import React from 'react';

const Navbar = () => (
  <nav style={{
    background: 'linear-gradient(90deg, #a259ff 0%, #00f0ff 100%)',
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'var(--shadow)',
    position: 'sticky',
    top: 0,
    zIndex: 10
  }}>
    <div style={{ fontWeight: 700, fontSize: 24, color: '#fff', letterSpacing: 2 }}>
      StackIt
    </div>
    <div>
      {/* Add navigation links if needed */}
    </div>
  </nav>
);

export default Navbar;
