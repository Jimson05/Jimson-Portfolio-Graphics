import React, { useState } from 'react';
import { LogoMark } from '../types/portfolio';

interface MarkInspectorModalProps {
  mark: LogoMark | null;
  onClose: () => void;
  onCommission: (markName: string) => void;
}

export const MarkInspectorModal: React.FC<MarkInspectorModalProps> = ({
  mark,
  onClose,
  onCommission,
}) => {
  const [copied, setCopied] = useState(false);

  if (!mark) return null;

  const copyHex = () => {
    navigator.clipboard.writeText(mark.color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className="w-full max-w-3xl bg-[#121316] border border-[#242730] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#1a1b20] border-b border-[#242730] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: mark.color }}></span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#c5c9ad]">
              Vector Specimen // {mark.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#121316] text-[#c5c9ad] hover:text-white flex items-center justify-center border border-[#242730]"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left Canvas Preview */}
          <div className="md:col-span-6 p-8 bg-[#08090B] flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-[#242730]">
            {/* Subtle grid pattern background */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(${mark.color} 1px, transparent 1px)`,
                backgroundSize: '16px 16px',
              }}
            ></div>

            {/* Bounding box guide */}
            <div className="relative p-8 rounded-2xl border border-dashed border-[#38393e] flex flex-col items-center justify-center min-w-[200px] min-h-[200px]">
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-extrabold shadow-2xl mb-4"
                style={{ backgroundColor: `${mark.color}15`, color: mark.color }}
              >
                {mark.name.charAt(0)}
              </div>
              <h3
                className="font-display-hero text-2xl font-black tracking-wide text-center"
                style={{ color: mark.color }}
              >
                {mark.name}
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e937a] mt-1">
                {mark.subCategory}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={copyHex}
                className="px-3 py-1 rounded bg-[#1a1b20] border border-[#242730] text-xs font-mono text-[#c5c9ad] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: mark.color }}></span>
                <span>{mark.color}</span>
                <span className="text-[10px] text-[#8e937a]">{copied ? '✓ Copied' : 'Copy'}</span>
              </button>
              <span className="text-xs font-mono text-[#8e937a]">{mark.ratio}</span>
            </div>
          </div>

          {/* Right Editorial Details */}
          <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between bg-[#121316]">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase text-[#c6f225] font-semibold tracking-wider">
                  Semiotic Rationale
                </span>
                <h4 className="font-display-hero text-xl font-bold text-white mt-1">
                  {mark.name}
                </h4>
                <p className="text-sm text-[#c5c9ad] mt-2 leading-relaxed">
                  {mark.description}
                </p>
              </div>

              {/* Technical Grid Specs */}
              <div className="p-4 rounded-xl bg-[#1a1b20] border border-[#242730] space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#8e937a]">Grid System:</span>
                  <span className="text-white">{mark.gridSpec}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e937a]">Delivery Format:</span>
                  <span className="text-white">SVG / EPS / Optical Favicon</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e937a]">Color Mode:</span>
                  <span className="text-white">Pantone + Hex {mark.color}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {mark.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-[#1f1f24] text-xs text-[#8e937a]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#242730] flex items-center justify-between gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-[#1a1b20] text-xs font-semibold text-[#c5c9ad] hover:text-white"
              >
                Close Spec
              </button>
              <button
                onClick={() => {
                  onClose();
                  onCommission(mark.name);
                }}
                className="px-5 py-2 rounded-full bg-[#c6f225] text-[#161e00] font-bold text-xs hover:bg-[#dcff64] shadow-[0_0_16px_rgba(198,242,37,0.3)] transition-all"
              >
                Inquire Similar Mark →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
