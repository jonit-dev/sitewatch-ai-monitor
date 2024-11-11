import React from 'react';
import { CheckCircle2, AlertTriangle, Clock, ArrowUpRight } from 'lucide-react';

const mockMonitors = [
  {
    id: 1,
    url: 'https://example.com/products',
    status: 'active',
    lastCheck: '2 minutes ago',
    changes: 3,
  },
  {
    id: 2,
    url: 'https://demo-store.com/sales',
    status: 'warning',
    lastCheck: '5 minutes ago',
    changes: 1,
  },
  {
    id: 3,
    url: 'https://test-site.com/blog',
    status: 'pending',
    lastCheck: 'Queued',
    changes: 0,
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'active':
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    default:
      return <Clock className="w-5 h-5 text-gray-400" />;
  }
};

export default function MonitoringList() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Active Monitors</h2>
        <div className="space-y-4">
          {mockMonitors.map((monitor) => (
            <div
              key={monitor.id}
              className="border dark:border-gray-700 rounded-lg p-4 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <StatusIcon status={monitor.status} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        {monitor.url}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Last checked: {monitor.lastCheck}
                    </p>
                  </div>
                </div>
                {monitor.changes > 0 && (
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {monitor.changes} changes detected
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}