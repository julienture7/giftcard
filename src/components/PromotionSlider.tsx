import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Promotion } from '../data/giftCardData';

interface PromotionSliderProps {
  promotions: Promotion[];
}

const PromotionSlider: React.FC<PromotionSliderProps> = ({ promotions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [promotions.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? promotions.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-night-900 mb-8">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {promotions.map((promotion, index) => (
          <div
            key={promotion.id}
            className="relative w-full flex-shrink-0 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="p-6 md:p-10 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{promotion.title}</h2>
                <p className="text-day-400 text-lg mb-6">{promotion.description}</p>
                <a
                  href={promotion.link}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {promotion.buttonText}
                </a>
              </div>
              <div className="flex-1 flex justify-center p-6">
                <img
                  src={promotion.image}
                  alt={promotion.title}
                  className="max-h-48 md:max-h-64 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-night-800/70 text-day-300 hover:bg-night-800 hover:text-day-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-night-800/70 text-day-300 hover:bg-night-800 hover:text-day-100"
        aria-label="Next slide"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`size-2 rounded-full ${
              index === currentSlide ? 'bg-primary' : 'bg-day-600/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionSlider;
