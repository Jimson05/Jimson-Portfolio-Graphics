/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavigationTab, LogoMark } from './types/portfolio';
import { LOGO_MARKS, PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { CollaborateModal } from './components/CollaborateModal';
import { MarkInspectorModal } from './components/MarkInspectorModal';
import { LightboxModal } from './components/LightboxModal';

// Screens
import { HomeScreen } from './screens/HomeScreen';
import { LogofolioScreen } from './screens/LogofolioScreen';
import { UiUxScreen } from './screens/UiUxScreen';
import { PrintPackagingScreen } from './screens/PrintPackagingScreen';
import { AboutScreen } from './screens/AboutScreen';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('work');
  const [isCollaborateOpen, setIsCollaborateOpen] = useState(false);
  const [collaborateService, setCollaborateService] = useState('Brand Identity & System');
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [inspectedMark, setInspectedMark] = useState<LogoMark | null>(null);
  const [lightboxData, setLightboxData] = useState<{ url: string; title: string } | null>(null);

  // Scroll to top when changing tab
  const handleSelectTab = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCollaborate = (service = 'Brand Identity & System') => {
    setCollaborateService(service);
    setIsCollaborateOpen(true);
  };

  const handleOpenLightbox = (imageUrl: string, title: string) => {
    setLightboxData({ url: imageUrl, title });
  };

  const handleSelectProjectFromCommand = (projectId: string) => {
    if (projectId === 'ourvita' || projectId === 'logofolio') {
      handleSelectTab('branding');
    } else if (projectId === 'poppy' || projectId === 'epic-games') {
      handleSelectTab('ui-ux');
    } else if (projectId === 'physical-artifacts') {
      handleSelectTab('print-and-packaging');
    } else {
      handleSelectTab('work');
    }
  };

  const handleSelectMarkFromCommand = (markId: string) => {
    const mark = LOGO_MARKS.find((m) => m.id === markId);
    if (mark) {
      setInspectedMark(mark);
    }
  };

  // Keyboard shortcut listener for ⌘K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#121317] text-[#e3e2e8] flex flex-col font-body antialiased selection:bg-[#c6f225] selection:text-[#161e00]">
      {/* Fixed Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenCollaborate={() => handleOpenCollaborate('Brand Identity & System')}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="w-full pt-20 flex-1">
        {currentTab === 'work' && (
          <HomeScreen
            onSelectTab={handleSelectTab}
            onOpenCollaborate={() => handleOpenCollaborate('Brand Identity & System')}
            onOpenCommand={() => setIsCommandOpen(true)}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {(currentTab === 'logofolio' || currentTab === 'branding') && (
          <LogofolioScreen
            onSelectTab={handleSelectTab}
            onOpenCollaborate={() => handleOpenCollaborate('Logofolio Vector Emblem')}
            onOpenMarkInspector={(mark) => setInspectedMark(mark)}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentTab === 'ui-ux' && (
          <UiUxScreen
            onSelectTab={handleSelectTab}
            onOpenCollaborate={() => handleOpenCollaborate('UI / UX Digital Platform')}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentTab === 'print-and-packaging' && (
          <PrintPackagingScreen
            onSelectTab={handleSelectTab}
            onOpenCollaborate={() => handleOpenCollaborate('Physical Packaging & Exhibit')}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentTab === 'about' && (
          <AboutScreen
            onSelectTab={handleSelectTab}
            onOpenCollaborate={() => handleOpenCollaborate('Creative Direction Consultation')}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenCollaborate={() => handleOpenCollaborate('General Commission Inquiry')}
        onSelectTab={handleSelectTab}
      />

      {/* Interactive Modals */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onSelectTab={handleSelectTab}
        onSelectProject={handleSelectProjectFromCommand}
        onSelectMark={handleSelectMarkFromCommand}
      />

      <CollaborateModal
        isOpen={isCollaborateOpen}
        onClose={() => setIsCollaborateOpen(false)}
        initialService={collaborateService}
      />

      <MarkInspectorModal
        mark={inspectedMark}
        onClose={() => setInspectedMark(null)}
        onCommission={(markName) => handleOpenCollaborate(`Custom Emblem akin to ${markName}`)}
      />

      <LightboxModal
        imageUrl={lightboxData?.url || null}
        title={lightboxData?.title || 'Visual Specimen'}
        onClose={() => setLightboxData(null)}
      />
    </div>
  );
}
