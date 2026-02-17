import React from "react";

function RecentFindingsTable({ findings = [] }) {
  if (!findings.length) {
    return (
      <div className="card">
        <p className="text-gray-400">No findings available.</p>
      </div>
    );
  }

  return (
    <div className="card overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="p-3 text-gray-400">Service</th>
            <th className="p-3 text-gray-400">Resource</th>
            <th className="p-3 text-gray-400">Region</th>
            <th className="p-3 text-gray-400">Severity</th>
            <th className="p-3 text-gray-400">Issue</th>
            <th className="p-3 text-gray-400">Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {findings.map((finding) => (
            <tr
              key={`${finding.resource_id}-${finding.timestamp}`}
              className="border-b border-slate-800 hover:bg-slate-800/40 transition"
            >
              <td className="p-3 text-white">{finding.service}</td>
              <td className="p-3 text-gray-300">{finding.resource_id}</td>
              <td className="p-3 text-gray-300">{finding.region}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    finding.severity === "CRITICAL"
                      ? "bg-red-500/20 text-red-400"
                      : finding.severity === "HIGH"
                      ? "bg-orange-500/20 text-orange-400"
                      : finding.severity === "MEDIUM"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {finding.severity}
                </span>
              </td>
              <td className="p-3 text-gray-300">{finding.issue}</td>
              <td className="p-3 text-gray-400">
                {new Date(finding.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentFindingsTable;
