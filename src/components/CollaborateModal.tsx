import React, { useState } from 'react';

interface CollaborateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const CollaborateModal: React.FC<CollaborateModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Brand Identity',
}) => {
  const [selectedService, setSelectedService] = useState(initialService);
  const [budget, setBudget] = useState('$10k – $25k');
  const [timeline, setTimeline] = useState('Q2/Q3 2025');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setDetails('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="w-full max-w-2xl bg-[#121316] border border-[#242730] rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 md:p-8 bg-[#1a1b20] border-b border-[#242730] flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c6f225]/15 text-[#c6f225] font-mono text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c6f225] animate-ping"></span>
              Accepting Commissions for Q2 / Q3 2025
            </div>
            <h2 className="font-display-hero text-2xl md:text-3xl font-extrabold text-white">
              Initiate Project Collaboration
            </h2>
            <p className="text-sm text-[#8e937a] mt-1">
              Direct consultation with Jimson Usayan. Response guaranteed within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#121316] text-[#c5c9ad] hover:text-white flex items-center justify-center border border-[#242730] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#c6f225]/20 text-[#c6f225] flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h3 className="font-display-hero text-2xl font-bold text-white">
              Inquiry Dispatched to Jimson
            </h3>
            <p className="text-sm text-[#c5c9ad] max-w-md">
              Thank you, <strong className="text-[#c6f225]">{name}</strong>. Your project brief regarding{' '}
              <strong className="text-white">{selectedService}</strong> ({budget} tier) has been received. Jimson will review your specs and schedule an introductory design alignment session.
            </p>
            <div className="p-4 rounded-xl bg-[#1a1b20] border border-[#242730] text-left text-xs font-mono space-y-1 w-full max-w-md text-[#8e937a]">
              <div>Client: {name} &lt;{email}&gt;</div>
              <div>Company: {company || 'Independent'}</div>
              <div>Timeline: {timeline}</div>
              <div>Status: In Queue (Priority 1)</div>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-sm hover:bg-[#dcff64] transition-all"
            >
              Done &amp; Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Service Selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#8e937a] mb-2 tracking-wider">
                Select Discipline / Scope
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Brand Identity & System',
                  'Logofolio Vector Emblem',
                  'UI / UX Digital Platform',
                  'Physical Packaging & Exhibit',
                ].map((service) => (
                  <button
                    type="button"
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`p-3 rounded-xl text-xs md:text-sm font-medium text-left border transition-all ${
                      selectedService === service
                        ? 'bg-[#c6f225]/15 border-[#c6f225] text-white font-semibold'
                        : 'bg-[#1a1b20] border-[#242730] text-[#c5c9ad] hover:border-[#38393e]'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#8e937a] mb-2 tracking-wider">
                  Target Budget Bracket
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#1a1b20] border border-[#242730] rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#c6f225] transition-colors"
                >
                  <option value="$5k – $10k">$5,000 – $10,000 (Single Discipline)</option>
                  <option value="$10k – $25k">$10,000 – $25,000 (Full Identity System)</option>
                  <option value="$25k – $50k">$25,000 – $50,000 (Turnkey UI/UX + Brand)</option>
                  <option value="$50k+">$50,000+ (Comprehensive Enterprise Architecture)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-[#8e937a] mb-2 tracking-wider">
                  Launch Target
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-[#1a1b20] border border-[#242730] rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#c6f225] transition-colors"
                >
                  <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                  <option value="Q2/Q3 2025">Q2 / Q3 2025</option>
                  <option value="Q4 2025">Q4 2025</option>
                  <option value="Flexible / Discovery Phase">Flexible / Discovery Phase</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#8e937a] mb-2 tracking-wider">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Elena Vance"
                  className="w-full bg-[#1a1b20] border border-[#242730] rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#c6f225] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-[#8e937a] mb-2 tracking-wider">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena@company.com"
                  className="w-full bg-[#1a1b20] border border-[#242730] rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#c6f225] transition-colors"
                />
              </div>
            </div>

            {/* Company & Brief */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#8e937a] mb-2 tracking-wider">
                Company / Brand / Project Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Nexa Dynamics or Ourvita"
                className="w-full bg-[#1a1b20] border border-[#242730] rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#c6f225] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#8e937a] mb-2 tracking-wider">
                Project Vision &amp; Requirements
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe your current brand challenge, audience, or digital product goals..."
                className="w-full bg-[#1a1b20] border border-[#242730] rounded-xl p-4 text-sm text-white outline-none focus:border-[#c6f225] transition-colors resize-none"
              />
            </div>

            {/* Submit Bar */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#8e937a]">
                Direct encrypted transmission to studio pipeline
              </span>
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-sm hover:bg-[#dcff64] shadow-[0_0_24px_rgba(198,242,37,0.4)] transition-all cursor-pointer"
              >
                Send Project Brief →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
