export interface TeamMember {
  name: string;
  role: string;
  specialty: string[];
  icon: string;
  color: string;
}

export interface ResourceLink {
  title: string;
  url: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'God Mode';
  category: 'General' | 'Web' | 'Forensics' | 'Binary' | 'Crypto';
}

export interface StrategyPhase {
  phase: number;
  title: string;
  days: string;
  focus: string;
  tasks: string[];
}