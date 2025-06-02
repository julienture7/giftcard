import React, { useState, useEffect } from 'react';
import App from '../App';
import GiftCardDetail from './GiftCardDetail';
import Checkout from './Checkout';
import { getGiftCardById } from '../data/giftCardData';

// Simple router for the application
const Routes: React.FC = () => {
  // This is a simple client-side router
  // In a real application, you would use a proper router like react-router-dom
  const [route, setRoute] = useState<string>('home');
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
      } else if (path.startsWith('/gift-cards/')) {
        const id = path.replace('/gift-cards/', '');
        setRoute('gift-card-detail');
        setParams({ ...paramsObj, id });
      } else if (path === '/checkout') {
        setRoute('checkout');
      } else {
        setRoute('home'); // Default route
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
    } else if (path.startsWith('/gift-cards/')) {
      const id = path.replace('/gift-cards/', '');
      setRoute('gift-card-detail');
      setParams({ ...newParams, id });
    } else if (path === '/checkout') {
      setRoute('checkout');
    } else {
      setRoute('home');
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

  // Render the appropriate component based on the current route
  switch (route) {
    case 'gift-card-detail':
      const giftCard = getGiftCardById(params.id);
      if (!giftCard) {
        return <div className="p-8 text-center text-white">Gift card not found</div>;
      }

      return (
        <div className="container mx-auto px-4 py-8">
          <GiftCardDetail
            giftCard={giftCard}
            onPurchase={(amount) => handlePurchase(giftCard.id, amount)}
          />
        </div>
      );

    case 'checkout':
      if (!checkoutData) {
        navigate('/');
        return null;
      }

      const checkoutGiftCard = getGiftCardById(checkoutData.giftCardId);
      if (!checkoutGiftCard) {
        navigate('/');
        return null;
      }

      return (
        <div className="container mx-auto px-4 py-8">
          <Checkout
            giftCard={checkoutGiftCard}
            amount={checkoutData.amount}
            onComplete={handleCheckoutComplete}
            onCancel={handleCheckoutCancel}
          />
        </div>
      );

    case 'home':
    default:
      return <App />;
  }
};

export default Routes;
