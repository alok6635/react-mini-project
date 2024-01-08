import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('london');

  const handleTab = (tabData) => {
    setActiveTab(tabData);
  };

  return (
    <>
      <h2>Tabbing</h2>
      <div className="tab">
        <button
          onClick={() => handleTab('london')}
          className={activeTab === 'london' ? 'active' : ''}
        >
          London
        </button>
        <button
          onClick={() => handleTab('paris')}
          className={activeTab === 'paris' ? 'active' : ''}
        >
          Paris
        </button>
        <button
          onClick={() => handleTab('tokyo')}
          className={activeTab === 'tokyo' ? 'active' : ''}
        >
          Tokyo
        </button>
      </div>

      <div className={`tabcontent ${activeTab === 'london' ? 'active' : ''}`}>
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>
      <div className={`tabcontent ${activeTab === 'paris' ? 'active' : ''}`}>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>
      <div className={`tabcontent ${activeTab === 'tokyo' ? 'active' : ''}`}>
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </>
  );
};

export default App;
