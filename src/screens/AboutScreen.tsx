import React, { useState } from 'react';
import { NavigationTab } from '../types/portfolio';

interface AboutScreenProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenCollaborate: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onSelectTab,
  onOpenCollaborate,
}) => {
  const [downloadMediaKit, setDownloadMediaKit] = useState(false);

  const handleMediaKit = () => {
    setDownloadMediaKit(true);
    setTimeout(() => setDownloadMediaKit(false), 3000);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Stage */}
      <section className="relative w-full px-4 md:px-8 lg:px-12 py-16 bg-[#08090B] flex flex-col items-center text-center overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c6f225]/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1b20] border border-[#242730] text-[#c5c9ad] text-xs font-mono mb-6 tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#c6f225] animate-pulse"></span>
          <span>ARTIST DOSSIER // BIOGRAPHY &amp; ETHOS</span>
        </div>

        {/* Bounding Box Container */}
        <div className="relative max-w-4xl w-full mx-auto my-4 px-6 py-10 md:px-14 md:py-14 bg-[#121316]/70 rounded-2xl shadow-2xl backdrop-blur-sm group border border-dashed border-white/35">
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#F4F4F0] border border-[#08090B] shadow-sm"></span>

          <h1 className="font-display-hero text-5xl md:text-8xl font-black tracking-tight text-[#c6f225] leading-none">
            About Jimson
          </h1>

          <p className="mt-6 text-[#e3e2e8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Multimedia artist and brand designer driven by the pursuit of clarity through kinetic form. Exploring new creative frontiers that dismantle conventional borders.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[#c5c9ad] text-xs font-mono">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#c6f225] text-[18px]">verified</span>
              07+ Years Directing
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#c6f225] text-[18px]">style</span>
              60+ Brand Systems
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#c6f225] text-[18px]">star</span>
              100% Satisfaction Rate
            </span>
          </div>
        </div>
      </section>

      {/* Main Biography & Original Graphite Sketch Inset */}
      <section className="w-full max-w-7xl px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Sketch Side */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#F4F4F0] rounded-2xl p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] border border-white/20 overflow-hidden">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-[#F4F4F0]">
                <svg
                  className="w-full h-full text-[#121316]"
                  fill="none"
                  viewBox="0 0 400 500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="#F4F4F0" height="500" width="400" />
                  <circle cx="200" cy="180" opacity="0.4" r="75" stroke="#121316" strokeDasharray="8 4" strokeWidth="2.5" />
                  <path
                    d="M140 180 C135 250, 160 300, 200 300 C240 300, 265 250, 260 180 C255 110, 145 110, 140 180 Z"
                    fill="#121316"
                    fillOpacity="0.04"
                    stroke="#121316"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M130 160 C130 90, 190 70, 250 85 C275 95, 275 140, 270 160 C250 120, 160 120, 130 160 Z"
                    fill="#121316"
                    opacity="0.85"
                  />
                  <path d="M145 110 L260 110 M140 125 L265 125 M150 140 L260 135" opacity="0.6" stroke="#121316" strokeWidth="2" />
                  <path d="M135 180 C120 180, 120 230, 140 235" stroke="#121316" strokeWidth="2" />
                  <path d="M265 180 C280 180, 280 230, 260 235" stroke="#121316" strokeWidth="2" />
                  <path d="M160 175 C170 170, 180 170, 185 175" stroke="#121316" strokeLinecap="round" strokeWidth="2.5" />
                  <path d="M215 175 C220 170, 230 170, 240 175" stroke="#121316" strokeLinecap="round" strokeWidth="2.5" />
                  <circle cx="173" cy="188" fill="#121316" r="7" />
                  <circle cx="227" cy="188" fill="#121316" r="7" />
                  <circle cx="175" cy="186" fill="#FFFFFF" r="2" />
                  <circle cx="229" cy="186" fill="#FFFFFF" r="2" />
                  <path d="M198 185 L196 220 L206 222" stroke="#121316" strokeLinecap="round" strokeWidth="2" />
                  <path d="M185 245 C195 242, 205 242, 215 245" stroke="#121316" strokeLinecap="round" strokeWidth="2.5" />
                  <path d="M190 252 C197 256, 203 256, 210 252" stroke="#121316" strokeLinecap="round" strokeWidth="1.8" />
                  <path
                    d="M170 300 L160 370 L90 440 L310 440 L240 370 L230 300"
                    fill="#121316"
                    fillOpacity="0.08"
                    stroke="#121316"
                    strokeWidth="2.5"
                  />
                  <line opacity="0.3" stroke="#121316" strokeDasharray="4 4" strokeWidth="1.5" x1="80" x2="320" y1="420" y2="420" />
                  <line opacity="0.3" stroke="#121316" strokeDasharray="4 4" strokeWidth="1.5" x1="90" x2="310" y1="435" y2="435" />
                </svg>

                <div className="absolute top-6 right-6 flex flex-col items-center pointer-events-none">
                  <span className="font-display-hero text-base text-[#121316] italic -rotate-6 font-bold tracking-wide">
                    About Jimson ✍
                  </span>
                  <svg className="w-8 h-8 text-[#121316] -rotate-12 mt-1" fill="none" viewBox="0 0 32 32">
                    <path
                      d="M8 4 C 18 10, 20 20, 16 26 M 16 26 L 12 21 M 16 26 L 22 23"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#08090B] text-white font-mono text-[10px] uppercase px-2.5 py-1 rounded shadow-md">
                    Fig 01 • Original Graphite
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Manifesto Side */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-[#c6f225] text-xs font-mono uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">psychology</span>
              <span>Design Philosophy &amp; Ethos</span>
            </div>
            <h2 className="font-display-hero text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Disciplined Craft. <br />
              <span className="text-[#c6f225]">Uncompromising Energy.</span>
            </h2>
            <p className="text-base text-[#e3e2e8] leading-relaxed">
              I am Jimson Usayan, a multimedia artist and brand designer driven by the pursuit of clarity through kinetic form. I explore new creative frontiers that dismantle conventional borders, delivering memorable visual stories for ambitious visionaries.
            </p>
            <p className="text-sm md:text-base text-[#c5c9ad] leading-relaxed">
              Whether designing an ultra-minimal vector mark or architecting an entire corporate visual language, I balance rigorous mathematical balance with unapologetic visual audacity.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenCollaborate}
                className="px-6 py-3 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-xs uppercase tracking-wider hover:bg-[#bbe402] transition-all cursor-pointer shadow-md"
              >
                Let's Collaborate →
              </button>
              <button
                onClick={handleMediaKit}
                className="px-6 py-3 rounded-full bg-[#1a1b20] text-white hover:bg-[#292a2e] font-bold text-xs uppercase tracking-wider transition-all border border-[#242730] cursor-pointer"
              >
                {downloadMediaKit ? '✓ Media Kit Downloaded' : 'Download Media Kit (PDF)'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Career Milestones Timeline */}
      <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-[#121316] border-t border-[#242730]">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="text-center">
            <span className="text-xs uppercase font-mono font-bold text-[#c6f225]">Trajectory</span>
            <h3 className="font-display-hero text-2xl md:text-4xl font-bold text-white mt-1">
              Key Career Milestones
            </h3>
          </div>

          <div className="space-y-6 pt-4">
            {[
              {
                year: '2024–2025',
                role: 'Independent Creative Director & Brand Architect',
                desc: 'Leading holistic visual systems for Ourvita, Poppy Streaming, and global direct-to-consumer innovators.',
              },
              {
                year: '2022–2023',
                role: 'Principal Digital Product Designer',
                desc: 'Spearheaded desktop storefront audits, high-frequency checkout ergonomics, and design system governance.',
              },
              {
                year: '2020–2022',
                role: 'Senior Brand Identity Specialist',
                desc: 'Delivered 30+ custom geometric vector logofolios and architectural signage systems across North America & Europe.',
              },
              {
                year: '2018–2020',
                role: 'Multimedia Motion & Print Designer',
                desc: 'Engineered physical packaging dielines, metallic foil finishes, and promotional kinetic motion graphics.',
              },
            ].map((milestone, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1a1b20] border border-[#242730] flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-[#c6f225]">{milestone.year}</span>
                  <span className="font-display-hero text-lg font-bold text-white mt-0.5">
                    {milestone.role}
                  </span>
                  <p className="text-xs text-[#c5c9ad] mt-1">{milestone.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#121316] border border-[#242730] flex items-center justify-center text-[#c6f225] shrink-0">
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
