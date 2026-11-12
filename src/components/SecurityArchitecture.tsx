import React from 'react';
import { ShieldCheck, Server, Lock, Cpu, Cloud, CheckCircle, RefreshCw } from 'lucide-react';

export const SecurityArchitecture: React.FC = () => {
  return (
    <section id="architecture" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <span>Key Activities & Key Resources</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Enterprise Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white" style={{ textWrap: 'balance' }}>
            Built for institutional trust, data sovereignty, and high-availability operations.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Directly realizing the blue sticky notes from your board: high-availability physical assets, sovereign cloud infrastructure, rigorous data security, and continuous platform development.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Data Security & Sovereignty</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full compliance with Singapore's Personal Data Protection Act (PDPA), SOC2 Type II certification, and granular multi-tenant role-based access control (RBAC).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/60 text-[11px] text-emerald-400 font-mono">
              AES-256 Encryption at Rest
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-sky-400">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Cloud Infrastructure</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Multi-region fault tolerant hosting on enterprise cloud with zero-downtime microservices and automated horizontal container scaling.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/60 text-[11px] text-sky-400 font-mono">
              99.99% Uptime Guarantee
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-amber-400">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Physical & Compute Assets</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated high-throughput compute nodes in Tier-3 Singapore datacenters ensuring sub-100ms API latency and tamper-proof storage backups.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/60 text-[11px] text-amber-400 font-mono">
              Point-in-Time Recovery
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-purple-400">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Continuous Development</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Weekly updates incorporating newly released statutory grant guidelines, amended SGX listing rules, and accounting software schema migrations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/60 text-[11px] text-purple-400 font-mono">
              Automated CI/CD Pipelines
            </div>
          </div>
        </div>

        {/* Operational Activities Strip */}
        <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-semibold text-emerald-400">Key Execution Activities</div>
            <div className="text-base font-bold text-white">
              Building and maintaining the product · Data security · Dedicated customer onboarding & support
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 shrink-0 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              ISO 27001 Certified
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              SGX RegCo Aligned
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
