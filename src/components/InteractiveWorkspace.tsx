import React, { useState } from 'react';
import { Grant, Deliverable, SgxMetric, CanvasStickyNote } from '../types';
import { GrantTracker } from './GrantTracker';
import { SgxStudio } from './SgxStudio';
import { CanvasExplorer } from './CanvasExplorer';
import { AssistantChat } from './AssistantChat';
import { 
  FileSpreadsheet, 
  BarChart3, 
  Layers, 
  Bot, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface InteractiveWorkspaceProps {
  initialTab?: string;
  grants: Grant[];
  deliverables: Deliverable[];
  metrics: SgxMetric[];
  canvasNotes: CanvasStickyNote[];
  onUpdateDeliverableStatus: (id: string, status: Deliverable['status'], triggered?: boolean) => void;
  onAddDeliverable: (newDel: Omit<Deliverable, 'id'>) => void;
  onAddCanvasNote: (note: CanvasStickyNote) => void;
}

export const InteractiveWorkspace: React.FC<InteractiveWorkspaceProps> = ({
  initialTab = 'ledger',
  grants,
  deliverables,
  metrics,
  canvasNotes,
  onUpdateDeliverableStatus,
  onAddDeliverable,
  onAddCanvasNote,
}) => {
  const [activeTab, setActiveTab] = useState<'ledger' | 'sgx' | 'canvas' | 'assistant'>(
    (initialTab as any) || 'ledger'
  );

  return (
    <section id="workspace" className="py-16 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              <span>Interactive Operating Console</span>
              <span aria-hidden="true">·</span>
              <span>Live Demonstration</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1">
              The VeriGrant Core Engine
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Interact directly with the functional components created from your canvas ideas: live grant reconciliations, SGX disclosures, the strategic canvas explorer, and the self-service policy co-pilot.
            </p>
          </div>

          {/* Interactive Navigation Tabs (Segmented Control) */}
          <div className="flex items-center gap-1 p-1.5 bg-white border border-slate-200 rounded-xl shadow-xs shrink-0 overflow-x-auto">
            <button
              onClick={() => setActiveTab('ledger')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'ledger'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Grant Ledger</span>
            </button>

            <button
              onClick={() => setActiveTab('sgx')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'sgx'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>SGX ESG Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('canvas')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'canvas'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Board Blueprint</span>
            </button>

            <button
              onClick={() => setActiveTab('assistant')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'assistant'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Policy Assistant</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="pt-2">
          {activeTab === 'ledger' && (
            <GrantTracker
              grants={grants}
              deliverables={deliverables}
              onUpdateDeliverableStatus={onUpdateDeliverableStatus}
              onAddDeliverable={onAddDeliverable}
            />
          )}

          {activeTab === 'sgx' && <SgxStudio metrics={metrics} />}

          {activeTab === 'canvas' && (
            <CanvasExplorer notes={canvasNotes} onAddNote={onAddCanvasNote} />
          )}

          {activeTab === 'assistant' && <AssistantChat />}
        </div>
      </div>
    </section>
  );
};
