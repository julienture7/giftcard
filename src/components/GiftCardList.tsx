import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import GiftCardItem from './GiftCardItem';
import { GiftCard } from '../data/giftCardData';

interface GiftCardListProps {
  title: string;
  subtitle?: string;
  giftCards: GiftCard[];
  showViewAll?: boolean;
  viewAllLink?: string;
  filters?: {
    search?: string;
    sort?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    minCashback?: number;
    currencies?: string[];
  };
  layout?: 'grid' | 'carousel';
  maxItems?: number;
  className?: string;
}

const GiftCardList: React.FC<GiftCardListProps> = ({
  title,
  subtitle,
  giftCards,
  showViewAll = false,
  viewAllLink = '/',
  filters,
  layout = 'grid',
  maxItems,
  className = '',
}) => {
  const [filteredCards, setFilteredCards] = useState<GiftCard[]>([]);
  const [visibleCards, setVisibleCards] = useState<GiftCard[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Filter gift cards based on provided filters
  useEffect(() => {
    let result = [...giftCards];

    if (filters) {
      // Filter by search term
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        result = result.filter(
          card =>
            card.name.toLowerCase().includes(searchTerm) ||
            card.description.toLowerCase().includes(searchTerm)
        );
      }

      // Filter by category
      if (filters.category && filters.category !== '') {
        result = result.filter(card => card.category.id === filters.category);
      }

      // Filter by price range
      if (filters.minPrice !== undefined) {
        result = result.filter(card => card.priceRange.max >= filters.minPrice!);
      }
      if (filters.maxPrice !== undefined) {
        result = result.filter(card => card.priceRange.min <= filters.maxPrice!);
      }

      // Filter by minimum cashback
      if (filters.minCashback !== undefined) {
        result = result.filter(card => card.cashback >= filters.minCashback!);
      }

      // Filter by accepted currencies
      if (filters.currencies && filters.currencies.length > 0) {
        result = result.filter(card =>
          filters.currencies!.some(currency => card.currencies.includes(currency))
        );
      }

      // Sort results
      if (filters.sort) {
        switch (filters.sort) {
          case 'popular':
            result.sort((a, b) => b.popularity - a.popularity);
            break;
          case 'price-low':
            result.sort((a, b) => a.priceRange.min - b.priceRange.min);
            break;
          case 'price-high':
            result.sort((a, b) => b.priceRange.max - a.priceRange.max);
            break;
          case 'rating':
            result.sort((a, b) => b.rating - a.rating);
            break;
          case 'cashback':
            result.sort((a, b) => b.cashback - a.cashback);
            break;
          case 'newest':
            result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            break;
          default:
            break;
        }
      }
    }

    setFilteredCards(result);
  }, [giftCards, filters]);

  // Limit the number of visible cards if maxItems is specified
  useEffect(() => {
    if (maxItems && filteredCards.length > maxItems) {
      setVisibleCards(filteredCards.slice(0, maxItems));
    } else {
      setVisibleCards(filteredCards);
    }
  }, [filteredCards, maxItems]);

  // Handle carousel scroll
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollLeft - scrollAmount)
        : Math.min(scrollWidth - clientWidth, scrollLeft + scrollAmount);
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      
      setScrollPosition(newPosition);
    }
  };

  // Update arrow visibility based on scroll position
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Add scroll event listener for carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel && layout === 'carousel') {
      carousel.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      
      return () => {
        carousel.removeEventListener('scroll', handleScroll);
      };
    }
  }, [layout, visibleCards]);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle navigation to gift card detail
  const handleCardClick = (id: string) => {
    window.history.pushState({}, '', `/gift-cards/${id}`);
    window.dispatchEvent(new Event('popstate'));
  };

  // Handle view all click
  const handleViewAllClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', viewAllLink);
    window.dispatchEvent(new Event('popstate'));
  };

  if (filteredCards.length === 0) {
    return null;
  }

  return (
    <div 
      ref={sectionRef}
      className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white group flex items-center">
            {title}
            <span className="w-2 h-2 ml-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </h2>
          {subtitle && <p className="text-day-400 mt-1">{subtitle}</p>}
        </div>
        
        {showViewAll && viewAllLink && (
          <a
            href={viewAllLink}
            onClick={handleViewAllClick}
            className="flex items-center text-green-500 hover:text-green-400 font-medium transition-colors group"
          >
            View All
            <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>

      {/* Carousel Layout */}
      {layout === 'carousel' && (
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-night-800/90 hover:bg-night-700 text-day-300 hover:text-white p-2 rounded-full shadow-lg transform -translate-x-1/2 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {visibleCards.map((card, index) => (
              <div 
                key={card.id}
                className="min-w-[280px] sm:min-w-[320px] pr-4 snap-start"
                style={{ 
                  animation: `fadeSlideIn 0.5s ease-out ${index * 0.1}s both` 
                }}
              >
                <GiftCardItem giftCard={card} onClick={() => handleCardClick(card.id)} />
              </div>
            ))}
          </div>
          
          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-night-800/90 hover:bg-night-700 text-day-300 hover:text-white p-2 rounded-full shadow-lg transform translate-x-1/2 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}

      {/* Grid Layout */}
      {layout === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleCards.map((card, index) => (
            <div 
              key={card.id}
              style={{ 
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` 
              }}
            >
              <GiftCardItem giftCard={card} onClick={() => handleCardClick(card.id)} />
            </div>
          ))}
        </div>
      )}

      {/* "View All" button for mobile (shown at bottom for grid layout) */}
      {layout === 'grid' && showViewAll && viewAllLink && visibleCards.length >= 4 && (
        <div className="mt-8 text-center md:hidden">
          <a
            href={viewAllLink}
            onClick={handleViewAllClick}
            className="inline-flex items-center justify-center px-6 py-3 bg-night-800 hover:bg-night-700 text-green-500 font-medium rounded-lg transition-colors"
          >
            View All {title}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default GiftCardList;
