import React from 'react';
import { ArrowRight, CheckCircle2, LayoutDashboard, FileSpreadsheet, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreDemo: () => void;
  onViewCanvas: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreDemo, onViewCanvas }) => {
  return (
    <section id="overview" className="relative pt-14 pb-20 border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 overflow-hidden">
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Quiet text kicker with typographic separator */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span>Enterprise Grant Governance</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>SGX Sustainability Compliance</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Agency Review Acceleration</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]" style={{ textWrap: 'balance' }}>
            Replace manual tracking with a single consolidated grant and sustainability ledger.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto" style={{ textWrap: 'balance' }}>
            Built directly from the strategic blueprint for SGX companies and grant recipients. Track grant budgets and deliverable milestones, eliminate human error, and automate board-ready ESG reporting with instant agency audit verification.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onExploreDemo}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-emerald-600 transition-all shadow-sm hover:shadow flex items-center gap-2 cursor-pointer"
            >
              <LayoutDashboard className="w-4 h-4 text-emerald-400" />
              <span>Launch Live Interactive Sandbox</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onViewCanvas}
              className="px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-amber-500" />
              <span>Explore Strategic Board Blueprint</span>
            </button>
          </div>

          {/* Value points unboxed line */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              One consolidated view across all grants
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Automated SGX 27 Core ESG disclosures
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Direct sync with Xero, SAP & NetSuite
            </span>
          </div>
        </div>

        {/* Claim-to-Proof Quantitative Adjacency Strip */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="p-3 text-center sm:text-left">
            <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              $142M+
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Public & Private Grant Capital Tracked
            </div>
          </div>

          <div className="p-3 text-center sm:text-left border-l border-slate-100">
            <div className="text-3xl font-extrabold text-emerald-600 font-mono tabular-nums tracking-tight">
              88%
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Faster Agency Disbursement Review
            </div>
          </div>

          <div className="p-3 text-center sm:text-left border-l border-slate-100">
            <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              0
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Disallowed Audit Invoices & Penalties
            </div>
          </div>

          <div className="p-3 text-center sm:text-left border-l border-slate-100">
            <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              SGX Core 27
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Full ISSB & GRI Aligned ESG Automation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
