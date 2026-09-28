import React, { useState, useEffect } from 'react';
import { NavigationTab } from '../types/portfolio';
import { PROJECTS, LOGO_MARKS } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: NavigationTab) => void;
  onSelectProject: (projectId: string) => void;
  onSelectMark: (markId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onSelectProject,
  onSelectMark,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for ESC and ⌘K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.clientSector.toLowerCase().includes(query.toLowerCase())
  );

  const filteredMarks = LOGO_MARKS.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.category.toLowerCase().includes(query.toLowerCase()) ||
      m.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/75 backdrop-blur-md transition-opacity">
      <div
        className="w-full max-w-2xl bg-[#121316] border border-[#242730] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#242730] gap-3 bg-[#1a1b20]">
          <span className="material-symbols-outlined text-[#c6f225] text-xl">search</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, logo marks, or navigate..."
            className="w-full bg-transparent text-white placeholder-[#8e937a] outline-none text-base font-body"
            autoFocus
          />
          <kbd className="px-2 py-1 text-xs bg-[#242730] text-[#c5c9ad] rounded font-mono">ESC</kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Quick Navigation Section */}
          <div>
            <div className="text-xs font-mono uppercase text-[#8e937a] px-3 mb-1 tracking-wider">
              Quick Navigation
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {[
                { label: 'All Work', tab: 'work' as NavigationTab, icon: 'grid_view' },
                { label: 'Logofolio & Marks', tab: 'logofolio' as NavigationTab, icon: 'token' },
                { label: 'Brand Identity', tab: 'branding' as NavigationTab, icon: 'style' },
                { label: 'UI / UX Design', tab: 'ui-ux' as NavigationTab, icon: 'devices' },
                { label: 'Print & Packaging', tab: 'print-and-packaging' as NavigationTab, icon: 'layers' },
                { label: 'About Jimson', tab: 'about' as NavigationTab, icon: 'person' },
              ].map((item) => (
                <button
                  key={item.tab}
                  onClick={() => {
                    onSelectTab(item.tab);
                    onClose();
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#e3e2e8] hover:bg-[#1f1f24] hover:text-[#c6f225] transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#8e937a]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <div className="text-xs font-mono uppercase text-[#8e937a] px-3 mb-1 tracking-wider">
              Case Studies ({filteredProjects.length})
            </div>
            {filteredProjects.length === 0 ? (
              <p className="text-sm text-[#8e937a] px-3 py-2 italic">No case studies matching "{query}"</p>
            ) : (
              <div className="space-y-1">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      onSelectProject(project.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left hover:bg-[#1f1f24] group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#1a1b20] overflow-hidden shrink-0">
                        <img
                          src={project.heroImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#c6f225] transition-colors">
                          {project.title}
                        </div>
                        <div className="text-xs text-[#8e937a] line-clamp-1">{project.subtitle}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#c6f225] bg-[#c6f225]/10 px-2 py-0.5 rounded">
                      {project.year}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Logo Folio Marks */}
          <div>
            <div className="text-xs font-mono uppercase text-[#8e937a] px-3 mb-1 tracking-wider">
              Vector Marks ({filteredMarks.length})
            </div>
            {filteredMarks.length === 0 ? (
              <p className="text-sm text-[#8e937a] px-3 py-2 italic">No vector marks found</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {filteredMarks.map((mark) => (
                  <button
                    key={mark.id}
                    onClick={() => {
                      onSelectMark(mark.id);
                      onClose();
                    }}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-[#1f1f24] group transition-colors"
                  >
                    <div
                      className="w-7 h-7 rounded flex items-center justify-center font-bold text-xs shrink-0"
                      style={{ backgroundColor: `${mark.color}20`, color: mark.color }}
                    >
                      {mark.name.charAt(0)}
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-medium text-white group-hover:text-[#c6f225] transition-colors truncate">
                        {mark.name}
                      </div>
                      <div className="text-xs text-[#8e937a] truncate">{mark.category}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#1a1b20] border-t border-[#242730] flex items-center justify-between text-xs text-[#8e937a] font-mono">
          <span>Jimson Usayan • Kinetic Noir Portfolio</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
