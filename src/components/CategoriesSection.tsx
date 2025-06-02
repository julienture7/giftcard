import React from 'react';
import { Category } from '../data/giftCardData';

interface CategoriesSectionProps {
  categories: Category[];
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories }) => {
  return (
    <div className="mb-8">
      <h2 className="font-title text-xl font-medium tracking-wide text-white mb-4">
        Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map(category => (
          <a
            key={category.id}
            href={`/gift-cards/${category.slug}`}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-night-800 border border-night-600 hover:bg-night-700 transition-colors"
          >
            <div className="flex items-center justify-center size-12 mb-3 bg-night-700 rounded-full p-3">
              <img
                src={category.icon}
                alt={category.name}
                className="size-6"
                onError={(e) => {
                  // Fallback if icon loading fails
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdpZnQiPjxwb2x5bGluZSBwb2ludHM9IjIwIDEyIDIwIDIyIDQgMjIgNCAxMiIvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI1IiB4PSIyIiB5PSI3Ii8+PGxpbmUgeD0iMTIiIHkxPSIyMiIgeDI9IjEyIiB5Mj0iNyIvPjxwYXRoIGQ9Ik0xMiA3SDcuNWE3LjUgNy41IDAgMCAxIDAtMTVDMTYgLTIgMTIgNyAxMiA3WiIvPjxwYXRoIGQ9Ik0xMiA3aDQuNWE3LjUgNy41IDAgMCAwIDAtMTVDOCAtMiAxMiA3IDEyIDdaIi8+PC9zdmc+";
                }}
              />
            </div>
            <span className="text-center text-day-300 text-sm font-medium">
              {category.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
