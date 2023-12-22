import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('london');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <h2>Tabbing</h2>
      <div className="tab">
        <button onClick={()=>openTab('london')} className={activeTab === 'london' ? 'active' : ''}>
          London
        </button>
        <button onClick={() => openTab('paris')} className={activeTab === 'paris' ? 'active' : ''}>
          Paris
        </button>
        <button onClick={() => openTab('tokyo')} className={activeTab === 'tokyo' ? 'active' : ''}>
          Tokyo
        </button>
      </div>
      <div id="london" className={`tabcontent ${activeTab === 'london' ? 'active' : ''}`}>
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>
      <div id="paris" className={`tabcontent ${activeTab === 'paris' ? 'active' : ''}`}>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>
      <div id="tokyo" className={`tabcontent ${activeTab === 'tokyo' ? 'active' : ''}`}>
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </>
  );
};

export default App;
