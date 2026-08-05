import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  title: string;
  description: string;
  location?: string;
  tags?: string[];
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImg,
  afterImg,
  title,
  description,
  location,
  tags = []
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Interactive Canvas */}
      <div
        ref={containerRef}
        className="relative h-72 sm:h-96 w-full select-none cursor-ew-resize overflow-hidden"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Background) */}
        <img
          src={afterImg}
          alt={`After cleaning: ${title}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-emerald-600/90 text-white font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5 z-10">
          <Sparkles className="w-3.5 h-3.5" /> Clean (After)
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImg}
            alt={`Before cleaning: ${title}`}
            className="absolute inset-0 h-full max-w-none object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 bg-amber-600/90 text-white font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm z-10">
            Dirty (Before)
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize flex items-center justify-center"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="w-9 h-9 rounded-full bg-emerald-600 text-white border-2 border-white shadow-xl flex items-center justify-center -ml-0.5">
            <MoveHorizontal className="w-4 h-4 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
            {title}
          </h3>
          {location && (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              📍 {location}
            </span>
          )}
        </div>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
