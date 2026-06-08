export interface StatItem {
  label: string;
  value: string;
  targetValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LevelItem {
  id: string;
  levelCode: string;
  name: string;
  features: string[];
  actionLabel: string;
  recommended?: boolean;
}

export interface LogMessage {
  timestamp: string;
  channel: string;
  text: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export interface DiagnosticsNode {
  id: string;
  nodeName: string;
  status: '稼働中' | '確保済み' | '危険'; // ACTIVE, SECURED, DANGER
  statusType: 'success' | 'warning' | 'error';
  load: number;
  region: string;
}
