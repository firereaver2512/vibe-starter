import React from 'react';
import { 
  Eye, 
  Zap, 
  CheckCircle2, 
  FileCheck2, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  BarChart, 
  Clock 
} from 'lucide-react';

export const ValuePropsBento: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
            <span>Value Propositions</span>
            <span aria-hidden="true">·</span>
            <span>Architectural Alignment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Built around the 8 strategic outcomes identified on your whiteboard.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every feature in VeriGrant directly addresses the core question from your canvas: <span className="italic font-medium text-slate-800">"How will you make your customers' life happier?"</span>
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: One Consolidated View (Large span 2 cols) */}
          <div className="md:col-span-2 lg:col-span-2 p-7 bg-slate-900 text-white rounded-3xl border border-slate-800 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-emerald-400">
                  01. UNIFIED ARCHITECTURE
                </span>
                <span className="text-xs text-slate-400">Eliminates Excel sprawl</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                One consolidated view of key information across all grants
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rather than tracking separate spreadsheets for Enterprise Singapore, A*STAR, ESG funds, and board committees, VeriGrant aggregates every covenant, drawdown schedule, and expenditure ledger into one real-time operational cockpit.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-xl font-bold text-white font-mono tabular-nums">100%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Centralized data</div>
              </div>
              <div>
                <div className="text-xl font-bold text-emerald-400 font-mono tabular-nums">0</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Lost documents</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white font-mono tabular-nums">&lt; 30s</div>
                <div className="text-[11px] text-slate-400 mt-0.5">To locate any receipt</div>
              </div>
            </div>
          </div>

          {/* Card 2: Faster Disbursement */}
          <div className="p-7 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-500">
                  02. RAPID CAPITAL
                </span>
                <Zap className="w-4 h-4 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Faster disbursement of information & claims
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Statutory desk audits usually stall because claims lack proof documents. VeriGrant bundles pre-validated milestone evidence packets directly for agency officers, turning 6-week payment lags into rapid 3-day turnaround.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-mono">
              Avg. Turnaround: <span className="font-bold text-slate-900">3 Days</span> vs 45 Days
            </div>
          </div>

          {/* Card 3: Reduce Human Errors */}
          <div className="p-7 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-500">
                  03. ERROR ELIMINATION
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Reduce human errors in claims & accounting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated cryptographic hashes prevent double-invoicing. Built-in compliance algorithms verify that claimed line-items adhere to grant agreements before they hit external audit desks.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-mono">
              Audit Rejections: <span className="font-bold text-emerald-600">0% Incurred</span>
            </div>
          </div>

          {/* Card 4: SGX Reports & PR Impact (Span 2 cols) */}
          <div className="md:col-span-2 lg:col-span-2 p-7 bg-emerald-950 text-white rounded-3xl border border-emerald-900 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-emerald-400">
                  04. SGX & BOARD GOVERNANCE
                </span>
                <span className="text-xs text-emerald-200/80">PR & Impact Monitoring</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Board reports + Sustainability reports for SGX companies
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Connect grant expenditures directly to tangible ESG impact. Automatically populate mandatory SGX Core 27 climate metrics (Scopes 1, 2, and 3), board diversity numbers, and investor-ready PR statements proving how grant capital accelerated decarbonization.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-900/80 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-emerald-300">
                <BarChart className="w-4 h-4" />
                <span>ISSB S1/S2 & GRI Index Aligned</span>
              </div>
              <div className="text-emerald-300 font-mono">
                1-Click Board PDF Generation
              </div>
            </div>
          </div>

          {/* Card 5: Record of Deliverables */}
          <div className="p-7 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-500">
                  05. DELIVERABLES VAULT
                </span>
                <FileCheck2 className="w-4 h-4 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Tamper-evident record of deliverables
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centralized vault preserving signed completion certificates, engineering calibration memos, and contractor sign-offs with full audit trails.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-mono">
              Retention: <span className="font-bold text-slate-900">7-Year Statutory Compliant</span>
            </div>
          </div>

          {/* Card 6: Track on the use of grant */}
          <div className="p-7 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-500">
                  06. COVENANT AUDIT
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Strict granular track on the use of grant
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensures every dollar claimed maps strictly to approved categories (e.g. green hardware, external consulting, technical personnel) without cross-contamination.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-mono">
              Subledger Reconciliation: <span className="font-bold text-slate-900">Continuous</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
