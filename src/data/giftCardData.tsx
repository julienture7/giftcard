import React from 'react';

// Define types for our gift card data
export interface GiftCard {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  category: string;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  cashback: number; // percentage
  featured: boolean;
  rating: number; // Out of 5
  popular: boolean;
  new: boolean;
  denominations: number[]; // Available denominations
  currencies: string[]; // Accepted currencies: btc, btc-ln, xmr, etc.
  images?: string[]; // Additional images for card details
  terms?: string; // Terms and conditions
  redemptionInstructions?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
}

// Categories
export const categories: Category[] = [
  {
    id: 'shopping',
    name: 'Shopping',
    slug: 'shopping',
    icon: '/icons/shopping-bag.svg',
    description: 'Gift cards for online and retail shopping'
  },
  {
    id: 'food',
    name: 'Food & Dining',
    slug: 'food-dining',
    icon: '/icons/utensils.svg',
    description: 'Restaurant and food delivery gift cards'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    slug: 'entertainment',
    icon: '/icons/film.svg',
    description: 'Movies, music, and streaming services'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    slug: 'gaming',
    icon: '/icons/gamepad.svg',
    description: 'Video games and gaming platforms'
  },
  {
    id: 'travel',
    name: 'Travel',
    slug: 'travel',
    icon: '/icons/plane.svg',
    description: 'Hotels, flights, and travel services'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    icon: '/icons/mobile.svg',
    description: 'Electronics and gadgets'
  },
  {
    id: 'subscriptions',
    name: 'Subscriptions',
    slug: 'subscriptions',
    icon: '/icons/calendar.svg',
    description: 'Subscription services'
  }
];

// Promotions for the slider
export const promotions: Promotion[] = [
  {
    id: 'bitcoin-card',
    title: 'Introducing the Bitcoin Card',
    description: 'Deposit Crypto, Spend With a Tap',
    image: 'https://ext.same-assets.com/3190267993/4100441178.svg',
    link: '/card',
    buttonText: 'Get yours'
  },
  {
    id: 'cashback-promo',
    title: 'Earn Bitcoin Cashback',
    description: 'Get up to 10% back in Bitcoin on select gift cards',
    image: 'https://ext.same-assets.com/548789824/1583010581.svg',
    link: '/gift-cards?cashback=true',
    buttonText: 'Shop Now'
  },
  {
    id: 'gaming-cards',
    title: 'Level Up Your Gaming',
    description: 'Steam, PlayStation, Xbox, and more',
    image: 'https://ext.same-assets.com/3190267993/29833567.webp',
    link: '/gift-cards/gaming',
    buttonText: 'Browse Games'
  }
];

// Gift Cards
export const giftCards: GiftCard[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    slug: 'amazon',
    logo: 'https://ext.same-assets.com/3190267993/592439512.webp',
    description: 'Shop millions of products on the world\'s largest online marketplace.',
    category: 'shopping',
    priceRange: {
      min: 10,
      max: 1500,
      currency: 'USD'
    },
    cashback: 1.5,
    featured: true,
    rating: 5,
    popular: true,
    new: false,
    denominations: [10, 25, 50, 100, 250, 500, 1000, 1500],
    currencies: ['btc', 'btc-ln', 'xmr'],
    terms: 'Amazon.com Gift Cards never expire and can be redeemed towards millions of items at Amazon.com.',
    redemptionInstructions: 'To redeem your gift card, go to Amazon.com, click on Account & Lists, and enter your gift card code under "Gift Cards".'
  },
  {
    id: 'steam',
    name: 'Steam',
    slug: 'steam',
    logo: 'https://ext.same-assets.com/3190267993/29833567.webp',
    description: 'Purchase games, software, and hardware through Steam, the ultimate entertainment platform.',
    category: 'gaming',
    priceRange: {
      min: 10,
      max: 100,
      currency: 'USD'
    },
    cashback: 3,
    featured: true,
    rating: 4.9,
    popular: true,
    new: false,
    denominations: [10, 20, 30, 50, 100],
    currencies: ['btc', 'btc-ln', 'xmr'],
    terms: 'Steam gift cards can be used to purchase games, software, hardware, and other items on Steam.',
    redemptionInstructions: 'To redeem, log into your Steam account, click on your account name, select "Account details" and click on "Add funds to your Steam Wallet" and enter your code.'
  },
  {
    id: 'apple',
    name: 'Apple App Store & iTunes',
    slug: 'apple-itunes',
    logo: 'https://ext.same-assets.com/3190267993/564219627.webp',
    description: 'Get apps, games, music, movies, TV shows, and more on the App Store and iTunes.',
    category: 'entertainment',
    priceRange: {
      min: 10,
      max: 200,
      currency: 'USD'
    },
    cashback: 2,
    featured: true,
    rating: 5,
    popular: true,
    new: false,
    denominations: [10, 15, 25, 50, 100, 200],
    currencies: ['btc', 'btc-ln'],
    terms: 'Apple Gift Cards can be redeemed on the App Store, iTunes Store, Apple Books, or for Apple subscriptions.',
    redemptionInstructions: 'Open the App Store, iTunes Store, or Apple Books. Tap your photo or sign in. Tap Redeem Gift Card, then enter your code.'
  },
  {
    id: 'netflix',
    name: 'Netflix',
    slug: 'netflix',
    logo: 'https://ext.same-assets.com/3190267993/1112362791.webp',
    description: 'Stream TV shows, movies, and original content on the world\'s leading streaming entertainment service.',
    category: 'entertainment',
    priceRange: {
      min: 25,
      max: 150,
      currency: 'USD'
    },
    cashback: 1,
    featured: false,
    rating: 5,
    popular: true,
    new: false,
    denominations: [25, 50, 100, 150],
    currencies: ['btc', 'btc-ln', 'xmr'],
    terms: 'Netflix gift cards can be used to pay for a Netflix subscription or added to your Netflix account balance.',
    redemptionInstructions: 'Visit netflix.com/redeem and enter your unique code to add the balance to your account.'
  },
  {
    id: 'playstation',
    name: 'PlayStation Store',
    slug: 'playstation',
    logo: 'https://ext.same-assets.com/3190267993/1003754036.webp',
    description: 'Buy games, add-ons, and PS Plus subscriptions for your PlayStation console.',
    category: 'gaming',
    priceRange: {
      min: 10,
      max: 150,
      currency: 'USD'
    },
    cashback: 2,
    featured: false,
    rating: 4.9,
    popular: true,
    new: false,
    denominations: [10, 20, 50, 100, 150],
    currencies: ['btc', 'btc-ln'],
    terms: 'PlayStation Store gift cards can be used to purchase games, add-ons, subscriptions, and more in the PlayStation Store.',
    redemptionInstructions: 'Sign in to your PlayStation Network account, go to the PlayStation Store, select "Redeem Codes" and enter your code.'
  },
  {
    id: 'uber',
    name: 'Uber',
    slug: 'uber',
    logo: 'https://ext.same-assets.com/3190267993/4282496528.webp',
    description: 'Use for rides or Uber Eats food delivery.',
    category: 'food',
    priceRange: {
      min: 25,
      max: 500,
      currency: 'USD'
    },
    cashback: 4.5,
    featured: true,
    rating: 4.5,
    popular: true,
    new: false,
    denominations: [25, 50, 100, 200, 500],
    currencies: ['btc', 'btc-ln', 'xmr'],
    terms: 'Uber gift cards can be used for Uber rides or Uber Eats orders.',
    redemptionInstructions: 'Open the Uber app, go to Payment > Add Payment Method > Gift Card, and enter your code.'
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    slug: 'airbnb',
    logo: 'https://ext.same-assets.com/3190267993/3827610288.webp',
    description: 'Book unique homes, experiences, and more worldwide.',
    category: 'travel',
    priceRange: {
      min: 50,
      max: 1000,
      currency: 'USD'
    },
    cashback: 2,
    featured: false,
    rating: 4.9,
    popular: true,
    new: false,
    denominations: [50, 100, 250, 500, 1000],
    currencies: ['btc', 'btc-ln'],
    terms: 'Airbnb gift cards never expire and can be used for bookings worldwide.',
    redemptionInstructions: 'Go to airbnb.com/payments/gift_cards or open the Airbnb app and navigate to your account, tap on "Gift cards" and enter your code.'
  },
  {
    id: 'xbox',
    name: 'Xbox',
    slug: 'xbox',
    logo: 'https://ext.same-assets.com/3190267993/3999052557.webp',
    description: 'For games, add-ons, movies and more on Xbox consoles and Windows.',
    category: 'gaming',
    priceRange: {
      min: 5,
      max: 100,
      currency: 'USD'
    },
    cashback: 3,
    featured: false,
    rating: 5,
    popular: true,
    new: false,
    denominations: [5, 10, 25, 50, 100],
    currencies: ['btc', 'btc-ln', 'xmr'],
    terms: 'Xbox gift cards can be used to buy games, apps, movies, TV shows, and more from the Microsoft Store.',
    redemptionInstructions: 'Go to microsoft.com/redeem, sign in with your Microsoft account, and enter your code.'
  },
  {
    id: 'google-play',
    name: 'Google Play',
    slug: 'google-play',
    logo: 'https://ext.same-assets.com/3190267993/471040890.webp',
    description: 'Apps, games, movies, books and more for Android devices.',
    category: 'entertainment',
    priceRange: {
      min: 10,
      max: 500,
      currency: 'USD'
    },
    cashback: 1.5,
    featured: false,
    rating: 4.9,
    popular: true,
    new: false,
    denominations: [10, 25, 50, 100, 200, 500],
    currencies: ['btc', 'btc-ln'],
    terms: 'Google Play gift cards can be used to purchase apps, games, movies, books, and more on Google Play.',
    redemptionInstructions: 'Open the Google Play Store app, tap Menu > Account > Add Gift Card, and enter your code.'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    slug: 'spotify',
    logo: 'https://ext.same-assets.com/3190267993/2452505943.webp',
    description: 'Stream music, create playlists, discover new songs and podcasts.',
    category: 'entertainment',
    priceRange: {
      min: 10,
      max: 100,
      currency: 'USD'
    },
    cashback: 4,
    featured: false,
    rating: 4,
    popular: false,
    new: true,
    denominations: [10, 30, 60, 100],
    currencies: ['btc', 'btc-ln'],
    terms: 'Spotify gift cards can be redeemed for Spotify Premium subscriptions.',
    redemptionInstructions: 'Go to spotify.com/redeem and enter your code.'
  },
  {
    id: 'nintendo',
    name: 'Nintendo eShop',
    slug: 'nintendo',
    logo: 'https://ext.same-assets.com/3190267993/879372525.webp',
    description: 'Buy games and content for Nintendo Switch and Nintendo 3DS.',
    category: 'gaming',
    priceRange: {
      min: 5,
      max: 100,
      currency: 'USD'
    },
    cashback: 3,
    featured: false,
    rating: 5,
    popular: true,
    new: false,
    denominations: [5, 10, 20, 35, 50, 70, 100],
    currencies: ['btc', 'btc-ln'],
    terms: 'Nintendo eShop cards can be used to purchase games and downloadable content on Nintendo eShop.',
    redemptionInstructions: 'On your Nintendo device, select "Nintendo eShop" from the HOME Menu, select "Redeem Code", and enter your code.'
  },
  {
    id: 'walmart',
    name: 'Walmart',
    slug: 'walmart',
    logo: 'https://ext.same-assets.com/548789824/3238062414.png',
    description: 'Shop for groceries, electronics, household items and more.',
    category: 'shopping',
    priceRange: {
      min: 5,
      max: 500,
      currency: 'USD'
    },
    cashback: 0.4,
    featured: false,
    rating: 4.8,
    popular: true,
    new: false,
    denominations: [5, 10, 25, 50, 100, 200, 500],
    currencies: ['btc', 'btc-ln', 'xmr'],
    terms: 'Walmart gift cards can be used at Walmart stores and online at walmart.com.',
    redemptionInstructions: 'Present the gift card at checkout in-store or enter the card number and PIN during online checkout.'
  }
];

// Helper functions
export const getGiftCardById = (id: string): GiftCard | undefined => {
  return giftCards.find(card => card.id === id);
};

export const getGiftCardsByCategory = (categoryId: string): GiftCard[] => {
  return giftCards.filter(card => card.category === categoryId);
};

export const getFeaturedGiftCards = (): GiftCard[] => {
  return giftCards.filter(card => card.featured);
};

export const getPopularGiftCards = (): GiftCard[] => {
  return giftCards.filter(card => card.popular);
};

export const getNewGiftCards = (): GiftCard[] => {
  return giftCards.filter(card => card.new);
};
