import React, { useState } from 'react';
import { Search, Plus, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { mockServices } from '../data/servicesData';

interface ServicesListProps {
  filters: any;
}

const ServicesList: React.FC<ServicesListProps> = ({ filters }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Apply filters to services
  const filteredServices = mockServices.filter(service => {
    // Filter by search term
    if (filters.search && !service.name.toLowerCase().includes(filters.search.toLowerCase()) && 
        !service.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    // Filter by categories
    if (filters.categories.length > 0 && !filters.categories.includes(service.type.toLowerCase())) {
      return false;
    }
    
    // Filter by verification status
    if (filters.verification.length > 0) {
      const status = service.verified ? 'verified' : 'community'; // simplified
      if (!filters.verification.includes(status)) {
        return false;
      }
    }
    
    // Filter by currencies
    if (filters.currencies.length > 0) {
      const hasCurrency = service.currencies.some(currency => 
        filters.currencies.includes(currency)
      );
      if (!hasCurrency) {
        return false;
      }
    }
    
    // Filter by KYC level
    if (service.kycLevel > filters.kycLevel) {
      return false;
    }
    
    // Filter by minimum score
    if (service.score < filters.minScore) {
      return false;
    }
    
    return true;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (filters.sort) {
      case 'score-desc':
        return b.score - a.score;
      case 'score-asc':
        return a.score - b.score;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedServices.length / 9);
  const servicesPerPage = 9;
  const paginatedServices = sortedServices.slice(
    (currentPage - 1) * servicesPerPage, 
    currentPage * servicesPerPage
  );

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <span className="text-day-500 xs:gap-x-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:gap-x-6">
          {sortedServices.length} results
          {isLoading && (
            <Loader2 className="xs:-mx-1.5 -mx-1 inline-block size-4 animate-spin text-white transition-opacity duration-500 sm:-mx-3" />
          )}
          <a 
            href="#" 
            className="shrink-0 items-center justify-center gap-2 rounded-lg border transition-colors duration-100 h-8 px-3 text-sm border-night-500 bg-night-800 hover:bg-night-900 hover:text-day-200 text-white/50 hidden lg:inline-flex"
          >
            <Search className="shrink-0 size-4" />
            <span className="text-left whitespace-nowrap">Include +244 community contributed</span>
          </a>
          <a 
            href="#" 
            className="border-night-500 bg-night-800 flex items-center gap-1 rounded-md border px-2 py-0.5 text-sm sm:hidden"
          >
            <Search className="mr-0.5 inline-block size-3.5 shrink-0 align-[-0.15em]" />
            Include 244
          </a>
        </span>
        <button 
          className="border-night-500 bg-night-800 hover:bg-night-900 hover:text-day-200 text-white/50 max-xs:w-9 max-xs:px-0 h-9 px-4 text-sm rounded-lg border"
        >
          <Plus className="shrink-0 size-4 max-xs:mr-0 mr-2" />
          <span className="text-left whitespace-nowrap font-medium max-xs:hidden">Add service</span>
        </button>
      </div>
      
      <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        {paginatedServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 transition-opacity duration-500">
            <Loader2 className="size-8 animate-spin text-green-500" /> Loading more services...
          </div>
        </div>
      )}
      
      {/* Add service button (bottom) */}
      <div className="mt-4 text-center">
        <button 
          className="border-night-500 bg-night-800 hover:bg-night-900 hover:text-day-200 text-white/50 mx-auto h-9 px-4 text-sm rounded-lg border"
        >
          <Plus className="shrink-0 size-4 mr-2" />
          <span className="text-left whitespace-nowrap font-medium">Add service</span>
        </button>
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg sm:flex-nowrap mt-8">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`text-green-500 hover:text-green-400 flex items-center ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
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
                      ? 'bg-green-500 text-black' 
                      : 'text-white hover:text-gray-300'
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
            className={`text-green-500 hover:text-green-400 flex items-center ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}`}
          >
            Next <ChevronRight className="size-6 shrink-0" />
          </button>
        </nav>
      )}
    </div>
  );
};

export default ServicesList;