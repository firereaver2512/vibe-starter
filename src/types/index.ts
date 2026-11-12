export interface Grant {
  id: string;
  name: string;
  referenceNumber: string;
  agency: string;
  grantorTier: string;
  totalApprovedAmount: number;
  disbursedAmount: number;
  pendingClaimAmount: number;
  startDate: string;
  completionDate: string;
  status: 'Active' | 'Under Review' | 'Completed' | 'Pending Final Audit';
  category: 'Green Transition' | 'Enterprise Innovation' | 'R&D Deep Tech' | 'Productivity';
  deliverablesCount: number;
  completedDeliverablesCount: number;
}

export interface Deliverable {
  id: string;
  grantId: string;
  title: string;
  description: string;
  milestonePhase: string;
  dueDate: string;
  budgetAllocated: number;
  status: 'Verified & Approved' | 'Under Agency Review' | 'In Progress' | 'Action Required';
  verificationEvidence?: string;
  disbursementTriggered: boolean;
  completionPercentage: number;
}

export interface SgxMetric {
  id: string;
  category: 'Environmental' | 'Social' | 'Governance' | 'Grant Impact';
  metricName: string;
  standard: 'SGX Core 27' | 'GRI 305' | 'ISSB S2' | 'TCFD';
  unit: string;
  currentValue: number | string;
  targetValue: number | string;
  baselineValue: number | string;
  trend: 'improving' | 'stable' | 'attention';
  grantAttributable: boolean;
  note: string;
}

export interface CanvasStickyNote {
  id: string;
  column: 'Key Partners' | 'Key Activities' | 'Key Resources' | 'Key Propositions' | 'Customer Relationships' | 'Channels' | 'Customer Segments';
  content: string;
  color: 'yellow' | 'blue' | 'orange' | 'green';
  details: string;
  implementationFeature: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: string;
}
