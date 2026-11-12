import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenWorkspace: (tab?: string) => void;
  onOpenOnboarding: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWorkspace, onOpenOnboarding }) => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-100">
          {/* Col 1: Wordmark & Purpose */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <div className="w-6 h-6 rounded-md bg-slate-900 flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <span>
                Veri<span className="text-emerald-600">Grant</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              Unified operating system for enterprise grant governance, deliverable reconciliation, and SGX-ready sustainability reporting.
            </p>
          </div>

          {/* Col 2: Platform Modules */}
          <div className="space-y-2.5">
            <div className="font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
              Platform Modules
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenWorkspace('ledger')}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Grant & Budget Ledger
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenWorkspace('sgx')}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  SGX Core 27 ESG Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenWorkspace('canvas')}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Strategic Canvas Blueprint
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenWorkspace('assistant')}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Self-Service Policy AI Co-Pilot
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Integrations & Governance */}
          <div className="space-y-2.5">
            <div className="font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
              Ecosystem & Standards
            </div>
            <ul className="space-y-2 text-slate-500">
              <li>Enterprise Singapore EDG Standards</li>
              <li>SGX Rule 711A & 711B Climate Disclosure</li>
              <li>ISSB S1/S2 Sustainability Standards</li>
              <li>Xero & SAP General Ledger Bridge</li>
              <li>PDPA Singapore & ISO 27001</li>
            </ul>
          </div>

          {/* Col 4: Initial Onboarding */}
          <div className="space-y-2.5">
            <div className="font-semibold text-slate-900 uppercase tracking-wider text-[11px]">
              Enterprise Engagement
            </div>
            <p className="text-slate-500 leading-relaxed">
              Ready to transition from spreadsheets to automated grant reconciliation?
            </p>
            <button
              onClick={onOpenOnboarding}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer inline-block mt-1"
            >
              Request Onboarding Sprint
            </button>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} VeriGrant Technologies Pte. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Sovereign Singapore Cloud Infrastructure</span>
            <span aria-hidden="true">·</span>
            <span>SGX RegCo Aligned</span>
            <span aria-hidden="true">·</span>
            <span>PDPA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
