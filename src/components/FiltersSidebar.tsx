import React, { useState } from 'react';
import { Shuffle, BarChart2, Check, DollarSign, Percent } from 'lucide-react';

// Import components
import { Slider } from './ui/slider';
import { Select } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { RadioGroup } from './ui/radio-group';

// Import data and icons
import {
  giftCardCategories,
  currencyOptions,
  sortOptions,
  priceRanges,
  cashbackOptions
} from '../data/filterData';

interface FiltersSidebarProps {
  filters: any;
  onFilterChange: (filters: any) => void;
  isMobileSheet?: boolean;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({ filters, onFilterChange, isMobileSheet }) => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleCheckboxChange = (category: string, value: string, checked: boolean) => {
    let newValues = [...(filters[category] || [])];

    if (checked) {
      newValues.push(value);
    } else {
      newValues = newValues.filter(v => v !== value);
    }

    onFilterChange({ [category]: newValues });
  };

  const handleSingleValueChange = (category: string, value: string) => {
    onFilterChange({ [category]: value });
  };

  const handleSortChange = (value: string) => {
    onFilterChange({ sort: value });
  };

  const handleRangeChange = (minName: string, maxName: string, range: string) => {
    const [min, max] = range.split('-');

    if (min && max) {
      onFilterChange({
        [minName]: parseInt(min),
        [maxName]: parseInt(max)
      });
    } else if (min && min.endsWith('+')) {
      onFilterChange({
        [minName]: parseInt(min),
        [maxName]: 10000 // Very high max value for "500+" type ranges
      });
    }
  };

  const handleCashbackChange = (value: string) => {
    if (value === 'any') {
      onFilterChange({ minCashback: 0 });
    } else {
      // Extract number from "5+" format
      const minCashback = parseInt(value);
      if (!isNaN(minCashback)) {
        onFilterChange({ minCashback });
      }
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ search: e.target.value });
  };

  const handleClearFilters = () => {
    onFilterChange({
      search: '',
      sort: 'popular',
      category: '',
      minPrice: 0,
      maxPrice: 1000,
      minCashback: 0,
      currencies: []
    });
  };

  return (
    <form className="filters-form">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-title text-xl text-primary">FILTERS</h2>
        <button
          type="button"
          onClick={handleClearFilters}
          className={`text-sm text-primary hover:text-primary/90 ${Object.values(filters).every(v => !v || (Array.isArray(v) && v.length === 0) || (typeof v === 'object' && Object.keys(v).length === 0)) ? 'hidden' : ''}`}
        >
          Clear all
        </button>
      </div>

      <fieldset className="mb-6">
        <label htmlFor="sort" className="font-title mb-3 block leading-none text-primary">Sort By</label>
        <Select
          id="sort"
          value={filters.sort}
          onChange={handleSortChange}
          options={sortOptions}
          className="border-night-600 bg-night-900 w-full p-2 text-white focus:border-primary"
        />
        <p className={`text-day-500 mt-1.5 text-center text-sm ${filters.search ? 'hidden' : ''}`}>
          <Shuffle className="inline-block size-3.5 align-[-0.125em]" /> Popular items shown first
        </p>
        <p className={`text-day-500 mt-1.5 text-center text-sm ${!filters.search ? 'hidden' : ''}`}>
          <BarChart2 className="inline-block size-3.5 align-[-0.125em]" /> Sorted by match first
        </p>
      </fieldset>

      <fieldset className="mb-6">
        <label htmlFor="search" className="font-title mb-3 block leading-none text-primary">Search</label>
        <input
          id="search"
          type="text"
          name="q"
          value={filters.search}
          onChange={handleSearchChange}
          placeholder="Search gift cards..."
          className="placeholder:text-day-500 border-night-600 bg-night-900 w-full p-2 text-white focus:border-primary rounded-md"
        />
      </fieldset>

      <fieldset className="mb-6">
        <legend className="font-title mb-3 leading-none text-primary">Categories</legend>
        <ul className="space-y-1">
          <li>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-white">
              <Checkbox
                checked={filters.category === ''}
                onChange={() => handleSingleValueChange('category', '')}
                className="text-primary border-night-500 data-[state=checked]:bg-primary data-[state=checked]:text-black"
              />
              <span className={filters.category === '' ? 'font-bold' : ''}>
                All Categories
              </span>
            </label>
          </li>
          {giftCardCategories
            .filter(cat => cat.showAlways || showAllCategories)
            .map(category => (
              <li key={category.value} data-show-always={category.showAlways}>
                <label className="flex cursor-pointer items-center gap-2 text-sm text-white">
                  <Checkbox
                    checked={filters.category === category.value}
                    onChange={() => handleSingleValueChange('category', category.value)}
                    className="text-primary border-night-500 data-[state=checked]:bg-primary data-[state=checked]:text-black"
                  />
                  {category.icon}
                  <span className={filters.category === category.value ? 'font-bold' : ''}>
                    {category.label} <span className="text-day-500 font-normal">{category.count}</span>
                  </span>
                </label>
              </li>
            ))}
        </ul>
        {giftCardCategories.filter(cat => !cat.showAlways).length > 0 && (
          <button
            type="button"
            className="text-primary p-0 h-auto mt-2 text-sm hover:text-primary/90"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            {showAllCategories ? '- Show less' : '+ Show more'}
          </button>
        )}
      </fieldset>

      <fieldset className="mb-6">
        <legend className="font-title mb-3 leading-none text-primary">Price Range</legend>
        <div className="space-y-1">
          {priceRanges.map(range => (
            <label key={range.value} className="flex cursor-pointer items-center gap-2 text-sm text-white">
              <Checkbox
                checked={(filters.minPrice === parseInt(range.value.split('-')[0]) &&
                          (range.value.includes('+') ?
                            filters.maxPrice >= 500 :
                            filters.maxPrice === parseInt(range.value.split('-')[1])))
                        }
                onChange={() => handleRangeChange('minPrice', 'maxPrice', range.value)}
                className="text-primary border-night-500 data-[state=checked]:bg-primary data-[state=checked]:text-black"
              />
              <DollarSign className="shrink-0 size-4" />
              <span className={(filters.minPrice === parseInt(range.value.split('-')[0]) &&
                          (range.value.includes('+') ?
                            filters.maxPrice >= 500 :
                            filters.maxPrice === parseInt(range.value.split('-')[1]))) ? 'font-bold' : ''}>
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <legend className="font-title mb-3 leading-none text-primary">Cashback</legend>
        <div className="space-y-1">
          {cashbackOptions.map(option => (
            <label key={option.value} className="flex cursor-pointer items-center gap-2 text-sm text-white">
              <Checkbox
                checked={
                  option.value === 'any'
                    ? filters.minCashback === 0
                    : filters.minCashback === parseInt(option.value)
                }
                onChange={() => handleCashbackChange(option.value)}
                className="text-primary border-night-500 data-[state=checked]:bg-primary data-[state=checked]:text-black"
              />
              <Percent className="shrink-0 size-4" />
              <span className={
                (option.value === 'any'
                  ? filters.minCashback === 0
                  : filters.minCashback === parseInt(option.value)) ? 'font-bold' : ''
              }>
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <legend className="font-title leading-none text-primary">Payment Methods</legend>
        </div>
        <div className="space-y-1">
          {currencyOptions.map(opt => (
            <label key={opt.value} className="flex cursor-pointer items-center gap-2 text-sm text-white">
              <Checkbox
                checked={filters.currencies.includes(opt.value)}
                onChange={(checked) => handleCheckboxChange('currencies', opt.value, checked)}
                className="text-primary border-night-500 data-[state=checked]:bg-primary data-[state=checked]:text-black"
              />
              {opt.icon}
              <span className={filters.currencies.includes(opt.value) ? 'font-bold' : ''}>
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {isMobileSheet && (
        <div className="mt-4 bg-night-700 sticky inset-x-0 bottom-0 pb-4 shadow-[0_0_16px_16px_theme(colors.night.700)]">
          <button
            type="button"
            className="w-full bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30 font-bold tracking-wider uppercase h-10 px-4 rounded-md"
          >
            Apply
          </button>
        </div>
      )}
    </form>
  );
};

export default FiltersSidebar;
