import React, { useState, useEffect } from 'react';
import { Clock, Copy, Check, RefreshCw, ArrowRight } from 'lucide-react';
import { GiftCard } from '../data/giftCardData';
import { BitcoinIcon, LightningIcon, MoneroIcon } from './icons/CurrencyIcons';

interface CheckoutProps {
  giftCard: GiftCard;
  amount: number;
  onComplete: () => void;
  onCancel: () => void;
}

type PaymentMethod = 'btc' | 'btc-ln' | 'xmr';

const Checkout: React.FC<CheckoutProps> = ({ giftCard, amount, onComplete, onCancel }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'processing' | 'completed' | 'expired'>('pending');

  // Mock payment address
  const paymentAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa';

  // Mock price in crypto (would normally be fetched from an API)
  const cryptoAmount = selectedPaymentMethod === 'btc' ? 0.00123 :
                       selectedPaymentMethod === 'btc-ln' ? 0.00120 :
                       selectedPaymentMethod === 'xmr' ? 0.0089 : 0;

  useEffect(() => {
    // Set default payment method based on available currencies
    if (giftCard.currencies.includes('btc-ln')) {
      setSelectedPaymentMethod('btc-ln');
    } else if (giftCard.currencies.includes('btc')) {
      setSelectedPaymentMethod('btc');
    } else if (giftCard.currencies.includes('xmr')) {
      setSelectedPaymentMethod('xmr');
    }
  }, [giftCard]);

  useEffect(() => {
    // Countdown timer
    if (timeLeft > 0 && paymentStatus === 'pending') {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && paymentStatus === 'pending') {
      setPaymentStatus('expired');
    }
  }, [timeLeft, paymentStatus]);

  // Format time left as MM:SS
  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(paymentAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRefreshPrice = () => {
    // In a real app, this would fetch the latest price
    console.log('Refreshing price...');
  };

  // Mock payment completion (in real app would be handled by backend)
  const simulatePayment = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('completed');
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6 text-center">Complete Your Purchase</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order Summary */}
        <div className="border-night-600 bg-night-800 rounded-xl border p-6">
          <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>

          <div className="flex items-center gap-4 mb-4">
            <img
              src={giftCard.logo}
              alt={giftCard.name}
              className="w-16 h-16 object-contain bg-night-700 rounded p-2"
            />
            <div>
              <h3 className="font-bold text-white">{giftCard.name}</h3>
              <p className="text-day-300">Gift Card</p>
            </div>
          </div>

          <div className="border-t border-b border-night-600 py-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-day-300">Amount:</span>
              <span className="text-white font-medium">{giftCard.priceRange.currency} {amount.toFixed(2)}</span>
            </div>
            {giftCard.cashback > 0 && (
              <div className="flex justify-between">
                <span className="text-day-300">Cashback:</span>
                <span className="text-primary font-medium">{giftCard.cashback}% in BTC</span>
              </div>
            )}
          </div>

          <div className="flex justify-between text-lg">
            <span className="text-white">Total:</span>
            <span className="text-white font-bold">{giftCard.priceRange.currency} {amount.toFixed(2)}</span>
          </div>

          {paymentStatus === 'completed' && (
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
              <p className="flex items-center font-medium">
                <Check className="size-5 mr-2" /> Payment received
              </p>
              <p className="text-sm mt-1">Your gift card will be delivered to your email shortly.</p>
            </div>
          )}
        </div>

        {/* Payment Options */}
        <div className="border-night-600 bg-night-800 rounded-xl border p-6">
          <h2 className="text-xl font-bold text-white mb-4">Payment Method</h2>

          {/* Currency options */}
          <div className="flex gap-3 mb-6">
            {giftCard.currencies.map(currency => {
              let icon = null;
              let label = '';

              if (currency === 'btc') {
                icon = <BitcoinIcon className="size-5" />;
                label = 'Bitcoin';
              } else if (currency === 'btc-ln') {
                icon = <LightningIcon className="size-5" />;
                label = 'Lightning';
              } else if (currency === 'xmr') {
                icon = <MoneroIcon className="size-5" />;
                label = 'Monero';
              }

              return (
                <button
                  key={currency}
                  onClick={() => setSelectedPaymentMethod(currency as PaymentMethod)}
                  className={`flex-1 p-3 rounded-lg flex flex-col items-center justify-center font-medium ${
                    selectedPaymentMethod === currency
                      ? 'bg-primary text-white border-primary'
                      : 'bg-night-700 text-day-300 border border-night-500 hover:bg-night-600'
                  }`}
                  disabled={paymentStatus !== 'pending'}
                >
                  {icon}
                  <span className="mt-1 text-sm">{label}</span>
                </button>
              );
            })}
          </div>

          {selectedPaymentMethod && (
            <>
              {/* Payment timer */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center text-day-300">
                  <Clock className="size-4 mr-2" />
                  <span>Time remaining:</span>
                </div>
                <span className={`font-mono font-bold ${timeLeft < 60 ? 'text-red-400' : 'text-white'}`}>
                  {formatTimeLeft()}
                </span>
              </div>

              {/* Payment amount */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-day-300">Send exactly:</span>
                  <button
                    onClick={handleRefreshPrice}
                    className="text-primary hover:text-primary/90 p-1"
                    disabled={paymentStatus !== 'pending'}
                  >
                    <RefreshCw className="size-4" />
                  </button>
                </div>
                <div className="bg-night-900 p-4 rounded-lg border border-night-600 text-white font-mono font-bold text-center">
                  {cryptoAmount} {selectedPaymentMethod === 'btc' ? 'BTC' : selectedPaymentMethod === 'btc-ln' ? 'BTC' : 'XMR'}
                </div>
              </div>

              {/* Payment address */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-day-300">
                    {selectedPaymentMethod === 'btc-ln' ? 'Lightning Invoice:' : 'Address:'}
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="text-primary hover:text-primary/90 p-1"
                    disabled={paymentStatus !== 'pending'}
                  >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  </button>
                </div>
                <div className="bg-night-900 p-4 rounded-lg border border-night-600 font-mono text-white break-all text-sm">
                  {paymentAddress}
                </div>
              </div>
            </>
          )}

          {/* Action buttons */}
          {paymentStatus === 'pending' && (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onCancel}
                className="p-3 rounded-lg border border-night-500 bg-night-700 text-day-300 hover:bg-night-600"
              >
                Cancel
              </button>

              {/* This button is only for demo purposes */}
              <button
                onClick={simulatePayment}
                className="p-3 rounded-lg bg-primary text-white hover:bg-primary/90"
              >
                Simulate Payment
              </button>
            </div>
          )}

          {paymentStatus === 'processing' && (
            <div className="p-4 bg-night-900 rounded-lg text-center">
              <RefreshCw className="size-6 animate-spin mx-auto mb-2 text-primary" />
              <p className="text-white">Processing your payment...</p>
            </div>
          )}

          {paymentStatus === 'completed' && (
            <button
              onClick={onComplete}
              className="w-full p-3 rounded-lg bg-primary text-white hover:bg-primary/90 font-medium"
            >
              Continue <ArrowRight className="size-4 inline ml-1" />
            </button>
          )}

          {paymentStatus === 'expired' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
              <p className="text-red-400 font-medium mb-2">Payment time expired</p>
              <button
                onClick={() => {
                  setTimeLeft(900);
                  setPaymentStatus('pending');
                }}
                className="p-2 rounded bg-night-700 text-day-300 hover:bg-night-600 text-sm"
              >
                Refresh and try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
