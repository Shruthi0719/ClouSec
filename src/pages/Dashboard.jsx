import React from 'react';
import Header from '../components/Header';
import StatsPanel from '../components/StatsPanel';
import ChartPanel from '../components/Chartpanel';
import VulnerabilityCard from '../components/VulnerabilityCard';
import '../styles/global.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header title="Cloud Security Dashboard" />
      <StatsPanel />
      <ChartPanel />
      <div className="grid">
        <VulnerabilityCard title="S3 Public Access" risk="High" />
        <VulnerabilityCard title="IAM" risk="Medium" />
        <VulnerabilityCard title="Open Ports" risk="High" />
      </div>
    </div>
  );
}

export default Dashboard;