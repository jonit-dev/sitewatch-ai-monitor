import React from 'react';
import { BarChart3, TrendingUp, Users, Globe, Monitor, Bell, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const stats = [
  { label: 'Total Monitors', value: '24', icon: Monitor, change: '+12%' },
  { label: 'Active Alerts', value: '3', icon: Bell, change: '-25%' },
  { label: 'Response Time', value: '0.8s', icon: Clock, change: '+5%' },
  { label: 'Uptime', value: '99.9%', icon: TrendingUp, change: '0%' },
];

const responseTimeData = [
  { name: 'Mon', time: 0.8 },
  { name: 'Tue', time: 0.7 },
  { name: 'Wed', time: 0.9 },
  { name: 'Thu', time: 0.75 },
  { name: 'Fri', time: 0.85 },
  { name: 'Sat', time: 0.7 },
  { name: 'Sun', time: 0.65 },
];

const alertsData = [
  { name: 'Content Changes', value: 45 },
  { name: 'Performance', value: 30 },
  { name: 'Availability', value: 15 },
  { name: 'Security', value: 10 },
];

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <stat.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="mt-4">
              <span className={`text-sm ${
                stat.change.startsWith('+') 
                  ? 'text-green-600 dark:text-green-400' 
                  : stat.change.startsWith('-')
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
                {stat.change} from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Response Time History
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="name" 
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
                <Bar dataKey="time" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Alerts Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={alertsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {alertsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#F3F4F6'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}