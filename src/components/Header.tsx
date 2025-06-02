import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, ChevronDown, User, ShoppingBag, LogOut, Heart } from 'lucide-react';

// Logos
import { KycNotMeLogoFull, KycNotMeLogoMedium, KycNotMeLogoMobile } from './icons/Logos';
import { categories } from '../data/giftCardData';

const splashTexts = [
  "Privacy is not a crime.", "True financial independence.", "Privacy is a human right.",
  "Cypherpunk zone ahead.", "KYC? Not me!", "Freedom through privacy.",
  "Resist surveillance.", "Anonymity is power.", "Defend your privacy.",
  "Unbank yourself.", "Banking without borders.", "Escape the panopticon.",
  "Ditch the gatekeepers.", "Own your identity.", "Financial privacy matters.",
  "Surveillance is the enemy of the soul.", "Privacy is freedom.",
  "Privacy is the freedom to try things out."
];

const Header: React.FC = () => {
  const [splashText, setSplashText] = useState("Defend your privacy.");
  const [logoVisible, setLogoVisible] = useState({ full: false, medium: false, mobile: true });
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const updateVisibleLogos = () => {
      const width = window.innerWidth;
      if (width >= 1024) { // lg
        setLogoVisible({ full: true, medium: false, mobile: false });
      } else if (width >= 640) { // sm to lg
        setLogoVisible({ full: false, medium: true, mobile: false });
      } else { // < sm
        setLogoVisible({ full: false, medium: false, mobile: true });
      }
    };
    updateVisibleLogos();
    window.addEventListener('resize', updateVisibleLogos);
    return () => window.removeEventListener('resize', updateVisibleLogos);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newSplashText = splashTexts[Math.floor(Math.random() * splashTexts.length)];
      setSplashText(newSplashText);
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setShowCategoriesDropdown(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when search bar is shown
  useEffect(() => {
    if (showSearchBar && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchBar]);

  const handleSplashClick = () => {
    const currentTexts = splashTexts.filter(text => text !== splashText);
    setSplashText(currentTexts[Math.floor(Math.random() * currentTexts.length)]);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would navigate to search results
    if (searchQuery.trim()) {
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleNavigation = (path: string) => {
    // This simulates navigation - in a real app with a router, you'd use the router's navigation
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
    
    // Close mobile menu after navigation
    setShowMobileMenu(false);
  };

  return (
    <header className="bg-night-900/95 sticky inset-x-0 top-0 z-50 border-b border-zinc-800 backdrop-blur-sm">
      <nav className="container mx-auto flex h-16 w-full items-center justify-between px-4 lg:px-8 2xl:px-12 max-w-none">
        {/* Mobile menu button */}
        <button 
          className="lg:hidden mr-2 p-2 text-day-300 hover:text-white focus:outline-none"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Toggle menu"
        >
          {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo */}
        <div className="flex items-center">
          <a 
            href="/" 
            className="relative inline-flex h-full items-center pr-4 pl-0 md:pr-0"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
          >
            {logoVisible.full && <KycNotMeLogoFull className="h-6 text-green-500 transition-colors hover:text-green-400" />}
            {logoVisible.medium && <KycNotMeLogoMedium className="h-8 text-green-500 transition-colors hover:text-green-400" />}
            {logoVisible.mobile && <KycNotMeLogoMobile className="h-8 text-green-500 transition-colors hover:text-green-400" />}
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <a 
            href="/"
            className="text-day-300 hover:text-white transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
          >
            Home
          </a>
          
          {/* Categories Dropdown */}
          <div className="relative" ref={categoriesRef}>
            <button 
              className="flex items-center text-day-300 hover:text-white transition-colors duration-200"
              onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
            >
              Categories
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showCategoriesDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showCategoriesDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-night-800 border border-night-600 rounded-lg shadow-lg py-2 z-50">
                {categories.map(category => (
                  <a
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="flex items-center px-4 py-2 text-day-300 hover:bg-night-700 hover:text-white transition-colors duration-150"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(`/category/${category.slug}`);
                      setShowCategoriesDropdown(false);
                    }}
                  >
                    <span className="mr-2 text-green-500">{category.icon}</span>
                    {category.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <a 
            href="/services"
            className="text-day-300 hover:text-white transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/services');
            }}
          >
            Services
          </a>
          
          <a 
            href="/faq"
            className="text-day-300 hover:text-white transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/faq');
            }}
          >
            FAQ
          </a>
          
          <a 
            href="/about"
            className="text-day-300 hover:text-white transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/about');
            }}
          >
            About
          </a>
        </div>

        {/* Splash Text - Center */}
        <div
          className="hidden md:flex min-w-0 flex-1 items-center justify-center cursor-pointer mx-4"
          onClick={handleSplashClick}
          aria-hidden="true"
        >
          <span className="font-title line-clamp-1 shrink text-center text-xs text-balance text-lime-500 transition-colors hover:text-lime-400">
            {splashText}
          </span>
        </div>

        {/* Right Side - Search and User */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          {showSearchBar ? (
            <form onSubmit={handleSearch} className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search gift cards..."
                className="bg-night-800 border border-night-600 rounded-lg py-1 px-3 pr-8 text-day-300 placeholder:text-day-600 focus:outline-none focus:ring-1 focus:ring-green-500 w-full md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-day-400 hover:text-white"
              >
                <Search className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="absolute right-8 top-1/2 -translate-y-1/2 text-day-400 hover:text-white"
                onClick={() => setShowSearchBar(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <button 
              className="p-2 text-day-300 hover:text-white transition-colors duration-200"
              onClick={() => setShowSearchBar(true)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          )}

          {/* User Menu */}
          <div className="relative" ref={userDropdownRef}>
            <button 
              className="p-2 text-day-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-night-800"
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              aria-label="User menu"
            >
              <User className="h-5 w-5" />
            </button>
            
            {showUserDropdown && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-night-800 border border-night-600 rounded-lg shadow-lg py-2 z-50">
                <a 
                  href="/login"
                  className="flex items-center px-4 py-2 text-day-300 hover:bg-night-700 hover:text-white transition-colors duration-150"
                  onClick={(e) => {
                    e.preventDefault();
                    // In a real app, this would navigate to login
                    alert('Login functionality would be implemented here');
                    setShowUserDropdown(false);
                  }}
                >
                  <User className="h-4 w-4 mr-2" />
                  Login / Register
                </a>
                <a 
                  href="/orders"
                  className="flex items-center px-4 py-2 text-day-300 hover:bg-night-700 hover:text-white transition-colors duration-150"
                  onClick={(e) => {
                    e.preventDefault();
                    // In a real app, this would navigate to orders
                    alert('Orders page would be implemented here');
                    setShowUserDropdown(false);
                  }}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  My Orders
                </a>
                <a 
                  href="/favorites"
                  className="flex items-center px-4 py-2 text-day-300 hover:bg-night-700 hover:text-white transition-colors duration-150"
                  onClick={(e) => {
                    e.preventDefault();
                    // In a real app, this would navigate to favorites
                    alert('Favorites page would be implemented here');
                    setShowUserDropdown(false);
                  }}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Favorites
                </a>
                <div className="border-t border-night-600 my-1"></div>
                <a 
                  href="/logout"
                  className="flex items-center px-4 py-2 text-day-300 hover:bg-night-700 hover:text-white transition-colors duration-150"
                  onClick={(e) => {
                    e.preventDefault();
                    // In a real app, this would log the user out
                    alert('Logout functionality would be implemented here');
                    setShowUserDropdown(false);
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden bg-night-800 border-b border-night-600">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <a 
              href="/"
              className="block py-2 px-3 text-day-300 hover:bg-night-700 hover:text-white rounded-lg transition-colors duration-150"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
            >
              Home
            </a>
            
            {/* Categories in mobile menu */}
            <div className="py-2 px-3">
              <button 
                className="flex items-center justify-between w-full text-day-300 hover:text-white transition-colors duration-200"
                onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
              >
                Categories
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showCategoriesDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showCategoriesDropdown && (
                <div className="mt-2 space-y-1 pl-4">
                  {categories.map(category => (
                    <a
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="flex items-center py-2 text-day-300 hover:text-white transition-colors duration-150"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(`/category/${category.slug}`);
                      }}
                    >
                      <span className="mr-2 text-green-500">{category.icon}</span>
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="/services"
              className="block py-2 px-3 text-day-300 hover:bg-night-700 hover:text-white rounded-lg transition-colors duration-150"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/services');
              }}
            >
              Services
            </a>
            
            <a 
              href="/faq"
              className="block py-2 px-3 text-day-300 hover:bg-night-700 hover:text-white rounded-lg transition-colors duration-150"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/faq');
              }}
            >
              FAQ
            </a>
            
            <a 
              href="/about"
              className="block py-2 px-3 text-day-300 hover:bg-night-700 hover:text-white rounded-lg transition-colors duration-150"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/about');
              }}
            >
              About
            </a>
            
            <div className="border-t border-night-600 my-2"></div>
            
            <a 
              href="/privacy"
              className="block py-2 px-3 text-day-300 hover:bg-night-700 hover:text-white rounded-lg transition-colors duration-150"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/privacy');
              }}
            >
              Privacy Policy
            </a>
            
            <a 
              href="/terms"
              className="block py-2 px-3 text-day-300 hover:bg-night-700 hover:text-white rounded-lg transition-colors duration-150"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/terms');
              }}
            >
              Terms of Service
            </a>
            
            <a 
              href="/contact"
              className="block py-2 px-3 text-day-300 hover:bg-night-700 hover:text-white rounded-lg transition-colors duration-150"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/contact');
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
