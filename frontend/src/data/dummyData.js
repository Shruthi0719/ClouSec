export const dummyFindings = [
  {
    id: '1',
    resource: 's3-bucket-prod',
    service: 'S3',
    severity: 'CRITICAL',
    status: 'Open',
    timestamp: '2026-02-17T10:30:00Z',
    description: 'Bucket is publicly accessible'
  },
  {
    id: '2',
    resource: 'sg-prod-web',
    service: 'EC2',
    severity: 'HIGH',
    status: 'Open',
    timestamp: '2026-02-17T09:15:00Z',
    description: 'SSH port 22 exposed to world (0.0.0.0/0)'
  },
  {
    id: '3',
    resource: 'iam-admin-user',
    service: 'IAM',
    severity: 'HIGH',
    status: 'Open',
    timestamp: '2026-02-17T08:45:00Z',
    description: 'User has admin access without MFA'
  },
  {
    id: '4',
    resource: 'sg-app-tier',
    service: 'EC2',
    severity: 'MEDIUM',
    status: 'Open',
    timestamp: '2026-02-17T07:20:00Z',
    description: 'RDP port 3389 exposed to internal network'
  },
  {
    id: '5',
    resource: 's3-backup-logs',
    service: 'S3',
    severity: 'MEDIUM',
    status: 'Open',
    timestamp: '2026-02-17T06:10:00Z',
    description: 'Bucket versioning not enabled'
  },
];

export const dummySummary = {
  total_findings: 147,
  by_severity: {
    'CRITICAL': 12,
    'HIGH': 34,
    'MEDIUM': 68,
    'LOW': 33
  },
  by_service: {
    'S3': 45,
    'EC2': 67,
    'IAM': 35
  }
};

export const vulnerabilityDistribution = [
  { name: 'Critical', value: 12, color: '#ef4444' },
  { name: 'High', value: 34, color: '#f97316' },
  { name: 'Medium', value: 68, color: '#eab308' },
  { name: 'Low', value: 33, color: '#3b82f6' }
];

export const findingsByService = [
  { service: 'S3', vulnerabilities: 45 },
  { service: 'EC2', vulnerabilities: 67 },
  { service: 'IAM', vulnerabilities: 35 }
];

export const summaryCards = [
  {
    title: 'Total Findings',
    value: '147',
    icon: 'AlertCircle',
    status: 'warning',
    color: 'text-yellow-warn'
  },
  {
    title: 'Critical Issues',
    value: '12',
    icon: 'AlertTriangle',
    status: 'critical',
    color: 'text-red-alert'
  },
  {
    title: 'Warnings',
    value: '102',
    icon: 'AlertOctagon',
    status: 'warning',
    color: 'text-orange-warn'
  },
  {
    title: 'Secure Resources',
    value: '284',
    icon: 'CheckCircle',
    status: 'safe',
    color: 'text-green-safe'
  }
];
