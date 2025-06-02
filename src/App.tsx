import React, { useState, useEffect } from 'react';
import { Search, Filter, ArrowLeftRight, Shield as ShieldUser } from 'lucide-react';

// Components
import Header from './components/Header';
import FiltersSidebar from './components/FiltersSidebar';
import Footer from './components/Footer';
import MobileFilters from './components/MobileFilters';
import PromotionSlider from './components/PromotionSlider';
import CategoriesSection from './components/CategoriesSection';
import GiftCardList from './components/GiftCardList';

// Data
import {
  giftCards, categories, promotions,
  getPopularGiftCards, getFeaturedGiftCards, getNewGiftCards
} from './data/giftCardData';

const App: React.FC = () => {
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

  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.add('dark');
    // Add js class to body, mimicking original site
    document.body.classList.add('js', 'bg-night-700', 'text-day-300');
  }, []);

  const handleSearchChange = (value: string) => {
    setFilters(prev => ({ ...prev, search: value }));
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  // Get different sets of gift cards
  const popularGiftCards = getPopularGiftCards();
  const featuredGiftCards = getFeaturedGiftCards();
  const newGiftCards = getNewGiftCards();

  return (
    <div className="flex min-h-dvh flex-col bg-night-700 text-day-300">
      <Header />
      <main className="container mx-auto mt-4 mb-12 grow px-4 lg:px-8 2xl:px-12 max-w-none">
        {/* Promotion Slider */}
        <PromotionSlider promotions={promotions} />

        {/* Categories Section */}
        <CategoriesSection categories={categories} />

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
            {/* Popular Gift Cards */}
            <GiftCardList
              title="Popular Gift Cards"
              giftCards={popularGiftCards}
              showViewAll={true}
              viewAllLink="/gift-cards?sort=popular"
            />

            {/* Featured Gift Cards */}
            <GiftCardList
              title="Featured Gift Cards"
              giftCards={featuredGiftCards}
              showViewAll={true}
              viewAllLink="/gift-cards?featured=true"
            />

            {/* New Gift Cards */}
            {newGiftCards.length > 0 && (
              <GiftCardList
                title="New Gift Cards"
                giftCards={newGiftCards}
                showViewAll={true}
                viewAllLink="/gift-cards?new=true"
              />
            )}

            {/* All Gift Cards (filtered) */}
            <GiftCardList
              title="All Gift Cards"
              giftCards={giftCards}
              filters={filters}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
