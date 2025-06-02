import React from 'react';
import { X } from 'lucide-react';
import FiltersSidebar from './FiltersSidebar';

interface MobileFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  filters: any;
  onFilterChange: (filters: any) => void;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ isOpen, onClose, filters, onFilterChange }) => {
  const handleApply = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70">
      <div className="bg-night-700 text-day-300 border-primary/30 h-[90dvh] flex flex-col absolute bottom-0 left-0 right-0 rounded-t-xl">
        <div className="p-4 border-b border-night-600 flex justify-between items-center">
          <h2 className="text-primary font-bold text-xl">Gift Card Filters</h2>
          <button
            onClick={onClose}
            className="text-day-500 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="overflow-y-auto flex-grow px-4 pt-4">
          <FiltersSidebar
            filters={filters}
            onFilterChange={onFilterChange}
            isMobileSheet={true}
          />
        </div>
        <div className="mt-4 p-4 bg-night-700 sticky inset-x-0 bottom-0 shadow-[0_0_16px_16px_theme(colors.night.700)]">
          <button
            onClick={handleApply}
            className="w-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 font-bold tracking-wider uppercase h-10 px-4 rounded-md"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;
