import React, { useState, useEffect } from 'react';

// Logos
import { KycNotMeLogoFull, KycNotMeLogoMedium, KycNotMeLogoMobile } from './icons/Logos';

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

  const handleSplashClick = () => {
    const currentTexts = splashTexts.filter(text => text !== splashText);
    setSplashText(currentTexts[Math.floor(Math.random() * currentTexts.length)]);
  };

  return (
    <header className="bg-night-900/80 sticky inset-x-0 top-0 z-50 h-16 border-b border-zinc-800 backdrop-blur-sm">
      <nav className="container mx-auto flex h-full w-full items-stretch justify-between px-4 lg:px-8 2xl:px-12 max-w-none">
        <div className="-ml-4 flex max-w-[192px] grow-[99999] items-center">
          <a href="/" className="relative inline-flex h-full items-center pr-4 pl-4 md:pr-0">
            {logoVisible.full && <KycNotMeLogoFull className="h-6 text-green-500 transition-colors hover:text-green-400" />}
            {logoVisible.medium && <KycNotMeLogoMedium className="h-8 text-green-500 transition-colors hover:text-green-400" />}
            {logoVisible.mobile && <KycNotMeLogoMobile className="h-8 text-green-500 transition-colors hover:text-green-400" />}
          </a>
        </div>
        <div
          className="flex min-w-0 flex-1 items-center justify-center cursor-pointer"
          onClick={handleSplashClick}
          aria-hidden="true"
        >
          <span className="font-title line-clamp-2 hidden shrink text-center text-xs text-balance text-lime-500 sm:inline">
            {splashText}
          </span>
        </div>
        <div className="flex items-center">
          <a href="#" className="xs:px-3 2xs:px-2 last:xs:-mr-3 last:2xs:-mr-2 flex h-full items-center px-1 text-sm text-green-500 transition-colors last:-mr-1 hover:text-green-400">
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;