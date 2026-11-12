/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  INITIAL_GRANTS, 
  INITIAL_DELIVERABLES, 
  INITIAL_SGX_METRICS, 
  CANVAS_STICKY_NOTES 
} from './data/mockData';
import { Grant, Deliverable, SgxMetric, CanvasStickyNote } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveWorkspace } from './components/InteractiveWorkspace';
import { ValuePropsBento } from './components/ValuePropsBento';
import { SecurityArchitecture } from './components/SecurityArchitecture';
import { EcosystemChannels } from './components/EcosystemChannels';
import { OnboardingModal } from './components/OnboardingModal';
import { Footer } from './components/Footer';

export default function App() {
  const [grants, setGrants] = useState<Grant[]>(INITIAL_GRANTS);
  const [deliverables, setDeliverables] = useState<Deliverable[]>(INITIAL_DELIVERABLES);
  const [metrics, setMetrics] = useState<SgxMetric[]>(INITIAL_SGX_METRICS);
  const [canvasNotes, setCanvasNotes] = useState<CanvasStickyNote[]>(CANVAS_STICKY_NOTES);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<string>('ledger');

  const handleUpdateDeliverableStatus = (
    id: string, 
    status: Deliverable['status'], 
    triggered: boolean = false
  ) => {
    setDeliverables((prev) =>
      prev.map((d) => {
        if (d.id === id) {
          const updated = {
            ...d,
            status,
            disbursementTriggered: triggered || d.disbursementTriggered,
            completionPercentage: status === 'Verified & Approved' ? 100 : d.completionPercentage,
          };
          return updated;
        }
        return d;
      })
    );

    // If verified & approved with disbursement, reflect in grant balances
    if (status === 'Verified & Approved') {
      const del = deliverables.find((d) => d.id === id);
      if (del) {
        setGrants((prevGrants) =>
          prevGrants.map((g) => {
            if (g.id === del.grantId) {
              const newDisbursed = g.disbursedAmount + del.budgetAllocated;
              const newPending = Math.max(0, g.pendingClaimAmount - del.budgetAllocated);
              return {
                ...g,
                disbursedAmount: newDisbursed,
                pendingClaimAmount: newPending,
                completedDeliverablesCount: Math.min(
                  g.deliverablesCount,
                  g.completedDeliverablesCount + 1
                ),
              };
            }
            return g;
          })
        );
      }
    }
  };

  const handleAddDeliverable = (newDel: Omit<Deliverable, 'id'>) => {
    const created: Deliverable = {
      ...newDel,
      id: `del-${Date.now()}`,
    };
    setDeliverables((prev) => [created, ...prev]);

    // Update grant count
    setGrants((prev) =>
      prev.map((g) => {
        if (g.id === newDel.grantId) {
          return {
            ...g,
            deliverablesCount: g.deliverablesCount + 1,
            pendingClaimAmount: g.pendingClaimAmount + newDel.budgetAllocated,
          };
        }
        return g;
      })
    );
  };

  const handleAddCanvasNote = (note: CanvasStickyNote) => {
    setCanvasNotes((prev) => [note, ...prev]);
  };

  const handleOpenWorkspace = (tab?: string) => {
    if (tab) {
      setActiveWorkspaceTab(tab);
    }
    const element = document.getElementById('workspace');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreDemo = () => {
    handleOpenWorkspace('ledger');
  };

  const handleViewCanvas = () => {
    handleOpenWorkspace('canvas');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* 1. Header (Top Bar Contract: 3 zones, clean single-line links) */}
      <Header
        onOpenWorkspace={handleOpenWorkspace}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
      />

      {/* 2. Hero Section */}
      <main className="flex-1">
        <Hero
          onExploreDemo={handleExploreDemo}
          onViewCanvas={handleViewCanvas}
        />

        {/* 3. The Interactive Live Workspace */}
        <InteractiveWorkspace
          key={activeWorkspaceTab}
          initialTab={activeWorkspaceTab}
          grants={grants}
          deliverables={deliverables}
          metrics={metrics}
          canvasNotes={canvasNotes}
          onUpdateDeliverableStatus={handleUpdateDeliverableStatus}
          onAddDeliverable={handleAddDeliverable}
          onAddCanvasNote={handleAddCanvasNote}
        />

        {/* 4. Value Propositions Bento Grid (8 sticky notes from image) */}
        <ValuePropsBento />

        {/* 5. Key Activities & Resources: Security & Cloud Infrastructure */}
        <SecurityArchitecture />

        {/* 6. Channels, Ecosystem & Customer Relationships */}
        <EcosystemChannels
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
          onOpenAssistant={() => handleOpenWorkspace('assistant')}
        />
      </main>

      {/* 7. Quiet Professional Footer */}
      <Footer
        onOpenWorkspace={handleOpenWorkspace}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
      />

      {/* 8. Onboarding Consultation Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />
    </div>
  );
}
