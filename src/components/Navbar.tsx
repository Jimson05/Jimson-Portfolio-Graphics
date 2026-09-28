import React, { useState } from 'react';
import { NavigationTab } from '../types/portfolio';

interface NavbarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenCollaborate: () => void;
  onOpenCommand: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenCollaborate,
  onOpenCommand,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'work', label: 'Work' },
    { id: 'logofolio', label: 'Logofolio' },
    { id: 'branding', label: 'Branding' },
    { id: 'ui-ux', label: 'UI/UX' },
    { id: 'print-and-packaging', label: 'Print & Packaging' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#08090B]/85 backdrop-blur-xl border-b border-[#242730]/60 transition-all duration-300">
      <div className="h-20 w-full px-4 md:px-8 lg:px-12 flex items-center justify-between max-w-7xl mx-auto">
        {/* Brand Zone */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectTab('work')}
            className="flex items-baseline gap-2 text-left group cursor-pointer"
          >
            <span className="font-display-hero text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#c6f225] transition-colors">
              JIMSON USAYAN
            </span>
          </button>
          <span className="hidden xl:inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#1a1b20] text-[#c5c9ad] text-xs font-mono uppercase tracking-wider border border-[#242730]">
            MULTIMEDIA ARTIST / DESIGNER
          </span>
        </div>

        {/* Navigation Links Zone */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1a1b20]/80 border border-[#242730] backdrop-blur-md px-1.5 py-1.5 rounded-full shadow-inner">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#c6f225] text-[#161e00] font-semibold shadow-[0_0_16px_rgba(198,242,37,0.35)]'
                    : 'text-[#c5c9ad] hover:text-white hover:bg-[#292a2e]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3">
          {/* Quick search shortcut */}
          <button
            onClick={onOpenCommand}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1b20] border border-[#242730] text-[#c5c9ad] hover:text-white hover:border-[#c6f225]/40 text-xs font-mono transition-all cursor-pointer"
            title="Open command palette (⌘ + K)"
          >
            <span className="material-symbols-outlined text-[16px] text-[#c6f225]">terminal</span>
            <span>⌘K</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenCollaborate}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#c6f225] text-[#161e00] text-sm font-bold shadow-[0_0_24px_-4px_rgba(198,242,37,0.35)] hover:shadow-[0_0_28px_rgba(198,242,37,0.55)] hover:bg-[#dcff64] transition-all cursor-pointer whitespace-nowrap"
          >
            Let's Collaborate
          </button>

          {/* Avatar button */}
          <button
            onClick={() => onSelectTab('about')}
            className="w-9 h-9 rounded-full bg-[#1f1f24] border border-[#242730] flex items-center justify-center text-[#c6f225] hover:border-[#c6f225] transition-all cursor-pointer"
            title="About Jimson Usayan"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#c5c9ad] hover:text-white hover:bg-[#1a1b20] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#08090B] border-b border-[#242730] px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                currentTab === item.id
                  ? 'bg-[#c6f225] text-[#161e00] font-bold'
                  : 'text-[#c5c9ad] hover:text-white hover:bg-[#1a1b20]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#242730] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenCommand();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1b20] text-sm text-[#c5c9ad]"
            >
              <span className="material-symbols-outlined text-[16px] text-[#c6f225]">search</span>
              <span>Search Projects (⌘K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
