import React from 'react';
import { Settings as SettingsIcon, Moon, Bell, Clock, Shield, Bot, Code, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 dark:text-white flex items-center gap-2">
            <SettingsIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Settings
          </h2>
          
          <div className="space-y-8">
            {/* Theme Settings */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-white">Dark Mode</span>
              </div>
              <button
                onClick={toggleTheme}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Notification Settings */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-white">Notification Settings</span>
              </div>
              <div className="ml-7 space-y-2">
                {['Email Notifications', 'Push Notifications', 'Telegram Alerts'].map((setting) => (
                  <label key={setting} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      defaultChecked
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{setting}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Monitoring Frequency */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-white">Monitoring Frequency</span>
              </div>
              <select className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option>Every 5 minutes</option>
                <option>Every 15 minutes</option>
                <option>Every 30 minutes</option>
                <option>Every hour</option>
              </select>
            </div>

            {/* AI Configuration */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-white">AI Configuration</span>
              </div>
              
              {/* Model Selection */}
              <div className="ml-7 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    AI Model
                  </label>
                  <select className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option>GPT-4</option>
                    <option>GPT-3.5 Turbo</option>
                    <option>Claude 2</option>
                    <option>Custom Model</option>
                  </select>
                </div>

                {/* Custom Instructions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Custom Instructions
                  </label>
                  <textarea
                    rows={4}
                    className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter custom instructions for the AI model..."
                  />
                </div>

                {/* JSON Schema */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center space-x-2">
                      <Code className="w-4 h-4" />
                      <span>Custom JSON Schema</span>
                    </div>
                  </label>
                  <textarea
                    rows={4}
                    className="font-mono text-sm block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder='{"type": "object", "properties": {...}}'
                  />
                </div>

                {/* Advanced Settings */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4" />
                      <span>Advanced Settings</span>
                    </div>
                  </label>
                  <div className="space-y-2">
                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">Temperature</label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        defaultValue="70"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">Max Tokens</label>
                      <input
                        type="number"
                        defaultValue={2048}
                        className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-900 dark:text-white">Security</span>
              </div>
              <div className="ml-7 space-y-2">
                {['Two-Factor Authentication', 'API Key Access', 'IP Whitelist'].map((setting) => (
                  <label key={setting} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{setting}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}