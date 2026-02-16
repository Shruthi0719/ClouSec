import React from 'react';
import { PieChart, Pie, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const pieData = [
  { name: 'S3 Public Access', value: 40 },
  { name: 'IAM', value: 30 },
  { name: 'Open Ports', value: 30 },
];

const lineData = [
  { month: 'Jan', S3: 20, IAM: 10, Ports: 15 },
  { month: 'Feb', S3: 25, IAM: 12, Ports: 18 },
  { month: 'Mar', S3: 30, IAM: 15, Ports: 20 },
  { month: 'Apr', S3: 35, IAM: 18, Ports: 22 },
];

function ChartPanel() {
  return (
    <div className="card chart-panel">
      <h2>Risk Visualizations</h2>
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Pie Chart */}
        <div>
          <h3>Risk Distribution</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#4a90e2"
              label
            />
            <Tooltip />
          </PieChart>
        </div>

        {/* Line Chart */}
        <div>
          <h3>Risk Trend Over Time</h3>
          <LineChart width={400} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="S3" stroke="#4a90e2" />
            <Line type="monotone" dataKey="IAM" stroke="#3bb273" />
            <Line type="monotone" dataKey="Ports" stroke="#f5a623" />
          </LineChart>
        </div>

      </div>
    </div>
  );
}

export default ChartPanel;