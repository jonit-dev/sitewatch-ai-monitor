import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export default function MonitoringForm() {
  const [url, setUrl] = useState('');
  const [monitoring, setMonitoring] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMonitoring(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
        <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        Add New Monitor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Target Website URL
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="https://example.com"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Notification Channels
          </label>
          <div className="space-y-2">
            {['Email', 'Telegram', 'Phone'].map((channel) => (
              <label key={channel} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">{channel}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Monitoring Parameters
          </label>
          <div className="grid grid-cols-2 gap-4">
            {['Content Changes', 'Price Updates', 'Availability', 'SEO Changes'].map((param) => (
              <div key={param}>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    defaultChecked={param === 'Content Changes' || param === 'Price Updates'}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{param}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={monitoring}
        >
          {monitoring ? 'Monitoring Active' : 'Start Monitoring'}
        </button>
      </form>
    </div>
  );
}