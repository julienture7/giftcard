import React, { useState } from 'react';
import { Send, Twitter, Github, Rss, Mail, ExternalLink } from 'lucide-react';
import { KycNotMeLogoFull } from './icons/Logos';
import { categories } from '../data/giftCardData';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@') || email.length < 5) {
      setSubscribeStatus('error');
      return;
    }
    
    // In a real app, this would send the email to a server
    console.log('Subscribing email:', email);
    setSubscribeStatus('success');
    setEmail('');
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setSubscribeStatus('idle');
    }, 5000);
  };

  const handleNavigation = (path: string) => {
    // This simulates navigation - in a real app with a router, you'd use the router's navigation
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night-900 border-t border-night-700">
      <div className="container mx-auto px-4 py-12 lg:px-8 2xl:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* Column 1: Logo & About */}
          <div className="xl:col-span-2">
            <KycNotMeLogoFull className="h-8 text-green-500 mb-4" />
            <p className="text-day-400 mb-6 max-w-md">
              Your privacy-focused destination for gift cards. Purchase your favorite brands with cryptocurrency, no KYC required.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h3 className="text-white font-medium mb-3">Subscribe to our newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 bg-night-800 border border-night-600 rounded-lg text-day-300 placeholder:text-day-600 focus:outline-none focus:ring-1 focus:ring-green-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center justify-center transition-colors duration-200"
                >
                  Subscribe <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
              
              {subscribeStatus === 'success' && (
                <p className="mt-2 text-green-500 text-sm">Thanks for subscribing!</p>
              )}
              
              {subscribeStatus === 'error' && (
                <p className="mt-2 text-red-500 text-sm">Please enter a valid email address.</p>
              )}
              
              <p className="mt-2 text-day-500 text-xs">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
          
          {/* Column 2: Gift Card Categories */}
          <div>
            <h3 className="text-white font-bold mb-4">Gift Card Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 8).map(category => (
                <li key={category.id}>
                  <a
                    href={`/category/${category.slug}`}
                    className="text-day-400 hover:text-green-500 transition-colors duration-200 flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(`/category/${category.slug}`);
                    }}
                  >
                    <span className="mr-2 text-green-600">{category.icon}</span>
                    {category.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/');
                  }}
                >
                  View All Categories
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/services');
                  }}
                >
                  Privacy Services
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/faq');
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/contact');
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://blog.kycnot.me"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Support & Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/help"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/help');
                  }}
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/privacy');
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/terms');
                  }}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/refund-policy');
                  }}
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="text-day-400 hover:text-green-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('/security');
                  }}
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-night-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-day-500 text-sm mb-4 md:mb-0">
              © {currentYear} KYCnot.me Gift Cards. All rights reserved.
              <div className="mt-1">
                <span className="text-green-600">Privacy First.</span> No KYC. No Tracking. No Compromise.
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/kycnotme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-day-400 hover:text-green-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/kycnot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-day-400 hover:text-green-500 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://blog.kycnot.me/rss"
                target="_blank"
                rel="noopener noreferrer"
                className="text-day-400 hover:text-green-500 transition-colors duration-200"
                aria-label="RSS Feed"
              >
                <Rss className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@kycnot.me"
                className="text-day-400 hover:text-green-500 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 text-day-600 text-xs text-center">
            Cryptocurrency payments processed through third-party providers. 
            We do not store private keys or cryptocurrency on our servers.
            Gift card availability and prices subject to change without notice.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
