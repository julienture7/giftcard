import React from 'react';
import { Tag, Star, ArrowLeftRight } from 'lucide-react';
import { GiftCard } from '../data/giftCardData';
import { Tooltip } from './ui/tooltip';
import { MoneroIcon, BitcoinIcon, LightningIcon } from './icons/CurrencyIcons';

interface GiftCardItemProps {
  giftCard: GiftCard;
}

const GiftCardItem: React.FC<GiftCardItemProps> = ({ giftCard }) => {
  // Format price range
  const priceRange = `${giftCard.priceRange.currency} ${giftCard.priceRange.min} - ${giftCard.priceRange.max}`;

  return (
    <a
      href={`/gift-cards/${giftCard.slug}`}
      className="border-night-600 group bg-night-800 flex flex-col gap-3 rounded-xl border p-3 hover:bg-night-700 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-night-700 p-1">
          <img
            src={giftCard.logo}
            alt={giftCard.name}
            width="48"
            height="48"
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center self-stretch">
          <h3 className="font-title text-lg leading-tight font-medium tracking-wide text-white">
            {giftCard.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Star className="size-4 text-yellow-500 fill-yellow-500" />
              <span className="text-day-300 text-sm leading-none">{giftCard.rating.toFixed(1)}</span>
            </div>
            {giftCard.cashback > 0 && (
              <Tooltip content={`${giftCard.cashback}% cashback in Bitcoin`} position="top">
                <span className="text-primary bg-primary/10 text-xs font-semibold rounded-full px-2 py-0.5">
                  {giftCard.cashback}%
                </span>
              </Tooltip>
            )}
            {giftCard.new && (
              <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full px-2 py-0.5">
                New
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-day-400 line-clamp-2 text-sm leading-tight">{giftCard.description}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-day-300 text-sm">{priceRange}</span>

        <div className="flex space-x-1">
          {giftCard.currencies.includes('btc') && (
            <Tooltip content="Bitcoin" position="top">
              <span className="inline-block">
                <BitcoinIcon className="size-5 text-[#F7931A]" />
              </span>
            </Tooltip>
          )}
          {giftCard.currencies.includes('btc-ln') && (
            <Tooltip content="Lightning Network" position="top">
              <span className="inline-block">
                <LightningIcon className="size-5 text-[#FFDC3C]" />
              </span>
            </Tooltip>
          )}
          {giftCard.currencies.includes('xmr') && (
            <Tooltip content="Monero" position="top">
              <span className="inline-block">
                <MoneroIcon className="size-5 text-[#FF6B00]" />
              </span>
            </Tooltip>
          )}
        </div>
      </div>
    </a>
  );
};

export default GiftCardItem;
