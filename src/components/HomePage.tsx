import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, ArrowRight, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

// Components
import FiltersSidebar from './FiltersSidebar';
import MobileFilters from './MobileFilters';
import PromotionSlider from './PromotionSlider';
import CategoriesSection from './CategoriesSection';
import GiftCardList from './GiftCardList';

// Data
import {
  giftCards, categories, promotions,
  getPopularGiftCards, getFeaturedGiftCards, getNewGiftCards,
  getGiftCardsByCategory, getGiftCardsWithCashback
} from '../data/giftCardData';

const HomePage: React.FC = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    sort: 'popular',
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    minCashback: 0,
    currencies: []
  });
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const popularRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add scroll listener for animations
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (value: string) => {
    setFilters(prev => ({ ...prev, search: value }));
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearchQuery.trim()) {
      setFilters(prev => ({ ...prev, search: heroSearchQuery }));
      // Scroll to gift card listings
      popularRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    // Navigate to category page
    window.history.pushState({}, '', `/category/${categories.find(c => c.id === categoryId)?.slug}`);
    window.dispatchEvent(new Event('popstate'));
  };

  // Get different sets of gift cards
  const popularGiftCards = getPopularGiftCards();
  const featuredGiftCards = getFeaturedGiftCards();
  const newGiftCards = getNewGiftCards();
  const cashbackGiftCards = getGiftCardsWithCashback();

  // Get a few cards from popular categories for the "Browse by Category" section
  const gamingCards = getGiftCardsByCategory('gaming').slice(0, 4);
  const shoppingCards = getGiftCardsByCategory('shopping').slice(0, 4);
  const entertainmentCards = getGiftCardsByCategory('entertainment').slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className={`relative bg-gradient-to-br from-night-900 via-night-800 to-night-900 border-b border-night-600 transition-all duration-500 ${
          isScrolled ? 'pt-24 pb-10' : 'pt-32 pb-16'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 2xl:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Privacy-First <span className="text-green-500">Gift Cards</span>
            </h1>
            <p className="text-xl text-day-300 mb-8 max-w-2xl mx-auto">
              Purchase gift cards from hundreds of popular brands using cryptocurrency. 
              No KYC, no tracking, just privacy.
            </p>
            
            {/* Hero Search */}
            <form onSubmit={handleHeroSearch} className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for gift cards (Amazon, Netflix, Steam...)"
                className="w-full px-5 py-4 pl-12 bg-night-800/90 border border-night-600 rounded-xl text-day-300 placeholder:text-day-600 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-xl"
                value={heroSearchQuery}
                onChange={(e) => setHeroSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-day-500 h-5 w-5" />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Search
              </button>
            </form>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-day-400 text-sm">Gift Cards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-day-400 text-sm">Cryptocurrencies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">0</div>
                <div className="text-day-400 text-sm">KYC Required</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-day-400 text-sm">Privacy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto mt-4 mb-12 grow px-4 lg:px-8 2xl:px-12 max-w-none">
        {/* Promotion Slider - Carousel Layout */}
        <div className="mb-16 mt-8">
          <PromotionSlider promotions={promotions} carouselMode={true} />
        </div>

        {/* Categories Section - Enhanced Visual Design */}
        <div ref={categoriesRef} className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white group flex items-center">
              Browse by Category
              <span className="w-2 h-2 ml-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </h2>
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="flex items-center text-green-500 hover:text-green-400 font-medium transition-colors"
            >
              {showAllCategories ? 'Show Less' : 'Show All'}
              {showAllCategories ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>
          </div>
          
          <CategoriesSection 
            categories={showAllCategories ? categories : categories.slice(0, 8)} 
            onCategoryClick={handleCategoryClick}
            enhanced={true}
          />
        </div>

        {/* Mobile Search and Filter Button */}
        <div className="flex items-stretch sm:hidden mb-6">
          <div className="min-w-0 space-y-1 mr-4 flex-1">
            <div className="relative">
              <input
                placeholder="Search gift cards"
                className="block placeholder:text-sm placeholder:text-day-600 text-day-100 w-full min-w-0 rounded-lg border px-3 leading-none h-9 pl-10 bg-night-800 border-night-500"
                name="q"
                value={filters.search}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              <Search className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-day-500 size-4.5" />
            </div>
          </div>

          <button
            onClick={() => setShowMobileFilters(true)}
            className="shrink-0 h-9 px-4 text-sm border-night-500 bg-night-800 hover:bg-night-900 hover:text-day-200 text-white/50 focus:bg-night-500 focus:text-white focus:ring-white max-2xs:w-9 max-2xs:px-0 rounded-lg border"
          >
            <Filter className="shrink-0 size-4 max-2xs:mr-0 mr-2" />
            <span className="text-left whitespace-nowrap font-medium max-2xs:hidden">Filters</span>
          </button>

          <MobileFilters
            isOpen={showMobileFilters}
            onClose={() => setShowMobileFilters(false)}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden sm:block sm:w-64 shrink-0">
            <FiltersSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Gift Card Lists */}
          <div className="flex-1">
            {/* Popular Gift Cards - Reference for scroll */}
            <div ref={popularRef}>
              <GiftCardList
                title="Popular Gift Cards"
                subtitle="Most purchased gift cards by our users"
                giftCards={popularGiftCards}
                showViewAll={true}
                viewAllLink="/gift-cards?sort=popular"
                layout="carousel"
              />
            </div>

            {/* Featured Gift Cards - Reference for scroll */}
            <div ref={featuredRef}>
              <GiftCardList
                title="Featured Gift Cards"
                subtitle="Handpicked selections with special offers"
                giftCards={featuredGiftCards}
                showViewAll={true}
                viewAllLink="/gift-cards?featured=true"
                layout="carousel"
              />
            </div>

            {/* New Gift Cards */}
            {newGiftCards.length > 0 && (
              <GiftCardList
                title="New Gift Cards"
                subtitle="Recently added to our collection"
                giftCards={newGiftCards}
                showViewAll={true}
                viewAllLink="/gift-cards?new=true"
                layout="carousel"
              />
            )}

            {/* Cashback Gift Cards */}
            <GiftCardList
              title="Best Cashback Offers"
              subtitle="Earn Bitcoin rewards with these gift cards"
              giftCards={cashbackGiftCards.slice(0, 8)}
              showViewAll={true}
              viewAllLink="/gift-cards?sort=cashback"
              layout="carousel"
            />

            {/* Gaming Gift Cards */}
            <GiftCardList
              title="Gaming Gift Cards"
              giftCards={gamingCards}
              showViewAll={true}
              viewAllLink="/category/gaming"
            />

            {/* Shopping Gift Cards */}
            <GiftCardList
              title="Shopping Gift Cards"
              giftCards={shoppingCards}
              showViewAll={true}
              viewAllLink="/category/shopping"
            />

            {/* Entertainment Gift Cards */}
            <GiftCardList
              title="Entertainment Gift Cards"
              giftCards={entertainmentCards}
              showViewAll={true}
              viewAllLink="/category/entertainment"
            />

            {/* All Gift Cards (filtered) */}
            <GiftCardList
              title="All Gift Cards"
              giftCards={giftCards}
              filters={filters}
            />
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500/20 to-green-700/20 border border-green-500/30 rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Shop with Privacy?</h2>
          <p className="text-xl text-day-300 mb-8 max-w-2xl mx-auto">
            Join thousands of privacy-conscious shoppers who use our gift cards to make everyday purchases without surveillance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/about"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/about');
                window.dispatchEvent(new Event('popstate'));
              }}
            >
              Learn More
            </a>
            <a 
              href="/faq"
              className="px-6 py-3 bg-night-800 hover:bg-night-700 text-day-300 hover:text-white border border-night-600 rounded-lg font-medium transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/faq');
                window.dispatchEvent(new Event('popstate'));
              }}
            >
              View FAQ
            </a>
          </div>
        </div>
      </main>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default HomePage;
