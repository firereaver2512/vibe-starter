import React from 'react';
import { 
  Building, 
  Workflow, 
  Users2, 
  CalendarCheck, 
  Network, 
  Share2, 
  Bot, 
  ArrowRight 
} from 'lucide-react';

interface EcosystemChannelsProps {
  onOpenOnboarding: () => void;
  onOpenAssistant: () => void;
}

export const EcosystemChannels: React.FC<EcosystemChannelsProps> = ({
  onOpenOnboarding,
  onOpenAssistant,
}) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
            <span>Channels & Relationships</span>
            <span aria-hidden="true">·</span>
            <span>Ecosystem Connectivity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Connected across government statutory networks and accounting ecosystems.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From seamless general ledger reconciliation with accounting partners to automated agency claims and peer user communities.
          </p>
        </div>

        {/* 2-Column Split: Customer Touchpoints & Ecosystem Partners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Relationships Box */}
          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Customer Relationships Architecture
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Four-layer stakeholder engagement model
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Directly reflecting your orange sticky notes: high-touch monthly check-ins for complex grants, white-glove initial onboarding, always-on self-service AI, and collaborative peer exchanges.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                  <CalendarCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Monthly Governance Reviews</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Structured 30-minute monthly reviews of milestone health, upcoming claim deadlines, and budget variance.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                  <Workflow className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">White-Glove Initial Onboarding</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      14-day assisted setup ingesting grant letters, mapping general ledgers, and setting up deliverable workflows.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                  <Bot className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Self-Service Chatbot & Knowledge Base</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Instant 24/7 AI-powered query resolution for eligible expense classifications and SGX Core 27 standards.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                  <Users2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">User Community for Best Practices</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Quarterly invite-only roundtables for SGX sustainability officers and research grant directors.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={onOpenOnboarding}
                className="text-xs font-semibold text-slate-900 hover:text-emerald-600 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request Guided Onboarding</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenAssistant}
                className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Try Self-Service Chatbot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Channels & Key Partners Box */}
          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                Distribution Channels & Key Partners
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Bridging statutory boards & ERP systems
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reaching grant recipients and public listed enterprises through direct homepage onboarding, trusted peer referrals, and integrated government agency bridges.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                  <Network className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Government Agency Network</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Pre-formatted claim exports conforming to Enterprise Singapore, NRF, and SGX RegCo filing standards.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                  <Building className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Accounting Systems & ERP Partners</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Native certified bi-directional API connectors for Xero, Intuit QuickBooks, SAP S/4HANA, and Oracle NetSuite.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                  <Share2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Indirect Referral Through Users</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Shared auditor login invites allowing Big 4 and accredited grant audit firms to verify clients with zero friction.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accounting Partners Logos Strip */}
            <div className="pt-4 border-t border-slate-100">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Certified Partner Integrations
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-semibold text-slate-700">
                <span className="px-2.5 py-1 bg-slate-100 rounded border border-slate-200">Xero API</span>
                <span className="px-2.5 py-1 bg-slate-100 rounded border border-slate-200">SAP S/4HANA</span>
                <span className="px-2.5 py-1 bg-slate-100 rounded border border-slate-200">Oracle NetSuite</span>
                <span className="px-2.5 py-1 bg-slate-100 rounded border border-slate-200">QuickBooks Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
