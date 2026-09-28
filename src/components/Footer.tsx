import React from 'react';

interface FooterProps {
  onOpenCollaborate: () => void;
  onSelectTab: (tab: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCollaborate, onSelectTab }) => {
  return (
    <footer className="w-full bg-[#0d0e12] border-t border-[#242730] py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#242730]/60">
          <div className="flex flex-col gap-1.5">
            <span className="font-display-hero text-2xl font-bold tracking-tight text-white">
              JIMSON USAYAN
            </span>
            <span className="text-sm text-[#8e937a]">
              Crafted with passion &amp; kinetic vision.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5c9ad] hover:text-[#c6f225] transition-colors"
            >
              Behance
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5c9ad] hover:text-[#c6f225] transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5c9ad] hover:text-[#c6f225] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5c9ad] hover:text-[#c6f225] transition-colors"
            >
              Instagram
            </a>
            <button
              onClick={onOpenCollaborate}
              className="text-[#c5c9ad] hover:text-[#c6f225] transition-colors cursor-pointer"
            >
              Email Inquiries
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#8e937a] font-mono">
          <p>© 2025 Jimson Usayan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#8e937a]">Kinetic Noir Canvas • Edition 2.5</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6f225]"></span>
            <span>WCAG 2.2 AAA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
