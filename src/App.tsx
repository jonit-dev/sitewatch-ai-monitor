import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import MonitoringForm from './components/MonitoringForm';
import MonitoringList from './components/MonitoringList';
import AlertsHistory from './components/AlertsHistory';
import Settings from './components/Settings';
import Analytics from './components/Analytics';
import { TabType } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'monitors':
        return (
          <div className="space-y-8">
            <MonitoringForm />
            <MonitoringList />
          </div>
        );
      case 'alerts':
        return <AlertsHistory />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;