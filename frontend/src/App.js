import React, { useEffect, useState } from "react";
import { fetchSummary } from "./api";

function App() {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadSummary();
    const interval = setInterval(loadSummary, 10000);
    return () => clearInterval(interval);
  }, []);

  const loadSummary = async () => {
    try {
      const data = await fetchSummary();
      setSummary(data);
      setError(null);
    } catch (err) {
      console.error("FETCH ERROR:", err);
      setError("Failed to connect to backend");
    }
  };

  if (error) {
    return <div style={{ padding: 40 }}>❌ {error}</div>;
  }

  if (!summary) {
    return <div style={{ padding: 40 }}>⏳ Loading ClouSec...</div>;
  }

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🚀 ClouSec Dashboard</h1>

      <h2>Total Findings: {summary.total_findings}</h2>

      <h3>By Severity</h3>
      <pre>{JSON.stringify(summary.by_severity, null, 2)}</pre>

      <h3>By Service</h3>
      <pre>{JSON.stringify(summary.by_service, null, 2)}</pre>
    </div>
  );
}

export default App;