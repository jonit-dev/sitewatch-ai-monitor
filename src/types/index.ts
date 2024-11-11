export type Theme = 'light' | 'dark';

export type TabType = 'dashboard' | 'monitors' | 'alerts' | 'analytics' | 'settings';

export interface Monitor {
  id: number;
  url: string;
  status: 'active' | 'warning' | 'pending';
  lastCheck: string;
  changes: number;
}

export interface Alert {
  id: number;
  type: 'warning' | 'success' | 'info';
  message: string;
  timestamp: string;
  url: string;
}