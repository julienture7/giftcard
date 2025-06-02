import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, ChevronUp, Plus, Mail, MessageSquare, Send } from 'lucide-react';

// FAQ data structure
interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  faqs: FAQ[];
}

const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<Record<string, boolean>>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [filteredCategories, setFilteredCategories] = useState<FAQCategory[]>([]);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Reference to search input for focus
  const searchInputRef = useRef<HTMLInputElement>(null);

  // FAQ Categories with their respective questions and answers
  const faqCategories: FAQCategory[] = [
    {
      id: 'general',
      title: 'General Questions',
      icon: <MessageSquare className="h-5 w-5" />,
      description: 'Common questions about our platform and services',
      faqs: [
        {
          id: 'general-1',
          question: 'What is KYCnot.me Gift Cards?',
          answer: 'KYCnot.me Gift Cards is a privacy-focused platform that allows you to purchase gift cards from popular retailers using cryptocurrency without requiring any personal identification or KYC (Know Your Customer) verification. We believe in financial privacy and providing services that respect your right to transact without surveillance.'
        },
        {
          id: 'general-2',
          question: 'How does KYCnot.me Gift Cards work?',
          answer: 'Our platform allows you to browse and select gift cards from various retailers. You can purchase these cards using Bitcoin, Bitcoin Lightning Network, or Monero. Once your payment is confirmed, the gift card code is delivered instantly to you. No account creation or personal information is required to make a purchase.'
        },
        {
          id: 'general-3',
          question: 'Do I need to create an account to use KYCnot.me Gift Cards?',
          answer: 'No, account creation is optional. You can browse and purchase gift cards without creating an account or providing any personal information. However, creating an account allows you to track your order history and save favorite gift cards for quicker access in the future.'
        },
        {
          id: 'general-4',
          question: 'Is KYCnot.me Gift Cards legal?',
          answer: 'Yes, KYCnot.me Gift Cards operates legally. Privacy is a fundamental right, and our service complies with applicable laws while prioritizing user privacy. We purchase gift cards from legitimate sources and resell them to our customers.'
        },
        {
          id: 'general-5',
          question: 'What countries do you support?',
          answer: 'We offer gift cards that can be used globally as well as region-specific gift cards. Each gift card listing specifies the regions where it can be used. We serve customers from any location, but it\'s your responsibility to ensure the gift card you purchase can be used in your region.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments & Cryptocurrency',
      icon: <Mail className="h-5 w-5" />,
      description: 'Questions about payment methods, cryptocurrencies, and transactions',
      faqs: [
        {
          id: 'payments-1',
          question: 'What payment methods do you accept?',
          answer: 'We accept Bitcoin (BTC), Bitcoin Lightning Network (BTC-LN), and Monero (XMR). We do not accept credit cards, PayPal, bank transfers, or other traditional payment methods as these would require collecting personal information.'
        },
        {
          id: 'payments-2',
          question: 'How long do payments take to process?',
          answer: 'Bitcoin Lightning Network payments are typically confirmed within seconds. On-chain Bitcoin payments usually require 1 confirmation, which takes about 10 minutes on average. Monero payments require 10 confirmations, which typically takes about 20-30 minutes. Once the payment is confirmed, your gift card is delivered instantly.'
        },
        {
          id: 'payments-3',
          question: 'What happens if I send the wrong amount?',
          answer: 'If you send less than the required amount, your payment will be held until you complete the payment or request a refund. If you send more than the required amount, the excess will be automatically refunded to the address you provide during checkout.'
        },
        {
          id: 'payments-4',
          question: 'Do you offer cashback on purchases?',
          answer: 'Yes, many of our gift cards offer cashback in Bitcoin. The cashback percentage is displayed on each gift card listing. Cashback is sent automatically to the Bitcoin address you provide during checkout, usually within 24 hours of your purchase.'
        },
        {
          id: 'payments-5',
          question: 'Is there a minimum or maximum purchase amount?',
          answer: 'The minimum and maximum purchase amounts depend on the specific gift card and its available denominations. These limits are displayed on each gift card listing. Some gift cards also support custom amounts within a specified range.'
        }
      ]
    },
    {
      id: 'giftcards',
      title: 'Gift Cards',
      icon: <Plus className="h-5 w-5" />,
      description: 'Information about our gift card offerings and how to use them',
      faqs: [
        {
          id: 'giftcards-1',
          question: 'How quickly will I receive my gift card after purchase?',
          answer: 'Gift cards are delivered instantly after your payment is confirmed. For Bitcoin Lightning payments, this is typically within seconds. For on-chain Bitcoin and Monero payments, delivery occurs after the required number of confirmations.'
        },
        {
          id: 'giftcards-2',
          question: 'Are the gift cards digital or physical?',
          answer: 'All our gift cards are digital. You will receive the gift card code and redemption instructions via email or directly on our website after your purchase is complete. We do not offer physical gift cards as this would require shipping and collecting personal information.'
        },
        {
          id: 'giftcards-3',
          question: 'What if my gift card doesn\'t work?',
          answer: 'In the rare event that a gift card code doesn\'t work, please contact our support team immediately with your order details. We'll provide a replacement or refund. All our gift cards are purchased from legitimate sources and tested before delivery.'
        },
        {
          id: 'giftcards-4',
          question: 'Do gift cards expire?',
          answer: 'Most gift cards do not expire, but this depends on the retailer\'s policy. The expiration policy, if any, is mentioned in the gift card details page. We recommend using your gift card soon after purchase to avoid any potential issues.'
        },
        {
          id: 'giftcards-5',
          question: 'Can I resell gift cards purchased from KYCnot.me?',
          answer: 'While we cannot prevent you from reselling gift cards, we do not recommend it as it may violate the terms of service of the gift card issuer. Our service is intended for personal use, not for commercial reselling purposes.'
        }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: <Plus className="h-5 w-5" />,
      description: 'Questions about how we protect your privacy and security',
      faqs: [
        {
          id: 'privacy-1',
          question: 'What information do you collect about me?',
          answer: 'We collect minimal information. For anonymous purchases, we only collect the cryptocurrency payment details necessary to process your order. If you create an account, we store your email address and order history. We do not collect names, addresses, phone numbers, or any other personal identifying information.'
        },
        {
          id: 'privacy-2',
          question: 'Do you keep records of my purchases?',
          answer: 'We keep minimal records necessary for order fulfillment and customer support. These records are encrypted and automatically purged after 90 days. If you create an account, your order history is stored until you delete your account.'
        },
        {
          id: 'privacy-3',
          question: 'Can my purchases be traced back to me?',
          answer: 'We design our system to minimize traceability. When you pay with Bitcoin Lightning or Monero, the transaction provides strong privacy. However, the ultimate level of privacy depends on how you obtain and handle your cryptocurrency and how you access our site (e.g., using Tor or a VPN).'
        },
        {
          id: 'privacy-4',
          question: 'Do you use cookies or trackers?',
          answer: 'We use only essential cookies necessary for the functioning of our website. We do not use any third-party analytics, advertising cookies, or tracking scripts. We respect your privacy and do not track your browsing behavior.'
        },
        {
          id: 'privacy-5',
          question: 'How do you protect my data?',
          answer: 'We implement strong encryption for all data at rest and in transit. We use secure, privacy-respecting hosting providers and follow security best practices. We regularly audit our systems for vulnerabilities and maintain a minimal data retention policy.'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <Plus className="h-5 w-5" />,
      description: 'Help with common issues and problems',
      faqs: [
        {
          id: 'troubleshooting-1',
          question: 'My payment was confirmed but I didn\'t receive my gift card',
          answer: 'If your payment has been confirmed but you haven\'t received your gift card, please check your spam/junk folder if you provided an email. If you purchased without an email, check the order status page using your order ID. If you still can\'t find your gift card, please contact our support team with your order ID and transaction details.'
        },
        {
          id: 'troubleshooting-2',
          question: 'I sent a payment but it\'s not being recognized by the system',
          answer: 'Cryptocurrency transactions can sometimes take time to confirm, especially during periods of network congestion. For Bitcoin payments, please wait for at least 1 confirmation. For Monero, wait for 10 confirmations. If your payment still isn\'t recognized after the expected confirmation time, contact support with your order ID and transaction details.'
        },
        {
          id: 'troubleshooting-3',
          question: 'The gift card code doesn\'t work or shows as already redeemed',
          answer: 'If your gift card code doesn\'t work or shows as already redeemed, please contact our support team immediately. Provide your order ID, the gift card in question, and a description of the error you\'re receiving. We\'ll investigate and provide a replacement or refund if necessary.'
        },
        {
          id: 'troubleshooting-4',
          question: 'I can\'t access my account',
          answer: 'If you\'re having trouble accessing your account, try resetting your password using the "Forgot Password" link. If that doesn\'t work, make sure you\'re using the correct email address. If you\'re still having issues, contact our support team for assistance.'
        },
        {
          id: 'troubleshooting-5',
          question: 'The website is loading slowly or not at all',
          answer: 'If the website is loading slowly or not at all, try clearing your browser cache and cookies, or try a different browser. If you\'re using Tor or a VPN, try disconnecting and reconnecting to a different server. If the problem persists, it might be a temporary issue on our end. Please try again later or contact support if the issue continues.'
        }
      ]
    }
  ];

  // Initialize expanded categories
  useEffect(() => {
    const initialExpandedCategories: Record<string, boolean> = {};
    faqCategories.forEach(category => {
      initialExpandedCategories[category.id] = true; // Start with all categories expanded
    });
    setExpandedCategories(initialExpandedCategories);
    setFilteredCategories(faqCategories);
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCategories(faqCategories);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    
    // Filter categories and their FAQs based on search query
    const filtered = faqCategories.map(category => {
      const filteredFaqs = category.faqs.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      );
      
      return {
        ...category,
        faqs: filteredFaqs
      };
    }).filter(category => category.faqs.length > 0);
    
    setFilteredCategories(filtered);
    
    // Auto-expand all FAQs that match the search query
    const newExpandedFaqs: Record<string, boolean> = {};
    filtered.forEach(category => {
      category.faqs.forEach(faq => {
        newExpandedFaqs[faq.id] = true;
      });
    });
    setExpandedFaqs(newExpandedFaqs);
    
    // Auto-expand all categories that have matching FAQs
    const newExpandedCategories: Record<string, boolean> = {};
    filtered.forEach(category => {
      newExpandedCategories[category.id] = true;
    });
    setExpandedCategories(newExpandedCategories);
  }, [searchQuery]);

  // Toggle FAQ expansion
  const toggleFaq = (faqId: string) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  // Toggle category expansion
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Handle contact form input changes
  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, this would send the form data to a server
      console.log('Form submitted:', contactForm);
      setFormStatus('success');
      setContactForm({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Highlight matching text in search results
  const highlightText = (text: string) => {
    if (!searchQuery.trim()) return text;
    
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === searchQuery.toLowerCase() 
            ? <span key={i} className="bg-green-500/20 text-green-500 px-1 rounded">
                {part}
              </span> 
            : part
        )}
      </>
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Search Section */}
      <div className="mb-10">
        <div className="relative max-w-2xl mx-auto">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search frequently asked questions..."
            className="w-full px-4 py-3 pl-12 bg-night-800 border border-night-600 rounded-lg text-day-300 placeholder:text-day-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-day-500 h-5 w-5" />
          
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-day-500 hover:text-day-300"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
          )}
        </div>
        
        {searchQuery && (
          <p className="text-center mt-4 text-day-400">
            {filteredCategories.reduce((acc, category) => acc + category.faqs.length, 0)} results found for "{searchQuery}"
          </p>
        )}
      </div>

      {/* FAQ Categories */}
      {filteredCategories.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl text-day-300 mb-4">No results found</h3>
          <p className="text-day-400 mb-6">
            We couldn't find any FAQs matching your search query. Try using different keywords or browse our categories below.
          </p>
          <button
            onClick={clearSearch}
            className="px-4 py-2 bg-night-800 border border-night-600 rounded-lg text-day-300 hover:bg-night-700 transition-colors duration-200"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredCategories.map(category => (
            <div key={category.id} className="border border-night-600 rounded-lg overflow-hidden bg-night-800">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
              >
                <div className="flex items-center">
                  <span className="mr-3 text-green-500">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {highlightText(category.title)}
                    </h3>
                    <p className="text-day-400 text-sm mt-1">
                      {highlightText(category.description)}
                    </p>
                  </div>
                </div>
                <span className="text-day-300">
                  {expandedCategories[category.id] ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              
              {/* Category Content */}
              {expandedCategories[category.id] && (
                <div className="border-t border-night-600">
                  <div className="divide-y divide-night-600">
                    {category.faqs.map(faq => (
                      <div key={faq.id} className="bg-night-900">
                        {/* FAQ Question */}
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                        >
                          <h4 className="text-lg font-medium text-day-300 pr-8">
                            {highlightText(faq.question)}
                          </h4>
                          <span className="text-day-400 flex-shrink-0">
                            {expandedFaqs[faq.id] ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </span>
                        </button>
                        
                        {/* FAQ Answer */}
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            expandedFaqs[faq.id] 
                              ? 'max-h-96 opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-4 pt-0 text-day-400">
                            {highlightText(faq.answer)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Contact Us Section */}
      <div className="mt-16 border border-night-600 rounded-lg p-6 bg-night-800">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Still have questions?</h2>
          <p className="text-day-400">
            If you couldn't find the answer to your question, please feel free to contact us directly.
          </p>
        </div>
        
        <form onSubmit={handleContactSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-day-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-2 bg-night-900 border border-night-600 rounded-lg text-day-300 placeholder:text-day-600 focus:outline-none focus:ring-1 focus:ring-green-500"
                value={contactForm.name}
                onChange={handleContactInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-day-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-night-900 border border-night-600 rounded-lg text-day-300 placeholder:text-day-600 focus:outline-none focus:ring-1 focus:ring-green-500"
                value={contactForm.email}
                onChange={handleContactInputChange}
                required
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-day-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your question or message"
              rows={5}
              className="w-full px-4 py-2 bg-night-900 border border-night-600 rounded-lg text-day-300 placeholder:text-day-600 focus:outline-none focus:ring-1 focus:ring-green-500"
              value={contactForm.message}
              onChange={handleContactInputChange}
              required
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center mx-auto transition-colors duration-200 ${
                formStatus === 'submitting'
                  ? 'bg-night-600 text-day-500 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {formStatus === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
            
            {formStatus === 'success' && (
              <p className="mt-4 text-green-500">
                Thank you! Your message has been sent. We'll get back to you soon.
              </p>
            )}
            
            {formStatus === 'error' && (
              <p className="mt-4 text-red-500">
                There was an error sending your message. Please try again.
              </p>
            )}
          </div>
        </form>
        
        <div className="mt-8 text-center text-day-500 text-sm">
          <p>
            We typically respond to inquiries within 24-48 hours. For urgent matters, please include "URGENT" in your message subject.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
