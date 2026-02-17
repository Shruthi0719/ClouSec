import React from 'react'
import { AlertCircle, AlertTriangle, AlertOctagon, CheckCircle, TrendingUp, TrendingDown } from 'lucide-react'

const SummaryCard = ({ title, value, icon: iconName, status, trend, trendValue }) => {
  const iconMap = {
    'AlertCircle': AlertCircle,
    'AlertTriangle': AlertTriangle,
    'AlertOctagon': AlertOctagon,
    'CheckCircle': CheckCircle,
  };

  const Icon = iconMap[iconName] || AlertCircle;

  const statusStyles = {
    critical: 'bg-red-alert/10 border-red-alert/30',
    warning: 'bg-orange-warn/10 border-orange-warn/30',
    safe: 'bg-green-safe/10 border-green-safe/30',
  };

  const textStyles = {
    critical: 'text-red-alert',
    warning: 'text-orange-warn',
    safe: 'text-green-safe',
  };

  return (
    <div className={`card border ${statusStyles[status] || statusStyles.warning}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-slate-dark/50 ${textStyles[status]}`}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            trend === 'up' ? 'text-red-alert' : 'text-green-safe'
          }`}>
            {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {trendValue}
          </div>
        )}
      </div>
      
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <h3 className={`text-3xl font-bold ${textStyles[status]}`}>{value}</h3>
      
      <div className="mt-4 pt-4 border-t border-purple-accent/10">
        <p className="text-xs text-gray-500">Last 24 hours</p>
      </div>
    </div>
  );
};

export default SummaryCard;
