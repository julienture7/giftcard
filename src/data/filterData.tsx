import React from 'react';
import { AlertCircle, ShieldCheck, ShieldAlert, Shield, ShieldQuestion, X, DollarSign, Percent } from 'lucide-react';
import { MoneroIcon, BitcoinIcon, LightningIcon, CreditCardIcon, CoinsIcon } from '../components/icons/CurrencyIcons';

// Categories
export const giftCardCategories = [
  {
    value: 'shopping',
    label: 'Shopping',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 12,
    showAlways: true
  },
  {
    value: 'food-dining',
    label: 'Food & Dining',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 15,
    showAlways: true
  },
  {
    value: 'entertainment',
    label: 'Entertainment',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 8,
    showAlways: true
  },
  {
    value: 'gaming',
    label: 'Gaming',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 10,
    showAlways: true
  },
  {
    value: 'travel',
    label: 'Travel',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 6,
    showAlways: true
  },
  {
    value: 'electronics',
    label: 'Electronics',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 4,
    showAlways: false
  },
  {
    value: 'subscriptions',
    label: 'Subscriptions',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 5,
    showAlways: false
  }
];

// Price Ranges
export const priceRanges = [
  { value: '0-25', label: '$0 - $25' },
  { value: '25-50', label: '$25 - $50' },
  { value: '50-100', label: '$50 - $100' },
  { value: '100-250', label: '$100 - $250' },
  { value: '250-500', label: '$250 - $500' },
  { value: '500+', label: '$500+' }
];

// Cashback Options
export const cashbackOptions = [
  { value: 'any', label: 'Any Cashback' },
  { value: '1+', label: '1%+ Cashback' },
  { value: '2+', label: '2%+ Cashback' },
  { value: '5+', label: '5%+ Cashback' },
  { value: '10+', label: '10%+ Cashback' }
];

// Sort Options
export const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating-desc', label: 'Rating (High → Low)' },
  { value: 'price-asc', label: 'Price (Low → High)' },
  { value: 'price-desc', label: 'Price (High → Low)' },
  { value: 'cashback-desc', label: 'Cashback (High → Low)' },
  { value: 'name-asc', label: 'Name (A → Z)' }
];

// Currency Options
export const currencyOptions = [
  {
    value: 'btc',
    label: 'Bitcoin',
    icon: <BitcoinIcon className="shrink-0 size-4" />
  },
  {
    value: 'btc-ln',
    label: 'Lightning Network',
    icon: <LightningIcon className="shrink-0 size-4" />
  },
  {
    value: 'xmr',
    label: 'Monero',
    icon: <MoneroIcon className="shrink-0 size-4" />
  }
];

// Original service data retained for backwards compatibility
export const serviceCategories = [
  {
    value: 'exchange',
    label: 'Exchange',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 87,
    showAlways: true
  },
  {
    value: 'wallet',
    label: 'Wallet',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 43,
    showAlways: true
  },
  {
    value: 'vpn',
    label: 'VPN',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 21,
    showAlways: true
  },
  {
    value: 'marketplace',
    label: 'Marketplace',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 15,
    showAlways: true
  },
  {
    value: 'hosting',
    label: 'Hosting',
    icon: <DollarSign className="shrink-0 size-4" />,
    count: 12,
    showAlways: false
  }
];

export const verificationOptions = [
  {
    value: 'verified',
    label: 'Verified',
    icon: <ShieldCheck className="shrink-0 size-4 text-verified-badge" />
  },
  {
    value: 'approved',
    label: 'Approved',
    icon: <Shield className="shrink-0 size-4 text-approved-badge" />
  },
  {
    value: 'community',
    label: 'Community',
    icon: <ShieldQuestion className="shrink-0 size-4 text-community-badge" />
  }
];

export const networkOptions = [
  {
    value: 'onion',
    label: '.onion address',
    icon: <DollarSign className="shrink-0 size-4" />
  },
  {
    value: 'i2p',
    label: 'I2P address',
    icon: <DollarSign className="shrink-0 size-4" />
  }
];

export const kycLevelIcons = [
  <ShieldCheck className="text-green-500" />,
  <Shield className="text-yellow-500" />,
  <ShieldAlert className="text-orange-500" />,
  <Shield className="text-pink-500" />,
  <X className="text-red-500" />
];

export const scoreLabels = [
  { score: 0, label: 'Avoid', color: 'bg-red-600' },
  { score: 1, label: 'Terrible', color: 'bg-red-600' },
  { score: 2, label: 'Very Bad', color: 'bg-red-500' },
  { score: 3, label: 'Bad', color: 'bg-red-500' },
  { score: 4, label: 'Poor', color: 'bg-orange-600' },
  { score: 5, label: 'Average', color: 'bg-orange-500' },
  { score: 6, label: 'Fair', color: 'bg-yellow-500' },
  { score: 7, label: 'Good', color: 'bg-yellow-400' },
  { score: 8, label: 'Very Good', color: 'bg-green-600' },
  { score: 9, label: 'Excellent', color: 'bg-green-500' },
  { score: 10, label: 'Perfect', color: 'bg-green-500' }
];

export const attributeGroups = [
  {
    title: "Privacy",
    icon: <AlertCircle className="size-3.5" />,
    attributes: [
      {
        id: "tor",
        name: "Tor",
        count: 87,
        icon: <DollarSign className="shrink-0 size-4" />,
        iconColor: "text-day-400",
        showAlways: true
      },
      {
        id: "i2p",
        name: "I2P",
        count: 12,
        icon: <DollarSign className="shrink-0 size-4" />,
        iconColor: "text-day-400",
        showAlways: true
      },
      {
        id: "no-js",
        name: "No JavaScript",
        count: 25,
        icon: <DollarSign className="shrink-0 size-4" />,
        iconColor: "text-day-400",
        showAlways: false
      }
    ]
  },
  {
    title: "Trust",
    icon: <AlertCircle className="size-3.5" />,
    attributes: [
      {
        id: "open-source",
        name: "Open Source",
        count: 56,
        icon: <DollarSign className="shrink-0 size-4" />,
        iconColor: "text-day-400",
        showAlways: true
      },
      {
        id: "audited",
        name: "Audited",
        count: 24,
        icon: <DollarSign className="shrink-0 size-4" />,
        iconColor: "text-day-400",
        showAlways: true
      },
      {
        id: "self-custody",
        name: "Self-Custody",
        count: 32,
        icon: <DollarSign className="shrink-0 size-4" />,
        iconColor: "text-day-400",
        showAlways: false
      }
    ]
  }
];
