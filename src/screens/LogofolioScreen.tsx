import React, { useState } from 'react';
import { NavigationTab, LogoMark } from '../types/portfolio';
import { LOGO_MARKS } from '../data/portfolioData';

interface LogofolioScreenProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenCollaborate: () => void;
  onOpenMarkInspector: (mark: LogoMark) => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const LogofolioScreen: React.FC<LogofolioScreenProps> = ({
  onSelectTab,
  onOpenCollaborate,
  onOpenMarkInspector,
  onOpenLightbox,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBrandGuide = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* ===================== HERO STAGE: LOGO FOLIO ===================== */}
      <section className="relative w-full px-4 md:px-8 lg:px-12 pt-8 pb-16 bg-[#08090B] flex flex-col items-center text-center overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c6f225]/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0057FF]/10 blur-[110px] rounded-full pointer-events-none"></div>

        {/* Meta Pill Counter */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1b20] border border-[#242730] text-[#c5c9ad] text-xs font-mono mb-6 tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#c6f225] animate-pulse"></span>
          <span>INDEX // VOL. 04 — SELECTED IDENTITY WORK</span>
          <span className="text-[#8e937a]">/</span>
          <span className="text-[#c6f225] font-bold">2023–2025</span>
        </div>

        {/* Vector Selection Bounding Box Container */}
        <div className="relative max-w-4xl w-full mx-auto my-4 px-6 py-10 md:px-14 md:py-16 bg-[#121316]/70 rounded-2xl shadow-2xl backdrop-blur-sm group border border-dashed border-white/35">
          {/* 8 Perimeter Vector Transform Handles */}
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>

          {/* Software Coordinate Tag & Floating Cursor */}
          <div className="absolute -top-3.5 left-6 px-2.5 py-0.5 bg-[#F4F4F0] text-[#121316] text-[11px] font-mono font-bold rounded shadow-sm">
            w: 1280px • h: 420px [BOUND_BOX]
          </div>

          <div className="absolute -bottom-7 -right-7 hidden md:flex items-center gap-1.5 pointer-events-none select-none z-20">
            <svg className="w-6 h-6 text-[#F4F4F0] drop-shadow" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 2L3 17.5L9.5 15L13.5 22L16.5 20.5L12.5 13.5L18.5 13L10 2Z" />
            </svg>
            <span className="px-2 py-0.5 rounded bg-[#c6f225] text-[#161e00] text-xs font-mono font-bold shadow-md">
              Jimson (Lead)
            </span>
          </div>

          {/* Main Heading inside Bounding Box */}
          <h1 className="font-display-hero text-5xl md:text-8xl font-black tracking-tight text-[#c6f225] leading-none select-none drop-shadow-md">
            Logo Folio
          </h1>

          <p className="mt-6 text-[#e3e2e8] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            My logofolio highlighting custom logos and distinct brand emblems designed to align precisely with clients' missions, vision, and growth.
          </p>

          {/* Sub-actions / stats strip within box */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[#c5c9ad] text-xs font-mono">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#c6f225] text-[18px]">verified</span>
              100% Vector Geometry
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#c6f225] text-[18px]">style</span>
              12 Featured Emblems
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#c6f225] text-[18px]">psychology</span>
              Semiotic Depth
            </span>
          </div>
        </div>

        {/* Quick Section Anchor Tabs */}
        <div className="flex items-center gap-2 mt-8 p-1.5 bg-[#1a1b20] border border-[#242730] rounded-full">
          <a
            href="#logofolio-grid"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('logofolio-grid')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_16px_-4px_rgba(198,242,37,0.3)]"
          >
            01. Curated Grid
          </a>
          <a
            href="#case-study-ourvita"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('case-study-ourvita')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2 rounded-full text-[#c5c9ad] hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            02. Deep Dive: Ourvita
          </a>
        </div>
      </section>

      {/* ===================== SECTION 1: CURATED LOGOFOLIO GRID ===================== */}
      <section
        className="w-full px-4 md:px-8 lg:px-12 py-16 bg-[#F4F4F0] text-[#121316] relative"
        id="logofolio-grid"
      >
        <div className="max-w-7xl mx-auto">
          {/* Editorial Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#121316]/60 uppercase tracking-widest font-mono font-bold mb-1">
                <span className="w-2 h-2 bg-[#121316] rounded-full"></span>
                Collection 2023 – 2025
              </div>
              <h2 className="font-display-hero text-3xl md:text-5xl font-black tracking-tight text-[#121316]">
                12 Crafted Visual Marks
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#121316]/75 max-w-md">
              Spanning healthcare, luxury hospitality, generative tech, architectural studios, and conscious beauty. Click any mark to inspect vector schematics.
            </p>
          </div>

          {/* The 12 Logo Tiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {LOGO_MARKS.map((mark) => (
              <div
                key={mark.id}
                onClick={() => onOpenMarkInspector(mark)}
                className={`group relative bg-[#121317] p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center min-h-[220px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer border ${
                  mark.id === 'ourvita'
                    ? 'border-[#c6f225]/60 ring-2 ring-[#c6f225]/30'
                    : 'border-[#242730] hover:border-[#c6f225]/40'
                }`}
              >
                {/* Visual Mark Symbol */}
                <div className="flex flex-col items-center gap-3">
                  {mark.id === 'sai-heart' && (
                    <svg className="w-14 h-14 text-[#C93B2B] transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 48 48">
                      <path d="M24 6c-3 0-5.5 1.5-7 4-1.5-2.5-4-4-7-4-5.5 0-10 4.5-10 10 0 10 17 22 24 26 7-4 24-16 24-26 0-5.5-4.5-10-10-10-3 0-5.5 1.5-7 4-1.5-2.5-4-4-7-4zm-2 9h4v4h4v4h-4v4h-4v-4h-4v-4h4v-4z" />
                    </svg>
                  )}

                  {mark.id === 'heuposs' && (
                    <svg className="w-14 h-14 text-[#2C5F4D] transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.5" viewBox="0 0 48 48">
                      <path d="M12 12c4 4 8 0 12 12s8 8 12 12" />
                      <path d="M36 12c-4 4-8 0-12 12s-8 8-12 12" />
                    </svg>
                  )}

                  {mark.id === 'akiram' && (
                    <svg className="w-14 h-14 text-[#E5A93C] transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 48 48">
                      <path d="M24 8L8 24l5 5 11-11 11 11 5-5L24 8z" />
                      <rect height="6" rx="1.5" width="6" x="21" y="28" />
                    </svg>
                  )}

                  {mark.id === 'barbent' && (
                    <div className="flex flex-col items-center">
                      <span className="font-display-hero text-3xl font-black tracking-tight text-white lowercase group-hover:text-[#c6f225] transition-colors">
                        barbent
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-[#8e937a] mt-1">STUDIO</span>
                    </div>
                  )}

                  {mark.id === 'ourvita' && (
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-display-hero text-3xl font-black text-[#1CA45C] tracking-tight">
                        Ourvita
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#1CA45C]/15 text-[#1CA45C] text-[10px] font-mono font-bold mt-1">
                        FEATURED CASE
                      </span>
                    </div>
                  )}

                  {mark.id === 'cryst' && (
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-12 h-12 text-[#3b82f6] transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 48 48">
                        <path d="M18 10l-8 14 8 14h5l-8-14 8-14h-5zm12 0l8 14-8 14h-5l8-14-8-14h5z" />
                        <polygon points="24,18 20,24 24,30 28,24" />
                      </svg>
                      <div className="text-center">
                        <div className="font-display-hero text-lg font-bold tracking-[0.25em] text-[#3b82f6]">CRYST</div>
                        <div className="text-[8px] tracking-[0.3em] uppercase text-[#8e937a] font-semibold mt-0.5">
                          HOTELS &amp; RESORTS
                        </div>
                      </div>
                    </div>
                  )}

                  {mark.id === 'alexan' && (
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-12 h-12 text-[#B32753] transition-transform duration-300 group-hover:rotate-6" fill="currentColor" viewBox="0 0 48 48">
                        <path d="M12 28c8 10 24 10 26-6-6 4-14 2-18-2-4-4-6-10-8-12 0 8-4 16 0 20z" />
                      </svg>
                      <span className="font-display-hero text-xl font-bold text-[#B32753] tracking-wide">Alexan</span>
                    </div>
                  )}

                  {mark.id === 'western' && (
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-12 h-12 text-[#4ade80] transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 48 48">
                        <path d="M24 6l6 8h8l-6 8 8 14h-8l-8-10-8 10h-8l8-14-6-8h8l6-8z" />
                      </svg>
                      <span className="font-display-hero text-lg font-bold text-[#4ade80] tracking-tight">wεstεrn</span>
                    </div>
                  )}

                  {mark.id === 'sunplus' && (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 grid grid-cols-2 gap-1 place-items-center group-hover:rotate-45 transition-transform duration-500">
                        <span className="w-5 h-5 bg-[#EAA827] rounded-full"></span>
                        <span className="w-5 h-5 bg-[#EAA827] rounded-full"></span>
                        <span className="w-5 h-5 bg-[#EAA827] rounded-full"></span>
                        <span className="w-5 h-5 bg-[#EAA827] rounded-full"></span>
                      </div>
                      <span className="font-display-hero text-lg font-bold tracking-tight text-[#EAA827]">Sunplus</span>
                    </div>
                  )}

                  {mark.id === 'treslr' && (
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-12 h-12 text-[#60a5fa] transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 48 48">
                        <path d="M12 14h24v4h-8v20h-8V18h-8v-4zm6-6h12v4H18V8z" />
                      </svg>
                      <span className="font-display-hero text-lg font-black tracking-[0.2em] text-[#60a5fa]">TRESLR</span>
                    </div>
                  )}

                  {mark.id === 'vinoma' && (
                    <div className="flex flex-col items-center">
                      <span className="font-display-hero text-2xl font-black tracking-[0.18em] italic text-[#1C69D4] group-hover:translate-x-1 transition-transform">
                        VINOMA
                      </span>
                      <span className="text-[9px] font-mono text-[#8e937a] tracking-wider mt-1">DYNAMIC DRIVE</span>
                    </div>
                  )}

                  {mark.id === 'mystishy' && (
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-12 h-12 text-[#c084fc] transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 48 48">
                        <path d="M24 10c3 6 8 10 12 12-4 2-10 1-12 8-2-7-8-6-12-8 4-2 9-6 12-12zm-8 16c-4 0-8 3-10 7 5 1 9-1 10-7zm16 0c1 6 5 8 10 7-2-4-6-7-10-7z" />
                      </svg>
                      <span className="font-display-hero text-lg font-bold tracking-tight text-[#c084fc]">Mystishy</span>
                    </div>
                  )}

                  {mark.id !== 'barbent' && mark.id !== 'ourvita' && mark.id !== 'cryst' && mark.id !== 'alexan' && mark.id !== 'western' && mark.id !== 'sunplus' && mark.id !== 'treslr' && mark.id !== 'vinoma' && mark.id !== 'mystishy' && (
                    <div className="text-center">
                      <span className="font-display-hero text-lg font-bold tracking-tight text-white">{mark.name}</span>
                    </div>
                  )}
                </div>

                {/* Subtitle Details on Hover */}
                <div className="absolute bottom-3 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-[#c6f225] flex items-center gap-1.5">
                  <span>Inspect Spec</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>

          {/* Banner Pill on Canvas */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[#08090B] text-white shadow-xl border border-[#242730]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#c6f225] text-[32px]">design_services</span>
              <div>
                <h3 className="font-display-hero text-lg font-bold text-white">Need a tailored visual mark for your venture?</h3>
                <p className="text-xs text-[#c5c9ad]">All marks are delivered with comprehensive optical grids, responsive scalings, and monograms.</p>
              </div>
            </div>
            <button
              onClick={onOpenCollaborate}
              className="px-6 py-2.5 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:bg-[#bbe402] whitespace-nowrap cursor-pointer"
            >
              Commission a Logo →
            </button>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2: BRANDING BOUNDING BOX TRANSITION ===================== */}
      <section className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#08090B] flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c6f225]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative max-w-4xl w-full mx-auto p-8 md:p-14 bg-[#121316]/80 rounded-2xl shadow-2xl backdrop-blur-md border border-dashed border-white/40">
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>

          <span className="px-3 py-1 rounded-full bg-[#1f1f24] text-[#c6f225] text-xs font-mono uppercase tracking-widest font-bold">
            SYSTEM CASE STUDY
          </span>
          <h2 className="mt-4 font-display-hero text-5xl md:text-8xl font-black text-[#c6f225] tracking-tight leading-none">
            Branding
          </h2>
          <p className="mt-6 text-[#e3e2e8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            These Brand Identity design projects involve creating impactful visual identifying marks of their Mission and Goals.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-[#c5c9ad]">
            <span className="w-2 h-2 rounded-full bg-[#c6f225]"></span>
            <span>Client: Ourvita Botanical Cosmetics • Global Launch</span>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 3: COMPREHENSIVE CASE STUDY — OURVITA ===================== */}
      <section
        className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#F4F4F0] text-[#121316]"
        id="case-study-ourvita"
      >
        <div className="max-w-7xl mx-auto">
          {/* Case Overview Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#0EA94B] font-mono font-bold">
                  Case Breakdown
                </span>
                <h3 className="font-display-hero text-3xl md:text-5xl font-black tracking-tight text-[#121316] mt-1">
                  Brand : Ourvita
                </h3>
                <p className="text-xs font-mono text-[#121316]/60 mt-1">Industry: Cosmetic • Skincare • Wellness</p>
              </div>

              <p className="text-sm md:text-base text-[#121316]/80 leading-relaxed">
                <strong className="text-[#121316] font-semibold">Ourvita</strong> is a premium natural cosmetics brand committed to delivering high-performance skincare and beauty products powered by nature. We believe in the harmony between science and botanicals, crafting formulations that nourish, protect, and enhance the skin—without compromising on purity or sustainability.
              </p>

              {/* Key Features & Strategy */}
              <div className="bg-[#121316]/5 p-6 rounded-2xl flex flex-col gap-3 mt-2 border border-black/5">
                <span className="font-display-hero text-base font-bold text-[#121316]">
                  Key Features &amp; Strategy
                </span>
                <ul className="space-y-2 text-xs md:text-sm text-[#121316]/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA94B] mt-1.5 shrink-0"></span>
                    <span><strong>Target Audience:</strong> Eco-Conscious Consumers 18 - 45 Women &amp; Men</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA94B] mt-1.5 shrink-0"></span>
                    <span><strong>Identity Asset:</strong> Custom Wordmark with Inset Negative Space Motif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA94B] mt-1.5 shrink-0"></span>
                    <span><strong>Core Pillars:</strong> Botanical Purity, Zero Toxins, Clinical Efficacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA94B] mt-1.5 shrink-0"></span>
                    <span><strong>Execution:</strong> Full Identity Suite, Packaging Tubes, Retail Signage, Mobile Web</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bento Grid of Identity Assets */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Tile 1: Primary Wordmark */}
              <div className="col-span-2 bg-[#E8EBD6] p-6 rounded-2xl flex items-center justify-center min-h-[140px] shadow-sm border border-black/5">
                <span className="font-display-hero text-4xl md:text-6xl font-black text-[#0EA94B] tracking-tight">
                  Ourvita®
                </span>
              </div>

              {/* Tile 2: Typography Card */}
              <div className="bg-[#08090B] text-white p-5 rounded-2xl flex flex-col justify-between shadow-md">
                <div>
                  <span className="font-display-hero text-lg font-bold text-white">Labora</span>
                  <span className="block text-[11px] font-mono text-[#8e937a]">Regular Typeface</span>
                </div>
                <span className="text-3xl font-serif text-[#c6f225] my-1">Aa</span>
                <p className="text-[10px] text-[#8e937a] font-mono">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm</p>
              </div>

              {/* Tile 3: Exterior Store Mockup */}
              <div
                className="col-span-2 md:col-span-2 overflow-hidden rounded-2xl shadow-md h-[180px] relative cursor-pointer group"
                onClick={() =>
                  onOpenLightbox(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCkcTbS9XYVdHnWRrvaas4IJPX8qpDBlzqu-7THMM0VQUiJnCByE1SihjJq764vxcarFXT9RQcJ5fB_8UqqIzG07YbWEH3H-jDxAR01EzjIf4V-FKX6xPj4vgWgfGrE-4Sg2PCVaTo_XF1IacfJ36xvscX48dshPMo_GwCTdP-6iES5DhwhwbsthImaO2HOoAXcgRCS2014E1ISlXN1un9-fF0mzPOhESGVFNk2SpAJkdg1bD-mXlMzWA',
                    'Ourvita Flagship Retail Facade'
                  )
                }
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Modern architectural glass facade of Ourvita boutique cosmetics store"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkcTbS9XYVdHnWRrvaas4IJPX8qpDBlzqu-7THMM0VQUiJnCByE1SihjJq764vxcarFXT9RQcJ5fB_8UqqIzG07YbWEH3H-jDxAR01EzjIf4V-FKX6xPj4vgWgfGrE-4Sg2PCVaTo_XF1IacfJ36xvscX48dshPMo_GwCTdP-6iES5DhwhwbsthImaO2HOoAXcgRCS2014E1ISlXN1un9-fF0mzPOhESGVFNk2SpAJkdg1bD-mXlMzWA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-mono text-white font-semibold">Flagship Retail Facade</span>
                </div>
              </div>

              {/* Tile 4: Wireframe Neon Outline Variant */}
              <div className="bg-[#08090B] p-5 rounded-2xl flex items-center justify-center shadow-md">
                <span
                  className="font-display-hero text-xl font-bold"
                  style={{ color: 'transparent', WebkitTextStroke: '1.5px #0057FF' }}
                >
                  Ourvita
                </span>
              </div>

              {/* Tile 5: Monogram Pattern Grid */}
              <div className="bg-[#0EA94B] p-5 rounded-2xl flex items-center justify-center overflow-hidden relative shadow-md">
                <div className="grid grid-cols-4 gap-2 opacity-70">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold"
                    >
                      O
                    </span>
                  ))}
                </div>
                <span className="absolute bottom-2 right-2 bg-[#08090B]/80 text-white font-mono text-[9px] px-2 py-0.5 rounded">
                  Modular Repeat
                </span>
              </div>

              {/* Tile 6: Color Matrix Palette */}
              <div className="col-span-2 md:col-span-2 bg-[#F4F4F0] rounded-2xl p-4 flex flex-col gap-2 shadow-sm border border-black/5">
                <span className="text-[11px] font-mono font-bold text-[#121316] uppercase tracking-wider">
                  Brand Palette Matrix
                </span>
                <div className="grid grid-cols-4 gap-2 h-14">
                  <div className="rounded-lg bg-[#0EA94B] flex flex-col justify-end p-1 text-[9px] font-mono text-white font-bold">
                    #0EA94B
                  </div>
                  <div className="rounded-lg bg-[#003B0D] flex flex-col justify-end p-1 text-[9px] font-mono text-white font-bold">
                    #003B0D
                  </div>
                  <div className="rounded-lg bg-[#E8EBD6] flex flex-col justify-end p-1 text-[9px] font-mono text-[#121316] font-bold">
                    #E8EBD6
                  </div>
                  <div className="rounded-lg bg-[#4C3B30] flex flex-col justify-end p-1 text-[9px] font-mono text-white font-bold">
                    #4C3B30
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== ANATOMY OF THE LOGO MARK ===================== */}
          <div className="mt-16 pt-16 border-t border-[#121316]/10">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-[#0EA94B] font-mono font-bold">
                Geometric Dissection
              </span>
              <h4 className="font-display-hero text-3xl md:text-4xl font-black text-[#121316] mt-1">
                Anatomy of the Wordmark
              </h4>
              <p className="text-sm text-[#121316]/70 mt-1">
                Every counter-curve and apex was engineered to evoke organic tranquility while maintaining high-speed digital readability.
              </p>
            </div>

            {/* Dissection Display Canvas */}
            <div className="relative w-full max-w-4xl mx-auto bg-[#F4F4F0] p-6 md:p-14 rounded-3xl shadow-xl border border-black/10 flex flex-col items-center justify-center">
              {/* Dimension Callout */}
              <div className="flex items-center gap-4 text-[#121316]/60 font-mono text-xs mb-6">
                <div className="w-12 md:w-32 h-[1px] bg-[#121316]/30"></div>
                <div className="px-3 py-1 rounded bg-[#E8EBD6] text-[#121316] font-bold">
                  Wordmark Logo • Main Identity Mark
                </div>
                <div className="w-12 md:w-32 h-[1px] bg-[#121316]/30"></div>
              </div>

              {/* Giant Logo Wordmark */}
              <div className="relative py-8 select-none">
                <div className="font-display-hero text-6xl sm:text-8xl md:text-[130px] font-black tracking-tight text-[#0EA94B] leading-none flex items-center">
                  <span className="relative inline-block">
                    O
                    <span className="absolute top-[28%] left-[30%] w-[38%] h-[44%] bg-[#F4F4F0] rounded-tl-full rounded-br-full transform rotate-12 pointer-events-none"></span>
                  </span>
                  <span>urvita</span>
                </div>

                {/* Callout 1: Leaf */}
                <div className="absolute -top-4 -left-4 md:left-2 flex items-center gap-2 text-left">
                  <div className="px-2.5 py-1 rounded-md bg-[#08090B] text-white text-xs shadow-md font-mono">
                    <span className="text-[#0EA94B] font-bold">← Negative Space:</span> Leaf Silhouette
                  </div>
                </div>

                {/* Callout 2: Round typeface */}
                <div className="absolute -top-6 right-2 md:right-8 flex flex-col items-end text-right">
                  <span className="text-xs font-bold text-[#C93B2B] font-mono">Sans Serif (Geometric Round)</span>
                  <span className="text-[11px] text-[#121316]/70 max-w-[170px]">
                    Engineered to communicate tactile safety and clinical balance.
                  </span>
                </div>

                {/* Callout 3: Optical terminal */}
                <div className="absolute -bottom-4 right-1/4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0EA94B] animate-ping"></span>
                  <span className="font-mono text-xs text-[#121316]/60">Optical terminal flush @ baseline</span>
                </div>
              </div>

              {/* Bottom 3 Rationale Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12 pt-8 border-t border-[#121316]/10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0EA94B]/15 text-[#0EA94B] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">eco</span>
                  </div>
                  <div>
                    <h5 className="font-display-hero text-base font-bold text-[#121316]">Leaf Geometry</h5>
                    <p className="text-xs text-[#121316]/75 mt-1 leading-relaxed">
                      The internal leaf icon embodies Ourvita's promise of toxin-free, 100% plant-extracted skincare.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0EA94B]/15 text-[#0EA94B] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">palette</span>
                  </div>
                  <div>
                    <h5 className="font-display-hero text-base font-bold text-[#121316]">Color Psychology</h5>
                    <p className="text-xs text-[#121316]/75 mt-1 leading-relaxed">
                      Vibrant natural green represents wellness, cellular revitalization, and carbon-neutral packaging.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0EA94B]/15 text-[#0EA94B] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]">font_download</span>
                  </div>
                  <div>
                    <h5 className="font-display-hero text-base font-bold text-[#121316]">Typography Ergonomics</h5>
                    <p className="text-xs text-[#121316]/75 mt-1 leading-relaxed">
                      Generous x-height paired with friendly circular apertures delivers high legibility on mini 30ml tubes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== REAL-WORLD TOUCHPOINTS ===================== */}
          <div className="mt-20 pt-16 border-t border-[#121316]/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#0EA94B] font-mono font-bold">
                  Physical &amp; Digital Collateral
                </span>
                <h4 className="font-display-hero text-3xl md:text-5xl font-black tracking-tight text-[#121316]">
                  Full Identity System in Application
                </h4>
              </div>
              <p className="text-sm text-[#121316]/70 max-w-md">
                From tactile unboxing moments and retail staff credentials to responsive e-commerce storefronts.
              </p>
            </div>

            {/* Grid of Real Touchpoint Mockups */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Large Touchpoint 1: Stationery & Lanyard (Col 7) */}
              <div
                className="lg:col-span-7 bg-[#2E5325]/10 rounded-3xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group min-h-[420px] cursor-pointer"
                onClick={() =>
                  onOpenLightbox(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDZbPAxGhyik6CUQ3ie3GDtt83NKduJOSQGGzVt7lcFnCKyIC3vVlAjrLwidw8cicKi6pcyvK1xIllJLUOnUkXMqkOzjvQvvx3ovntwkJi2sQ4pUtB7R0WdJbPb6PK7D90cLYJBqJRkQWgm-by9W8ipsONlS47CHcgEPpPSVookiqfHZ6Qz2g8K6vsqnWjI8uxZYo0g-XcRYKobd-1BupNKrayevpxM327RfPK2bptXdXFtoxPAAYqaaA',
                    'Stationery & Staff ID Badges'
                  )
                }
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Top down overhead flatlay of Ourvita corporate identity suite"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZbPAxGhyik6CUQ3ie3GDtt83NKduJOSQGGzVt7lcFnCKyIC3vVlAjrLwidw8cicKi6pcyvK1xIllJLUOnUkXMqkOzjvQvvx3ovntwkJi2sQ4pUtB7R0WdJbPb6PK7D90cLYJBqJRkQWgm-by9W8ipsONlS47CHcgEPpPSVookiqfHZ6Qz2g8K6vsqnWjI8uxZYo0g-XcRYKobd-1BupNKrayevpxM327RfPK2bptXdXFtoxPAAYqaaA"
                />
                <div className="relative z-10 self-start px-3 py-1 rounded-full bg-[#08090B]/85 text-white text-xs font-mono font-semibold">
                  Stationery &amp; Staff ID Badges
                </div>
                <div className="relative z-10 self-end p-5 rounded-2xl bg-[#08090B]/90 text-white backdrop-blur-md max-w-xs shadow-lg border border-white/10">
                  <span className="font-display-hero text-base font-bold text-[#c6f225]">Crafted Print Production</span>
                  <p className="text-xs text-[#c5c9ad] mt-1">FSC-certified recycled cotton papers with soy-based inks.</p>
                </div>
              </div>

              {/* Touchpoint 2 & 3: Lineup + Social (Col 5) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Tube packaging row */}
                <div
                  className="bg-[#121316] rounded-3xl p-6 shadow-xl relative overflow-hidden h-[230px] group cursor-pointer"
                  onClick={() =>
                    onOpenLightbox(
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1Hk2F_NOPpYqCg9WoS2TVkMy79Ei7_tE2qOnccuCFe2lK5umo3Aisd3FktcIQwj5YZDVrGxFtmWgMz8k0P_QtRHpbssHSj5C1k8whbqp8AfW220NpxgFS-iS0TxuXs701w_TORSOgfccOBFonMN3hTfmfld91-li9owcWtae4Dd1HcdkkZAehugiND9NFDlwvJ1XKJTXKL-kZRZVDWL7oRMlp-lg26KMlbtXasCVpclV1eFz5chZ7og',
                      'Packaging Tubes Lineup'
                    )
                  }
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Ourvita cosmetic cream tubes lined up"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1Hk2F_NOPpYqCg9WoS2TVkMy79Ei7_tE2qOnccuCFe2lK5umo3Aisd3FktcIQwj5YZDVrGxFtmWgMz8k0P_QtRHpbssHSj5C1k8whbqp8AfW220NpxgFS-iS0TxuXs701w_TORSOgfccOBFonMN3hTfmfld91-li9owcWtae4Dd1HcdkkZAehugiND9NFDlwvJ1XKJTXKL-kZRZVDWL7oRMlp-lg26KMlbtXasCVpclV1eFz5chZ7og"
                  />
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-[#08090B]/85 text-white text-xs font-mono font-semibold">
                      Packaging Tubes Lineup
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#c6f225] text-[#161e00] text-xs font-mono font-bold">5 SKUs</span>
                  </div>
                </div>

                {/* Mobile App / Instagram Touchpoint */}
                <div
                  className="bg-[#121316] rounded-3xl p-6 shadow-xl relative overflow-hidden h-[230px] group cursor-pointer"
                  onClick={() =>
                    onOpenLightbox(
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5da1VENpwQy_1xb2uCF0I8_fME2CyYmQKa4dbovdLXOt6e0gtKRUSC_QwrCoe--byUrUfLYDhfoZhsVbBUgEsRYxNHkATT_Gs2KxzpeQJ28gPufR_3bbLWqgp9jmjPd-GooywUwGjkEhakyAdEVBg4qqSUm83AmNCV9TiYYLqJnfK1b66_pIRO53TiJ33dNpCSBe7zmLEjvpHZaemdYEI7sGQq_PsnaKc7Uoh7_9jfO-36CQFPR7ccA',
                      'Social & Mobile Experience'
                    )
                  }
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Smartphone displaying Ourvita official social storefront"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5da1VENpwQy_1xb2uCF0I8_fME2CyYmQKa4dbovdLXOt6e0gtKRUSC_QwrCoe--byUrUfLYDhfoZhsVbBUgEsRYxNHkATT_Gs2KxzpeQJ28gPufR_3bbLWqgp9jmjPd-GooywUwGjkEhakyAdEVBg4qqSUm83AmNCV9TiYYLqJnfK1b66_pIRO53TiJ33dNpCSBe7zmLEjvpHZaemdYEI7sGQq_PsnaKc7Uoh7_9jfO-36CQFPR7ccA"
                  />
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-[#08090B]/85 text-white text-xs font-mono font-semibold">
                      Social &amp; Mobile Experience
                    </span>
                    <span className="material-symbols-outlined text-[#c6f225] text-[20px]">smartphone</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Quote Snippet */}
            <div className="mt-12 p-8 bg-[#08090B] text-white rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-6 border border-[#242730]">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 ring-2 ring-[#c6f225]/40">
                <img
                  className="w-full h-full object-cover"
                  alt="Portrait of Tanmay Pant, VP of Marketing at Ourvita"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm3HeTcutQ2zSEjcFkOJseS_XHsfFFCeuHx7flIZsT3oGO_6Iz47ddc1bVEkJ5S-Gck3oOX8FwE5dj4wpk2knPF_gT-LkNmKWLd1ToB-kw_QNk63uQt8BSCOAHeMX5iFIIidB_nn9vWjMBMkvosWm0m4h1P6teIx1zOajnmOGbol0yjM6FK7otI9FJxd-Dps1TWA7cqEwVLybhZgHzDEXUeene1TB3mPMGG-yidEkfYgDepqKXGhIXfg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-base md:text-lg text-white italic leading-relaxed">
                  “Jimson didn't just design a logo; he mapped an entire botanical language for Ourvita. The leaf negative space inside the ‘O’ became our signature brand talisman across packaging, retail, and social.”
                </p>
                <div className="mt-2 text-xs font-mono">
                  <strong className="text-[#c6f225]">Tanmay Pant</strong>
                  <span className="text-[#8e937a]"> • VP of Brand &amp; Growth, Ourvita Cosmetics</span>
                </div>
              </div>
              <button
                onClick={handleDownloadBrandGuide}
                className="px-6 py-3 rounded-full bg-[#1a1b20] text-white hover:bg-[#c6f225] hover:text-[#161e00] font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer border border-[#242730]"
              >
                {downloadSuccess ? '✓ PDF Guide Ready' : 'View Brand Guide PDF ↓'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BOTTOM INQUIRY CALL-TO-ACTION ===================== */}
      <section className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#08090B] text-center relative overflow-hidden border-t border-[#242730]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c6f225]/10 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          <span className="px-4 py-1 rounded-full bg-[#1a1b20] text-[#c6f225] text-xs font-mono uppercase tracking-wider mb-4 border border-[#242730]">
            NEXT STEPS • INQUIRIES
          </span>
          <h2 className="font-display-hero text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Have a brand idea that demands kinetic clarity?
          </h2>
          <p className="mt-4 text-base text-[#c5c9ad] max-w-xl leading-relaxed">
            Whether you require an individual high-precision wordmark or a turnkey brand architecture system, let's construct it together.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenCollaborate}
              className="px-8 py-3.5 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-sm uppercase tracking-wider transition-all shadow-[0_0_28px_rgba(198,242,37,0.35)] hover:shadow-[0_0_36px_rgba(198,242,37,0.55)] cursor-pointer"
            >
              Initiate Identity Project →
            </button>
            <button
              onClick={() => onSelectTab('work')}
              className="px-8 py-3.5 rounded-full bg-[#1a1b20] text-white hover:bg-[#292a2e] font-bold text-sm uppercase tracking-wider transition-all border border-[#242730] cursor-pointer"
            >
              Explore All Works
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
