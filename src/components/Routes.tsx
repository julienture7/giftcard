import React, { useState, useEffect } from 'react';
import App from '../App';
import GiftCardDetail from './GiftCardDetail';
import Checkout from './Checkout';
import { getGiftCardById, getCategoryBySlug, getGiftCardsByCategory } from '../data/giftCardData';
import ServicesList from './ServicesList';
import FaqPage from './FaqPage';
import AboutPage from './AboutPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import CategoryPage from './CategoryPage';
import Header from './Header';
import Footer from './Footer';

// Route types for better type safety
type RouteType = 
  | 'home' 
  | 'gift-card-detail' 
  | 'checkout' 
  | 'category' 
  | 'services'
  | 'faq'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'contact'
  | 'help'
  | 'refund-policy'
  | 'security'
  | 'not-found';

// Simple router for the application
const Routes: React.FC = () => {
  // This is a simple client-side router
  // In a real application, you would use a proper router like react-router-dom
  const [route, setRoute] = useState<RouteType>('home');
  const [params, setParams] = useState<Record<string, string>>({});
  const [checkoutData, setCheckoutData] = useState<{ giftCardId: string; amount: number } | null>(null);

  useEffect(() => {
    // Parse URL for routing
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);

      const paramsObj: Record<string, string> = {};
      searchParams.forEach((value, key) => {
        paramsObj[key] = value;
      });

      setParams(paramsObj);

      if (path === '/' || path === '') {
        setRoute('home');
      } else if (path.startsWith('/gift-cards/') && path !== '/gift-cards/') {
        const id = path.replace('/gift-cards/', '');
        setRoute('gift-card-detail');
        setParams({ ...paramsObj, id });
      } else if (path === '/checkout') {
        setRoute('checkout');
      } else if (path === '/services') {
        setRoute('services');
      } else if (path.startsWith('/category/')) {
        const slug = path.replace('/category/', '');
        setRoute('category');
        setParams({ ...paramsObj, slug });
      } else if (path === '/faq') {
        setRoute('faq');
      } else if (path === '/about') {
        setRoute('about');
      } else if (path === '/privacy') {
        setRoute('privacy');
      } else if (path === '/terms') {
        setRoute('terms');
      } else if (path === '/contact') {
        setRoute('contact');
      } else if (path === '/help') {
        setRoute('help');
      } else if (path === '/refund-policy') {
        setRoute('refund-policy');
      } else if (path === '/security') {
        setRoute('security');
      } else {
        setRoute('not-found');
      }
    };

    // Initialize route based on current URL
    handleRouteChange();

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Navigate to a new route
  const navigate = (path: string, newParams: Record<string, string> = {}) => {
    let url = path;

    // Add query parameters if any
    if (Object.keys(newParams).length > 0) {
      const searchParams = new URLSearchParams();
      Object.entries(newParams).forEach(([key, value]) => {
        searchParams.append(key, value);
      });
      url += `?${searchParams.toString()}`;
    }

    // Update browser history
    window.history.pushState({}, '', url);

    // Update current route and params
    if (path === '/' || path === '') {
      setRoute('home');
      setParams(newParams);
    } else if (path.startsWith('/gift-cards/') && path !== '/gift-cards/') {
      const id = path.replace('/gift-cards/', '');
      setRoute('gift-card-detail');
      setParams({ ...newParams, id });
    } else if (path === '/checkout') {
      setRoute('checkout');
      setParams(newParams);
    } else if (path === '/services') {
      setRoute('services');
      setParams(newParams);
    } else if (path.startsWith('/category/')) {
      const slug = path.replace('/category/', '');
      setRoute('category');
      setParams({ ...newParams, slug });
    } else if (path === '/faq') {
      setRoute('faq');
      setParams(newParams);
    } else if (path === '/about') {
      setRoute('about');
      setParams(newParams);
    } else if (path === '/privacy') {
      setRoute('privacy');
      setParams(newParams);
    } else if (path === '/terms') {
      setRoute('terms');
      setParams(newParams);
    } else if (path === '/contact') {
      setRoute('contact');
      setParams(newParams);
    } else if (path === '/help') {
      setRoute('help');
      setParams(newParams);
    } else if (path === '/refund-policy') {
      setRoute('refund-policy');
      setParams(newParams);
    } else if (path === '/security') {
      setRoute('security');
      setParams(newParams);
    } else {
      setRoute('not-found');
      setParams(newParams);
    }
  };

  // Handle purchase action from gift card detail page
  const handlePurchase = (giftCardId: string, amount: number) => {
    setCheckoutData({ giftCardId, amount });
    navigate('/checkout');
  };

  // Handle checkout completion
  const handleCheckoutComplete = () => {
    navigate('/');
    // In a real app, you might show an order confirmation page
    alert('Purchase successful! Your gift card has been delivered.');
  };

  // Handle checkout cancellation
  const handleCheckoutCancel = () => {
    navigate('/');
  };

  // Common layout wrapper for secondary pages
  const SecondaryPageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
      {children}
    </div>
  );

  // 404 Not Found Page
  const NotFoundPage = () => (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-day-300 mb-8">The page you're looking for doesn't exist.</p>
      <button 
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium"
      >
        Go Home
      </button>
    </div>
  );

  // Wrap the current route component with Header and Footer
  const renderRouteWithLayout = () => {
    let content;

    // Render the appropriate component based on the current route
    switch (route) {
      case 'gift-card-detail': {
        const giftCard = getGiftCardById(params.id);
        if (!giftCard) {
          content = <NotFoundPage />;
          break;
        }

        content = (
          <div className="container mx-auto px-4 py-8">
            <GiftCardDetail
              giftCard={giftCard}
              onPurchase={(amount) => handlePurchase(giftCard.id, amount)}
            />
          </div>
        );
        break;
      }

      case 'checkout': {
        if (!checkoutData) {
          navigate('/');
          return null;
        }

        const checkoutGiftCard = getGiftCardById(checkoutData.giftCardId);
        if (!checkoutGiftCard) {
          navigate('/');
          return null;
        }

        content = (
          <div className="container mx-auto px-4 py-8">
            <Checkout
              giftCard={checkoutGiftCard}
              amount={checkoutData.amount}
              onComplete={handleCheckoutComplete}
              onCancel={handleCheckoutCancel}
            />
          </div>
        );
        break;
      }

      case 'category': {
        content = <CategoryPage slug={params.slug} />;
        break;
      }

      case 'services':
        content = (
          <SecondaryPageLayout title="Privacy Services">
            <ServicesList />
          </SecondaryPageLayout>
        );
        break;

      case 'faq':
        content = <FaqPage />;
        break;

      case 'about':
        content = <AboutPage />;
        break;

      case 'privacy':
        content = <PrivacyPolicyPage />;
        break;

      case 'terms':
        content = (
          <SecondaryPageLayout title="Terms of Service">
            <div className="text-day-300">
              <p>Terms and conditions for using our gift card service.</p>
              <p className="mt-4">This page is under construction. Please check back soon for our complete terms of service.</p>
            </div>
          </SecondaryPageLayout>
        );
        break;

      case 'contact':
        content = (
          <SecondaryPageLayout title="Contact Us">
            <div className="text-day-300">
              <p>Get in touch with our team for support or inquiries.</p>
              <div className="mt-8 max-w-2xl mx-auto">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-day-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-night-800 border border-night-600 rounded-lg text-day-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-day-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-night-800 border border-night-600 rounded-lg text-day-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-day-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 bg-night-800 border border-night-600 rounded-lg text-day-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
                      onClick={() => alert('Message sent! We will get back to you soon.')}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </SecondaryPageLayout>
        );
        break;

      case 'help':
        content = (
          <SecondaryPageLayout title="Help Center">
            <div className="text-day-300">
              <p>Find answers to common questions and get support for your gift card purchases.</p>
              <p className="mt-4">For detailed information, please visit our <a 
                href="/faq" 
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/faq');
                }}
                className="text-green-500 hover:text-green-400"
              >FAQ page</a>.</p>
            </div>
          </SecondaryPageLayout>
        );
        break;

      case 'refund-policy':
        content = (
          <SecondaryPageLayout title="Refund Policy">
            <div className="text-day-300">
              <p>Our refund policy for gift card purchases.</p>
              <div className="mt-6 space-y-4">
                <p>Due to the digital nature of gift cards, all sales are final once the gift card code has been revealed. We cannot offer refunds for delivered gift cards.</p>
                <p>If you encounter any issues with your gift card, please contact our support team immediately with your order details. We'll provide a replacement or refund if the gift card is defective or not working as expected.</p>
                <p>For orders where payment was made but the gift card was not delivered, we will process a full refund or deliver the gift card, based on your preference.</p>
              </div>
            </div>
          </SecondaryPageLayout>
        );
        break;

      case 'security':
        content = (
          <SecondaryPageLayout title="Security">
            <div className="text-day-300">
              <p>Learn about our security measures and how we protect your data.</p>
              <div className="mt-6 space-y-4">
                <p>At KYCnot.me Gift Cards, security is a top priority. We implement robust measures to protect your information and transactions.</p>
                <p>All data is encrypted both in transit (using TLS/SSL) and at rest using strong encryption standards. Our systems are hosted on secure, privacy-respecting infrastructure with strict access controls and regular security audits.</p>
                <p>We follow a minimal data retention policy, purging transaction data after 90 days, keeping only what's necessary for legal compliance and customer support.</p>
              </div>
            </div>
          </SecondaryPageLayout>
        );
        break;

      case 'not-found':
        content = <NotFoundPage />;
        break;

      case 'home':
      default:
        content = <App />;
        break;
    }

    // Wrap with header and footer
    return (
      <div className="flex min-h-dvh flex-col bg-night-700 text-day-300">
        <Header />
        <main className="flex-grow">
          {content}
        </main>
        <Footer />
      </div>
    );
  };

  return renderRouteWithLayout();
};

export default Routes;
