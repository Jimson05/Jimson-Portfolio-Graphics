import React, { useState } from 'react';
import { NavigationTab } from '../types/portfolio';

interface UiUxScreenProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenCollaborate: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const UiUxScreen: React.FC<UiUxScreenProps> = ({
  onSelectTab,
  onOpenCollaborate,
  onOpenLightbox,
}) => {
  const [activeUiFilter, setActiveUiFilter] = useState<'all' | 'streaming' | 'gaming' | 'systems'>('all');
  const [flowFilter, setFlowFilter] = useState<'all' | 'auth' | 'media' | 'vip'>('all');
  const [comparisonMode, setComparisonMode] = useState<'after' | 'before' | 'split'>('after');
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [figmaAccessRequested, setFigmaAccessRequested] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {/* ===================== HERO HEADER ===================== */}
      <section className="relative w-full px-4 md:px-8 lg:px-12 py-16 overflow-hidden bg-[#08090B]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#c6f225]/10 blur-[130px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1a1b20] border border-[#242730] text-[#c5c9ad] text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c6f225] animate-pulse"></span>
            Portfolio Phase 03 • Digital Products &amp; Experience Architecture
          </div>

          {/* Bounding Box Container */}
          <div className="relative group cursor-crosshair inline-block px-8 py-6 md:px-16 md:py-10 my-4 border border-dashed border-white/40 rounded-xl bg-[#121316]/50">
            <div className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] bg-white border border-[#08090B] shadow-sm"></div>
            <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-white border border-[#08090B] shadow-sm"></div>
            <div className="absolute -top-[5px] -right-[5px] w-[10px] h-[10px] bg-white border border-[#08090B] shadow-sm"></div>
            <div className="absolute top-1/2 -left-[5px] -translate-y-1/2 w-[10px] h-[10px] bg-white border border-[#08090B] shadow-sm"></div>
            <div className="absolute top-1/2 -right-[5px] -translate-y-1/2 w-[10px] h-[10px] bg-white border border-[#08090B] shadow-sm"></div>
            <div className="absolute -bottom-[5px] -left-[5px] w-[10px] h-[10px] bg-white border border-[#08090B] shadow-sm"></div>
            <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-white border border-[#08090B] shadow-sm"></div>
            <div className="absolute -bottom-[5px] -right-[5px] w-[10px] h-[10px] bg-white border border-[#08090B] shadow-sm"></div>

            <div className="absolute -bottom-7 -right-7 flex items-center gap-1 bg-[#1a1b20] border border-[#242730] text-[#c6f225] text-[10px] font-mono px-2 py-0.5 rounded shadow-lg pointer-events-none">
              <span className="material-symbols-outlined text-[12px]">open_with</span>
              <span>W: 1040 H: 280</span>
            </div>

            <h1 className="font-display-hero text-6xl md:text-9xl text-[#c6f225] tracking-tighter uppercase font-black drop-shadow-[0_0_35px_rgba(198,242,37,0.3)]">
              UI / UX
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-[#c5c9ad] font-normal leading-relaxed">
            Designing seamless, human-centric interfaces for mobile apps and web platforms that harmonize intuitive clarity, usability, and visual appeal.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#1a1b20] border border-[#242730]">
            {[
              { id: 'all', label: 'All Case Studies' },
              { id: 'streaming', label: 'Mobile Streaming' },
              { id: 'gaming', label: 'Desktop Gaming Platform' },
              { id: 'systems', label: 'Design Systems' },
            ].map((f) => {
              const isActive = activeUiFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveUiFilter(f.id as any)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#c6f225] text-[#161e00] font-bold shadow-md'
                      : 'text-[#c5c9ad] hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CASE STUDY 01: POPPY STREAM ===================== */}
      {(activeUiFilter === 'all' || activeUiFilter === 'streaming') && (
        <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-[#121316] border-t border-[#242730]">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            {/* Project Synopsis & Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#c6f225] font-mono font-bold">
                    Case Study 01 • iOS &amp; Android
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1a1b20] text-[#c5c9ad] text-xs font-mono border border-[#242730]">
                    Entertainment &amp; VOD
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="font-display-hero text-3xl md:text-5xl text-white font-black tracking-tight">
                    Poppy Stream
                  </h2>
                  <span className="font-display-hero text-2xl md:text-3xl text-[#c6f225] italic">
                    Mobile Experience
                  </span>
                </div>
                <p className="text-sm md:text-base text-[#c5c9ad] max-w-3xl leading-relaxed">
                  A premier dark-mode streaming service application engineered to elevate content discovery, eliminate playback friction, and introduce an organic, luminous onboarding flow tailored for cinephiles and episodic binge-watchers.
                </p>
              </div>

              {/* Metrics Bento Card */}
              <div className="lg:col-span-4 bg-[#1a1b20] border border-[#242730] p-6 rounded-2xl shadow-xl flex flex-col gap-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#8e937a]">
                  Validated Impact
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="font-display-hero text-3xl font-black text-[#c6f225]">+42%</span>
                    <span className="text-xs text-[#8e937a] mt-0.5">Daily Session Duration</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display-hero text-3xl font-black text-white">2 Taps</span>
                    <span className="text-xs text-[#8e937a] mt-0.5">Checkout &amp; VIP Upgrade</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-[#242730] flex items-center justify-between text-xs font-mono text-[#c5c9ad]">
                  <span>Stack: Figma • ProtoPie • SwiftUI Tokens</span>
                  <span className="w-2 h-2 rounded-full bg-[#84cc16]"></span>
                </div>
              </div>
            </div>

            {/* Interactive Screen Flows Controls */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  <span className="text-sm font-bold text-white mr-2">High-Fidelity Flows:</span>
                  {[
                    { id: 'all', label: 'All 10 Screens' },
                    { id: 'auth', label: 'Onboarding & Auth' },
                    { id: 'media', label: 'Media Hub' },
                    { id: 'vip', label: 'Checkout / VIP' },
                  ].map((flow) => (
                    <button
                      key={flow.id}
                      onClick={() => setFlowFilter(flow.id as any)}
                      className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        flowFilter === flow.id
                          ? 'bg-[#c6f225] text-[#161e00] font-bold'
                          : 'bg-[#1a1b20] border border-[#242730] text-[#c5c9ad] hover:text-white'
                      }`}
                    >
                      {flow.label}
                    </button>
                  ))}
                </div>
                <div className="text-xs font-mono text-[#8e937a] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">touch_app</span>
                  <span>Scroll horizontally to examine full interface</span>
                </div>
              </div>

              {/* Horizontal Scrollable Device Mockup Stage */}
              <div className="w-full overflow-x-auto pb-6 pt-2">
                <div className="flex gap-6 min-w-max items-start">
                  {/* Screen 1: App Splash */}
                  {(flowFilter === 'all' || flowFilter === 'auth') && (
                    <div className="w-[260px] flex flex-col gap-2 group">
                      <div className="w-full h-[520px] rounded-[38px] bg-[#08090B] border-4 border-[#242730] p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                        <div className="w-24 h-4 bg-[#121316] rounded-full mx-auto mt-1 flex items-center justify-end px-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0057FF]/60"></div>
                        </div>
                        <div className="my-auto flex flex-col items-center text-center p-4">
                          <div className="w-16 h-16 rounded-full bg-[#c6f225]/20 flex items-center justify-center mb-4 relative">
                            <div className="w-10 h-10 rounded-full bg-[#c6f225] flex items-center justify-center text-[#161e00] font-black text-xl">
                              P
                            </div>
                            <div className="absolute inset-0 rounded-full border border-dashed border-[#c6f225]/50 animate-spin"></div>
                          </div>
                          <h4 className="font-display-hero text-2xl font-black text-white">POPPY</h4>
                          <p className="text-xs text-[#8e937a] mt-1.5">Cinematic universe at your fingertips.</p>
                          <div className="w-full mt-6 flex flex-col gap-2">
                            <button
                              onClick={() => alert('Demo prototype flow: Onboarding initiated.')}
                              className="w-full py-2.5 rounded-full bg-[#c6f225] text-[#161e00] text-xs font-bold uppercase tracking-wider"
                            >
                              Sign Up
                            </button>
                            <button className="w-full py-2 rounded-full bg-[#1a1b20] text-white text-xs font-medium">
                              Existing Account? Log in
                            </button>
                          </div>
                        </div>
                        <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mb-1"></div>
                      </div>
                      <span className="text-xs font-mono text-[#8e937a] text-center">01. Onboarding &amp; Auth</span>
                    </div>
                  )}

                  {/* Screen 2: Sign-Up Form */}
                  {(flowFilter === 'all' || flowFilter === 'auth') && (
                    <div className="w-[260px] flex flex-col gap-2 group">
                      <div className="w-full h-[520px] rounded-[38px] bg-[#08090B] border-4 border-[#242730] p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                        <div className="w-24 h-4 bg-[#121316] rounded-full mx-auto mt-1"></div>
                        <div className="p-4 flex flex-col gap-3 my-auto">
                          <div className="font-display-hero text-lg font-bold text-white">Let's get started</div>
                          <div className="text-xs text-[#8e937a]">Watch latest releases and series</div>
                          <div className="space-y-2 mt-2">
                            <div className="p-2.5 rounded-xl bg-[#1a1b20] border border-[#242730] text-[#c5c9ad] text-xs">
                              Your name
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#1a1b20] border border-[#242730] text-[#c5c9ad] text-xs">
                              Your email
                            </div>
                            <div className="p-2.5 rounded-xl bg-[#1a1b20] border border-[#242730] text-[#c5c9ad] text-xs">
                              Password
                            </div>
                          </div>
                          <button
                            onClick={() => alert('Demo prototype flow: Account credentials registered.')}
                            className="w-full py-2.5 rounded-full bg-[#c6f225] text-[#161e00] text-xs font-bold text-center mt-3"
                          >
                            Create Account
                          </button>
                        </div>
                        <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mb-1"></div>
                      </div>
                      <span className="text-xs font-mono text-[#8e937a] text-center">02. Registration Matrix</span>
                    </div>
                  )}

                  {/* Screen 3: Home Streaming Feed */}
                  {(flowFilter === 'all' || flowFilter === 'media') && (
                    <div className="w-[260px] flex flex-col gap-2 group">
                      <div className="w-full h-[520px] rounded-[38px] bg-[#08090B] border-4 border-[#242730] p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                        <div className="w-24 h-4 bg-[#121316] rounded-full mx-auto mt-1"></div>
                        <div className="flex flex-col gap-3 pt-1 overflow-hidden">
                          <div className="flex items-center justify-between px-1">
                            <span className="font-display-hero text-base font-black text-white">POPPY</span>
                            <span className="material-symbols-outlined text-[#c5c9ad] text-[18px]">search</span>
                          </div>
                          <div className="flex gap-1.5 overflow-hidden">
                            <span className="px-2.5 py-0.5 rounded-full bg-[#c6f225] text-[#161e00] text-[10px] font-bold">All</span>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#1a1b20] text-[#8e937a] text-[10px]">Movies</span>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#1a1b20] text-[#8e937a] text-[10px]">Series</span>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#1a1b20] text-[#8e937a] text-[10px]">Anime</span>
                          </div>
                          <div className="w-full h-36 rounded-2xl bg-[#1a1b20] border border-[#242730] relative overflow-hidden flex flex-col justify-end p-2.5 shadow-md">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent"></div>
                            <span className="text-[10px] font-mono text-[#c6f225] font-bold z-10">Trending Now</span>
                            <span className="font-display-hero text-sm font-bold text-white z-10">Cyber Pulse: Tokyo</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[11px] font-semibold text-white">Latest Releases</span>
                            <div className="grid grid-cols-3 gap-1.5">
                              <div className="h-16 bg-[#1a1b20] border border-[#242730] rounded-xl flex items-center justify-center text-[10px] text-[#8e937a]">
                                Dune II
                              </div>
                              <div className="h-16 bg-[#1a1b20] border border-[#242730] rounded-xl flex items-center justify-center text-[10px] text-[#8e937a]">
                                Fallout
                              </div>
                              <div className="h-16 bg-[#1a1b20] border border-[#242730] rounded-xl flex items-center justify-center text-[10px] text-[#8e937a]">
                                Shōgun
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-10 bg-[#121316] rounded-2xl flex items-center justify-around px-2 border border-[#242730]">
                          <span className="material-symbols-outlined text-[#c6f225] text-[18px]">home</span>
                          <span className="material-symbols-outlined text-[#8e937a] text-[18px]">explore</span>
                          <span className="material-symbols-outlined text-[#8e937a] text-[18px]">download</span>
                          <span className="material-symbols-outlined text-[#8e937a] text-[18px]">person</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#8e937a] text-center">03. Discovery Feed</span>
                    </div>
                  )}

                  {/* Screen 4: Movie Detail / Player Screen */}
                  {(flowFilter === 'all' || flowFilter === 'media') && (
                    <div className="w-[260px] flex flex-col gap-2 group">
                      <div className="w-full h-[520px] rounded-[38px] bg-[#08090B] border-4 border-[#242730] p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                        <div className="w-24 h-4 bg-[#121316] rounded-full mx-auto mt-1"></div>
                        <div className="flex flex-col gap-2.5 pt-1">
                          <div className="w-full h-44 rounded-2xl bg-[#1a1b20] border border-[#242730] relative overflow-hidden flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-[#c6f225] flex items-center justify-center text-[#161e00] shadow-lg">
                              <span className="material-symbols-outlined text-[22px]">play_arrow</span>
                            </div>
                            <div className="absolute bottom-2 left-2 text-[9px] font-mono bg-[#08090B]/80 px-2 py-0.5 rounded text-white">
                              2h 14m • 4K HDR
                            </div>
                          </div>
                          <div className="font-display-hero text-base font-bold text-white">Kung Fu Panda 4</div>
                          <div className="flex items-center gap-1.5 text-[10px] text-[#8e937a] font-mono">
                            <span className="text-[#c6f225] font-bold">★ 8.6</span>
                            <span>•</span>
                            <span>Animation</span>
                            <span>•</span>
                            <span>2024</span>
                          </div>
                          <p className="text-[11px] text-[#c5c9ad] line-clamp-2 leading-relaxed">
                            Po must train a new warrior when he is chosen to become the spiritual leader of the Valley.
                          </p>
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase font-mono text-[#8e937a]">Cast &amp; Crew</span>
                            <div className="flex gap-1.5">
                              <div className="w-6 h-6 rounded-full bg-[#1a1b20] border border-[#242730] flex items-center justify-center text-[9px] text-[#c5c9ad]">JB</div>
                              <div className="w-6 h-6 rounded-full bg-[#1a1b20] border border-[#242730] flex items-center justify-center text-[9px] text-[#c5c9ad]">AK</div>
                              <div className="w-6 h-6 rounded-full bg-[#1a1b20] border border-[#242730] flex items-center justify-center text-[9px] text-[#c5c9ad]">VC</div>
                            </div>
                          </div>
                        </div>
                        <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mb-1"></div>
                      </div>
                      <span className="text-xs font-mono text-[#8e937a] text-center">04. Detail &amp; Synopsis</span>
                    </div>
                  )}

                  {/* Screen 5: VIP Subscription */}
                  {(flowFilter === 'all' || flowFilter === 'vip') && (
                    <div className="w-[260px] flex flex-col gap-2 group">
                      <div className="w-full h-[520px] rounded-[38px] bg-[#08090B] border-4 border-[#242730] p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                        <div className="w-24 h-4 bg-[#121316] rounded-full mx-auto mt-1"></div>
                        <div className="p-3 flex flex-col gap-3 my-auto">
                          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#c6f225]/20 to-[#1a1b20] border border-[#c6f225]/30 flex flex-col gap-1">
                            <span className="text-[9px] uppercase tracking-wider text-[#c6f225] font-mono font-bold">
                              Upgrade VIP
                            </span>
                            <span className="font-display-hero text-base font-bold text-white">Premium Pass</span>
                            <span className="text-[11px] text-[#c5c9ad]">Ad-free streaming • Spatial Audio</span>
                          </div>
                          <div className="text-[11px] font-semibold text-white mt-1">Payment Method</div>
                          <div className="p-2.5 rounded-xl bg-[#1a1b20] border border-[#c6f225] flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-[16px] text-[#c6f225]">credit_card</span>
                              <span className="text-xs text-white font-mono">•••• 4829</span>
                            </div>
                            <span className="w-3.5 h-3.5 rounded-full bg-[#c6f225] flex items-center justify-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#08090B]"></span>
                            </span>
                          </div>
                          <button
                            onClick={() => alert('Demo prototype: VIP upgrade processed in 2 taps.')}
                            className="w-full py-2.5 rounded-full bg-[#c6f225] text-[#161e00] text-xs font-bold text-center mt-2 cursor-pointer shadow-md"
                          >
                            Confirm &amp; Subscribe ($9.99)
                          </button>
                        </div>
                        <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mb-1"></div>
                      </div>
                      <span className="text-xs font-mono text-[#8e937a] text-center">05. 2-Tap VIP Checkout</span>
                    </div>
                  )}

                  {/* Screen 6: Offline Downloads Manager */}
                  {(flowFilter === 'all' || flowFilter === 'media') && (
                    <div className="w-[260px] flex flex-col gap-2 group">
                      <div className="w-full h-[520px] rounded-[38px] bg-[#08090B] border-4 border-[#242730] p-3 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                        <div className="w-24 h-4 bg-[#121316] rounded-full mx-auto mt-1"></div>
                        <div className="p-3 flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <span className="font-display-hero text-sm font-bold text-white">Downloads</span>
                            <span className="text-[11px] text-[#c6f225] font-mono">Edit</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#1a1b20] border border-[#242730] flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-white font-semibold">Money Heist: S05</span>
                              <span className="text-[10px] text-[#84cc16] font-mono">Ready</span>
                            </div>
                            <div className="w-full h-1 bg-[#08090B] rounded-full overflow-hidden">
                              <div className="w-full h-full bg-[#c6f225]"></div>
                            </div>
                            <span className="text-[10px] text-[#8e937a] font-mono">1.25 GB • 1080p Ultra</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#1a1b20] border border-[#242730] flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-white font-semibold">Arcane: Episode 4</span>
                              <span className="text-[10px] text-[#c6f225] font-mono">64%</span>
                            </div>
                            <div className="w-full h-1 bg-[#08090B] rounded-full overflow-hidden">
                              <div className="w-[64%] h-full bg-[#c6f225]"></div>
                            </div>
                            <span className="text-[10px] text-[#8e937a] font-mono">Downloading... 45 MB/s</span>
                          </div>
                        </div>
                        <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mb-1"></div>
                      </div>
                      <span className="text-xs font-mono text-[#8e937a] text-center">06. Media Cache Engine</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== CASE STUDY 02: EPIC GAMES STORE ===================== */}
      {(activeUiFilter === 'all' || activeUiFilter === 'gaming') && (
        <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-[#08090B] border-t border-[#242730]">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            {/* Header & Concept Brief */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#c6f225] font-mono font-bold">
                    Case Study 02 • Desktop Web Experience
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1a1b20] text-[#c5c9ad] text-xs font-mono border border-[#242730]">
                    E-Commerce &amp; Gaming Hub
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="font-display-hero text-3xl md:text-5xl text-white font-black tracking-tight">
                    Epic Games Store
                  </h2>
                  <span className="font-display-hero text-2xl md:text-3xl text-[#c6f225] italic">
                    Website Redesign
                  </span>
                </div>
                <p className="text-sm md:text-base text-[#c5c9ad] max-w-3xl leading-relaxed">
                  A comprehensive overhaul of the PC gaming storefront aimed at dramatically improving game discoverability, uncluttering complex purchase funnels, and honoring AAA game visual assets through cinematic layout architectures.
                </p>
              </div>

              {/* Deliverables Matrix List */}
              <div className="lg:col-span-4 bg-[#1a1b20] border border-[#242730] p-6 rounded-2xl shadow-xl flex flex-col gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#c6f225]">
                  Core Deliverables
                </span>
                <ul className="space-y-2 text-xs text-[#c5c9ad]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#c6f225]">check_circle</span>
                    <span>Information Architecture &amp; Sticky Sidebar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#c6f225]">check_circle</span>
                    <span>Hero Billboard Component System</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#c6f225]">check_circle</span>
                    <span>Multi-platform Wishlist &amp; Fast Checkout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#c6f225]">check_circle</span>
                    <span>Responsive 4K &amp; Ultrawide Layout Engine</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* BEFORE VS AFTER INTERACTIVE COMPARISON */}
            <div className="w-full flex flex-col gap-4">
              {/* Toggle Control Bar */}
              <div className="flex items-center justify-between flex-wrap gap-4 p-4 bg-[#1a1b20] border border-[#242730] rounded-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-display-hero text-base font-bold text-white">Interactive Comparison:</span>
                  <span className="text-xs text-[#8e937a] hidden md:inline">
                    Inspect structural evolution from legacy layout to revised canvas
                  </span>
                </div>
                <div className="inline-flex p-1 bg-[#08090B] border border-[#242730] rounded-full">
                  <button
                    onClick={() => setComparisonMode('after')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      comparisonMode === 'after'
                        ? 'bg-[#c6f225] text-[#161e00] font-bold shadow-md'
                        : 'text-[#c5c9ad] hover:text-white'
                    }`}
                  >
                    Redesign (After)
                  </button>
                  <button
                    onClick={() => setComparisonMode('before')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      comparisonMode === 'before'
                        ? 'bg-[#c6f225] text-[#161e00] font-bold shadow-md'
                        : 'text-[#c5c9ad] hover:text-white'
                    }`}
                  >
                    Legacy (Before)
                  </button>
                  <button
                    onClick={() => setComparisonMode('split')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      comparisonMode === 'split'
                        ? 'bg-[#c6f225] text-[#161e00] font-bold shadow-md'
                        : 'text-[#c5c9ad] hover:text-white'
                    }`}
                  >
                    Split View
                  </button>
                </div>
              </div>

              {/* Comparative Showcase Canvas */}
              <div className="w-full bg-[#08090B] p-4 md:p-8 rounded-2xl shadow-2xl border border-[#242730] overflow-hidden">
                {/* AFTER VIEW */}
                {comparisonMode === 'after' && (
                  <div className="w-full flex flex-col gap-0 border border-[#242730] rounded-2xl overflow-hidden shadow-2xl">
                    {/* Browser Chrome Header Bar */}
                    <div className="w-full h-10 bg-[#1a1b20] border-b border-[#242730] px-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                      </div>
                      <div className="w-1/2 max-w-md h-6 bg-[#08090B] rounded-md px-3 flex items-center gap-2 text-[#8e937a] text-[11px] font-mono border border-[#242730]">
                        <span className="material-symbols-outlined text-[13px]">lock</span>
                        <span>epicgames.com/store/redesign</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#8e937a]">
                        <span className="material-symbols-outlined text-[16px]">share</span>
                        <span className="material-symbols-outlined text-[16px]">refresh</span>
                      </div>
                    </div>

                    {/* Storefront Layout */}
                    <div className="w-full bg-[#121316] grid grid-cols-12 min-h-[580px]">
                      {/* Left Sidebar */}
                      <div className="col-span-12 md:col-span-3 lg:col-span-2 bg-[#08090B] p-4 flex flex-col justify-between border-r border-[#242730]">
                        <div className="flex flex-col gap-6">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#c6f225] text-2xl">sports_esports</span>
                            <span className="font-display-hero text-xl font-black text-white">EPIC</span>
                          </div>
                          <nav className="flex flex-col gap-1">
                            <button className="px-3 py-2 rounded-lg bg-[#1a1b20] text-white text-xs font-semibold flex items-center gap-2 text-left">
                              <span className="material-symbols-outlined text-[18px] text-[#c6f225]">storefront</span>
                              <span>Store</span>
                            </button>
                            <button className="px-3 py-2 rounded-lg text-[#8e937a] hover:bg-[#1a1b20] text-xs flex items-center gap-2 text-left">
                              <span className="material-symbols-outlined text-[18px]">group</span>
                              <span>Community</span>
                            </button>
                            <button className="px-3 py-2 rounded-lg text-[#8e937a] hover:bg-[#1a1b20] text-xs flex items-center gap-2 text-left">
                              <span className="material-symbols-outlined text-[18px]">tune</span>
                              <span>Accessories</span>
                            </button>
                            <button className="px-3 py-2 rounded-lg text-[#8e937a] hover:bg-[#1a1b20] text-xs flex items-center gap-2 text-left">
                              <span className="material-symbols-outlined text-[18px]">loyalty</span>
                              <span>Game Pass</span>
                            </button>
                            <button className="px-3 py-2 rounded-lg text-[#8e937a] hover:bg-[#1a1b20] text-xs flex items-center gap-2 text-left">
                              <span className="material-symbols-outlined text-[18px]">newspaper</span>
                              <span>News &amp; Blogs</span>
                            </button>
                          </nav>
                        </div>

                        <div className="flex flex-col gap-2 pt-4 border-t border-[#242730]">
                          <button
                            onClick={() => alert('Epic Games Client download triggered (Redesigned installer).')}
                            className="w-full py-2 rounded-lg bg-[#c6f225] text-[#161e00] text-xs font-bold uppercase tracking-wider"
                          >
                            Download Client
                          </button>
                          <span className="text-[10px] font-mono text-[#8e937a] text-center">Version 14.8.2 Live</span>
                        </div>
                      </div>

                      {/* Main Dynamic Storefront */}
                      <div className="col-span-12 md:col-span-9 lg:col-span-10 p-6 flex flex-col gap-6 overflow-y-auto">
                        {/* Search & Profile Bar */}
                        <div className="w-full flex items-center justify-between gap-4">
                          <div className="w-full max-w-lg bg-[#1a1b20] border border-[#242730] rounded-full px-4 py-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#8e937a] text-[18px]">search</span>
                            <input
                              type="text"
                              placeholder="Search 2,400+ titles, publishers, tags..."
                              className="bg-transparent text-white text-xs outline-none w-full"
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#1a1b20] border border-[#242730] flex items-center justify-center text-[#c5c9ad]">
                              <span className="material-symbols-outlined text-[16px]">notifications</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-[#1a1b20] border border-[#242730] flex items-center justify-center text-[#c5c9ad]">
                              <span className="material-symbols-outlined text-[16px]">favorite</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#1a1b20] border border-[#242730] px-3 py-1 rounded-full">
                              <div className="w-6 h-6 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-[10px] flex items-center justify-center">
                                JU
                              </div>
                              <span className="text-xs text-white font-medium">Jimson</span>
                            </div>
                          </div>
                        </div>

                        {/* Epic Hero Billboard (Black Myth: Wukong) */}
                        <div className="w-full rounded-2xl bg-[#1a1b20] border border-[#242730] relative overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                          <div className="lg:w-7/12 p-6 md:p-8 flex flex-col justify-between gap-6 z-10 bg-gradient-to-r from-[#08090B] via-[#08090B]/90 to-transparent">
                            <div className="flex flex-col gap-2">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c6f225]/20 text-[#c6f225] text-xs font-mono font-bold w-fit">
                                <span>★ Spotlight AAA Title</span>
                              </div>
                              <h3 className="font-display-hero text-3xl md:text-5xl text-white font-black uppercase tracking-tight">
                                Black Myth: Wukong
                              </h3>
                              <p className="text-xs md:text-sm text-[#c5c9ad] max-w-md leading-relaxed">
                                Step into ancient Chinese mythology as the Destined One. Master staff forms, supernatural spells, and unravel hidden truths in hyper-realistic Unreal Engine 5 visual glory.
                              </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                              <button
                                onClick={() => {
                                  setPurchased(true);
                                  setTimeout(() => setPurchased(false), 3000);
                                }}
                                className="px-6 py-2.5 rounded-full bg-[#c6f225] text-[#161e00] text-xs font-bold hover:shadow-[0_0_24px_rgba(198,242,37,0.4)] transition-all flex items-center gap-2 cursor-pointer"
                              >
                                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                <span>{purchased ? '✓ Purchased in 1 Click' : 'Buy Now • $59.99'}</span>
                              </button>
                              <button
                                onClick={() => setWishlistAdded(!wishlistAdded)}
                                className="px-5 py-2.5 rounded-full bg-[#1a1b20] text-white text-xs hover:bg-[#292a2e] transition-all flex items-center gap-2 cursor-pointer border border-[#242730]"
                              >
                                <span className="material-symbols-outlined text-[18px]">
                                  {wishlistAdded ? 'check' : 'bookmark_add'}
                                </span>
                                <span>{wishlistAdded ? 'In Wishlist' : 'Add to Wishlist'}</span>
                              </button>
                            </div>
                          </div>

                          {/* Right Visual Showcase Inset */}
                          <div className="lg:w-5/12 bg-[#08090B] relative flex items-center justify-center p-4">
                            <div className="w-full h-full min-h-[220px] rounded-xl bg-[#121316] border border-[#242730] relative flex flex-col justify-end p-4 shadow-inner">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[64px] text-[#c6f225]/40 animate-pulse">
                                  smart_display
                                </span>
                              </div>
                              <div className="flex items-center justify-between z-10 bg-[#1a1b20]/90 backdrop-blur px-3 py-1.5 rounded-lg text-white text-xs font-mono border border-[#242730]">
                                <span>4K Ultra • Ray Tracing Ready</span>
                                <span className="text-[#c6f225] font-bold">Play 60fps Demo</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Top New Releases Strip */}
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <span className="font-display-hero text-sm font-bold text-white">Top New Releases • Verified PC</span>
                            <span className="text-xs text-[#c6f225] font-mono">Explore All 140+</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="p-3 bg-[#1a1b20] border border-[#242730] rounded-xl flex items-center gap-3">
                              <div className="w-12 h-14 rounded-lg bg-[#292a2e] flex items-center justify-center font-bold text-xs text-white">
                                D2
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-white">Destiny 2: Final Shape</span>
                                <span className="text-[10px] text-[#8e937a]">Base Game • Free to Play</span>
                                <span className="text-[10px] text-[#c6f225] font-mono mt-0.5">Available Now</span>
                              </div>
                            </div>
                            <div className="p-3 bg-[#1a1b20] border border-[#242730] rounded-xl flex items-center gap-3">
                              <div className="w-12 h-14 rounded-lg bg-[#292a2e] flex items-center justify-center font-bold text-xs text-white">
                                FP2
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-white">Frostpunk 2</span>
                                <span className="text-[10px] text-[#8e937a]">Strategy • 11 bit studios</span>
                                <span className="text-[10px] text-[#c6f225] font-mono mt-0.5">$44.99 • Pre-order</span>
                              </div>
                            </div>
                            <div className="p-3 bg-[#1a1b20] border border-[#242730] rounded-xl flex items-center gap-3">
                              <div className="w-12 h-14 rounded-lg bg-[#292a2e] flex items-center justify-center font-bold text-xs text-white">
                                SW
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold text-white">Star Wars Outlaws</span>
                                <span className="text-[10px] text-[#8e937a]">Open World • Ubisoft</span>
                                <span className="text-[10px] text-[#c6f225] font-mono mt-0.5">$69.99 • Gold Edition</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* BEFORE VIEW */}
                {comparisonMode === 'before' && (
                  <div className="w-full flex flex-col gap-0 border border-[#242730] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-10 bg-[#1a1b20] border-b border-[#242730] px-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-white/20"></span>
                        <span className="w-3 h-3 rounded-full bg-white/20"></span>
                        <span className="w-3 h-3 rounded-full bg-white/20"></span>
                      </div>
                      <span className="text-[#8e937a] text-[11px] font-mono">archive.org/epicgames-legacy-2020</span>
                      <span className="text-[#ff5f56] text-xs font-mono font-bold">Legacy Blueprint</span>
                    </div>
                    <div className="w-full bg-[#1b1c20] p-8 min-h-[500px] flex flex-col gap-6">
                      <div className="p-4 bg-[#242730] rounded-xl text-[#c5c9ad] text-xs leading-relaxed border border-white/5">
                        <strong>Legacy audit findings:</strong> Buried search inputs, cluttered horizontal menu tabs, compressed game covers, lack of fluid responsiveness, and low-contrast dark UI causing eye strain during lengthy checkout sessions.
                      </div>
                      <div className="w-full h-72 bg-[#2d3039] rounded-xl p-6 flex flex-col justify-end border border-white/5">
                        <div className="text-xs text-[#8e937a] font-mono">Legacy Hero Carousel [Flat Aspect Ratio]</div>
                        <div className="font-display-hero text-2xl font-bold text-white mt-1">The Outer Worlds</div>
                        <div className="w-36 py-2 bg-[#0057FF] text-white text-center rounded mt-3 text-xs font-semibold">
                          Out Now →
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SPLIT VIEW */}
                {comparisonMode === 'split' && (
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#1a1b20] p-5 rounded-xl border border-[#242730] flex flex-col gap-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#242730]">
                        <span className="text-xs font-mono font-bold text-[#ff5f56] uppercase">Before • Legacy</span>
                        <span className="text-xs font-mono text-[#8e937a]">Fragmented IA</span>
                      </div>
                      <div className="h-64 bg-[#121316] rounded-lg p-4 flex flex-col justify-between border border-[#242730]">
                        <span className="text-xs text-[#8e937a] font-mono leading-relaxed">
                          Horizontal nested header tabs, unorganized release filters, generic buy CTA without bundle previews.
                        </span>
                        <div className="p-3 bg-[#1a1b20] text-white text-xs rounded border border-[#242730]">
                          Low visual hierarchy &amp; slow page speeds.
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#1a1b20] p-5 rounded-xl border border-[#c6f225]/40 flex flex-col gap-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#242730]">
                        <span className="text-xs font-mono font-bold text-[#c6f225] uppercase">After • Jimson UX</span>
                        <span className="text-xs font-mono text-[#84cc16] font-bold">+28% Add-to-Cart</span>
                      </div>
                      <div className="h-64 bg-[#08090B] rounded-lg p-4 flex flex-col justify-between border border-[#242730]">
                        <span className="text-xs text-[#c6f225] font-mono leading-relaxed">
                          Unified sticky command sidebar, cinematic AAA billboard hero, instant payment drawer with 1-click checkouts.
                        </span>
                        <div className="p-3 bg-[#c6f225]/20 text-[#c6f225] text-xs rounded font-bold border border-[#c6f225]/30">
                          Engineered with atomic tokens &amp; accessible contrast.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== DESIGN SYSTEM & FIGMA SPEC SHEET ===================== */}
      {(activeUiFilter === 'all' || activeUiFilter === 'systems') && (
        <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-[#121316] border-t border-[#242730]">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-[#c6f225] font-mono font-bold">
                  Behind The Wireframes
                </span>
                <h2 className="font-display-hero text-3xl md:text-5xl font-black text-white tracking-tight">
                  Kinetic Noir UI System
                </h2>
                <p className="text-sm md:text-base text-[#c5c9ad] max-w-xl">
                  A modular design kit architected for high-performance interactive streaming and digital commerce applications.
                </p>
              </div>

              <button
                onClick={() => {
                  setFigmaAccessRequested(true);
                  setTimeout(() => setFigmaAccessRequested(false), 3000);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-xs uppercase tracking-wider hover:bg-[#bbe402] transition-all cursor-pointer shadow-md"
              >
                <span>{figmaAccessRequested ? '✓ Library Link Dispatched' : 'Request Figma Library Access'}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </button>
            </div>

            {/* Spec Sheet Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Spec Card 1: Colors & Tokens */}
              <div className="p-6 rounded-2xl bg-[#1a1b20] border border-[#242730] flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#c6f225] font-bold">Color Variables</span>
                  <span className="material-symbols-outlined text-[#8e937a] text-[18px]">palette</span>
                </div>
                <div className="flex gap-2">
                  <div className="h-10 flex-1 rounded bg-[#08090B] flex items-end p-1 text-[9px] text-white font-mono border border-[#242730]">
                    #08090B
                  </div>
                  <div className="h-10 flex-1 rounded bg-[#1A1C22] flex items-end p-1 text-[9px] text-white font-mono border border-[#242730]">
                    #1A1C22
                  </div>
                  <div className="h-10 flex-1 rounded bg-[#C6F225] flex items-end p-1 text-[9px] text-black font-mono font-bold">
                    #C6F225
                  </div>
                </div>
                <p className="text-xs text-[#8e937a] leading-relaxed">
                  Deep carbon noir foundations accented by 100% luminous neon lime triggers.
                </p>
              </div>

              {/* Spec Card 2: Typography Rhythm */}
              <div className="p-6 rounded-2xl bg-[#1a1b20] border border-[#242730] flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#c6f225] font-bold">Type Pairing</span>
                  <span className="material-symbols-outlined text-[#8e937a] text-[18px]">text_fields</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display-hero text-xl font-bold text-white">Bricolage</span>
                  <span className="text-xs font-mono text-[#c5c9ad]">Space Grotesk Regular</span>
                </div>
                <p className="text-xs text-[#8e937a] leading-relaxed">
                  Editorial impact on title scales balanced by mathematical legibility for telemetry.
                </p>
              </div>

              {/* Spec Card 3: Corner Radii & Geometry */}
              <div className="p-6 rounded-2xl bg-[#1a1b20] border border-[#242730] flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#c6f225] font-bold">Geometry</span>
                  <span className="material-symbols-outlined text-[#8e937a] text-[18px]">rounded_corner</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#292a2e] border border-white/20"></div>
                  <div className="w-8 h-8 rounded-2xl bg-[#292a2e] border border-white/20"></div>
                  <div className="w-8 h-8 rounded-lg bg-[#292a2e] border border-white/20"></div>
                  <div className="w-8 h-8 rounded bg-[#292a2e] border border-white/20"></div>
                </div>
                <p className="text-xs text-[#8e937a] leading-relaxed">
                  Continuous squircles (9999px pills and 24px frames) echoing modern smartphone hardware.
                </p>
              </div>

              {/* Spec Card 4: Accessibility Validation */}
              <div className="p-6 rounded-2xl bg-[#1a1b20] border border-[#242730] flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#c6f225] font-bold">Compliance</span>
                  <span className="material-symbols-outlined text-[#84cc16] text-[18px]">verified_user</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display-hero text-3xl font-black text-white">AAA</span>
                  <span className="text-xs font-mono text-[#c6f225] font-bold">WCAG 2.2 Ready</span>
                </div>
                <p className="text-xs text-[#8e937a] leading-relaxed">
                  Tested contrast ratios exceeding 11.4:1 on all interactive call-to-actions.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== CLIENT COLLABORATION CALLOUT ===================== */}
      <section className="w-full px-4 md:px-8 lg:px-12 py-20 bg-[#08090B] border-t border-[#242730]">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#1a1b20] border border-[#242730] p-8 md:p-14 text-center flex flex-col items-center gap-4 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#c6f225]/10 blur-[90px] rounded-full pointer-events-none"></div>
          <div className="w-14 h-14 rounded-full bg-[#c6f225]/20 flex items-center justify-center text-[#c6f225]">
            <span className="material-symbols-outlined text-[32px]">devices</span>
          </div>
          <h3 className="font-display-hero text-3xl md:text-5xl text-white font-black tracking-tight">
            Ready to redesign your core digital product?
          </h3>
          <p className="text-base text-[#c5c9ad] max-w-xl leading-relaxed">
            Whether you are engineering a streaming application from zero or scaling an enterprise web platform, I bring visual precision and verified usability to the table.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <button
              onClick={onOpenCollaborate}
              className="px-8 py-3.5 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-xs uppercase tracking-wider hover:bg-[#bbe402] transition-all cursor-pointer shadow-md"
            >
              Start Project Consultation →
            </button>
            <button
              onClick={() => onSelectTab('work')}
              className="px-8 py-3.5 rounded-full bg-[#121316] text-white hover:bg-[#292a2e] font-bold text-xs uppercase tracking-wider transition-all border border-[#242730] cursor-pointer"
            >
              Explore Other Media Disciplines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
