import React from 'react';
import { 
  ShoppingBag, Utensils, Film, Gamepad2, Plane, Gift, 
  Smartphone, Laptop, Home, Backpack, Coffee, Ticket, 
  Headphones, Book, Shirt, Tv
} from 'lucide-react';

// Enhanced interfaces with more comprehensive information
export interface GiftCard {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  detailedDescription: string;
  category: Category;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  denominations: number[];
  cashback: number;
  featured: boolean;
  popular: boolean;
  new: boolean;
  rating: number;
  popularity: number; // 1-100 scale
  currencies: string[]; // 'btc', 'btc-ln', 'xmr'
  images: string[]; // Additional images for the gift card
  terms: string;
  redemptionInstructions: string;
  regions: string[]; // 'global', 'us', 'eu', 'asia', etc.
  faqs: FAQ[];
  createdAt: string; // ISO date string
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: React.ReactNode;
  description: string;
  featuredCards?: string[]; // IDs of featured cards in this category
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Categories with enhanced descriptions
export const categories: Category[] = [
  {
    id: 'shopping',
    name: 'Shopping',
    slug: 'shopping',
    icon: <ShoppingBag className="size-6" />,
    description: 'Gift cards for major online and retail shopping platforms. Perfect for buying clothes, electronics, and everyday essentials with complete privacy.',
    featuredCards: ['amazon', 'walmart', 'target', 'bestbuy']
  },
  {
    id: 'food',
    name: 'Food & Dining',
    slug: 'food-dining',
    icon: <Utensils className="size-6" />,
    description: 'Treat yourself or others to a delicious meal with our selection of restaurant and food delivery gift cards. From fast food to gourmet dining.',
    featuredCards: ['ubereats', 'doordash', 'starbucks']
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    slug: 'entertainment',
    icon: <Film className="size-6" />,
    description: 'Stream your favorite movies, shows, and music with our entertainment gift cards. Access premium content without linking your identity.',
    featuredCards: ['netflix', 'spotify', 'hulu', 'disney']
  },
  {
    id: 'gaming',
    name: 'Gaming',
    slug: 'gaming',
    icon: <Gamepad2 className="size-6" />,
    description: 'Level up your gaming experience with gift cards for popular gaming platforms and stores. Buy games, in-game items, and subscriptions privately.',
    featuredCards: ['steam', 'playstation', 'xbox', 'nintendo']
  },
  {
    id: 'travel',
    name: 'Travel',
    slug: 'travel',
    icon: <Plane className="size-6" />,
    description: 'Book your next adventure with travel gift cards. Hotels, flights, and experiences available with enhanced privacy protections.',
    featuredCards: ['airbnb', 'hotels', 'uber']
  },
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    icon: <Laptop className="size-6" />,
    description: 'Purchase the latest gadgets and tech with our electronics gift cards. From smartphones to laptops, buy securely without sharing personal data.',
    featuredCards: ['apple', 'bestbuy', 'newegg']
  },
  {
    id: 'home',
    name: 'Home & Living',
    slug: 'home-living',
    icon: <Home className="size-6" />,
    description: 'Enhance your living space with gift cards for home goods, furniture, and decor. Privacy-focused shopping for your home needs.',
    featuredCards: ['ikea', 'wayfair', 'homegoods']
  },
  {
    id: 'fashion',
    name: 'Fashion',
    slug: 'fashion',
    icon: <Shirt className="size-6" />,
    description: 'Stay stylish with gift cards for popular clothing and accessory brands. Shop the latest trends without compromising your privacy.',
    featuredCards: ['nike', 'adidas', 'hm', 'zara']
  }
];

// Enhanced promotions with more attractive descriptions
export const promotions: Promotion[] = [
  {
    id: 'promo1',
    title: 'Privacy-First Gift Cards',
    description: 'Shop at your favorite stores without compromising your personal data. Our gift cards require zero KYC verification.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    link: '/about',
    buttonText: 'Learn More',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    textColor: 'text-emerald-500'
  },
  {
    id: 'promo2',
    title: '5% Cashback on Gaming Cards',
    description: 'Earn 5% Bitcoin cashback when you purchase any gaming gift card. Limited time offer for Steam, Xbox, PlayStation and Nintendo cards!',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    link: '/category/gaming',
    buttonText: 'Shop Now',
    backgroundColor: 'rgba(79, 70, 229, 0.1)',
    textColor: 'text-indigo-500'
  },
  {
    id: 'promo3',
    title: 'Monero Accepted Here',
    description: 'Complete privacy with Monero payments. Purchase gift cards with XMR for maximum anonymity and security.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    link: '/faq',
    buttonText: 'See How It Works',
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    textColor: 'text-amber-500'
  },
  {
    id: 'promo4',
    title: 'New: Streaming Bundle',
    description: 'Get 10% off when you purchase any two streaming service gift cards together. Netflix, Disney+, Hulu, and more!',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    link: '/category/entertainment',
    buttonText: 'Get Bundle',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    textColor: 'text-red-500'
  },
  {
    id: 'promo5',
    title: 'Lightning Fast Delivery',
    description: 'Instant delivery with Bitcoin Lightning Network payments. Get your gift cards in seconds, not minutes.',
    image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    link: '/services',
    buttonText: 'Try Lightning',
    backgroundColor: 'rgba(234, 179, 8, 0.1)',
    textColor: 'text-yellow-500'
  }
];

// Sample FAQs that can be reused for multiple gift cards
const commonFAQs: Record<string, FAQ[]> = {
  general: [
    {
      question: 'How soon will I receive my gift card?',
      answer: 'Gift cards are delivered instantly after payment confirmation. For Bitcoin Lightning payments, this is typically within seconds. For on-chain Bitcoin and Monero payments, delivery occurs after 1 confirmation.'
    },
    {
      question: 'Are these gift cards legitimate?',
      answer: 'Yes, all our gift cards are purchased directly from authorized retailers or official distributors. They are 100% legitimate and carry the full value advertised.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Bitcoin (BTC), Bitcoin Lightning Network payments (BTC-LN), and Monero (XMR). We do not accept credit cards, PayPal, or bank transfers to maintain your privacy.'
    },
    {
      question: 'Do you require ID verification?',
      answer: 'No. We do not require any form of identification or KYC verification. Your privacy is our priority.'
    }
  ],
  usage: [
    {
      question: 'Can I use this gift card internationally?',
      answer: 'This depends on the specific gift card and its regional restrictions. Check the gift card details for region availability information.'
    },
    {
      question: 'What happens if my gift card code doesn\'t work?',
      answer: 'In the rare event that a gift card code doesn\'t work, please contact our support team immediately with your order details. We'll provide a replacement or refund.'
    },
    {
      question: 'Can I combine multiple gift cards?',
      answer: 'Yes, most retailers allow you to use multiple gift cards for a single purchase. You can check the specific retailer\'s terms for any limitations.'
    }
  ],
  refunds: [
    {
      question: 'What is your refund policy?',
      answer: 'Due to the digital nature of gift cards, all sales are final once the gift card code has been revealed. We cannot offer refunds for delivered gift cards.'
    },
    {
      question: 'Can I sell my unused gift card back to you?',
      answer: 'We currently do not offer a gift card buyback program. Once purchased, the gift card is yours to use or transfer.'
    }
  ]
};

// Enhanced gift card data with comprehensive information
export const giftCards: GiftCard[] = [
  // Shopping Category
  {
    id: 'amazon',
    name: 'Amazon',
    slug: 'amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
    description: 'Shop millions of products with the world\'s largest online retailer',
    detailedDescription: 'Amazon gift cards provide access to the world\'s largest online marketplace. Purchase everything from books and electronics to clothing and household items. Amazon gift cards never expire and can be used across multiple purchases.',
    category: categories.find(c => c.id === 'shopping')!,
    priceRange: {
      min: 25,
      max: 500,
      currency: '$'
    },
    denominations: [25, 50, 100, 200, 500],
    cashback: 2,
    featured: true,
    popular: true,
    new: false,
    rating: 4.9,
    popularity: 98,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
      'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Amazon.com Gift Cards ("GCs") may be used only to purchase eligible goods on Amazon.com or certain affiliated websites. GCs cannot be redeemed for purchases of gift cards. Except as required by law, GCs cannot be transferred for value or redeemed for cash. Purchases are deducted from the GC balance. To redeem or view a GC balance, visit "Your Account" on Amazon.com.',
    redemptionInstructions: 'To redeem your Amazon Gift Card: 1) Go to Amazon.com and sign in to your account. 2) Click on "Account & Lists" and select "Gift Cards" from the dropdown menu. 3) Click on "Redeem a Gift Card" and enter your claim code. 4) The gift card balance will be automatically applied to your next eligible purchase.',
    regions: ['global', 'us', 'eu', 'asia', 'australia'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use Amazon gift cards for Amazon Prime subscription?',
        answer: 'Yes, Amazon gift cards can be used to pay for Amazon Prime subscriptions. The gift card balance will be applied to your account and used for the subscription fee.'
      },
      {
        question: 'Do Amazon gift cards work on international Amazon sites?',
        answer: 'Amazon gift cards are typically region-specific. For example, an Amazon.com (US) gift card cannot be used on Amazon.co.uk (UK) or other international Amazon sites.'
      }
    ],
    createdAt: '2023-01-15T00:00:00Z'
  },
  {
    id: 'walmart',
    name: 'Walmart',
    slug: 'walmart',
    logo: 'https://cdn.corporate.walmart.com/dims4/default/748f830/2147483647/strip/true/crop/2389x930+0+0/resize/1200x467!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F7b%2F66%2F142c151b4cd3a70f175381350c98%2Fwalmart-logos-lockupwtag-horiz-blu-rgb.png',
    description: 'Save money. Live better. Shop at America\'s largest retail chain.',
    detailedDescription: 'Walmart gift cards can be used at any Walmart store or on Walmart.com. Shop for groceries, electronics, furniture, clothing, and more at everyday low prices. Walmart gift cards have no fees and never expire, making them perfect for budget-conscious shoppers.',
    category: categories.find(c => c.id === 'shopping')!,
    priceRange: {
      min: 25,
      max: 500,
      currency: '$'
    },
    denominations: [25, 50, 100, 200, 500],
    cashback: 1.5,
    featured: false,
    popular: true,
    new: false,
    rating: 4.7,
    popularity: 92,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://cdn.corporate.walmart.com/dims4/default/748f830/2147483647/strip/true/crop/2389x930+0+0/resize/1200x467!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F7b%2F66%2F142c151b4cd3a70f175381350c98%2Fwalmart-logos-lockupwtag-horiz-blu-rgb.png',
      'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Walmart Gift Cards can be used in any Walmart store or Sam\'s Club in the U.S. or Puerto Rico, or online at Walmart.com or Samsclub.com. Gift cards cannot be returned or refunded for cash unless required by law. Protect this card like cash; it cannot be replaced if lost or stolen without proof of purchase and original card number.',
    redemptionInstructions: 'To redeem in-store: Present the gift card at checkout. To redeem online: During checkout, select "Gift Card" as your payment method and enter the card number and PIN (found by scratching off the silver coating on the back of the card).',
    regions: ['us', 'puerto-rico'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my Walmart gift card at Sam\'s Club?',
        answer: 'Yes, Walmart gift cards can be used at Sam\'s Club stores and on SamsClub.com, even without a Sam\'s Club membership.'
      },
      {
        question: 'Can I check my Walmart gift card balance?',
        answer: 'Yes, you can check your balance in any Walmart store, by calling the number on the back of your card, or online at Walmart.com/giftcards.'
      }
    ],
    createdAt: '2023-02-10T00:00:00Z'
  },
  {
    id: 'target',
    name: 'Target',
    slug: 'target',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/1200px-Target_Corporation_logo_%28vector%29.svg.png',
    description: 'Expect more, pay less with Target gift cards',
    detailedDescription: 'Target gift cards can be used to purchase thousands of items at Target stores and Target.com. From groceries and essentials to clothing, home decor, and electronics, Target offers quality products at competitive prices. Target gift cards have no expiration date or fees.',
    category: categories.find(c => c.id === 'shopping')!,
    priceRange: {
      min: 25,
      max: 500,
      currency: '$'
    },
    denominations: [25, 50, 100, 200],
    cashback: 1.5,
    featured: false,
    popular: true,
    new: false,
    rating: 4.6,
    popularity: 88,
    currencies: ['btc', 'btc-ln'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Target_Corporation_logo_%28vector%29.svg/1200px-Target_Corporation_logo_%28vector%29.svg.png',
      'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Target GiftCards can be used at any Target store or Target.com. Target GiftCards have no expiration date or fees. Target GiftCards cannot be redeemed for cash or credit except where required by law. Target is not responsible for lost, stolen, damaged or unauthorized use of cards.',
    redemptionInstructions: 'To redeem in-store: Present the gift card at checkout. To redeem online: During checkout, select "Gift Card" as your payment method and enter the card number and access number (found on the back of the card).',
    regions: ['us'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my Target gift card at Starbucks inside Target?',
        answer: 'Yes, Target gift cards can be used at Starbucks locations inside Target stores.'
      },
      {
        question: 'Can I add my Target gift card to the Target app?',
        answer: 'Yes, you can add your Target gift card to your Target account in the app for easy access and to check your balance.'
      }
    ],
    createdAt: '2023-03-05T00:00:00Z'
  },
  {
    id: 'bestbuy',
    name: 'Best Buy',
    slug: 'best-buy',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1200px-Best_Buy_Logo.svg.png',
    description: 'Shop the latest tech with Best Buy gift cards',
    detailedDescription: 'Best Buy gift cards give you access to the latest technology and electronics. Purchase computers, TVs, smartphones, gaming consoles, appliances, and more. Best Buy gift cards never expire and can be used both in-store and online.',
    category: categories.find(c => c.id === 'electronics')!,
    priceRange: {
      min: 25,
      max: 500,
      currency: '$'
    },
    denominations: [25, 50, 100, 200, 500],
    cashback: 2,
    featured: true,
    popular: true,
    new: false,
    rating: 4.7,
    popularity: 85,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1200px-Best_Buy_Logo.svg.png',
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Best Buy gift cards can be used at Best Buy stores in the U.S., Puerto Rico, and U.S. Virgin Islands and online at BestBuy.com. Cards do not expire and have no fees. Lost, stolen, or damaged cards can only be replaced with proof of purchase.',
    redemptionInstructions: 'To redeem in-store: Present the gift card at checkout. To redeem online: During checkout, select "Gift Card" as your payment method and enter the card number and PIN (found by scratching off the silver coating on the back of the card).',
    regions: ['us', 'puerto-rico'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my Best Buy gift card for Geek Squad services?',
        answer: 'Yes, Best Buy gift cards can be used to pay for Geek Squad services both in-store and for in-home services.'
      },
      {
        question: 'Can I use my Best Buy gift card for online purchases?',
        answer: 'Yes, Best Buy gift cards can be used for purchases on BestBuy.com. You can enter your gift card information during checkout.'
      }
    ],
    createdAt: '2023-02-20T00:00:00Z'
  },
  
  // Food & Dining Category
  {
    id: 'ubereats',
    name: 'Uber Eats',
    slug: 'uber-eats',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Uber_Eats_2020_logo.svg/1200px-Uber_Eats_2020_logo.svg.png',
    description: 'Food delivery from your favorite local restaurants',
    detailedDescription: 'Uber Eats gift cards let you order food delivery from thousands of restaurants in your area. From fast food to fine dining, get your favorite meals delivered right to your door. Uber Eats gift cards can also be used for Uber rides.',
    category: categories.find(c => c.id === 'food')!,
    priceRange: {
      min: 25,
      max: 200,
      currency: '$'
    },
    denominations: [25, 50, 100, 200],
    cashback: 3,
    featured: true,
    popular: true,
    new: false,
    rating: 4.6,
    popularity: 90,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Uber_Eats_2020_logo.svg/1200px-Uber_Eats_2020_logo.svg.png',
      'https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Uber Eats gift cards can be used for food delivery orders through the Uber Eats app and for Uber rides. Gift cards cannot be redeemed for cash unless required by law. Uber is not responsible for lost or stolen cards. Gift cards do not expire.',
    redemptionInstructions: 'To redeem: 1) Open the Uber Eats app. 2) Tap on Account. 3) Tap on Wallet. 4) Tap on "Add Payment Method" and select "Gift Card". 5) Enter the gift card code. The balance will be automatically applied to your next orders until depleted.',
    regions: ['global', 'us', 'eu', 'asia', 'australia', 'canada'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my Uber Eats gift card for regular Uber rides?',
        answer: 'Yes, Uber gift cards work interchangeably between Uber rides and Uber Eats. The same gift card balance can be used for both services.'
      },
      {
        question: 'Do Uber Eats gift cards work internationally?',
        answer: 'Uber Eats gift cards are typically region-specific. A gift card purchased for use in the US may not work in other countries. Check the card details for regional restrictions.'
      }
    ],
    createdAt: '2023-01-25T00:00:00Z'
  },
  {
    id: 'doordash',
    name: 'DoorDash',
    slug: 'doordash',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Doordash.svg/1200px-Doordash.svg.png',
    description: 'Get food and more delivered to your door',
    detailedDescription: 'DoorDash gift cards let you order delivery from restaurants, convenience stores, grocery stores, and more. With the largest selection of restaurants in the US, DoorDash makes it easy to get your favorite foods delivered fast.',
    category: categories.find(c => c.id === 'food')!,
    priceRange: {
      min: 25,
      max: 200,
      currency: '$'
    },
    denominations: [25, 50, 100, 200],
    cashback: 2.5,
    featured: false,
    popular: true,
    new: false,
    rating: 4.5,
    popularity: 85,
    currencies: ['btc', 'btc-ln'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Doordash.svg/1200px-Doordash.svg.png',
      'https://images.unsplash.com/photo-1622593796520-2096ec5a3d6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'DoorDash gift cards can only be redeemed through the DoorDash app or website. Gift cards cannot be redeemed for cash except where required by law. DoorDash is not responsible for lost or stolen cards. Gift cards do not expire.',
    redemptionInstructions: 'To redeem: 1) Open the DoorDash app or go to doordash.com. 2) Go to Account. 3) Tap on "Payment Methods". 4) Select "Add Gift Card" and enter your gift card code. The balance will be automatically applied to your future orders.',
    regions: ['us', 'canada', 'australia'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my DoorDash gift card for DashPass subscription?',
        answer: 'Yes, DoorDash gift cards can be used to pay for DashPass subscriptions. The gift card balance will be applied to your account and used for the subscription fee.'
      },
      {
        question: 'Can I split payment between a gift card and another payment method?',
        answer: 'Yes, if your order total exceeds your gift card balance, the remaining amount will be charged to your default payment method on file.'
      }
    ],
    createdAt: '2023-03-10T00:00:00Z'
  },
  {
    id: 'starbucks',
    name: 'Starbucks',
    slug: 'starbucks',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
    description: 'Enjoy premium coffee and more with Starbucks gift cards',
    detailedDescription: 'Starbucks gift cards can be used to purchase coffee, tea, food, and merchandise at Starbucks locations. Load your gift card onto the Starbucks app to earn rewards points with every purchase. Starbucks gift cards never expire and have no fees.',
    category: categories.find(c => c.id === 'food')!,
    priceRange: {
      min: 10,
      max: 100,
      currency: '$'
    },
    denominations: [10, 25, 50, 100],
    cashback: 2,
    featured: false,
    popular: true,
    new: false,
    rating: 4.8,
    popularity: 92,
    currencies: ['btc', 'btc-ln'],
    images: [
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
      'https://images.unsplash.com/photo-1506372023823-741c83b836fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Starbucks Cards are redeemable at participating Starbucks stores. Not redeemable for cash unless required by law. Starbucks is not responsible for lost or stolen cards. Gift cards have no expiration date and no dormancy fees.',
    redemptionInstructions: 'To redeem in-store: Present the gift card at checkout. To redeem with the Starbucks app: 1) Download the Starbucks app. 2) Create or log in to your Starbucks Rewards account. 3) In the "Cards" section, tap "Add card" and enter the card number and security code.',
    regions: ['global', 'us', 'eu', 'asia', 'canada'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I earn Starbucks Rewards with my gift card?',
        answer: 'Yes, you can earn Starbucks Rewards stars when you register your gift card to your Starbucks Rewards account and use it for purchases.'
      },
      {
        question: 'Can I reload my Starbucks gift card?',
        answer: 'Yes, Starbucks gift cards are reloadable. You can add funds to your card in-store or through the Starbucks app if you\'ve registered the card to your account.'
      }
    ],
    createdAt: '2023-02-05T00:00:00Z'
  },
  
  // Entertainment Category
  {
    id: 'netflix',
    name: 'Netflix',
    slug: 'netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
    description: 'Stream unlimited movies and TV shows',
    detailedDescription: 'Netflix gift cards provide access to thousands of movies, TV shows, documentaries, and original content. Watch on your TV, computer, tablet, or phone. Netflix gift cards can be used to create new accounts or add credit to existing accounts without linking a credit card.',
    category: categories.find(c => c.id === 'entertainment')!,
    priceRange: {
      min: 25,
      max: 200,
      currency: '$'
    },
    denominations: [25, 50, 100, 200],
    cashback: 3,
    featured: true,
    popular: true,
    new: false,
    rating: 4.9,
    popularity: 95,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Netflix gift cards can only be redeemed at netflix.com/redeem. Gift cards are not redeemable for cash except where required by law. Netflix is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain on your Netflix account and cannot be transferred.',
    redemptionInstructions: 'To redeem: 1) Go to netflix.com/redeem. 2) Enter the gift card PIN. 3) If you\'re a new member, you\'ll need to create a Netflix account. If you\'re an existing member, the gift card balance will be added to your account as a credit.',
    regions: ['global', 'us', 'eu', 'asia', 'australia', 'canada'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'How long will my Netflix gift card last?',
        answer: 'The duration depends on your subscription plan. For example, a $50 gift card will cover about 3-4 months of the Standard plan. The gift card balance is applied as a credit to your account and is used automatically for monthly billing.'
      },
      {
        question: 'Can I use a Netflix gift card if I already have a subscription?',
        answer: 'Yes, you can add a Netflix gift card to an existing account. The gift card balance will be applied as a credit, and your subscription will be billed from this credit before charging your payment method.'
      }
    ],
    createdAt: '2023-01-10T00:00:00Z'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    slug: 'spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png',
    description: 'Stream music, podcasts, and more',
    detailedDescription: 'Spotify gift cards give you access to millions of songs, podcasts, and audiobooks. Enjoy ad-free music, offline listening, and high-quality audio with Spotify Premium. Gift cards can be used for new or existing accounts without requiring a credit card.',
    category: categories.find(c => c.id === 'entertainment')!,
    priceRange: {
      min: 10,
      max: 100,
      currency: '$'
    },
    denominations: [10, 30, 60, 100],
    cashback: 2,
    featured: false,
    popular: true,
    new: false,
    rating: 4.8,
    popularity: 90,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png',
      'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Spotify gift cards can only be redeemed at spotify.com/redeem. Gift cards are not redeemable for cash except where required by law. Spotify is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain in your Spotify account.',
    redemptionInstructions: 'To redeem: 1) Go to spotify.com/redeem. 2) Log in to your Spotify account or create a new one. 3) Enter the gift card code. 4) The gift card balance will be added to your account and automatically used for future subscription payments.',
    regions: ['global', 'us', 'eu', 'canada', 'australia'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'How long will my Spotify gift card last?',
        answer: 'The duration depends on your subscription plan. For example, a $60 gift card will cover about 6 months of Spotify Premium Individual plan. The gift card balance is applied as a credit to your account.'
      },
      {
        question: 'Can I use a Spotify gift card for a Family or Duo plan?',
        answer: 'Yes, Spotify gift cards can be used for any Spotify Premium plan, including Individual, Duo, Family, and Student plans.'
      }
    ],
    createdAt: '2023-02-15T00:00:00Z'
  },
  {
    id: 'hulu',
    name: 'Hulu',
    slug: 'hulu',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png',
    description: 'Stream TV shows, movies, and originals',
    detailedDescription: 'Hulu gift cards provide access to thousands of TV shows, movies, and Hulu original content. Watch current episodes of popular TV shows, classic series, and hit movies. Hulu gift cards can be used for new or existing accounts without requiring a credit card.',
    category: categories.find(c => c.id === 'entertainment')!,
    priceRange: {
      min: 25,
      max: 100,
      currency: '$'
    },
    denominations: [25, 50, 100],
    cashback: 2,
    featured: true,
    popular: false,
    new: false,
    rating: 4.6,
    popularity: 82,
    currencies: ['btc', 'btc-ln'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png',
      'https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Hulu gift cards can only be redeemed at hulu.com/start/gifting. Gift cards are not redeemable for cash except where required by law. Hulu is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain in your Hulu account.',
    redemptionInstructions: 'To redeem: 1) Go to hulu.com/start/gifting. 2) Enter the gift card code. 3) If you\'re a new member, you\'ll need to create a Hulu account. If you\'re an existing member, the gift card balance will be added to your account as a credit.',
    regions: ['us'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my Hulu gift card for Hulu + Live TV?',
        answer: 'Yes, Hulu gift cards can be used for any Hulu plan, including Hulu (No Ads), Hulu (With Ads), and Hulu + Live TV.'
      },
      {
        question: 'How long will my Hulu gift card last?',
        answer: 'The duration depends on your subscription plan. For example, a $50 gift card will cover about 5 months of the Hulu (With Ads) plan or about 2.5 months of the Hulu (No Ads) plan.'
      }
    ],
    createdAt: '2023-03-01T00:00:00Z'
  },
  {
    id: 'disney',
    name: 'Disney+',
    slug: 'disney-plus',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1200px-Disney%2B_logo.svg.png',
    description: 'Stream Disney, Pixar, Marvel, Star Wars, and more',
    detailedDescription: 'Disney+ gift cards provide access to thousands of movies and TV shows from Disney, Pixar, Marvel, Star Wars, and National Geographic. Watch classic and new Disney content, exclusive originals, and more. Disney+ gift cards can be used for new or existing accounts.',
    category: categories.find(c => c.id === 'entertainment')!,
    priceRange: {
      min: 25,
      max: 100,
      currency: '$'
    },
    denominations: [25, 50, 75, 100],
    cashback: 2,
    featured: false,
    popular: true,
    new: false,
    rating: 4.7,
    popularity: 88,
    currencies: ['btc', 'btc-ln'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1200px-Disney%2B_logo.svg.png',
      'https://images.unsplash.com/photo-1604213410393-89f141bb96b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Disney+ gift cards can only be redeemed at disneyplus.com/redeem. Gift cards are not redeemable for cash except where required by law. Disney is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain in your Disney+ account.',
    redemptionInstructions: 'To redeem: 1) Go to disneyplus.com/redeem. 2) Log in to your Disney+ account or create a new one. 3) Enter the gift card code. 4) The gift card balance will be added to your account and automatically used for future subscription payments.',
    regions: ['us', 'canada', 'eu', 'uk', 'australia'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my Disney+ gift card for the Disney Bundle?',
        answer: 'Yes, Disney+ gift cards can be used for the Disney Bundle, which includes Disney+, Hulu, and ESPN+.'
      },
      {
        question: 'How long will my Disney+ gift card last?',
        answer: 'The duration depends on your subscription plan. For example, a $75 gift card will cover about 7-8 months of the standard Disney+ subscription.'
      }
    ],
    createdAt: '2023-02-25T00:00:00Z'
  },
  
  // Gaming Category
  {
    id: 'steam',
    name: 'Steam',
    slug: 'steam',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png',
    description: 'Purchase games for PC, Mac, and Linux',
    detailedDescription: 'Steam gift cards give you access to thousands of games for PC, Mac, and Linux. From indie gems to AAA blockbusters, Steam has games for every type of player. Steam gift cards can be used to purchase games, in-game items, software, hardware, and more.',
    category: categories.find(c => c.id === 'gaming')!,
    priceRange: {
      min: 20,
      max: 100,
      currency: '$'
    },
    denominations: [20, 50, 100],
    cashback: 5,
    featured: true,
    popular: true,
    new: false,
    rating: 4.9,
    popularity: 96,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1200px-Steam_icon_logo.svg.png',
      'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Steam gift cards can only be redeemed on the Steam platform. Gift cards are not redeemable for cash except where required by law. Valve is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain in your Steam Wallet.',
    redemptionInstructions: 'To redeem: 1) Log in to your Steam account. 2) Click on your account name in the top right corner. 3) Select "Account details". 4) Click on "Add funds to your Steam Wallet" and select "Redeem a Steam Gift Card or Wallet Code". 5) Enter the gift card code.',
    regions: ['global', 'us', 'eu', 'uk', 'asia', 'australia', 'canada'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I gift games to friends with my Steam gift card?',
        answer: 'Yes, after redeeming your Steam gift card to your Steam Wallet, you can purchase games as gifts for friends directly through the Steam store.'
      },
      {
        question: 'Do Steam gift cards have regional restrictions?',
        answer: 'Yes, Steam gift cards are typically region-specific. A gift card purchased for use in one region may not work in another region due to Steam\'s regional pricing policies.'
      }
    ],
    createdAt: '2023-01-05T00:00:00Z'
  },
  {
    id: 'playstation',
    name: 'PlayStation',
    slug: 'playstation',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/PlayStation_logo_and_wordmark.svg/1200px-PlayStation_logo_and_wordmark.svg.png',
    description: 'Add funds to your PlayStation wallet',
    detailedDescription: 'PlayStation gift cards can be used to purchase games, add-ons, subscriptions, and more on the PlayStation Store. Buy digital games for PS5, PS4, and PS VR. PlayStation gift cards can also be used for PlayStation Plus subscriptions, giving you access to online multiplayer, free monthly games, and exclusive discounts.',
    category: categories.find(c => c.id === 'gaming')!,
    priceRange: {
      min: 10,
      max: 100,
      currency: '$'
    },
    denominations: [10, 25, 50, 75, 100],
    cashback: 4,
    featured: true,
    popular: true,
    new: false,
    rating: 4.8,
    popularity: 94,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/PlayStation_logo_and_wordmark.svg/1200px-PlayStation_logo_and_wordmark.svg.png',
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'PlayStation gift cards can only be redeemed on the PlayStation Store. Gift cards are not redeemable for cash except where required by law. Sony is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain in your PlayStation wallet.',
    redemptionInstructions: 'To redeem: 1) Sign in to your PlayStation account. 2) Go to the PlayStation Store. 3) Select "Redeem Codes" from the menu. 4) Enter the 12-digit code from your gift card. 5) The funds will be added to your PlayStation wallet.',
    regions: ['us', 'canada', 'eu', 'uk', 'japan', 'australia'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my PlayStation gift card for PlayStation Plus subscription?',
        answer: 'Yes, PlayStation gift cards can be used to purchase PlayStation Plus subscriptions. The gift card balance will be added to your PlayStation wallet and can be used for any purchase on the PlayStation Store.'
      },
      {
        question: 'Do PlayStation gift cards expire?',
        answer: 'No, PlayStation gift cards do not expire, and once redeemed, the funds in your PlayStation wallet do not expire either.'
      }
    ],
    createdAt: '2023-01-20T00:00:00Z'
  },
  {
    id: 'xbox',
    name: 'Xbox',
    slug: 'xbox',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1200px-Xbox_one_logo.svg.png',
    description: 'Games and digital content for Xbox and Windows',
    detailedDescription: 'Xbox gift cards can be used to purchase games, add-ons, and subscriptions on Xbox consoles and Windows PCs. Buy digital games for Xbox Series X|S, Xbox One, and PC. Xbox gift cards can also be used for Xbox Game Pass subscriptions, giving you access to hundreds of high-quality games.',
    category: categories.find(c => c.id === 'gaming')!,
    priceRange: {
      min: 10,
      max: 100,
      currency: '$'
    },
    denominations: [10, 25, 50, 100],
    cashback: 4,
    featured: false,
    popular: true,
    new: false,
    rating: 4.8,
    popularity: 92,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1200px-Xbox_one_logo.svg.png',
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Xbox gift cards can only be redeemed on the Microsoft Store. Gift cards are not redeemable for cash except where required by law. Microsoft is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain in your Microsoft account.',
    redemptionInstructions: 'To redeem: 1) Sign in to your Microsoft account. 2) Go to microsoft.com/redeem. 3) Enter the 25-character code from your gift card. 4) The funds will be added to your Microsoft account and can be used on Xbox or Windows.',
    regions: ['global', 'us', 'canada', 'eu', 'uk', 'australia'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my Xbox gift card for Xbox Game Pass?',
        answer: 'Yes, Xbox gift cards can be used to purchase Xbox Game Pass subscriptions. The gift card balance will be added to your Microsoft account and can be used for any purchase on the Microsoft Store.'
      },
      {
        question: 'Can I use my Xbox gift card on Windows PC?',
        answer: 'Yes, Xbox gift cards can be used to purchase games and content for Windows PC through the Microsoft Store, as long as you\'re signed in with the same Microsoft account.'
      }
    ],
    createdAt: '2023-01-25T00:00:00Z'
  },
  {
    id: 'nintendo',
    name: 'Nintendo',
    slug: 'nintendo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1200px-Nintendo.svg.png',
    description: 'Games and content for Nintendo Switch',
    detailedDescription: 'Nintendo gift cards can be used to purchase games, add-ons, and subscriptions on the Nintendo eShop. Buy digital games for Nintendo Switch, and access Nintendo Switch Online services. Nintendo gift cards are perfect for gamers who want to expand their digital library without using a credit card.',
    category: categories.find(c => c.id === 'gaming')!,
    priceRange: {
      min: 10,
      max: 99,
      currency: '$'
    },
    denominations: [10, 20, 35, 50, 99],
    cashback: 3,
    featured: false,
    popular: true,
    new: false,
    rating: 4.7,
    popularity: 90,
    currencies: ['btc', 'btc-ln'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1200px-Nintendo.svg.png',
      'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Nintendo gift cards can only be redeemed on the Nintendo eShop. Gift cards are not redeemable for cash except where required by law. Nintendo is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain in your Nintendo account.',
    redemptionInstructions: 'To redeem on Nintendo Switch: 1) From the HOME Menu, select the Nintendo eShop icon. 2) Select your user account. 3) Select "Redeem Code" on the left side of the screen. 4) Enter the 16-digit code from your gift card. 5) The funds will be added to your Nintendo account.',
    regions: ['us', 'canada', 'eu', 'uk', 'japan', 'australia'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my Nintendo gift card for Nintendo Switch Online subscription?',
        answer: 'Yes, Nintendo gift cards can be used to purchase Nintendo Switch Online subscriptions. The gift card balance will be added to your Nintendo account and can be used for any purchase on the Nintendo eShop.'
      },
      {
        question: 'Are Nintendo gift cards region-specific?',
        answer: 'Yes, Nintendo gift cards are region-specific and can only be redeemed on Nintendo eShop accounts from the same region. For example, a US Nintendo gift card can only be redeemed on a US Nintendo account.'
      }
    ],
    createdAt: '2023-02-01T00:00:00Z'
  },
  
  // Travel Category
  {
    id: 'airbnb',
    name: 'Airbnb',
    slug: 'airbnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png',
    description: 'Book unique accommodations around the world',
    detailedDescription: 'Airbnb gift cards can be used to book accommodations, experiences, and adventures around the world. From apartments and houses to unique stays like treehouses and boats, Airbnb offers millions of places to stay. Airbnb gift cards never expire and can be used for multiple bookings.',
    category: categories.find(c => c.id === 'travel')!,
    priceRange: {
      min: 25,
      max: 500,
      currency: '$'
    },
    denominations: [25, 50, 100, 200, 500],
    cashback: 2,
    featured: true,
    popular: true,
    new: false,
    rating: 4.7,
    popularity: 88,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png',
      'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Airbnb gift cards can only be redeemed on Airbnb.com or the Airbnb app. Gift cards are not redeemable for cash except where required by law. Airbnb is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain in your Airbnb account.',
    redemptionInstructions: 'To redeem: 1) Go to airbnb.com/gift. 2) Enter the gift card code. 3) The funds will be added to your Airbnb account as travel credit. If you don\'t have an account, you\'ll need to create one.',
    regions: ['global', 'us', 'eu', 'uk', 'asia', 'australia', 'canada'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my Airbnb gift card for Airbnb Experiences?',
        answer: 'Yes, Airbnb gift cards can be used for Airbnb Experiences, which include activities, tours, and classes hosted by local experts.'
      },
      {
        question: 'What happens if my booking costs more than my gift card balance?',
        answer: 'If your booking costs more than your gift card balance, you can pay the difference with another payment method like a credit card or PayPal.'
      }
    ],
    createdAt: '2023-02-10T00:00:00Z'
  },
  {
    id: 'hotels',
    name: 'Hotels.com',
    slug: 'hotels-com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hotels.com_logo.svg/1200px-Hotels.com_logo.svg.png',
    description: 'Book hotels, resorts, and vacation rentals',
    detailedDescription: 'Hotels.com gift cards can be used to book accommodations at hundreds of thousands of properties worldwide. From budget-friendly hotels to luxury resorts, Hotels.com offers a wide range of options for every traveler. Hotels.com gift cards never expire and can be used for multiple bookings.',
    category: categories.find(c => c.id === 'travel')!,
    priceRange: {
      min: 25,
      max: 500,
      currency: '$'
    },
    denominations: [25, 50, 100, 200, 500],
    cashback: 1.5,
    featured: false,
    popular: false,
    new: true,
    rating: 4.5,
    popularity: 80,
    currencies: ['btc', 'btc-ln'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hotels.com_logo.svg/1200px-Hotels.com_logo.svg.png',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Hotels.com gift cards can only be redeemed on Hotels.com or the Hotels.com app. Gift cards are not redeemable for cash except where required by law. Hotels.com is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain in your Hotels.com account.',
    redemptionInstructions: 'To redeem: 1) Go to Hotels.com. 2) Select a hotel and proceed to checkout. 3) On the payment page, select "Gift Card" as the payment method. 4) Enter the gift card number and PIN. 5) The gift card balance will be applied to your booking.',
    regions: ['global', 'us', 'eu', 'uk', 'asia', 'australia', 'canada'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I earn Hotels.com Rewards nights with my gift card?',
        answer: 'Yes, bookings made with Hotels.com gift cards are eligible for Hotels.com Rewards, which gives you one free night for every 10 nights you stay.'
      },
      {
        question: 'Can I use my Hotels.com gift card for taxes and fees?',
        answer: 'Yes, Hotels.com gift cards can be used to pay for the entire booking, including taxes and fees. If your gift card balance doesn\'t cover the full amount, you can pay the difference with another payment method.'
      }
    ],
    createdAt: '2023-04-01T00:00:00Z'
  },
  {
    id: 'uber',
    name: 'Uber',
    slug: 'uber',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png',
    description: 'Ridesharing and transportation services',
    detailedDescription: 'Uber gift cards can be used for rides and Uber Eats food delivery. Get around town or order food from your favorite restaurants with the convenience of Uber. Uber gift cards never expire and can be used for multiple rides or orders.',
    category: categories.find(c => c.id === 'travel')!,
    priceRange: {
      min: 25,
      max: 200,
      currency: '$'
    },
    denominations: [25, 50, 100, 200],
    cashback: 3,
    featured: true,
    popular: true,
    new: false,
    rating: 4.6,
    popularity: 90,
    currencies: ['btc', 'btc-ln', 'xmr'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png',
      'https://images.unsplash.com/photo-1581262177000-8139a463e531?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    terms: 'Uber gift cards can be used for Uber rides and Uber Eats orders. Gift cards are not redeemable for cash except where required by law. Uber is not responsible for lost or stolen cards or unauthorized use. Unused balance will remain in your Uber account.',
    redemptionInstructions: 'To redeem: 1) Open the Uber app. 2) Tap on Account. 3) Tap on Wallet. 4) Tap on "Add Payment Method" and select "Gift Card". 5) Enter the gift card code. The balance will be automatically applied to your next rides or orders until depleted.',
    regions: ['global', 'us', 'eu', 'uk', 'asia', 'australia', 'canada'],
    faqs: [
      ...commonFAQs.general,
      ...commonFAQs.usage,
      {
        question: 'Can I use my Uber gift card for Uber Eats?',
        answer: 'Yes, Uber gift cards work interchangeably between Uber rides and Uber Eats. The same gift card balance can be used for both services.'
      },
      {
        question: 'Do Uber gift cards work internationally?',
        answer: 'Uber gift cards are typically region-specific. A gift card purchased for use in the US may not work in other countries. Check the card details for regional restrictions.'
      }
    ],
    createdAt: '2023-01-15T00:00:00Z'
  }
];

// Helper functions to retrieve and filter gift cards

// Get a gift card by its ID
export const getGiftCardById = (id: string): GiftCard | undefined => {
  return giftCards.find(card => card.id === id);
};

// Get gift cards by category
export const getGiftCardsByCategory = (categoryId: string): GiftCard[] => {
  return giftCards.filter(card => card.category.id === categoryId);
};

// Get a category by its slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

// Get featured gift cards
export const getFeaturedGiftCards = (): GiftCard[] => {
  return giftCards.filter(card => card.featured).sort((a, b) => b.popularity - a.popularity);
};

// Get popular gift cards
export const getPopularGiftCards = (): GiftCard[] => {
  return giftCards.filter(card => card.popular).sort((a, b) => b.popularity - a.popularity);
};

// Get new gift cards
export const getNewGiftCards = (): GiftCard[] => {
  return giftCards.filter(card => card.new).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

// Get gift cards by region
export const getGiftCardsByRegion = (region: string): GiftCard[] => {
  return giftCards.filter(card => card.regions.includes(region));
};

// Get gift cards that accept a specific currency
export const getGiftCardsByCurrency = (currency: string): GiftCard[] => {
  return giftCards.filter(card => card.currencies.includes(currency));
};

// Get gift cards with cashback offers
export const getGiftCardsWithCashback = (): GiftCard[] => {
  return giftCards.filter(card => card.cashback > 0).sort((a, b) => b.cashback - a.cashback);
};

// Search gift cards by name or description
export const searchGiftCards = (query: string): GiftCard[] => {
  const lowerCaseQuery = query.toLowerCase();
  return giftCards.filter(card => 
    card.name.toLowerCase().includes(lowerCaseQuery) || 
    card.description.toLowerCase().includes(lowerCaseQuery) ||
    card.detailedDescription.toLowerCase().includes(lowerCaseQuery)
  );
};
