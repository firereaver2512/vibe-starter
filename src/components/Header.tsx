import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenWorkspace: (tab?: string) => void;
  onOpenOnboarding: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWorkspace, onOpenOnboarding }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single element brand wordmark */}
        <a href="#overview" className="flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:bg-emerald-600 transition-colors">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Veri<span className="text-emerald-600">Grant</span>
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#overview" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Overview
          </a>
          <button
            onClick={() => onOpenWorkspace('ledger')}
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Grant Ledger
          </button>
          <button
            onClick={() => onOpenWorkspace('sgx')}
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            SGX ESG Studio
          </button>
          <button
            onClick={() => onOpenWorkspace('canvas')}
            className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Board Canvas
          </button>
          <a href="#architecture" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Security & Partners
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenWorkspace()}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-emerald-600 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <span>Launch Live Sandbox</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
