import React from 'react';

function StatsPanel() {
  return (
    <div className="card">
      <h2>Quick Stats</h2>
      <div className="grid">
        <div className="card">
          <h3>Total Vulnerabilities</h3>
          <p>3</p>
        </div>
        <div className="card">
          <h3>High Risk</h3>
          <p>2</p>
        </div>
        <div className="card">
          <h3>Medium Risk</h3>
          <p>1</p>
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;