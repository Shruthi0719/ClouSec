import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import SummaryCard from './components/SummaryCard'
import VulnerabilityPie from './components/VulnerabilityPie'
import FindingsBarChart from './components/FindingsBarChart'
import RecentFindingsTable from './components/RecentFindingsTable'
import ScanButton from './components/ScanButton'
import { fetchSummary, fetchFindings } from './api'
import { 
  dummyFindings, 
  dummySummary, 
  vulnerabilityDistribution, 
  findingsByService 
} from './data/dummyData'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [summary, setSummary] = useState(dummySummary);
  const [findings, setFindings] = useState(dummyFindings);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    try {
      setError(null);
      const [summaryData, findingsData] = await Promise.all([
        fetchSummary(),
        fetchFindings()
      ]);
      
      setSummary(summaryData);
      setFindings(findingsData);
    } catch (err) {
      console.error('Error loading data:', err);
      // Keep dummy data as fallback
    }
  };

  const handleScanComplete = () => {
    setLoading(true);
    setTimeout(() => {
      loadData();
      setLoading(false);
    }, 2000);
  };

  // Transform summary data for charts
  const chartVulnerabilityData = vulnerabilityDistribution.map(item => ({
    ...item,
    value: summary.by_severity?.[item.name.toUpperCase()] || item.value,
    percentage: Math.round((summary.by_severity?.[item.name.toUpperCase()] || item.value) / summary.total_findings * 100)
  }));

  const chartFindingsByService = findingsByService.map(item => ({
    ...item,
    vulnerabilities: summary.by_service?.[item.service] || item.vulnerabilities
  }));

  // Create summary cards data with current values
  const summaryCardsData = [
    {
      title: 'Total Findings',
      value: summary.total_findings?.toString() || '0',
      icon: 'AlertCircle',
      status: 'warning',
      trend: 'up',
      trendValue: '+5'
    },
    {
      title: 'Critical Issues',
      value: (summary.by_severity?.['CRITICAL'] || 0).toString(),
      icon: 'AlertTriangle',
      status: 'critical',
      trend: 'down',
      trendValue: '-2'
    },
    {
      title: 'Warnings',
      value: ((summary.by_severity?.['HIGH'] || 0) + (summary.by_severity?.['MEDIUM'] || 0)).toString(),
      icon: 'AlertOctagon',
      status: 'warning',
      trend: 'up',
      trendValue: '+8'
    },
    {
      title: 'Secure Resources',
      value: '284',
      icon: 'CheckCircle',
      status: 'safe',
      trend: 'up',
      trendValue: '+12'
    }
  ];

  // Render different tabs
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8 animate-fade-in">
            {/* Summary Cards */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h2>
              <div className="grid-responsive">
                {summaryCardsData.map((card, idx) => (
                  <SummaryCard
                    key={idx}
                    title={card.title}
                    value={card.value}
                    icon={card.icon}
                    status={card.status}
                    trend={card.trend}
                    trendValue={card.trendValue}
                  />
                ))}
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid-responsive-2">
              <VulnerabilityPie data={chartVulnerabilityData} />
              <FindingsBarChart data={chartFindingsByService} />
            </div>

            {/* Recent Findings */}
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Recent Findings</h2>
              <RecentFindingsTable findings={findings.slice(0, 10)} />
            </div>

            {/* Scan Section */}
            <div className="grid-responsive-2">
              <ScanButton onScanComplete={handleScanComplete} />
              <div className="card">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-safe"></div>
                  Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-dark/50">
                    <span className="text-gray-400">Last Scan</span>
                    <span className="text-white">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-dark/50">
                    <span className="text-gray-400">Scan Status</span>
                    <span className="text-green-safe font-medium">Completed</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-dark/50">
                    <span className="text-gray-400">Resources Scanned</span>
                    <span className="text-white">157</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-dark/50">
                    <span className="text-gray-400">Next Auto-Scan</span>
                    <span className="text-white">in 28 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'scan':
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-white">Security Scans</h2>
            <div className="card">
              <h3 className="text-lg font-bold text-white mb-4">Manual Scan Execution</h3>
              <p className="text-gray-400 mb-6">
                Trigger on-demand security scans for specific AWS services or run a comprehensive scan across your entire infrastructure.
              </p>
              <div className="grid-responsive">
                <ScanButton onScanComplete={handleScanComplete} />
              </div>
            </div>
          </div>
        );

      case 'findings':
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-white">All Findings</h2>
            <RecentFindingsTable findings={findings} />
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-white">Settings</h2>
            <div className="card">
              <h3 className="text-lg font-bold text-white mb-6">Coming Soon</h3>
              <p className="text-gray-400">Configuration options will be available in a future update.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-darker min-h-screen text-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Navbar />
      
      {/* Main Content */}
      <main className="ml-64 mt-16 p-8">
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-alert/10 border border-red-alert/30 text-red-alert">
            {error}
          </div>
        )}
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
