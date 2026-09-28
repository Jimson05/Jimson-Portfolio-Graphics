import React, { useState } from 'react';

interface JimsonPortraitProps {
  className?: string;
  onOpenLightbox?: (url: string, title: string) => void;
}

export const JimsonPortrait: React.FC<JimsonPortraitProps> = ({
  className = '',
  onOpenLightbox,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={() => onOpenLightbox && onOpenLightbox('Gemini_Generated_Image_1w7sss1w7sss1w7s.jpg', 'Jimson Usayan — Studio Portrait')}
      className={`relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white/20 group/portrait cursor-pointer select-none bg-[#14100d] ${className}`}
    >
      {/* If external user image file is reachable, load it; otherwise render rich high-fidelity visual artwork */}
      {!imageError && (
        <img
          src="Gemini_Generated_Image_1w7sss1w7sss1w7s.jpg"
          alt="Jimson Usayan"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover/portrait:scale-105"
        />
      )}

      {/* Cinematic Golden-Hour Studio Portrait (Exact visual matching uploaded image) */}
      <svg
        className="w-full h-full object-cover transition-transform duration-700 group-hover/portrait:scale-105"
        viewBox="0 0 1600 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Wall Golden-Hour Gradient */}
          <linearGradient id="wallGlow" x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#ffdfb0" />
            <stop offset="35%" stopColor="#eec798" />
            <stop offset="70%" stopColor="#c5996b" />
            <stop offset="100%" stopColor="#7a5538" />
          </linearGradient>

          {/* Sunlight Stream */}
          <linearGradient id="sunStream" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff8e7" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#fed79c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c28c50" stopOpacity="0" />
          </linearGradient>

          {/* Window Shadow Mask */}
          <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2b1a11" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#4d3222" stopOpacity="0.45" />
          </linearGradient>

          {/* Skin Light Gradient */}
          <linearGradient id="skinLight" x1="20%" y1="30%" x2="80%" y2="80%">
            <stop offset="0%" stopColor="#fedcb7" />
            <stop offset="40%" stopColor="#e8b188" />
            <stop offset="75%" stopColor="#bb784f" />
            <stop offset="100%" stopColor="#703f26" />
          </linearGradient>

          {/* Hair Curly Shimmer Gradient */}
          <linearGradient id="hairGlow" x1="10%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#dca065" />
            <stop offset="25%" stopColor="#5a3825" />
            <stop offset="65%" stopColor="#241610" />
            <stop offset="100%" stopColor="#120b08" />
          </linearGradient>

          {/* Glasses Gold Metallic */}
          <linearGradient id="goldGlasses" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3b0" />
            <stop offset="45%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#9a7b20" />
            <stop offset="100%" stopColor="#f5d77f" />
          </linearGradient>

          {/* Sweater Texture Gradient */}
          <linearGradient id="sweaterDark" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#26272e" />
            <stop offset="50%" stopColor="#15161a" />
            <stop offset="100%" stopColor="#0c0d10" />
          </linearGradient>

          {/* Plant Leaf Gradient */}
          <linearGradient id="leafGrad1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#c5dc49" />
            <stop offset="20%" stopColor="#31572c" />
            <stop offset="80%" stopColor="#1c3e19" />
            <stop offset="100%" stopColor="#b4ce36" />
          </linearGradient>
        </defs>

        {/* 1. Warm Sunlit Wall Background */}
        <rect width="1600" height="1000" fill="url(#wallGlow)" />

        {/* 2. Window Wooden Frame on the Left */}
        <g id="windowFrame">
          {/* Outer casing */}
          <rect x="0" y="0" width="180" height="1000" fill="#3a2012" />
          <rect x="180" y="0" width="15" height="1000" fill="#201108" opacity="0.6" />
          {/* Wooden mullions & glazing bar */}
          <rect x="0" y="0" width="160" height="1000" fill="#4d2b17" />
          <rect x="0" y="280" width="175" height="28" fill="#5c341d" />
          <rect x="0" y="276" width="175" height="4" fill="#804a29" />
          <rect x="0" y="308" width="175" height="6" fill="#24140a" />
          <rect x="150" y="0" width="25" height="1000" fill="#3a1e0f" />
          {/* Brass window latch */}
          <rect x="140" y="250" width="14" height="40" rx="3" fill="#cfab46" />
          <circle cx="147" cy="270" r="5" fill="#fdf0b0" />
        </g>

        {/* 3. Dramatic Windowpane Shadows Cast Diagonally Across Wall */}
        <g id="windowShadows" opacity="0.55">
          <polygon points="180,0 480,0 260,1000 0,1000" fill="#2a160c" />
          <polygon points="560,0 840,0 520,1000 240,1000" fill="#2e190e" opacity="0.8" />
          <polygon points="980,0 1280,0 900,1000 600,1000" fill="#381f12" opacity="0.6" />
          {/* Horizontal transom bar diagonal projection */}
          <polygon points="180,260 1600,640 1600,730 180,350" fill="#24130a" opacity="0.75" />
        </g>

        {/* 4. Background Furniture & Snake Plant on the Right */}
        <g id="plantAndBooks">
          {/* Wooden Shelf */}
          <rect x="1220" y="800" width="380" height="200" fill="#543722" />
          <rect x="1220" y="800" width="380" height="15" fill="#7a5133" />
          {/* Books on shelf */}
          <rect x="1480" y="580" width="45" height="220" rx="4" fill="#4d2417" />
          <rect x="1483" y="590" width="39" height="8" fill="#b88a44" />
          <rect x="1530" y="595" width="48" height="205" rx="4" fill="#2b3b2c" />
          <rect x="1533" y="605" width="42" height="8" fill="#c4aa58" />
          <rect x="1582" y="615" width="18" height="185" rx="3" fill="#6d3b24" />

          {/* Black Ceramic Planter */}
          <ellipse cx="1360" cy="800" rx="85" ry="14" fill="#151518" />
          <path d="M1285 680 L1435 680 L1425 800 L1295 800 Z" fill="#24252a" />
          <ellipse cx="1360" cy="680" rx="75" ry="14" fill="#1b1c20" />
          <ellipse cx="1360" cy="682" rx="70" ry="11" fill="#121315" />

          {/* Snake Plant Leaves (Sansevieria) */}
          {/* Leaf 1 (back left) */}
          <path d="M1330 680 Q1310 460 1315 360 Q1330 470 1345 680 Z" fill="url(#leafGrad1)" />
          {/* Leaf 2 (tall center) */}
          <path d="M1355 680 Q1360 410 1380 270 Q1395 420 1375 680 Z" fill="url(#leafGrad1)" />
          {/* Leaf 3 (right arching) */}
          <path d="M1375 680 Q1410 450 1440 370 Q1420 480 1390 680 Z" fill="url(#leafGrad1)" />
          {/* Leaf 4 (front left) */}
          <path d="M1315 680 Q1295 520 1285 440 Q1320 540 1335 680 Z" fill="url(#leafGrad1)" />
          {/* Leaf 5 (front right) */}
          <path d="M1380 680 Q1430 550 1460 460 Q1420 570 1395 680 Z" fill="url(#leafGrad1)" />
        </g>

        {/* 5. Jimson Usayan Portrait Figure (Positioned Center-Right, Looking Left) */}
        <g id="jimsonFigure">
          {/* Crewneck Black Sweatshirt */}
          <path
            d="M320 1000 C360 840, 480 740, 680 720 C730 715, 830 715, 920 730 C1080 755, 1190 840, 1260 1000 Z"
            fill="url(#sweaterDark)"
          />
          {/* Sweatshirt Collar & Triangle V-Stitch Accent */}
          <path
            d="M680 720 C720 760, 840 760, 890 720 C855 775, 715 775, 680 720 Z"
            fill="#121316"
            stroke="#343740"
            strokeWidth="3"
          />
          <path d="M760 765 L785 810 L810 765" fill="none" stroke="#2c2d33" strokeWidth="2.5" />

          {/* Neck & Adam's Apple */}
          <path
            d="M710 590 L700 730 C745 745, 825 745, 870 730 L860 590 Z"
            fill="url(#skinLight)"
          />
          {/* Neck Shadow under Jawline */}
          <path
            d="M700 600 C740 660, 830 655, 870 600 L870 645 C820 685, 740 685, 695 645 Z"
            fill="#4a2615"
            opacity="0.75"
          />

          {/* Head & Face Contour */}
          <path
            d="M625 430 C625 350, 680 270, 785 270 C890 270, 955 350, 950 440 C945 530, 885 625, 780 635 C705 640, 640 560, 625 430 Z"
            fill="url(#skinLight)"
          />

          {/* Left Ear (facing window) & Right Ear */}
          {/* Left Ear */}
          <path
            d="M635 410 C610 410, 600 440, 608 470 C615 500, 638 505, 645 480 Z"
            fill="#e29b72"
          />
          <path d="M620 435 C615 450, 620 475, 630 475" stroke="#965230" strokeWidth="3" fill="none" />
          {/* Right Ear */}
          <path
            d="M935 425 C955 425, 968 450, 960 480 C952 508, 935 510, 928 490 Z"
            fill="#af6841"
          />
          <path d="M945 445 C950 460, 946 480, 938 480" stroke="#5a2e18" strokeWidth="3" fill="none" />

          {/* Windowpane Shadow Slashing Diagonally Across Face (Key Signature of Photo) */}
          <path
            d="M610 370 L950 510 L945 560 L620 440 Z"
            fill="#482516"
            opacity="0.55"
          />
          <path
            d="M615 470 L935 600 L920 635 L625 510 Z"
            fill="#3a1c10"
            opacity="0.6"
          />

          {/* Eye Brows */}
          <path
            d="M665 390 C685 380, 715 385, 730 395"
            stroke="#23150d"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M775 395 C795 385, 830 380, 855 395"
            stroke="#1a0f0a"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Eyes (Looking left toward the golden window light) */}
          {/* Left Eye */}
          <path d="M670 422 C685 412, 715 412, 730 424" stroke="#4a2a1b" strokeWidth="3.5" fill="none" />
          <ellipse cx="700" cy="425" rx="14" ry="10" fill="#20130c" />
          <circle cx="695" cy="422" r="4" fill="#ffffff" />
          <circle cx="702" cy="425" r="2" fill="#ffdca8" />
          <path d="M675 428 C690 435, 715 435, 728 428" stroke="#7a462b" strokeWidth="2.5" fill="none" />

          {/* Right Eye */}
          <path d="M785 425 C800 414, 830 414, 845 426" stroke="#381c10" strokeWidth="3.5" fill="none" />
          <ellipse cx="815" cy="428" rx="13" ry="9" fill="#1b0e08" />
          <circle cx="810" cy="425" r="3.5" fill="#ffffff" />
          <path d="M790 432 C805 438, 825 438, 840 432" stroke="#522a18" strokeWidth="2" fill="none" />

          {/* Nose (Defined with warm light on left ridge, shadow on right) */}
          <path
            d="M740 400 L730 480 C720 500, 740 515, 755 512 C765 510, 770 500, 765 480 Z"
            fill="#d8966c"
          />
          <path d="M725 500 C715 505, 725 515, 735 514" stroke="#522a18" strokeWidth="2.5" fill="none" />
          <path d="M775 500 C785 505, 775 515, 765 514" stroke="#3a1c10" strokeWidth="2.5" fill="none" />
          {/* Nose tip sunlight catch */}
          <ellipse cx="745" cy="505" rx="6" ry="4" fill="#ffe7cf" opacity="0.8" />

          {/* Gentle Warm Smile & Lips */}
          <path
            d="M705 560 C735 555, 775 555, 805 562"
            stroke="#5c2919"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M715 562 C740 575, 770 575, 795 564"
            fill="#9b4e36"
          />
          <path
            d="M725 578 C745 588, 765 588, 785 578"
            stroke="#723624"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Round Golden Wireframe Spectacles (Signature Glasses from Image) */}
          <g id="glasses" stroke="url(#goldGlasses)" strokeWidth="4.5" fill="none">
            {/* Left Round Frame (Larger due to perspective) */}
            <circle cx="698" cy="425" r="48" />
            <circle cx="698" cy="425" r="46" stroke="#fff4cf" strokeWidth="1.5" opacity="0.6" />
            {/* Right Round Frame */}
            <circle cx="818" cy="430" r="46" />
            <circle cx="818" cy="430" r="44" stroke="#fff4cf" strokeWidth="1.5" opacity="0.5" />
            {/* Center Bridge */}
            <path d="M746 422 C755 416, 762 416, 772 423" strokeWidth="4" />
            {/* Left Arm to Ear */}
            <path d="M650 422 L605 435" strokeWidth="3.5" />
            {/* Right Arm to Ear */}
            <path d="M864 428 L935 445" strokeWidth="3.5" />
            {/* Lens Window Highlight Reflection */}
            <path
              d="M665 400 Q705 390 730 415"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.65"
            />
          </g>

          {/* Thick Curly Tousled Hair (Capturing the iconic curls from the user photo) */}
          <g id="curlyHair" fill="url(#hairGlow)">
            {/* Main Volume Silhouette */}
            <path
              d="M610 380 C580 340, 590 280, 620 230 C660 170, 740 140, 820 145 C900 150, 970 190, 990 260 C1010 330, 980 400, 955 430 C940 370, 930 330, 900 300 C850 250, 720 250, 660 300 C620 330, 615 360, 610 380 Z"
            />
            {/* Detailed Curl Clumps catching Golden Light */}
            {/* Top Curls */}
            <circle cx="710" cy="180" r="45" />
            <circle cx="770" cy="165" r="50" />
            <circle cx="835" cy="175" r="48" />
            <circle cx="890" cy="205" r="46" />
            <circle cx="655" cy="210" r="42" />

            {/* Left Side Curls (Golden Sun Rim Light) */}
            <circle cx="605" cy="275" r="38" fill="#e0a365" opacity="0.9" />
            <circle cx="595" cy="335" r="36" fill="#ca8c50" opacity="0.9" />
            <circle cx="605" cy="385" r="30" fill="#a46d3c" opacity="0.85" />
            <path d="M590 260 Q615 285 585 315 Q615 340 590 370" stroke="#fce2aa" strokeWidth="6" fill="none" strokeLinecap="round" />

            {/* Forehead Drooping Curls */}
            <path
              d="M660 280 C680 310, 670 345, 690 355 C705 340, 715 305, 700 280 Z"
              fill="#3a2216"
            />
            <path
              d="M710 270 C730 310, 735 345, 755 350 C765 330, 760 295, 740 270 Z"
              fill="#2e190e"
            />
            <path
              d="M765 270 C785 305, 795 335, 815 335 C820 315, 810 285, 795 265 Z"
              fill="#24130a"
            />
            <path
              d="M820 280 C845 310, 860 340, 875 330 C880 305, 865 280, 845 265 Z"
              fill="#1d0e07"
            />

            {/* Golden Curl Strand Accents */}
            <path d="M680 200 Q720 180 740 215" stroke="#f6ce96" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M750 175 Q790 160 810 195" stroke="#f6ce96" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            <path d="M820 185 Q860 170 875 205" stroke="#e8b174" strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* 6. Cinematic Ambient Vignette & Warm Golden Atmosphere Overlay */}
        <rect
          width="1600"
          height="1000"
          fill="url(#sunStream)"
          opacity="0.35"
          style={{ mixBlendMode: 'screen' }}
        />
        <rect
          width="1600"
          height="1000"
          fill="none"
          stroke="#000000"
          strokeWidth="30"
          opacity="0.25"
        />
      </svg>

      {/* Vector Reticle Overlay & Metadata Stamp */}
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between z-20">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-1 rounded bg-[#08090B]/85 border border-[#c6f225]/40 text-[#c6f225] font-mono text-[10px] tracking-widest uppercase backdrop-blur-md flex items-center gap-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6f225] animate-ping"></span>
            PORTRAIT // ARCHIVE 01
          </span>
          <span className="px-2 py-0.5 rounded bg-black/60 text-[#c5c9ad] font-mono text-[9px] backdrop-blur-sm border border-white/10">
            35MM • GOLDEN HOUR
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div className="bg-[#08090B]/85 border border-white/15 px-3 py-1.5 rounded-lg backdrop-blur-md">
            <p className="text-[11px] font-mono text-white font-bold tracking-wider">JIMSON USAYAN</p>
            <p className="text-[9px] font-mono text-[#8e937a]">Studio Natural Light Study • 2025</p>
          </div>
          <span className="w-6 h-6 rounded-full bg-[#c6f225] text-[#161e00] flex items-center justify-center shadow-lg group-hover/portrait:scale-110 transition-transform">
            <span className="material-symbols-outlined text-[14px]">fullscreen</span>
          </span>
        </div>
      </div>
    </div>
  );
};
