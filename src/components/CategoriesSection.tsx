import React from 'react';
import { Category } from '../data/giftCardData';

interface CategoriesSectionProps {
  categories: Category[];
  onCategoryClick?: (categoryId: string) => void;
  enhanced?: boolean;
  layout?: 'grid' | 'horizontal';
  className?: string;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
  onCategoryClick,
  enhanced = false,
  layout = 'grid',
  className = '',
}) => {
  // Category background gradients for enhanced mode
  const getCategoryGradient = (index: number): string => {
    const gradients = [
      'from-green-500/20 to-blue-500/20',   // Shopping
      'from-amber-500/20 to-red-500/20',    // Food & Dining
      'from-purple-500/20 to-pink-500/20',  // Entertainment
      'from-blue-500/20 to-indigo-500/20',  // Gaming
      'from-sky-500/20 to-cyan-500/20',     // Travel
      'from-rose-500/20 to-pink-500/20',    // Gift
      'from-lime-500/20 to-green-500/20',   // Electronics
      'from-orange-500/20 to-amber-500/20', // Home & Living
      'from-violet-500/20 to-purple-500/20', // Fashion
      'from-emerald-500/20 to-teal-500/20', // Other
    ];
    
    return gradients[index % gradients.length];
  };

  // Handle category click
  const handleCategoryClick = (categoryId: string) => {
    if (onCategoryClick) {
      onCategoryClick(categoryId);
    }
  };

  // Render horizontal layout (scrollable)
  if (layout === 'horizontal') {
    return (
      <div className={`overflow-x-auto hide-scrollbar ${className}`}>
        <div className="flex space-x-4 pb-4 min-w-min">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={`
                min-w-[180px] flex-shrink-0 rounded-xl overflow-hidden
                ${enhanced ? 'bg-gradient-to-br ' + getCategoryGradient(index) : 'bg-night-800'}
                border ${enhanced ? 'border-night-600/50' : 'border-night-600'}
                transition-all duration-300 hover:shadow-lg hover:shadow-night-900/30
                hover:border-green-500/50 hover:translate-y-[-2px] focus-within:border-green-500/50
                focus-within:ring-2 focus-within:ring-green-500/20
              `}
              style={{ 
                animation: `fadeIn 0.5s ease-out ${index * 0.05}s both` 
              }}
            >
              <button
                onClick={() => handleCategoryClick(category.id)}
                className="w-full h-full p-5 text-left focus:outline-none"
                aria-label={`Browse ${category.name} gift cards`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`
                    text-green-500 mb-3 p-3 rounded-full
                    ${enhanced ? 'bg-night-800/60' : 'bg-night-700'}
                    transition-transform duration-300 group-hover:scale-110
                  `}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{category.name}</h3>
                  {enhanced && (
                    <p className="text-day-400 text-xs line-clamp-2 mt-1">
                      {category.description.split('.')[0]}
                    </p>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render grid layout (default)
  return (
    <div className={`
      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4
      ${className}
    `}>
      {categories.map((category, index) => (
        <div 
          key={category.id}
          className={`
            group rounded-xl overflow-hidden cursor-pointer
            ${enhanced ? 'bg-gradient-to-br ' + getCategoryGradient(index) : 'bg-night-800'}
            border ${enhanced ? 'border-night-600/50' : 'border-night-600'}
            transition-all duration-300 hover:shadow-lg hover:shadow-night-900/30
            hover:border-green-500/50 hover:translate-y-[-2px] focus-within:border-green-500/50
            focus-within:ring-2 focus-within:ring-green-500/20
          `}
          style={{ 
            animation: `fadeIn 0.5s ease-out ${index * 0.05}s both` 
          }}
        >
          <button
            onClick={() => handleCategoryClick(category.id)}
            className="w-full h-full p-4 text-left focus:outline-none"
            aria-label={`Browse ${category.name} gift cards`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`
                text-green-500 mb-3 p-3 rounded-full
                ${enhanced ? 'bg-night-800/60' : 'bg-night-700'}
                transition-transform duration-300 group-hover:scale-110
              `}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-white mb-1">{category.name}</h3>
              {enhanced && (
                <p className="text-day-400 text-xs line-clamp-2 mt-1">
                  {category.description.split('.')[0]}
                </p>
              )}
            </div>
          </button>
        </div>
      ))}
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategoriesSection;
