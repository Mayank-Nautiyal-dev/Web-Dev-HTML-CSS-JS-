import React from 'react';
import QuestionList from '../components/questions/QuestionList';
import LoginBlock from '../components/common/LoginBlock';
import FilterSidebar from '../components/common/FilterSidebar';
import SearchBar from '../components/common/SearchBar';

const Home = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    background: 'var(--primary-bg)'
  }}>
    {/* Left Sidebar */}
    <div style={{
      width: 220,
      background: 'var(--secondary-bg)',
      borderRight: '2px solid var(--border)',
      padding: '2rem 1rem 1rem 1rem',
      minHeight: '100vh',
      boxShadow: '2px 0 10px #a259ff22'
    }}>
      <FilterSidebar />
    </div>

    {/* Main Content */}
    <div style={{
      flex: 1,
      padding: '2rem 2rem 2rem 2rem',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <SearchBar />
      <div style={{
        marginTop: '1.5rem',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 120px)'
      }}>
        <QuestionList />
      </div>
    </div>

    {/* Right Sidebar */}
    <div style={{
      width: 320,
      background: 'var(--secondary-bg)',
      borderLeft: '2px solid var(--border)',
      minHeight: '100vh',
      padding: '2rem 1rem',
      boxShadow: '-2px 0 10px #00f0ff22',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <LoginBlock />
    </div>
  </div>
);

export default Home;
