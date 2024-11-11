import React from 'react';
import { Clock, Globe, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subHours } from 'date-fns';

const performanceData = Array.from({ length: 24 }, (_, i) => ({
  time: format(subHours(new Date(), 24 - i), 'HH:mm'),
  responseTime: Math.random() * 0.5 + 0.5,
  uptime: Math.random() * 2 + 98,
}));

const recentActivity = [
  {
    id: 1,
    type: 'success',
    message: 'All systems operational',
    timestamp: '2 minutes ago',
  },
  {
    id: 2,
    type: 'warning',
    message: 'High response time detected on example.com',
    timestamp: '15 minutes ago',
  },
  {
    id: 3,
    type: 'info',
    message: 'New monitor added for test-site.com',
    timestamp: '1 hour ago',
  },
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Monitors</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">12</p>
              </div>
              <Globe className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Active Alerts</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">3</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Avg Response</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">0.8s</p>
              </div>
              <Clock className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Performance Overview
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="responseTimeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  tick={{ fill: '#9CA3AF' }}
                  label={{ 
                    value: 'Response Time (s)', 
                    angle: -90, 
                    position: 'insideLeft',
                    fill: '#9CA3AF'
                  }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#F3F4F6'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="responseTime"
                  stroke="#6366f1"
                  fill="url(#responseTimeGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              {activity.type === 'success' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
              {activity.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
              {activity.type === 'info' && <Globe className="w-5 h-5 text-blue-500" />}
              <div>
                <p className="text-gray-900 dark:text-gray-100">{activity.message}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}