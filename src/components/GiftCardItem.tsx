import React from 'react';
import { Star, ArrowRight, Percent } from 'lucide-react';
import { GiftCard } from '../data/giftCardData';
import { MoneroIcon, BitcoinIcon, LightningIcon } from './icons/CurrencyIcons';

interface GiftCardItemProps {
  giftCard: GiftCard;
  onClick: () => void;
}

const GiftCardItem: React.FC<GiftCardItemProps> = ({ giftCard, onClick }) => {
  // Generate stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-3.5 w-3.5 text-day-600" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={i} className="h-3.5 w-3.5 text-day-600" />
        );
      }
    }
    return stars;
  };

  return (
    <div 
      className={`
        relative group bg-night-800 rounded-xl overflow-hidden border transition-all duration-200
        hover:shadow-lg hover:shadow-night-900/30 hover:translate-y-[-4px] cursor-pointer
        ${giftCard.featured ? 'border-green-500/30' : 'border-night-600'}
      `}
      onClick={onClick}
    >
      {/* Status badges */}
      <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
        {giftCard.new && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            NEW
          </span>
        )}
        {giftCard.featured && (
          <span className="bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            FEATURED
          </span>
        )}
        {giftCard.popular && (
          <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            POPULAR
          </span>
        )}
      </div>

      {/* Cashback badge */}
      {giftCard.cashback > 0 && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center bg-green-500/90 text-white text-xs font-bold px-2 py-1 rounded-full">
            <Percent className="h-3 w-3 mr-0.5" />
            {giftCard.cashback}% BACK
          </div>
        </div>
      )}

      {/* Quick view/purchase button (visible on hover) */}
      <div className="absolute inset-0 flex items-center justify-center bg-night-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg flex items-center transition-colors">
          View Details <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>

      {/* Logo area */}
      <div className="p-6 bg-night-700/50 flex items-center justify-center h-36">
        <img 
          src={giftCard.logo} 
          alt={giftCard.name} 
          className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-110"
        />
      </div>

      {/* Content area */}
      <div className="p-4">
        <h3 className="font-semibold text-white text-lg mb-1 line-clamp-1">{giftCard.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex mr-1.5">
            {renderStars(giftCard.rating)}
          </div>
          <span className="text-day-400 text-xs">{giftCard.rating.toFixed(1)}</span>
        </div>
        
        <p className="text-day-400 text-sm mb-3 line-clamp-2">{giftCard.description}</p>
        
        {/* Price range */}
        <div className="text-white font-medium mb-3">
          {giftCard.priceRange.currency}{giftCard.priceRange.min} - {giftCard.priceRange.currency}{giftCard.priceRange.max}
        </div>
        
        {/* Payment methods */}
        <div className="flex items-center space-x-2">
          {giftCard.currencies.includes('btc') && (
            <div className="bg-night-700 p-1 rounded-full" title="Bitcoin">
              <BitcoinIcon className="h-4 w-4 text-[#F7931A]" />
            </div>
          )}
          {giftCard.currencies.includes('btc-ln') && (
            <div className="bg-night-700 p-1 rounded-full" title="Lightning Network">
              <LightningIcon className="h-4 w-4 text-[#FFDC3C]" />
            </div>
          )}
          {giftCard.currencies.includes('xmr') && (
            <div className="bg-night-700 p-1 rounded-full" title="Monero">
              <MoneroIcon className="h-4 w-4 text-[#FF6B00]" />
            </div>
          )}
          
          {giftCard.cashback > 0 && (
            <div className="ml-auto text-green-500 text-xs font-medium flex items-center">
              {giftCard.cashback}% cashback
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftCardItem;
