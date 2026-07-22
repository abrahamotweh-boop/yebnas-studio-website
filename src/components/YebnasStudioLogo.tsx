import React from 'react';

interface LogoProps {
  /**
   * Layout type:
   * - 'full': Emblem mark + Yebnas Studio text + Tagline (with diamond divider)
   * - 'header': Emblem mark + Yebnas Studio text (ideal for navbars)
   * - 'mark': Only the YS emblem mark icon
   */
  variant?: 'full' | 'header' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const YebnasStudioLogo: React.FC<LogoProps> = ({
  variant = 'header',
  size = 'md',
  className = '',
  showTagline = false
}) => {
  // Dimension mappings
  const markSize = {
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80
  }[size];

  const textSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl'
  }[size];

  const taglineSize = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.25em]',
    lg: 'text-sm tracking-[0.3em]',
    xl: 'text-base tracking-[0.35em]'
  }[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* SVG YS Mark Emblem */}
        <div className="relative shrink-0 flex items-center justify-center" style={{ width: markSize, height: markSize }}>
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ysGradientPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>

              <linearGradient id="ysGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>

              <filter id="markShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.12" />
              </filter>
            </defs>

            {/* Circular Halo Arc */}
            <path
              d="M 60 40 A 62 62 0 1 1 80 156"
              stroke="url(#ysGradientPrimary)"
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-90"
            />

            {/* Tech Pixel Grid Clusters at top right */}
            <rect x="124" y="38" width="8" height="8" fill="#8B5CF6" rx="1.5" />
            <rect x="136" y="32" width="7" height="7" fill="#A855F7" rx="1.5" />
            <rect x="145" y="42" width="6" height="6" fill="#6366F1" rx="1" />
            <rect x="132" y="50" width="9" height="9" fill="#3B82F6" rx="1.5" />

            {/* Main 'Y' Mark */}
            <g className="fill-slate-900 dark:fill-white transition-colors duration-200">
              {/* Left Wing & Stem */}
              <path d="M 45 52 L 86 52 L 118 108 L 118 142 L 95 142 L 95 114 L 62 66 Z" />
              {/* Right Wing top cut */}
              <path d="M 136 52 L 105 52 L 94 68 L 122 52 Z" />
            </g>

            {/* Main 'S' Mark (Sweeping Purple-to-Blue Gradient) */}
            <g filter="url(#markShadow)">
              <path
                d="M 112 66 C 142 66 166 76 166 92 C 166 108 140 114 116 119 C 90 124 80 129 80 139 C 80 152 104 158 138 158 C 153 158 168 153 178 145 L 166 130 C 156 137 144 142 132 142 C 112 142 102 137 102 132 C 102 127 114 122 136 117 C 162 112 188 103 188 84 C 188 64 160 52 118 52 Z"
                fill="url(#ysGradientPrimary)"
              />
            </g>
          </svg>
        </div>

        {/* Brand Text Header */}
        {variant !== 'mark' && (
          <div className="flex items-center gap-1.5 font-extrabold tracking-tight">
            <span className={`font-sans ${textSize} text-slate-900 dark:text-white transition-colors`}>
              Yebnas
            </span>
            <span className={`font-sans ${textSize} text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400`}>
              Studio
            </span>
          </div>
        )}
      </div>

      {/* Full Logo Sub-Tagline & Sparkle Divider */}
      {(variant === 'full' || showTagline) && (
        <div className="w-full mt-3 flex flex-col items-center">
          {/* Thin line with diamond star in center */}
          <div className="w-full flex items-center justify-center my-1.5 opacity-80">
            <div className="h-[1px] bg-slate-300 dark:bg-slate-700 flex-1 max-w-[120px]"></div>
            <div className="mx-2 text-purple-600 dark:text-purple-400 text-xs">
              ✦
            </div>
            <div className="h-[1px] bg-slate-300 dark:bg-slate-700 flex-1 max-w-[120px]"></div>
          </div>

          {/* Tagline */}
          <span className={`font-semibold uppercase text-slate-600 dark:text-slate-400 ${taglineSize}`}>
            INNOVATE • CREATE • INSPIRE
          </span>
        </div>
      )}
    </div>
  );
};

export default YebnasStudioLogo;
