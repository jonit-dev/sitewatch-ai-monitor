import React from 'react';
import { Bell, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

const mockAlerts = [
  {
    id: 1,
    type: 'warning',
    message: 'Price change detected on example.com/products',
    timestamp: '10 minutes ago',
    url: 'https://example.com/products',
  },
  {
    id: 2,
    type: 'success',
    message: 'Content update verified on demo-store.com',
    timestamp: '1 hour ago',
    url: 'https://demo-store.com',
  },
  {
    id: 3,
    type: 'info',
    message: 'New monitoring session started for test-site.com',
    timestamp: '2 hours ago',
    url: 'https://test-site.com',
  },
];

const AlertIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case 'success':
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    default:
      return <Info className="w-5 h-5 text-blue-500" />;
  }
};

export default function AlertsHistory() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold dark:text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Alerts History
          </h2>
        </div>
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div
              key={alert.id}
              className="border dark:border-gray-700 rounded-lg p-4 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
            >
              <div className="flex items-start space-x-3">
                <AlertIcon type={alert.type} />
                <div>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">
                    {alert.message}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {alert.timestamp}
                    </span>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <a
                      href={alert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      View Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}