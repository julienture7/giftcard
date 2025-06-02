import React, { useState } from 'react';
import { Star, ArrowRight, Check, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { GiftCard } from '../data/giftCardData';
import { MoneroIcon, BitcoinIcon, LightningIcon } from './icons/CurrencyIcons';
import { Tooltip } from './ui/tooltip';

interface GiftCardDetailProps {
  giftCard: GiftCard;
  onPurchase: (amount: number) => void;
}

const GiftCardDetail: React.FC<GiftCardDetailProps> = ({ giftCard, onPurchase }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showTerms, setShowTerms] = useState(false);

  const handleAmountSelection = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Only allow numbers
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handlePurchaseClick = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount && amount >= giftCard.priceRange.min && amount <= giftCard.priceRange.max) {
      onPurchase(amount);
    }
  };

  const isValidAmount = selectedAmount !== null ||
    (customAmount !== '' &&
     parseInt(customAmount) >= giftCard.priceRange.min &&
     parseInt(customAmount) <= giftCard.priceRange.max);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column: Image and Details */}
      <div className="lg:w-1/2">
        <div className="border-night-600 bg-night-800 flex items-center justify-center p-6 rounded-xl border h-64 mb-6">
          <img
            src={giftCard.logo}
            alt={giftCard.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">{giftCard.name}</h1>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {Array(5).fill(0).map((_, i) => (
              <Star
                key={i}
                className={`size-5 ${i < Math.floor(giftCard.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`}
              />
            ))}
          </div>
          <span className="text-day-300 ml-1">{giftCard.rating.toFixed(1)}</span>

          {giftCard.cashback > 0 && (
            <Tooltip content={`${giftCard.cashback}% cashback in Bitcoin`} position="top">
              <span className="text-primary bg-primary/10 text-xs font-semibold rounded-full px-2 py-0.5">
                {giftCard.cashback}% Cashback
              </span>
            </Tooltip>
          )}
        </div>

        <p className="text-day-300 mb-6">{giftCard.description}</p>

        {/* Redemption Instructions Collapsible */}
        <div className="mb-4 border-night-600 rounded-lg border overflow-hidden">
          <button
            className="flex items-center justify-between w-full p-4 text-white bg-night-800 hover:bg-night-700"
            onClick={() => setShowTerms(!showTerms)}
          >
            <span className="font-medium">Terms & Redemption Instructions</span>
            {showTerms ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
          </button>

          {showTerms && (
            <div className="p-4 bg-night-900">
              <h3 className="font-medium text-white mb-2">Terms</h3>
              <p className="text-day-300 mb-4">{giftCard.terms}</p>

              <h3 className="font-medium text-white mb-2">Redemption Instructions</h3>
              <p className="text-day-300">{giftCard.redemptionInstructions}</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mb-2">
          <p className="text-day-300">Accepted payment methods:</p>
          <div className="flex space-x-2">
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
      </div>

      {/* Right Column: Purchase Options */}
      <div className="lg:w-1/2 border-night-600 bg-night-800 p-6 rounded-xl border">
        <h2 className="text-xl font-bold text-white mb-4">Select Amount</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {giftCard.denominations.map(amount => (
            <button
              key={amount}
              onClick={() => handleAmountSelection(amount)}
              className={`border-night-500 p-3 rounded-lg flex items-center justify-center font-medium ${
                selectedAmount === amount
                  ? 'bg-primary text-white border-primary'
                  : 'bg-night-700 text-day-300 border hover:bg-night-600'
              }`}
            >
              {giftCard.priceRange.currency} {amount}
              {selectedAmount === amount && <Check className="ml-2 size-4" />}
            </button>
          ))}

          <div
            className={`col-span-2 md:col-span-3 border-night-500 p-3 rounded-lg flex items-center bg-night-700 border ${
              !selectedAmount && customAmount
                ? 'border-primary'
                : 'border-night-500'
            }`}
          >
            <span className="text-day-300 ml-3 mr-2">{giftCard.priceRange.currency}</span>
            <input
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Custom amount"
              className="bg-transparent text-white flex-1 outline-none"
            />
          </div>
        </div>

        {customAmount && (parseInt(customAmount) < giftCard.priceRange.min || parseInt(customAmount) > giftCard.priceRange.max) && (
          <p className="text-red-500 mb-4 flex items-center">
            <Info className="size-4 mr-2" />
            Amount must be between {giftCard.priceRange.currency} {giftCard.priceRange.min} and {giftCard.priceRange.currency} {giftCard.priceRange.max}
          </p>
        )}

        <button
          onClick={handlePurchaseClick}
          disabled={!isValidAmount}
          className={`w-full p-4 rounded-lg flex items-center justify-center font-bold text-lg ${
            isValidAmount
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-night-600 text-day-500 cursor-not-allowed'
          }`}
        >
          Purchase Now <ArrowRight className="ml-2 size-5" />
        </button>

        {giftCard.cashback > 0 && (
          <p className="text-primary text-center mt-4 font-medium">
            Earn {giftCard.cashback}% Bitcoin cashback on this purchase!
          </p>
        )}

        <div className="mt-6 text-day-400 text-sm">
          <p className="flex items-center"><Check className="size-4 mr-2 text-primary" /> Instant delivery</p>
          <p className="flex items-center"><Check className="size-4 mr-2 text-primary" /> Privacy-focused payment</p>
          <p className="flex items-center"><Check className="size-4 mr-2 text-primary" /> No account required</p>
        </div>
      </div>
    </div>
  );
};

export default GiftCardDetail;
