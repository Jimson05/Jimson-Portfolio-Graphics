import React from 'react';

interface JimsonMonochromeHeroPortraitProps {
  className?: string;
  cursorX?: number;
  cursorY?: number;
}

export const JimsonMonochromeHeroPortrait: React.FC<JimsonMonochromeHeroPortraitProps> = ({
  className = '',
  cursorX = 0,
  cursorY = 0,
}) => {
  return (
    <div
      className={`relative w-full h-full flex items-end justify-center pointer-events-none select-none ${className}`}
      style={{
        transform: `translate3d(${(cursorX * 12).toFixed(1)}px, ${(cursorY * 8).toFixed(1)}px, 0)`,
        transition: 'transform 0.08s ease-out',
      }}
    >
      {/* High-Fidelity Monochrome / Black & White Studio Portrait of Jimson Usayan */}
      <svg
        className="w-full h-auto max-h-[580px] object-contain object-bottom drop-shadow-2xl"
        viewBox="0 0 800 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          {/* Grayscale Skin Gradient - Light coming from left window */}
          <linearGradient id="monoSkin" x1="15%" y1="25%" x2="85%" y2="85%">
            <stop offset="0%" stopColor="#f3f5f8" />
            <stop offset="30%" stopColor="#caced6" />
            <stop offset="55%" stopColor="#8d929e" />
            <stop offset="80%" stopColor="#434752" />
            <stop offset="100%" stopColor="#1a1c22" />
          </linearGradient>

          {/* Grayscale Hair Shimmer Gradient */}
          <linearGradient id="monoHair" x1="10%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#c2c7d2" />
            <stop offset="25%" stopColor="#585c67" />
            <stop offset="60%" stopColor="#22242a" />
            <stop offset="100%" stopColor="#0d0e12" />
          </linearGradient>

          {/* Sweatshirt Charcoal Gradient */}
          <linearGradient id="monoSweater" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#282a32" />
            <stop offset="40%" stopColor="#15171d" />
            <stop offset="100%" stopColor="#08090b" />
          </linearGradient>

          {/* Soft Windowpane Shadow Gradient */}
          <linearGradient id="windowShadowMono" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f1014" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1e2027" stopOpacity="0.55" />
          </linearGradient>

          {/* Edge Vignette / Feather Mask to blend into background */}
          <radialGradient id="edgeFeather" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#08090b" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g id="portraitSubject">
          {/* Crewneck Sweatshirt Shoulders & Torso */}
          <path
            d="M30 900 C70 730, 200 640, 410 625 C620 625, 740 730, 780 900 Z"
            fill="url(#monoSweater)"
          />

          {/* Crewneck Collar */}
          <path
            d="M320 625 C360 670, 470 670, 510 625 C480 685, 350 685, 320 625 Z"
            fill="#0f1013"
            stroke="#3a3d47"
            strokeWidth="3.5"
          />
          {/* Triangular Sweatshirt Stitch V at Neckline */}
          <path d="M400 675 L415 715 L430 675" fill="none" stroke="#2e313a" strokeWidth="2.5" />

          {/* Neck Contour */}
          <path
            d="M340 500 L335 635 C380 655, 460 655, 500 635 L490 500 Z"
            fill="url(#monoSkin)"
          />
          {/* Deep Neck Shadow under Jawline */}
          <path
            d="M335 510 C370 575, 465 570, 500 510 L500 550 C455 595, 375 595, 335 550 Z"
            fill="#121317"
            opacity="0.8"
          />

          {/* Head & Face Contour */}
          <path
            d="M260 350 C260 260, 320 180, 420 180 C520 180, 580 260, 575 360 C570 455, 515 545, 415 555 C340 560, 275 480, 260 350 Z"
            fill="url(#monoSkin)"
          />

          {/* Left Ear (facing window light) */}
          <path
            d="M270 330 C245 330, 235 360, 243 390 C250 420, 273 425, 280 400 Z"
            fill="#b8bcc6"
          />
          <path d="M255 355 C250 370, 255 395, 265 395" stroke="#686c77" strokeWidth="3" fill="none" />

          {/* Right Ear (in subtle shadow) */}
          <path
            d="M560 345 C580 345, 592 370, 584 400 C576 428, 560 430, 552 410 Z"
            fill="#7b808d"
          />
          <path d="M570 365 C575 380, 571 400, 563 400" stroke="#373942" strokeWidth="3" fill="none" />

          {/* Diagonal Windowpane Shadow Slashing Across Face (Signature of the original photo) */}
          <path
            d="M245 285 L575 425 L570 480 L255 355 Z"
            fill="url(#windowShadowMono)"
          />
          <path
            d="M250 385 L560 520 L545 555 L260 425 Z"
            fill="#16181e"
            opacity="0.65"
          />

          {/* Eyebrows */}
          <path
            d="M300 305 C320 295, 350 300, 365 310"
            stroke="#16181e"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M410 310 C430 300, 465 295, 490 310"
            stroke="#101115"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Left Eye (gazing softly left toward the typography) */}
          <path d="M305 338 C320 328, 350 328, 365 340" stroke="#25272e" strokeWidth="3.5" fill="none" />
          <ellipse cx="335" cy="341" rx="14" ry="10" fill="#14151a" />
          <circle cx="330" cy="338" r="4.5" fill="#ffffff" />
          <circle cx="337" cy="341" r="2" fill="#caced6" />
          <path d="M310 344 C325 351, 350 351, 363 344" stroke="#50535e" strokeWidth="2.5" fill="none" />

          {/* Right Eye */}
          <path d="M420 341 C435 330, 465 330, 480 342" stroke="#1d1e24" strokeWidth="3.5" fill="none" />
          <ellipse cx="450" cy="344" rx="13" ry="9" fill="#101115" />
          <circle cx="445" cy="341" r="4" fill="#ffffff" />
          <path d="M425 348 C440 354, 460 354, 475 348" stroke="#3e414b" strokeWidth="2" fill="none" />

          {/* Nose with crisp highlight along the bridge */}
          <path
            d="M375 315 L365 395 C355 415, 375 430, 390 427 C400 425, 405 415, 400 395 Z"
            fill="#a2a7b3"
          />
          <path d="M360 415 C350 420, 360 430, 370 429" stroke="#3b3e47" strokeWidth="2.5" fill="none" />
          <path d="M410 415 C420 420, 410 430, 400 429" stroke="#282a32" strokeWidth="2.5" fill="none" />
          <ellipse cx="380" cy="420" rx="7" ry="4.5" fill="#ffffff" opacity="0.85" />

          {/* Gentle Smile & Lips */}
          <path
            d="M340 475 C370 470, 410 470, 440 477"
            stroke="#2f3139"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path d="M350 477 C375 490, 405 490, 430 479" fill="#686c77" />
          <path
            d="M360 493 C380 503, 400 503, 420 493"
            stroke="#434650"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Delicate Round Silver/Steel Wireframe Spectacles */}
          <g id="monoGlasses" stroke="#ffffff" strokeWidth="4.5" fill="none">
            {/* Left Round Frame */}
            <circle cx="333" cy="341" r="48" stroke="#f1f3f7" strokeWidth="4" />
            <circle cx="333" cy="341" r="46" stroke="#ffffff" strokeWidth="1.5" opacity="0.75" />
            {/* Right Round Frame */}
            <circle cx="453" cy="346" r="46" stroke="#d5d9e2" strokeWidth="4" />
            <circle cx="453" cy="346" r="44" stroke="#ffffff" strokeWidth="1.5" opacity="0.65" />
            {/* Center Bridge */}
            <path d="M381 338 C390 332, 397 332, 407 339" strokeWidth="3.5" stroke="#f1f3f7" />
            {/* Left Arm to Ear */}
            <path d="M285 338 L240 351" strokeWidth="3.5" stroke="#caced6" />
            {/* Right Arm to Ear */}
            <path d="M499 344 L570 361" strokeWidth="3.5" stroke="#8d929e" />
            {/* Specular Glint Highlight on Left Lens */}
            <path
              d="M300 316 Q340 306, 365 331"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.85"
            />
          </g>

          {/* Thick Curly Tousled Hair */}
          <g id="monoCurlyHair" fill="url(#monoHair)">
            {/* Hair Base Volume */}
            <path
              d="M245 295 C215 255, 225 195, 255 145 C295 85, 375 55, 455 60 C535 65, 605 105, 625 175 C645 245, 615 315, 590 345 C575 285, 565 245, 535 215 C485 165, 355 165, 295 215 C255 245, 250 275, 245 295 Z"
            />
            {/* Defined Hair Curl Clusters */}
            <circle cx="345" cy="95" r="45" />
            <circle cx="405" cy="80" r="50" />
            <circle cx="470" cy="90" r="48" />
            <circle cx="525" cy="120" r="46" />
            <circle cx="290" cy="125" r="42" />

            {/* Left Rim Light Curls */}
            <circle cx="240" cy="190" r="38" fill="#c0c5d0" opacity="0.9" />
            <circle cx="230" cy="250" r="36" fill="#9da2af" opacity="0.85" />
            <circle cx="240" cy="300" r="30" fill="#757985" opacity="0.8" />
            <path d="M225 175 Q250 200, 220 230 Q250 255, 225 285" stroke="#ffffff" strokeWidth="5.5" fill="none" strokeLinecap="round" />

            {/* Forehead Drooping Curls */}
            <path d="M295 195 C315 225, 305 260, 325 270 C340 255, 350 220, 335 195 Z" fill="#2d3038" />
            <path d="M345 185 C365 225, 370 260, 390 265 C400 245, 395 210, 375 185 Z" fill="#22242a" />
            <path d="M400 185 C420 220, 430 250, 450 250 C455 230, 445 200, 430 180 Z" fill="#1a1c22" />
            <path d="M455 195 C480 225, 495 255, 510 245 C515 220, 500 195, 480 180 Z" fill="#14151a" />

            {/* Crisp Silver/White Specular Strands */}
            <path d="M315 115 Q355 95, 375 130" stroke="#f1f3f7" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M385 90 Q425 75, 445 110" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M455 100 Q495 85, 510 120" stroke="#d5d9e2" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
};
