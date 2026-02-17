export const severityColors = {
  'CRITICAL': {
    bg: 'bg-red-alert/20',
    text: 'text-red-alert',
    badge: 'badge-critical'
  },
  'HIGH': {
    bg: 'bg-orange-warn/20',
    text: 'text-orange-warn',
    badge: 'badge-high'
  },
  'MEDIUM': {
    bg: 'bg-yellow-warn/20',
    text: 'text-yellow-warn',
    badge: 'badge-medium'
  },
  'LOW': {
    bg: 'bg-blue-500/20',
    text: 'text-blue-400',
    badge: 'badge-low'
  }
};

export const serviceColors = {
  'S3': '#06b6d4',
  'EC2': '#7c3aed',
  'IAM': '#f97316'
};

export const statusColors = {
  'Open': 'text-red-alert',
  'Closed': 'text-green-safe',
  'In Progress': 'text-yellow-warn'
};
