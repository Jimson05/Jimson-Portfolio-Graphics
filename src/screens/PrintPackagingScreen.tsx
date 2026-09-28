import React, { useState } from 'react';
import { NavigationTab } from '../types/portfolio';

interface PrintPackagingScreenProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenCollaborate: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const PrintPackagingScreen: React.FC<PrintPackagingScreenProps> = ({
  onSelectTab,
  onOpenCollaborate,
  onOpenLightbox,
}) => {
  const [selectedSubstrate, setSelectedSubstrate] = useState<'all' | 'packaging' | 'exhibit' | 'editorial'>('all');

  const items = [
    {
      id: 'matte-packaging',
      title: 'Tactile Packaging Innovations & Print System',
      category: 'packaging',
      spec: 'SPEC: 01 // MATTE FINISH',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcyP5ua4xUu_tPx72BDFVYZMDi1BIJrr8BWcseAJMTOw6MYVYAE5AQ5Jqr4d184sm7GEFjlYsgf3mmsVmEbk7VkzVFzpjfKNLr2w4mtUN0M6LBIKzN5gtL4t2V_GeRt1D_xRZefMKFDF7802mMKvlwX43Ln68Manpt6S2aBvZt8MemgroExyIx1lz9dNzn-d0upPpgp33loC7DBK0rc8wv_TMZPmPmLSlmPjxpusoNiEiwMYhl42B9kNE_X3ngb-5QgIs',
      description: 'Embossed metallic foil sleeves, micro-die cuts, and velvet soft-touch laminate coating for luxury direct-to-consumer cosmetics.',
      features: ['350gsm G.F Smith Colorplan', 'Blind deboss with registration accuracy', 'Custom inner tray origami fold'],
    },
    {
      id: 'standee-exhibit',
      title: 'Event Standee Collaterals & Environmental Display',
      category: 'exhibit',
      spec: 'SPEC: 02 // STANDEE ROLLUP',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw5EWtpIMeZ0TnKDSR8TGqdlYHMl79XlIYPwrEkIY3M_hmEv360htASfz_Jd17HPxoOEqbK4eVAqVXcxD9rBq3fCqJ0t8ALANIcrle-Jd-FiWc9SO7TjBb_gUtaJwmDR4LMbUMNWADGR0guO-zHWu6qnv4IuFk3MgFUMMBabR_BkzZ9z2e_jrGzCH7Vf6cbO6m_HC5U1GNuqz7wBwGEgViqO5REzhYdZdEzjwde7HcpdXok1gUNJoBUFkjYL0o2p9jZQQ',
      description: 'Grand-format exhibition rollups and trade show booth spatial architecture calibrated for 10-meter readability and high foot-traffic.',
      features: ['Anodized aluminum cassette base', 'Anti-curl blockout PVC-free polyester', 'UV-cured pigment formula'],
    },
    {
      id: 'stationery-suite',
      title: 'Ourvita Corporate Identity Stationery & Lanyard',
      category: 'editorial',
      spec: 'SPEC: 03 // FSC COTTON',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZbPAxGhyik6CUQ3ie3GDtt83NKduJOSQGGzVt7lcFnCKyIC3vVlAjrLwidw8cicKi6pcyvK1xIllJLUOnUkXMqkOzjvQvvx3ovntwkJi2sQ4pUtB7R0WdJbPb6PK7D90cLYJBqJRkQWgm-by9W8ipsONlS47CHcgEPpPSVookiqfHZ6Qz2g8K6vsqnWjI8uxZYo0g-XcRYKobd-1BupNKrayevpxM327RfPK2bptXdXFtoxPAAYqaaA',
      description: 'Letterhead, business cards with emerald foil edges, conference credentials, and tactile kraft envelope suites.',
      features: ['100% recycled post-consumer waste', 'Soy ink letterpress', 'Recycled PET lanyard woven strap'],
    },
    {
      id: 'tubes-lineup',
      title: 'Ourvita 5-SKU Cosmetic Tubes Lineup',
      category: 'packaging',
      spec: 'SPEC: 04 // PCR ALUMINUM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1Hk2F_NOPpYqCg9WoS2TVkMy79Ei7_tE2qOnccuCFe2lK5umo3Aisd3FktcIQwj5YZDVrGxFtmWgMz8k0P_QtRHpbssHSj5C1k8whbqp8AfW220NpxgFS-iS0TxuXs701w_TORSOgfccOBFonMN3hTfmfld91-li9owcWtae4Dd1HcdkkZAehugiND9NFDlwvJ1XKJTXKL-kZRZVDWL7oRMlp-lg26KMlbtXasCVpclV1eFz5chZ7og',
      description: 'Minimalist calibrated typography silkscreened onto matte sage and turmeric cream PCR collapsible tubes.',
      features: ['Infinitely recyclable aluminum barrier', 'Direct-to-tube UV screenprint', 'Child-resistant tamper seal'],
    },
  ];

  const filteredItems = selectedSubstrate === 'all'
    ? items
    : items.filter((i) => i.category === selectedSubstrate);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Stage */}
      <section className="relative w-full px-4 md:px-8 lg:px-12 py-16 bg-[#08090B] flex flex-col items-center text-center overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c6f225]/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1b20] border border-[#242730] text-[#c5c9ad] text-xs font-mono mb-6 tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#c6f225] animate-pulse"></span>
          <span>DISCIPLINE // VOL. 02 — TACTILE SUBSTRATES &amp; EXHIBIT SYSTEMS</span>
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
            Print &amp; Packaging
          </h1>

          <p className="mt-6 text-[#e3e2e8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Translating digital brand equity into tangible tactile substrates. From metallic foil embossed product sleeves to grand-format exhibition standees calibrated for optimal booth foot-traffic capture.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[#c5c9ad] text-xs font-mono">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#c6f225] text-[18px]">layers</span>
              FSC-Certified Stocks
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#c6f225] text-[18px]">palette</span>
              Pantone Precision
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#c6f225] text-[18px]">precision_manufacturing</span>
              Die-Line Schematics
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mt-8 p-1.5 bg-[#1a1b20] border border-[#242730] rounded-full">
          {[
            { id: 'all', label: 'All Artifacts' },
            { id: 'packaging', label: 'Packaging Systems' },
            { id: 'exhibit', label: 'Exhibit & Environmental' },
            { id: 'editorial', label: 'Stationery & Identity' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedSubstrate(cat.id as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedSubstrate === cat.id
                  ? 'bg-[#c6f225] text-[#161e00] font-bold shadow-md'
                  : 'text-[#c5c9ad] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Artifacts Grid */}
      <section className="w-full max-w-7xl px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a1b20] border border-[#242730] rounded-2xl overflow-hidden shadow-xl flex flex-col group"
            >
              <div
                className="relative aspect-[16/10] bg-[#08090B] overflow-hidden cursor-pointer"
                onClick={() => onOpenLightbox(item.image, item.title)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-[#08090B]/85 backdrop-blur-md px-3 py-1 rounded text-xs text-[#c6f225] font-mono">
                  {item.spec}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="font-display-hero text-xl md:text-2xl font-bold text-white group-hover:text-[#c6f225] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#c5c9ad] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-[#242730]">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#8e937a]">
                      <span className="material-symbols-outlined text-[#c6f225] text-[16px]">check</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onOpenLightbox(item.image, item.title)}
                    className="text-xs font-mono text-[#c6f225] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect High-Res Substrate</span>
                    <span className="material-symbols-outlined text-[14px]">zoom_in</span>
                  </button>
                  <button
                    onClick={onOpenCollaborate}
                    className="px-4 py-2 rounded-full bg-[#1f1f24] hover:bg-[#c6f225] hover:text-[#161e00] text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
                  >
                    Inquire Spec →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Production Specs Callout */}
      <section className="w-full px-4 md:px-8 lg:px-12 py-16 bg-[#121316] border-t border-[#242730]">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#1a1b20] border border-[#242730] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs uppercase font-mono font-bold text-[#c6f225]">
              Press-Ready Specifications
            </span>
            <h3 className="font-display-hero text-2xl md:text-3xl font-bold text-white">
              Need custom dielines or press-check management?
            </h3>
            <p className="text-sm text-[#c5c9ad] leading-relaxed">
              Every print packaging project includes full spot-color separations, Pantone Formula matching, structural mockups, and vendor QA coordination.
            </p>
          </div>
          <button
            onClick={onOpenCollaborate}
            className="px-8 py-3.5 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-xs uppercase tracking-wider hover:bg-[#bbe402] transition-all whitespace-nowrap cursor-pointer shadow-md"
          >
            Start Packaging Project →
          </button>
        </div>
      </section>
    </div>
  );
};
