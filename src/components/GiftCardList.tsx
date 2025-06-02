import React, { useState } from 'react';
import { Search, Plus, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import GiftCardItem from './GiftCardItem';
import { GiftCard } from '../data/giftCardData';

interface GiftCardListProps {
  title: string;
  giftCards: GiftCard[];
  filters?: any;
  showViewAll?: boolean;
  viewAllLink?: string;
}

const GiftCardList: React.FC<GiftCardListProps> = ({
  title,
  giftCards,
  filters,
  showViewAll = false,
  viewAllLink = '/gift-cards'
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Apply any filters if provided
  let filteredCards = [...giftCards];
  if (filters) {
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredCards = filteredCards.filter(card =>
        card.name.toLowerCase().includes(searchTerm) ||
        card.description.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by category
    if (filters.category && filters.category !== 'all') {
      filteredCards = filteredCards.filter(card => card.category === filters.category);
    }

    // Filter by price range
    if (filters.minPrice) {
      filteredCards = filteredCards.filter(card => card.priceRange.min >= filters.minPrice);
    }

    if (filters.maxPrice) {
      filteredCards = filteredCards.filter(card => card.priceRange.max <= filters.maxPrice);
    }

    // Filter by cashback
    if (filters.minCashback) {
      filteredCards = filteredCards.filter(card => card.cashback >= filters.minCashback);
    }

    // Sort options
    if (filters.sort) {
      switch (filters.sort) {
        case 'popular':
          filteredCards.sort((a, b) => (a.popular === b.popular ? 0 : a.popular ? -1 : 1));
          break;
        case 'rating-desc':
          filteredCards.sort((a, b) => b.rating - a.rating);
          break;
        case 'price-asc':
          filteredCards.sort((a, b) => a.priceRange.min - b.priceRange.min);
          break;
        case 'price-desc':
          filteredCards.sort((a, b) => b.priceRange.max - a.priceRange.max);
          break;
        case 'cashback-desc':
          filteredCards.sort((a, b) => b.cashback - a.cashback);
          break;
        case 'name-asc':
          filteredCards.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break;
      }
    }
  }

  const totalPages = Math.ceil(filteredCards.length / 9);
  const cardsPerPage = 9;
  const paginatedCards = filteredCards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-title text-xl font-medium tracking-wide text-white">
          {title}
        </h2>
        {showViewAll && (
          <a
            href={viewAllLink}
            className="text-primary hover:text-primary/90 text-sm font-medium"
          >
            See all
          </a>
        )}
      </div>

      {filters && (
        <div className="flex items-center justify-between mb-4">
          <span className="text-day-500 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            {filteredCards.length} results
            {isLoading && (
              <Loader2 className="inline-block size-4 animate-spin text-white" />
            )}
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {paginatedCards.map(card => (
          <GiftCardItem key={card.id} giftCard={card} />
        ))}
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <Loader2 className="size-8 animate-spin text-primary" /> Loading more gift cards...
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && filters && (
        <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg sm:flex-nowrap mt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`text-primary hover:text-primary/90 flex items-center ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <ChevronLeft className="size-6 shrink-0" /> Prev
          </button>

          <div className="order-first flex w-full items-center justify-center gap-4 sm:order-none sm:w-auto">
            {Array.from({ length: Math.min(totalPages, 5) }).map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  disabled={currentPage === pageNum}
                  className={`size-10 flex items-center justify-center rounded-md ${
                    currentPage === pageNum
                      ? 'bg-primary text-white'
                      : 'text-white hover:text-day-100'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`text-primary hover:text-primary/90 flex items-center ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}`}
          >
            Next <ChevronRight className="size-6 shrink-0" />
          </button>
        </nav>
      )}
    </div>
  );
};

export default GiftCardList;
