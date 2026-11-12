import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [orgType, setOrgType] = useState('SGX Mainboard Listed Issuer');
  const [grantsVolume, setGrantsVolume] = useState('SGD $500k - $2M');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95">
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                <span>Initial Onboarding Sprint</span>
                <span aria-hidden="true">·</span>
                <span>14-Day Migration</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Schedule Assisted Enterprise Onboarding
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Our regulatory solutions team will ingest your active grant covenant letters, configure your general ledger sync (Xero/SAP), and populate your SGX Core 27 baseline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Tan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs border border-slate-300 rounded-xl p-2.5 focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="s.tan@enterprise.com.sg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs border border-slate-300 rounded-xl p-2.5 focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Organization / Entity Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CleanTech Holdings Ltd"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-xl p-2.5 focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Entity Classification
                  </label>
                  <select
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2.5 focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="SGX Mainboard Listed Issuer">SGX Mainboard Listed Issuer</option>
                    <option value="SGX Catalist Listed Issuer">SGX Catalist Listed Issuer</option>
                    <option value="Enterprise Grant Recipient (EDG/PSG)">Enterprise Grant Recipient (EDG/PSG)</option>
                    <option value="Research Institute / University (A*STAR)">Research Institute / University (A*STAR)</option>
                    <option value="Government Statutory Agency / Auditor">Government Statutory Agency / Auditor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Active Grant Portfolio Size
                  </label>
                  <select
                    value={grantsVolume}
                    onChange={(e) => setGrantsVolume(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl p-2.5 focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="Under SGD $500k">Under SGD $500k</option>
                    <option value="SGD $500k - $2M">SGD $500k - $2M</option>
                    <option value="SGD $2M - $10M">SGD $2M - $10M</option>
                    <option value="SGD $10M+ Enterprise Portfolio">SGD $10M+ Enterprise Portfolio</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Primary Governance Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Automate Scope 1 & 2 reporting, accelerate EDG milestone claims..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-xl p-2.5 focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  PDPA Compliant & NDA Protected
                </span>
                <span className="font-mono">14-Day Setup SLA</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-emerald-600 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Onboarding Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-slate-900">
                Onboarding Request Received
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. An onboarding specialist from VeriGrant has been assigned to <span className="font-semibold text-slate-900">{company}</span>.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="text-slate-500">Next Steps:</div>
              <div className="font-medium text-slate-800">1. Calendar invite sent to {email}</div>
              <div className="font-medium text-slate-800">2. Secure grant covenant document upload portal link</div>
              <div className="font-medium text-slate-800">3. Initial SGX Core 27 baseline setup review</div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Return to Platform
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
