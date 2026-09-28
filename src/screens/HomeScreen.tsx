import React, { useState } from 'react';
import { NavigationTab } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';

interface HomeScreenProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenCollaborate: () => void;
  onOpenCommand: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectTab,
  onOpenCollaborate,
  onOpenCommand,
  onOpenLightbox,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'branding' | 'logo' | 'uiux' | 'packaging'>('all');

  // Cursor moving animation state for hero banner
  const [cursorPos, setCursorPos] = useState<{
    x: number;
    y: number;
    relX: number;
    relY: number;
    isHovered: boolean;
  }>({
    x: 0,
    y: 0,
    relX: 0,
    relY: 0,
    isHovered: false,
  });

  // Background Image State (Custom uploaded photo or URL)
  const [bgImage, setBgImage] = useState<string>(() => {
    return localStorage.getItem('jimson_hero_bg') || '/Untitled-1.jpg';
  });
  const [bgPosition, setBgPosition] = useState<string>(() => {
    return localStorage.getItem('jimson_hero_bg_pos') || 'right center';
  });
  const [isBgControlOpen, setIsBgControlOpen] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [uploadFeedback, setUploadFeedback] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setUploadFeedback('Please upload an image file (JPG, PNG, WEBP, SVG)');
      setTimeout(() => setUploadFeedback(null), 3000);
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setBgImage(result);
        setUploadFeedback(`Photo applied: ${file.name}`);
        setTimeout(() => setUploadFeedback(null), 3000);
        try {
          localStorage.setItem('jimson_hero_bg', result);
        } catch {
          // localStorage quota catch
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) return;
    setBgImage(urlInput.trim());
    try {
      localStorage.setItem('jimson_hero_bg', urlInput.trim());
    } catch {}
    setUploadFeedback('Custom image URL applied!');
    setUrlInput('');
    setIsBgControlOpen(false);
    setTimeout(() => setUploadFeedback(null), 3000);
  };

  const handleResetBg = () => {
    setBgImage('/Untitled-1.jpg');
    setBgPosition('right center');
    try {
      localStorage.removeItem('jimson_hero_bg');
      localStorage.removeItem('jimson_hero_bg_pos');
    } catch {}
    setUploadFeedback('Reset to default portrait');
    setTimeout(() => setUploadFeedback(null), 3000);
  };

  const bannerRef = React.useRef<HTMLDivElement>(null);

  const handleBannerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const relX = Math.max(-1, Math.min(1, ((x / rect.width) - 0.5) * 2));
    const relY = Math.max(-1, Math.min(1, ((y / rect.height) - 0.5) * 2));
    setCursorPos({
      x,
      y,
      relX,
      relY,
      isHovered: true,
    });
  };

  const handleBannerMouseLeave = () => {
    setCursorPos((prev) => ({
      ...prev,
      relX: 0,
      relY: 0,
      isHovered: false,
    }));
  };

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full flex flex-col items-center">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full px-4 md:px-8 lg:px-12 pt-8 pb-20 overflow-hidden flex flex-col items-center justify-center">
        {/* Ambient Kinetic Glow Spotlights */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#c6f225]/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-[#bbe402]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        {/* Active Vector Canvas Bounding Frame */}
        <div className="relative w-full max-w-6xl mx-auto my-6 group">
          {/* Vector Transform Handles (8 standard nodes) */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-[#08090B] shadow-sm z-20"></div>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-[#08090B] shadow-sm z-20"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-[#08090B] shadow-sm z-20"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 bg-white border border-[#08090B] shadow-sm z-20"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-white border border-[#08090B] shadow-sm z-20"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-[#08090B] shadow-sm z-20"></div>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-[#08090B] shadow-sm z-20"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-[#08090B] shadow-sm z-20"></div>

          {/* Transform Cursor Icon Pinning Bottom Right */}
          <div className="absolute -bottom-7 -right-7 z-30 flex items-center justify-center pointer-events-none text-white group-hover:text-[#c6f225] transition-colors animate-pulse">
            <span className="material-symbols-outlined text-[26px]">open_in_full</span>
          </div>

          {/* Dashed Vector Frame Interior */}
          <div
            ref={bannerRef}
            onMouseMove={handleBannerMouseMove}
            onMouseLeave={handleBannerMouseLeave}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`relative w-full border border-dashed rounded-xl bg-black bg-no-repeat bg-cover backdrop-blur-md px-6 py-8 md:px-10 md:py-12 shadow-2xl overflow-hidden select-none transition-all duration-200 ${
              isDraggingOver
                ? 'border-[#c6f225] ring-4 ring-[#c6f225]/30'
                : 'border-white/35 group-hover:border-[#c6f225]/60 cursor-crosshair'
            }`}
            style={{
              backgroundImage: `url("${bgImage}")`,
              backgroundPosition: bgPosition,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundColor: '#000000',
              transform: cursorPos.isHovered
                ? `perspective(1200px) rotateX(${(-cursorPos.relY * 3.5).toFixed(2)}deg) rotateY(${(cursorPos.relX * 3.5).toFixed(2)}deg) translateZ(0)`
                : 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)',
              transition: cursorPos.isHovered
                ? 'transform 0.08s ease-out, box-shadow 0.2s ease, border-color 0.2s ease'
                : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease, border-color 0.6s ease',
              boxShadow: cursorPos.isHovered
                ? `0 35px 70px -20px rgba(0, 0, 0, 0.9), 0 0 50px -10px rgba(198, 242, 37, 0.22)`
                : undefined,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Hidden File Input for Image Upload */}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileUpload(e.target.files[0]);
                }
              }}
            />

            {/* Drag & Drop Visual Overlay */}
            {isDraggingOver && (
              <div className="absolute inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#c6f225] animate-fade-in pointer-events-none">
                <span className="material-symbols-outlined text-6xl text-[#c6f225] mb-3 animate-bounce">
                  add_photo_alternate
                </span>
                <p className="text-xl font-bold text-white mb-1">
                  Drop image to replace background
                </p>
                <p className="text-sm font-mono text-[#c6f225]">
                  Supports JPG, PNG, WEBP, SVG • Instant client preview
                </p>
              </div>
            )}

            {/* Floating Top-Right "Replace Background" Action Bar */}
            <div className="absolute top-4 right-4 z-40 flex items-center gap-2">
              {uploadFeedback && (
                <div className="px-3 py-1 rounded-full bg-[#13151b]/90 border border-[#c6f225]/60 text-xs font-mono text-[#c6f225] shadow-lg animate-fade-in">
                  {uploadFeedback}
                </div>
              )}

              <button
                type="button"
                onClick={() => setIsBgControlOpen(!isBgControlOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1015]/90 hover:bg-[#1a1d26] border border-white/20 hover:border-[#c6f225]/70 text-white hover:text-[#c6f225] text-xs font-mono font-medium shadow-xl transition-all duration-150 backdrop-blur-sm"
                title="Replace background photo (upload file or paste URL)"
              >
                <span className="material-symbols-outlined text-sm">photo_camera</span>
                <span>Replace Background</span>
                <span className="material-symbols-outlined text-xs">
                  {isBgControlOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>

              {/* Background Control Popover */}
              {isBgControlOpen && (
                <div className="absolute right-0 top-10 w-72 p-3.5 bg-[#0e1015]/98 border border-[#2b2f3a] rounded-xl shadow-2xl backdrop-blur-xl flex flex-col gap-3 text-left animate-fade-in z-50">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Background Photo
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsBgControlOpen(false)}
                      className="text-white/50 hover:text-white text-xs"
                    >
                      ✕
                    </button>
                  </div>

                  {/* 1. Upload Local File */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#c6f225] hover:bg-[#b0d820] text-black font-semibold text-xs transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">upload_file</span>
                    <span>Upload Image from Device</span>
                  </button>
                  <p className="text-[10px] text-white/40 -mt-1 text-center">
                    Select your Untitled-1.jpg or drag &amp; drop onto banner
                  </p>

                  {/* 2. Paste Image URL */}
                  <div className="flex flex-col gap-1 pt-1">
                    <label className="text-[10px] uppercase font-mono text-white/60">
                      Or Paste Image URL:
                    </label>
                    <div className="flex gap-1">
                      <input
                        type="url"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        placeholder="https://.../photo.jpg"
                        className="flex-1 bg-black/60 border border-white/15 focus:border-[#c6f225] rounded px-2 py-1 text-xs text-white placeholder-white/30 outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleApplyUrl}
                        className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-mono"
                      >
                        Set
                      </button>
                    </div>
                  </div>

                  {/* 3. Position Preset */}
                  <div className="flex flex-col gap-1 pt-1">
                    <label className="text-[10px] uppercase font-mono text-white/60">
                      Alignment:
                    </label>
                    <div className="grid grid-cols-3 gap-1">
                      {[
                        { label: 'Right', val: 'right center' },
                        { label: 'Center', val: 'center center' },
                        { label: 'Left', val: 'left center' },
                      ].map((pos) => (
                        <button
                          key={pos.val}
                          type="button"
                          onClick={() => {
                            setBgPosition(pos.val);
                            localStorage.setItem('jimson_hero_bg_pos', pos.val);
                          }}
                          className={`py-1 text-[11px] font-mono rounded border ${
                            bgPosition === pos.val
                              ? 'bg-[#c6f225]/20 border-[#c6f225] text-[#c6f225]'
                              : 'bg-black/40 border-white/10 text-white/70 hover:border-white/30'
                          }`}
                        >
                          {pos.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4. Reset Button */}
                  <button
                    type="button"
                    onClick={handleResetBg}
                    className="w-full py-1 text-[11px] font-mono text-white/40 hover:text-white/90 border-t border-white/10 pt-2 text-center transition-colors"
                  >
                    Reset to Default Image
                  </button>
                </div>
              )}
            </div>

            {/* White Square Anchor Handles at Perimeter (as shown in image) */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-black/40 z-30 pointer-events-none" />
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-black/40 z-30 pointer-events-none" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-black/40 z-30 pointer-events-none" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 bg-white border border-black/40 z-30 pointer-events-none" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-white border border-black/40 z-30 pointer-events-none" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-black/40 z-30 pointer-events-none" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-black/40 z-30 pointer-events-none" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-black/40 z-30 pointer-events-none" />

            {/* Vector Crosshair Measurement Reticle following cursor */}
            {cursorPos.isHovered && (
              <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                {/* Horizontal Guideline */}
                <div
                  className="absolute left-0 right-0 h-[1px] border-b border-dashed border-[#c6f225]/40"
                  style={{ top: cursorPos.y }}
                >
                  <span className="absolute right-3 -top-5 text-[9px] font-mono text-[#c6f225]/80 bg-[#08090B]/90 px-1.5 py-0.5 rounded border border-[#c6f225]/30">
                    Y: {Math.round(cursorPos.y)}px
                  </span>
                </div>

                {/* Vertical Guideline */}
                <div
                  className="absolute top-0 bottom-0 w-[1px] border-r border-dashed border-[#c6f225]/40"
                  style={{ left: cursorPos.x }}
                >
                  <span className="absolute bottom-3 -left-7 text-[9px] font-mono text-[#c6f225]/80 bg-[#08090B]/90 px-1.5 py-0.5 rounded border border-[#c6f225]/30">
                    X: {Math.round(cursorPos.x)}px
                  </span>
                </div>

                {/* Precision Cursor Reticle Target Ring */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{ left: cursorPos.x, top: cursorPos.y }}
                >
                  <div className="w-8 h-8 rounded-full border border-[#c6f225]/60 animate-spin" style={{ animationDuration: '6s' }}></div>
                  <div className="absolute w-2 h-2 rounded-full bg-[#c6f225] shadow-[0_0_10px_#c6f225]"></div>
                  <div className="absolute -top-7 left-4 text-[10px] font-mono font-bold text-[#161e00] bg-[#c6f225] px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                    X: {Math.round(cursorPos.x)} • Y: {Math.round(cursorPos.y)}
                  </div>
                </div>
              </div>
            )}

            {/* Layout: Left-Aligned Bold Typography & Navigation */}
            <div className="relative z-20 w-full flex flex-col items-start text-left max-w-4xl py-2">
              {/* LEFT SIDE: Pill Badge, Giant Headline (White & Neon Lime), Bio & Navigation */}
              <div className="w-full flex flex-col items-start">
                {/* Live Coordinate & Discipline Pill (exact match to image) */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13151b] border border-[#2b2f38] mb-6 shadow-sm transition-all duration-200"
                  style={{
                    borderColor: cursorPos.isHovered ? 'rgba(198, 242, 37, 0.7)' : undefined,
                    boxShadow: cursorPos.isHovered ? '0 0 16px rgba(198, 242, 37, 0.25)' : undefined,
                    transform: cursorPos.isHovered
                      ? `translate3d(${(cursorPos.relX * 4).toFixed(1)}px, ${(cursorPos.relY * 2.5).toFixed(1)}px, 15px)`
                      : 'none',
                  }}
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${cursorPos.isHovered ? 'bg-[#c6f225] animate-ping' : 'bg-[#c6f225]'}`}></span>
                  <span className="text-xs uppercase tracking-widest text-[#c6f225] font-mono font-bold">
                    MULTIMEDIA ARTIST &amp; BRAND DESIGNER
                  </span>
                  <span className="text-[#646955] text-xs font-mono">•</span>
                  <span className="text-[#8e937a] text-xs font-mono">
                    {cursorPos.isHovered
                      ? `[X: ${Math.round(cursorPos.x)} • Y: ${Math.round(cursorPos.y)}]`
                      : '[W: 1920 • H: 1080 • 100%]'}
                  </span>
                </div>

                {/* Hero Title: JIMSON (Pure White) & USAYAN (Solid Neon Lime #c6f225) */}
                <h1
                  className="font-display-hero text-6xl sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[130px] font-black tracking-tight leading-[0.86] uppercase select-none transition-transform duration-75 ease-out"
                  style={{
                    transform: cursorPos.isHovered
                      ? `translate3d(${(cursorPos.relX * 7).toFixed(1)}px, ${(cursorPos.relY * 4).toFixed(1)}px, 25px)`
                      : 'none',
                  }}
                >
                  <span className="block text-white">JIMSON</span>
                  <span className="block text-[#c6f225] mt-1 sm:mt-2">USAYAN</span>
                </h1>

                {/* Subtitle / Bio (as seen in image) */}
                <p
                  className="text-base sm:text-lg md:text-xl text-[#a4a993] max-w-xl mt-6 font-normal leading-relaxed transition-transform duration-100 ease-out"
                  style={{
                    transform: cursorPos.isHovered
                      ? `translate3d(${(cursorPos.relX * 4).toFixed(1)}px, ${(cursorPos.relY * 2.5).toFixed(1)}px, 15px)`
                      : 'none',
                  }}
                >
                  Crafting high-precision brand systems, visceral interactive interfaces, and multi-dimensional identity narratives that reshape perception.
                </p>

                {/* Discipline Pills */}
                <div className="flex flex-wrap items-center gap-2 mt-5 text-xs font-mono">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#121316] border border-[#242730] text-[#c6f225]">
                    Brand Architecture
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#121316] border border-[#242730] text-[#c5c9ad]">
                    Logofolio &amp; Vector Art
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#121316] border border-[#242730] text-[#c5c9ad]">
                    UI/UX Direction
                  </span>
                </div>

                {/* Dynamic Floating Command/Prompt Bar */}
                <div
                  className="w-full max-w-xl mt-8 transition-transform duration-100 ease-out"
                  style={{
                    transform: cursorPos.isHovered
                      ? `translate3d(${(cursorPos.relX * 3).toFixed(1)}px, ${(cursorPos.relY * 1.5).toFixed(1)}px, 20px)`
                      : 'none',
                  }}
                >
                  <div
                    onClick={onOpenCommand}
                    className="w-full bg-[#1a1b20]/95 border border-[#242730] hover:border-[#c6f225]/70 backdrop-blur-2xl rounded-full p-2 pl-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 cursor-pointer group/prompt transition-all"
                    style={{
                      boxShadow: cursorPos.isHovered
                        ? '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(198, 242, 37, 0.15)'
                        : undefined,
                    }}
                  >
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <span className="material-symbols-outlined text-[#c6f225] text-[20px]">terminal</span>
                      <span className="text-sm text-[#e3e2e8] group-hover/prompt:text-white truncate font-body">
                        Explore curated works (2024–2025)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <span className="hidden sm:inline text-[#8e937a] font-mono text-xs px-2.5 py-1 bg-[#121316] rounded-full border border-[#242730]">
                        ⌘ + K
                      </span>
                      <a
                        href="#selected-work"
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('selected-work')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-xs uppercase tracking-wider hover:bg-[#bbe402] transition-all flex items-center justify-center gap-1.5 shadow-[0_0_20px_-4px_rgba(198,242,37,0.4)]"
                      >
                        <span>View Projects</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Segment Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-5xl">
          {[
            { id: 'all', label: 'All Works (18)' },
            { id: 'branding', label: 'Brand Identity' },
            { id: 'logo', label: 'Logo Folio' },
            { id: 'uiux', label: 'UI/UX Design' },
            { id: 'packaging', label: 'Packaging & Print' },
          ].map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#c6f225] text-[#161e00] shadow-[0_0_16px_rgba(198,242,37,0.3)]'
                    : 'bg-[#1a1b20] text-[#c5c9ad] border border-[#242730] hover:text-white hover:bg-[#1f1f24]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ===================== WORK EXHIBITION / BESPOKE SHOWCASE ===================== */}
      <section className="w-full max-w-7xl px-4 md:px-8 lg:px-12 py-12 flex flex-col gap-16" id="selected-work">
        {/* PROJECT 01: OURVITA BRAND IDENTITY (Asymmetric Split Bento) */}
        {(activeFilter === 'all' || activeFilter === 'branding') && (
          <article className="w-full bg-[#1a1b20] border border-[#242730] rounded-2xl overflow-hidden group transition-all shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Imagery Specimen Side (8 cols) */}
              <div className="lg:col-span-8 relative bg-[#08090B] overflow-hidden flex flex-col">
                <div
                  className="relative aspect-[16/9] w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    onOpenLightbox(
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwWEWFFe0TfYHKv04gyVHMsaMruSj-Wd6myBXU9WG0dDm9JDWdzZiOXOwER5Ul36hbqa3dtclod0_UgDTsNj8A4MjKUyFyNnU-55TBrwxMfT7spUE3pL_NJvu_FFzc0_xFkEtKhDUQ11Z_NkI6DdtUOOtdjz6gitOtgb953edUdh4zLZ8w89lYVCf1LiVBXaWwFmtShPUMYlgHA9ELaOnnktIbQUNOaPnNevhikZUjBNT-_9qWiuhVJfMzhl2DKJnUmBk',
                      'Ourvita Brand Visual Identity System'
                    )
                  }
                >
                  <img
                    alt="Ourvita Brand Visual Identity System"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwWEWFFe0TfYHKv04gyVHMsaMruSj-Wd6myBXU9WG0dDm9JDWdzZiOXOwER5Ul36hbqa3dtclod0_UgDTsNj8A4MjKUyFyNnU-55TBrwxMfT7spUE3pL_NJvu_FFzc0_xFkEtKhDUQ11Z_NkI6DdtUOOtdjz6gitOtgb953edUdh4zLZ8w89lYVCf1LiVBXaWwFmtShPUMYlgHA9ELaOnnktIbQUNOaPnNevhikZUjBNT-_9qWiuhVJfMzhl2DKJnUmBk"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Inset secondary asset grid preview */}
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#121316]/90 border-t border-[#242730]">
                  <div
                    className="rounded-xl overflow-hidden bg-[#292a2e] relative aspect-[16/9] cursor-pointer"
                    onClick={() =>
                      onOpenLightbox(
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuBl049xlmSs4Ze5FennhbQZei2C5O3oxk3WL4oyfDqBhtuqHw8784I5JKI0-vTiAenr0sH62Fhi2dcF8zAsj_5086JbxoF9eRqIcZj-VuiBcm2I3QDFfnM0XpTlXeYe92-raEqFBvkkuSw8eeT-zSo3e22aVL9gcZ_HUiyz6-eJ5Z9e0FFu25CCcFC5_7lCswJxU7oTaBWNs1mQ7lT0m04hv6LMwi9xbcZAT2I6BCbr1L5Uxmm-CylDFVFD2lsOb-o2xSg',
                        'Ourvita Logo Construction & Collateral Details'
                      )
                    }
                  >
                    <img
                      alt="Ourvita Logo Construction & Collateral Details"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl049xlmSs4Ze5FennhbQZei2C5O3oxk3WL4oyfDqBhtuqHw8784I5JKI0-vTiAenr0sH62Fhi2dcF8zAsj_5086JbxoF9eRqIcZj-VuiBcm2I3QDFfnM0XpTlXeYe92-raEqFBvkkuSw8eeT-zSo3e22aVL9gcZ_HUiyz6-eJ5Z9e0FFu25CCcFC5_7lCswJxU7oTaBWNs1mQ7lT0m04hv6LMwi9xbcZAT2I6BCbr1L5Uxmm-CylDFVFD2lsOb-o2xSg"
                    />
                  </div>
                  <div className="rounded-xl p-4 bg-[#1f1f24] border border-[#242730] flex flex-col justify-center">
                    <span className="text-xs uppercase tracking-wider text-[#c6f225] font-mono font-semibold">
                      System Deliverable
                    </span>
                    <h4 className="font-display-hero text-lg font-bold text-white mt-1">
                      360° Omnichannel
                    </h4>
                    <p className="text-xs text-[#c5c9ad] mt-1.5 line-clamp-2">
                      Complete aesthetic overhaul: custom wordmark, typographic matrix, environmental signage, and premium merchandise guidelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Editorial Specimen Metadata Side (4 cols) */}
              <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between bg-[#1a1b20]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#c6f225]/15 text-[#c6f225] text-xs font-semibold uppercase tracking-wider">
                      Brand Identity
                    </span>
                    <span className="font-mono text-sm text-[#8e937a]">2024</span>
                  </div>
                  <h3 className="font-display-hero text-2xl md:text-3xl font-bold text-white group-hover:text-[#c6f225] transition-colors">
                    Ourvita Brand Identity &amp; System
                  </h3>
                  <p className="text-sm text-[#c5c9ad] leading-relaxed">
                    A holistic rebranding project that merges clean organic geometries with pharmaceutical rigor. Engineered to instill uncompromised trust while exuding warm modern vitality.
                  </p>
                  <div className="flex flex-col gap-2 pt-2 text-xs">
                    <div className="flex justify-between py-1.5 px-3 bg-[#1f1f24] rounded-lg border border-[#242730]">
                      <span className="text-[#8e937a]">Discipline</span>
                      <span className="text-white font-medium">Identity, Guidelines, Packaging</span>
                    </div>
                    <div className="flex justify-between py-1.5 px-3 bg-[#1f1f24] rounded-lg border border-[#242730]">
                      <span className="text-[#8e937a]">Client Sector</span>
                      <span className="text-white font-medium">Bio-Wellness &amp; Nutrition</span>
                    </div>
                    <div className="flex justify-between py-1.5 px-3 bg-[#1f1f24] rounded-lg border border-[#242730]">
                      <span className="text-[#8e937a]">Typography</span>
                      <span className="text-white font-medium">Custom Grotesk Display</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between">
                  <button
                    onClick={() => onSelectTab('branding')}
                    className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-[#c6f225] transition-colors group-hover:translate-x-1 duration-300 cursor-pointer"
                  >
                    <span>Explore Case Study</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                  <div className="w-10 h-10 rounded-full bg-[#292a2e] flex items-center justify-center text-white group-hover:bg-[#c6f225] group-hover:text-[#161e00] transition-all">
                    <span className="material-symbols-outlined text-[18px]">north_east</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* SECTION TITLE: INTERACTIVE LOGOFOLIO BREAK */}
        {(activeFilter === 'all' || activeFilter === 'logo') && (
          <div className="relative w-full pt-4 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-center gap-2 text-[#c6f225] text-xs uppercase tracking-widest font-mono">
                <span className="material-symbols-outlined text-[16px]">token</span>
                <span>Index of Vector Marks</span>
              </div>
              <h2 className="font-display-hero text-3xl md:text-5xl font-bold tracking-tight text-white">
                Modern Logofolio
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#c5c9ad] max-w-md">
              A selected survey of custom monograms, wordmarks, and geometric emblems crafted for tech innovators, cultural studios, and direct-to-consumer disruptors.
            </p>
          </div>
        )}

        {/* PROJECT 02: LOGOFOLIO CURATION DISPLAY */}
        {(activeFilter === 'all' || activeFilter === 'logo') && (
          <article className="w-full bg-[#1a1b20] border border-[#242730] p-4 md:p-6 rounded-2xl group shadow-xl">
            <div className="relative rounded-xl overflow-hidden bg-[#08090B] shadow-2xl">
              <div
                className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden cursor-pointer"
                onClick={() => onSelectTab('logofolio')}
              >
                <img
                  alt="Curated Modern Logofolio - 12 Geometric Brand Marks"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD0UetRv-ERlPuxrd1lzlUa6UGCxe6hge1OBYoBY-E3i_8KnUqFAanbiVrs6eO2C97ywGeN83mi4xIw0fwuszfF0r1vo4VBqmGcn4Ow_hmHaBixykhuGTwTf--YbfhqO35yyyn0OIRWwxUhwTs2QMJa6RJotuHMGaa1VZUV2CWni0AeSItlZhK71tp2h6UALrxJU06N5lnLYRtC4ryP2E5wSTxZmwzlv66Kc6TsoVPPCCZ9CSu6LsKy6g6Nh5nCY8a120"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/95 via-[#08090B]/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#1a1b20]/90 border border-[#242730] backdrop-blur-xl p-5 md:p-6 rounded-xl">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#c6f225] text-[#161e00] text-xs font-mono font-bold uppercase tracking-widest">
                        12+ Vector Emblems
                      </span>
                      <h3 className="font-display-hero text-xl md:text-2xl font-bold text-white mt-1.5">
                        Symbolism, Balance &amp; Kinetic Form
                      </h3>
                      <p className="text-xs md:text-sm text-[#c5c9ad] mt-1">
                        Precision grid alignment with scalable vector legibility across micro-favicons and monumental architecture.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#8e937a] hidden sm:inline">FIGMA / AI VECTOR SPEC</span>
                      <button
                        onClick={() => onSelectTab('logofolio')}
                        className="px-5 py-2.5 rounded-full bg-[#292a2e] text-white hover:bg-[#c6f225] hover:text-[#161e00] transition-all text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
                      >
                        Inspect Marks →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* PROJECT 03: POPPY MOBILE UI/UX & STREAMING EXPERIENCE */}
        {(activeFilter === 'all' || activeFilter === 'uiux') && (
          <article className="w-full bg-[#1a1b20] border border-[#242730] rounded-2xl overflow-hidden group transition-all shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Metadata Specs Left (4 cols) */}
              <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between order-2 lg:order-1 bg-[#1a1b20]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#c6f225]/15 text-[#c6f225] text-xs font-semibold uppercase tracking-wider">
                      UI/UX &amp; Interaction
                    </span>
                    <span className="font-mono text-sm text-[#8e937a]">2024</span>
                  </div>
                  <h3 className="font-display-hero text-2xl md:text-3xl font-bold text-white group-hover:text-[#c6f225] transition-colors">
                    Poppy Streaming &amp; Media Engine
                  </h3>
                  <p className="text-sm text-[#c5c9ad] leading-relaxed">
                    An immersive entertainment application designed for hyper-personalized discovery. Featuring spatial audio controls, seamless swipe-to-preview gestures, and ultra-deep OLED dark interfaces.
                  </p>

                  {/* Metric Stats Visualization */}
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="bg-[#121316] p-4 rounded-xl border border-[#242730] flex flex-col justify-center">
                      <span className="font-display-hero text-2xl font-black text-[#c6f225]">+44%</span>
                      <span className="text-[10px] font-mono text-[#8e937a] uppercase mt-1">Session Duration</span>
                    </div>
                    <div className="bg-[#121316] p-4 rounded-xl border border-[#242730] flex flex-col justify-center">
                      <span className="font-display-hero text-2xl font-black text-[#dcff64]">0.18s</span>
                      <span className="text-[10px] font-mono text-[#8e937a] uppercase mt-1">Interaction Latency</span>
                    </div>
                  </div>

                  {/* Architecture Pillars */}
                  <div className="flex flex-col gap-2 pt-2 text-xs text-[#c5c9ad]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#c6f225] text-[18px]">check_circle</span>
                      <span>Adaptive Dynamic-Island HUD System</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#c6f225] text-[18px]">check_circle</span>
                      <span>OLED Contrast Palette Architecture</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between">
                  <button
                    onClick={() => onSelectTab('ui-ux')}
                    className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-[#c6f225] transition-colors cursor-pointer"
                  >
                    <span>View Interactive Prototype</span>
                    <span className="material-symbols-outlined text-[20px]">play_circle</span>
                  </button>
                  <div className="w-10 h-10 rounded-full bg-[#292a2e] flex items-center justify-center text-white group-hover:bg-[#c6f225] group-hover:text-[#161e00] transition-all">
                    <span className="material-symbols-outlined text-[18px]">north_east</span>
                  </div>
                </div>
              </div>

              {/* App Screen Composition Right (8 cols) */}
              <div className="lg:col-span-8 bg-[#08090B] overflow-hidden relative order-1 lg:order-2 flex items-center justify-center p-4 md:p-8">
                <div
                  className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                  onClick={() => onSelectTab('ui-ux')}
                >
                  <img
                    alt="Poppy Mobile Streaming & Entertainment App UI Interface"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaubddCLjdrPlxhZhlD4bSNwByf6rGIGgkfZz_PZNbbE9NJVDw6FVL2aDEsR3--p4MUWNTd1IZpVBx31k4J69HWUK9XYy_5luHg6afubY71CfeXxIeq0MWaovXr_al-N6lOTBfDD4GbMQLj9LsMH2UvaxcWJksj7Baeu0CLk_QpEBglese80D2OFlYbX9Z8C4fQcwL4uQeIpCTPpYWLhCNfq8kAES4XKTqGlsico6zXfqDorpAtgD4kjrjn5QUAI2_LIM"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#08090B]/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* PROJECT 04: EPIC GAMES STORE WEB PLATFORM REDESIGN */}
        {(activeFilter === 'all' || activeFilter === 'uiux') && (
          <article className="w-full bg-[#1a1b20] border border-[#242730] rounded-2xl overflow-hidden group transition-all shadow-xl">
            <div className="p-6 md:p-8 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="inline-flex items-center gap-2 text-[#c6f225] text-xs uppercase tracking-widest font-mono">
                    <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
                    <span>UX Audit &amp; Structural Overhaul</span>
                  </div>
                  <h3 className="font-display-hero text-2xl md:text-3xl font-bold text-white group-hover:text-[#c6f225] transition-colors">
                    Epic Games Store Web Platform Redesign
                  </h3>
                </div>
                <div className="flex items-center gap-2 bg-[#1f1f24] px-4 py-1.5 rounded-full border border-[#242730]">
                  <span className="text-xs uppercase text-[#8e937a] font-mono">Status: Concept Audit</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c6f225]"></span>
                  <span className="text-xs uppercase text-white font-mono">Desktop Hub</span>
                </div>
              </div>

              {/* Before & After Comparison Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Phase 1 Exploration */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-[#8e937a] px-1 font-mono">
                    <span className="uppercase tracking-wider">Exploration Phase • Layout Matrix A</span>
                    <span>FIGMA VIEW 01</span>
                  </div>
                  <div
                    className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#08090B] border border-[#242730] shadow-lg cursor-pointer"
                    onClick={() =>
                      onOpenLightbox(
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuDactnJVULgOkKh6VJDVeE_oSlQKe163Ft3lA0TqsDoOXxJ2HqZoNtNiEuZ4X7XosSS8C9U_6A3iuMwJ6JdDFtLvtPnwCKtZtsocVMgg3_Vg86pwWgliTuuHJ5Iykga7oK6sYnsEaDG2TdLdZb4joNNoOanWhNWPtDKBYmD7PRO2-eRiMmY6rmrUiMJ8srBHKqs6NSxySvgnolMvQfuCvNOSq6TXzK6bj5gmZnwQrOQp9zvKUT-sgtZUqW1wfpzXElBVrI',
                        'Epic Games Store Layout Matrix'
                      )
                    }
                  >
                    <img
                      alt="Epic Games Store Web Platform Redesign Layout Overview"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDactnJVULgOkKh6VJDVeE_oSlQKe163Ft3lA0TqsDoOXxJ2HqZoNtNiEuZ4X7XosSS8C9U_6A3iuMwJ6JdDFtLvtPnwCKtZtsocVMgg3_Vg86pwWgliTuuHJ5Iykga7oK6sYnsEaDG2TdLdZb4joNNoOanWhNWPtDKBYmD7PRO2-eRiMmY6rmrUiMJ8srBHKqs6NSxySvgnolMvQfuCvNOSq6TXzK6bj5gmZnwQrOQp9zvKUT-sgtZUqW1wfpzXElBVrI"
                    />
                  </div>
                </div>

                {/* Phase 2 Refined */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-[#8e937a] px-1 font-mono">
                    <span className="uppercase tracking-wider">Refinement Phase • High-Fidelity Canvas</span>
                    <span className="text-[#c6f225] font-bold">APPROVED FINAL</span>
                  </div>
                  <div
                    className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#08090B] border border-[#242730] shadow-lg cursor-pointer"
                    onClick={() => onSelectTab('ui-ux')}
                  >
                    <img
                      alt="Epic Games Store Web Platform Refined Desktop Interface"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4yBHyyDNR-coLCaVdQ3dhiOojXQPBrCi_rAcWIsO65i2uuDSyJnPB0aqTLaSKWbF7U3hR88qY8J5FmWOSACECDgqN0JCGMFdwVKX-9YXrF0HAMNuB34dVAgytBY0xq7SgMKpUbUCwmBN6kvbISFAoPdOUojWb3OuSahSOqv8Oh9z6Q-10lyuDpsVLYc-PY7eSGzVx4gXEVSiJOqvICI-orKflAUBAT8z46G-2mCwwWEzbnwPd8ItCRKOIDMAchZqPwOk"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
                <p className="text-sm text-[#c5c9ad] max-w-2xl leading-relaxed">
                  Streamlined navigation hierarchy reducing checkout frictions by 3-clicks. Redesigned discovery shelves and micro-interactions optimized for both casual players and high-volume digital library curators.
                </p>
                <button
                  onClick={() => onSelectTab('ui-ux')}
                  className="px-6 py-2.5 rounded-full bg-[#292a2e] text-white hover:bg-[#c6f225] hover:text-[#161e00] transition-all text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer shadow-md"
                >
                  Inspect Redesign →
                </button>
              </div>
            </div>
          </article>
        )}

        {/* PROJECT 05: PACKAGING & STAND-UP COLLATERALS */}
        {(activeFilter === 'all' || activeFilter === 'packaging') && (
          <article className="w-full bg-[#1a1b20] border border-[#242730] rounded-2xl overflow-hidden group transition-all shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Imagery Left (8 cols) */}
              <div className="lg:col-span-8 bg-[#08090B] grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 md:p-6">
                <div
                  className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#121316] shadow-md cursor-pointer"
                  onClick={() =>
                    onOpenLightbox(
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcyP5ua4xUu_tPx72BDFVYZMDi1BIJrr8BWcseAJMTOw6MYVYAE5AQ5Jqr4d184sm7GEFjlYsgf3mmsVmEbk7VkzVFzpjfKNLr2w4mtUN0M6LBIKzN5gtL4t2V_GeRt1D_xRZefMKFDF7802mMKvlwX43Ln68Manpt6S2aBvZt8MemgroExyIx1lz9dNzn-d0upPpgp33loC7DBK0rc8wv_TMZPmPmLSlmPjxpusoNiEiwMYhl42B9kNE_X3ngb-5QgIs',
                      'Tactile Packaging Innovations & Print System'
                    )
                  }
                >
                  <img
                    alt="Tactile Packaging Innovations & Print System"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcyP5ua4xUu_tPx72BDFVYZMDi1BIJrr8BWcseAJMTOw6MYVYAE5AQ5Jqr4d184sm7GEFjlYsgf3mmsVmEbk7VkzVFzpjfKNLr2w4mtUN0M6LBIKzN5gtL4t2V_GeRt1D_xRZefMKFDF7802mMKvlwX43Ln68Manpt6S2aBvZt8MemgroExyIx1lz9dNzn-d0upPpgp33loC7DBK0rc8wv_TMZPmPmLSlmPjxpusoNiEiwMYhl42B9kNE_X3ngb-5QgIs"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#08090B]/85 backdrop-blur-md px-2.5 py-1 rounded text-xs text-[#c6f225] font-mono">
                    SPEC: 01 // MATTE FINISH
                  </div>
                </div>

                <div
                  className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#121316] shadow-md cursor-pointer"
                  onClick={() =>
                    onOpenLightbox(
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuDw5EWtpIMeZ0TnKDSR8TGqdlYHMl79XlIYPwrEkIY3M_hmEv360htASfz_Jd17HPxoOEqbK4eVAqVXcxD9rBq3fCqJ0t8ALANIcrle-Jd-FiWc9SO7TjBb_gUtaJwmDR4LMbUMNWADGR0guO-zHWu6qnv4IuFk3MgFUMMBabR_BkzZ9z2e_jrGzCH7Vf6cbO6m_HC5U1GNuqz7wBwGEgViqO5REzhYdZdEzjwde7HcpdXok1gUNJoBUFkjYL0o2p9jZQQ',
                      'Event Standee Collaterals & Environmental Display'
                    )
                  }
                >
                  <img
                    alt="Event Standee Collaterals & Environmental Display"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw5EWtpIMeZ0TnKDSR8TGqdlYHMl79XlIYPwrEkIY3M_hmEv360htASfz_Jd17HPxoOEqbK4eVAqVXcxD9rBq3fCqJ0t8ALANIcrle-Jd-FiWc9SO7TjBb_gUtaJwmDR4LMbUMNWADGR0guO-zHWu6qnv4IuFk3MgFUMMBabR_BkzZ9z2e_jrGzCH7Vf6cbO6m_HC5U1GNuqz7wBwGEgViqO5REzhYdZdEzjwde7HcpdXok1gUNJoBUFkjYL0o2p9jZQQ"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#08090B]/85 backdrop-blur-md px-2.5 py-1 rounded text-xs text-[#c6f225] font-mono">
                    SPEC: 02 // STANDEE ROLLUP
                  </div>
                </div>
              </div>

              {/* Content Right (4 cols) */}
              <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between bg-[#1a1b20]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#c6f225]/15 text-[#c6f225] text-xs font-semibold uppercase tracking-wider">
                      Print &amp; Packaging
                    </span>
                    <span className="font-mono text-sm text-[#8e937a]">2024</span>
                  </div>
                  <h3 className="font-display-hero text-2xl md:text-3xl font-bold text-white group-hover:text-[#c6f225] transition-colors">
                    Physical Artifacts &amp; Exhibit Systems
                  </h3>
                  <p className="text-sm text-[#c5c9ad] leading-relaxed">
                    Translating digital brand equity into tangible tactile substrates. From metallic foil embossed product sleeves to grand-format exhibition standees calibrated for optimal booth foot-traffic capture.
                  </p>
                  <div className="flex flex-col gap-2 pt-2 text-xs text-[#c5c9ad]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#c6f225] text-[18px]">layers</span>
                      <span>FSC-Certified Recycled Stock Specs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#c6f225] text-[18px]">palette</span>
                      <span>Pantone Matching Formula Precision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#c6f225] text-[18px]">precision_manufacturing</span>
                      <span>Custom Die-Line Structural Schematics</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between">
                  <button
                    onClick={() => onSelectTab('print-and-packaging')}
                    className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-[#c6f225] transition-colors cursor-pointer"
                  >
                    <span>View Print Gallery</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                  <div className="w-10 h-10 rounded-full bg-[#292a2e] flex items-center justify-center text-white group-hover:bg-[#c6f225] group-hover:text-[#161e00] transition-all">
                    <span className="material-symbols-outlined text-[18px]">north_east</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}
      </section>

      {/* ===================== ABOUT & CREATIVE PHILOSOPHY / SKETCH SECTION ===================== */}
      <section className="w-full bg-[#0d0e12] border-t border-b border-[#242730] py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c6f225]/5 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Artist Sketch Container (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Paper Inset Tier with Shadow Lift */}
            <div className="relative w-full max-w-md bg-[#F4F4F0] rounded-2xl p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] border border-white/20 overflow-hidden group">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-[#F4F4F0]">
                {/* SVG Portrait of Jimson */}
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

                {/* Organic "About Jimson" script annotation arrow */}
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

          {/* Philosophy & Manifesto Side (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-[#c6f225] text-xs font-mono uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">psychology</span>
              <span>Design Philosophy</span>
            </div>
            <h2 className="font-display-hero text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Disciplined Craft. <br />
              <span className="text-[#c6f225]">Uncompromising Energy.</span>
            </h2>
            <p className="text-base md:text-lg text-[#e3e2e8] leading-relaxed">
              I am Jimson Usayan, a multimedia artist and brand designer driven by the pursuit of clarity through kinetic form. I explore new creative frontiers that dismantle conventional borders, delivering memorable visual stories for ambitious visionaries.
            </p>
            <p className="text-sm md:text-base text-[#c5c9ad] leading-relaxed">
              Whether designing an ultra-minimal vector mark or architecting an entire corporate visual language, I balance rigorous mathematical balance with unapologetic visual audacity.
            </p>

            {/* Tooling & Competencies */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs uppercase text-[#8e937a] font-mono tracking-wider">
                Core Arsenal &amp; Creative Tooling
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  'Adobe Photoshop',
                  'Adobe Illustrator',
                  'Figma & Design Systems',
                  'Cinema 4D',
                  'After Effects',
                  'Brand Strategy',
                ].map((tool) => (
                  <span
                    key={tool}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium border border-[#242730] ${
                      tool === 'Figma & Design Systems'
                        ? 'bg-[#c6f225]/15 border-[#c6f225]/40 text-[#c6f225] font-bold'
                        : 'bg-[#1a1b20] text-[#e3e2e8]'
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Metric Experience Markers */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-[#1a1b20] border border-[#242730] p-4 rounded-xl">
                <span className="font-display-hero text-3xl font-black text-white">07+</span>
                <span className="block text-xs font-mono text-[#8e937a] uppercase mt-1">Years Directing</span>
              </div>
              <div className="bg-[#1a1b20] border border-[#242730] p-4 rounded-xl">
                <span className="font-display-hero text-3xl font-black text-white">60+</span>
                <span className="block text-xs font-mono text-[#8e937a] uppercase mt-1">Brand Systems</span>
              </div>
              <div className="bg-[#1a1b20] border border-[#242730] p-4 rounded-xl">
                <span className="font-display-hero text-3xl font-black text-[#c6f225]">100%</span>
                <span className="block text-xs font-mono text-[#8e937a] uppercase mt-1">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CALL-TO-ACTION BANNER ===================== */}
      <section className="w-full max-w-7xl px-4 md:px-8 lg:px-12 py-20">
        <div className="relative w-full rounded-2xl bg-[#1a1b20] border border-[#242730] overflow-hidden p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#c6f225]/10 blur-[80px] pointer-events-none"></div>
          <div className="flex flex-col gap-2 max-w-xl text-center md:text-left z-10">
            <span className="text-xs uppercase tracking-widest text-[#c6f225] font-mono font-bold">
              Initiate New Project
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Ready to elevate your brand presence?
            </h2>
            <p className="text-sm md:text-base text-[#c5c9ad] mt-2 leading-relaxed">
              Currently accepting select design identity commissions, UI/UX engagements, and creative direction partnerships for Q2/Q3 2025.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto z-10">
            <button
              onClick={onOpenCollaborate}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#c6f225] text-[#161e00] font-display-hero text-sm font-bold uppercase tracking-wider text-center shadow-[0_0_32px_rgba(198,242,37,0.45)] hover:bg-[#bbe402] transition-all cursor-pointer whitespace-nowrap"
            >
              Start a Project →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
