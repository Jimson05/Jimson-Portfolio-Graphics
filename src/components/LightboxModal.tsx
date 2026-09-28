import React from 'react';

interface LightboxModalProps {
  imageUrl: string | null;
  title: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ imageUrl, title, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-white">
          <span className="font-display-hero text-lg font-bold">{title}</span>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1f1f24] hover:bg-[#292a2e] text-white flex items-center justify-center border border-[#242730] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Media Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-[#242730] shadow-2xl bg-[#08090B] max-h-[80vh] flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>

        <div className="mt-3 text-xs font-mono text-[#8e937a]">
          High-Fidelity Archival Resolution • Click anywhere outside to close
        </div>
      </div>
    </div>
  );
};
