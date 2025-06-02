import React, { useState, useEffect } from 'react';
import { Filter, ArrowUpDown, ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import { 
  getGiftCardsByCategory, 
  getCategoryBySlug, 
  GiftCard, 
  Category 
} from '../data/giftCardData';
import GiftCardItem from './GiftCardItem';

interface CategoryPageProps {
  slug: string;
}

type SortOption = 'popular' | 'price-low' | 'price-high' | 'newest' | 'cashback';

const CategoryPage: React.FC<CategoryPageProps> = ({ slug }) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [giftCards, setGiftCards] = useState<GiftCard[]>([]);
  const [featuredCards, setFeaturedCards] = useState<GiftCard[]>([]);
  const [filteredCards, setFilteredCards] = useState<GiftCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState<SortOption>('popular');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);
  const [minCashback, setMinCashback] = useState(0);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  
  // Available currencies for filtering
  const availableCurrencies = ['btc', 'btc-ln', 'xmr'];
  const currencyLabels: Record<string, string> = {
    'btc': 'Bitcoin',
    'btc-ln': 'Lightning',
    'xmr': 'Monero'
  };

  // Load category and gift cards
  useEffect(() => {
    if (!slug) return;
    
    const categoryData = getCategoryBySlug(slug);
    if (categoryData) {
      setCategory(categoryData);
      const allCards = getGiftCardsByCategory(categoryData.id);
      
      // Separate featured cards
      const featured = allCards.filter(card => card.featured);
      const nonFeatured = allCards.filter(card => !card.featured);
      
      setGiftCards(nonFeatured);
      setFeaturedCards(featured);
      setFilteredCards(nonFeatured);
    }
    
    setLoading(false);
  }, [slug]);

  // Apply filters and sorting
  useEffect(() => {
    if (!giftCards.length) return;
    
    let filtered = [...giftCards];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(card => 
        card.name.toLowerCase().includes(query) || 
        card.description.toLowerCase().includes(query)
      );
    }
    
    // Apply price range filter
    filtered = filtered.filter(card => 
      card.priceRange.min <= priceRange[1] && 
      card.priceRange.max >= priceRange[0]
    );
    
    // Apply currency filter
    if (selectedCurrencies.length > 0) {
      filtered = filtered.filter(card => 
        selectedCurrencies.some(currency => card.currencies.includes(currency))
      );
    }
    
    // Apply cashback filter
    if (minCashback > 0) {
      filtered = filtered.filter(card => card.cashback >= minCashback);
    }
    
    // Apply featured only filter
    if (showFeaturedOnly) {
      filtered = filtered.filter(card => card.featured);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'popular':
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.priceRange.min - b.priceRange.min);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.priceRange.max - a.priceRange.max);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'cashback':
        filtered.sort((a, b) => b.cashback - a.cashback);
        break;
    }
    
    setFilteredCards(filtered);
  }, [giftCards, searchQuery, priceRange, selectedCurrencies, minCashback, showFeaturedOnly, sortOption]);

  // Toggle currency selection
  const toggleCurrency = (currency: string) => {
    setSelectedCurrencies(prev => 
      prev.includes(currency) 
        ? prev.filter(c => c !== currency) 
        : [...prev, currency]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 1000]);
    setSelectedCurrencies([]);
    setMinCashback(0);
    setShowFeaturedOnly(false);
    setSortOption('popular');
  };

  // Get sort option label
  const getSortLabel = (option: SortOption): string => {
    switch (option) {
      case 'popular': return 'Most Popular';
      case 'price-low': return 'Price: Low to High';
      case 'price-high': return 'Price: High to Low';
      case 'newest': return 'Newest First';
      case 'cashback': return 'Highest Cashback';
    }
  };

  // Handle navigation to gift card detail
  const handleCardClick = (id: string) => {
    window.history.pushState({}, '', `/gift-cards/${id}`);
    window.dispatchEvent(new Event('popstate'));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Category Not Found</h2>
        <p className="text-day-300 mb-6">The category you're looking for doesn't exist.</p>
        <button 
          onClick={() => {
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new Event('popstate'));
          }}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const allCardsEmpty = filteredCards.length === 0 && featuredCards.length === 0;
  const filteredCardsEmpty = filteredCards.length === 0 && featuredCards.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <span className="text-green-500 mr-3">{category.icon}</span>
          <h1 className="text-3xl font-bold text-white">{category.name} Gift Cards</h1>
        </div>
        <p className="text-day-300 max-w-3xl">{category.description}</p>
      </div>

      {/* Filters and Sort Bar */}
      <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 bg-night-800 border border-night-600 rounded-lg text-day-300 hover:bg-night-700 transition-colors"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
            {showFilters ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortOptions(!showSortOptions)}
              className="flex items-center px-4 py-2 bg-night-800 border border-night-600 rounded-lg text-day-300 hover:bg-night-700 transition-colors"
            >
              <ArrowUpDown className="mr-2 h-4 w-4" />
              {getSortLabel(sortOption)}
              {showSortOptions ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </button>

            {showSortOptions && (
              <div className="absolute z-10 mt-2 w-56 bg-night-800 border border-night-600 rounded-lg shadow-lg py-2">
                {(['popular', 'price-low', 'price-high', 'newest', 'cashback'] as SortOption[]).map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortOption(option);
                      setShowSortOptions(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-night-700 transition-colors ${
                      sortOption === option ? 'text-green-500' : 'text-day-300'
                    }`}
                  >
                    {getSortLabel(option)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="relative flex-grow md:max-w-xs">
            <input
              type="text"
              placeholder="Search in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-night-800 border border-night-600 rounded-lg text-day-300 placeholder:text-day-600 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-day-500 h-4 w-4" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-day-500 hover:text-day-300"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Reset Filters Button */}
        <button
          onClick={resetFilters}
          className="px-4 py-2 text-day-400 hover:text-white transition-colors"
        >
          Reset Filters
        </button>
      </div>

      {/* Expanded Filters Panel */}
      {showFilters && (
        <div className="mb-8 p-6 bg-night-800 border border-night-600 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Price Range Filter */}
            <div>
              <h3 className="text-white font-medium mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-day-400 text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="25"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full accent-green-500"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="25"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-green-500"
                />
              </div>
            </div>

            {/* Payment Methods Filter */}
            <div>
              <h3 className="text-white font-medium mb-3">Payment Methods</h3>
              <div className="space-y-2">
                {availableCurrencies.map((currency) => (
                  <label key={currency} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCurrencies.includes(currency)}
                      onChange={() => toggleCurrency(currency)}
                      className="mr-2 accent-green-500 h-4 w-4"
                    />
                    <span className="text-day-300">{currencyLabels[currency]}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Cashback Filter */}
            <div>
              <h3 className="text-white font-medium mb-3">Minimum Cashback</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-day-400 text-sm">
                  <span>0%</span>
                  <span>{minCashback}%+</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={minCashback}
                  onChange={(e) => setMinCashback(parseInt(e.target.value))}
                  className="w-full accent-green-500"
                />
              </div>
            </div>

            {/* Featured Filter */}
            <div>
              <h3 className="text-white font-medium mb-3">Other Filters</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showFeaturedOnly}
                    onChange={() => setShowFeaturedOnly(!showFeaturedOnly)}
                    className="mr-2 accent-green-500 h-4 w-4"
                  />
                  <span className="text-day-300">Featured Cards Only</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {allCardsEmpty && (
        <div className="py-12 text-center">
          <h2 className="text-xl font-bold text-white mb-4">No Gift Cards Found</h2>
          <p className="text-day-300 mb-6">
            There are no gift cards available in this category at the moment.
          </p>
          <button
            onClick={() => {
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium"
          >
            Browse All Gift Cards
          </button>
        </div>
      )}

      {/* Featured Cards Section */}
      {featuredCards.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured {category.name} Gift Cards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCards.map((card) => (
              <GiftCardItem
                key={card.id}
                giftCard={card}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Filtered Cards Section */}
      {filteredCards.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            {featuredCards.length > 0 ? 'All' : ''} {category.name} Gift Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCards.map((card) => (
              <GiftCardItem
                key={card.id}
                giftCard={card}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        !allCardsEmpty && (
          <div className="py-8 text-center">
            <h2 className="text-xl font-bold text-white mb-4">No Matching Gift Cards</h2>
            <p className="text-day-300 mb-6">
              No gift cards match your current filters. Try adjusting your filters or search terms.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium"
            >
              Reset Filters
            </button>
          </div>
        )
      )}

      {/* Results Count */}
      {(filteredCards.length > 0 || featuredCards.length > 0) && (
        <div className="mt-8 text-day-400 text-sm">
          Showing {filteredCards.length} gift cards in {category.name}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
