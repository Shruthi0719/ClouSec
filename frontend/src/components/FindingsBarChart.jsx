import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

const FindingsBarChart = ({ data }) => {
  const COLORS = ['#06b6d4', '#7c3aed', '#f97316'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-dark/90 border border-purple-accent/30 rounded-lg p-3">
          <p className="text-white font-medium">{payload[0].payload.service}</p>
          <p className="text-cyan-accent">{payload[0].value} vulnerabilities</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-cyan-accent"></div>
        Findings by Service
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey="service" 
            stroke="#94a3b8"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#94a3b8"
            style={{ fontSize: '12px' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="vulnerabilities" radius={[8, 8, 0, 0]} fill="#7c3aed">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {data.map((item, idx) => (
          <div 
            key={idx} 
            className="p-3 rounded-lg border border-purple-accent/20 bg-slate-dark/40 text-center"
          >
            <p className="text-gray-400 text-xs mb-1">{item.service}</p>
            <p className="text-lg font-bold text-white">{item.vulnerabilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindingsBarChart;
