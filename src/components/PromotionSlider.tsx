import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Promotion } from '../data/giftCardData';

interface PromotionSliderProps {
  promotions: Promotion[];
  carouselMode?: boolean;
  autoRotateInterval?: number; // in milliseconds
  className?: string;
}

const PromotionSlider: React.FC<PromotionSliderProps> = ({
  promotions,
  carouselMode = false,
  autoRotateInterval = 5000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Ensure currentIndex is within bounds when promotions change
  useEffect(() => {
    if (currentIndex >= promotions.length) {
      setCurrentIndex(0);
    }
  }, [promotions, currentIndex]);

  // Auto-rotation effect
  useEffect(() => {
    if (carouselMode && !isHovered && !isFocused && promotions.length > 1) {
      autoRotateTimerRef.current = setTimeout(() => {
        goToNext();
      }, autoRotateInterval);
    }

    return () => {
      if (autoRotateTimerRef.current) {
        clearTimeout(autoRotateTimerRef.current);
      }
    };
  }, [currentIndex, isHovered, isFocused, carouselMode, promotions.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFocused) return;

      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocused]);

  // Navigation functions
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % promotions.length);
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500); // Match transition duration
  };

  // Touch event handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Detect swipe (with a threshold)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  // Mouse event handlers for pause on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Focus event handlers
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Render grid layout
  if (!carouselMode) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {promotions.map((promotion, index) => (
          <PromotionCard key={promotion.id} promotion={promotion} index={index} />
        ))}
      </div>
    );
  }

  // Render carousel layout
  return (
    <div 
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={sliderRef}
      tabIndex={0}
      role="region"
      aria-label="Promotion Carousel"
    >
      {/* Carousel Container */}
      <div 
        className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div 
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {promotions.map((promotion, index) => (
            <div 
              key={promotion.id} 
              className="min-w-full h-full flex-shrink-0"
              aria-hidden={index !== currentIndex}
            >
              <PromotionCard promotion={promotion} index={index} isActive={index === currentIndex} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {promotions.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-night-800/80 hover:bg-night-700 text-day-300 hover:text-white p-2 rounded-full shadow-lg transition-all"
              aria-label="Previous promotion"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-night-800/80 hover:bg-night-700 text-day-300 hover:text-white p-2 rounded-full shadow-lg transition-all"
              aria-label="Next promotion"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Navigation Dots */}
      {promotions.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-green-500 w-6' 
                  : 'bg-night-600 hover:bg-night-500'
              }`}
              aria-label={`Go to promotion ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}

      {/* Pause/Play Indicator (only visible when hovered) */}
      {isHovered && promotions.length > 1 && (
        <div className="absolute bottom-3 right-3 bg-night-800/80 text-day-300 text-xs px-2 py-1 rounded-md">
          Paused
        </div>
      )}
    </div>
  );
};

// Promotion Card Component
const PromotionCard: React.FC<{ 
  promotion: Promotion; 
  index: number;
  isActive?: boolean;
}> = ({ promotion, index, isActive = true }) => {
  const { title, description, image, link, buttonText, backgroundColor, textColor } = promotion;
  
  // Handle navigation to promotion link
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState({}, '', link);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div 
      className={`relative h-full rounded-xl overflow-hidden transition-all duration-500 ${
        backgroundColor || 'bg-night-800'
      } ${isActive ? 'opacity-100 scale-100' : 'opacity-90 scale-95'}`}
      style={{ 
        animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` 
      }}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night-900/80 to-night-800/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
        <div>
          <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${textColor || 'text-white'}`}>
            {title}
          </h3>
          <p className="text-day-300 text-sm sm:text-base mb-4 max-w-md">
            {description}
          </p>
        </div>
        
        <div>
          <a
            href={link}
            onClick={handleClick}
            className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm sm:text-base"
          >
            {buttonText || 'Learn More'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromotionSlider;
