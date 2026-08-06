import React from 'react';

interface CyseraLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export const CyseraLogo: React.FC<CyseraLogoProps> = ({
  className = '',
  variant = 'dark'
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Custom Logo Image */}
      <div className={`relative shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105 ${
        isDark ? 'p-1 rounded-xl bg-slate-900/60 border border-slate-800/80' : 'p-0.5'
      }`}>
        <img
          src="/newlogo.png"
          alt="CYSERA Cleaning Services Official Logo"
          className="h-10 sm:h-12 w-auto object-contain drop-shadow-md"
        />
      </div>
    </div>
  );
};
