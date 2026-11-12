import React, { useState } from 'react';
import { Grant, Deliverable } from '../types';
import { 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  FileCheck, 
  Plus, 
  ArrowUpRight, 
  DollarSign, 
  ShieldAlert,
  Send,
  Eye,
  Check,
  X
} from 'lucide-react';

interface GrantTrackerProps {
  grants: Grant[];
  deliverables: Deliverable[];
  onUpdateDeliverableStatus: (id: string, status: Deliverable['status'], triggered?: boolean) => void;
  onAddDeliverable: (newDel: Omit<Deliverable, 'id'>) => void;
}

export const GrantTracker: React.FC<GrantTrackerProps> = ({
  grants,
  deliverables,
  onUpdateDeliverableStatus,
  onAddDeliverable,
}) => {
  const [selectedGrantId, setSelectedGrantId] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Form state
  const [formGrantId, setFormGrantId] = useState(grants[0]?.id || '');
  const [formTitle, setFormTitle] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formPhase, setFormPhase] = useState('Phase 1 - Implementation');
  const [formBudget, setFormBudget] = useState('50000');
  const [formDueDate, setFormDueDate] = useState('2026-08-30');
  const [formEvidence, setFormEvidence] = useState('Audit_Verification_Pack.pdf');

  // Filtered deliverables
  const filteredDeliverables = deliverables.filter((d) => {
    const matchesGrant = selectedGrantId === 'all' || d.grantId === selectedGrantId;
    const matchesStatus = filterStatus === 'all' || d.status === filterStatus;
    return matchesGrant && matchesStatus;
  });

  // Calculate consolidated metrics
  const activeGrants = selectedGrantId === 'all' 
    ? grants 
    : grants.filter(g => g.id === selectedGrantId);

  const totalApproved = activeGrants.reduce((acc, g) => acc + g.totalApprovedAmount, 0);
  const totalDisbursed = activeGrants.reduce((acc, g) => acc + g.disbursedAmount, 0);
  const totalPending = activeGrants.reduce((acc, g) => acc + g.pendingClaimAmount, 0);
  const remainingCapital = totalApproved - totalDisbursed - totalPending;

  const handleSimulateDisbursement = (del: Deliverable) => {
    onUpdateDeliverableStatus(del.id, 'Verified & Approved', true);
    setNotification(`Disbursement initiated: SGD $${del.budgetAllocated.toLocaleString()} approved by agency for "${del.title}". Funds routed to dedicated grant escrow ledger.`);
    setTimeout(() => setNotification(null), 6000);
  };

  const handleCreateDeliverable = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    onAddDeliverable({
      grantId: formGrantId,
      title: formTitle,
      description: formDesc || 'Automated deliverable logged through VeriGrant ledger.',
      milestonePhase: formPhase,
      dueDate: formDueDate,
      budgetAllocated: parseFloat(formBudget) || 10000,
      status: 'In Progress',
      verificationEvidence: formEvidence,
      disbursementTriggered: false,
      completionPercentage: 15,
    });

    setIsAddModalOpen(false);
    setFormTitle('');
    setFormDesc('');
    setNotification(`New deliverable "${formTitle}" recorded and linked to grant audit trail.`);
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {notification && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl flex items-start gap-3 text-sm animate-in fade-in slide-in-from-top-2">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="flex-1 font-medium">{notification}</div>
          <button 
            onClick={() => setNotification(null)}
            className="text-emerald-700 hover:text-emerald-950 text-xs font-semibold"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Grant Filter & Quick Controls Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Consolidated Grant & Budget Ledger
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Real-time reconciliation of approved grants, milestone deliverables, and agency disbursement triggers.
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {/* Grant selector */}
          <select
            value={selectedGrantId}
            onChange={(e) => setSelectedGrantId(e.target.value)}
            className="text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs"
          >
            <option value="all">All Grants (Consolidated)</option>
            {grants.map((g) => (
              <option key={g.id} value={g.id}>
                {g.referenceNumber} · {g.name.slice(0, 32)}...
              </option>
            ))}
          </select>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Record Deliverable</span>
          </button>
        </div>
      </div>

      {/* Consolidated Financial Overview Cards (Tabular Figures) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs font-medium text-slate-500">Total Approved Capital</div>
          <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums mt-1">
            SGD ${totalApproved.toLocaleString()}
          </div>
          <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
            <span>{activeGrants.length} Active statutory covenants</span>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs font-medium text-slate-500">Disbursed to Bank Account</div>
          <div className="text-2xl font-bold text-emerald-600 font-mono tabular-nums mt-1">
            SGD ${totalDisbursed.toLocaleString()}
          </div>
          <div className="text-xs text-slate-500 mt-2">
            <span className="font-semibold text-slate-700">
              {Math.round((totalDisbursed / (totalApproved || 1)) * 100)}%
            </span>{' '}
            of total grant capital realized
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs font-medium text-slate-500">Pending Agency Claims</div>
          <div className="text-2xl font-bold text-amber-600 font-mono tabular-nums mt-1">
            SGD ${totalPending.toLocaleString()}
          </div>
          <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Under statutory desk audit review</span>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs font-medium text-slate-500">Remaining Milestone Capital</div>
          <div className="text-2xl font-bold text-slate-800 font-mono tabular-nums mt-1">
            SGD ${remainingCapital.toLocaleString()}
          </div>
          <div className="text-xs text-slate-500 mt-2">
            Awaiting upcoming milestone completion
          </div>
        </div>
      </div>

      {/* Grant Details Summary Bar */}
      {selectedGrantId !== 'all' && (
        <div className="p-4 bg-slate-900 text-white rounded-xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span>{activeGrants[0]?.agency}</span>
              <span>·</span>
              <span>Ref: {activeGrants[0]?.referenceNumber}</span>
              <span>·</span>
              <span>Category: {activeGrants[0]?.category}</span>
            </div>
            <div className="text-lg font-bold mt-1">{activeGrants[0]?.name}</div>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-300">
            <div>
              <div className="text-slate-400">Covenant Window</div>
              <div className="font-medium text-white">{activeGrants[0]?.startDate} to {activeGrants[0]?.completionDate}</div>
            </div>
            <div>
              <div className="text-slate-400">Deliverables Complete</div>
              <div className="font-semibold text-emerald-400 font-mono">
                {activeGrants[0]?.completedDeliverablesCount} / {activeGrants[0]?.deliverablesCount} Verified
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Deliverables Management Section */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        {/* Table Header & Interactive Filter Tabs */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Audit-Ready Record of Deliverables & Verification
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified deliverables automatically trigger agency disbursement notices and feed SGX board impact reports.
            </p>
          </div>

          {/* Interactive filter tabs (segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filterStatus === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Deliverables ({deliverables.length})
            </button>
            <button
              onClick={() => setFilterStatus('Verified & Approved')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filterStatus === 'Verified & Approved'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Verified
            </button>
            <button
              onClick={() => setFilterStatus('Under Agency Review')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filterStatus === 'Under Agency Review'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              In Review
            </button>
            <button
              onClick={() => setFilterStatus('In Progress')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filterStatus === 'In Progress'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              In Progress
            </button>
          </div>
        </div>

        {/* Deliverables Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/80 text-xs font-semibold text-slate-500 border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 font-medium">Deliverable / Milestone Title</th>
                <th className="py-3 px-4 font-medium">Associated Grant</th>
                <th className="py-3 px-4 font-medium">Due Date</th>
                <th className="py-3 px-4 font-medium text-right">Claim Amount</th>
                <th className="py-3 px-4 font-medium">Verification Evidence</th>
                <th className="py-3 px-4 font-medium">Status & Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDeliverables.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500 text-sm">
                    No deliverables found matching the current filter criteria.
                  </td>
                </tr>
              ) : (
                filteredDeliverables.map((del) => {
                  const parentGrant = grants.find((g) => g.id === del.grantId);

                  return (
                    <tr key={del.id} className="hover:bg-slate-50/70 transition-colors group">
                      <td className="py-4 px-4 align-top">
                        <div className="font-semibold text-slate-900">{del.title}</div>
                        <div className="text-xs text-slate-500 mt-0.5 line-clamp-1 max-w-sm">
                          {del.description}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 font-mono">
                          {del.milestonePhase}
                        </div>
                      </td>

                      <td className="py-4 px-4 align-top">
                        <div className="text-xs font-medium text-slate-800">
                          {parentGrant?.referenceNumber || del.grantId}
                        </div>
                        <div className="text-xs text-slate-500">
                          {parentGrant?.agency}
                        </div>
                      </td>

                      <td className="py-4 px-4 align-top text-xs text-slate-600 font-mono tabular-nums">
                        {del.dueDate}
                      </td>

                      <td className="py-4 px-4 align-top text-right font-mono font-semibold text-slate-900 tabular-nums">
                        SGD ${del.budgetAllocated.toLocaleString()}
                      </td>

                      <td className="py-4 px-4 align-top">
                        {del.verificationEvidence ? (
                          <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded border border-slate-200 w-fit cursor-pointer">
                            <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="font-mono text-[11px] truncate max-w-[130px]">
                              {del.verificationEvidence}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs text-slate-400 italic">No document attached</span>
                        )}
                      </td>

                      <td className="py-4 px-4 align-top">
                        <div className="space-y-2">
                          {del.status === 'Verified & Approved' ? (
                            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                              <CheckCircle className="w-4 h-4 text-emerald-600" />
                              <span>Verified & Disbursed</span>
                            </div>
                          ) : del.status === 'Under Agency Review' ? (
                            <div className="space-y-1.5">
                              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                                <Clock className="w-4 h-4 text-amber-500" />
                                <span>Under Agency Review</span>
                              </div>
                              <div>
                                <button
                                  onClick={() => handleSimulateDisbursement(del)}
                                  className="text-xs font-semibold px-2.5 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                                >
                                  <Send className="w-3 h-3" />
                                  <span>Simulate Agency Approval</span>
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-1.5">
                              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
                                <span className="w-2 h-2 rounded-full bg-slate-400" />
                                <span>In Progress ({del.completionPercentage}%)</span>
                              </div>
                              <button
                                onClick={() => onUpdateDeliverableStatus(del.id, 'Under Agency Review')}
                                className="text-xs font-medium px-2 py-1 border border-slate-300 text-slate-700 rounded hover:bg-slate-100 transition-colors flex items-center gap-1 cursor-pointer"
                              >
                                <span>Submit for Agency Review</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Deliverable Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="text-lg font-bold text-slate-900">Record New Deliverable Milestone</h4>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateDeliverable} className="space-y-4 pt-4 text-sm">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Target Grant Covenant
                </label>
                <select
                  value={formGrantId}
                  onChange={(e) => setFormGrantId(e.target.value)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-900"
                >
                  {grants.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.referenceNumber} - {g.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Deliverable Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Independent Carbon Abatement Validation Memo"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Milestone Phase & Description
                </label>
                <input
                  type="text"
                  placeholder="e.g. Scope 1 industrial energy audit report with TUV stamp"
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-900 mb-2"
                />
                <input
                  type="text"
                  placeholder="Phase name (e.g. Milestone 2 - ESG Certification)"
                  value={formPhase}
                  onChange={(e) => setFormPhase(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Budget Claimed (SGD $)
                  </label>
                  <input
                    type="number"
                    value={formBudget}
                    onChange={(e) => setFormBudget(e.target.value)}
                    className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-900 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Covenant Due Date
                  </label>
                  <input
                    type="date"
                    value={formDueDate}
                    onChange={(e) => setFormDueDate(e.target.value)}
                    className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Attached Audit Evidence File
                </label>
                <input
                  type="text"
                  value={formEvidence}
                  onChange={(e) => setFormEvidence(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 font-mono text-slate-600 focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-emerald-600 rounded-lg transition-colors cursor-pointer"
                >
                  Save & Add to Audit Ledger
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
